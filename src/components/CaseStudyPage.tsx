import { ArrowLeft, ArrowUpRight, Check, Clock3, Layers3, Quote, Target, TrendingUp } from 'lucide-react';
import { projectCaseStudies } from '../data/caseStudies';

interface CaseStudyPageProps {
  slug: string;
}

export default function CaseStudyPage({ slug }: CaseStudyPageProps) {
  const study = projectCaseStudies.find((item) => item.slug === slug) ?? projectCaseStudies[0];

  return (
    <main className="min-h-screen bg-primary-bg text-text-primary">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-12">
        <a href="#home" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </a>

        <section className="mt-8 overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="eyebrow">{study.category}</p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">{study.title}</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-stone-400">{study.oneLine}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <span key={tech} className="rounded-lg border border-line bg-secondary-bg px-3 py-1.5 text-xs font-semibold text-paper">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary">
                  Book a strategy call <ArrowUpRight className="h-4 w-4" />
                </a>
                <div className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-4 py-2.5 text-xs font-semibold text-paper">
                  <Clock3 className="h-4 w-4 text-accent" /> {study.timeline}
                </div>
              </div>
            </div>

            <div className="relative min-h-[300px] border-t border-line lg:min-h-full lg:border-l lg:border-t-0">
              <img src={study.heroImage} alt={study.title} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-slate-900/85 p-6 text-white backdrop-blur-sm sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-300">Client</p>
                <p className="mt-1 text-xl font-bold tracking-tight">{study.client}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5">
              <Target className="h-5 w-5 text-accent" />
              <p className="eyebrow">Challenge</p>
            </div>
            <p className="mt-4 text-base leading-7 text-stone-400">{study.challenge}</p>
          </div>

          <div className="rounded-2xl border border-line bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5">
              <TrendingUp className="h-5 w-5 text-accent" />
              <p className="eyebrow">Outcome</p>
            </div>
            <p className="mt-4 text-base leading-7 text-stone-400">{study.result}</p>
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-line bg-card p-6 text-center shadow-sm">
              <p className="text-3xl font-bold tracking-tight text-accent">{metric.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">{metric.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-line bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5">
              <Layers3 className="h-5 w-5 text-accent" />
              <p className="eyebrow">Approach</p>
            </div>

            <ul className="mt-6 space-y-4">
              {study.approach.map((step) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-stone-400 sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-accent dark:bg-blue-950 dark:text-blue-300">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5">
              <Quote className="h-5 w-5 text-accent" />
              <p className="eyebrow">Reflection</p>
            </div>
            <p className="mt-4 text-lg leading-7 text-paper">“{study.quote}”</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted">{study.quoteAuthor}</p>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-line bg-card p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow">Next step</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-paper sm:text-3xl">Need something built with the same care?</h2>
            </div>
            <a href="#contact" className="btn-primary shrink-0">
              Start your project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
