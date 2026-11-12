# Antes o Después

[Play online](https://balpomorelitm.github.io/antes-o-despues/)

Two illustrated Spanish practice games, with English controls and instructions, Spanish Antes / Después labels, and short A2 practice sentences.

The imperial interface uses a Roman terrace background, midnight-blue panels, burgundy banners, gold frames and 29 jewel-coloured illustrations. The original background asset and the ImageGen prompt are documented in [the art direction notes](docs/ART_DIRECTION.md).

- **Antes o Después (cooperative):** a pair or group arranges all 29 cards from oldest to newest on one board, without turns or individual hands. Drag, move one place, or select any position. Check as often as needed; dates stay hidden until the group reveals them. The full solution is available.
- **Describe & guess:** read a Spanish clue, reveal the invention after the other player answers aloud, and record the result. Each player reads five clues.
- **100 games:** codes 001–100 reproducibly shuffle the full deck for a group. In Describe & guess, they deal five separate cards to each of 2–3 readers.
- **A2 Spanish:** short descriptions of the situation before in the imperfect and the change in the preterite. No subjunctive. Each event has a fixed reference year and a broader Spanish time expression.
- **Original class images:** the supplied inventor portraits appear alongside invention art. All four class references, including the A2 vocabulary page, are available in the app.

The cooperative timeline uses one shared screen. Describe & guess can be played in person, over a call, or by passing one device. A code shares the starting order or the clue hands; progress is stored locally and does not sync between devices. Shareable game links carry the chosen code and mode.

## Run locally

Requires Node.js. No production dependencies or build step.

```sh
npm start
```

Open http://127.0.0.1:4173. The `dist` directory is also ready for any static web host.

## Check

```sh
npm install
npm test
```

The deck and historical source links are in `dist/data.js`; the 29 invention illustrations are in `dist/art.js`, and the original portrait viewports are in `dist/photos.js`. Ancient dates and broad developments use fixed teaching reference points explained on the cards and in the site’s date notes.
