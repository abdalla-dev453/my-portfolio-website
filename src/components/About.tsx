import { motion } from 'framer-motion';
import { ArrowDownToLine, Code2, ShieldCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import portrait from '../assets/msema.jpeg';

const stats = [{ number: 'Full-stack', label: 'engineering focus' }, { number: 'Security', label: 'first mindset' }, { number: '2026', label: 'Moringa programme' }];

export default function About() {
  return (
    <SectionWrapper id="about" className="overflow-hidden bg-forest">
      <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <motion.div initial={{ opacity: 0, scale: .92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .7 }} className="mx-auto w-full max-w-md">
          <div className="overflow-hidden border border-[#FBFAF5]/20"><img src={portrait} alt="Msema Abdalla" className="aspect-square w-full object-cover object-top" loading="lazy" /></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .7, delay: .12 }}>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-sun">— About me</p>
          <h2 className="mt-4 text-5xl font-bold leading-[.9] tracking-[-.05em] text-[#FBFAF5] sm:text-6xl">A builder who cares about <em className="font-medium text-sun">the details.</em></h2>
          <p className="mt-7 max-w-xl text-sm leading-7 text-[#FBFAF5]/75">I’m Msema Abdalla, a full-stack software engineer trained at Moringa School. I bring together practical product thinking, clean implementation, and a security-first approach.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-[#FBFAF5]/15 bg-[#FBFAF5]/[.06] p-4"><Code2 className="h-5 w-5 text-sun" /><h3 className="mt-5 text-sm font-bold text-[#FBFAF5]">Product-minded delivery</h3><p className="mt-1 text-xs leading-5 text-[#FBFAF5]/60">From rough idea to a focused, usable interface.</p></div><div className="rounded-2xl border border-[#FBFAF5]/15 bg-[#FBFAF5]/[.06] p-4"><ShieldCheck className="h-5 w-5 text-sun" /><h3 className="mt-5 text-sm font-bold text-[#FBFAF5]">Resilient systems</h3><p className="mt-1 text-xs leading-5 text-[#FBFAF5]/60">Thoughtful code with reliability and security in mind.</p></div></div>
          <div className="mt-10 grid grid-cols-3 gap-3 border-y border-[#FBFAF5]/20 py-6">{stats.map((stat) => <div key={stat.number}><p className="text-xl font-bold text-sun sm:text-2xl">{stat.number}</p><p className="mt-1 text-[10px] leading-4 text-[#FBFAF5]/60">{stat.label}</p></div>)}</div>
          <a href="#contact" className="mt-9 inline-flex items-center gap-2 rounded-full border border-sun px-5 py-3 text-xs font-bold text-[#FBFAF5] transition hover:bg-sun hover:text-forest">Let’s work together <ArrowDownToLine className="h-4 w-4" /></a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
