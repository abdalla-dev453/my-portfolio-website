import { ArrowLeft, Compass } from 'lucide-react';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | Msema Abdalla';
  }, []);

  const homeUrl = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;

  return (
    <main className="grid min-h-screen place-items-center bg-ink px-5 text-center">
      <div className="max-w-md rounded-2xl border border-line bg-card p-8 shadow-sm">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-accent dark:bg-blue-950/50">
          <Compass className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent">404 Error</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-paper">This page does not exist.</h1>
        <p className="mt-3 text-sm leading-6 text-stone-400">The link may be out of date or the page was moved.</p>
        <a href={homeUrl} className="btn-primary mt-6">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Return home
        </a>
      </div>
    </main>
  );
}
