import { ArrowUpRight, BookOpen, Clock3 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const articles = [
  {
    title: 'What makes a website feel trustworthy?',
    category: 'Product thinking',
    readTime: '3 min read',
    excerpt: 'Trust comes from small, consistent signals: clear hierarchy, quick feedback, real contact details, and an experience that behaves as expected.',
    takeaway: 'Start with the visitor’s next question, then make the answer easy to find.',
  },
  {
    title: 'Performance is a user-experience feature',
    category: 'Web performance',
    readTime: '4 min read',
    excerpt: 'Speed affects whether people stay, understand the offer, and complete a task. The best gains usually come from a few careful choices.',
    takeaway: 'Use appropriately sized assets, ship only what is needed, and test the real mobile experience.',
  },
  {
    title: 'Security belongs in the first draft',
    category: 'Engineering',
    readTime: '3 min read',
    excerpt: 'Secure defaults are easier to establish while a product is taking shape than to bolt on after launch.',
    takeaway: 'Keep secrets out of the client, validate inputs, and make third-party integrations intentional.',
  },
] as const;

export default function Writing() {
  return (
    <SectionWrapper id="writing" className="border-t border-line">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Writing</p>
          <h2 className="section-title">Notes from the build process.</h2>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent hover:text-blue-700"
        >
          Suggest a topic <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.title}
            className="flex min-h-[310px] flex-col rounded-2xl border border-line bg-card p-6 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md sm:p-7"
          >
            <div className="flex items-center justify-between gap-4 text-xs font-semibold text-muted">
              <span className="text-accent">{article.category}</span>
              <span className="flex shrink-0 items-center gap-1">
                <Clock3 className="h-3.5 w-3.5" />
                {article.readTime}
              </span>
            </div>

            <div className="mt-6 grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-accent dark:bg-blue-950/50">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
            </div>

            <h3 className="mt-4 text-xl font-bold tracking-tight text-paper">{article.title}</h3>
            <p className="mt-2.5 text-sm leading-6 text-stone-400">{article.excerpt}</p>

            <details className="mt-auto pt-6 border-t border-line mt-6">
              <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-wider text-accent hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                Read the takeaway <span aria-hidden="true">→</span>
              </summary>
              <p className="mt-2.5 rounded-lg bg-secondary-bg p-3 text-xs leading-5 text-stone-400">
                {article.takeaway}
              </p>
            </details>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
