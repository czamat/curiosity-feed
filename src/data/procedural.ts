import type { FeedCardKind, FeedCategory, FeedItem } from './types';
import { FEED_CATEGORIES } from './types';
import { EXPANDED_QUOTE_BANK } from './quoteBanks/compose';

const H = (i: number, m: number) => ((i * 7919 + 104729) % m + m) % m;

/** Procedural mix: 80% quotes, 20% split among fact / idea / concept (two slots per block of 10). */
function proceduralKindAt(i: number): FeedCardKind {
  const pos = i % 10;
  if (pos < 8) return 'quote';
  const block = Math.floor(i / 10);
  const trio: readonly FeedCardKind[] = ['fact', 'idea', 'concept'];
  if (pos === 8) return trio[block % 3]!;
  return trio[(block + 1) % 3]!;
}

function pick<T>(arr: readonly T[], i: number, salt: number): T {
  return arr[H(i + salt, arr.length)]!;
}

type PhilosopherIdea = { text: string; explanation: string; eli5: string };

/** Named doctrines and positions (not “pair this with that”) — philosophy topic. */
const PHILOSOPHY_IDEAS: PhilosopherIdea[] = [
  {
    text: 'Kant’s categorical imperative (humanity formulation): treat rational nature never merely as a means, but always also as an end in itself.',
    explanation:
      'Kant ties dignity to agency: using people purely as tools breaks a universalizable rule of respect. Debates focus on hard cases — markets, emergencies, partial compliance — but the core is a constraint on instrumentalizing others.',
    eli5: 'Kant says don’t use people only as tools — respect that they have their own goals too.',
  },
  {
    text: 'Mill’s harm principle: coercion is justified only to prevent harm to others, not to enforce “self-regarding” choices.',
    explanation:
      'Mill’s liberalism separates social from moral disapproval — law and public force need a harm-based warrant. Where “harm” begins (offense, dignitary harm) remains philosophically contested.',
    eli5: 'Mill says the law should mainly stop people from hurting others, not boss them around for their own “good.”',
  },
  {
    text: 'Rawls’s difference principle: inequalities are permissible only if they improve the expectations of the least advantaged.',
    explanation:
      'Behind the veil of ignorance, risk-averse contractors would not gamble on being rich; this yields a strong floor and makes inequality instrumental to shared uplift, not a trophy for winners.',
    eli5: 'Rawls asks: if you didn’t know if you’d be rich or poor, what rules would feel fair? He uses that to judge inequality.',
  },
  {
    text: 'Aristotle on virtue as a mean: courage, generosity, and honesty are stable dispositions between opposed vices.',
    explanation:
      'Excellences are not averages of numbers but calibrated responses — courage between rashness and cowardice. Habituation trains perception so you “see” the right amount in context.',
    eli5: 'Aristotle says good traits are often a middle path — not too much, not too little.',
  },
  {
    text: 'Plato’s theory of Forms: sensible things “participate” in eternal structures like Justice itself, which imperfect copies approximate.',
    explanation:
      'Plato explains why inquiry feels directed — we criticize partial justice by a standard we treat as more than opinion. Critics ask how non-spatial Forms relate to changing things.',
    eli5: 'Plato thinks perfect versions of ideas like Justice exist somewhere we aim at, even if real life is messy.',
  },
  {
    text: 'Hume’s is–ought gap: you cannot derive moral conclusions from purely descriptive premises without smuggling in a hidden “ought.”',
    explanation:
      'Hume challenges naturalistic shortcuts — observing facts does not, by itself, tell you what to do unless you add a normative bridge (often tacit).',
    eli5: 'Hume says you can’t get a “should” from only “is” facts without sneaking in a rule.',
  },
  {
    text: 'Descartes’s method of doubt: bracket anything that can be doubted until you reach something indubitable, then rebuild carefully.',
    explanation:
      'The meditator is not a daily-life skeptic but a methodologist — doubt as hygiene for foundations, aiming for a small stock of clear truths to underwrite science.',
    eli5: 'Descartes says take beliefs off the shelf, dust them, and only put back what you’re sure about.',
  },
  {
    text: 'Spinoza’s conatus: each thing, insofar as it is in itself, strives to persevere in its being.',
    explanation:
      'Spinoza links desire and essence — striving is not a moral endorsement but a metaphysical description; ethics then asks which strivings increase human power of acting.',
    eli5: 'Spinoza thinks everything “tries” to keep existing in its own way.',
  },
  {
    text: 'Berkeley’s esse est percipi: for ordinary objects, existence is tied to being perceived — not solipsism, but idealism about matter.',
    explanation:
      'Berkeley denies matter as an unperceived substratum; God coordinates stable ideas. Critics ask about trees in forests; Berkeley answers via God’s perpetual perception.',
    eli5: 'Berkeley asks: if no one experiences a thing, what does “there” even mean for it?',
  },
  {
    text: 'Wittgenstein (later) on meaning as use: word-meaning lives in language-games and forms of life, not private mental tags.',
    explanation:
      'The private-language argument pressures the picture of an inner ostension that could fix reference alone; public criteria and training explain how words get purchase.',
    eli5: 'Wittgenstein says words mean what people do with them in real life — not a secret picture in your head.',
  },
  {
    text: 'Heidegger’s being-in-the-world: inquiry into being starts from engaged practical involvement, not a detached “spectator” stance.',
    explanation:
      'Readiness-to-hand (tools) and moods like anxiety reveal structures beneath theoretical knowledge; phenomenology here targets how intelligibility arises for finite agents.',
    eli5: 'Heidegger says we understand the world first through doing and caring, not only through abstract theory.',
  },
  {
    text: 'Foucault on power/knowledge: institutions produce “regimes of truth” that shape bodies, desires, and what counts as expertise.',
    explanation:
      'Genealogy traces contingent histories of categories (madness, criminality, sexuality). The point is not “nothing is true” but that truth-practices have costs and backers.',
    eli5: 'Foucault looks at how schools, prisons, and medicine shape what society calls “normal” or “true.”',
  },
  {
    text: 'Parfit’s reductionism about persons: what matters in survival may not be a further fact of strict identity over time.',
    explanation:
      'If psychological continuity can branch, identity-as-numerical-sameness looks less morally central than relation-tokens we care about — affecting ethics of future selves and fission thought experiments.',
    eli5: 'Parfit asks whether “you tomorrow” needs one magical thread, or just enough memory and character links.',
  },
  {
    text: 'Singer’s expanding circle: rational reflection pressures us to weigh interests impartially, widening moral concern beyond kin and tribe.',
    explanation:
      'Utilitarianism here is less a calculator caricature than a demand to justify unequal weighting of similar pains; effective altruism inherits this argumentative shape.',
    eli5: 'Singer pushes: if suffering counts, why stop at people who look like you?',
  },
  {
    text: 'Nozick’s side-constraint view: rights function as moral “walls” individuals may not violate, even for aggregate good.',
    explanation:
      'Against maximizing politics, Nozick treats persons as inviolable ends in a deontic sense — taxation for redistribution becomes a flashpoint in political philosophy debates.',
    eli5: 'Nozick says some rules protect people even if breaking them would “help more” in total.',
  },
  {
    text: 'Aquinas’s natural-law thought: reason can discern basic goods and moral precepts that participate in eternal law without reducing ethics to proof.',
    explanation:
      'Synderesis and practical wisdom translate general principles into counsel; the tradition argues about exceptions, double effect, and the role of religious revelation.',
    eli5: 'Aquinas thinks people can figure out a lot of right and wrong using reason and care for basic human goods.',
  },
  {
    text: 'Confucian ren (humaneness): ethical life cultivates reliable care in roles; li (ritual propriety) trains character without reducing persons to rules.',
    explanation:
      'Self is relational; moral learning is emulation and correction in community. Critics and defenders debate conservatism versus reform readings of tradition.',
    eli5: 'Confucius cares a lot about how you treat family, friends, and leaders — habits that build a good person.',
  },
  {
    text: 'Epictetus’s dichotomy of control: suffering often tracks confusing what is up to us with what is not.',
    explanation:
      'Stoic therapy aims at judgment — events do not disturb, opinions about them do. Modern CBT echoes some patterns without swallowing every Stoic metaphysical claim.',
    eli5: 'Epictetus says much pain comes from trying to control what you can’t — start with your own choices.',
  },
  {
    text: 'Nietzsche’s perspectivism (sketch): many angles may be needed for knowledge without collapsing into “anything goes.”',
    explanation:
      'Interpretation is driven by drives and values; the best genealogies expose hidden interests behind “objectivity” talk while still allowing disciplined inquiry.',
    eli5: 'Nietzsche thinks everyone looks at truth from an angle — angles matter, but that’s not the same as “nothing is true.”',
  },
  {
    text: 'Strawson’s “reactive attitudes”: responsibility is embedded in interpersonal demands like resentment, gratitude, and forgiveness.',
    explanation:
      'Rather than a purely metaphysical ledger of free will, moral life presupposes participants who hold one another accountable; skeptical suspensions of these attitudes feel socially costly.',
    eli5: 'Strawson says we treat people as responsible because we live with them — not only because we solved a science puzzle about free will.',
  },
  {
    text: 'Gettier’s lesson (philosophical upshot): justified true belief was too thin an analysis of knowledge — “luck” cases split justification from truth-making.',
    explanation:
      'The industry of “fourth conditions” followed; the puzzle sharpened how evaluation and environment interact in attributing knowledge to agents.',
    eli5: 'Gettier showed you can be “right for bad reasons” — so philosophers tightened what “knowing” means.',
  },
  {
    text: 'Martha Nussbaum on capabilities: justice assesses what people can actually do and be, not only resources or utilities.',
    explanation:
      'Conversion factors from goods to functionings differ by person and context; the approach informs human-development metrics and disability ethics debates.',
    eli5: 'Nussbaum asks what real freedoms people have — not only how much stuff they own.',
  },
  {
    text: 'Simone de Beauvoir on ambiguity: humans are neither pure freedom nor mere objects — ethics must hold the tension honestly.',
    explanation:
      'Bad faith flees ambiguity by pretending complete solidity or complete transcendence; authentic projects own finitude while still choosing.',
    eli5: 'De Beauvoir says we’re stuck between “thing” and “god” — good ethics doesn’t pretend that away.',
  },
  {
    text: 'William James on pragmatism’s test: where options are live and momentous, the truth of a belief can include its guiding power in experience.',
    explanation:
      'James targets intellectualist pictures of truth as static correspondence only; critics worry about wishful thinking, defenders distinguish cash-value from comfort.',
    eli5: 'James asks: what difference would believing this actually make in life?',
  },
  {
    text: 'Charles Taylor on “strong evaluation”: some goods are not merely desired — they are judged worthy, structuring identity and second-order desires.',
    explanation:
      'Moral sources can be inarticulate yet powerful; modernity’s worry is flattened relativism versus recovered horizons of qualitative distinction.',
    eli5: 'Taylor says some values aren’t just taste — they shape who you think you should become.',
  },
];

