import { motion } from 'framer-motion';
import { MapPin, Clock, Languages, Compass } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function ProfessionalProfile() {
  return (
    <SectionWrapper id="profile">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Professional <span className="gradient-text">Profile</span>
        </h2>
        <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 rounded-2xl bg-card/50 border border-white/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-primary-accent" />
            <h3 className="text-sm font-semibold text-white">Location</h3>
          </div>
          <p className="text-text-secondary text-sm">Nairobi, Kenya</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="p-5 rounded-2xl bg-card/50 border border-white/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-success" />
            <h3 className="text-sm font-semibold text-white">Availability</h3>
          </div>
          <ul className="space-y-1.5">
            {['Full-Time Roles', 'Remote Opportunities', 'Freelance Projects', 'Collaborations'].map((item) => (
              <li key={item} className="text-xs text-text-secondary flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-success" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="p-5 rounded-2xl bg-card/50 border border-white/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <Languages className="w-5 h-5 text-secondary-accent" />
            <h3 className="text-sm font-semibold text-white">Languages</h3>
          </div>
          <ul className="space-y-1.5">
            {['English', 'Swahili'].map((lang) => (
              <li key={lang} className="text-xs text-text-secondary flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-secondary-accent" />
                {lang}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24 }}
          className="p-5 rounded-2xl bg-card/50 border border-white/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <Compass className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm font-semibold text-white">Areas of Interest</h3>
          </div>
          <ul className="space-y-1.5">
            {['Software Engineering', 'Full-Stack Development', 'Cybersecurity', 'Cloud Computing', 'Product Development'].map((a) => (
              <li key={a} className="text-xs text-text-secondary flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-amber-400" />
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
