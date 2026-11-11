import { ClipboardList, Code2, Rocket } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Clarify the outcome',
    text: 'We align on the audience, the problem to solve, success measures, and a practical scope before implementation begins.',
  },
  {
    icon: Code2,
    number: '02',
    title: 'Design and build',
    text: 'I turn the plan into a focused interface and dependable code, sharing progress at useful checkpoints along the way.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Refine and launch',
    text: 'The final pass covers responsive behavior, accessibility, performance, and a handoff that makes the next step clear.',
  },
] as const;

export default function Process() {
  return (
    <SectionWrapper id="process" className="border-t border-line bg-secondary-bg">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">How I work</p>
          <h2 className="section-title">A calm process for ambitious work.</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-stone-400">
            Clear communication and deliberate decisions keep the work moving forward without losing sight of the people using it.
          </p>
        </div>
        <ol className="divide-y divide-line rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-8">
          {steps.map(({ icon: Icon, number, title, text }) => (
            <li key={number} className="grid gap-4 py-6 first:pt-0 last:pb-0 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
              <div className="flex items-center gap-3 sm:block">
                <span className="font-mono text-xs font-semibold text-accent">{number}</span>
                <div className="mt-3 hidden h-8 w-8 place-items-center rounded-lg bg-blue-50 text-accent dark:bg-blue-950/50 sm:grid">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-paper">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-400">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
