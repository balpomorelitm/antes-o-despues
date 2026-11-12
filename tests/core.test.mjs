import test from 'node:test';
import assert from 'node:assert/strict';
import { EVENTS } from '../dist/data.js';
import { illustration, illustrationCount } from '../dist/art.js';
import { normalizeCode, shuffled, deal, sorted, scoreOrder, moveCard, yearLabel, gameKey } from '../dist/core.js';

const ids = cards => cards.map(card => card.id);
const handIds = hands => hands.map(ids);

test('game codes accept the complete 001–100 range and normalize short inputs', () => {
  for (let number = 1; number <= 100; number++) {
    const code = String(number).padStart(3, '0');
    assert.equal(normalizeCode(number), code);
    assert.equal(normalizeCode(code), code);
    assert.equal(normalizeCode(` ${number} `), code);
  }
  for (const value of ['', ' ', '000', '0', '-1', '101', '999', '0001', '1.5', '1e1', '1x', null, undefined, NaN]) {
    assert.equal(normalizeCode(value), null, `Rejected invalid code ${String(value)}`);
  }
});

test('all 100 codes produce repeatable and distinct deals without duplicate cards', () => {
  const originalOrder = ids(EVENTS);
  const allDeals = new Set();
  const seen = new Set();
  for (let number = 1; number <= 100; number++) {
    const code = String(number).padStart(3, '0');
    const threePlayerHands = deal(EVENTS, code, 3);
    const twoPlayerHands = deal(EVENTS, code, 2);
    assert.deepEqual(handIds(deal(EVENTS, code, 3)), handIds(threePlayerHands), `Same deal for code ${code}`);
    assert.deepEqual(handIds(deal(EVENTS, number, 3)), handIds(threePlayerHands), `Padded and numeric codes match for ${code}`);
    assert.deepEqual(handIds(twoPlayerHands), handIds(threePlayerHands.slice(0, 2)), 'Existing seats keep the same cards with either player count');
    for (const [count, hands] of [[2, twoPlayerHands], [3, threePlayerHands]]) {
      assert.equal(hands.length, count);
      assert.ok(hands.every(hand => hand.length === 5), `Five cards per player, code ${code}`);
      assert.equal(new Set(hands.flat().map(card => card.id)).size, count * 5, `No card is shared, code ${code}`);
      assert.ok(hands.flat().every(card => EVENTS.includes(card)), 'Dealt cards belong to the deck');
    }
    for (const card of threePlayerHands.flat()) seen.add(card.id);
    allDeals.add(JSON.stringify(handIds(threePlayerHands)));
  }
  assert.equal(allDeals.size, 100, 'All 100 game codes offer a different deal');
  assert.equal(seen.size, EVENTS.length, 'Every milestone appears in at least one game');
  assert.deepEqual(ids(EVENTS), originalOrder, 'Dealing leaves the source deck untouched');
});

test('the seeded shuffle preserves its published mapping independently of deck content', () => {
  const fixture = Array.from({ length: 20 }, (_, index) => ({ id: `card-${String(index + 1).padStart(2, '0')}`, year: index }));
  assert.deepEqual(handIds(deal(fixture, '001', 3)), [
    ['card-15', 'card-13', 'card-02', 'card-17', 'card-04'],
    ['card-11', 'card-03', 'card-18', 'card-08', 'card-14'],
    ['card-06', 'card-05', 'card-19', 'card-01', 'card-10']
  ]);
  assert.deepEqual(handIds(deal(fixture, '100', 3)), [
    ['card-06', 'card-02', 'card-14', 'card-07', 'card-10'],
    ['card-17', 'card-16', 'card-12', 'card-18', 'card-04'],
    ['card-20', 'card-19', 'card-13', 'card-15', 'card-01']
  ]);
});

test('dealing rejects unsupported game settings', () => {
  for (const code of ['000', '101', 'bad']) assert.throws(() => deal(EVENTS, code, 2), /Invalid game settings/);
  for (const players of [0, 1, 4, '2', null]) assert.throws(() => deal(EVENTS, '001', players), /Invalid game settings/);
});

test('shuffling retains every card exactly once without mutating the source', () => {
  const source = Object.freeze(['a', 'b', 'c', 'd', 'e']);
  const result = shuffled(source, '015');
  assert.notEqual(result, source);
  assert.deepEqual([...result].sort(), [...source].sort());
  assert.deepEqual(source, ['a', 'b', 'c', 'd', 'e']);
  assert.deepEqual(shuffled([], '015'), []);
});

test('sorting crosses BCE and CE correctly and does not mutate a player’s hand', () => {
  const cards = Object.freeze([
    { id: 'latest', year: 1997 }, { id: 'early-ce', year: 105 },
    { id: 'earliest', year: -790000 }, { id: 'late-bce', year: -600 }
  ]);
  assert.deepEqual(ids(sorted(cards)), ['earliest', 'late-bce', 'early-ce', 'latest']);
  assert.deepEqual(ids(cards), ['latest', 'early-ce', 'earliest', 'late-bce']);
});

