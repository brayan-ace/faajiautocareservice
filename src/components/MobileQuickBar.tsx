import React from 'react';
import { MessageSquare, Phone, Calendar } from 'lucide-react';
import { getWhatsAppUrl, getPhoneUrl } from '../utils/whatsapp';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Mobile quick action menu"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#08090B]/95 backdrop-blur-xl border-t border-[#222631] px-4 py-2.5 shadow-2xl"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl('Hello Faaji Auto Care Services, I would like to enquire about your automotive services.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#C9A227] py-2.5 px-2 text-xs font-bold uppercase tracking-wider text-black shadow-md shadow-[#C9A227]/20"
        >
          <MessageSquare className="h-4 w-4 fill-black" />
          <span>WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href={getPhoneUrl()}
          className="flex items-center justify-center gap-1.5 rounded-lg border border-[#222631] bg-[#111318] py-2.5 px-3 text-xs font-mono font-medium text-[#F5F4F0] hover:bg-[#171A21]"
          title="Call Faaji"
        >
          <Phone className="h-4 w-4 text-[#C9A227]" />
          <span>Call</span>
        </a>

        {/* Book Button */}
        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 rounded-lg border border-[#222631] bg-[#111318] py-2.5 px-3 text-xs font-semibold text-[#F5F4F0] hover:bg-[#171A21]"
        >
          <Calendar className="h-4 w-4 text-[#C9A227]" />
          <span>Book</span>
        </button>

      </div>
    </aside>
  );
};
