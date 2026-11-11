import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { siteConfig } from '../data/site';

interface ContactFormState { name: string; email: string; subject: string; message: string; }
type ContactField = keyof ContactFormState;
type FormErrors = Partial<Record<ContactField, string>>;
type SubmissionState = 'idle' | 'submitting' | 'sent' | 'failed';
const initialForm: ContactFormState = { name: '', email: '', subject: '', message: '' };
const details = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'msema-abdalla', href: siteConfig.linkedin },
  { icon: Github, label: 'GitHub', value: 'abdalla-dev453', href: siteConfig.github },
] as const;

const validate = (form: ContactFormState): FormErrors => ({
  ...(form.name.trim().length < 2 ? { name: 'Please enter your name.' } : {}),
  ...(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? { email: 'Enter a valid email address.' } : {}),
  ...(form.subject.trim().length < 3 ? { subject: 'Please add a short subject.' } : {}),
  ...(form.message.trim().length < 10 ? { message: 'Please write at least 10 characters.' } : {}),
});

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const updateField = (field: ContactField) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...form, [field]: event.target.value };
    setForm(next);
    if (submissionState !== 'idle') setSubmissionState('idle');
    if (errors[field]) setErrors(validate(next));
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmissionState('submitting');
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
    if (endpoint) {
      try {
        const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(form) });
        if (!response.ok) throw new Error('Contact request failed');
        setSubmissionState('sent');
        setForm(initialForm);
        return;
      } catch {
        setErrors({ message: 'Your message could not be sent. Please use the email link instead.' });
        setSubmissionState('failed');
        return;
      }
    }
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmissionState('sent');
    setForm(initialForm);
  };
  const successMessage = endpointConfigured()
    ? 'Thanks — your message has been sent.'
    : 'Your email client is opening with your message ready to send.';

  return (
    <SectionWrapper id="contact" className="border-t border-line bg-secondary-bg">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">Let’s build something exceptional together.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-stone-400">
            I’m open to full-stack engineering roles, freelance builds, and technical collaborations where craft, reliability, and clear communication matter.
          </p>

          <div className="mt-8 rounded-2xl border border-line bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-accent dark:bg-blue-950/50">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-paper">{siteConfig.location}</p>
                <p className="text-xs text-muted">Available remotely worldwide</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {details.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-3.5 rounded-xl border border-line bg-card p-3.5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow"
              >
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-stone-400 dark:bg-slate-800">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">{label}</p>
                  <p className="text-sm font-medium text-paper">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-8">
          <div className="border-b border-line pb-4">
            <h3 className="text-lg font-bold text-paper">Send a message</h3>
            <p className="mt-1 text-xs text-stone-400">Fill out the form below and I will respond within 24 hours.</p>
          </div>

          <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                id="name"
                value={form.name}
                error={errors.name}
                onChange={updateField('name')}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={updateField('email')}
              />
            </div>

            <Field
              label="Subject"
              id="subject"
              value={form.subject}
              error={errors.subject}
              onChange={updateField('subject')}
            />

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={updateField('message')}
                placeholder="Tell me about your project, timeline, and goals..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="mt-2 w-full rounded-xl border border-line bg-secondary-bg px-4 py-3 text-sm text-paper placeholder-slate-400 transition-colors focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 dark:focus:bg-slate-900"
              />
              {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submissionState === 'submitting'}
              className="btn-primary w-full sm:w-auto"
            >
              {submissionState === 'submitting' ? 'Sending message...' : 'Send message'}{' '}
              <ArrowUpRight className="h-4 w-4" />
            </button>

            {submissionState === 'sent' && (
              <div role="status" className="flex items-center gap-2 rounded-xl bg-emerald-50 p-3.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>{successMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}

function endpointConfigured() {
  return Boolean(import.meta.env.VITE_CONTACT_FORM_ENDPOINT);
}

interface FieldProps {
  label: string;
  id: ContactField;
  type?: 'text' | 'email';
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Field({ label, id, type = 'text', value, error, onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </label>
      <input
        id={id}
        required
        type={type}
        autoComplete={id === 'name' ? 'name' : id === 'email' ? 'email' : 'off'}
        value={value}
        onChange={onChange}
        placeholder={label === 'Name' ? 'Alex Doe' : label === 'Email' ? 'alex@company.com' : 'Project overview'}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full rounded-xl border border-line bg-secondary-bg px-4 py-2.5 text-sm text-paper placeholder-slate-400 transition-colors focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 dark:focus:bg-slate-900"
      />
      {error && <p id={`${id}-error`} className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
