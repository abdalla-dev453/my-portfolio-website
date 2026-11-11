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
        <a href="#home" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-forest hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </a>

        <section className="mt-10 overflow-hidden rounded-[2rem] border border-line bg-card shadow-[0_30px_80px_rgba(27,72,53,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">{study.category}</p>
              <h1 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-paper sm:text-5xl lg:text-6xl">{study.title}</h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-stone-400 sm:text-base">{study.oneLine}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {study.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-line bg-white/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-forest">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary">Book a strategy call <ArrowUpRight className="h-4 w-4" /></a>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-forest">
                  <Clock3 className="h-3.5 w-3.5" /> {study.timeline}
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] border-t border-line lg:min-h-full lg:border-l lg:border-t-0">
              <img src={study.heroImage} alt={study.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123d32]/80 via-[#123d32]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[#fbfaf5] sm:p-8">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#fbfaf5]/75">Client</p>
                <p className="mt-2 text-2xl font-bold tracking-[-0.04em]">{study.client}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-line bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-accent" />
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Challenge</p>
            </div>
            <p className="mt-6 text-sm leading-7 text-stone-400 sm:text-base">{study.challenge}</p>
          </div>

          <div className="rounded-[1.75rem] border border-line bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-accent" />
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Outcome</p>
            </div>
            <p className="mt-6 text-sm leading-7 text-stone-400 sm:text-base">{study.result}</p>
          </div>
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-3">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="rounded-[1.5rem] border border-line bg-card p-6 text-center shadow-[0_18px_40px_rgba(27,72,53,0.04)]">
              <p className="text-3xl font-bold tracking-[-0.05em] text-paper">{metric.value}</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">{metric.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.75rem] border border-line bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Layers3 className="h-5 w-5 text-accent" />
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Approach</p>
            </div>

            <ul className="mt-8 space-y-5">
              {study.approach.map((step) => (
                <li key={step} className="flex gap-3 text-sm leading-7 text-stone-400 sm:text-base">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun text-[10px] font-bold text-forest">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-line bg-forest p-6 text-[#fbfaf5] shadow-[0_26px_60px_rgba(18,63,52,0.18)] sm:p-8">
            <div className="flex items-center gap-3">
              <Quote className="h-5 w-5 text-sun" />
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#fbfaf5]/75">Reflection</p>
            </div>
            <p className="mt-6 text-xl leading-8 tracking-[-0.04em] text-[#fbfaf5] sm:text-2xl">“{study.quote}”</p>
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fbfaf5]/70">{study.quoteAuthor}</p>
          </div>
        </section>

        <section className="mt-16 rounded-[1.75rem] border border-line bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Next step</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-paper sm:text-4xl">Need something built with the same care?</h2>
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