test('equal dates have a deterministic tie order regardless of input order', () => {
  const a = { id: 'a', year: 1900 }, b = { id: 'b', year: 1900 }, c = { id: 'c', year: 1899 };
  assert.deepEqual(ids(sorted([b, a, c])), ['c', 'a', 'b']);
  assert.deepEqual(ids(sorted([a, c, b])), ['c', 'a', 'b']);
  assert.equal(scoreOrder([c, a, b]), 3);
  assert.equal(scoreOrder([c, b, a]), 1);
});

test('scoring awards one point per correct position, not per correct adjacent pair', () => {
  const cards = [
    { id: 'a', year: -200 }, { id: 'b', year: 105 }, { id: 'c', year: 1455 },
    { id: 'd', year: 1895 }, { id: 'e', year: 1997 }
  ];
  const [a, b, c, d, e] = cards;
  assert.equal(scoreOrder(cards), 5);
  assert.equal(scoreOrder([b, a, c, d, e]), 3);
  assert.equal(scoreOrder([e, d, c, b, a]), 1);
  assert.equal(scoreOrder([b, c, d, e, a]), 0);
  assert.equal(scoreOrder([]), 0);
  assert.deepEqual(ids(cards), ['a', 'b', 'c', 'd', 'e']);
});

test('moving a card shifts the intervening cards and preserves all five cards', () => {
  const source = Object.freeze(['a', 'b', 'c', 'd', 'e']);
  assert.deepEqual(moveCard(source, 0, 4), ['b', 'c', 'd', 'e', 'a']);
  assert.deepEqual(moveCard(source, 4, 0), ['e', 'a', 'b', 'c', 'd']);
  assert.deepEqual(moveCard(source, 1, 2), ['a', 'c', 'b', 'd', 'e']);
  assert.deepEqual(moveCard(moveCard(source, 0, 4), 4, 0), [...source]);
  assert.deepEqual(moveCard(source, 2, 2), [...source]);
  for (const [from, to] of [[-1, 0], [0, -1], [5, 0], [0, 5]]) assert.deepEqual(moveCard(source, from, to), [...source]);
  assert.deepEqual(source, ['a', 'b', 'c', 'd', 'e']);
});

test('Spanish dates distinguish BCE years from CE years', () => {
  assert.match(yearLabel(-3500), /^3\.?500 a\. C\.$/);
  assert.equal(yearLabel(-600), '600 a. C.');
  assert.equal(yearLabel(105), '105');
  assert.equal(yearLabel(1953), '1953');
});

test('saved sessions are isolated by game, player count, and game mode', () => {
  assert.equal(gameKey('1', 2, 'timeline'), gameKey('001', 2, 'timeline'));
  assert.equal(new Set([
    gameKey('001', 2, 'timeline'), gameKey('002', 2, 'timeline'),
    gameKey('001', 3, 'timeline'), gameKey('001', 2, 'guess')
  ]).size, 4);
});

test('the deck has unique identifiers and fixed, unique years with Spanish learning content', () => {
  assert.ok(EVENTS.length >= 3 * 5, 'The deck supports five unique cards for all three players');
  assert.equal(new Set(EVENTS.map(event => event.id)).size, EVENTS.length);
  assert.equal(new Set(EVENTS.map(event => event.year)).size, EVENTS.length, 'No ambiguous equal-year card positions');
  assert.deepEqual(EVENTS.filter(event => !/podía[n]? /.test(event.before)).map(event => event.id), [], 'Every Spanish clue practises podía or podían');
  for (const event of EVENTS) {
    assert.ok(Number.isInteger(event.year) && event.year !== 0, `${event.id} has a single reference year`);
    for (const field of ['title', 'approx', 'person', 'category', 'before', 'after', 'note']) {
      assert.ok(typeof event[field] === 'string' && event[field].trim().length > 0, `${event.id}: ${field}`);
    }
    assert.match(event.before, /^Antes de este /, `${event.id}: Spanish clue`);
    assert.equal(new URL(event.source).protocol, 'https:');
  }
});

test('every event has its own accessible, locally drawn SVG illustration', () => {
  assert.equal(illustrationCount, EVENTS.length, 'The complete deck and the illustration collection stay in sync');
  const rendered = EVENTS.map(event => illustration(event.id));
  assert.equal(new Set(rendered).size, EVENTS.length, 'Every event has different artwork');
  for (const [index, svg] of rendered.entries()) {
    assert.match(svg, /^<svg /, EVENTS[index].id);
    assert.match(svg, /viewBox="0 0 300 200"/);
    assert.match(svg, /role="img"/);
    assert.match(svg, /aria-label="[^"]+"/);
    assert.doesNotMatch(svg, /<image\b|href="https?:/);
    assert.match(svg, /<\/svg>$/);
  }
  assert.equal(illustration('unknown-card'), '');
  assert.ok(illustration(EVENTS[0].id, 'card-art').includes('class="card-art"'));
});
