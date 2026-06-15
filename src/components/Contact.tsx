import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Twitter, Send } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'msema@example.com', href: 'mailto:msema@example.com' },
  { icon: Phone, label: 'Phone', value: '+254 7XX XXX XXX', href: 'tel:+254700000000' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/msema', href: '#' },
  { icon: Github, label: 'GitHub', value: 'github.com/msema', href: '#' },
  { icon: Twitter, label: 'X (Twitter)', value: '@msema_dev', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let's Build Something <span className="gradient-text">Great</span>
        </h2>
        <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
        <p className="text-text-secondary mt-4 max-w-xl mx-auto text-sm">
          I'm always open to discussing software engineering opportunities, collaborations,
          and innovative projects.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {/* Contact info */}
        <div className="lg:col-span-2 space-y-4">
          {contactInfo.map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-white/5 hover:border-primary-accent/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center group-hover:bg-primary-accent/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary-accent" />
              </div>
              <div>
                <p className="text-xs text-text-secondary/50">{item.label}</p>
                <p className="text-sm text-text-secondary group-hover:text-white transition-colors">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs text-text-secondary/50 mb-1.5">Name</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card/50 border border-white/5 text-sm text-white placeholder:text-text-secondary/30 focus:outline-none focus:border-primary-accent/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-text-secondary/50 mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card/50 border border-white/5 text-sm text-white placeholder:text-text-secondary/30 focus:outline-none focus:border-primary-accent/50 transition-colors"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-xs text-text-secondary/50 mb-1.5">Subject</label>
            <input
              id="subject"
              type="text"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card/50 border border-white/5 text-sm text-white placeholder:text-text-secondary/30 focus:outline-none focus:border-primary-accent/50 transition-colors"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs text-text-secondary/50 mb-1.5">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card/50 border border-white/5 text-sm text-white placeholder:text-text-secondary/30 focus:outline-none focus:border-primary-accent/50 transition-colors resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          <button
            type="submit"
            disabled={submitted}
            className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            {submitted ? (
              'Message Sent!'
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
