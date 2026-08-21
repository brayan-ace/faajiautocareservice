import React from 'react';
import { MessageSquare, Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/faajiData';
import { getWhatsAppUrl, getPhoneUrl } from '../utils/whatsapp';

interface WhatsAppConversionProps {
  onOpenBooking: () => void;
}

export const WhatsAppConversion: React.FC<WhatsAppConversionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-28 bg-[#08090B] border-b border-[#222631] overflow-hidden">
      
      {/* Background Cinematic Image with Deep Gradient Masks */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85"
          alt="Faaji Luxury Automotive Workshop"
          className="h-full w-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B] via-[#08090B]/90 to-[#08090B]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-[#08090B]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl space-y-6">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#111318]/90 backdrop-blur-md px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#C9A227] shadow-xl">
            <span className="h-2 w-2 rounded-full bg-[#C9A227] animate-pulse" />
            <span>DIRECT ASSISTANCE IN LAGOS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F4F0] uppercase leading-[1.05]">
            YOUR CAR DOESN'T <br />
            <span className="text-gold-gradient">HAVE TO WAIT.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A7A9AC] max-w-2xl leading-relaxed">
            Tell us what your vehicle needs and let's get you moving. From mechanical repairs and electrical troubleshooting to spare parts and diagnostics at Alausa, Ikeja.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href={getWhatsAppUrl('Hello Faaji Auto Care Services, I would like to book a service and discuss my vehicle needs.')}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="chat"
              className="flex items-center justify-center gap-2.5 rounded-md bg-[#C9A227] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black hover:bg-[#dbb335] transition-all shadow-xl shadow-[#C9A227]/25"
            >
              <MessageSquare className="h-4 w-4 fill-black" />
              <span>WHATSAPP FAAJI</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={getPhoneUrl()}
              className="flex items-center justify-center gap-2 rounded-md border border-[#222631] bg-[#111318] px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5F4F0] hover:bg-[#171A21] hover:border-[#C9A227]/50 transition-colors"
            >
              <Phone className="h-4 w-4 text-[#C9A227]" />
              <span>CALL +234 813 068 2449</span>
            </a>
          </div>

          {/* Location & Trust Footer */}
          <div className="pt-6 border-t border-[#222631]/80 flex flex-wrap items-center justify-center sm:justify-start gap-6 text-xs text-[#A7A9AC] font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#C9A227]" />
              <span>Lagos State Public Care Park, Alausa, Ikeja</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-[#C9A227]" />
              <span>Direct WhatsApp & On-Site Consultation</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
