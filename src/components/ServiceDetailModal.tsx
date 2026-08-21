import React from 'react';
import { X, Check, ArrowRight, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';
import { ServiceItem } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookThisService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookThisService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-[#222631] bg-[#111318] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with Gradient */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#08090B]">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-lg border border-[#222631] bg-[#08090B]/80 p-2 text-[#F5F4F0] hover:bg-[#171A21] transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="absolute bottom-4 left-6">
            <span className="font-mono text-xl font-bold text-[#C9A227]">
              SERVICE {service.number}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#F5F4F0] uppercase font-heading">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9A227] block">
              SYSTEM DISCIPLINE: {service.systemType}
            </span>
            <p className="text-sm text-[#A7A9AC] leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5F4F0] font-semibold block">
              TECHNICAL SCOPE & DELIVERABLES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#F5F4F0] rounded-lg border border-[#222631] bg-[#08090B] p-2.5">
                  <Check className="h-4 w-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location note */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#A7A9AC] border-t border-[#222631] pt-4">
            <MapPin className="h-3.5 w-3.5 text-[#C9A227]" />
            <span>Service Performed at Lagos State Public Care Park, Alausa, Ikeja</span>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onBookThisService(service.title);
              }}
              className="px-5 py-3 rounded-md border border-[#222631] bg-[#171A21] text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] hover:bg-[#222631] transition-colors"
            >
              Book Service Date
            </button>

            <a
              href={getWhatsAppUrl(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md bg-[#C9A227] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#dbb335] transition-all shadow-md shadow-[#C9A227]/20"
            >
              <MessageSquare className="h-4 w-4 fill-black" />
              <span>WhatsApp Direct Enquiry</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
