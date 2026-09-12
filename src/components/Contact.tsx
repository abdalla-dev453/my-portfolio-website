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

  return <SectionWrapper id="contact" className="code-surface border-t border-line"><div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"><div><p className="eyebrow">Get in touch</p><h2 className="section-title">Let’s build something exceptional together.</h2><p className="mt-8 max-w-md text-sm leading-7 text-stone-400">I’m open to thoughtful product work, engineering roles, and collaborations where craft and clarity matter.</p><div className="mt-12 border-y border-line py-6 text-sm text-stone-300"><div className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-accent" /><div><p className="text-xs uppercase tracking-[0.16em] text-stone-500">Based in</p><p className="mt-1">{siteConfig.location} · available remotely</p></div></div></div><dl className="mt-8 space-y-5">{details.map(({ icon: Icon, label, value, href }) => <div key={label} className="flex items-start gap-3"><Icon className="mt-0.5 h-4 w-4 text-stone-500" /><div><dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">{label}</dt><dd className="mt-1"><a className="text-sm text-stone-300 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{value}</a></dd></div></div>)}</dl></div><form noValidate onSubmit={handleSubmit} className="self-end border border-line bg-ink p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[.16em] text-stone-500">Project enquiry</p><div className="grid gap-x-8 sm:grid-cols-2"><Field label="Name" id="name" value={form.name} error={errors.name} onChange={updateField('name')} /><Field label="Email" id="email" type="email" value={form.email} error={errors.email} onChange={updateField('email')} /></div><Field label="Subject" id="subject" value={form.subject} error={errors.subject} onChange={updateField('subject')} /><label className="mt-8 block"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">Message</span><textarea id="message" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} required rows={5} value={form.message} onChange={updateField('message')} placeholder="Tell me about the work." className="mt-3 w-full resize-none border-b border-line bg-transparent pb-3 text-sm leading-7 text-paper outline-none placeholder:text-stone-600 focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40" />{errors.message && <p id="message-error" className="mt-2 text-xs text-red-400">{errors.message}</p>}</label><button type="submit" disabled={submissionState === 'submitting'} className="btn-primary mt-10">{submissionState === 'submitting' ? 'Sending…' : 'Send inquiry'} <ArrowUpRight className="h-4 w-4" /></button>{submissionState === 'sent' && <p role="status" className="mt-5 flex items-center gap-2 text-sm text-success"><CheckCircle2 className="h-4 w-4" />{successMessage}</p>}</form></div></SectionWrapper>;
}

function endpointConfigured() {
  return Boolean(import.meta.env.VITE_CONTACT_FORM_ENDPOINT);
}

interface FieldProps { label: string; id: ContactField; type?: 'text' | 'email'; value: string; error?: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void; }
function Field({ label, id, type = 'text', value, error, onChange }: FieldProps) { return <label className="mt-8 block"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">{label}</span><input id={id} required type={type} autoComplete={id === 'name' ? 'name' : id === 'email' ? 'email' : 'off'} value={value} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} onChange={onChange} className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm text-paper outline-none placeholder:text-stone-600 focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40" placeholder={label === 'Name' ? 'Your name' : label === 'Email' ? 'you@company.com' : 'A short introduction'} />{error && <p id={`${id}-error`} className="mt-2 text-xs text-red-400">{error}</p>}</label>; }