/** Philosophy of science / nature — still “ideas from philosophers” under Physics. */
const PHILOSOPHY_OF_PHYSICS_IDEAS: PhilosopherIdea[] = [
  {
    text: 'Popper’s falsifiability demarcation (roughly): what makes a theory scientific is not verification but risky predictions that could have failed.',
    explanation:
      'Popper contrasts pseudo-science that explains everything post hoc; Lakatos later refined “research programmes” to save the spirit without brittle instant-refutation rules.',
    eli5: 'Popper liked theories that stick their neck out — where a clear fail would prove them wrong.',
  },
  {
    text: 'Kuhn on paradigms: normal science solves puzzles inside a exemplar-based framework; anomalies can accumulate until a revolutionary reorientation.',
    explanation:
      'Incommensurability debates followed about whether “world changes” with theory; charitably, Kuhn names how training and standards shift across scientific generations.',
    eli5: 'Kuhn says science isn’t only one fact after another — big shifts change what counts as a good question.',
  },
  {
    text: 'Duhem–Quine underdetermination: evidence often confronts theories as a web, not one hypothesis at a time.',
    explanation:
      'Auxiliary assumptions absorb blame; holism pressures naive falsification while still allowing selective testing strategies in practice.',
    eli5: 'Tests usually check a bundle of guesses at once — so “which part failed?” can be fiddly.',
  },
  {
    text: 'Hume on induction: observed regularities do not logically entail the future will resemble the past — custom bridges the gap psychologically.',
    explanation:
      'Hume’s problem motivates probabilism, pragmatism about induction, or externalist replies; it remains a philosophical spine under methodology courses.',
    eli5: 'Hume asks why yesterday’s pattern should guarantee tomorrow — habit isn’t a logical proof.',
  },
  {
    text: 'Reichenbach’s principle of common cause: correlated events often share a cause, motivating causal inference beyond mere association.',
    explanation:
      'Philosophers of statistics refine when screening-off holds; the slogan guides causal discovery while warning against naive graphs.',
    eli5: 'If two things line up a lot, philosophers often ask: is something behind both?',
  },
  {
    text: 'Einstein on geometry and experience: mathematics suggests concepts; experience decides which fit the world — a Kantian echo with empiricist bite.',
    explanation:
      'General relativity dramatized the interplay: abstract manifolds plus coordinate freedom confront rigid clocks and light rays in experiment.',
    eli5: 'Einstein thought math gives options, but the world picks which option fits.',
  },
  {
    text: 'Bohr’s complementarity (philosophical gloss): some joint pictures exceed classical simultaneity; unifying descriptions may require mutually exclusive experimental arrangements.',
    explanation:
      'Interpretive wars continue (Copenhagen vs many-worlds vs etc.), but Bohr’s stance is a philosophical lesson about classical concepts’ limits at the quantum boundary.',
    eli5: 'Bohr warned some “both at once” pictures may not be meaningful — experiments force different views.',
  },
  {
    text: 'Cartwright’s “dappled world”: laws may be patchy, local, and model-relative rather than one global pyramid.',
    explanation:
      'Anti-fundamentalism in philosophy of science motivates pluralism about models and domains of application without denying impressive unifications where they hold.',
    eli5: 'Cartwright doubts one tidy law covers everything — nature might be more patchwork.',
  },
  {
    text: 'van Fraassen’s constructive empiricism: science aims at empirical adequacy; literal belief in unobservables is optional beyond what evidence demands.',
    explanation:
      'A stance toward theories (empiricist voluntarism) rather than a proof; realists reply with no-miracles arguments and selective optimism about structure.',
    eli5: 'van Fraassen says science mainly needs to match what we see — deep “what really is” claims can be extra.',
  },
  {
    text: 'Wigner’s “unreasonable effectiveness” puzzle (philosophical): why should low-energy symmetries yield such sharp mathematical tools?',
    explanation:
      'Responses range from anthropocentric selection to Platonism-lite; it names a felt coincidence between beautiful structures and reliable prediction.',
    eli5: 'Wigner wondered why math fits physics so well — is that luck, us, or something deeper?',
  },
];

