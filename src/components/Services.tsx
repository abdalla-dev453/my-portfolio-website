import { motion } from 'framer-motion';
import { Blocks, Gauge, LayoutTemplate, ShieldCheck, Sparkles } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const services = [
  { icon: LayoutTemplate, number: '01', title: 'Website design & build', text: 'Responsive marketing websites that clearly communicate your offer and guide visitors toward action.' },
  { icon: Blocks, number: '02', title: 'Web applications', text: 'Reliable interfaces and workflow tools built for teams who need more than a simple brochure site.' },
  { icon: Gauge, number: '03', title: 'Performance & refinement', text: 'Focused improvements to speed, usability, accessibility, and the details that build trust.' },
  { icon: ShieldCheck, number: '04', title: 'Security-minded delivery', text: 'Thoughtful implementation, secure defaults, and practical attention to real-world risks.' },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="overflow-hidden border-t border-line bg-[#f3f5f1]">
      <div className="relative">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sun/10 blur-3xl" />

        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-ink px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Thoughtful by design
          </div>

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="section-title max-w-3xl">A sharper digital presence, built to last.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-stone-400">
              From a focused website to a custom product, every engagement starts with a clear scope and a practical plan.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map(({ icon: Icon, number, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ y: 18, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative min-h-[240px] overflow-hidden rounded-[1.75rem] border border-line bg-white p-7 shadow-[0_18px_48px_rgba(27,72,53,0.06)] transition-all duration-300 hover:border-accent hover:shadow-[0_24px_60px_rgba(27,72,53,0.12)] sm:p-8"
              >
                <span className="absolute -right-3 -top-8 font-display text-[8rem] font-bold leading-none text-[#1b4835]/5">{number}</span>
                <div className="relative flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-sun text-forest">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-sun">/{number}</span>
                </div>
                <h3 className="relative mt-12 text-2xl font-bold tracking-[-0.035em] text-paper">{title}</h3>
                <p className="relative mt-3 max-w-md text-sm leading-6 text-stone-400">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
