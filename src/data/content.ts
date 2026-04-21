import type { FeedCardKind, FeedCategory, FeedItem } from './types';
import { PROCEDURAL_PER_TOPIC, generateProceduralDeck } from './procedural';

export type { FeedCardKind, FeedCategory, FeedItem } from './types';
export { FEED_CATEGORIES } from './types';

type RawItem = Omit<FeedItem, 'id' | 'eli5' | 'kind'> & { kind?: FeedCardKind };

const RAW: RawItem[] = [
  {
    category: 'philosophy',
    text: 'The unexamined life is not worth living.',
    attribution: 'Socrates',
    explanation:
      'Socrates argues that moral and intellectual reflection is what makes human life distinctively valuable; drifting on autopilot forfeits the point of being human.',
  },
  {
    category: 'philosophy',
    text: 'I think, therefore I am.',
    attribution: 'René Descartes',
    explanation:
      'In his search for certainty, Descartes doubted everything—yet doubting still requires a thinking subject. The one thing he could not doubt was that thinking was occurring.',
  },
  {
    category: 'philosophy',
    text: 'Happiness is not an ideal of reason but of imagination.',
    attribution: 'Immanuel Kant',
    explanation:
      'Kant distinguishes what we can justify with logic from what we picture as a good life; felt happiness depends on how we represent the world to ourselves, not on a tidy proof.',
  },
  {
    category: 'philosophy',
    text: 'He who has a why to live can bear almost any how.',
    attribution: 'Friedrich Nietzsche',
    explanation:
      'Purpose buffers suffering: when action feels meaningful, people endure hardship that would otherwise break them—psychology later echoed this in studies of resilience.',
  },
  {
    category: 'philosophy',
    text: 'The only thing I know is that I know nothing.',
    attribution: 'Socrates (trad.)',
    explanation:
      'Socratic wisdom is intellectual humility: recognizing the limits of your understanding is the beginning of real inquiry, not a confession of stupidity.',
  },
  {
    category: 'philosophy',
    text: 'We are what we repeatedly do. Excellence, then, is not an act but a habit.',
    attribution: 'Aristotle (paraphrased)',
    explanation:
      'Character forms through practice: virtues (and vices) are built from patterns of choice over time, not from single dramatic moments.',
  },
  {
    category: 'philosophy',
    text: 'The limits of my language mean the limits of my world.',
    attribution: 'Ludwig Wittgenstein',
    explanation:
      'Early Wittgenstein ties thought to what can be said: if you lack words or concepts for something, you cannot fully entertain it as a shared, inspectable idea.',
  },
  {
    category: 'philosophy',
    text: 'One is not born, but rather becomes, a woman.',
    attribution: 'Simone de Beauvoir',
    explanation:
      'Beauvoir separates biology from social meaning: “woman” is shaped by norms, roles, and treatment—something lived and learned, not merely assigned at birth.',
  },
  {
    category: 'philosophy',
    text: 'The courage to be is the courage to accept oneself as accepted in spite of being unacceptable.',
    attribution: 'Paul Tillich',
    explanation:
      'Tillich describes accepting your finite, flawed self while still daring to exist fully—faith, for him, is trusting that you can belong without perfect merit.',
  },
  {
    category: 'philosophy',
    text: 'Entities should not be multiplied without necessity.',
    attribution: 'William of Ockham',
    explanation:
      '“Ockham’s razor” prefers simpler theories: add a new assumption only if it earns its keep by explaining something you could not explain otherwise.',
  },
  {
    category: 'philosophy',
    text: 'Man is condemned to be free.',
    attribution: 'Jean-Paul Sartre',
    explanation:
      'For Sartre, freedom is inescapable: even refusing to choose is a choice with consequences—there is no exit into a ready-made essence that decides for you.',
  },
  {
    category: 'philosophy',
    text: 'The good life is one inspired by love and guided by knowledge.',
    attribution: 'Bertrand Russell',
    explanation:
      'Russell pairs warm motivation with critical thinking: care without truth wanders; knowledge without care can become cruel cleverness.',
  },
  {
    category: 'philosophy',
    text: 'Whereof one cannot speak, thereof one must be silent.',
    attribution: 'Ludwig Wittgenstein',
    explanation:
      'A famous closing line about the boundary of sense: some matters may lie beyond what clear public language can state—so philosophy should not fake precision.',
  },
  {
    category: 'philosophy',
    text: 'The owl of Minerva spreads its wings only with the falling of dusk.',
    attribution: 'G. W. F. Hegel',
    explanation:
      'Hegel suggests philosophy understands an era only when it is mature or passing—reflection often arrives late, after events have unfolded.',
  },
  {
    category: 'philosophy',
    text: 'To be is to be perceived.',
    attribution: 'George Berkeley',
    explanation:
      'Berkeley’s idealism ties existence (for ordinary objects) to minds: things exist as stable ideas coordinated by experience—matter as independent “stuff” is questioned.',
  },
  {
    category: 'philosophy',
    text: 'Act only according to that maxim whereby you can at the same time will that it should become a universal law.',
    attribution: 'Immanuel Kant',
    explanation:
      'Kant’s test asks whether your rule for action could be everyone’s rule without contradiction—moral worth comes from duty to principles you can universalize.',
  },
  {
    category: 'philosophy',
    text: 'Hell is other people.',
    attribution: 'Jean-Paul Sartre',
    explanation:
      'Often misunderstood as misanthropy: Sartre meant others threaten your self-image by seeing and judging you—being “looked at” can feel like loss of freedom.',
  },
  {
    category: 'philosophy',
    text: 'The philosopher’s job is not to supply ethics ready-made, but to seek understanding.',
    attribution: 'Martha Nussbaum (paraphrased)',
    explanation:
      'Philosophy clarifies concepts, trade-offs, and human goods; it helps you see complexity rather than handing down a simple rulebook for every case.',
  },
  {
    category: 'philosophy',
    text: 'Freedom is always the freedom of the one who thinks differently.',
    attribution: 'Rosa Luxemburg',
    explanation:
      'Luxemburg ties liberty to dissent: a society is not free if only conformists are safe—minority voices are the stress test of real freedom.',
  },
  {
    category: 'philosophy',
    text: 'Cogito, ergo sum — doubt everything until you find what cannot be doubted.',
    attribution: 'Descartes (spirit)',
    explanation:
      'The method is radical doubt in service of foundations: strip away beliefs until you reach something indubitable—then rebuild carefully from there.',
  },
  {
    category: 'physics',
    text: 'Nothing can travel faster than light in vacuum: roughly 299,792,458 meters per second — a cosmic speed limit baked into spacetime.',
    explanation:
      'Special relativity makes c the maximum speed for matter, signals, and information in vacuum; massless particles travel at c, massive objects approach it only asymptotically.',
  },
  {
    category: 'physics',
    text: 'Time dilation means a clock moving relative to you ticks slower from your perspective — real, measured, and essential for GPS satellites.',
    explanation:
      'Moving clocks run slow relative to a rest frame; GPS must combine special- and general-relativistic corrections or positions would drift by kilometers per day.',
  },
  {
    category: 'physics',
    text: 'Quantum entanglement does not send usable information faster than light, but it does link measurement outcomes in ways that puzzled Einstein.',
    explanation:
      'Entangled particles share correlations verified by later comparisons; you cannot control your local outcome to signal, so relativity’s light-speed limit stays intact.',
  },
  {
    category: 'physics',
    text: 'Black holes are not “holes” but regions where gravity is so strong that light cannot escape the event horizon.',
    explanation:
      'Mass is packed so densely that escape velocity exceeds c beyond the horizon; the hole is a region of spacetime, not a tunnel in another dimension (in basic models).',
  },
  {
    category: 'physics',
    text: 'Thermodynamics’ second law: entropy of an isolated system tends to increase — why coffee cools and why “past” feels different from “future”.',
    explanation:
      'Many microscopic arrangements look “the same” macroscopically; there are far more disordered states than ordered ones, so increase in entropy defines time’s arrow.',
  },
  {
    category: 'physics',
    text: 'Wave–particle duality: quantum objects behave like waves of probability until a measurement forces a definite outcome.',
    explanation:
      'Interference shows wave behavior; clicks in detectors show discrete events—the wavefunction encodes probabilities, and Born’s rule links it to observed frequencies.',
  },
  {
    category: 'physics',
    text: 'Neutrinos pass through matter almost untouched — trillions from the sun stream through you each second.',
    explanation:
      'They interact only via the weak force (and gravity), so cross-sections are tiny; huge detectors catch rare collisions to study neutrino physics.',
  },
  {
    category: 'physics',
    text: 'Superconductors carry current with zero resistance below a critical temperature — macroscopic quantum behavior.',
    explanation:
      'Electrons form Cooper pairs that condense into a single quantum state; magnetic flux is quantized in type-II superconductors—used in MRI magnets and research.',
  },
  {
    category: 'physics',
    text: 'Chaos theory: tiny differences in initial conditions can lead to vastly different outcomes — the butterfly effect.',
    explanation:
      'Nonlinear systems can amplify small errors exponentially; long-term prediction hits practical limits even when the laws are deterministic.',
  },
  {
    category: 'physics',
    text: 'The Pauli exclusion principle helps explain why matter is stable and why electrons stack into shells in atoms.',
    explanation:
      'Identical fermions cannot share the same quantum state; electrons fill orbitals from the ground up, shaping chemistry’s periodic table.',
  },
  {
    category: 'physics',
    text: 'LIGO detected gravitational waves — ripples in spacetime from merging black holes billions of light-years away.',
    explanation:
      'Massive accelerating bodies warp spacetime; mergers produce chirps that stretch arms of interferometers by less than a proton’s width—yet we measure them.',
  },
  {
    category: 'physics',
    text: 'Absolute zero (~−273.15 °C) is a temperature floor: quantum motion never fully stops thanks to zero-point energy.',
    explanation:
      'The uncertainty principle forbids a particle from sitting perfectly still; residual motion remains, so “zero kelvin” is approached but not reached in practice.',
  },
  {
    category: 'physics',
    text: 'A laser aligns light waves in phase — from barcode scanners to gravitational-wave interferometry.',
    explanation:
      'Stimulated emission amplifies a coherent mode; photons march in lockstep, enabling precise ranging, surgery, fiber optics, and sensitive measurements.',
  },
  {
    category: 'physics',
    text: 'Nuclear binding energy explains why stars shine: mass converts to energy via E = mc² in fusion and fission.',
    explanation:
      'Nucleons are more tightly bound in mid-mass nuclei; fusion of light elements and fission of heavy ones releases energy because the products have less total mass.',
  },
  {
    category: 'physics',
    text: 'The cosmic microwave background is relic radiation from when the universe became transparent — a snapshot of the early cosmos.',
    explanation:
      'At recombination (~380,000 years after the Big Bang), atoms formed and photons decoupled; those photons cooled with expansion to a faint microwave glow we still detect.',
  },
  {
    category: 'physics',
    text: 'Semiconductors rely on band gaps — quantum properties that make transistors and solar cells possible.',
    explanation:
      'Electrons need energy to jump from the valence band to the conduction band; doping and fields control current—this is the physics behind chips and PV cells.',
  },
  {
    category: 'physics',
    text: 'Heisenberg’s uncertainty principle sets fundamental limits on how precisely certain pairs of properties can be known together.',
    explanation:
      'Conjugate variables like position and momentum cannot both be arbitrarily sharp; it is not only measurement noise but a statement about quantum states.',
  },
  {
    category: 'physics',
    text: 'Feynman’s path integral sums over all possible histories — a different lens on quantum mechanics.',
    explanation:
      'Instead of a single classical path, quantum amplitudes arise from summing contributions from many trajectories, weighting by the action—equivalent to other formulations.',
  },
  {
    category: 'physics',
    text: 'Dark matter outweighs visible matter in galaxies; we infer it from gravity, not from light.',
    explanation:
      'Rotation curves and lensing show extra mass; it clumps like matter but does not interact electromagnetically—candidates include new particles beyond the Standard Model.',
  },
  {
    category: 'physics',
    text: 'Symmetry breaking in the early universe helped determine which particles acquired mass — the Higgs mechanism.',
    explanation:
      'The Higgs field has a nonzero vacuum expectation value; particles that couple to it gain effective mass—confirmed by the Higgs boson discovery at the LHC.',
  },
  {
    category: 'math',
    text: 'There are infinitely many primes — Euclid’s proof is still taught after two millennia.',
    explanation:
      'Assume finitely many primes, multiply them all, add one: the result is not divisible by any prime on your list, forcing a new prime—contradiction.',
  },
  {
    category: 'math',
    text: 'The square root of 2 is irrational — a shock to the ancient Greeks who hoped all ratios were “clean”.',
    explanation:
      'If √2 = a/b in lowest terms, then 2b² = a² forces a² even, then a even, then b even—contradicting “lowest terms”; so √2 cannot be a ratio of integers.',
  },
  {
    category: 'math',
    text: 'Euler’s identity: e^(iπ) + 1 = 0 links five fundamental constants in one short equation.',
    explanation:
      'From Euler’s formula e^(ix) = cos x + i sin x, set x = π to get e^(iπ) = −1; it unifies exponentials, trigonometry, and the imaginary unit in one line.',
  },
  {
    category: 'math',
    text: 'The harmonic series 1 + 1/2 + 1/3 + … diverges, but incredibly slowly.',
    explanation:
      'Partial sums pass every threshold eventually—compare to an integral of 1/x—but growth is logarithmic, so reaching huge sums takes astronomically many terms.',
  },
  {
    category: 'math',
    text: 'Gödel’s incompleteness theorems: sufficiently rich formal systems cannot prove all truths about arithmetic within themselves.',
    explanation:
      'Any consistent, computable axiom system strong enough for basic arithmetic contains true statements it cannot prove—truth outruns formal proof in that setting.',
  },
  {
    category: 'math',
    text: 'The birthday paradox: in a group of 23 people, a same-birthday pair is more likely than not.',
    explanation:
      'You are counting collisions among many pairs: 23 people make 253 pairs; the chance all differ stays below 50%—our intuition underestimates combinatorial crowding.',
  },
  {
    category: 'math',
    text: 'There are exactly five Platonic solids — proved in antiquity, still beautiful today.',
    explanation:
      'Regular polyhedra need identical regular polygons meeting identically at vertices; only five angle combinations close up in 3D (tetrahedron through dodecahedron).',
  },
  {
    category: 'math',
    text: 'The Monty Hall problem: switching doors doubles your chance of winning in the classic setup — probability is counterintuitive.',
    explanation:
      'Your first pick has 1/3 chance; the host always reveals a goat among the rest, so the unopened remaining door concentrates 2/3 probability—switching harvests that mass.',
  },
  {
    category: 'math',
    text: 'Fractals like the Mandelbrot set exhibit infinite detail from simple rules — complexity from iteration.',
    explanation:
      'Repeatedly apply z ↦ z² + c; for some c, the orbit stays bounded and yields intricate boundaries—self-similarity appears at many scales.',
  },
  {
    category: 'math',
    text: 'The Basel problem: 1 + 1/4 + 1/9 + … = π²/6 — a bridge between integers and circles.',
    explanation:
      'Euler showed the sum of reciprocal squares equals ζ(2); proofs connect to Fourier series or the Basel sum’s link to π through clever analysis.',
  },
  {
    category: 'math',
    text: 'Cantor showed some infinities are larger than others — infinity is not a single “size”.',
    explanation:
      'There is no bijection between ℕ and ℝ—diagonalization constructs a real missing from any alleged list—so the continuum has strictly greater cardinality.',
  },
  {
    category: 'math',
    text: 'The four-color theorem: any map on a plane needs at most four colors so no two adjacent regions share a color.',
    explanation:
      'The proof was the first major computer-assisted case check: unavoidable sets of configurations reduce to thousands of cases verified by program.',
  },
  {
    category: 'math',
    text: 'Fermat’s Last Theorem resisted proof for centuries until Wiles — a landmark in number theory.',
    explanation:
      'No n > 2 has positive integers with aⁿ + bⁿ = cⁿ; Wiles proved a case of the modularity theorem linking elliptic curves and modular forms—far deeper than Fermat’s margin.',
  },
  {
    category: 'math',
    text: 'The golden ratio appears in art and nature, but many “perfect proportion” claims are overstated — still, φ ≈ 1.618 is a real constant.',
    explanation:
      'φ = (1+√5)/2 solves φ² = φ + 1 and shows up in pentagons, Fibonacci limits, and some growth patterns—though not every spiral or rectangle is “golden”.',
  },
  {
    category: 'math',
    text: 'Bayes’ rule updates beliefs with evidence — the backbone of much modern statistics and machine learning.',
    explanation:
      'Posterior odds combine prior belief with likelihood of data; it formalizes learning under uncertainty and powers spam filters, diagnostics, and many classifiers.',
  },
  {
    category: 'math',
    text: 'The Riemann hypothesis remains open — deeply connected to the distribution of prime numbers.',
    explanation:
      'It claims all non-trivial zeros of the Riemann ζ(s) lie on the critical line Re(s) = 1/2; a proof would sharpen our understanding of how primes thin out.',
  },
  {
    category: 'math',
    text: 'Graph theory began with Königsberg’s bridges: Euler found a simple criterion for traversing every edge once.',
    explanation:
      'A walk using each edge exactly once exists iff at most two vertices have odd degree; the Königsberg layout had four odd vertices—so the famous walk is impossible.',
  },
  {
    category: 'math',
    text: 'The derivative measures instantaneous rate of change; the integral accumulates area — the fundamental theorem links them.',
    explanation:
      'Differentiation and integration are inverses (for nice functions): the area under f′ from a to b is f(b)−f(a)—one of calculus’s central bridges.',
  },
  {
    category: 'math',
    text: 'Imaginary numbers aren’t imaginary in usefulness: they complete algebra and describe waves and rotations elegantly.',
    explanation:
      'Extending ℝ to ℂ makes every non-constant polynomial have a root; i encodes 90° rotations and simplifies AC circuits, quantum amplitudes, and signal processing.',
  },
  {
    category: 'math',
    text: 'The pigeonhole principle: if n+1 items go into n boxes, some box has at least two — deceptively powerful.',
    explanation:
      'Obvious but potent: it proves Ramsey-type facts, finite bounds in combinatorics, and many existence proofs without constructing the object explicitly.',
  },
  {
    category: 'misc',
    text: 'Octopuses have distributed intelligence: much of their “thinking” happens in their arms.',
    explanation:
      'Arm neurons can initiate reflex-like behaviors locally; the central brain coordinates but does not micromanage every sucker—handy for soft bodies in tight spaces.',
  },
  {
    category: 'misc',
    text: 'Honey never spoils in sealed archaeological jars — low water activity and natural chemistry.',
    explanation:
      'High sugar concentration osmotically dehydrates microbes; acidity and hydrogen peroxide from enzymes help—Egyptian tombs yielded edible-looking ancient honey.',
  },
  {
    category: 'misc',
    text: 'Oxford University is older than the Aztec Empire — timelines are stranger than they feel.',
    explanation:
      'Teaching existed at Oxford by the late 1100s; the Aztec Triple Alliance rose in the 1400s—”old” institutions can predate civilizations we picture as ancient.',
  },
  {
    category: 'misc',
    text: 'Your gut has a vast ecosystem of microbes that influence mood, immunity, and digestion.',
    explanation:
      'The microbiome trains the immune system, ferments fiber into useful metabolites, and talks to the brain via nerves and chemicals—the gut-brain axis is active research.',
  },
  {
    category: 'misc',
    text: 'Venus rotates backward and slower than it orbits the sun — a day longer than a year there.',
    explanation:
      'Retrograde spin may come from ancient giant impacts or tidal evolution; its 243-day rotation beats its 225-day orbit—solar day differs from sidereal day.',
  },
  {
    category: 'misc',
    text: 'Sharks predate trees — life on Earth has deep, uneven timelines.',
    explanation:
      'Shark lineages appear hundreds of millions of years ago; widespread forests and recognizable trees came later—different lineages have different “firsts”.',
  },
  {
    category: 'misc',
    text: 'The human brain uses roughly 20% of resting energy — expensive tissue.',
    explanation:
      'Despite ~2% of body mass, the brain burns a large share of glucose and oxygen—neural signaling and maintenance are metabolically costly.',
  },
  {
    category: 'misc',
    text: 'Bananas are berries; strawberries aren’t — botany’s categories don’t match grocery intuition.',
    explanation:
      'A berry develops from a single ovary with seeds inside; strawberries aggregate accessory tissue—language “fruit” and botanical fruit diverge.',
  },
  {
    category: 'misc',
    text: 'Wombat poop is cube-shaped — fluid dynamics and intestinal grooves, not Photoshop.',
    explanation:
      'Slow digestion and uneven intestinal elasticity shape corners; cubes may mark territory by stacking—nature’s odd engineering problem.',
  },
  {
    category: 'misc',
    text: 'There’s a species of jellyfish (Turritopsis) that can revert its life cycle — biological immortality with caveats.',
    explanation:
      'It can return to a polyp stage under stress, resetting development; in practice most individuals still die from predation, disease, or environment.',
  },
  {
    category: 'misc',
    text: 'The shortest war on record lasted ~38–45 minutes (Anglo-Zanzibar War, 1896).',
    explanation:
      'A palace bombardment ended resistance quickly after a disputed succession—records vary slightly, but it remains a stark example of lopsided colonial conflict.',
  },
  {
    category: 'misc',
    text: 'Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.',
    explanation:
      'Cleopatra VII (~69–30 BCE) is about 2,500 years after the Great Pyramid and ~2,000 years before Apollo 11—human history is long; “ancient” spans huge gaps.',
  },
  {
    category: 'misc',
    text: 'Glass in old windows isn’t thicker at the bottom because it flows — it was made uneven on purpose.',
    explanation:
      'Old crown glass was spun into sheets thicker near the center; installers put the heavy edge down for stability—amorphous solids flow negligibly at room temperature.',
  },
  {
    category: 'misc',
    text: 'A group of flamingos is called a flamboyance — English occasionally gets it right.',
    explanation:
      'Collective nouns are often poetic inventions; “flamboyance” fits the pink spectacle—though not all dictionaries list every whimsical term.',
  },
  {
    category: 'misc',
    text: 'The smell of rain (petrichor) comes partly from oils and geosmin released when rain hits soil.',
    explanation:
      'Plants exude oils; actinomycetes make geosmin—our noses are extremely sensitive to it—hence the earthy scent after a dry spell.',
  },
  {
    category: 'misc',
    text: 'Sloths only poop about once a week — a risky trip to the ground that shapes their ecology.',
    explanation:
      'Slow metabolism means infrequent defecation; descending exposes them to predators—some algae even grow on their fur, a miniature ecosystem.',
  },
  {
    category: 'misc',
    text: 'There are more ways to shuffle a deck of cards than atoms on Earth — 52! is enormous.',
    explanation:
      '52! ≈ 8×10⁶⁷, vastly exceeding ~10⁵⁰ atoms on Earth—likely every well-shuffled ordering in casual play is unique in human history.',
  },
  {
    category: 'misc',
    text: 'Mercury, not Venus, has the most extreme day–night temperature swing among rocky planets — thin atmosphere.',
    explanation:
      'With almost no insulating air, Mercury’s surface rockets in sun and plunges in shadow; Venus’s thick CO₂ blanket smooths day–night contrast despite furnace heat.',
  },
  {
    category: 'misc',
    text: 'DNA is a digital-like code with four letters, but its expression is wildly analog and context-dependent.',
    explanation:
      'The same gene can be spliced, regulated, and epigenetically silenced—development and environment turn a discrete alphabet into graded traits.',
  },
  {
    category: 'misc',
    text: 'The word “set” has the most definitions in the Oxford English Dictionary — language is messy.',
    explanation:
      'Common short words accumulate senses over centuries—nouns, verbs, sports, math, music—lexicography documents sprawling usage, not tidy one-to-one meanings.',
  },
  {
    category: 'psychology',
    text: 'People tend to explain others’ behavior by personality and their own by circumstances — the fundamental attribution error.',
    explanation:
      'We overweight dispositional causes for other people’s actions and situational causes for our own; cross-cultural studies show the gap, though strength varies.',
  },
  {
    category: 'psychology',
    text: 'The Dunning–Kruger effect: novices often overestimate their skill, while experts can underestimate theirs.',
    explanation:
      'Metacognitive blind spots mean the least competent may lack the tools to see their gaps; experts assume others find easy what they mastered.',
  },
  {
    category: 'psychology',
    text: 'Delayed gratification in childhood correlates with later outcomes — the famous “marshmallow test,” with plenty of nuance.',
    explanation:
      'Longitudinal work linked waiting for a second treat to later competence, but replication shows context matters: trust, stability, and environment shape “waiting”.',
  },
  {
    category: 'psychology',
    text: 'A growth mindset frames ability as trainable; a fixed mindset treats it as static.',
    attribution: 'Carol Dweck (popularized)',
    explanation:
      'Emphasizing effort and strategies versus innate talent changes how people respond to failure — though overselling “mindset” alone can ignore real barriers.',
  },
  {
    category: 'psychology',
    text: 'Classical conditioning links a neutral cue with a reflex — think Pavlov’s bell and salivation.',
    explanation:
      'Repeated pairing makes the cue alone trigger the response; extinction happens when the cue appears without the unconditioned stimulus long enough.',
  },
  {
    category: 'psychology',
    text: 'Operant conditioning shapes behavior through consequences — reinforcement strengthens, punishment suppresses.',
    attribution: 'B. F. Skinner (tradition)',
    explanation:
      'Schedules of reinforcement (fixed, variable, ratio, interval) produce different response rates and extinction curves — the backbone of much behavior therapy design.',
  },
  {
    category: 'psychology',
    text: 'Confirmation bias: we notice and remember evidence that fits what we already believe.',
    explanation:
      'Testing hypotheses, we often search for confirming cases; disconfirmation feels costly, so beliefs can persist despite mixed data.',
  },
  {
    category: 'psychology',
    text: 'The availability heuristic: if examples come to mind easily, we judge them more frequent or likely.',
    explanation:
      'Vivid media coverage can inflate perceived risk of rare events; the heuristic is fast but systematically biased by memorability.',
  },
  {
    category: 'psychology',
    text: 'Memory is reconstructive, not a video replay — each recall can subtly rewrite the story.',
    explanation:
      'Schemas, suggestions, and new information blend into “memories”; eyewitness confidence poorly tracks accuracy without careful lineup procedures.',
  },
  {
    category: 'psychology',
    text: 'Sleep consolidates memory — cutting sleep especially hurts emotional regulation and learning.',
    explanation:
      'Slow-wave and REM sleep support different memory systems; chronic deprivation raises accident risk and impairs attention like mild intoxication.',
  },
  {
    category: 'psychology',
    text: 'The bystander effect: responsibility diffuses in a crowd, so help is less likely when many watch.',
    explanation:
      'Pluralistic ignorance and diffusion of responsibility matter; the story is more complex than the classic narrative, but group size affects intervention.',
  },
  {
    category: 'psychology',
    text: 'Cognitive dissonance: holding conflicting beliefs feels unpleasant, so we often change attitudes to match behavior.',
    explanation:
      'Festinger’s theory predicts rationalization after tough choices — “I chose it, so it must be good” — a core social-psychology mechanism.',
  },
  {
    category: 'psychology',
    text: 'The placebo effect is real neurobiological relief from belief and ritual, not “fake medicine” in outcome terms.',
    explanation:
      'Expectation, context, and conditioning modulate pain and symptoms; that is why trials need placebo controls and why ethics around placebos are delicate.',
  },
  {
    category: 'psychology',
    text: 'Hedonic adaptation: big wins and losses fade emotionally faster than we expect — we recalibrate to a baseline.',
    explanation:
      'Lottery winners and accident survivors often return toward prior happiness levels over time — forecasting neglects this “set point” drift.',
  },
  {
    category: 'psychology',
    text: 'Neuroplasticity means brains keep changing with practice — adulthood is not a frozen wiring diagram.',
    explanation:
      'Learning rewires synapses; stroke rehab and skill training exploit plasticity, though myths of “10% of the brain” are false.',
  },
  {
    category: 'psychology',
    text: 'The Stroop effect: naming ink colors is slower when the word disagrees — automatic reading interferes with the task.',
    explanation:
      'It reveals conflict between controlled and automatic processes; used in clinical screens and cognitive science paradigms.',
  },
  {
    category: 'psychology',
    text: 'Working memory is tiny — roughly a handful of chunks — which is why complex instructions overload us.',
    attribution: 'George Miller (tradition)',
    explanation:
      'Miller’s “magical number seven” is a rough guide; chunking expands effective capacity by grouping items into meaningful units.',
  },
  {
    category: 'psychology',
    text: 'Attachment styles in close relationships echo early caregiving patterns — secure, anxious, avoidant, and mixed models.',
    explanation:
      'Longitudinal and adult measures show stability and change; therapy and new relationships can “earn” security over time.',
  },
  {
    category: 'psychology',
    text: 'Impostor phenomenon: high achievers who feel fraudulent despite evidence — common in new roles and underrepresented groups.',
    explanation:
      'It is not a clinical disorder but a widespread experience; naming it reduces shame and opens room for accurate self-appraisal.',
  },
  {
    category: 'psychology',
    text: 'Exposure therapy for phobias uses gradual, repeated contact with the feared cue in a safe context.',
    explanation:
      'Inhibitory learning updates threat predictions; escape and avoidance maintain fear — treatment undoes the cycle with hierarchy-based exposure.',
  },
];

