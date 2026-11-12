import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM, VirtualConsole } from 'jsdom';
import { EVENTS } from '../dist/data.js';
import { deal, groupDeal, groupKey, gameKey, moveCard, scoreOrder, sorted, yearLabel } from '../dist/core.js';

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
    readGroup: code => JSON.parse(window.localStorage.getItem(groupKey(code))),
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
    },
    change(selector, value) {
      const element = find(selector);
      assert.ok(element, `Select exists: ${selector}`);
      element.value = value;
      element.dispatchEvent(new window.Event('change', { bubbles: true }));
    },
    drag(from, to) {
      const transfer = { setData() {}, effectAllowed: '', dropEffect: '' };
      for (const [type, target] of [
        ['dragstart', find(`[data-card-index="${from}"]`)],
        ['dragover', find(`[data-card-index="${to}"]`)],
        ['drop', find(`[data-card-index="${to}"]`)]
      ]) {
        const event = new window.Event(type, { bubbles: true, cancelable: true });
        Object.defineProperty(event, 'dataTransfer', { value: transfer });
        target.dispatchEvent(event);
      }
      window.document.dispatchEvent(new window.Event('dragend', { bubbles: true }));
    }
  };
}

test('group setup rejects invalid codes and starts the complete deck without player or seat controls', async context => {
  const ui = await boot(context);
  assert.equal(ui.all('[data-players], [data-seat]').length, 0);
  for (const code of ['', '000', '101', 'abc']) {
    ui.input('#game-code', code);
    await ui.click('[data-action="start"]');
    assert.equal(ui.text('#code-error'), 'Enter a code from 001 to 100.');
    assert.equal(ui.find('#game-code').getAttribute('aria-invalid'), 'true');
    assert.equal(ui.window.document.activeElement.id, 'game-code');
    assert.equal(ui.find('.game-view'), null);
  }
  ui.input('#game-code', '7');
  await ui.click('[data-action="start"]');
  assert.deepEqual(ui.titles(), groupDeal(EVENTS, '007').map(card => card.title));
  assert.equal(ui.all('.game-card').length, EVENTS.length);
  assert.equal(ui.all('.hidden-date').length, EVENTS.length);
  assert.equal(ui.all('.card-date').length, 0);
  assert.equal(ui.all('[data-switch], [data-action="next-player"]').length, 0);
  assert.equal(ui.window.location.search, '?game=007&mode=timeline');
});

test('speaking setup retains two or three readers and five clues per selected seat', async context => {
  const ui = await boot(context, '?game=007');
  await ui.click('[data-mode="guess"]');
  await ui.click('[data-players="3"]');
  assert.equal(ui.all('[data-seat]').length, 3);
  assert.equal(ui.find('#game-code').value, '007');
  await ui.click('[data-seat="2"]');
  await ui.click('[data-action="start"]');
  assert.match(ui.text('.guess-side'), /Player 3Reads the clue/);
  assert.match(ui.text('.guess-side'), /Player 1Guesses the invention/);
  assert.equal(ui.text('.clue-text'), deal(EVENTS, '007', 3)[2][0].before);
  assert.equal(ui.all('.guess-progress span').length, 5);
  assert.equal(ui.all('[data-switch]').length, 3);
  assert.equal(ui.window.location.search, '?game=007&players=3&mode=guess');
});

