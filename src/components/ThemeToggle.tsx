import { Moon, Sparkles, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const preferenceKey = 'msema-theme';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem(preferenceKey);
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.setAttribute('data-theme', dark ? 'luxury-dark' : 'light');
    localStorage.setItem(preferenceKey, dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((value) => !value)}
      aria-label={dark ? 'Use light theme' : 'Use dark theme'}
      className="fixed bottom-20 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-line bg-ink px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-forest shadow-[0_20px_40px_rgba(27,72,53,0.12)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
      <Sparkles className="h-3.5 w-3.5 text-sun" />
    </button>
  );
}
