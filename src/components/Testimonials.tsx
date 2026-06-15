import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ahmad Naim',
    role: 'Engineering Manager',
    company: 'Tech Corp',
    text: 'Msema consistently demonstrates strong problem-solving skills and delivers high-quality software solutions. A reliable engineer who elevates every team.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Fatima Masito',
    role: 'Product Lead',
    company: 'InnovateLab',
    text: 'A highly motivated engineer who quickly learns new technologies and contributes effectively to team projects. Great attention to detail and product thinking.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Collins Kiprotich',
    role: 'Senior Developer',
    company: 'DevStudio',
    text: 'Excellent attention to detail and commitment to building impactful products. Msema brings both technical skill and genuine enthusiasm to every project.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-secondary-bg/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          What People <span className="gradient-text">Say</span>
        </h2>
        <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-card/50 border border-white/5 card-hover relative"
          >
            <Quote className="w-8 h-8 text-primary-accent/20 mb-3" />
            <p className="text-text-secondary text-sm leading-relaxed mb-6">{t.text}</p>
            <div className="flex items-center gap-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover border border-white/10"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-text-secondary/60">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