const PHILOSOPHY_OF_MATH_IDEAS: PhilosopherIdea[] = [
  {
    text: 'Frege’s logicism (ambitious form): arithmetic is “really” logic in disguise — mathematical truths inherit necessity from logical laws.',
    explanation:
      'Russell’s paradox wounded naive logicism; neo-logicism revives pieces with guarded abstraction principles; the episode shaped philosophy of mathematics for a century.',
    eli5: 'Frege tried to show math was built out of pure logic — it partly worked, then hit a famous paradox.',
  },
  {
    text: 'Hilbert’s formalism (caricature-sensitive): consistency and completeness questions for axiom systems can be made mathematically precise.',
    explanation:
      'Gödel’s theorems reshaped Hilbert’s program: certain completeness dreams died, but proof theory lived on as a rich field with philosophical fallout.',
    eli5: 'Hilbert wanted crystal-clear rules for math; Gödel showed some dreams can’t fully work that way.',
  },
  {
    text: 'Brouwer’s intuitionism: mathematics is mental construction; rejected law of excluded middle for infinite domains in strong forms.',
    explanation:
      'Classical mathematicians mostly work unrestrictedly; intuitionistic logic now also appears in computer science via the Curry–Howard correspondence.',
    eli5: 'Brouwer thought you shouldn’t claim “A or not A” until you can actually build one — especially for infinite stuff.',
  },
  {
    text: 'Quine’s indispensability flirtation: if you believe electrons, maybe you should believe in the mathematical entities embedded in best theories.',
    explanation:
      'Nominalists counter with paraphrase programs; the debate maps “ontology” onto regimented first-order theories and regimentation choices matter.',
    eli5: 'Quine nudges: if science’s best story needs math objects, maybe math is as “real” as electrons.',
  },
  {
    text: 'Lakatos’s “proofs and refutations”: definitions and theorems evolve under pressure from counterexamples — mathematics is historically dynamic.',
    explanation:
      'Pedagogically vivid; historians nuance the neat dialectic, but the philosophical moral about conceptual change sticks.',
    eli5: 'Lakatos says math definitions get sharper when people poke holes — not frozen from day one.',
  },
  {
    text: 'Gödel’s philosophical morals (careful): incompleteness limits certain internal proof schemes; it is not a free license for mysticism about truth.',
    explanation:
      'Yet it shaped debates about minds vs machines, formal systems, and informal mathematical insight — often overclaimed, still instructive when scoped.',
    eli5: 'Gödel showed some truths can’t be proved inside one fixed rulebook — if it’s strong enough for arithmetic.',
  },
  {
    text: 'Parsons on mathematical intuition (broadly): some domains (e.g., small finite collections) afford a constrained form of intuition supporting basic knowledge.',
    explanation:
      'Critics worry about reviving Kantian baggage; defenders aim for modest foundations without claiming mystic vision of infinite sets.',
    eli5: 'Some philosophers think we “see” small-number facts in a humble, everyday way — not magic infinity vision.',
  },
];

