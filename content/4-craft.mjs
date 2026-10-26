/* ══ SLIDES 36–42 · EXAM CRAFT + CLOSE ══ */

export const craft = [
  /* ── 36 · DIVIDER · PART FOUR ──────────────────────────── */
  {
    id: 'sect-craft',
    kind: 'divider',
    eyebrow: 'Part four',
    title: 'Exam craft',
    sub: 'The six minutes that decide your paper.',
    iconA: 'tick',
    iconB: 'abc',
    notes:
      '<span class="t">1 min</span>Signal the shift: everything so far was about listening; this part is about <b>the mechanics of the exam room</b>, where marks are lost for reasons that have nothing to do with English.',
  },

  /* ── 37 · THE SIX MINUTES ──────────────────────────────── */
  {
    id: 'transfer',
    label: 'EXAM CRAFT',
    title: 'Forty answers. Six minutes. Do not lose them here.',
    steps: {
      heading: 'Steps!',
      items: [
        'Transfer in blocks of five.',
        'Cover the lines below with your hand.',
        'Sweep at the end: no blanks, no doubles.',
        'Your last answer must be on line 40.',
      ],
    },
    body: `
      <div class="grid g2" style="gap:10px;margin-bottom:10px">
        <div class="timebox"><span class="tb">Time!</span> 5:00 transfer</div>
        <div class="timebox"><span class="tb">Time!</span> 1:00 final check</div>
      </div>
      <div class="note k"><b>The three silent disasters</b>
        <p style="font-size:18px;margin-top:6px"><b>Off by one.</b> All your answers are correct, but every one is written on the wrong line.</p>
        <p style="font-size:18px;margin-top:4px"><b>Double-shaded.</b> Two letters on one line.</p>
        <p style="font-size:18px;margin-top:4px"><b>Blank line.</b> A blank is worth zero for certain.</p></div>
      <div class="ans ok" style="margin-top:10px"><span class="tag">Check</span><div>Count the lines as you finish. <b>If your final answer is on line 40, your transfer is almost certainly right.</b></div></div>`,
    notes:
      '<span class="t">4 min</span>Do this physically if you can — hand out a real answer sheet and have them shade five blocks while covering the lines below with their hand. Three minutes, and it removes a whole category of loss. ' +
      'The numbers are real: the transcript shows a five-minute pause then a further one-minute pause. About nine seconds per line — <b>the risk is not time, it is mechanical error.</b> ' +
      'The count check is arithmetic they already trust: 8 + 10 + 8 + 6 + 8 = 40. Last answer on line 40 = aligned; on line 39 = a line was skipped and there is still time to find it. ' +
      'Say the unpopular thing: a blank line is a certain zero.',
  },

  /* ── 38 · MISTAKES ─────────────────────────────────────── */
  {
    id: 'mistakes',
    label: 'EXAM CRAFT',
    title: 'Eight mistakes that cost marks every year',
    steps: {
      heading: 'To do!',
      kind: 'todo',
      items: [
        'Write your two worst mistakes on your paper.',
        'Tick them off at the end of the paper.',
        'Fix one habit at a time.',
      ],
    },
    body: `
      <div class="grid g2" style="gap:9px;align-content:start">
        <div class="note k"><b>1 · Not reading the options</b><p style="font-size:17px;margin-top:3px">Listening to an unread question.</p></div>
        <div class="note k"><b>2 · Choosing what you recognise</b><p style="font-size:17px;margin-top:3px">A familiar word is bait.</p></div>
        <div class="note k"><b>3 · Missing the “but”</b><p style="font-size:17px;margin-top:3px">Everything before the pivot is the decoy.</p></div>
        <div class="note k"><b>4 · Answering from the interviewer</b><p style="font-size:17px;margin-top:3px">Right idea, wrong speaker.</p></div>
        <div class="note k"><b>5 · Re-reading everything on hearing 2</b><p style="font-size:17px;margin-top:3px">Narrow to your two candidates.</p></div>
        <div class="note k"><b>6 · Chasing a lost question</b><p style="font-size:17px;margin-top:3px">Jump to the next number.</p></div>
        <div class="note k"><b>7 · Writing words in the margin</b><p style="font-size:17px;margin-top:3px">Symbols only.</p></div>
        <div class="note k"><b>8 · Leaving a blank</b><p style="font-size:17px;margin-top:3px">A guess sometimes scores.</p></div>
      </div>`,
    notes:
      '<span class="t">3 min</span>Do not read all eight aloud. Ask instead: “put your hand up if number 3 sounds like you… number 1?… number 8?” The same three or four attract almost everybody — the losses are clustered and predictable. ' +
      'Then set the ritual: each student writes their own two worst mistakes on the front of every practice paper, and ticks them off at the end. Trivial, and it works. ' +
      'If you only fix one, fix number 1.',
  },

  /* ── 39 · FOUR WEEKS ───────────────────────────────────── */
  {
    id: 'plan4',
    label: 'FROM TODAY',
    title: 'A four-week plan',
    body: `
      <div class="grid g4" style="gap:12px;align-content:start">
        <div class="note y"><span class="lbl">WEEK 1</span><h3 style="font-size:21px;margin-top:6px">Find your pattern</h3>
          <p style="font-size:17px;margin-top:6px">One paper, then review with the transcript. Identify every trap. Start your paraphrase page.</p></div>
        <div class="note g"><span class="lbl">WEEK 2</span><h3 style="font-size:21px;margin-top:6px">Fix Ex 1 and 3</h3>
          <p style="font-size:17px;margin-top:6px">Questions 1–8 and 19–26 of two papers. Label every wrong picture.</p></div>
        <div class="note t"><span class="lbl">WEEK 3</span><h3 style="font-size:21px;margin-top:6px">Attack 2, 4 and 5</h3>
          <p style="font-size:17px;margin-top:6px">One full paper. Re-do only Exercises 2, 4, 5 with the transcript. Quote the phrase.</p></div>
        <div class="note k"><span class="lbl">WEEK 4</span><h3 style="font-size:21px;margin-top:6px">Rehearse it</h3>
          <p style="font-size:17px;margin-top:6px">Two timed papers with a real answer sheet. No new words — technique only.</p></div>
      </div>
      <div class="ans hint" style="margin-top:12px"><span class="tag">The rule</span><div><b>Never do a paper without reviewing it.</b> An hour of review is worth three papers of practice.</div></div>`,
    notes:
      '<span class="t">3 min</span>Present it as four focuses rather than four calendar weeks — adapt freely. The discipline is the rule at the bottom: <b>never do a paper without reviewing it.</b> ' +
      'Week 2 targets the cheap marks (Exercises 1 and 3, 16 marks, L1–L3 only); the milestone is Exercise 1 at 7–8 out of 8. ' +
      'Week 3 targets the 24-mark block and its discipline is the licensing quote: <b>no quote, no mark.</b> ' +
      'Week 4 is rehearsal only, including the transfer on a real answer sheet. No new vocabulary in the last week.',
  },

  /* ── 40 · SELF-CHECK ───────────────────────────────────── */
  {
    id: 'selfcheck',
    label: 'BE HONEST',
    title: 'Six things to be able to say yes to',
    sub: 'Tick only the ones that are true under exam conditions — not when you are relaxed.',
    body: `
      <div class="grid g2" style="gap:10px;align-content:start">
        <div class="note y"><b>1.</b> I read all the options <b>during the pause</b>, every time.</div>
        <div class="note y"><b>2.</b> I dash on hearing 1 and circle on hearing 2 — never the same job twice.</div>
        <div class="note g"><b>3.</b> I can identify what caught me: rejected, past plan, wrong speaker, polarity flip.</div>
        <div class="note g"><b>4.</b> In Exercise 4 I build the A–H ledger before speaker 1.</div>
        <div class="note t"><b>5.</b> In Exercise 5 I ask <em>who said it?</em> before <em>is it true?</em></div>
        <div class="note t"><b>6.</b> I never leave a blank, and I have never been off by one.</div>
      </div>
      <div class="ans hint" style="margin-top:12px"><span class="tag">Scoring</span><div><b>5–6 yes:</b> your technique is ready. &nbsp;<b>3–4:</b> pick your two weakest for three weeks. &nbsp;<b>0–2:</b> fix the routine before doing more papers.</div></div>`,
    notes:
      '<span class="t">3 min</span>Have them tick honestly in pencil and count. The scoring bands normalise the middle: most strong candidates land at 3 or 4, and that is a target list, not a failure. ' +
      'Each statement maps to a slide, so a student can self-serve: 1 → the reading-times slide; 2 → two hearings; 3 → the trap slides; 4 → the Exercise 4 ledger; 5 → Exercise 5 attribution; 6 → the transfer slide. ' +
      'The 0–2 band matters most: <b>more papers will not help. The routine has to change first.</b>',
  },

  /* ── 41 · TAKEAWAYS ────────────────────────────────────── */
  {
    id: 'takeaways',
    label: 'REMEMBER',
    title: 'Six things to remember',
    body: `
      <div class="grid g3" style="gap:11px;align-content:start">
        <div class="note y"><b>Read before you listen</b><p style="font-size:17px;margin-top:4px">The paper gives you 15, 30, 40 and 45 seconds.</p></div>
        <div class="note y"><b>Two hearings, two jobs</b><p style="font-size:17px;margin-top:4px">Hearing 1 maps it. Hearing 2 decides it.</p></div>
        <div class="note g"><b>Distrust what you recognise</b><p style="font-size:17px;margin-top:4px">The answer re-words. The trap repeats.</p></div>
        <div class="note g"><b>Hunt the pivot</b><p style="font-size:17px;margin-top:4px">but · however · actually · not · hardly.</p></div>
        <div class="note t"><b>Ask who said it</b><p style="font-size:17px;margin-top:4px">The interviewer is a trap factory.</p></div>
        <div class="note t"><b>Review with the transcript</b><p style="font-size:17px;margin-top:4px">One diagnosed paper beats three.</p></div>
      </div>
      <div class="ans hint" style="margin-top:12px"><span class="tag">Remember</span><div>Paper 2 is not mainly a test of how much English you know. It is a test of <b>how well you handle a recording you only hear twice</b>.</div></div>`,
    notes:
      '<span class="t">3 min</span>Do not re-teach this — use it as a <b>retrieval quiz</b>. Cover the slide, read out the six headings one at a time, and ask the class to recall the detail before you reveal it. ' +
      'The closing framing is genuinely liberating for a strong class: <b>you already have the English.</b> What separates a 26 from a 34 at this level is the routine. ' +
      'One sentence to leave with: <em>read before you listen, decide on the second hearing, distrust the words you recognise, and never leave a blank.</em>',
  },

  /* ── 42 · CLOSING ──────────────────────────────────────── */
  {
    id: 'thanks',
    kind: 'close',
    title: 'All the best!',
    meta: 'You already have the English. Now you have the method.<br><br>' +
          'Questions, pictures and scripts: Cambridge IGCSE English as a Second Language 0511/21, Paper 2 Listening, October/November 2025.<br>' +
          'Mark scheme: Q1 A · Q9 A · Q10 C · Q13 C · Q14 B · Q19 A · Q20 A · Q21 C · Q27 E · Q28 C · Q33 C · Q34 B.',
    notes:
      '<span class="t">2 min</span>Close on momentum, not on a summary. Three commitments only — this week, every week, until the exam — because three specific actions get done and a longer list does not. ' +
      'Provenance, for you: every question, picture, option and script comes from the real <b>0511/21 October/November 2025</b> paper. The mark scheme answers used are listed on the slide. ' +
      'Finish with: <em>you already have the English — now you have the method too.</em> Then hand out the transcript and the question paper so they can start the Week 1 task tonight.',
  },
];
