import { ChevronDown } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const questions = [
  {
    question: 'What happens after I get in touch?',
    answer: 'We start with a short conversation about the problem, goals, timeline, and what success looks like. I then recommend a practical scope and provide a written quote.',
  },
  {
    question: 'How long does a typical website take?',
    answer: 'A focused marketing site commonly takes two to four weeks once content and feedback are available. More complex applications are planned in phases with milestones.',
  },
  {
    question: 'Can you work with an existing design or team?',
    answer: 'Yes. I can join an existing workflow, implement approved designs, improve a live product, or work alongside your designer and other developers.',
  },
  {
    question: 'Do you offer support after launch?',
    answer: 'Yes. Launch support, performance refinement, and ongoing improvements can be included in the project scope or arranged as a follow-on engagement.',
  },
] as const;

export default function FAQ() {
  return (
    <SectionWrapper id="faq" className="border-t border-line">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Frequently asked questions</p>
          <h2 className="section-title">Useful answers before we talk.</h2>
        </div>
        <div className="divide-y divide-line rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-8">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-4 first:pt-0 last:pb-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-semibold text-paper marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                {question}
                <ChevronDown className="h-4 w-4 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-sm leading-6 text-stone-400">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
