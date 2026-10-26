/* ══ SLIDES 1–9 · WELCOME + THE METHOD ══ */

export const open = [
  /* ── 1 · TITLE ─────────────────────────────────────────── */
  {
    id: 'title',
    kind: 'title',
    title: 'Answering Techniques Workshop',
    tagline: 'Paper 2 — Listening',
    meta: 'October / November 2025 &nbsp;·&nbsp; Variant __VAR__ &nbsp;·&nbsp; approximately 50 minutes',
    notes:
      '<span class="t">2 min</span>Welcome. Today is about technique, not new English: <b>you already know the language — we learn how to turn it into marks.</b> Everything uses the real October/November 2025 paper. ' +
      'Set the rules: pens down on the "you decide" slides, everyone commits to an answer before we check, and wrong answers are the most useful thing in the room. ' +
      'If you need to change the exam variant, edit the single <code>VARIANT</code> constant at the top of <code>build.mjs</code> — it updates here and on the "Exercise by exercise" divider.',
  },

  /* ── 2 · PLAN ──────────────────────────────────────────── */
  {
    id: 'plan',
    label: 'THE TWO HOURS',
    title: 'What we will do today',
    body: `
      <div class="cards3" style="margin-bottom:14px">
        <div class="col y"><h3>The paper</h3><p>40 questions</p><p>5 exercises</p><p>25% of the IGCSE</p></div>
        <div class="col g"><h3>The method</h3><p>One routine</p><p>Used on every question</p></div>
        <div class="col t"><h3>Your turn</h3><p>You decide, then we check the answer.</p></div>
      </div>
      <div class="grid g3" style="gap:14px;align-content:start">
        <div class="card"><span class="lbl">0510</span>
          <h3 style="font-size:22px;margin-top:7px">30% of the IGCSE</h3><p style="font-size:19px">Reading &amp; Writing 70 : Listening 30</p></div>
        <div class="card b"><span class="lbl y">0511</span>
          <h3 style="font-size:22px;margin-top:7px">25% of the IGCSE</h3><p style="font-size:19px">Reading 50 : Writing 25 : Speaking 25 — listening is 25</p></div>
        <div class="imp" style="justify-content:flex-start"><h3 style="font-size:26px">GOLDEN RULE</h3>
          <div class="steps" style="padding:10px 14px"><ul><li style="font-size:19px;margin:0">Exercise 2: the correct option <b>re-words</b> the audio. The traps <b>repeat</b> it.</li></ul></div></div>
      </div>`,
    notes:
      '<span class="t">3 min</span>Keep this to ninety seconds of talking. Three ideas: the paper is 40 questions for 25% of the IGCSE; we use <b>one routine</b> on every question; and <b>you decide first, then we check</b> — that is how the traps become visible. ' +
      'Then show the weighting. <b>0510 is 30% listening; 0511 is 25%</b> (the Count-in-Speaking route splits speaking out separately). Say clearly which one this class sits: 0511. ' +
      'Finish on the GOLDEN RULE, which previews Exercise 2: the right option almost always re-words the audio, and the traps repeat its words. We will prove it on Questions 9 and 10.',
  },

  /* ── 3 · NUMBERS ───────────────────────────────────────── */
  {
    id: 'numbers',
    label: 'PAPER 2',
    title: 'Paper 2 in numbers',
    body: `
      <div class="grid g4" style="gap:12px;margin-bottom:12px">
        <div class="card y"><h3 style="font-size:34px">40</h3><p style="font-size:19px">questions, 1 mark each</p></div>
        <div class="card g"><h3 style="font-size:34px">50</h3><p style="font-size:19px">minutes, including 6 to transfer</p></div>
        <div class="card t"><h3 style="font-size:34px">2×</h3><p style="font-size:19px">you hear every recording twice</p></div>
        <div class="card k"><h3 style="font-size:34px">25%</h3><p style="font-size:19px">of the whole IGCSE</p></div>
      </div>
      <div class="timebox" style="margin-bottom:12px"><span class="tb">Time!</span> approximately 50 minutes — including 6 minutes to transfer your answers</div>
      <div class="grid g2" style="gap:12px">
        <div class="ans ok"><span class="tag">Good news</span><div>Every answer is a <b>letter</b>. No sentences, no spelling of long words.</div></div>
        <div class="ans no"><span class="tag">The catch</span><div>You hear it <b>twice, then it is gone forever</b>. Technique wins marks here.</div></div>
      </div>
      <div class="ans two" style="margin-top:10px"><span class="tag">Weighting</span><div><b>0510 = 30%</b> &nbsp;·&nbsp; <b>0511 = 25%</b> — this class sits <b>0511</b>.</div></div>`,
    notes:
      '<span class="t">2 min</span>Make them say the numbers back. Two facts do the emotional work: <b>every answer is a letter</b> (none of the writing risk of Paper 1), and <b>you hear everything twice</b>. ' +
      'The timing comes from the paper itself: <b>approximately 50 minutes including 6 minutes to transfer</b>. Point at the Time! call-out. ' +
      'Confirm the weighting explicitly, because students mix up the two syllabuses: <b>0510 is 30% listening, 0511 is 25%</b>. This class sits 0511. ' +
      'Also tell them the paper says dictionaries are not allowed — but since every answer is a letter, they rarely need one.',
  },

  /* ── 4 · FOUR SKILLS ───────────────────────────────────── */
  {
    id: 'what-tested',
    label: '4 SKILLS',
    title: 'Four skills, from easy to hard',
    sub: 'Every question tests one of these. Knowing which one tells you what kind of answer to expect.',
    body: `
      <div class="grid g4" style="gap:12px;align-content:start">
        <div class="note y"><b>L1 · Stated facts</b><p style="margin-top:6px;font-size:19px">Times, places, numbers, names.</p><p style="margin-top:6px;font-size:18px;font-style:italic">“The train leaves at 9:15.”</p></div>
        <div class="note g"><b>L2 · Opinions</b><p style="margin-top:6px;font-size:19px">How someone feels, in opinion words.</p><p style="margin-top:6px;font-size:18px;font-style:italic">“Honestly, it was a waste of money.”</p></div>
        <div class="note t"><b>L3 · Connections</b><p style="margin-top:6px;font-size:19px">Linking two ideas: cause, effect, contrast.</p><p style="margin-top:6px;font-size:18px;font-style:italic">“Because the buses stopped, she walked.”</p></div>
        <div class="note k"><b>L4 · Implied meaning</b><p style="margin-top:6px;font-size:19px">The answer is <b>never said</b>. You work it out.</p><p style="margin-top:6px;font-size:18px;font-style:italic">“Well… I suppose the seats were comfortable.”</p></div>
      </div>
      <div class="ans hint" style="margin-top:14px"><span class="tag">Key</span><div><b>24 of the 40 marks involve L4</b> — Exercises 2, 4 and 5. Listening only for stated facts plays for about 16 marks.</div></div>`,
    notes:
      '<span class="t">4 min</span>The intellectual spine of the workshop. Do not read the notes — say each example sentence and ask which skill it tests. ' +
      'The number that changes how they listen: <b>L4 is tested in Exercises 2, 4 and 5 — 24 of the 40 marks.</b> A student hunting only stated facts caps out around 16. ' +
      'Do not overstate it: in an L4 question the answer is present, just never in the option\'s words. That is exactly why the next slides matter.',
  },

  /* ── 5 · DIVIDER · PART ONE ────────────────────────────── */
  {
    id: 'sect-method',
    kind: 'divider',
    eyebrow: 'Part one',
    title: 'The method',
    sub: 'One routine. Used on every question.',
    iconA: 'headphones',
    iconB: 'pencil',
    notes:
      '<span class="t">—</span>Section divider. Use it as a pause: recap the four skills in one breath, then move on. Nothing to teach here; do not linger.',
  },

  /* ── 6 · ALL FIVE ──────────────────────────────────────── */
  {
    id: 'map',
    label: 'ALL FIVE',
    title: 'All five exercises',
    body: `
      <table class="t" style="align-self:stretch">
        <colgroup><col style="width:84px"><col style="width:28%"><col style="width:92px"><col><col style="width:112px"></colgroup>
        <thead><tr><th class="c">Ex</th><th>What you hear</th><th class="c">Qs</th><th>What you choose</th><th class="c">Marks</th></tr></thead>
        <tbody>
          <tr><td class="n">1</td><td class="l">8 very short extracts</td><td class="c">8</td><td class="l">1 question each · <b>4 pictures</b></td><td class="c n">8</td></tr>
          <tr><td class="n">2</td><td class="l">5 short extracts</td><td class="c">10</td><td class="l"><b>2 questions</b> each · 3 options</td><td class="c n">10</td></tr>
          <tr><td class="n">3</td><td class="l">1 talk</td><td class="c">8</td><td class="l">8 sentence gaps · 3 options</td><td class="c n">8</td></tr>
          <tr><td class="n">4</td><td class="l">6 different speakers</td><td class="c">6</td><td class="l">Match to <b>8 statements</b></td><td class="c n">6</td></tr>
          <tr><td class="n">5</td><td class="l">1 interview</td><td class="c">8</td><td class="l">3 options · <b>the main speaker only</b></td><td class="c n">8</td></tr>
        </tbody>
      </table>
      <div class="grid g3" style="margin-top:12px;gap:12px">
        <div class="note y"><b>16 cheap marks</b><p style="font-size:18px;margin-top:4px">Exercises 1 and 3 — stated facts and opinions only.</p></div>
        <div class="note g"><b>24 harder marks</b><p style="font-size:18px;margin-top:4px">Exercises 2, 4 and 5 also test implied meaning.</p></div>
        <div class="note t"><b>1 mark each</b><p style="font-size:18px;margin-top:4px">So never spend longer than one question is worth.</p></div>
      </div>`,
    notes:
      '<span class="t">3 min</span>Walk down the Ex column only, then land the three notes. ' +
      '<b>Exercises 1 and 3 are the cheapest 16 marks</b> — they test L1 to L3 only. <b>Exercise 4 is the heaviest work for the fewest marks</b> — six speakers plus eight statements for 6 marks. ' +
      'And Exercise 2 gives <b>ten</b> marks for five extracts: the best value on the paper.',
  },

  /* ── 7 · T.A.C.O. ──────────────────────────────────────── */
  {
    id: 'taco',
    label: 'THE METHOD',
    title: 'T.A.C.O. — four beats, every question',
    steps: {
      heading: 'Steps!',
      items: [
        '<b>T</b> — Target: read the question and all the options.',
        '<b>A</b> — Attend: hearing 1, get the topic. Dash a possible answer.',
        '<b>C</b> — Confirm: hearing 2, decide. Which option is the trap?',
        '<b>O</b> — Output: circle one letter. Never leave a blank.',
      ],
    },
    body: `
      <div class="grid g2" style="gap:12px">
        <div class="mark-key" style="grid-column:1/-1">
          <span><span class="pencil">–</span> possible answer</span>
          <span><span class="cross">✗</span> sure it is wrong</span>
          <span><span class="tick">✓</span> the answer</span>
        </div>
        <div class="note y"><b>Put a small pencil dash (–)</b><p style="font-size:19px;margin-top:4px">next to a possible answer on hearing 1. Nothing is final yet.</p></div>
        <div class="note k"><b>Draw a cross (✗)</b><p style="font-size:19px;margin-top:4px">next to any choice you know for sure is wrong.</p></div>
        <div class="note g" style="grid-column:1/-1"><b>Then ask: which option is the trap?</b><p style="font-size:19px;margin-top:4px">The distractor is in the audio on purpose. Name it before you choose.</p></div>
      </div>
      <div class="ans two" style="margin-top:12px"><span class="tag">Why</span><div>Free marks are won at <b>T</b> — before the audio starts.</div></div>`,
    notes:
      '<span class="t">4 min</span>Make it physical. Everyone holds up a pen and shows a <b>dash</b> versus a <b>cross</b> versus a <b>circle</b>. If they cannot tell them apart on the page they will not know whether they have committed. ' +
      'The most common failure is <b>skipping T</b>: listening with unread options, hearing one familiar word, locking it in. That is how the paper is designed to catch them. ' +
      'The three instructions on this slide are the marking habits for the whole workshop — dash, cross, then hunt the trap. We reuse these symbols on every worked question.',
  },

  /* ── 8 · TWO HEARINGS ──────────────────────────────────── */
  {
    id: 'two-hearings',
    label: 'TWO HEARINGS',
    title: 'Hearing 1 and hearing 2 are different jobs',
    steps: {
      heading: 'To do!',
      kind: 'todo',
      items: [
        'Hearing 1: understand the whole recording.',
        'Put a small dash (tick ✓) by a possible answer — not a circle.',
        'Hearing 2: decide. Circle the final letter.',
        'Never re-read every option on hearing 2.',
      ],
    },
    body: `
      <table class="t tight" style="align-self:stretch">
        <colgroup><col style="width:170px"><col><col></colgroup>
        <thead><tr><th class="c"></th><th class="c">Hearing 1</th><th class="c">Hearing 2</th></tr></thead>
        <tbody>
          <tr><td class="l"><b>Your job</b></td><td class="l">Understand the <b>whole recording</b></td><td class="l"><b>Decide</b> each answer</td></tr>
          <tr><td class="l"><b>Your pen</b></td><td class="l">A small dash (tick ✓) by a <b>possible</b> answer</td><td class="l">A firm circle round the <b>final</b> letter</td></tr>
          <tr><td class="l"><b>Your eyes</b></td><td class="l">Mostly on the question paper</td><td class="l">Mostly listening</td></tr>
          <tr><td class="l"><b>Never</b></td><td class="l">Lock an answer in</td><td class="l">Re-read every option</td></tr>
        </tbody>
      </table>
      <div class="ans hint" style="margin-top:10px"><span class="tag">Listen for</span><div><b>not · never · only · already · instead · unless · but · actually · in the end</b></div></div>`,
    notes:
      '<span class="t">3 min</span>The highest-value behaviour change in the workshop. Most mid-band candidates use hearing 1 to answer and hearing 2 to check they were right — so hearing 2 does no new work. ' +
      'Teach the split: <b>hearing 1 builds the map, hearing 2 plants the flag.</b> The pen line is the physical version of that: a dash first, a circle second. ' +
      'Write the flip-words on the board: not, never, only, already, instead, unless, but, actually, in the end. In the real 2025 paper these decide Question 1, Question 6 and Question 13.',
  },

  /* ── 9 · REAL TIMES ────────────────────────────────────── */
  {
    id: 'real-times',
    label: 'READING TIME',
    title: 'The paper tells you when to read',
    steps: {
      heading: 'To do!',
      kind: 'todo',
      items: [
        'Listen for “Now look at Questions…”.',
        'Read the questions during the pause.',
        'Underline the keywords.',
        'Then look up and listen.',
      ],
    },
    body: `
      <table class="t tight" style="align-self:stretch">
        <colgroup><col style="width:104px"><col><col style="width:230px"></colgroup>
        <thead><tr><th class="c">Ex</th><th class="c">The recording says…</th><th class="c">You get</th></tr></thead>
        <tbody>
          <tr><td class="n">1</td><td class="says c">no reading pause — it starts straight away</td><td class="time">3 sec<small>before Q1</small></td></tr>
          <tr><td class="n">2</td><td class="says c"><em>“Now look at Questions 9 and 10.”</em></td><td class="time">15 sec<small>before every pair</small></td></tr>
          <tr><td class="n">3</td><td class="says c"><em>“Now look at questions 19–26.”</em></td><td class="time">40 sec</td></tr>
          <tr><td class="n">4</td><td class="says c"><em>“Now read statements A–H.”</em></td><td class="time">30 sec</td></tr>
          <tr><td class="n">5</td><td class="says c"><em>“Now look at questions 33–40.”</em></td><td class="time">45 sec</td></tr>
          <tr><td class="n">End</td><td class="says c">after the last recording — to move your answers</td><td class="time">6 min<small>5 min + 1 min</small></td></tr>
        </tbody>
      </table>
      <div class="ans hint" style="margin-top:10px"><span class="tag">Use it</span><div style="display:flex;gap:12px;align-items:center"><span style="font-size:32px;line-height:1">🤔</span><div><b>Predict the answer.</b> Remember the keywords, especially for Exercise 3: <b>task</b>.</div></div></div>`,
    notes:
      '<span class="t">3 min</span>Every time here is measured from the actual 2025 transcript, not estimated: <b>15, 40, 30 and 45 seconds</b>, and 5 + 1 minutes to transfer. ' +
      'The teaching point: <b>the exam hands you reading time and most candidates waste it.</b> Forty seconds to read eight Exercise 3 questions is about five seconds each — enough to underline keywords and predict the answer type. ' +
      'The thinking face is the predict moment. Model it out loud: "Question 19 asks about million years — so I am listening for numbers, and all three will be said."',
  },
];
