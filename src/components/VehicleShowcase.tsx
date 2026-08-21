import React, { useState } from 'react';
import { ArrowRight, Car, Fuel, Gauge, MessageSquare, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';
import { DEMO_VEHICLES } from '../data/faajiData';
import { DemoVehicle } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface VehicleShowcaseProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const VehicleShowcase: React.FC<VehicleShowcaseProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Executive Luxury Sedan', 'Flagship Luxury SUV', 'Reliable Everyday Crossover', 'Commercial & Fleet Transport'];

  const filteredVehicles = activeTab === 'All'
    ? DEMO_VEHICLES
    : DEMO_VEHICLES.filter((v) => v.category === activeTab);

  return (
    <section id="vehicles" className="py-24 bg-[#08090B] border-b border-[#222631] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#222631] bg-[#111318] px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#C9A227]">
              <span>VEHICLE OPPORTUNITIES & MARKETPLACE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4F0] uppercase">
              FIND YOUR <br />
              <span className="text-silver-gradient">NEXT DRIVE.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A7A9AC]">
              Looking to buy or sell? Start your vehicle conversation with Faaji. We provide mechanical inspection backing, transparent transactions, and pre-purchase diagnostics in Lagos.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={getWhatsAppUrl('Hello Faaji Auto Care Services, I would like to enquire about buying a vehicle.')}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="chat"
              className="flex items-center gap-2 rounded-md bg-[#C9A227] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#dbb335] transition-all shadow-md shadow-[#C9A227]/20"
            >
              <MessageSquare className="h-4 w-4 fill-black" />
              <span>ENQUIRE ABOUT VEHICLES</span>
            </a>

            <button
              onClick={() => onOpenBooking('VEHICLE SALES (SELL VEHICLE)')}
              className="flex items-center gap-2 rounded-md border border-[#222631] bg-[#111318] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] hover:bg-[#171A21] transition-colors"
            >
              <span>SELL YOUR VEHICLE</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Notice Disclaimer Banner */}
        <div className="mb-8 rounded-lg border border-[#222631] bg-[#111318]/70 px-4 py-3 flex items-center justify-between gap-3 text-xs text-[#A7A9AC]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
            <span>Vehicles shown below represent typical specification classes serviced and sourced by Faaji in Lagos.</span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2 py-0.5 rounded border border-[#C9A227]/20">
            DEMO VEHICLE EXAMPLES
          </span>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === cat
                  ? 'bg-[#F5F4F0] text-black font-bold shadow-md'
                  : 'border border-[#222631] bg-[#111318] text-[#A7A9AC] hover:text-[#F5F4F0] hover:bg-[#171A21]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group rounded-xl border border-[#222631] bg-[#111318] overflow-hidden transition-all duration-300 hover:border-[#C9A227]/60 hover:-translate-y-1 flex flex-col justify-between shadow-lg"
            >
              {/* Vehicle Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#08090B]">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                
                {/* Demo Badge */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="rounded-md bg-black/80 backdrop-blur-md border border-[#222631] px-2 py-0.5 text-[10px] font-mono font-bold text-[#C9A227] uppercase tracking-wider">
                    {vehicle.badge}
                  </span>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7A9AC]">
                    {vehicle.category}
                  </span>
                  
                  <h3 className="text-base font-bold text-[#F5F4F0] uppercase tracking-tight group-hover:text-[#C9A227] transition-colors leading-snug">
                    {vehicle.title}
                  </h3>

                  <p className="text-xs text-[#A7A9AC] leading-relaxed">
                    {vehicle.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="rounded-lg border border-[#222631] bg-[#08090B] p-3 space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between text-[#A7A9AC]">
                    <span className="flex items-center gap-1">
                      <Gauge className="h-3 w-3 text-[#C9A227]" />
                      <span>Engine:</span>
                    </span>
                    <span className="text-[#F5F4F0]">{vehicle.specEngine}</span>
                  </div>

                  <div className="flex items-center justify-between text-[#A7A9AC]">
                    <span className="flex items-center gap-1">
                      <Car className="h-3 w-3 text-[#C9A227]" />
                      <span>Transmission:</span>
                    </span>
                    <span className="text-[#F5F4F0]">{vehicle.specTransmission}</span>
                  </div>

                  <div className="flex items-center justify-between text-[#A7A9AC]">
                    <span className="flex items-center gap-1">
                      <Fuel className="h-3 w-3 text-[#C9A227]" />
                      <span>Fuel Type:</span>
                    </span>
                    <span className="text-[#F5F4F0]">{vehicle.specFuel}</span>
                  </div>
                </div>

                {/* Action CTA */}
                <a
                  href={getWhatsAppUrl(`Hello Faaji Auto Care Services, I would like to enquire about vehicle opportunities in the ${vehicle.category} category.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="chat"
                  className="w-full flex items-center justify-center gap-2 rounded-md bg-[#171A21] border border-[#222631] group-hover:border-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-black py-2.5 text-xs font-bold uppercase tracking-wider text-[#F5F4F0] transition-all"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Enquire on WhatsApp</span>
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
