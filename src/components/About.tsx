import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Shield, Lightbulb, GraduationCap } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Image from '../assets/msema.jpeg';

const highlights = [
  { icon: Code2, label: 'Full-Stack Developer' },
  { icon: Shield, label: 'Cybersecurity Enthusiast' },
  { icon: Lightbulb, label: 'Problem Solver' },
  { icon: GraduationCap, label: 'Moringa School Graduate' },
];

const interests = [
  'Full-Stack Development',
  'Cybersecurity',
  'Mobile Application Development',
  'Product Engineering',
  'Software Architecture',
  'User Experience Design',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="about" className="bg-secondary-bg/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
      </div>

      <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden gradient-border p-1">
            <img
              src={Image}
              alt="Working on code"
              className="w-full h-85 lg:h-98 object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3">
            <span className="text-sm font-mono text-primary-accent">{'>'} coding_with_passion</span>
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-text-secondary leading-relaxed mb-6">
            I am a <span className="text-white font-medium">Full-Stack Software Engineer</span> with
            training from <span className="text-primary-accent font-medium">Moringa School</span>,
            passionate about creating scalable software solutions, building impactful digital
            products, and solving real-world challenges through technology.
          </p>

          <p className="text-text-secondary leading-relaxed mb-8">
            I enjoy turning ideas into production-ready applications that deliver measurable value
            to users and businesses. My approach combines clean code practices with a security-first
            mindset to build software that is both reliable and resilient.
          </p>

          {/* Highlight badges */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-white/5">
                <item.icon className="w-5 h-5 text-primary-accent flex-shrink-0" />
                <span className="text-sm text-text-secondary">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 text-xs font-medium text-primary-accent bg-primary-accent/10 border border-primary-accent/20 rounded-lg"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
