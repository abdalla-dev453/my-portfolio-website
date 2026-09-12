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
      <nav aria-label="Primary navigation" className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full bg-forest px-3 text-[#FBFAF5] shadow-[0_12px_30px_rgba(27,72,53,.16)] sm:px-5">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-sun text-sm text-forest">M</span>
          <span className="hidden sm:inline">{siteConfig.shortName}</span><span className="sm:hidden">M.</span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {navigationLinks.map((link) => <a key={link.href} href={link.href} className="text-[10px] font-bold uppercase tracking-[.09em] text-[#FBFAF5]/80 transition hover:text-sun">{link.label}</a>)}
        </div>
        <a href="#contact" className="hidden rounded-full bg-[#FBFAF5] px-5 py-2 text-[10px] font-bold text-forest transition hover:bg-sun md:block">Contact me</a>
        <button type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen((value) => !value)} className="grid h-9 w-9 place-items-center rounded-full text-[#FBFAF5] lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 max-w-6xl rounded-3xl bg-forest p-4 shadow-xl lg:hidden">
          {navigationLinks.map((link) => <a key={link.href} onClick={() => setOpen(false)} href={link.href} className="block rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#FBFAF5] hover:bg-[#FBFAF5]/10">{link.label}</a>)}
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
