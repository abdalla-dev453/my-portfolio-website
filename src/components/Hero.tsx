import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, MapPin, Sparkles } from 'lucide-react';
import profileImage from '../assets/young.webp';

const stats = [
  { value: '12+', label: 'projects launched' },
  { value: '4+', label: 'years building' },
  { value: '24h', label: 'response time' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-transparent pt-24">
      <div className="hero-grid mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-6 pb-16 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-12">
        <motion.div initial={{ y: 28 }} animate={{ y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }} className="relative z-10 pt-12 lg:pt-0">
          <motion.p initial={{ x: -12 }} animate={{ x: 0 }} transition={{ delay: 0.25 }} className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-forest shadow-[0_12px_35px_rgba(27,72,53,0.08)] backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-sun" /> Product-minded engineer
          </motion.p>

          <p className="mt-7 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
            <MapPin className="h-3.5 w-3.5 text-sun" /> Nairobi, Kenya
          </p>

          <h1 className="mt-4 max-w-2xl text-[clamp(3.1rem,7vw,6.8rem)] font-bold leading-[0.88] tracking-[-0.065em] text-paper">
            I build digital experiences that feel <span className="gradient-text">premium</span> and work hard.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-muted sm:text-base">
            I’m Msema Abdalla, a full-stack software engineer helping startups and founders turn ideas into polished digital products that are clear, fast, and reliable.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/Msema-Abdalla-CV.pdf" download className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:text-accent">
              Download CV <Download className="h-4 w-4" />
            </a>
            <a href="#projects" className="hidden items-center gap-2 text-xs font-bold text-forest hover:text-accent sm:inline-flex">
              Selected work <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="premium-card rounded-2xl p-4">
                <p className="text-xl font-bold text-paper sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.94, x: 18 }} animate={{ scale: 1, x: 0 }} transition={{ duration: 0.85, delay: 0.12, ease: 'easeOut' }} className="relative mx-auto w-full max-w-[540px] self-end lg:mr-0">
          <div className="absolute -left-8 top-12 hidden rounded-2xl border border-line bg-white/70 p-4 shadow-[0_16px_40px_rgba(27,72,53,0.08)] backdrop-blur-xl sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Focus</p>
            <p className="mt-2 text-lg font-bold text-paper">Web + product</p>
          </div>

          <div className="absolute -right-3 bottom-10 hidden rounded-2xl border border-line bg-forest p-4 text-[#fbfaf5] shadow-[0_20px_48px_rgba(27,72,53,0.18)] sm:block">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#fbfaf5]/70">Available</p>
            <p className="mt-2 text-lg font-bold">For select projects</p>
          </div>

          <div className="relative mx-auto overflow-hidden rounded-[2rem] border border-line bg-white/60 p-2 shadow-[0_30px_80px_rgba(27,72,53,0.12)] backdrop-blur-sm sm:p-3">
            <div className="hero-video-shell absolute inset-0 z-0 overflow-hidden rounded-[1.55rem]">
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                poster={profileImage}
              >
                <source src="https://cdn.coverr.co/videos/coverr-man-working-on-his-laptop-1561273173352/1080p.mp4" type="video/mp4" />
              </video>
              <div className="hero-video-overlay" />
            </div>

            <div className="relative z-10 overflow-hidden rounded-[1.6rem] border border-line bg-forest">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,182,0,0.22),transparent_40%)]" />
              <img
                src={profileImage}
                alt="Msema Abdalla, full-stack software engineer"
                className="relative h-[470px] w-full object-cover object-top sm:h-[560px]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                sizes="(min-width: 1024px) 500px, 100vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
