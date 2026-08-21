import React from 'react';
import { ArrowRight, Car, TrendingUp, Wrench, Cpu } from 'lucide-react';
import { QUICK_NEEDS } from '../data/faajiData';
import { openWhatsApp } from '../utils/whatsapp';

interface WhatDoYouNeedProps {
  onSelectAction: (actionId: 'buy' | 'sell' | 'repair' | 'diagnose') => void;
}

export const WhatDoYouNeed: React.FC<WhatDoYouNeedProps> = ({ onSelectAction }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="h-5 w-5" />;
      case 'TrendingUp':
        return <TrendingUp className="h-5 w-5" />;
      case 'Wrench':
        return <Wrench className="h-5 w-5" />;
      case 'Cpu':
        return <Cpu className="h-5 w-5" />;
      default:
        return <Car className="h-5 w-5" />;
    }
  };

  return (
    <section id="what-you-need" className="py-20 bg-[#08090B] border-b border-[#222631] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#222631] bg-[#111318] px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#C9A227]">
            <span>START WITH YOUR OBJECTIVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4F0] uppercase">
            WHATEVER YOUR <br />
            <span className="text-silver-gradient">VEHICLE NEEDS.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A7A9AC]">
            Start with what brought you here. Select an option below for immediate assistance in Lagos.
          </p>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {QUICK_NEEDS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectAction(item.id)}
              data-cursor="view"
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#222631] bg-[#111318] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C9A227]/60 hover:shadow-2xl hover:shadow-[#C9A227]/10 flex flex-col justify-between min-h-[380px]"
            >
              {/* Background Image with Zoom & Dark Gradient */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-40 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/80 to-[#08090B]/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#08090B]/60 via-transparent to-[#08090B]" />
              </div>

              {/* Card Header Tag */}
              <div className="relative z-10 p-6 flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-[#F5F4F0] tracking-wider group-hover:text-[#C9A227] transition-colors">
                  {item.action}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#222631] bg-[#111318]/80 text-[#C9A227] backdrop-blur-md transition-all group-hover:border-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-black">
                  {getIcon(item.icon)}
                </div>
              </div>

              {/* Card Body & CTA */}
              <div className="relative z-10 p-6 space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#F5F4F0] leading-snug group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A7A9AC] leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom CTA Arrow Row */}
                <div className="pt-2 border-t border-[#222631]/80 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227] group-hover:text-[#F5F4F0] transition-colors">
                    {item.ctaText}
                  </span>
                  <div className="rounded-full bg-[#171A21] p-1.5 text-[#C9A227] border border-[#222631] group-hover:bg-[#C9A227] group-hover:text-black transition-all">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
