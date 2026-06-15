import { motion } from 'framer-motion';
import { GraduationCap, FolderGit2, Globe, Shield, BookOpen } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const achievements = [
  {
    icon: GraduationCap,
    label: 'Full-Stack Software Engineering Graduate',
    detail: 'Moringa School',
    color: 'text-primary-accent',
    bg: 'bg-primary-accent/10',
  },
  {
    icon: FolderGit2,
    label: '10+ Projects Completed',
    detail: 'Full-stack & mobile applications',
    color: 'text-secondary-accent',
    bg: 'bg-secondary-accent/10',
  },
  {
    icon: Globe,
    label: 'Open Source Contributor',
    detail: 'Community-driven development',
    color: 'text-success',
    bg: 'bg-success/10',
  },
  {
    icon: Shield,
    label: 'Cybersecurity Enthusiast',
    detail: 'Security-first development',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
  },
  {
    icon: BookOpen,
    label: 'Continuous Learner',
    detail: 'Always expanding skill set',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Achievements & <span className="gradient-text">Milestones</span>
        </h2>
        <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {achievements.map((a, idx) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="p-5 rounded-2xl bg-card/50 border border-white/5 card-hover text-center"
          >
            <div className={`w-12 h-12 ${a.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
              <a.icon className={`w-6 h-6 ${a.color}`} />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">{a.label}</h3>
            <p className="text-xs text-text-secondary/60">{a.detail}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
