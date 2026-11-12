import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM, VirtualConsole } from 'jsdom';
import { EVENTS } from '../dist/data.js';
import { deal, gameKey, moveCard, scoreOrder, sorted, yearLabel } from '../dist/core.js';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
let instance = 0;

// These tests run the real module against a local DOM. They do not open a
// browser, load remote resources, or simulate CSS layout.
async function boot(context, query = '', saved = {}) {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', error => errors.push(error.message));
  const dom = new JSDOM(html, { url: `https://game.test/${query}`, virtualConsole });
  const { window } = dom;
  window.scrollTo = () => {};
  window.HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
  window.HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); };
  for (const [key, value] of Object.entries(saved)) window.localStorage.setItem(key, value);

  const globals = {
    window, document: window.document, history: window.history,
    location: window.location, localStorage: window.localStorage,
    navigator: window.navigator, crypto: window.crypto
  };
  const original = Object.fromEntries(Object.keys(globals).map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  for (const [key, value] of Object.entries(globals)) Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
  context.after(() => {
    dom.window.close();
    for (const [key, descriptor] of Object.entries(original)) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
    assert.deepEqual(errors, [], 'No DOM runtime errors');
  });
  await import(`${new URL('../dist/app.js', import.meta.url).href}?dom-test=${++instance}`);

  const find = selector => window.document.querySelector(selector);
  const all = selector => [...window.document.querySelectorAll(selector)];
  return {
    window, find, all,
    text: selector => find(selector)?.textContent.trim(),
    titles: () => all('.game-card h3').map(node => node.textContent.trim()),
    readSave: (code, players, mode) => JSON.parse(window.localStorage.getItem(gameKey(code, players, mode))),
    async click(selector) {
      const element = find(selector);
      assert.ok(element, `Control exists: ${selector}`);
      assert.ok(!element.disabled, `Control is enabled: ${selector}`);
      element.click();
      await Promise.resolve();
    },
    input(selector, value) {
      const element = find(selector);
      assert.ok(element, `Input exists: ${selector}`);
      element.value = value;
      element.dispatchEvent(new window.Event('input', { bubbles: true }));
    }
  };
}

test('setup rejects invalid codes, normalizes a valid code, and deals the selected third seat', async context => {
  const ui = await boot(context);
  for (const code of ['', '000', '101', 'abc']) {
    ui.input('#game-code', code);
    await ui.click('[data-action="start"]');
    assert.equal(ui.text('#code-error'), 'Enter a code from 001 to 100.');
    assert.equal(ui.find('#game-code').getAttribute('aria-invalid'), 'true');
    assert.equal(ui.window.document.activeElement.id, 'game-code');
    assert.equal(ui.find('.game-view'), null);
  }
  ui.input('#game-code', '7');
  await ui.click('[data-players="3"]');
  assert.equal(ui.all('[data-seat]').length, 3);
  assert.equal(ui.find('#game-code').value, '007');
  await ui.click('[data-seat="2"]');
  await ui.click('[data-action="start"]');
  assert.match(ui.text('.board-instruction h2'), /Player 3/);
  assert.deepEqual(ui.titles(), deal(EVENTS, '007', 3)[2].map(card => card.title));
  assert.equal(ui.all('.game-card').length, 5);
  assert.equal(ui.all('.hidden-date').length, 5);
  assert.equal(ui.all('.card-date').length, 0);
  assert.ok(ui.all('.card-content').every(button => button.disabled));
  assert.equal(ui.all('[data-switch]').length, 3);
  assert.equal(ui.window.location.search, '?game=007&players=3&mode=timeline');
});

