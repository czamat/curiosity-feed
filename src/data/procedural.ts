import type { FeedCardKind, FeedCategory, FeedItem } from './types';
import { FEED_CATEGORIES } from './types';

type QuoteRow = { text: string; attribution: string; explanation: string; eli5: string };

/** Curated quotes — used on every fourth procedural slot per topic. */
export const ROTATING_QUOTES: Record<FeedCategory, QuoteRow[]> = {
  philosophy: [
    {
      text: 'We live in the best of all possible worlds.',
      attribution: 'Gottfried Leibniz (satire target)',
      explanation:
        'Leibniz’s optimism was later mocked by Voltaire — the phrase is now shorthand for cruel complacency about suffering, not a slogan people defend literally.',
      eli5: 'People joke that “everything is fine” can sound silly when bad things clearly happen.',
    },
    {
      text: 'The beginning is the most important part of the work.',
      attribution: 'Plato',
      explanation:
        'Plato stresses habit and education early: patterns learned first tend to anchor character, institutions, and reasoning styles that are hard to rewire later.',
      eli5: 'What you learn first shapes you a lot — beginnings matter.',
    },
    {
      text: 'I would never die for my beliefs because I might be wrong.',
      attribution: 'Bertrand Russell',
      explanation:
        'Russell pairs courage with fallibilism: strong conviction should still leave room for error — fanaticism treats doubt as betrayal rather than honesty.',
      eli5: 'Care about truth enough to admit you could be mistaken.',
    },
    {
      text: 'The only serious philosophical problem is suicide.',
      attribution: 'Albert Camus',
      explanation:
        'Camus asks whether life is worth living once we accept meaninglessness — his answer is not doctrine but lived revolt, beauty, and solidarity without cosmic guarantees.',
      eli5: 'He asks bluntly: is life worth living — then tries to answer without pretending the universe gives easy rules.',
    },
    {
      text: 'The greatest thing in the world is to know how to belong to oneself.',
      attribution: 'Michel de Montaigne',
      explanation:
        'Montaigne values inner independence: social roles fluctuate, but a cultivated self you can live with is portable dignity — a precursor to modern authenticity talk.',
      eli5: 'Learn to be okay with yourself, not only with what others think of you.',
    },
    {
      text: 'In the midst of winter, I found there was, within me, an invincible summer.',
      attribution: 'Albert Camus',
      explanation:
        'Camus contrasts outer hardship with inner resolve — not naive optimism, but a refusal to let circumstances wholly define one’s inner life.',
      eli5: 'Even when life feels cold outside, you can still find warmth inside yourself.',
    },
    {
      text: 'The only true wisdom is in knowing you know nothing.',
      attribution: 'Socrates (trad.)',
      explanation:
        'Again Socratic humility: wisdom begins when curiosity replaces pretending — expertise is compatible with knowing the edges of one’s competence.',
      eli5: 'Being smart starts with admitting what you don’t know.',
    },
    {
      text: 'Wonder is the beginning of wisdom.',
      attribution: 'Socrates (attrib., tradition)',
      explanation:
        'Aristotle also links wonder to inquiry — surprise that things are “so” rather than “otherwise” launches the habit of asking better questions.',
      eli5: 'Being curious and amazed is how learning starts.',
    },
    {
      text: 'The life of man is solitary, poor, nasty, brutish, and short.',
      attribution: 'Thomas Hobbes',
      explanation:
        'Hobbes describes the “state of nature” without strong authority — a rhetorical low point meant to motivate laws and sovereign power as peace-making tools.',
      eli5: 'Without rules and teamwork, life can get ugly fast — that’s why societies make laws.',
    },
    {
      text: 'To be wronged is nothing unless you continue to remember it.',
      attribution: 'Confucius (trad.)',
      explanation:
        'Confucian ethics often stress proportion and ritual repair — nursing grievance can harm the griever; letting go is a practiced moral skill, not amnesia.',
      eli5: 'Bad stuff hurts more if you replay it forever in your head.',
    },
    {
      text: 'We do not see things as they are, we see them as we are.',
      attribution: 'Anaïs Nin (often quoted)',
      explanation:
        'Perception is filtered by biography, fear, desire, and language — not a license for relativism about everything, but a warning against naive “objectivity”.',
      eli5: 'We notice what matters to us — not a perfect camera view of the world.',
    },
    {
      text: 'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.',
      attribution: 'Albert Camus',
      explanation:
        'Camus ties dignity to integrity under constraint — “freedom” here is ethical posture and creation, not guaranteed comfort or escape from circumstance.',
      eli5: 'When the world feels tight, you can still choose your attitude and your honesty.',
    },
  ],
  physics: [
    {
      text: 'If I have seen further it is by standing on the shoulders of giants.',
      attribution: 'Isaac Newton',
      explanation:
        'Newton credits a chain of prior insight — science advances communally; the metaphor also quietly competes with an older “dwarf” version about perspective.',
      eli5: 'New discoveries build on old ones — like stacking blocks to see higher.',
    },
    {
      text: 'Not only is the universe stranger than we suppose, it is stranger than we can suppose.',
      attribution: 'J. B. S. Haldane',
      explanation:
        'Our intuitions evolved at human scales — quantum fields, cosmology, and deep time routinely violate common sense yet stay mathematically disciplined.',
      eli5: 'The universe can be weirder than our everyday imagination.',
    },
    {
      text: 'Physics is really nothing more than a search for ultimate simplicity.',
      attribution: 'Richard Feynman',
      explanation:
        'Feynman frames theory choice as compression — good laws unify many phenomena with few moving parts, even if the math to express them grows intricate.',
      eli5: 'Scientists like simple rules that explain lots of things at once.',
    },
    {
      text: 'Energy cannot be created or destroyed, it can only be changed from one form to another.',
      attribution: 'Albert Einstein (popular phrasing)',
      explanation:
        'Conservation laws anchor predictions — symmetry via Noether’s theorem ties conserved quantities to invariances of the action, deepening “why” it holds.',
      eli5: 'You can’t get rid of energy — you can only move it or change its form.',
    },
    {
      text: 'The universe is under no obligation to make sense to you.',
      attribution: 'Neil deGrasse Tyson',
      explanation:
        'A humbling reminder: comprehension is earned — nature isn’t tailored to primate intuitions, though mathematics often stretches intuition productively.',
      eli5: 'The world doesn’t have to feel “fair” or easy to understand.',
    },
    {
      text: 'It doesn’t matter how beautiful your theory is; it doesn’t matter how smart you are. If it doesn’t agree with experiment, it’s wrong.',
      attribution: 'Richard Feynman',
      explanation:
        'Empirical constraint is the final judge in physics — elegance motivates search, but data can kill the loveliest idea in an afternoon.',
      eli5: 'A pretty guess is still wrong if reality says no.',
    },
    {
      text: 'We are a way for the cosmos to know itself.',
      attribution: 'Carl Sagan',
      explanation:
        'Sagan links consciousness to self-modeling of the universe — not mysticism about purpose, but a poetic truth: matter organized into brains maps galaxies.',
      eli5: 'People are part of the universe — and we learn what the universe is.',
    },
    {
      text: 'Somewhere, something incredible is waiting to be known.',
      attribution: 'Carl Sagan',
      explanation:
        'Research is open-ended — the frontier is large enough that disciplined curiosity reliably finds unknown structure, not just noise.',
      eli5: 'There are still amazing secrets out there to discover.',
    },
    {
      text: 'I have no special talent. I am only passionately curious.',
      attribution: 'Albert Einstein',
      explanation:
        'Einstein downplays “genius” mystique — sustained puzzlement and stamina in problem-solving often beat glittering quickness.',
      eli5: 'Sticking with questions can matter more than being “born smart.”',
    },
    {
      text: 'The most incomprehensible thing about the universe is that it is comprehensible.',
      attribution: 'Albert Einstein',
      explanation:
        'Einstein marvels that low-energy symmetries and effective laws let us predict far beyond direct experience — a contingent fact worth explaining, not assuming.',
      eli5: 'It’s kind of wild that math can describe the universe so well.',
    },
  ],
  math: [
    {
      text: 'Mathematics is the language in which God has written the universe.',
      attribution: 'Galileo Galilei',
      explanation:
        'Galileo elevates geometry and measure — today we’d say successful physical theories are mathematical because symmetries and constraints compress phenomena.',
      eli5: 'Math is a super clear way to describe how nature behaves.',
    },
    {
      text: 'We do not know a millionth of one percent about anything.',
      attribution: 'Thomas Edison',
      explanation:
        'Edison exaggerates for humility — in math, too, open problems dwarf the proved terrain; the frontier is fractal-like in difficulty.',
      eli5: 'Even knowing a lot, what we don’t know is way bigger.',
    },
    {
      text: 'Pure mathematics is, in its way, the poetry of logical ideas.',
      attribution: 'Albert Einstein',
      explanation:
        'Einstein praises structure-for-its-own-sake — proofs can be aesthetic objects, not only engineering tools, though applications often arrive later.',
      eli5: 'Math can be beautiful like a poem made of logic.',
    },
    {
      text: 'The essence of mathematics lies in its freedom.',
      attribution: 'Georg Cantor',
      explanation:
        'Cantor defends inventing consistent structures beyond intuition — axioms define worlds; freedom constrained by logic, not by tradition alone.',
      eli5: 'You can invent new math worlds — as long as the rules don’t contradict.',
    },
    {
      text: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
      attribution: 'William Thurston',
      explanation:
        'Thurston redirects pedagogy from symbol-pushing to mental models — multiple proofs of the same fact can serve different intuitions.',
      eli5: 'Math is really about “getting it,” not just crunching symbols.',
    },
    {
      text: 'In mathematics you don’t understand things. You just get used to them.',
      attribution: 'John von Neumann',
      explanation:
        'Von Neumann jokes about climbing the abstraction ladder — comfort grows with examples; “understanding” is layered, not a single click.',
      eli5: 'Weird math ideas feel normal after you play with them long enough.',
    },
    {
      text: 'A mathematician is a machine for turning coffee into theorems.',
      attribution: 'Paul Erdős (attrib.)',
      explanation:
        'Mathematical folklore honors sustained attention — theorems emerge from long walks, drafts, and collaboration, not only flashes.',
      eli5: 'Joke: math needs focus, time, and lots of thinking fuel.',
    },
    {
      text: 'God made the integers; all else is the work of man.',
      attribution: 'Leopold Kronecker',
      explanation:
        'Kronecker’s finitism favors ℕ as psychologically and philosophically basic — modern foundations instead treat many constructions as equally legitimate under chosen axioms.',
      eli5: 'Some thinkers think whole numbers are the most “natural” math objects.',
    },
  ],
  psychology: [
    {
      text: 'The chief enemy of creativity is good sense.',
      attribution: 'Pablo Picasso',
      explanation:
        'Picasso isn’t anti-rigor — he warns that premature practicality narrows search spaces; in psychology, exploratory play matters for learning, not only optimization.',
      eli5: 'Always being “sensible” can block new ideas.',
    },
    {
      text: 'Until you make the unconscious conscious, it will direct your life and you will call it fate.',
      attribution: 'Carl Jung',
      explanation:
        'Jung invites self-inquiry — habits and projections steer behavior; naming patterns is the first step toward choosing differently.',
      eli5: 'Stuff you don’t notice about yourself still steers you.',
    },
    {
      text: 'Everything that irritates us about others can lead us to an understanding of ourselves.',
      attribution: 'Carl Jung',
      explanation:
        'Strong reactions can signal disowned traits or unmet needs — not blame-shifting, but a mirror for self-knowledge when used ethically.',
      eli5: 'What bugs you in others can teach you about you.',
    },
    {
      text: 'We are what we pretend to be, so we must be careful about what we pretend to be.',
      attribution: 'Kurt Vonnegut',
      explanation:
        'Roles become habits — self-presentation shapes identity over time; social psychology shows behavior can precede attitude change.',
      eli5: 'Acting a part long enough can turn into who you are.',
    },
    {
      text: 'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.',
      attribution: 'Albus Dumbledore (J. K. Rowling)',
      explanation:
        'Fiction, but widely cited as resilience advice — agency in small actions (seeking help, reframing) matters clinically more than waiting for mood to lift passively.',
      eli5: 'Even on bad days, tiny choices can help you feel a little better.',
    },
    {
      text: 'Between stimulus and response there is a space. In that space is our power to choose our response.',
      attribution: 'Viktor Frankl',
      explanation:
        'Frankl’s logotherapy emphasizes meaning-making under constraint — the “space” is not infinite, but pausing can change trajectory.',
      eli5: 'You get a little gap between what happens and what you do next.',
    },
    {
      text: 'The curious paradox is that when I accept myself just as I am, then I can change.',
      attribution: 'Carl Rogers',
      explanation:
        'Rogers links self-acceptance to growth — shame-driven change often backfires; accurate empathy lowers defensiveness so new behavior sticks.',
      eli5: 'Being kind to yourself can actually help you improve.',
    },
    {
      text: 'What we achieve inwardly will change outer reality.',
      attribution: 'Plutarch',
      explanation:
        'Not magical thinking — habits, confidence, and regulation alter environments through choices; effects are mediated, not instantaneous.',
      eli5: 'Working on your inner habits can slowly change your outer life.',
    },
  ],
  misc: [
    {
      text: 'An investment in knowledge pays the best interest.',
      attribution: 'Benjamin Franklin',
      explanation:
        'Franklin promotes compounding human capital — skills and literacy raise optionality across domains, not only finance.',
      eli5: 'Learning pays off over time like saving money.',
    },
    {
      text: 'It always seems impossible until it’s done.',
      attribution: 'Nelson Mandela',
      explanation:
        'Motivation through reference shifts — hard tasks update your self-model after success; planning should still respect real constraints.',
      eli5: 'Big tasks feel impossible until you finish them.',
    },
    {
      text: 'I have not failed. I’ve just found 10,000 ways that won’t work.',
      attribution: 'Thomas Edison (attrib.)',
      explanation:
        'Edison mythologizes iteration — useful for resilience if paired with learning: not all failures are equally informative without measurement.',
      eli5: 'Messing up a lot can still be progress if you learn each time.',
    },
    {
      text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
      attribution: 'Chinese proverb',
      explanation:
        'Procrastination regret is common — starting now captures remaining compounding; applies to health, skills, and relationships.',
      eli5: 'Starting late is still better than never starting.',
    },
    {
      text: 'In the middle of difficulty lies opportunity.',
      attribution: 'Albert Einstein (popular attribution)',
      explanation:
        'Often quoted in business contexts — psychologically, reframing stress as challenge (not threat) can improve performance under pressure.',
      eli5: 'Hard problems can hide chances to grow or invent something new.',
    },
  ],
};

