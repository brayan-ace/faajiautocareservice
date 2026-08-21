import React from 'react';
import { Layers, ShieldCheck, MapPin, PhoneCall, ArrowRight } from 'lucide-react';
import { TRUST_PILLARS, BUSINESS_INFO } from '../data/faajiData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface WhyFaajiProps {
  onOpenBooking: () => void;
}

export const WhyFaaji: React.FC<WhyFaajiProps> = ({ onOpenBooking }) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="h-6 w-6 text-[#C9A227]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-[#C9A227]" />;
      case 'MapPin':
        return <MapPin className="h-6 w-6 text-[#C9A227]" />;
      case 'PhoneCall':
        return <PhoneCall className="h-6 w-6 text-[#C9A227]" />;
      default:
        return <ShieldCheck className="h-6 w-6 text-[#C9A227]" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#08090B] border-b border-[#222631] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#222631] bg-[#111318] px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#C9A227]">
              <span>THE FAAJI ADVANTAGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4F0] uppercase">
              BUILT AROUND <br />
              <span className="text-silver-gradient">YOUR VEHICLE.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A7A9AC]">
              A unified automotive service hub established to provide high standard repairs, reliable diagnostics, and transparent vehicular advice in Lagos.
            </p>
          </div>

          <div className="rounded-xl border border-[#222631] bg-[#111318] p-5 max-w-md space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#C9A227]">
              HEADQUARTERS
            </div>
            <div className="text-sm font-semibold text-[#F5F4F0]">
              {BUSINESS_INFO.address}
            </div>
            <div className="text-xs text-[#A7A9AC]">
              Direct WhatsApp: +234 813 068 2449
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group rounded-xl border border-[#222631] bg-[#111318] p-6 transition-all duration-300 hover:border-[#C9A227]/50 hover:bg-[#141720] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#222631] pb-4">
                  <span className="font-mono text-2xl font-black text-[#C9A227]">
                    {pillar.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#171A21] border border-[#222631]">
                    {getPillarIcon(pillar.icon)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[#F5F4F0] group-hover:text-[#C9A227] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A7A9AC] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#222631]/80 text-[10px] font-mono uppercase tracking-widest text-[#A7A9AC]">
                FAAJI STANDARD VERIFIED
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
