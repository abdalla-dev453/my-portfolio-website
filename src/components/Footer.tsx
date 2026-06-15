import { Github, Linkedin, Twitter, Mail, ArrowUp, Code2 } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'X' },
  { icon: Mail, href: 'mailto:msema@example.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-bg/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary-accent" />
            <span className="font-semibold">
              Msema Abdalla<span className="text-primary-accent">.</span>
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-xl bg-card/50 border border-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:border-primary-accent/30 transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center text-primary-accent hover:bg-primary-accent/20 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-text-secondary/40">
            &copy; {new Date().getFullYear()} Msema Abdalla. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary/30 mt-1 italic">
            Building technology that solves real-world problems and creates meaningful impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
