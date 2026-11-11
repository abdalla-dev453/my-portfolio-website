import { motion } from 'framer-motion';
import { Blocks, Gauge, LayoutTemplate, ShieldCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const services = [
  {
    icon: LayoutTemplate,
    number: '01',
    title: 'Website design & build',
    text: 'Responsive, fast marketing websites that communicate clearly and convert visitors into inquiries.',
  },
  {
    icon: Blocks,
    number: '02',
    title: 'Web applications',
    text: 'Reliable dashboards, tools, and platforms engineered for teams that need full-stack capability.',
  },
  {
    icon: Gauge,
    number: '03',
    title: 'Performance & refinement',
    text: 'Focused optimizations for page load speed, accessibility, mobile responsiveness, and SEO.',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Security-minded delivery',
    text: 'Resilient implementation, input sanitation, authenticated data flows, and secure system defaults.',
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="overflow-hidden border-t border-line bg-secondary-bg">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Services</p>
          <h2 className="section-title max-w-3xl">Software engineering with focus and purpose.</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-stone-400">
          From focused marketing sites to custom product architectures, each project is planned with clear scope and built to last.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map(({ icon: Icon, number, title, text }, index) => (
          <motion.article
            key={title}
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative rounded-2xl border border-line bg-card p-6 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md sm:p-8"
          >
            <div className="flex items-start justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-accent dark:bg-blue-950/50">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs font-semibold text-muted">/{number}</span>
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-paper sm:text-2xl">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-stone-400">{text}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
