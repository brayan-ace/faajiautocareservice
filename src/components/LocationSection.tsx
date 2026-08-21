import React from 'react';
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/faajiData';
import { getWhatsAppUrl, getPhoneUrl, getEmailUrl } from '../utils/whatsapp';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#08090B] border-b border-[#222631] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#222631] bg-[#111318] px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#C9A227]">
            <MapPin className="h-3.5 w-3.5" />
            <span>CENTRAL IKEJA AUTOMOTIVE HUB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4F0] uppercase">
            WHERE <br />
            <span className="text-gold-gradient">LAGOS MOVES.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A7A9AC]">
            Conveniently situated in Alausa, Ikeja. Accessible to vehicle owners across Ikeja, Maryland, Magodo, Oregun, and the greater Lagos metropolis.
          </p>
        </div>

        {/* 2-Column Location & Interactive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 6 Cols: Location Details & Contact Pointers */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Big City Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-[#222631] bg-[#111318] p-4 text-center">
                <span className="text-[10px] font-mono text-[#A7A9AC] uppercase block">DISTRICT</span>
                <span className="text-lg font-bold text-[#F5F4F0] uppercase font-heading">ALAUSA</span>
              </div>

              <div className="rounded-xl border border-[#222631] bg-[#111318] p-4 text-center">
                <span className="text-[10px] font-mono text-[#A7A9AC] uppercase block">CITY</span>
                <span className="text-lg font-bold text-[#C9A227] uppercase font-heading">IKEJA</span>
              </div>

              <div className="rounded-xl border border-[#222631] bg-[#111318] p-4 text-center">
                <span className="text-[10px] font-mono text-[#A7A9AC] uppercase block">STATE</span>
                <span className="text-lg font-bold text-[#F5F4F0] uppercase font-heading">LAGOS</span>
              </div>
            </div>

            {/* Address & Hours Box */}
            <div className="rounded-xl border border-[#222631] bg-[#111318] p-6 space-y-5">
              
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#171A21] border border-[#222631] text-[#C9A227]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A7A9AC]">
                    PHYSICAL WORKSHOP LOCATION
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#F5F4F0] mt-0.5">
                    Lagos State Public Care Park
                  </h3>
                  <p className="text-xs text-[#A7A9AC]">
                    Alausa, Ikeja, Lagos State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#222631]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#171A21] border border-[#222631] text-[#C9A227]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A7A9AC]">
                    OPERATING HOURS
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#F5F4F0] mt-0.5">
                    Monday – Saturday: 8:00 AM – 6:30 PM
                  </p>
                  <p className="text-xs text-[#A7A9AC]">
                    Sunday: Closed (WhatsApp Emergency Service Active)
                  </p>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-4 border-t border-[#222631] flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-md bg-[#F5F4F0] px-4 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#C9A227] transition-all shadow-md"
                >
                  <Navigation className="h-4 w-4" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={getWhatsAppUrl('Hello Faaji Auto Care Services, I would like to get directions to your workshop in Alausa, Ikeja.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="chat"
                  className="flex items-center justify-center gap-2 rounded-md border border-[#C9A227] bg-[#111318] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#C9A227] hover:bg-[#C9A227] hover:text-black transition-all"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WHATSAPP LOCATION</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right 6 Cols: Visual Map Viewport Representation */}
          <div className="lg:col-span-6 rounded-xl border border-[#222631] bg-[#111318] overflow-hidden flex flex-col justify-between shadow-2xl relative min-h-[380px]">
            
            {/* Map Simulator UI */}
            <div className="relative flex-1 w-full bg-[#0D0F14] overflow-hidden flex items-center justify-center p-6">
              
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-grain opacity-20" />
              
              {/* Roads / Vector Map Simulation */}
              <svg className="absolute inset-0 w-full h-full stroke-[#222631] stroke-[2] opacity-40">
                <line x1="0" y1="30%" x2="100%" y2="30%" />
                <line x1="0" y1="70%" x2="100%" y2="70%" />
                <line x1="40%" y1="0" x2="40%" y2="100%" />
                <line x1="75%" y1="0" x2="75%" y2="100%" />
                <circle cx="58%" cy="48%" r="120" fill="none" stroke="#222631" strokeDasharray="4 4" />
              </svg>

              {/* Pin Marker Card */}
              <div className="relative z-10 rounded-xl border border-[#C9A227]/80 bg-[#08090B]/95 p-5 max-w-sm shadow-2xl space-y-3 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-4 w-4 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A227] opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#C9A227]" />
                  </div>
                  <div>
                    <span className="font-heading text-sm font-bold text-white uppercase block">
                      FAAJI AUTO CARE
                    </span>
                    <span className="text-[11px] font-mono text-[#C9A227]">
                      Lagos State Public Care Park
                    </span>
                  </div>
                </div>

                <div className="text-xs text-[#A7A9AC] space-y-1 font-mono border-t border-[#222631] pt-2">
                  <div>• Landmark: Alausa Secretariat Corridor</div>
                  <div>• Zone: Ikeja Central Business District</div>
                  <div>• Coordinates: 6.6186° N, 3.3582° E</div>
                </div>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 rounded-md bg-[#171A21] border border-[#222631] py-2 text-xs font-semibold text-[#F5F4F0] hover:bg-[#222631] transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

            </div>

            {/* Quick Contact Bar */}
            <div className="border-t border-[#222631] bg-[#08090B] px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <a
                href={getPhoneUrl()}
                className="flex items-center gap-2 text-[#A7A9AC] hover:text-[#F5F4F0] font-mono transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#C9A227]" />
                <span>+234 813 068 2449</span>
              </a>

              <a
                href={getEmailUrl()}
                className="flex items-center gap-2 text-[#A7A9AC] hover:text-[#F5F4F0] font-mono transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[#C9A227]" />
                <span className="truncate max-w-[200px] sm:max-w-none">faajiautocareservices26@gmail.com</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
