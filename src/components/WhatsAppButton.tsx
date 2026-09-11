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
  return <a href={toWhatsAppUrl(phoneNumber, initialMessage)} target="_blank" rel="noreferrer" aria-label="Start a WhatsApp conversation" className="fixed bottom-6 right-6 z-50 inline-flex h-12 items-center gap-2 border border-[#25D366]/70 bg-transparent px-4 text-xs font-bold uppercase tracking-[0.12em] text-[#25D366] transition-colors hover:border-[#25D366] hover:bg-transparent hover:text-[#25D366]"><MessageCircle className="h-4 w-4" aria-hidden="true" /><span className="hidden sm:inline">WhatsApp</span></a>;
}
