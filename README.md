# ESL Answering Techniques Workshop — Paper 2: Listening (0511) · v2

The **restyled second version** of the workshop deck for Falih Junior International Academy.
The original deck (v1) is untouched and still deployed at `esl-paper2-listening`.

- **42 slides**, same order and content as v1 — nothing added, nothing removed.
- Restyled to the visual language of the supervisor's Paper 1 workshop:
  brand blue `#1155CC`, steps-yellow `#FFD966` with dashed orange `#FFAB40`,
  grey `#EEEEEE` page, pastel accents, **Fredoka** for call-outs, serif blue caps
  for the title band, flat inline SVG icons.
- Signature components: **Steps!**, **To do!**, **IMPORTANT!**, numbered badges,
  A1/A2/A3-style labels, sticky notes, definition cards, keyword legend,
  annotation key (orange keyword underline, blue clue underline, green tick,
  red cross, pencil dash), Time! call-out, thinking-face predict moment.
- **Progressive reveal**: one click reveals the next step / annotation.
  `R` reveals the rest, `→`/space advance, `←` back.
- Mobile mode + PWA, as v1.

## Editing the exam variant

One constant at the top of `build.mjs`:

```js
const VARIANT = '1';   // 0511/21 → component 2, variant 1
```

It renders on slide 1 ("October / November 2025 · Variant 1") and on the
"Exercise by exercise" divider (slide 10).

## Build & run

```bash
node build.mjs
python serve.py          # NOT python -m http.server (no Range support → audio won't seek)
```

## Contents

| Slides | |
|---|---|
| 1–4 | title, plan (3-colour cards + weighting + golden rule), numbers, four skills |
| 5–9 | divider, all five exercises, T.A.C.O. + marking instructions, two hearings, real reading times |
| 10–31 | Exercises 1–5: look → technique → real question (progressive reveal) → traps |
| 32–35 | using the transcript |
| 36–40 | exam craft: the six minutes, mistakes, four-week plan, self-check |
| 41–42 | takeaways, closing |

## Provenance

All questions, pictures and scripts: Cambridge IGCSE English as a Second
Language **0511/21, Paper 2 Listening, October/November 2025** (question paper,
mark scheme, transcript and sound file). Reproduced for internal teaching use.
`noindex` + `robots.txt` are in place; this is a shared link, not a publication.
