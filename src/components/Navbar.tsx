import { useState, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [{ label: 'Home', href: '#home' }, { label: 'About', href: '#about' }, { label: 'Services', href: '#services' }, { label: 'Projects', href: '#projects' }, { label: 'Pricing', href: '#pricing' }, { label: 'Contact', href: '#contact' }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigateTo = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', href);
    setOpen(false);
  };

  return <header className="fixed inset-x-0 top-4 z-40 px-4 sm:top-5 sm:px-8"><nav className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full bg-forest px-3 text-[#FBFAF5] shadow-[0_12px_30px_rgba(27,72,53,.16)] sm:px-5"><a href="#home" className="flex items-center gap-2 font-display text-lg font-bold" onClick={(event) => navigateTo(event, '#home')}><span className="grid h-8 w-8 place-items-center rounded-full bg-sun text-sm text-forest">M</span> Msema.</a><div className="hidden items-center gap-6 lg:flex">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={(event) => navigateTo(event, link.href)} className="text-[10px] font-bold uppercase tracking-[.09em] text-[#FBFAF5]/80 transition hover:text-sun">{link.label}</a>)}</div><a href="#contact" onClick={(event) => navigateTo(event, '#contact')} className="hidden rounded-full bg-[#FBFAF5] px-5 py-2 text-[10px] font-bold text-forest transition hover:bg-sun md:block">Contact me</a><button type="button" aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full text-[#FBFAF5] lg:hidden">{open ? <X /> : <Menu />}</button></nav><AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 max-w-6xl rounded-3xl bg-forest p-4 shadow-xl lg:hidden">{navLinks.map((link) => <a key={link.href} onClick={(event) => navigateTo(event, link.href)} href={link.href} className="block rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#FBFAF5] hover:bg-[#FBFAF5]/10">{link.label}</a>)}</motion.div>}</AnimatePresence></header>;
}