const PHILOSOPHY_OF_MIND_IDEAS: PhilosopherIdea[] = [
  {
    text: 'Descartes’s substance dualism: mind and body are distinct substances, yet causally interact — generating the “interaction problem.”',
    explanation:
      'Princess Elisabeth pressed Descartes on how immaterial mind moves body; successors split into occasionalism, parallelism, materialism, and property dualism.',
    eli5: 'Descartes split mind and body; people then asked how ghost pushes meat.',
  },
  {
    text: 'Ryle’s “ghost in the machine”: Cartesianism mis-describes mental life as a second hidden thing alongside the body.',
    explanation:
      'Ryle’s logical behaviorism thread influenced ordinary-language philosophy; later functionalism absorbed the critique without equating mind to dispositions only.',
    eli5: 'Ryle said don’t picture the mind as a secret homunculus sitting inside the body.',
  },
  {
    text: 'Putnam’s multiple realizability argument (classic): pain might be realized by diverse physical states across species — challenging strict type-identity.',
    explanation:
      'Shaped non-reductive materialisms; opponents argue for more coarse-grained identities or disjunctive physical kinds.',
    eli5: 'Putnam said “pain” might not be one brain state for everyone — so mind might not equal one chemistry pattern.',
  },
  {
    text: 'Dennett’s intentional stance: treat systems as rational agents when that stance yields reliable predictions — without insisting on inner homunculi.',
    explanation:
      'Real patterns vs eliminativism debates follow; the stance is instrumentalist-flavored yet can be disciplined by predictive success.',
    eli5: 'Dennett says we can treat a chess program “as if” it wants stuff when that helps predict it.',
  },
  {
    text: 'Chalmers’s hard problem framing: even after functional details, why should there be “something it is like” at all?',
    explanation:
      'Drives panpsychism vs illusionism vs Russellian monism industry; critics say the problem dissolves once we reject a confused picture of explanation.',
    eli5: 'Chalmers asks why brains feel like anything — not only how they compute.',
  },
  {
    text: 'James on the stream of consciousness: thought flows as a continuous, choosing, interested process — not a bundle of atomistic ideas.',
    explanation:
      'Influenced phenomenology and pragmatism; also informs modern debates about temporal experience and the specious present.',
    eli5: 'James says thoughts are more like a river than a string of beads.',
  },
  {
    text: 'Merleau-Ponty on embodied perception: the body is not an outer object but the site through which a world shows up.',
    explanation:
      'Challenges inner-theater models; anticipates sensorimotor and enactive approaches in cognitive science with philosophical nuance.',
    eli5: 'Merleau-Ponty says you don’t just have a body — you live through it as your viewpoint.',
  },
  {
    text: 'Searle’s Chinese room (as philosophical provocation): syntax alone doesn’t suffice for semantics — intentionality needs more story.',
    explanation:
      'Computationalists reply with systems-level properties, learning, and externalism; the room remains a teaching tool for “what understands means.”',
    eli5: 'Searle’s thought experiment asks if following rules blindly counts as “understanding.”',
  },
];

