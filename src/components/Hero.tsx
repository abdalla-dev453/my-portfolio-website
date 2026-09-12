import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react';
import profileImage from '../assets/young.webp';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink pt-24">
      <div className="hero-grid mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-6 pb-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12">
        <motion.div initial={{ y: 28 }} animate={{ y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }} className="relative z-10 pt-12 lg:pt-0">
          <motion.p initial={{ x: -12 }} animate={{ x: 0 }} transition={{ delay: 0.25 }} className="inline-flex items-center gap-2 border border-forest/30 bg-paper px-3 py-2 text-xs font-medium text-forest shadow-sm"><span className="h-2 w-2 bg-sun" /> Hello there!</motion.p>
          <p className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-muted"><MapPin className="h-3.5 w-3.5 text-sun" /> Nairobi, Kenya</p>
          <h1 className="mt-4 max-w-2xl text-[clamp(3.15rem,7vw,6.6rem)] font-bold leading-[.88] tracking-[-.065em] text-paper">I’m <em className="font-medium text-sun">Msema Abdalla,</em><br />a software engineer<br /> who ships ideas.</h1>
          <p className="mt-7 max-w-lg text-sm leading-6 text-muted sm:text-base">I design and build thoughtful web products that turn complicated work into clear, reliable experiences.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4"><a href="#contact" className="btn-primary">Start a project <ArrowUpRight className="h-4 w-4" /></a><a href="/Msema-Abdalla-CV.pdf" download className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:text-accent">Download CV <Download className="h-4 w-4" /></a><a href="#projects" className="hidden items-center gap-2 text-xs font-bold text-forest hover:text-accent sm:inline-flex">Selected work <ArrowDown className="h-4 w-4" /></a></div>
        </motion.div>
        <motion.div initial={{ scale: 0.94, x: 18 }} animate={{ scale: 1, x: 0 }} transition={{ duration: 0.85, delay: 0.12, ease: 'easeOut' }} className="mx-auto w-full max-w-[500px] self-end lg:mr-0">
          <div className="mx-auto h-[430px] overflow-hidden border border-line sm:h-[500px]"><img src={profileImage} alt="Msema Abdalla, full-stack software engineer" className="h-full w-full object-cover object-top" loading="eager" decoding="async" fetchPriority="high" sizes="(min-width: 1024px) 500px, 100vw" /></div>
        </motion.div>
      </div>
    </section>
  );
}