/** Same order as `RAW` — ultra-plain paraphrases for each card. */
const ELI5_FOR_RAW: string[] = [
  'If you never stop and think about how you’re living, you might waste your life on autopilot.',
  'The one thing you can’t doubt is that you’re thinking right now.',
  'Feeling happy is more about imagination than cold logic.',
  'If you know why you’re doing something hard, you can put up with almost anything.',
  'Saying “I don’t know” can be the start of real wisdom.',
  'You become what you do over and over — good or bad.',
  'If you don’t have words for something, it’s harder to think clearly about it.',
  'Growing up as a “woman” or “man” is learned from society, not only from biology.',
  'You can still feel okay even when you’re not perfect.',
  'Pick the simplest story that fits — don’t add extra guesses for no reason.',
  'You’re always choosing something — even “not choosing” is a choice.',
  'Care about people, but also learn what’s true so you don’t hurt them by mistake.',
  'If you can’t say it clearly, don’t pretend you did.',
  'We often understand a time only after it’s mostly over.',
  'Some thinkers say ordinary objects need to be experienced to fully “be there” for us.',
  'Only do things you’d be okay with everyone doing.',
  'Other people see you and judge you — that can feel uncomfortable.',
  'Philosophy helps you understand hard questions, not just follow a simple rulebook.',
  'Freedom is real when people who disagree are safe too.',
  'Doubt everything until you find one thing you’re sure of — then build carefully.',
  'Nothing can go faster than light in empty space.',
  'If you zoom past someone, your clock looks slower to them — and GPS has to fix this.',
  'Quantum links are weird, but they don’t send usable messages faster than light.',
  'A black hole is a place where gravity traps even light.',
  'Closed systems tend to get messier over time — that’s why time has a direction.',
  'Tiny things act like waves until you measure them, then you get one definite result.',
  'Neutrinos are ghostly particles that fly through you almost without noticing.',
  'Some super-cold wires carry electricity without wasting energy as heat.',
  'Tiny changes at the start can make huge differences later — the “butterfly effect.”',
  'Certain particles can’t share the same quantum “seat,” and that shapes atoms.',
  'Huge things crashing in space send ripples we can detect with giant rulers.',
  'You can’t reach a temperature where every bit of motion stops — a little jitter stays.',
  'A laser lines up light waves so they march together — useful for tools and science.',
  'Stars shine by turning a tiny bit of mass into a lot of energy.',
  'The universe left a faint glow from when it first became see-through.',
  'Computer chips use materials whose electricity can be switched in tiny gaps.',
  'You can’t perfectly pin down both where something is and how fast it’s going.',
  'One way to do quantum math is to add up many possible paths.',
  'There’s extra gravity in space that we can’t see — we call it dark matter.',
  'A field in space helps give particles their mass.',
  'Primes never run out — there’s always another one you didn’t list yet.',
  'The square root of two can’t be written as a clean fraction.',
  'A famous shortcut ties the numbers e, π, and i in one small formula.',
  'Add 1 + 1/2 + 1/3 + … forever and the sum grows without end, but very slowly.',
  'In rich enough math, some true statements can’t be proved inside one fixed system.',
  'In a room of 23 people, two sharing a birthday is more likely than it feels.',
  'Only five perfectly regular 3D dice shapes exist.',
  'On a game show, switching doors often wins because the host showed you a goat.',
  'Repeat a simple rule over and over and you can get infinite detail (fractals).',
  'A famous sum of fractions lands exactly on π²/6.',
  'Some infinite lists are bigger than others — infinity isn’t one size.',
  'Any flat map can be colored with at most four colors so neighbors differ.',
  'For cubes and higher powers, there are no whole-number solutions like ordinary Pythagorean triples.',
  'About 1.618 shows up in shapes and growth — not every spiral is “golden,” though.',
  'Start with a guess, then update it when new evidence shows up.',
  'A famous unsolved idea connects prime numbers to special zeros in a function.',
  'You can’t walk every bridge once on the old Königsberg map.',
  'Speed and “area under the curve” are opposite ideas that help each other.',
  'The number i makes circles and waves easier to describe, even if it looks odd.',
  'If you have more things than boxes, at least one box gets two things.',
  'An octopus’s arms can do a lot on their own without the brain ordering every move.',
  'Thick sugar and natural chemistry keep sealed honey from spoiling.',
  'Some European schools are older than empires you picture as ancient.',
  'Your gut bugs talk to your brain and immune system — not just digestion.',
  'Venus spins backward and a day there is longer than its year.',
  'Sharks as a group showed up before widespread forests.',
  'Your brain burns a big chunk of your resting calories.',
  'Botanists call some fruits “berries” differently than grocery stores do.',
  'Wombat intestines shape poop into little cubes.',
  'One jellyfish can rewind to a younger stage — but most still get eaten.',
  'A tiny war in 1896 may have lasted about 45 minutes.',
  'Cleopatra lived closer to the Moon landing than to the Great Pyramid.',
  'Old window glass is thicker at the bottom because of how it was made and installed.',
  'A bunch of flamingos is called a flamboyance.',
  'Rain frees smelly stuff from soil — that’s the earthy smell.',
  'Sloths poop rarely because going to the ground is dangerous.',
  'There are more ways to shuffle a deck than atoms on Earth.',
  'With almost no air, Mercury’s surface swings between very hot and very cold.',
  'DNA uses four letters, but bodies read them in messy, flexible ways.',
  'The word “set” has a huge pile of different meanings.',
  'We blame other people’s choices on their personality, but our own on the situation.',
  'Beginners sometimes think they’re great; experts sometimes forget how hard it is for others.',
  'Kids who can wait for a second treat often do better later — but trust and home life matter too.',
  'Believing you can get better with practice helps you keep trying after mistakes.',
  'If a bell always comes with food, the bell alone can make you drool.',
  'Rewards and consequences teach habits — timing and patterns matter.',
  'We notice facts that fit what we already think and miss the rest.',
  'If examples are easy to imagine, we think they happen more often.',
  'Memories get rebuilt each time you remember — not like replaying a perfect video.',
  'Sleep helps your brain store what you learned and steady your mood.',
  'In a crowd, everyone may wait for someone else to help first.',
  'When two beliefs clash, we often change our mind to feel less uncomfortable.',
  'Believing a pill helps can really ease pain — your brain joins in.',
  'Big good or bad events feel huge at first, then feelings often drift back toward normal.',
  'Brains can rewire when you learn or practice — they’re not stuck forever.',
  'Reading a color word is automatic, so it’s hard to name the ink when they disagree.',
  'You can only juggle a few ideas at once — grouping helps.',
  'Early bonds shape how we expect closeness to feel later — but people can change.',
  'Even capable people sometimes feel like a faker — it’s common.',
  'Facing a fear in small safe steps can teach your brain it’s not so dangerous.',
];

