/* ══ SLIDES 10–31 · EXERCISE BY EXERCISE ══ */

export const ex = [
  /* ── 10 · DIVIDER · PART TWO ───────────────────────────── */
  {
    id: 'sect-ex',
    kind: 'divider',
    eyebrow: 'Part two',
    title: 'Exercise by exercise',
    sub: 'October / November 2025 &nbsp;·&nbsp; Variant __VAR__',
    iconA: 'picture',
    iconB: 'abc',
    notes:
      '<span class="t">—</span>Section divider. Tell them the pattern: for each exercise they see a real question, get the real reading time, and commit to an answer before we look at the audio script together. ' +
      'The variant number here comes from the same <code>VARIANT</code> constant as slide 1.',
  },

  /* ── 11 · EX1 LOOK ─────────────────────────────────────── */
  {
    id: 'ex1-look',
    label: 'EXERCISE 1',
    title: 'One picture question each: eight short extracts with 4 visual options.',
    steps: {
      heading: 'Steps!',
      items: [
        'Read the four pictures first.',
        'Name what changes from A to D.',
        'Listen for that one change.',
      ],
    },
    body: `
      <div class="grid g2" style="align-items:stretch;gap:14px;min-height:0">
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex1_instr__" alt="Exercise 1 instructions from the 2025 paper"></div>
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex1_q1__" alt="Question 1 from the 2025 paper"></div>
      </div>
      <div class="ans hint" style="margin-top:10px"><span class="tag">Careful</span><div>Exercise 1 has <b>no reading pause</b>. Skim all eight questions before the exam audio begins.</div></div>`,
    notes:
      '<span class="t">3 min</span>Both images are from the real paper. Let them look at Question 1 now; you will use it properly on the next two slides. ' +
      'The structural fact to say: <b>Exercise 1 has no reading pause</b> — only three seconds before Question 1. So skim all eight Exercise 1 questions <b>before the exam audio starts at all</b>, during the instructions.',
  },

  /* ── 12 · EX1 TECHNIQUE ────────────────────────────────── */
  {
    id: 'ex1-technique',
    label: 'EXERCISE 1',
    title: 'Four visual options of four different settings for a question.',
    steps: {
      heading: 'Steps!',
      items: [
        'Find the one thing that changes.',
        'Predict the words you will hear.',
        'Spot the two pictures that look almost the same.',
      ],
    },
    body: `
      <div class="note y"><b>Ask: what single thing changes from A to B to C to D?</b><p style="font-size:19px;margin-top:4px">In Question 1 it is <b>where the car is parked</b>. Nothing else matters.</p></div>
      <div class="grid g2" style="gap:12px">
        <div class="note g"><b>Place options</b><p style="font-size:18px;margin-top:4px">car park · station · petrol station · supermarket</p></div>
        <div class="note t"><b>Time options</b><p style="font-size:18px;margin-top:4px">o'clock · half past · quarter to · delayed · brought forward</p></div>
      </div>
      <div class="ans no" style="margin-top:10px"><span class="tag">Watch out</span><div>When two pictures look almost the same, the answer is <b>one of those two</b>. That is where the decision is.</div></div>`,
    notes:
      '<span class="t">3 min</span>The core insight: <b>four pictures are one idea at four settings.</b> Make them practise naming the axis out loud on Question 1 — the answer is "where the car is". ' +
      'Then pre-loading: if the options are places, the words <em>car park, station, petrol station, supermarket</em> should be in their head before the audio starts. Recognition beats comprehension under time pressure. ' +
      'The near-duplicate rule is reliable: if two options are almost identical, the discrimination is between them.',
  },

  /* ── 13 · Q1 DECIDE ────────────────────────────────────── */
  {
    id: 'q1-decide',
    label: 'QUESTION 1',
    title: 'Question 1 — you have 3 seconds',
    reveal: true,
    body: `
      <div class="shot fill" style="min-height:0"><img src="__IMG:ex1_q1__" alt="Question 1 from the 2025 paper"></div>
      __PLAY:ex1_q1|Play Question 1|The real recording, played twice__
      <div class="ans two rv" style="margin-top:8px"><span class="tag">The audio says</span><div>“there wasn't a single space left in the <b>pool car park</b>… I hope you didn't leave it at the <b>train station</b> like last time… It's actually <b>next to the petrol station</b>… the <b>supermarket</b>'s nearer… but I'd feel bad parking there without doing any shopping!”</div></div>`,
    notes:
      '<span class="t">4 min</span>Run it properly. Give them ten seconds, and make <b>everyone write a letter</b> before you reveal anything. Then press R. ' +
      'Most classes split between A, B and D — which is the perfect teaching moment, because <b>three of the four pictures are mentioned</b>: D train station is a past mistake; B supermarket is considered and refused; C pond is never mentioned; A petrol station is the only one that is true. ' +
      'The rule: <b>the answer is what is true at the END of the extract, not what is said during it.</b>',
  },

  /* ── 14 · Q1 AUDIO ─────────────────────────────────────── */
  {
    id: 'q1-audio',
    label: 'QUESTION 1',
    title: 'Why A is right — and how the other three are built',
    sub: 'Every card below is <b>one option of Question 1</b>. The label tells you its job.',
    body: `
      <div class="tape" style="margin-bottom:10px"><span class="who">Girl:</span> How was swimming club? &nbsp;<span class="who">Dad:</span> Great, but I'm pretty tired.
      <br><span class="who">Dad:</span> …there wasn't a single space left in the <span class="kg">pool car park</span>.
      <br><span class="who">Girl:</span> I hope you didn't leave it at the <span class="kr">train station</span> like last time.
      <br><span class="who">Dad:</span> I'll never make that mistake again! It's actually <span class="kg">next to the petrol station</span>.
      <br><span class="who">Girl:</span> …but the <span class="kr">supermarket</span>'s nearer. &nbsp;<span class="who">Dad:</span> Yes, but I'd feel bad parking there.</div>
      <div class="grid g4" style="gap:10px">
        <div class="note g"><span class="lbl g">A · ANSWER</span><p style="margin-top:6px;font-size:18px">“It's <b>actually</b> next to the petrol station.” True at the end.</p></div>
        <div class="note k"><span class="lbl r">B · TRAP</span><p style="margin-top:6px;font-size:18px">Suggested by the girl — and <b>refused</b>: “but I'd feel bad…”</p></div>
        <div class="note k"><span class="lbl r">C · TRAP</span><p style="margin-top:6px;font-size:18px"><b>Never said.</b> It exists only to fill the fourth box.</p></div>
        <div class="note k"><span class="lbl r">D · TRAP</span><p style="margin-top:6px;font-size:18px">A <b>past</b> mistake: “like last time… never again.”</p></div>
      </div>`,
    notes:
      '<span class="t">4 min</span>This slide used to be confusing because the cards were only labelled A–D with no indication of which option they referred to. Now each card carries a <b>letter label plus its role</b> — ANSWER or TRAP — and the subtitle says explicitly that each card is one option of Question 1. ' +
      'Walk the extract and name the trap as you go: B is the <b>rejected suggestion</b>, C is the <b>never-mentioned option</b>, D is the <b>past mistake</b>, and the answer is signalled by <b>“actually”</b> — one of the flip-words. ' +
      'Have them underline “actually” in their own copy. The transferable rule for the rule box: <b>in Exercise 1, the answer is true at the end of the extract.</b>',
  },

  /* ── 15 · EX1 TRAPS ────────────────────────────────────── */
  {
    id: 'ex1-traps',
    label: 'EXERCISE 1',
    title: 'Four traps, and one rule that beats them all',
    steps: {
      heading: 'To do!',
      kind: 'todo',
      items: [
        'Wait for the sentence to finish.',
        'Ask: is this still true at the end?',
        'If it was mentioned and then changed, cross it.',
      ],
    },
    body: `
      <div class="grid g2" style="gap:12px;align-content:start">
        <div class="note k"><b>1 · A number that gets cancelled</b><p style="font-size:18px;margin-top:4px">“It was going to be ten… no, half past nine.”</p></div>
        <div class="note k"><b>2 · The past plan</b><p style="font-size:18px;margin-top:4px">“I used to park there.” Old information.</p></div>
        <div class="note k"><b>3 · The mentioned picture</b><p style="font-size:18px;margin-top:4px">Shown, then rejected — or a past mistake.</p></div>
        <div class="note k"><b>4 · The near-miss pair</b><p style="font-size:18px;margin-top:4px">Two options differ by a tiny detail. Both get said.</p></div>
      </div>
      <div class="ans ok" style="margin-top:10px"><span class="tag">The rule</span><div>Ask on every item: <b>“Is this still true at the end?”</b></div></div>`,
    notes:
      '<span class="t">3 min</span>These four traps are one idea wearing different clothes, and the rule at the bottom is the whole of Exercise 1: <b>is this still true at the end?</b> ' +
      'Practise it immediately on Question 1: the supermarket was mentioned then refused, so it fails the test. ' +
      'Homework: do Questions 2 to 8 and write beside each wrong picture the reason — <em>rejected</em>, <em>past plan</em>, <em>never said</em> or <em>near-miss</em>. That labelling is worth more than the mark.',
  },

  /* ── 16 · EX2 LOOK ─────────────────────────────────────── */
  {
    id: 'ex2-look',
    label: 'EXERCISE 2',
    title: 'Five extracts. Two questions each. Best value on the paper.',
    steps: {
      heading: 'Steps!',
      items: [
        'Read both questions in the 15-second pause.',
        'Label each one F (fact) or S (stance).',
        'One recording answers both — so losing it costs two marks.',
      ],
    },
    body: `
      <div class="imp" style="margin-bottom:10px"><h3>GOLDEN RULE</h3>
        <div class="steps" style="padding:10px 14px"><ul><li style="margin:0;font-size:20px">The correct option <b>re-words</b> the audio. The traps <b>repeat</b> it.</li></ul></div></div>
      <div class="grid g2" style="align-items:stretch;gap:12px;min-height:0">
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex2_instr__" alt="Exercise 2 instructions"></div>
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex2_q9_10__" alt="Questions 9 and 10"></div>
      </div>`,
    notes:
      '<span class="t">3 min</span>Two facts: <b>10 marks for five extracts — the best value on the paper</b>; and because two questions come from one recording, one moment of inattention costs <b>two</b> marks. ' +
      'The 15-second pause before every pair is the gift here — enough to read two questions and three options each, if you are not staring at the ceiling. ' +
      'Read the GOLDEN RULE aloud. We will prove it on Questions 9 and 10.',
  },

  /* ── 17 · EX2 TECHNIQUE ────────────────────────────────── */
  {
    id: 'ex2-technique',
    label: 'EXERCISE 2',
    title: 'The two questions usually do different jobs',
    steps: {
      heading: 'Steps!',
      items: [
        'Write F or S beside each question.',
        'Hearing 1: get the fact.',
        'Hearing 2: decide the stance.',
      ],
    },
    body: `
      <div class="grid g2" style="gap:12px;align-content:start">
        <div class="note y"><span class="lbl">F · FACT</span><p style="margin-top:6px;font-size:19px"><b>How…? Where…? What kind…?</b> The answer is stated. Usually winnable on hearing 1.</p></div>
        <div class="note t"><span class="lbl">S · STANCE</span><p style="margin-top:6px;font-size:19px"><b>Why…? How does she feel…?</b> An opinion or reason — and the option is <b>worded differently</b>.</p></div>
      </div>
      <div class="ans hint" style="margin-top:10px"><span class="tag">Do this</span><div>Write <b>F</b> or <b>S</b> in the pause, so you can see at a glance which one is still unanswered.</div></div>
      <div class="ans no" style="margin-top:8px"><span class="tag">Careful</span><div>A strong habit, <b>not a rule</b>. Sometimes both are facts. Use it to aim your attention.</div></div>`,
    notes:
      '<span class="t">3 min</span>Be honest that this is a <b>tendency, not a published rule</b> — students who treat it as a rule get caught. What is reliable is the distinction: some questions are answered by a stated fact, others by a stance. ' +
      'Writing F or S next to each question turns a vague instruction into a <b>visible checklist</b> they can glance at mid-recording. ' +
      'Demonstrate on Questions 9 and 10 (next slide): Q9 "How did the boy learn…" is a fact; Q10 "What made the boy choose…" is a reason — a stance.',
  },

  /* ── 18 · Q9–10 DECIDE ─────────────────────────────────── */
  {
    id: 'q9-10-decide',
    label: 'QUESTIONS 9–10',
    title: 'Questions 9 and 10 — 15 seconds',
    reveal: true,
    body: `
      <div class="grid g2" style="align-items:stretch;gap:12px;min-height:0">
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex2_q9_10__" alt="Questions 9 and 10"></div>
        <div class="body-main" style="min-height:0">
          __PLAY:ex2_videos|Play Questions 9 and 10|The real recording, played twice__
          <div class="tape fill rv" style="overflow-y:auto">
            <span class="who">Boy:</span> There are literally <span class="kg">thousands of websites and film clips</span> on the internet, each of which contains someone <span class="kg">guiding you step-by-step</span>. <span class="kr">Attending classes</span> was <span class="kr">totally unnecessary</span>.
            <br><br>So why the environment? Unlike many students, I'd <span class="kr">only developed a passion relatively recently</span>, but I realised there were a <span class="kg">vast number of issues within a single subject</span>, so <span class="kg">each video could be different</span>. My <span class="k">marks</span> have <span class="k">improved as a result</span>.
          </div>
        </div>
      </div>`,
    notes:
      '<span class="t">5 min</span>Give them 15 seconds with a real timer, then a letter for each question. Then press R. ' +
      '<b>Q9 = A</b> (online resources) — “thousands of websites… guiding you step-by-step”. Trap <b>C the short course</b> is killed by “totally unnecessary”. ' +
      '<b>Q10 = C</b> (many different aspects) — “a vast number of issues… each video could be different”. ' +
      'The traps are the star. <b>A long-term interest</b> is contradicted by “only… relatively recently”. And <b>B is the cleverest trap so far</b>: his marks <em>did</em> improve — but as a <b>consequence</b>, not the <b>reason</b>, and nobody suggested it. That is a reversed cause-and-effect trap.',
  },

  /* ── 19 · Q13–14 DECIDE ────────────────────────────────── */
  {
    id: 'q13-14-decide',
    label: 'QUESTIONS 13–14',
    title: 'Questions 13 and 14 — another pair',
    reveal: true,
    body: `
      <div class="grid g2" style="align-items:stretch;gap:12px;min-height:0">
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex2_q13_14__" alt="Questions 13 and 14"></div>
        <div class="body-main" style="min-height:0">
          __PLAY:ex2_cafe|Play Questions 13 and 14|The real recording, played twice__
          <div class="tape fill rv" style="overflow-y:auto">
            <span class="who">Girl:</span> Have you been to that new café? &nbsp;<span class="who">Boy:</span> I felt <span class="kg">totally at home</span> there.
            <br><span class="who">Girl:</span> Like your <span class="kg">favourite relative's house</span>. But <span class="kr">more choice of things to eat</span>'d make it better.
            <br><span class="who">Boy:</span> I'm so pleased it's <span class="kr">open in the evening</span>. &nbsp;<span class="who">Girl:</span> It'd be great before school too — <span class="kr">shame it's shut then</span>.
            <br><span class="who">Girl:</span> I might ask if they have any <span class="k">jobs</span>. &nbsp;<span class="who">Boy:</span> I can imagine you <span class="kr">chatting with the customers</span>.
            <br><span class="who">Girl:</span> <span class="kr">I meant in the kitchen.</span> I'm hoping to do a <span class="kg">catering course</span> — <span class="kg">valuable experience</span>.
          </div>
        </div>
      </div>`,
    notes:
      '<span class="t">6 min</span>15 seconds, commit, then reveal. <b>Q13 = C</b> (welcoming) — “totally at home”, “favourite relative\'s house”. <b>Q14 = B</b> (career aims) — “catering course… valuable experience”. ' +
      'Three traps to name. <b>A opening hours</b> is a polarity flip — “shame it\'s shut” before school. <b>B wide variety of food</b> is a criticism, not a fact — she asks for MORE choice. ' +
      'And the best one: <b>C “she would meet lots of people”</b> comes from the <b>boy</b> and the girl corrects him — <b>“I meant in the kitchen.”</b> That is a wrong-speaker trap inside Exercise 2. ' +
      'Highlight the correction and say it: when one speaker corrects the other, the correction is the answer.',
  },

  /* ── 20 · EX2 GOLDEN RULE ──────────────────────────────── */
  {
    id: 'ex2-paraphrase',
    label: 'EXERCISE 2',
    title: 'The correct option re-words. The traps repeat.',
    steps: {
      heading: 'To do!',
      kind: 'todo',
      items: [
        'Hear an option’s exact words? Be suspicious.',
        'Find the option that says the same idea differently.',
        'Write the pair in your paraphrase list.',
      ],
    },
    body: `
      <div class="imp" style="margin-bottom:10px"><h3>IMPORTANT!</h3>
        <div class="steps" style="padding:10px 14px"><ul><li style="margin:0;font-size:20px">A familiar word is <b>bait</b>, not proof.</li></ul></div></div>
      <div class="grid g2" style="gap:12px">
        <div class="note k"><b>If an option copies the audio…</b><p style="font-size:18px;margin-top:4px">…be suspicious. Recognising your own word feels safe — that feeling is the trap.</p></div>
        <div class="note g"><b>If an option re-words it…</b><p style="font-size:18px;margin-top:4px">…it is often the answer. Four moves: <b>synonym</b> · <b>idiom</b> · <b>polarity flip</b> · <b>cause/effect flip</b>.</p></div>
      </div>
      <div class="note y" style="margin-top:10px"><b>Keep one list</b><p style="font-size:18px;margin-top:4px">Audio words on the left, option words on the right. Ten per paper.</p></div>`,
    notes:
      '<span class="t">3 min</span>Teach the emotional flip: <b>right now, recognising a word makes you feel safe. We want it to make you suspicious.</b> ' +
      'Then the caveat: for pure factual questions the answer <em>can</em> be word-for-word (Question 1\'s “petrol station” was literal). So this is a <b>check</b>, not the decision. ' +
      'The paraphrase list is the best homework in the workshop: two columns, ten entries per paper. That is a personal dictionary of the moves Cambridge actually uses.',
  },

  /* ── 21 · EX3 LOOK ─────────────────────────────────────── */
  {
    id: 'ex3-look',
    label: 'EXERCISE 3',
    title: 'One talk. Eight gaps to fill.',
    steps: {
      heading: 'Steps!',
      items: [
        'Read all eight sentences in the 40 seconds.',
        'Underline the word before each gap.',
        'The questions follow the order of the talk.',
      ],
    },
    body: `
      <div class="grid g2" style="align-items:stretch;gap:12px;min-height:0">
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex3_instr__" alt="Exercise 3 instructions"></div>
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex3_q19_21__" alt="Questions 19 to 21"></div>
      </div>
      <div class="ans ok" style="margin-top:10px"><span class="tag">Good news</span><div>Exercise 3 tests stated facts and opinions only — <b>no implied meaning</b>. The cheapest 8 marks on the paper.</div></div>`,
    notes:
      '<span class="t">3 min</span>Exercise 3 is the other cheap exercise: L1 to L3 only, <b>no L4</b>. A drilled class should bank 7 or 8 and any loss is a technique problem. ' +
      'Point at the 40 seconds in the Steps box — eight questions, about five seconds each. The questions run in the same order as the talk, so they act as a map of the monologue. ' +
      'Have them look at Questions 19 to 21 and notice: <b>every one offers three numbers.</b> That is a warning about what is coming.',
  },

  /* ── 22 · EX3 TECHNIQUE ────────────────────────────────── */
  {
    id: 'ex3-technique',
    label: 'EXERCISE 3',
    title: 'Use the sentence to cross out wrong options',
    sub: 'You can often <b>dismiss</b> an option before you hear a single word.',
    steps: {
      heading: 'Steps!',
      items: [
        'What kind of word fits the gap?',
        'Which way does the sentence point?',
        'If all three fit, only the audio can decide.',
      ],
    },
    body: `
      <div class="grid g3" style="gap:10px;align-content:start">
        <div class="note y"><b>1 · What kind of word?</b><p style="font-size:18px;margin-top:4px">“…on the site of an old ___” → a <b>singular noun</b>.</p></div>
        <div class="note g"><b>2 · Which way?</b><p style="font-size:18px;margin-top:4px">“The biggest <b>problem</b> was ___” → something <b>negative</b>.</p></div>
        <div class="note t"><b>3 · Can it decide?</b><p style="font-size:18px;margin-top:4px">“about ___ million years ago” → 200, 250, 400 all fit.</p></div>
      </div>
      <div class="tape" style="margin-top:10px;font-size:18px">
        <b>Question 19:</b> The oldest shark species living today appeared about <b>___ million years ago</b>. &nbsp; <b>A</b> 200 &nbsp; <b>B</b> 250 &nbsp; <b>C</b> 400<br>
        <span class="brk">All three are numbers, so all three fit. Do not guess —</span> write <b>#</b> in the margin and match each number to its fact.
      </div>`,
    notes:
      '<span class="t">4 min</span>One message: <b>the sentence itself can eliminate options.</b> Walk the three questions and give ten seconds after each. ' +
      'Be honest about step 3 — that is the part students get wrong. For Q19 all three numbers fit and all three are said, so the sentence cannot decide it. Students taught that this trick always works lose confidence the first time it does not. ' +
      'What IS reliable: <b>word class</b> and <b>direction</b>. And when all three fit, write <b>#</b> in the margin and match numbers to facts.',
  },

  /* ── 23 · EX3 MARGIN ───────────────────────────────────── */
  {
    id: 'ex3-margin',
    label: 'EXERCISE 3',
    title: 'In the margin: symbols, not words',
    steps: {
      heading: 'Steps!',
      items: [
        'Number your margin 1–8 before the audio.',
        'Write one symbol per question on hearing 1.',
        'Hearing 2: go back to the ones marked ? or X.',
      ],
    },
    body: `
      <div class="note y"><b>Before the audio: number your margin 1–8</b>
        <p style="font-size:30px;margin-top:8px;letter-spacing:.12em">+ &nbsp; − &nbsp; ? &nbsp; X &nbsp; → &nbsp; BUT &nbsp; #</p>
        <p style="font-size:18px;margin-top:8px">+ good news &nbsp;·&nbsp; − bad news &nbsp;·&nbsp; ? not sure &nbsp;·&nbsp; X ruled out &nbsp;·&nbsp; → cause and effect &nbsp;·&nbsp; # a number was said</p></div>
      <div class="grid g2" style="gap:10px;margin-top:10px">
        <div class="ans no"><span class="tag">Not this</span><div>Writing words or full sentences. Every word written is a second not listening.</div></div>
        <div class="ans ok"><span class="tag">This</span><div>One symbol per question. On hearing 2 you look at your symbols.</div></div>
      </div>
      <div class="ans hint" style="margin-top:8px"><span class="tag">If you fall behind</span><div>Do not go back to the question you missed. <b>Stay with the recording</b> — find the next question number and rejoin there.</div></div>`,
    notes:
      '<span class="t">3 min</span>Exercise 3 is where students run out of working memory. Eight questions and one long talk is more than you can hold, so you write a skeleton instead. ' +
      'Make them do it physically: number the margin 1 to 8 now, then copy the symbols. Physically doing it once beats describing it five times. ' +
      'The two most useful symbols are <b>#</b> (a number or price was said) and <b>BUT</b> (a contradiction is coming). ' +
      'The recovery rule is the one that saves marks: <b>do not go back; stay with the recording.</b>',
  },

  /* ── 24 · Q19–21 DECIDE ────────────────────────────────── */
  {
    id: 'q19-21-decide',
    label: 'QUESTIONS 19–21',
    title: 'Questions 19, 20, 21 — three numbers each',
    reveal: true,
    body: `
      <div class="grid g2" style="align-items:stretch;gap:12px;min-height:0">
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex3_q19_21__" alt="Questions 19 to 21"></div>
        <div class="body-main" style="min-height:0">
          __PLAY:ex3_sharks|Play the shark talk|Questions 19 to 21__
          <div class="tape fill rv" style="overflow-y:auto">
            Several types still found swimming in our oceans have done so for almost <span class="kg">200 million</span> years. Their ancestors emerged around <span class="kr">400 million</span> years ago, but most disappeared just over <span class="kr">250 million</span> years ago.
            <br><br>Before the sixteenth century the term <span class="kr">‘sea dog’</span> described the <span class="kr">large fish</span> sailors spotted. A Dutch word — <em>shurck</em> — roughly meaning <span class="kg">‘bad person’</span> is the likely source.
            <br><br>The largest group is made up of just under <span class="kr">300</span> species, so well over half of the <span class="kg">500</span> or so varieties in our seas. Of this total, around <span class="kr">450</span> live close to the shore.
          </div>
        </div>
      </div>`,
    notes:
      '<span class="t">6 min</span>The best number-training exercise in the paper: <b>all three questions offer three numbers and the audio says all three.</b> Give 40 seconds, then reveal. ' +
      '<b>Q19 = A (200)</b> — “still found swimming… almost 200 million”. Traps: 400 (the ancestors) and 250 (when most disappeared). ' +
      '<b>Q20 = A (bad person)</b> — <em>shurck</em>. Traps: sea dog (the previous word) and large fish (what sea dog described). ' +
      '<b>Q21 = C (500)</b> — “500 or so varieties”. Traps: 300 (only the largest group) and 450 (only those near the shore). ' +
      'State the rule: <b>every number belongs to something. Match the number to the question — do not just hear a number.</b>',
  },

  /* ── 25 · EX4 LOOK ─────────────────────────────────────── */
  {
    id: 'ex4-look',
    label: 'EXERCISE 4',
    title: 'Six speakers. Eight statements. Two are never used.',
    steps: {
      heading: 'Steps!',
      items: [
        'Read all eight statements in the 30 seconds.',
        'Write a 2–3 word label beside each.',
        'Match the whole idea, not one keyword.',
      ],
    },
    body: `
      <div class="imp" style="margin-bottom:10px"><h3>IMPORTANT!</h3>
        <div class="steps" style="padding:10px 14px"><ul><li style="margin:0;font-size:20px">A letter is only used <b>once</b>. Two letters are left over.</li></ul></div></div>
      <div class="grid g2" style="align-items:stretch;gap:12px;min-height:0">
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex4_statements__" alt="Exercise 4 statements A to H"></div>
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex4_grid__" alt="Exercise 4 answer grid"></div>
      </div>`,
    notes:
      '<span class="t">4 min</span>Read the instruction box with them: <b>“Use each letter only once. There are two extra letters which you do not need to use.”</b> So six speakers, eight statements, two left over. ' +
      'Then read A to H together and notice how similar some are: A, E and G are all about how the speaker felt; B, D and H are all reactions. <b>Several pairs share a topic but point in different directions</b> — that is the design.',
  },

  /* ── 26 · EX4 LEDGER ───────────────────────────────────── */
  {
    id: 'ex4-ledger',
    label: 'EXERCISE 4',
    title: 'Six speakers plus eight statements is too much to remember',
    steps: {
      heading: 'Steps!',
      items: [
        'Write A–H down the margin before speaker 1.',
        'Write the speaker number beside the letter you use.',
        'At the end: 6 used, 2 left over.',
      ],
    },
    body: `
      <div class="note y"><b>Before speaker 1 — write this in the margin</b>
        <p style="font-size:26px;margin-top:8px;letter-spacing:.14em">A ___ &nbsp; B ___ &nbsp; C ___ &nbsp; D ___</p>
        <p style="font-size:26px;letter-spacing:.14em">E ___ &nbsp; F ___ &nbsp; G ___ &nbsp; H ___</p></div>
      <div class="grid g2" style="gap:10px;margin-top:10px">
        <div class="note g"><b>When speaker 2 matches F…</b><p style="font-size:18px;margin-top:4px">write <b>2</b> beside F. Cross the letter out.</p></div>
        <div class="note k"><b>A letter is only used once.</b><p style="font-size:18px;margin-top:4px">If two speakers point at F, you have made a mistake.</p></div>
      </div>
      <div class="ans ok" style="margin-top:10px"><span class="tag">Why</span><div>The count is a <b>free error detector</b>. Most Exercise 4 mistakes are a statement used twice without noticing.</div></div>`,
    notes:
      '<span class="t">3 min</span>Make them build the ledger in their own margin now. Physically doing it once beats describing it five times. ' +
      'The core insight: Exercise 4 is a <b>working-memory problem, not an English problem</b>. Six speakers plus eight statements is fourteen items — more than anyone holds reliably. ' +
      'The count is the part students never think of: six speakers must consume six different letters, with two left over. ' +
      'And: <b>never leave a speaker blank.</b>',
  },

  /* ── 27 · Q27–28 DECIDE ────────────────────────────────── */
  {
    id: 'q27-28-decide',
    label: 'SPEAKERS 1–2',
    title: 'Speakers 1 and 2 — which statement fits?',
    sub: 'Statements A–H are on the previous slide. You have 30 seconds.',
    reveal: true,
    body: `
      <div class="grid g2" style="align-items:stretch;gap:12px;min-height:0">
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex4_grid__" alt="Exercise 4 grid"></div>
        <div class="body-main" style="min-height:0">
          __PLAY:ex4_speakers12|Play Speakers 1 and 2|The real recording, played twice__
          <div class="tape fill rv" style="overflow-y:auto">
            <span class="who">Speaker 1:</span> I thought it'd be the <span class="kr">first and last time</span>, but my performance showed enough promise to <span class="kr">have another go</span>. I'm <span class="kg">astonished</span> it went so well — the first competitor sang my song, so I rapidly <span class="kg">decided to switch my choice of music</span>.
            <br><br><span class="who">Speaker 2:</span> Considering I <span class="kg">spent every spare minute practising</span>, I would've been <span class="kr">amazed if I'd finished last</span>. The people watching were mainly parents, so it's <span class="kr">hardly surprising</span> they clapped everyone so enthusiastically.
          </div>
        </div>
      </div>`,
    notes:
      '<span class="t">6 min</span>30 seconds, commit. <b>Q27 = E</b> (changed my mind about what to perform) — “decided to switch my choice of music”. <b>Q28 = C</b> (prepared as well as I could) — “spent every spare minute practising”. ' +
      'Now the real work: how many statements are <b>built from the speaker\'s own words and then reversed</b>. ' +
      'Speaker 1: <b>A</b> (“never enter another one”) undone by “enough promise to have another go”; <b>G</b> (“never felt so nervous”) undone because the anxiety was <em>reduced</em>. ' +
      'Speaker 2: <b>D</b> (“sure I was going to come last”) is the exact reversal — he would have been <b>amazed</b> to finish last. <b>H</b> undone by “hardly surprising”. ' +
      'Ask them to name the flip-words: <em>but, hardly, reduced, never again</em>.',
  },

  /* ── 28 · EX5 LOOK ─────────────────────────────────────── */
  {
    id: 'ex5-look',
    label: 'EXERCISE 5',
    title: 'One interview. Eight questions. One speaker who counts.',
    steps: {
      heading: 'Steps!',
      items: [
        'Decide which voice is the main speaker.',
        'Mark it on your paper.',
        'Read all eight questions in the 45 seconds.',
      ],
    },
    body: `
      <div class="imp" style="margin-bottom:10px"><h3>IMPORTANT!</h3>
        <div class="steps" style="padding:10px 14px"><ul><li style="margin:0;font-size:20px">The answers come from the <b>main speaker</b> only — not the interviewer.</li></ul></div></div>
      <div class="grid g2" style="align-items:stretch;gap:12px;min-height:0">
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex5_instr__" alt="Exercise 5 instructions"></div>
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex5_q33_36__" alt="Questions 33 to 36"></div>
      </div>`,
    notes:
      '<span class="t">4 min</span>Read the instruction line: “You will hear an interview with a competitive skateboarder called Mikaela Quayle.” Then the key sentence from the syllabus — the questions test information expressed by <b>the main speaker</b>. ' +
      'Define “main speaker” operationally: <b>the person being interviewed</b>, the one who answers. The interviewer is scaffolding. ' +
      'That gives the habit: before you hear a word, decide which voice counts and mark it on your paper. ' +
      'Flag the 45 seconds — the longest reading pause in the paper, because there are eight questions.',
  },

  /* ── 29 · EX5 ATTRIBUTION ──────────────────────────────── */
  {
    id: 'ex5-attribution',
    label: 'EXERCISE 5',
    title: 'Ask “who said it?” before “is it true?”',
    steps: {
      heading: 'Steps!',
      items: [
        'Tag every opinion: INT or MAIN.',
        'Distrust anything the interviewer states.',
        'Wait for the main speaker’s correction.',
      ],
    },
    body: `
      <div class="grid g2" style="gap:12px;align-content:start">
        <div class="note k"><b>The interviewer is a trap factory</b><p style="font-size:18px;margin-top:4px">The interviewer asks, guesses and summarises — and those become wrong options.</p>
          <p style="font-size:17px;margin-top:6px;font-style:italic">“So it was all about the charity, then?”<br>“You must have been exhausted?”</p></div>
        <div class="note g"><b>Wait for the correction</b><p style="font-size:18px;margin-top:4px">When the main speaker disagrees, <b>the correction is the answer</b>.</p>
          <p style="font-size:17px;margin-top:6px"><b>not exactly · well, not quite · I meant…</b></p></div>
      </div>
      <div class="ans hint" style="margin-top:10px"><span class="tag">The habit</span><div>Tag every opinion in your head: <b>INT says…</b> or <b>MAIN says…</b>. It removes the most common Exercise 5 error.</div></div>`,
    notes:
      '<span class="t">3 min</span>Attribution is <b>the</b> Exercise 5 skill. Name it and make it a habit: mentally prefix every opinion with INT or MAIN. ' +
      'Two versions: the interviewer\'s <b>guess</b> becomes a wrong option (“You must have been exhausted?”) — it sounds like a description but it is a <b>question</b>; and the interviewer\'s <b>summary</b> becomes a wrong option which the main speaker rebuts. ' +
      'Give them the correction markers: <em>not exactly, well not quite, that\'s not how I\'d put it, I meant</em>. ' +
      'Point back: this trap already appeared in Exercise 2 — “I meant in the kitchen.”',
  },

  /* ── 30 · Q33–34 DECIDE ────────────────────────────────── */
  {
    id: 'q33-34-decide',
    label: 'QUESTIONS 33–34',
    title: 'Questions 33 and 34 — the interview begins',
    reveal: true,
    body: `
      <div class="grid g2" style="align-items:stretch;gap:12px;min-height:0">
        <div class="shot fill" style="min-height:0"><img src="__IMG:ex5_q33_36__" alt="Questions 33 to 36"></div>
        <div class="body-main" style="min-height:0">
          __PLAY:ex5_q33_34|Play Questions 33 and 34|The interview begins here__
          <div class="tape fill rv" style="overflow-y:auto">
            <span class="who">Interviewer:</span> How did it start?
            <br><span class="who">Mikaela:</span> I was learning to walk and Dad noticed I hardly ever fell over. As a skateboarder himself, <span class="kr">he said</span>, ‘Let's put her on a skateboard' — I was eighteen months old! <span class="kg">I've no memory of that</span>, but I was <span class="kr">never without my skateboard</span>.
            <br><br>When I was three, Dad took me to the skateboard park. I <span class="kr">didn't necessarily admire the older skaters</span>. <span class="kg">I wanted to try tricks, and was shocked when I realised how hard it was.</span>
          </div>
        </div>
      </div>`,
    notes:
      '<span class="t">6 min</span>45 seconds of reading time, then commit. <b>Q33 = C</b> (forgotten getting on a skateboard) — “I\'ve no memory of that”. <b>Q34 = B</b> (surprised by the challenges) — “I was <b>shocked</b> when I realised how hard it was”; <em>shocked</em> re-worded as <em>surprised</em>. ' +
      'The traps are worth more than the answers. <b>Q33 A</b> (“refused any other transport”) is a <b>degree shift</b> — she was “never without” it. <b>Q33 B</b> (“satisfy her father\'s dreams”) is an <b>invented motive</b>; it was Dad\'s idea, but nothing about her hopes. <b>Q34 C</b> is directly negated: “didn\'t necessarily admire”.',
  },

  /* ── 31 · EX5 LANGUAGE ─────────────────────────────────── */
  {
    id: 'ex5-language',
    label: 'EXERCISE 5',
    title: 'The words that give away an opinion',
    sub: 'L2 and L4 questions are won or lost on these. Each column does a different job.',
    body: `
      <div class="grid g3" style="gap:12px;align-content:start">
        <div class="note y"><span class="lbl">Column 1</span><p style="margin-top:6px;font-size:19px"><b>An opinion is coming</b></p>
          <p style="font-size:18px;margin-top:6px">to be honest · if I'm honest · I'd say · frankly · I must admit</p>
          <p style="font-size:18px;margin-top:6px;color:var(--blue)"><b>Do:</b> get ready — the answer is next.</p></div>
        <div class="note k"><span class="lbl r">Column 2</span><p style="margin-top:6px;font-size:19px"><b>The meaning flips</b></p>
          <p style="font-size:18px;margin-top:6px">but · however · although · actually · that said · hardly</p>
          <p style="font-size:18px;margin-top:6px;color:var(--blue)"><b>Do:</b> cross out what came before.</p></div>
        <div class="note g"><span class="lbl g">Column 3</span><p style="margin-top:6px;font-size:19px"><b>A feeling, no feeling word</b></p>
          <p style="font-size:18px;margin-top:6px">it grew on me · I could take it or leave it · it left me cold · it fell flat</p>
          <p style="font-size:18px;margin-top:6px;color:var(--blue)"><b>Do:</b> learn what each one means.</p></div>
      </div>
      <div class="ans hint" style="margin-top:10px"><span class="tag">Build one page</span><div>Add every new phrase you meet to one page. Worth more than another practice paper.</div></div>`,
    notes:
      '<span class="t">4 min</span>This is a <b>signal</b> slide, not a vocabulary list. Teach the three columns as three separate instructions. ' +
      'Column 1: demonstrate it live — say “if I\'m honest, …” and have the class say “here it comes” back. ' +
      'Column 2 is the highest-value family in the paper: <b>everything before but / however / actually is the decoy.</b> Prove it from questions they have seen: Q1 (“actually”), Q13 (“shame it\'s shut”), Q10 (“improved as a result” — consequence, not reason). ' +
      'Column 3 is a finite vocabulary job: “it left me cold”, “it fell flat” are exactly the hedged evaluations that options paraphrase into “she was disappointed”.',
  },
];
