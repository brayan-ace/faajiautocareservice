import { BUSINESS_INFO } from '../data/faajiData';

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || 'Hello Faaji Auto Care Services, I would like to enquire about your automotive services.';
  const encoded = encodeURIComponent(message);
  return `https://wa.me/2348130682449?text=${encoded}`;
}

export function getPhoneUrl(): string {
  return `tel:${BUSINESS_INFO.phoneRaw}`;
}

export function getEmailUrl(subject?: string, body?: string): string {
  const sub = encodeURIComponent(subject || 'Enquiry - Faaji Auto Care Services');
  const b = encodeURIComponent(body || 'Hello Faaji Auto Care,\n\nI would like to enquire about: ');
  return `mailto:${BUSINESS_INFO.email}?subject=${sub}&body=${b}`;
}

export function openWhatsApp(message?: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
