import { ArrowUpRight, Check } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const plans = [
  {
    name: 'Essential',
    price: 'From KSh 35,000',
    description: 'For a focused online presence that explains what you do and turns visitors into enquiries.',
    features: ['Up to 5 pages', 'Responsive design', 'Contact form setup', 'Basic SEO foundations'],
  },
  {
    name: 'Growth',
    price: 'From KSh 80,000',
    description: 'For businesses that need richer journeys, custom features, and a stronger conversion path.',
    features: ['Up to 10 pages', 'Custom UI and interactions', 'CMS or API integration', 'Performance optimisation'],
    featured: true,
  },
  {
    name: 'Custom build',
    price: 'Let’s scope it',
    description: 'For platforms, dashboards, e-commerce, or product ideas that need tailored engineering.',
    features: ['Complex user flows', 'Authentication and data', 'Third-party integrations', 'Phased delivery plan'],
  },
];

const flow = [
  'Discovery call to clarify the opportunity, constraints, and timeline',
  'Proposal and scope with clear milestones and deliverables',
  'Design + build with regular feedback and launch readiness checks',
];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="border-t border-line bg-secondary-bg">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Pricing &amp; Process</p>
        <h2 className="section-title">A clear path from first conversation to launch.</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-400">
          Starting estimates are based on scope and technical complexity. Every engagement receives a tailored written quote before work begins.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {flow.map((step, index) => (
          <div key={step} className="rounded-xl border border-line bg-card p-5 text-left shadow-sm">
            <p className="font-mono text-xs font-semibold text-accent">0{index + 1}</p>
            <p className="mt-2 text-sm leading-6 text-paper">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`flex min-h-[380px] flex-col rounded-2xl border p-6 transition-all duration-200 sm:p-7 ${plan.featured
                ? 'border-accent bg-card shadow-md ring-2 ring-accent/20'
                : 'border-line bg-card shadow-sm hover:border-slate-300'
              }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-semibold uppercase tracking-wider ${plan.featured ? 'text-accent' : 'text-muted'}`}>
                {plan.featured ? 'Most popular' : 'Standard package'}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-paper">{plan.name}</h3>
            <p className="mt-2 text-xl font-bold text-accent">{plan.price}</p>
            <p className="mt-4 text-sm leading-6 text-stone-400">{plan.description}</p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-paper">
                  <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-wider ${plan.featured ? 'text-accent hover:text-blue-700' : 'text-paper hover:text-accent'
                }`}
            >
              Discuss this project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-paper">Have a unique scope or existing codebase?</p>
            <p className="mt-1 text-xs text-stone-400">I can audit the project and propose a practical milestone-based delivery plan.</p>
          </div>
          <a href="#contact" className="btn-secondary shrink-0">
            Request custom quote
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
