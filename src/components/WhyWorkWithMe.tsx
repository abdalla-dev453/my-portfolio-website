import { motion } from 'framer-motion';
import { Brain, Code2, Users, TrendingUp, Shield, Lightbulb, Target } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const traits = [
  {
    icon: Brain,
    title: 'Problem Solving',
    description: 'Strong analytical abilities to break down complex challenges into elegant solutions.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, well-structured code following industry best practices.',
  },
  {
    icon: TrendingUp,
    title: 'Modern Practices',
    description: 'Leveraging contemporary tools and methodologies for efficient development.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Effective communication and collaboration in cross-functional teams.',
  },
  {
    icon: Shield,
    title: 'Security-First',
    description: 'Building with security in mind from the ground up, not as an afterthought.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Always expanding knowledge and staying current with emerging technologies.',
  },
  {
    icon: Target,
    title: 'Product-Focused',
    description: 'Thinking beyond code to deliver real value that impacts users and business outcomes.',
  },
];

export default function WhyWorkWithMe() {
  return (
    <SectionWrapper id="why-me" className="bg-secondary-bg/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Why Work With <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
        <p className="text-text-secondary mt-4 max-w-xl mx-auto text-sm">
          What I bring to every team and project
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {traits.map((trait, idx) => (
          <motion.div
            key={trait.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07 }}
            className="p-5 rounded-2xl bg-card/50 border border-white/5 card-hover group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-accent/10 flex items-center justify-center mb-3 group-hover:bg-primary-accent/20 transition-colors">
              <trait.icon className="w-5 h-5 text-primary-accent" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1.5">{trait.title}</h3>
            <p className="text-xs text-text-secondary/70 leading-relaxed">{trait.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
