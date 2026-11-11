import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigationLinks, siteConfig } from '../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 sm:top-5 sm:px-8">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-line bg-card/90 px-4 text-paper shadow-sm backdrop-blur-md dark:bg-slate-900/90 dark:text-slate-100 sm:px-6"
      >
        <a href="#home" className="flex items-center gap-2.5 font-display text-base font-bold text-paper">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-xs font-bold text-white shadow-sm">
            MA
          </span>
          <span className="hidden sm:inline">{siteConfig.shortName}</span>
          <span className="sm:hidden">M.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-stone-400 transition hover:text-accent dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 md:block"
          >
            Contact me
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((value) => !value)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-paper lg:hidden dark:text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-card p-4 shadow-xl lg:hidden dark:bg-slate-900"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                onClick={() => setOpen(false)}
                href={link.href}
                className="block rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-paper hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                {link.label}
              </a>
            ))}
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="mt-2 block rounded-lg bg-accent px-4 py-2.5 text-center text-xs font-semibold text-white"
            >
              Contact me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
