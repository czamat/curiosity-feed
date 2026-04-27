import type { FeedCategory } from './types';

export type QuoteRow = { text: string; attribution: string; explanation: string; eli5: string };

/** Hand-curated quotes — always merged first into each topic’s bank; explanations stay rich. */
export const CURATED_QUOTES: Record<FeedCategory, QuoteRow[]> = {
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