test('group sorting stays editable after checks and hides dates until an explicit reveal', async context => {
  const ui = await boot(context, '?game=023&players=3');
  let expected = groupDeal(EVENTS, '023');
  await ui.click('[data-action="start"]');
  await ui.click('.card-content[data-group-clue]');
  assert.equal(ui.text('#modal-content h2'), expected[0].title);
  assert.equal(ui.find('#modal-content .date-block'), null);
  assert.deepEqual(ui.all('#modal-content .practice-block p').map(node => node.textContent), [expected[0].before, expected[0].after]);
  assert.equal(ui.find('#modal-content .historical-note'), null, 'Notes cannot leak the hidden reference date');
  await ui.click('.modal-close');
  await ui.click('[data-move="0,1"]');
  expected = moveCard(expected, 0, 1);
  assert.deepEqual(ui.titles(), expected.map(card => card.title));
  assert.deepEqual(ui.readGroup('023').order, expected.map(card => card.id));
  assert.equal(ui.window.document.activeElement.closest('.game-card').dataset.cardIndex, '1');
  await ui.click('[data-action="check"]');
  assert.equal(ui.text('.group-status strong').replace(/\s/g, ''), `${scoreOrder(expected)}/${EVENTS.length}`);
  assert.equal(ui.all('.game-card.correct').length, scoreOrder(expected));
  assert.equal(ui.all('.card-date').length, 0);
  assert.equal(ui.all('.game-card[draggable="true"]').length, EVENTS.length);
  assert.ok(ui.all('select[data-position]').every(select => !select.disabled));
  assert.equal(ui.readGroup('023').checked, true);
  await ui.click('[data-move="1,0"]');
  expected = moveCard(expected, 1, 0);
  assert.equal(ui.readGroup('023').checked, false, 'Moving clears stale position feedback');
  ui.change('[data-position="0"]', String(EVENTS.length - 1));
  expected = moveCard(expected, 0, EVENTS.length - 1);
  assert.deepEqual(ui.titles(), expected.map(card => card.title));
  assert.equal(ui.window.document.activeElement.dataset.position, String(EVENTS.length - 1));
  await ui.click('[data-action="check"]');
  ui.drag(EVENTS.length - 1, 2);
  expected = moveCard(expected, EVENTS.length - 1, 2);
  assert.deepEqual(ui.titles(), expected.map(card => card.title));
  assert.equal(ui.readGroup('023').checked, false);
  assert.equal(ui.all('.card-date').length, 0);
  await ui.click('[data-action="reveal-dates"]');
  assert.equal(ui.all('.card-date').length, EVENTS.length);
  assert.equal(ui.all('.card-content[data-detail]').length, EVENTS.length);
  await ui.click('.card-content[data-detail]');
  assert.equal(ui.text('#modal-content .date-block strong'), yearLabel(expected[0].year));
  assert.equal(ui.text('#modal-content .date-block span'), expected[0].approx);
  await ui.click('.modal-close');
  await ui.click('[data-action="reveal-dates"]');
  assert.equal(ui.all('.card-date').length, 0);
  await ui.click('[data-action="check"]');
  await ui.click('[data-action="setup"]');
  await ui.click('[data-action="start"]');
  assert.deepEqual(ui.titles(), expected.map(card => card.title));
  assert.equal(ui.readGroup('023').checked, true);
  assert.equal(ui.all('.card-date').length, 0);
  await ui.click('[data-action="solution"]');
  assert.deepEqual(ui.titles(), sorted(EVENTS).map(card => card.title));
  assert.equal(ui.all('.game-card.correct').length, EVENTS.length);
  assert.equal(ui.all('.card-date').length, EVENTS.length);
  assert.deepEqual(ui.readGroup('023'), { version: 2, order: sorted(EVENTS).map(card => card.id), checked: true, revealed: true });
  await ui.click('[data-move="0,1"]');
  assert.equal(ui.readGroup('023').checked, false);
  await ui.click('[data-action="restart"]');
  await ui.click('[data-action="confirm-restart"]');
  assert.deepEqual(ui.titles(), groupDeal(EVENTS, '023').map(card => card.title));
  assert.equal(ui.all('.card-date').length, 0);
  assert.deepEqual(ui.readGroup('023'), { version: 2, order: groupDeal(EVENTS, '023').map(card => card.id), checked: false, revealed: false });
  assert.equal(ui.all('[data-switch], [data-action="next-player"]').length, 0);
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
      assert.deepEqual(ui.all('.practice-block p').map(node => node.textContent), [card.before, card.after]);
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

test('group and speaking progress are saved independently for the same code', async context => {
  const ui = await boot(context, '?game=010&players=2');
  await ui.click('[data-action="start"]');
  await ui.click('[data-move="1,2"]');
  await ui.click('[data-action="check"]');
  const timeline = ui.readGroup('010');
  const score = ui.text('.group-status');
  await ui.click('[data-action="setup"]');
  await ui.click('[data-mode="guess"]');
  await ui.click('[data-action="start"]');
  assert.equal(ui.find('.result-score'), null);
  await ui.click('[data-action="reveal"]');
  await ui.click('[data-mark="1"]');
  assert.equal(ui.readSave('010', 2, 'guess').guess[0].index, 1);
  assert.deepEqual(ui.readGroup('010'), timeline, 'Speaking does not change the group save');
  await ui.click('[data-action="setup"]');
  await ui.click('[data-mode="timeline"]');
  await ui.click('[data-action="start"]');
  assert.equal(ui.text('.group-status'), score);
  assert.deepEqual(ui.readGroup('010'), timeline);
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
  assert.ok(ui.all('.library-card').some(card => card.dataset.detail === 'mobile'), 'An unaccented query finds El móvil');
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
