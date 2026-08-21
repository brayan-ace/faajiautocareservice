import React from 'react';
import { ArrowUp, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/faajiData';
import { getWhatsAppUrl, getPhoneUrl, getEmailUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Vehicles', href: '#vehicles' },
    { label: 'Diagnostics', href: '#diagnostics' },
    { label: 'About', href: '#about' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050607] border-t border-[#222631] text-[#A7A9AC] relative z-10">
      
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111318] border border-[#C9A227]/40 text-[#C9A227] font-heading font-bold text-base">
                F
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-tight text-[#F5F4F0] uppercase">
                  FAAJI
                </span>
                <span className="ml-2 text-[10px] font-mono tracking-widest text-[#C9A227] uppercase bg-[#C9A227]/10 px-1.5 py-0.5 rounded border border-[#C9A227]/20">
                  AUTO CARE
                </span>
              </div>
            </div>

            <p className="text-xs font-mono uppercase tracking-wider text-[#C9A227]">
              {BUSINESS_INFO.tagline}
            </p>

            <p className="text-xs text-[#A7A9AC] max-w-sm leading-relaxed">
              Professional automotive repairs, computerized diagnostic scanning, A/C maintenance, genuine spare parts, and vehicle sales in Lagos, Nigeria.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="chat"
                className="flex items-center gap-2 rounded-md bg-[#C9A227] px-3.5 py-2 text-xs font-bold text-black hover:bg-[#dbb335] transition-all"
              >
                <MessageSquare className="h-3.5 w-3.5 fill-black" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={getPhoneUrl()}
                className="flex items-center gap-1.5 rounded-md border border-[#222631] bg-[#111318] px-3.5 py-2 text-xs font-mono text-[#F5F4F0] hover:bg-[#171A21]"
              >
                <Phone className="h-3.5 w-3.5 text-[#C9A227]" />
                <span>+234 813 068 2449</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5F4F0] font-semibold block">
              SERVICES DIRECTORY
            </span>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.number}>
                  <a
                    href="#services"
                    className="hover:text-[#F5F4F0] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[10px] font-mono text-[#C9A227]">{s.number}</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5F4F0] font-semibold block">
              WORKSHOP & CONTACT
            </span>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>
                  Lagos State Public Care Park, Alausa, Ikeja, Lagos, Nigeria
                </span>
              </div>

              <div className="flex items-center gap-2.5 font-mono">
                <Phone className="h-4 w-4 text-[#C9A227] shrink-0" />
                <a href={getPhoneUrl()} className="hover:text-white transition-colors">
                  +234 813 068 2449
                </a>
              </div>

              <div className="flex items-center gap-2.5 font-mono">
                <Mail className="h-4 w-4 text-[#C9A227] shrink-0" />
                <a href={getEmailUrl()} className="hover:text-white transition-colors truncate">
                  faajiautocareservices26@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-3">
              <span className="text-[11px] font-mono text-[#C9A227] block">
                Monday – Saturday: 8:00 AM – 6:30 PM
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-12 pt-8 border-t border-[#222631] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A7A9AC]">
          <div>
            © {new Date().getFullYear()} FAAJI AUTO CARE SERVICES. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#A7A9AC]/80">
              ALAUSA • IKEJA • LAGOS
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#F5F4F0] hover:text-[#C9A227] transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
