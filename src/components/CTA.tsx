import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Download, MessageCircle } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-secondary-accent/5" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary-accent/10 rounded-full blur-3xl" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Let's Build Something{' '}
          <span className="gradient-text">Meaningful Together</span>
        </h2>

        <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
          Whether you're looking for a software engineer to join your team, collaborate on an
          exciting project, or help bring an idea to life, I'd love to connect.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn-primary flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Schedule a Call
          </button>
          <button className="btn-secondary flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Resume
          </button>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-secondary flex items-center gap-2 !border-secondary-accent/50 !text-secondary-accent hover:!bg-secondary-accent/10"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
