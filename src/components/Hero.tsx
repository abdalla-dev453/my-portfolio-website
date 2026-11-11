import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react';
import profileImage from '../assets/young.webp';

const stats = [
  { value: '12+', label: 'projects launched' },
  { value: '4+', label: 'years building' },
  { value: '24h', label: 'response time' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-6 pb-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 pt-8 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-paper shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Full-Stack Software Engineer
          </div>

          <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
            <MapPin className="h-3.5 w-3.5 text-accent" /> Nairobi, Kenya · Available for work
          </p>

          <h1 className="mt-4 max-w-2xl text-[clamp(2.75rem,6.5vw,5.5rem)] font-bold leading-[1.02] tracking-tight text-paper">
            I build digital experiences that are <span className="text-accent">fast</span>, reliable, and refined.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-stone-400 sm:text-lg">
            I’m Msema Abdalla, a full-stack software engineer helping businesses turn product ideas into clean, secure, and production-ready applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="/Msema-Abdalla-CV.pdf"
              download
              className="btn-secondary"
            >
              Download CV <Download className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-paper hover:text-accent transition-colors sm:inline-flex"
            >
              Selected work <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold tracking-tight text-paper sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[480px] lg:mr-0"
        >
          <div className="relative overflow-hidden rounded-2xl border border-line bg-card p-3 shadow-lg">
            <img
              src={profileImage}
              alt="Msema Abdalla, full-stack software engineer"
              className="h-[460px] w-full rounded-xl object-cover object-top sm:h-[520px]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
            <div className="mt-3 flex items-center justify-between px-2 pb-1">
              <div>
                <p className="text-xs font-semibold text-paper">Msema Abdalla</p>
                <p className="text-[11px] text-muted">Full-Stack &amp; Security</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Available
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
