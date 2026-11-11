import { motion } from 'framer-motion';
import { BadgeCheck, Github, MessageSquareQuote } from 'lucide-react';
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
    <SectionWrapper id="testimonials" className="border-t border-line bg-secondary-bg">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="eyebrow">Client feedback</p>
          <h2 className="section-title">Proof should be easy to verify.</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-stone-400">
            I only share feedback with permission. Until there is approved client copy to publish, this section highlights the quality standards and proof points clients usually want to review before a project begins.
          </p>
          <a href="#contact" className="mt-8 inline-flex text-xs font-semibold uppercase tracking-wider text-accent hover:text-blue-700">
            Request a professional reference
          </a>
        </div>

        <motion.div initial={{ y: 16 }} whileInView={{ y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-8">
          <MessageSquareQuote className="h-6 w-6 text-accent" aria-hidden="true" />
          <div className="mt-6 space-y-6">
            {testimonials.map(({ quote, author }) => (
              <blockquote key={author} className="border-b border-line pb-6 last:border-b-0 last:pb-0">
                <p className="text-base leading-7 text-paper sm:text-lg">“{quote}”</p>
                <footer className="mt-3 text-xs font-semibold text-muted">{author}</footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-secondary-bg p-4">
              <BadgeCheck className="h-5 w-5 text-accent" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold text-paper">Clear project context</p>
              <p className="mt-1 text-xs leading-5 text-stone-400">Scope, decisions, and constraints—not just a polished outcome.</p>
            </div>
            <div className="rounded-xl border border-line bg-secondary-bg p-4">
              <Github className="h-5 w-5 text-accent" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold text-paper">Inspectable work</p>
              <p className="mt-1 text-xs leading-5 text-stone-400">Public code and working projects where they can be shared.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
