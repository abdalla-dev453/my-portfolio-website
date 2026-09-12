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
    <SectionWrapper id="process" className="border-y border-line bg-card">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">How I work</p>
          <h2 className="section-title">A calm process for ambitious work.</h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-stone-400">Clear communication and small, deliberate decisions keep the work moving without losing sight of the people using it.</p>
        </div>
        <ol className="divide-y divide-line border-y border-line">
          {steps.map(({ icon: Icon, number, title, text }) => (
            <li key={number} className="grid gap-5 py-7 sm:grid-cols-[3rem_1fr] sm:gap-7">
              <div className="flex items-center gap-4 sm:block">
                <span className="font-mono text-xs font-bold tracking-[.16em] text-accent">{number}</span>
                <Icon className="mt-5 hidden h-5 w-5 text-forest sm:block" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-[-.035em] text-paper">{title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-stone-400">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
