import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const preferenceKey = 'msema-theme';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem(preferenceKey) === 'dark' || (!localStorage.getItem(preferenceKey) && window.matchMedia('(prefers-color-scheme: dark)').matches));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem(preferenceKey, dark ? 'dark' : 'light');
  }, [dark]);

  return <button type="button" onClick={() => setDark((value) => !value)} aria-label={dark ? 'Use light theme' : 'Use dark theme'} className="fixed bottom-20 right-5 z-50 grid h-10 w-10 place-items-center rounded-full border border-line bg-ink text-forest shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>;
}
