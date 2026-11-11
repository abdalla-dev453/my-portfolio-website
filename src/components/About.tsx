import { motion } from 'framer-motion';
import { ArrowDownToLine, Briefcase, Code2, ShieldCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import portrait from '../assets/msema.jpeg';

const stats = [
  { number: 'Full-stack', label: 'engineering focus' },
  { number: 'Security', label: 'first mindset' },
  { number: '2026', label: 'Moringa graduate' },
];

const strengths = [
  { icon: Code2, title: 'Product-minded delivery', text: 'From rough idea to a refined interface that supports the real workflow.' },
  { icon: ShieldCheck, title: 'Resilient systems', text: 'Secure defaults, practical architecture, and careful implementation choices.' },
  { icon: Briefcase, title: 'Business clarity', text: 'I translate business needs into simple, high-performing digital experiences.' },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="overflow-hidden border-t border-line bg-secondary-bg">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-2xl border border-line bg-card p-3 shadow-md">
            <img
              src={portrait}
              alt="Msema Abdalla"
              className="aspect-square w-full rounded-xl object-cover object-top"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 24, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="eyebrow">— About me</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            A builder who cares about <span className="text-accent">the details.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-stone-400">
            I help people and businesses turn big ideas into polished digital products. My work blends practical product thinking, clean engineering, and a security-first mindset so what gets built feels dependable and performs under real-world use.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {strengths.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-line bg-card p-4 shadow-sm">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-accent dark:bg-blue-950/50">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-paper">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-muted">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-5">
            {stats.map((stat) => (
              <div key={stat.number}>
                <p className="text-xl font-bold text-accent sm:text-2xl">{stat.number}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a href="#contact" className="btn-primary">
              Let’s work together <ArrowDownToLine className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
