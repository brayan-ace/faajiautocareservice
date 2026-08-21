import React, { useState } from 'react';
import { Wrench, Activity, Zap, Wind, Package, CarFront, FileText, ArrowRight, MessageSquare, Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/faajiData';
import { ServiceItem } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ServicesSectionProps {
  onOpenBookingWithService: (serviceName: string) => void;
  onSelectServiceDetail: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBookingWithService,
  onSelectServiceDetail,
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="h-5 w-5" />;
      case 'Activity':
        return <Activity className="h-5 w-5" />;
      case 'Zap':
        return <Zap className="h-5 w-5" />;
      case 'Wind':
        return <Wind className="h-5 w-5" />;
      case 'Package':
        return <Package className="h-5 w-5" />;
      case 'CarFront':
        return <CarFront className="h-5 w-5" />;
      case 'FileText':
        return <FileText className="h-5 w-5" />;
      default:
        return <Wrench className="h-5 w-5" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#08090B] border-b border-[#222631] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#222631] bg-[#111318] px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#C9A227]">
              <span>COMPREHENSIVE AUTOMOTIVE SOLUTIONS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4F0] uppercase">
              ONE DESTINATION. <br />
              <span className="text-silver-gradient">MANY AUTOMOTIVE SOLUTIONS.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A7A9AC]">
              Precision craftsmanship, computerized diagnosis, and certified technical solutions designed to keep you moving smoothly on Lagos roads.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono text-[#C9A227] uppercase tracking-wider block">
              7 SPECIALIZED DIVISIONS
            </span>
            <span className="text-xs text-[#A7A9AC]">
              Alausa, Ikeja, Lagos
            </span>
          </div>
        </div>

        {/* Editorial Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0 || index === 1;
            return (
              <div
                key={service.number}
                className={`group relative rounded-xl border border-[#222631] bg-[#111318] p-7 transition-all duration-300 hover:border-[#C9A227]/50 hover:bg-[#13161F] flex flex-col justify-between shadow-lg ${
                  index === 6 ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                {/* Subtle top indicator */}
                <div>
                  <div className="flex items-center justify-between border-b border-[#222631] pb-4 mb-5">
                    <span className="font-mono text-xl sm:text-2xl font-black text-[#C9A227]">
                      {service.number}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#171A21] border border-[#222631] text-[#F5F4F0] group-hover:border-[#C9A227] group-hover:text-[#C9A227] transition-colors">
                      {getServiceIcon(service.icon)}
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7A9AC] block">
                      {service.systemType}
                    </span>
                    
                    <h3 className="text-xl font-bold tracking-tight text-[#F5F4F0] uppercase group-hover:text-[#C9A227] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A7A9AC] leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features list */}
                    <ul className="pt-3 space-y-1.5 border-t border-[#222631]/60">
                      {service.keyFeatures.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#F5F4F0]/80">
                          <Check className="h-3.5 w-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-6 border-t border-[#222631] flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectServiceDetail(service)}
                    className="text-xs font-semibold text-[#A7A9AC] hover:text-[#F5F4F0] transition-colors flex items-center gap-1.5"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenBookingWithService(service.title)}
                      className="px-3 py-1.5 rounded-md border border-[#222631] bg-[#171A21] text-xs font-medium text-[#F5F4F0] hover:bg-[#222631] transition-colors"
                    >
                      Book
                    </button>

                    <a
                      href={getWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="chat"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#C9A227] text-xs font-bold text-black hover:bg-[#dbb335] transition-all shadow-sm"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare className="h-3.5 w-3.5 fill-black" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