test('timeline moves, first-check scoring, solution, save restoration, and three-player handoff work together', async context => {
  const ui = await boot(context, '?game=023&players=3');
  const hands = deal(EVENTS, '023', 3);
  await ui.click('[data-action="start"]');
  await ui.click('[data-move="0,1"]');
  const moved = moveCard(hands[0], 0, 1);
  assert.deepEqual(ui.titles(), moved.map(card => card.title));
  assert.deepEqual(ui.readSave('023', 3, 'timeline').orders[0], moved.map(card => card.id));
  assert.equal(ui.window.document.activeElement.closest('.game-card').dataset.cardIndex, '1');

  await ui.click('[data-action="check"]');
  const firstScore = scoreOrder(moved);
  assert.equal(ui.text('.result-score'), `${firstScore}/5`);
  assert.equal(ui.all('.card-date').length, 5);
  assert.equal(ui.all('[data-move]').length, 0);
  assert.equal(ui.all('.game-card[draggable="true"]').length, 0);
  await ui.click('[data-action="solution"]');
  assert.deepEqual(ui.titles(), sorted(hands[0]).map(card => card.title));
  assert.equal(ui.text('.result-score'), `${firstScore}/5`, 'The solution does not replace the first score');
  assert.equal(ui.readSave('023', 3, 'timeline').results[0], firstScore);

  await ui.click('[data-action="setup"]');
  await ui.click('[data-action="start"]');
  assert.equal(ui.text('.result-score'), `${firstScore}/5`, 'The checked score is restored');
  assert.deepEqual(ui.titles(), sorted(hands[0]).map(card => card.title));
  for (let seat = 1; seat < 3; seat++) {
    await ui.click('[data-action="next-player"]');
    assert.ok(ui.find('#modal').open);
    assert.match(ui.text('#modal-content h2'), new RegExp(`Player ${seat + 1}`));
    await ui.click(`[data-ready="${seat}"]`);
    assert.equal(ui.find('#modal').open, false);
    assert.deepEqual(ui.titles(), hands[seat].map(card => card.title));
    assert.equal(ui.all('.hidden-date').length, 5);
    await ui.click('[data-action="check"]');
  }
  await ui.click('[data-action="next-player"]');
  const expected = [firstScore, scoreOrder(hands[1]), scoreOrder(hands[2])];
  assert.deepEqual(ui.all('.score-list strong').map(node => node.textContent.replace(/\s/g, '')), expected.map(score => `${score}/5`));
  assert.ok(ui.find('#modal').open);
});

test('describe and guess hides answers, completes five clues, and credits the guesser', async context => {
  const ui = await boot(context, '?game=038&players=2&mode=guess');
  const hands = deal(EVENTS, '038', 2);
  await ui.click('[data-action="start"]');
  const marks = [true, false, true, true, false];
  for (let index = 0; index < 5; index++) {
    const card = hands[0][index];
    assert.equal(ui.text('.clue-text'), card.before);
    assert.equal(ui.find('.guess-reveal'), null);
    assert.equal(ui.find('.clue-card .date-block'), null);
    assert.equal(ui.find('.clue-card svg'), null, 'Artwork is hidden until the guess');
    await ui.click('[data-action="reveal"]');
    assert.equal(ui.text('.guess-reveal h2'), card.title);
    assert.equal(ui.text('.clue-card .date-block strong'), yearLabel(card.year));
    assert.equal(ui.text('.clue-card .date-block span'), card.approx);
    assert.equal(ui.text('.guess-reveal p'), card.after);
    if (index === 0) {
      await ui.click('.guess-reveal [data-detail]');
      assert.equal(ui.text('#modal-content h2'), card.title);
      assert.match(ui.text('.practice-block'), /BEFORE \/ IMPERFECT/);
      await ui.click('.modal-close');
    }
    await ui.click(`[data-mark="${marks[index] ? 1 : 0}"]`);
  }
  assert.match(ui.text('.complete-panel'), /Player 2 guessed 3 out of 5/);
  assert.equal(ui.all('.mini-card-row button').length, 5);
  assert.deepEqual(ui.readSave('038', 2, 'guess').guess[0], { index: 5, marks });
  await ui.click('[data-action="next-player"]');
  await ui.click('[data-ready="1"]');
  assert.match(ui.text('.guess-side'), /Player 2Reads the clue/);
  assert.match(ui.text('.guess-side'), /Player 1Guesses the invention/);
  for (let index = 0; index < 5; index++) {
    assert.equal(ui.text('.clue-text'), hands[1][index].before);
    await ui.click('[data-action="reveal"]');
    await ui.click('[data-mark="1"]');
  }
  await ui.click('[data-action="next-player"]');
  assert.deepEqual(ui.all('.score-list strong').map(node => node.textContent.replace(/\s/g, '')), ['5/5', '3/5']);
  assert.equal(ui.text('#modal-content h2'), 'Player 1 has the highest score.');
});

