export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: string;
  oneLine: string;
  heroImage: string;
  challenge: string;
  approach: string[];
  result: string;
  metrics: Array<{ value: string; label: string }>;
  stack: string[];
  timeline: string;
  quote: string;
  quoteAuthor: string;
};

export const projectCaseStudies: CaseStudy[] = [
  {
    slug: 'samaki-soko',
    title: 'Samaki Soko',
    client: 'Coastal seafood marketplace',
    category: 'Marketplace & discovery',
    oneLine: 'A clearer digital flow to connect fishermen with customers through a trusted, simple marketplace experience.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85',
    challenge:
      'The product needed to help users discover fresh seafood more easily while creating a digital channel that felt trustworthy, fast, and relevant for local sellers.',
    approach: [
      'Mapped the real buyer and seller journey to reduce friction in product discovery and communication.',
      'Built a clean, responsive storefront and listing flow with strong information hierarchy and clearer calls to action.',
      'Kept the experience lightweight and easy to navigate so it would work well across mobile and desktop use.',
    ],
    result: 'The experience was shaped to support access, clarity, and confidence for everyday digital discovery in a local market context.',
    metrics: [
      { value: 'Mobile-first', label: 'UX approach' },
      { value: '4-step', label: 'buyer journey' },
      { value: 'Local focus', label: 'market fit' },
    ],
    stack: ['JavaScript', 'REST APIs', 'CSS', 'HTML'],
    timeline: '2-week concept and build cycle',
    quote: 'The experience felt straightforward, trustworthy, and easy to use—especially for a market that needs clarity first.',
    quoteAuthor: 'Product concept review',
  },
  {
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    client: 'Personal finance workflow',
    category: 'Productivity & finance',
    oneLine: 'A personal finance experience designed to make spending habits easier to understand and manage without overwhelm.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85',
    challenge:
      'The goal was to give users a practical way to capture and review everyday spending without a confusing interface or excessive complexity.',
    approach: [
      'Simplified the user flow into a focused tracking experience around regular transactions and summary views.',
      'Created a more approachable interface with visual hierarchy and quick interactions that made the system feel lighter to use.',
      'Balanced usability and utility so the product could support a real habit instead of just storing data.',
    ],
    result: 'The app was shaped around clarity and consistency, helping people move from tracking expenses to understanding their habits.',
    metrics: [
      { value: 'Simple flow', label: 'interaction model' },
      { value: 'Daily use', label: 'habit fit' },
      { value: 'Clean UI', label: 'experience quality' },
    ],
    stack: ['JavaScript', 'HTML', 'CSS'],
    timeline: '1-week prototype and refinement',
    quote: 'The product felt calm, clear, and usable—exactly what a daily finance habit needs.',
    quoteAuthor: 'UX review',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    client: 'Personal brand presence',
    category: 'Branding & conversion',
    oneLine: 'A premium personal portfolio built to communicate expertise clearly, build trust, and guide new work inquiries.',
    heroImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=85',
    challenge:
      'A portfolio site needed to do more than present projects—it needed to position the builder, reflect credibility, and create a smooth path toward contact and collaboration.',
    approach: [
      'Built a premium narrative structure around value, proof, and clear user action.',
      'Designed a polished interface system with motion, hierarchy, and conversion-focused messaging.',
      'Turned the project into a strategic digital asset rather than a simple static resume.',
    ],
    result: 'The site now works as a front door for work: premium in presentation, easy to navigate, and deliberately structured to convert attention into enquiries.',
    metrics: [
      { value: 'Premium UI', label: 'brand signal' },
      { value: 'Clear CTA', label: 'conversion path' },
      { value: 'Case-study', label: 'storytelling format' },
    ],
    stack: ['React', 'TypeScript', 'Framer Motion', 'Vite'],
    timeline: 'Design + build in a focused iteration cycle',
    quote: 'It feels like a premium digital presence, not just a portfolio page.',
    quoteAuthor: 'Brand direction review',
  },
];
