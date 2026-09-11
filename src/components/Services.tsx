import { Blocks, Gauge, LayoutTemplate, ShieldCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const services = [
  { icon: LayoutTemplate, title: 'Website design & build', text: 'Responsive marketing websites that clearly communicate your offer and guide visitors to take action.' },
  { icon: Blocks, title: 'Web applications', text: 'Reliable, custom interfaces and APIs for workflows that need more than a standard website.' },
  { icon: Gauge, title: 'Performance & refinement', text: 'Focused improvements to speed, usability, accessibility, and the details that build trust.' },
  { icon: ShieldCheck, title: 'Security-minded delivery', text: 'Thoughtful implementation, secure defaults, and practical attention to data and integrations.' },
];

export default function Services() { return <SectionWrapper id="services" className="border-t border-line"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Services</p><h2 className="section-title">Built around the work you need done.</h2></div><p className="max-w-md text-sm leading-7 text-stone-400">From a focused website to a data-backed product, every engagement starts with a clear scope and practical plan.</p></div><div className="grid gap-px border border-line bg-line md:grid-cols-2">{services.map(({ icon: Icon, title, text }) => <article key={title} className="bg-ink p-7"><Icon className="h-5 w-5 text-accent" aria-hidden="true" /><h3 className="mt-10 text-2xl font-bold tracking-[-.035em] text-paper">{title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-stone-400">{text}</p></article>)}</div></SectionWrapper>; }