if (ELI5_FOR_RAW.length !== RAW.length) {
  throw new Error(`ELI5_FOR_RAW length ${ELI5_FOR_RAW.length} does not match RAW length ${RAW.length}`);
}

const fromRaw: FeedItem[] = RAW.map((item, i) => ({
  ...item,
  kind: item.kind ?? (item.attribution ? ('quote' as const) : ('fact' as const)),
  id: `m-${i}`,
  eli5: ELI5_FOR_RAW[i]!,
}));

export const MASTER_ITEMS: FeedItem[] = [...fromRaw, ...generateProceduralDeck(PROCEDURAL_PER_TOPIC)];

const BATCH_SIZE = 12;

function shuffleInPlace<T>(arr: T[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
}

function poolForCategories(categories: FeedCategory[] | undefined): FeedItem[] {
  if (!categories || categories.length === 0) return [...MASTER_ITEMS];
  return MASTER_ITEMS.filter((item) => categories.includes(item.category));
}

export type TakeNextBatchOptions = {
  /** If empty or omitted, all categories are included. */
  categories?: FeedCategory[] | null;
};

/** Yields endless random batches from the master pool without immediate repeats within a batch. */
export function takeNextBatch(options?: TakeNextBatchOptions): FeedItem[] {
  let pool = poolForCategories(options?.categories ?? undefined);
  if (pool.length === 0) pool = [...MASTER_ITEMS];
  const copy = [...pool];
  shuffleInPlace(copy);
  return copy.slice(0, Math.min(BATCH_SIZE, copy.length));
}
