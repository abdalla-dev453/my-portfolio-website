import { MessageCircle } from 'lucide-react';

export interface WhatsAppButtonProps {
  phoneNumber: string;
  initialMessage?: string;
}

const toWhatsAppUrl = (phoneNumber: string, initialMessage?: string): string => {
  const number = phoneNumber.replace(/[^\d]/g, '');
  const url = new URL(`https://wa.me/${number}`);
  if (initialMessage?.trim()) url.searchParams.set('text', initialMessage.trim());
  return url.toString();
};

export default function WhatsAppButton({ phoneNumber, initialMessage }: WhatsAppButtonProps) {
  return <a href={toWhatsAppUrl(phoneNumber, initialMessage)} target="_blank" rel="noreferrer" aria-label="Start a WhatsApp conversation" title="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-[#25D366] bg-[#25D366] text-[#fff] shadow-[0_10px_24px_rgba(37,211,102,.35)] transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"><MessageCircle className="h-5 w-5" aria-hidden="true" /></a>;
}