/** Cross-domain thinkers — history, society, knowledge — for “Curiosity” topic. */
const PHILOSOPHY_MISC_IDEAS: PhilosopherIdea[] = [
  {
    text: 'Hume on the artificial virtues: justice emerges as a convention solving coordination problems among self-interested, roughly equal agents.',
    explanation:
      'Property and contract look “natural” once stable, but Hume roots them in contingent social technology — influencing later contractarianisms with different moral starting points.',
    eli5: 'Hume treats rules like property as teamwork fixes — not single-player virtues.',
  },
  {
    text: 'Smith’s invisible hand (philosophical reading): decentralized ambition can channel public benefits through price signals — not because greed is good, but because incentives aggregate.',
    explanation:
      'The Theory of Moral Sentiments complicates caricatures; contemporary political philosophy argues about market boundaries and externalities Smith also recognized.',
    eli5: 'Smith noticed markets can coordinate people without one boss — not that selfishness is always moral.',
  },
  {
    text: 'Weber on disenchantment: rationalization can drain worldviews of magical guarantees, shifting meaning-making to individual and institutional burdens.',
    explanation:
      'Useful for diagnosing bureaucracy, science’s authority, and existential risk cultures — not a prophecy of joylessness only.',
    eli5: 'Weber says modern systems can make the world feel less “magically explained.”',
  },
  {
    text: 'Arendt on the public realm: freedom appears in speech and action among plural peers — not as mastery or administration alone.',
    explanation:
      'Separates political life from household management; debates follow on exclusion, scale, and economic structure in “the political.”',
    eli5: 'Arendt cares about people showing up as equals in public life — not only being managed.',
  },
  {
    text: 'Sen’s capability approach (philosophical core): development targets freedoms people have reason to value — informationally richer than income alone.',
    explanation:
      'Influences human development indices; philosophical work clarifies aggregation, paternalism worries, and adaptive preferences.',
    eli5: 'Sen asks what people can really do — not only how much money they have.',
  },
  {
    text: 'Ostrom on governing the commons: local institutions can sometimes solve collective-action problems without pure privatization or top-down control.',
    explanation:
      'Empirical nuance meets political philosophy about cooperation under monitoring, graduated sanctions, and congruence with local conditions.',
    eli5: 'Ostrom showed communities can sometimes share a resource without tragedy — with good rules.',
  },
];

