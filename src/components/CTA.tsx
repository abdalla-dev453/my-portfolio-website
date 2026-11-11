import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="border-t border-line bg-secondary-bg">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 sm:px-8 md:flex-row md:items-center lg:px-12">
        <div>
          <p className="eyebrow">Available for new work</p>
          <h2 className="section-title">Have a project worth building right?</h2>
          <p className="mt-2 text-sm text-stone-400">Let’s discuss your vision, timeline, and how we can bring it to life.</p>
        </div>
        <a href="#contact" className="btn-primary shrink-0">
          Get in touch <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
