import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/faajiData';
import { getWhatsAppUrl, getPhoneUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Vehicles', href: '#vehicles' },
    { label: 'Diagnostics', href: '#diagnostics' },
    { label: 'About', href: '#about' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090B]/95 backdrop-blur-md border-b border-[#222631] py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#08090B]/90 via-[#08090B]/40 to-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark (Single cohesive line) */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111318] border border-[#C9A227]/40 text-[#C9A227] font-heading font-bold text-base shadow-sm group-hover:border-[#C9A227] group-hover:bg-[#171A21] transition-all">
              F
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#F5F4F0] uppercase">
                  FAAJI
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono font-medium tracking-widest text-[#C9A227] uppercase bg-[#C9A227]/10 px-1.5 py-0.5 rounded border border-[#C9A227]/20">
                  AUTO CARE
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-widest text-[#A7A9AC] uppercase hidden sm:block">
                ALAUSA • IKEJA • LAGOS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[#A7A9AC] hover:text-[#F5F4F0] hover:bg-[#111318] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getPhoneUrl()}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#A7A9AC] hover:text-[#F5F4F0] transition-colors"
              title="Direct Phone Call"
            >
              <Phone className="h-3.5 w-3.5 text-[#C9A227]" />
              <span className="hidden xl:inline">+234 813 068 2449</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="chat"
              className="flex items-center gap-2 rounded-md bg-[#C9A227] px-4 py-2 text-xs font-semibold text-black hover:bg-[#dbb335] transition-all shadow-md shadow-[#C9A227]/20 uppercase tracking-wider"
            >
              <MessageSquare className="h-3.5 w-3.5 fill-black" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-md bg-[#C9A227] text-black text-xs font-semibold"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="h-4 w-4 fill-black" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-[#222631] bg-[#111318] text-[#F5F4F0] hover:bg-[#171A21] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#222631] bg-[#08090B]/98 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-[#C9A227] border-b border-[#222631] mb-2">
            <MapPin className="h-3 w-3" />
            <span>ALAUSA • IKEJA • LAGOS, NIGERIA</span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block rounded-md px-3 py-2.5 text-sm font-medium uppercase tracking-wider text-[#F5F4F0] hover:bg-[#111318]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#222631] space-y-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#C9A227] py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-md shadow-[#C9A227]/20"
            >
              <MessageSquare className="h-4 w-4 fill-black" />
              <span>WhatsApp +234 813 068 2449</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-[#222631] bg-[#111318] py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] hover:bg-[#171A21]"
            >
              <span>Book a Service</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#C9A227]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