function philosopherIdeaForCategory(cat: FeedCategory, i: number): PhilosopherIdea {
  const bank =
    cat === 'philosophy'
      ? PHILOSOPHY_IDEAS
      : cat === 'physics'
        ? PHILOSOPHY_OF_PHYSICS_IDEAS
        : cat === 'math'
          ? PHILOSOPHY_OF_MATH_IDEAS
          : cat === 'psychology'
            ? PHILOSOPHY_OF_MIND_IDEAS
            : PHILOSOPHY_MISC_IDEAS;
  return pick(bank, i, 99);
}

const PHIL = [
  'virtue ethics',
  'deontology',
  'consequentialism',
  'existentialism',
  'stoicism',
  'epistemology',
  'metaphysics',
  'personal identity',
  'free will',
  'moral luck',
  'the ship of Theseus',
  'the trolley problem',
  'the veil of ignorance',
  'the is–ought gap',
  'the problem of induction',
  'the hard problem of consciousness',
  'compatibilism',
  'moral realism',
  'constructivism',
  'care ethics',
  'pragmatism',
  'phenomenology',
  'hermeneutics',
  'skepticism',
  'natural law theory',
  'rights-based ethics',
  'supererogation',
  'moral responsibility',
  'collective intentionality',
  'speech acts',
  'meaning holism',
  'reference',
  'possible worlds',
  'counterfactuals',
  'supervenience',
  'emergence',
  'reductionism',
  'functionalism',
  'qualia',
  'thought experiments',
  'reflective equilibrium',
  'public reason',
  'ideal theory',
  'non-identity problem',
  'repugnant conclusion debate',
  'moral uncertainty',
  'axiological asymmetry',
  'person-affecting views',
  'moral enhancement',
  'moral testimony',
  'moral expertise',
  'moral progress',
  'moral disagreement',
  'thick concepts',
  'reasons fundamentalism',
  'fitting attitudes',
  'buck-passing about value',
];

const PHYS = [
  'entropy',
  'symmetry',
  'Noether’s theorem',
  'Lagrangian mechanics',
  'Hamiltonian mechanics',
  'wave–particle duality',
  'uncertainty principle',
  'decoherence',
  'path integrals',
  'renormalization',
  'phase transitions',
  'critical phenomena',
  'superconductivity',
  'Bose–Einstein condensates',
  'fermionic statistics',
  'band structure',
  'semiconductor junctions',
  'lasers',
  'interferometry',
  'gravitational waves',
  'black hole thermodynamics',
  'cosmic inflation',
  'dark matter',
  'dark energy',
  'standard candles',
  'standard sirens',
  'neutrino oscillations',
  'CP violation',
  'gauge theories',
  'spontaneous symmetry breaking',
  'the Higgs mechanism',
  'effective field theory',
  'hydrodynamic limits',
  'kinetic theory',
  'plasma instabilities',
  'MHD waves',
  'turbulence cascades',
  'correlation functions',
  'spectroscopy',
  'scattering amplitudes',
  'unitarity cuts',
  'dispersion relations',
  'topology in condensed matter',
  'anyons',
  'quantum Hall states',
  'Josephson junctions',
  'SQUIDs',
  'quantum error correction',
  'adiabatic quantum evolution',
  'Floquet engineering',
  'optomechanics',
  'cavity QED',
  'Casimir forces',
  'vacuum fluctuations',
  'Schwinger limit',
  'pair production',
  'synchrotron radiation',
  'Cherenkov radiation',
  'mean free path',
  'opacity',
  'radiative transfer',
  'nuclear binding',
  'stellar nucleosynthesis',
  'neutron stars',
  'tidal locking',
  'Roche lobes',
  'accretion disks',
];

