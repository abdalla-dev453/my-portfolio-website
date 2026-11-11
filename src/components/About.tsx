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
    <SectionWrapper id="about" className="overflow-hidden bg-forest">
      <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <motion.div initial={{ scale: 0.92 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-[2rem] border border-[#FBFAF5]/20 bg-[#FBFAF5]/10 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
            <img src={portrait} alt="Msema Abdalla" className="aspect-square w-full rounded-[1.5rem] object-cover object-top" loading="lazy" />
          </div>
        </motion.div>

        <motion.div initial={{ x: 30 }} whileInView={{ x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.12 }}>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">— About me</p>
          <h2 className="mt-4 text-5xl font-bold leading-[0.9] tracking-[-0.05em] text-[#FBFAF5] sm:text-6xl">
            A builder who cares about <em className="font-medium text-sun">the details.</em>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-[#FBFAF5]/75">
            I help people and businesses turn big ideas into polished digital products. My work blends practical product thinking, clean engineering, and a security-first mindset so what gets built feels premium and remains reliable over time.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {strengths.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-[#FBFAF5]/15 bg-[#FBFAF5]/[0.06] p-4">
                <Icon className="h-5 w-5 text-sun" />
                <h3 className="mt-5 text-sm font-bold text-[#FBFAF5]">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-[#FBFAF5]/60">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 border-y border-[#FBFAF5]/20 py-6">
            {stats.map((stat) => (
              <div key={stat.number}>
                <p className="text-xl font-bold text-sun sm:text-2xl">{stat.number}</p>
                <p className="mt-1 text-[10px] leading-4 text-[#FBFAF5]/60">{stat.label}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="mt-9 inline-flex items-center gap-2 rounded-full border border-sun px-5 py-3 text-xs font-bold text-[#FBFAF5] transition hover:bg-sun hover:text-forest">
            Let’s work together <ArrowDownToLine className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
