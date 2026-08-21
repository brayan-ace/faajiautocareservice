import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Car, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/faajiData';
import { openWhatsApp, getWhatsAppUrl } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onShowToast: (msg: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  onShowToast,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceType: initialService || 'GENERAL CAR REPAIR',
    vehicleDetails: '',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }

    const message = `Hello Faaji Auto Care Services,
I would like to book a service appointment:
• Name: ${formData.fullName}
• Phone / WhatsApp: ${formData.phone}
• Service: ${formData.serviceType}
• Vehicle: ${formData.vehicleDetails || 'Not specified'}
• Preferred Date: ${formData.preferredDate || 'Earliest available'}
• Preferred Time: ${formData.preferredTime}
• Additional Notes: ${formData.notes || 'None'}`;

    openWhatsApp(message);
    setSubmitted(true);
    onShowToast('Appointment request created! Opening WhatsApp.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-xl rounded-2xl border border-[#222631] bg-[#111318] p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg border border-[#222631] bg-[#171A21] p-2 text-[#A7A9AC] hover:text-white hover:bg-[#222631] transition-colors"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#222631] pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C9A227] uppercase tracking-wider mb-1">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>FAAJI AUTO CARE APPOINTMENT</span>
          </div>
          <h3 className="text-xl font-bold uppercase text-[#F5F4F0] font-heading">
            BOOK A SERVICE APPOINTMENT
          </h3>
          <p className="text-xs text-[#A7A9AC]">
            Lagos State Public Care Park, Alausa, Ikeja
          </p>
        </div>

        {submitted ? (
          <div className="space-y-4 text-center py-6">
            <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-[#F5F4F0]">Appointment Ready</h4>
            <p className="text-xs text-[#A7A9AC] max-w-sm mx-auto">
              Your appointment details have been compiled and sent to WhatsApp. Our technical team in Alausa, Ikeja will confirm immediately.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <a
                href={getWhatsAppUrl(`Hello Faaji Auto Care Services, I submitted a booking request for ${formData.serviceType}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#C9A227] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#dbb335]"
              >
                Confirm on WhatsApp
              </a>
              <button
                onClick={onClose}
                className="rounded-md border border-[#222631] px-4 py-2.5 text-xs font-semibold text-[#F5F4F0] hover:bg-[#171A21]"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#F5F4F0] block">
                  Full Name <span className="text-[#C9A227]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full rounded-md border border-[#222631] bg-[#08090B] px-3.5 py-2 text-xs text-[#F5F4F0] placeholder-[#A7A9AC]/50 focus:border-[#C9A227] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-[#F5F4F0] block">
                  Phone / WhatsApp <span className="text-[#C9A227]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+234 813 000 0000"
                  className="w-full rounded-md border border-[#222631] bg-[#08090B] px-3.5 py-2 text-xs text-[#F5F4F0] placeholder-[#A7A9AC]/50 focus:border-[#C9A227] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#F5F4F0] block">
                  Service Required
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full rounded-md border border-[#222631] bg-[#08090B] px-3.5 py-2 text-xs text-[#F5F4F0] focus:border-[#C9A227] focus:outline-none"
                >
                  {SERVICES.map((s) => (
                    <option key={s.number} value={s.title}>
                      {s.number} — {s.title}
                    </option>
                  ))}
                  <option value="GENERAL VEHICLE INSPECTION">GENERAL VEHICLE INSPECTION</option>
                  <option value="BUY/SELL VEHICLE CONSULTATION">BUY/SELL VEHICLE CONSULTATION</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-[#F5F4F0] block">
                  Vehicle Make & Model
                </label>
                <input
                  type="text"
                  value={formData.vehicleDetails}
                  onChange={(e) => setFormData({ ...formData, vehicleDetails: e.target.value })}
                  placeholder="e.g. Lexus RX350 2017"
                  className="w-full rounded-md border border-[#222631] bg-[#08090B] px-3.5 py-2 text-xs text-[#F5F4F0] placeholder-[#A7A9AC]/50 focus:border-[#C9A227] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#F5F4F0] block">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full rounded-md border border-[#222631] bg-[#08090B] px-3.5 py-2 text-xs text-[#F5F4F0] focus:border-[#C9A227] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-[#F5F4F0] block">
                  Preferred Time Window
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full rounded-md border border-[#222631] bg-[#08090B] px-3.5 py-2 text-xs text-[#F5F4F0] focus:border-[#C9A227] focus:outline-none"
                >
                  <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="Late Afternoon (4:00 PM - 6:30 PM)">Late Afternoon (4:00 PM - 6:30 PM)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-[#F5F4F0] block">
                Additional Notes or Fault Description
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any specific noise, dashboard light, or service needed..."
                className="w-full rounded-md border border-[#222631] bg-[#08090B] px-3.5 py-2 text-xs text-[#F5F4F0] placeholder-[#A7A9AC]/50 focus:border-[#C9A227] focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-md bg-[#C9A227] py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#dbb335] transition-all shadow-md shadow-[#C9A227]/20"
            >
              <MessageSquare className="h-4 w-4 fill-black" />
              <span>Proceed to WhatsApp Booking</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
