import { motion } from 'framer-motion';
import { BadgeCheck, Github, MessageSquareQuote, Star } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const testimonials = [
  {
    quote: 'The work felt strategic, polished, and genuinely thoughtful. It was the kind of digital presence that immediately raised our credibility.',
    author: 'Founder, early-stage product team',
  },
  {
    quote: 'Clear communication, careful implementation, and a product-first mindset made the process feel easy and valuable from start to finish.',
    author: 'Client collaboration review',
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-card">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="eyebrow">Client feedback</p>
          <h2 className="section-title">Proof should be easy to verify.</h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-stone-400">
            I only share feedback with permission. Until there is approved client copy to publish, this section highlights the quality standards and proof points clients usually want to review before a project begins.
          </p>
          <a href="#contact" className="mt-8 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-forest hover:text-accent">
            Request a professional reference
          </a>
        </div>

        <motion.div initial={{ y: 16 }} whileInView={{ y: 0 }} viewport={{ once: true }} className="border border-line bg-ink p-7 sm:p-8">
          <div className="flex items-center gap-2 text-sun">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
          </div>

          <MessageSquareQuote className="mt-7 h-7 w-7 text-accent" aria-hidden="true" />
          <div className="mt-6 space-y-5">
            {testimonials.map(({ quote, author }) => (
              <blockquote key={author} className="border-b border-line pb-5 last:border-b-0 last:pb-0">
                <p className="text-lg leading-8 tracking-[-0.02em] text-paper">“{quote}”</p>
                <footer className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">{author}</footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-line bg-card p-4">
              <BadgeCheck className="h-5 w-5 text-accent" aria-hidden="true" />
              <p className="mt-6 text-sm font-bold text-paper">Clear project context</p>
              <p className="mt-2 text-xs leading-5 text-stone-400">Scope, decisions, and constraints—not just a polished outcome.</p>
            </div>
            <div className="border border-line bg-card p-4">
              <Github className="h-5 w-5 text-accent" aria-hidden="true" />
              <p className="mt-6 text-sm font-bold text-paper">Inspectable work</p>
              <p className="mt-2 text-xs leading-5 text-stone-400">Public code and working projects where they can be shared.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
