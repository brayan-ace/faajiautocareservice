import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/faajiData';
import { getWhatsAppUrl, getPhoneUrl, getEmailUrl, openWhatsApp } from '../utils/whatsapp';

interface ContactSectionProps {
  initialService?: string;
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceNeeded: initialService || 'GENERAL CAR REPAIR',
    vehicle: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone / WhatsApp number.');
      return;
    }
    setError(null);

    // Format instant WhatsApp message
    const formattedWhatsAppMessage = `Hello Faaji Auto Care Services,
I would like to make an enquiry:
• Name: ${formData.name}
• Phone / WhatsApp: ${formData.phone}
• Service Needed: ${formData.serviceNeeded}
• Vehicle: ${formData.vehicle || 'Not specified'}
• Details: ${formData.message || 'General consultation request'}`;

    // Open WhatsApp
    openWhatsApp(formattedWhatsAppMessage);
    setFormSubmitted(true);
    onShowToast('Enquiry drafted! Opening WhatsApp for instant connection.');
  };

  return (
    <section id="contact" className="py-24 bg-[#08090B] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#222631] bg-[#111318] px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#C9A227]">
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4F0] uppercase">
            CONNECT WITH <br />
            <span className="text-silver-gradient">FAAJI AUTO CARE.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A7A9AC]">
            Have a question about repairs, diagnostics, parts sourcing, or vehicle sales? Reach out directly via WhatsApp, phone, email, or visit our Alausa workshop.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left 5 Cols: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Call Card */}
            <a
              href={getPhoneUrl()}
              className="block p-5 rounded-xl border border-[#222631] bg-[#111318] hover:border-[#C9A227]/60 hover:bg-[#151821] transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#171A21] border border-[#222631] text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-black transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7A9AC] block">
                    CALL DIRECTLY
                  </span>
                  <div className="text-base font-bold font-mono text-[#F5F4F0] group-hover:text-[#C9A227] transition-colors mt-0.5">
                    {BUSINESS_INFO.phone}
                  </div>
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="chat"
              className="block p-5 rounded-xl border border-[#C9A227]/40 bg-[#111318] hover:border-[#C9A227] hover:bg-[#151821] transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#C9A227] text-black transition-colors">
                  <MessageSquare className="h-5 w-5 fill-black" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9A227] font-bold block">
                    WHATSAPP FAST RESPONSE
                  </span>
                  <div className="text-base font-bold font-mono text-[#F5F4F0] group-hover:text-[#C9A227] transition-colors mt-0.5">
                    {BUSINESS_INFO.phone}
                  </div>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={getEmailUrl()}
              className="block p-5 rounded-xl border border-[#222631] bg-[#111318] hover:border-[#C9A227]/60 hover:bg-[#151821] transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#171A21] border border-[#222631] text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-black transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7A9AC] block">
                    OFFICIAL EMAIL
                  </span>
                  <div className="text-xs sm:text-sm font-semibold font-mono text-[#F5F4F0] truncate group-hover:text-[#C9A227] transition-colors mt-0.5">
                    {BUSINESS_INFO.email}
                  </div>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-xl border border-[#222631] bg-[#111318] space-y-2">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#171A21] border border-[#222631] text-[#C9A227]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7A9AC] block">
                    WORKSHOP LOCATION
                  </span>
                  <div className="text-sm font-bold text-[#F5F4F0] mt-0.5">
                    Lagos State Public Care Park
                  </div>
                  <div className="text-xs text-[#A7A9AC]">
                    Alausa, Ikeja, Lagos, Nigeria
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right 7 Cols: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#222631] bg-[#111318] p-6 sm:p-8 shadow-2xl">
              
              <div className="border-b border-[#222631] pb-4 mb-6">
                <h3 className="text-lg font-bold text-[#F5F4F0] uppercase">
                  SEND AN AUTOMOTIVE ENQUIRY
                </h3>
                <p className="text-xs text-[#A7A9AC]">
                  Fill out the details below and we will connect with you immediately.
                </p>
              </div>

              {formSubmitted ? (
                <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-6 text-center space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto" />
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-[#F5F4F0]">Enquiry Prepared</h4>
                    <p className="text-xs text-[#A7A9AC] max-w-md mx-auto">
                      Your enquiry has been formatted. If WhatsApp did not launch automatically, click the button below to send it directly.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(`Hello Faaji Auto Care Services, I submitted an enquiry for ${formData.serviceNeeded} (${formData.vehicle || 'Vehicle'}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C9A227] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#dbb335]"
                    >
                      <MessageSquare className="h-4 w-4 fill-black" />
                      <span>Open in WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2.5 rounded-md border border-[#222631] text-xs font-semibold text-[#F5F4F0] hover:bg-[#171A21]"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#F5F4F0] block">
                        Full Name <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Babatunde Adeleke"
                        className="w-full rounded-md border border-[#222631] bg-[#08090B] px-3.5 py-2.5 text-xs text-[#F5F4F0] placeholder-[#A7A9AC]/50 focus:border-[#C9A227] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#F5F4F0] block">
                        Phone / WhatsApp Number <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +234 813 000 0000"
                        className="w-full rounded-md border border-[#222631] bg-[#08090B] px-3.5 py-2.5 text-xs text-[#F5F4F0] placeholder-[#A7A9AC]/50 focus:border-[#C9A227] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#F5F4F0] block">
                        Service Needed
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full rounded-md border border-[#222631] bg-[#08090B] px-3.5 py-2.5 text-xs text-[#F5F4F0] focus:border-[#C9A227] focus:outline-none"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.number} value={s.title} className="bg-[#08090B] text-[#F5F4F0]">
                            {s.number} — {s.title}
                          </option>
                        ))}
                        <option value="GENERAL VEHICLE CONSULTATION" className="bg-[#08090B] text-[#F5F4F0]">
                          GENERAL VEHICLE CONSULTATION
                        </option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#F5F4F0] block">
                        Vehicle (Make, Model, Year)
                      </label>
                      <input
                        type="text"
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        placeholder="e.g. Toyota Camry 2018 / Mercedes GL450"
                        className="w-full rounded-md border border-[#222631] bg-[#08090B] px-3.5 py-2.5 text-xs text-[#F5F4F0] placeholder-[#A7A9AC]/50 focus:border-[#C9A227] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#F5F4F0] block">
                      Message / Vehicle Symptoms
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you are experiencing or what service you require..."
                      className="w-full rounded-md border border-[#222631] bg-[#08090B] px-3.5 py-2.5 text-xs text-[#F5F4F0] placeholder-[#A7A9AC]/50 focus:border-[#C9A227] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-md bg-[#C9A227] py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#dbb335] transition-all shadow-md shadow-[#C9A227]/20"
                  >
                    <span>SEND ENQUIRY</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>

                  <div className="text-[11px] text-center text-[#A7A9AC] font-mono">
                    Direct dispatch to Faaji Auto Care Services (+234 813 068 2449)
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
