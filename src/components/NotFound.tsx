import { ArrowLeft, Compass } from 'lucide-react';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => { document.title = 'Page not found | Msema Abdalla'; }, []);
  const homeUrl = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;

  return <main className="grid min-h-screen place-items-center bg-ink px-5 text-center"><div className="max-w-md"><Compass className="mx-auto h-9 w-9 text-accent" aria-hidden="true" /><p className="mt-8 text-xs font-bold uppercase tracking-[.18em] text-accent">404</p><h1 className="mt-4 text-5xl font-bold tracking-[-.05em] text-paper">This page does not exist.</h1><p className="mt-5 text-sm leading-7 text-stone-400">The link may be out of date, or the page may have moved.</p><a href={homeUrl} className="btn-primary mt-8"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Return home</a></div></main>;
}