const MATH = [
  'prime gaps',
  'the Riemann zeta function',
  'modular forms',
  'elliptic curves',
  'Galois theory',
  'category theory',
  'homotopy type theory',
  'topological invariants',
  'fixed-point theorems',
  'Banach spaces',
  'Hilbert spaces',
  'Fourier analysis',
  'convolution',
  'generating functions',
  'asymptotic analysis',
  'probabilistic method',
  'random graphs',
  'percolation',
  'Markov chains',
  'martingales',
  'Brownian motion',
  'Itô calculus',
  'optimal transport',
  'linear programming',
  'convex optimization',
  'duality in optimization',
  'information theory',
  'coding theory',
  'cryptographic hardness',
  'lattices in cryptography',
  'computational complexity classes',
  'SAT solvers',
  'SMT reasoning',
  'automated theorem proving',
  'proof assistants',
  'type theory',
  'Curry–Howard',
  'denotational semantics',
  'algebraic geometry',
  'schemes',
  'sheaf cohomology',
  'derived categories',
  'mirror symmetry',
  'knot polynomials',
  'low-dimensional topology',
  'hyperbolic geometry',
  'geometric group theory',
  'Diophantine equations',
  'algebraic number theory',
  'L-functions',
  'arithmetic progressions in primes',
  'additive combinatorics',
  'graph limits',
  'Szemerédi’s theorem',
  'Ramsey theory',
  'extremal combinatorics',
  'design theory',
  'finite fields',
  'error-correcting codes',
  'sphere packings',
  'sphere-packing bounds',
  'VC dimension',
  'Rademacher complexity',
  'concentration inequalities',
  'U-statistics',
  'bootstrap methods',
  'causal inference',
  'instrumental variables',
  'Bayesian nonparametrics',
];

const PSY = [
  'working memory capacity',
  'attentional blink',
  'change blindness',
  'inattentional blindness',
  'default mode network',
  'prediction error',
  'reward prediction error',
  'habit loops',
  'implementation intentions',
  'self-determination theory',
  'basic psychological needs',
  'cognitive reappraisal',
  'expressive suppression',
  'affective forecasting errors',
  'impact bias',
  'focalism',
  'immune neglect',
  'psychological immune system',
  'negativity bias',
  'positivity offset',
  'loss aversion',
  'endowment effect',
  'sunk cost fallacy',
  'planning fallacy',
  'inside view vs outside view',
  'base rate neglect',
  'conjunction fallacy',
  'representativeness heuristic',
  'anchoring',
  'priming',
  'nudging',
  'choice architecture',
  'ego depletion debate',
  'stereotype threat',
  'stereotype lift',
  'implicit association',
  'growth mindset research',
  'grit construct',
  'self-compassion',
  'metacognition',
  'desirable difficulties',
  'spacing effect',
  'testing effect',
  'interleaving practice',
  'elaborative interrogation',
  'dual coding',
  'cognitive load theory',
  'expertise reversal effect',
  'flow states',
  'sleep-dependent consolidation',
  'circadian alignment',
  'social baseline theory',
  'co-regulation',
  'polyvagal theory (debated)',
  'allostatic load',
  'psychoneuroimmunology',
  'therapeutic alliance',
  'common factors in therapy',
  'exposure hierarchies',
  'behavioral activation',
  'behavioral experiments',
  'cognitive restructuring',
  'values clarification',
  'acceptance',
  'psychological flexibility',
];

