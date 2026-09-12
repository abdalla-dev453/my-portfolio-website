import { ChevronDown } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const questions = [
  { question: 'What happens after I get in touch?', answer: 'We start with a short conversation about the problem, goals, timeline, and what success looks like. I then recommend a practical scope and provide a written quote.' },
  { question: 'How long does a typical website take?', answer: 'A focused marketing site commonly takes two to four weeks once content and feedback are available. More complex applications are planned in phases with milestones.' },
  { question: 'Can you work with an existing design or team?', answer: 'Yes. I can join an existing workflow, implement approved designs, improve a live product, or work alongside your designer and other developers.' },
  { question: 'Do you offer support after launch?', answer: 'Yes. Launch support, performance refinement, and ongoing improvements can be included in the project scope or arranged as a follow-on engagement.' },
] as const;

export default function FAQ() {
  return (
    <SectionWrapper id="faq">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Frequently asked questions</p>
          <h2 className="section-title">Useful answers before we talk.</h2>
        </div>
        <div className="border-y border-line">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group border-b border-line py-1 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-base font-bold text-paper marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                {question}
                <ChevronDown className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-stone-400">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