test('timeline and speaking progress are saved independently for the same deal', async context => {
  const ui = await boot(context, '?game=010&players=2');
  await ui.click('[data-action="start"]');
  await ui.click('[data-move="1,2"]');
  await ui.click('[data-action="check"]');
  const timeline = ui.readSave('010', 2, 'timeline');
  const score = ui.text('.result-score');
  await ui.click('[data-action="setup"]');
  await ui.click('[data-mode="guess"]');
  await ui.click('[data-action="start"]');
  assert.equal(ui.find('.result-score'), null);
  await ui.click('[data-action="reveal"]');
  await ui.click('[data-mark="1"]');
  assert.equal(ui.readSave('010', 2, 'guess').guess[0].index, 1);
  assert.deepEqual(ui.readSave('010', 2, 'timeline'), timeline, 'Speaking does not change the timeline save');
  await ui.click('[data-action="setup"]');
  await ui.click('[data-mode="timeline"]');
  await ui.click('[data-action="start"]');
  assert.equal(ui.text('.result-score'), score);
  assert.deepEqual(ui.readSave('010', 2, 'timeline'), timeline);
  await ui.click('[data-action="setup"]');
  await ui.click('[data-mode="guess"]');
  await ui.click('[data-action="start"]');
  assert.equal(ui.text('.clue-text'), deal(EVENTS, '010', 2)[0][1].before);
});

test('library search ignores accents and filters by inventor or category', async context => {
  const ui = await boot(context);
  await ui.click('[data-nav="library"]');
  assert.equal(ui.all('.library-card').length, EVENTS.length);
  assert.equal(ui.all('.library-approx').length, EVENTS.length);
  ui.input('#library-search', 'movil');
  assert.deepEqual(new Set(ui.all('.library-card').map(card => card.dataset.detail)), new Set(['mobile', 'movable']));
  await ui.click('.library-card[data-detail="mobile"]');
  const mobile = EVENTS.find(card => card.id === 'mobile');
  assert.equal(ui.text('#modal-content h2'), mobile.title);
  assert.equal(ui.text('#modal-content .date-block span'), mobile.approx);
  assert.equal(ui.find('#modal-content a').href, mobile.source);
  await ui.click('.modal-close');
  ui.input('#library-search', 'Rosalind');
  assert.deepEqual(ui.all('.library-card').map(card => card.dataset.detail), ['dna']);
  ui.input('#library-search', '');
  await ui.click('[data-category="Technology"]');
  assert.equal(ui.all('.library-card').length, EVENTS.filter(card => card.category === 'Technology').length);
  await ui.click('[data-category="All"]');
  assert.equal(ui.all('.library-card').length, EVENTS.length);
  ui.input('#library-search', 'no-such-invention');
  assert.equal(ui.all('.library-card').length, 0);
  assert.equal(ui.text('.empty-state'), 'No cards match your search.');
});

test('malformed saved progress falls back to a playable fresh deal', async context => {
  const code = '099';
  const orders = deal(EVENTS, code, 2).map(hand => hand.map(card => card.id));
  const ui = await boot(context, `?game=${code}&players=2&mode=guess`, {
    [gameKey(code, 2, 'guess')]: JSON.stringify({ version: 1, orders, results: {}, guess: [] })
  });
  await ui.click('[data-action="start"]');
  assert.equal(ui.text('.clue-text'), deal(EVENTS, code, 2)[0][0].before);
  await ui.click('[data-action="reveal"]');
  await ui.click('[data-mark="1"]');
  assert.equal(ui.readSave(code, 2, 'guess').guess[0].index, 1);
});