const MISC = [
  'CRISPR systems',
  'mRNA vaccines',
  'microbiome diversity',
  'horizontal gene transfer',
  'endosymbiosis',
  'plate tectonics',
  'supercontinent cycles',
  'Milankovitch cycles',
  'ocean acidification',
  'Keeling curve',
  'greenhouse effect',
  'carbon isotope ratios',
  'dendrochronology',
  'ice cores',
  'speleothems',
  'archaeogenetics',
  'domestication syndromes',
  'crop wild relatives',
  'nitrogen fixation',
  'Haber–Bosch process',
  'green revolution tradeoffs',
  'demographic transition',
  'fertility momentum',
  'urban heat islands',
  'induced demand in transport',
  'Jevons paradox',
  'network effects',
  'switching costs',
  'path dependence',
  'lock-in',
  'standards wars',
  'two-sided markets',
  'ad auctions',
  'recommender systems',
  'filter bubbles',
  'epistemic bubbles',
  'common knowledge',
  'Schelling points',
  'price discovery',
  'liquidity',
  'moral hazard',
  'adverse selection',
  'principal–agent problems',
  'tragedy of the commons',
  'club goods',
  'public goods',
  'Coase theorem caveats',
  'externalities',
  'Pigouvian taxes',
  'cap-and-trade',
  'Shapley values',
  'Vickrey auctions',
  'survivorship bias',
  'selection on the dependent variable',
  'Simpson’s paradox',
  'collider bias',
  'DAG causal models',
  'Rubin causal model',
  'Pearl do-calculus',
  'forecast calibration',
  'Brier score',
  'superforecasting practices',
  'wisdom of structured crowds',
  'Delphi method',
  'red teaming',
  'pre-mortems',
  'post-mortems',
  'blameless culture',
];

function synth(cat: FeedCategory, kind: FeedCardKind, i: number): FeedItem {
  const t =
    cat === 'philosophy'
      ? pick(PHIL, i, 1)
      : cat === 'physics'
        ? pick(PHYS, i, 2)
        : cat === 'math'
          ? pick(MATH, i, 3)
          : cat === 'psychology'
            ? pick(PSY, i, 4)
            : pick(MISC, i, 5);
  const t2 =
    cat === 'philosophy'
      ? pick(PHIL, i, 11)
      : cat === 'physics'
        ? pick(PHYS, i, 12)
        : cat === 'math'
          ? pick(MATH, i, 13)
          : cat === 'psychology'
            ? pick(PSY, i, 14)
            : pick(MISC, i, 15);

  if (kind === 'fact') {
    return {
      id: `p-${cat}-${i}-f`,
      category: cat,
      kind: 'fact',
      text: `${t}: a compact anchor point people use when comparing ${t2} to nearby alternatives in the same family of models.`,
      explanation: `Specialists treat ${t} as a load-bearing assumption: it keeps arguments from drifting when ${t2} is left vague. Naming it explicitly also makes disagreements easier to audit, because both sides can point to what changed if the assumption shifts.`,
      eli5: `It’s a handy “handle” so people don’t talk past each other about ${t} and ${t2}.`,
    };
  }

  if (kind === 'idea') {
    const idea = philosopherIdeaForCategory(cat, i);
    return {
      id: `p-${cat}-${i}-i`,
      category: cat,
      kind: 'idea',
      text: idea.text,
      explanation: idea.explanation,
      eli5: idea.eli5,
    };
  }

  return {
    id: `p-${cat}-${i}-c`,
    category: cat,
    kind: 'concept',
    text: `“${t} lens”: the habit of asking which parts of a situation are stable under the same moves that preserve ${t2}.`,
    explanation: `A “lens” is a reusable question-generator, not a slogan. Used well, it slows you down where naïve analogies speed you up — especially when two stories sound similar but break under different stress tests.`,
    eli5: `A “lens” means a special pair of glasses for thinking — it changes what you notice.`,
  };
}

/** ~1000 generated cards per topic: ~80% quotes, ~20% fact/idea/concept. */
export const PROCEDURAL_PER_TOPIC = 1000;

export function generateProceduralDeck(perCategory: number): FeedItem[] {
  const out: FeedItem[] = [];
  for (const cat of FEED_CATEGORIES) {
    const quotes = EXPANDED_QUOTE_BANK[cat];
    for (let i = 0; i < perCategory; i++) {
      const kind = proceduralKindAt(i);
      if (kind === 'quote') {
        const q = quotes[H(i, quotes.length)]!;
        out.push({
          id: `p-${cat}-q-${i}`,
          category: cat,
          kind: 'quote',
          text: q.text,
          attribution: q.attribution,
          explanation: q.explanation,
          eli5: q.eli5,
        });
      } else {
        out.push(synth(cat, kind, i));
      }
    }
  }
  return out;
}
