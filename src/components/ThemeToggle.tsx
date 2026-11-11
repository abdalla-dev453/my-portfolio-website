import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const preferenceKey = 'msema-theme';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem(preferenceKey);
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem(preferenceKey, dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((value) => !value)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed bottom-20 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-2 text-xs font-semibold text-paper shadow-md transition-all duration-200 hover:border-slate-300 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {dark ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4 text-slate-700 dark:text-slate-200" />}
      <span className="text-xs">{dark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
