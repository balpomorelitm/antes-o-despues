# Antes o Después

Two illustrated Spanish practice games for two or three people, with English controls and instructions.

The imperial interface uses a Roman terrace background, midnight-blue panels, burgundy banners, gold frames and 29 jewel-coloured illustrations. The original background asset and the ImageGen prompt are documented in [the art direction notes](docs/ART_DIRECTION.md).

- **Put it in order:** arrange five cards from oldest to newest, then reveal dates. The first check awards one point per correctly positioned card.
- **Describe & guess:** read a Spanish clue, reveal the invention after the other player answers aloud, and record the result. Each player reads five clues.
- **100 deals:** codes 001–100 reproducibly shuffle all 29 cards. Each seat receives a separate five-card hand. Use the same code, mode and player count, with different player numbers.
- **Spanish content:** imperfect descriptions of the earlier situation, preterite descriptions of the change, one reference year and one broader time expression per event.

Play together in person, over a call, or pass one device. The code shares the deal; progress and scores are stored locally and do not sync between devices. A shareable game URL carries the code, mode and player count.

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

The deck and historical source links are in `dist/data.js`; all 29 original SVG illustrations are in `dist/art.js`. Ancient dates and broad developments use fixed teaching reference points explained on the cards and in the site’s date notes.
