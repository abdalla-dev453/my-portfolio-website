import { motion } from 'framer-motion';
import { Award, ExternalLink, Shield, Cloud, BookOpen } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const certifications = [
  {
    title: 'Full-Stack Software Engineering',
    provider: 'Moringa School',
    icon: Award,
    color: 'text-primary-accent',
    bg: 'bg-primary-accent/10',
    verifyLink: '#',
  },
  {
    title: 'Cybersecurity Fundamentals',
    provider: 'Professional Certification',
    icon: Shield,
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    verifyLink: '#',
  },
  {
    title: 'Cloud Computing Essentials',
    provider: 'Cloud Platform',
    icon: Cloud,
    color: 'text-secondary-accent',
    bg: 'bg-secondary-accent/10',
    verifyLink: '#',
  },
  {
    title: 'Professional Development',
    provider: 'Continuous Learning',
    icon: BookOpen,
    color: 'text-success',
    bg: 'bg-success/10',
    verifyLink: '#',
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="bg-secondary-bg/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Certifications & <span className="gradient-text">Learning</span>
        </h2>
        <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-5 rounded-2xl bg-card/50 border border-white/5 card-hover flex items-start gap-4"
          >
            <div className={`w-12 h-12 ${cert.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <cert.icon className={`w-6 h-6 ${cert.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-white">{cert.title}</h3>
              <p className="text-xs text-text-secondary/60 mb-2">{cert.provider}</p>
              <a
                href={cert.verifyLink}
                className="inline-flex items-center gap-1 text-xs text-primary-accent hover:underline"
              >
                <ExternalLink className="w-3 h-3" />
                Verify
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