const KIND_CYCLE: FeedCardKind[] = ['fact', 'idea', 'concept', 'quote'];

const H = (i: number, m: number) => ((i * 7919 + 104729) % m + m) % m;

function pick<T>(arr: readonly T[], i: number, salt: number): T {
  return arr[H(i + salt, arr.length)]!;
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
    return {
      id: `p-${cat}-${i}-i`,
      category: cat,
      kind: 'idea',
      text: `Try linking ${t} to ${t2} as a pair: let one supply constraints while the other supplies degrees of freedom.`,
      explanation: `This pairing is a design move, not a proof: it tells you what to vary first when teaching, debugging, or arguing. If the story feels forced, swap which side plays “constraint” and which plays “freedom” and see which ordering matches cases you care about.`,
      eli5: `Think of one topic as the “rules” and the other as the “wiggle room,” then swap if it feels wrong.`,
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

/** ~1000 generated cards per topic (facts, ideas, concepts) plus rotating quotes on every fourth card. */
export const PROCEDURAL_PER_TOPIC = 1000;

export function generateProceduralDeck(perCategory: number): FeedItem[] {
  const out: FeedItem[] = [];
  for (const cat of FEED_CATEGORIES) {
    const quotes = ROTATING_QUOTES[cat];
    for (let i = 0; i < perCategory; i++) {
      const kind = KIND_CYCLE[i % 4]!;
      if (kind === 'quote') {
        const q = quotes[H(Math.floor(i / 4), quotes.length)]!;
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
