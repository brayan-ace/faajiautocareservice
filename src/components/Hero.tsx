import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MessageSquare, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { HERO_SLIDES, BUSINESS_INFO } from '../data/faajiData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreNeeds: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreNeeds }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto cycle slides every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen w-full overflow-hidden bg-[#08090B] flex flex-col justify-between pt-24 pb-12 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Crossfade & Cinematic Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`h-full w-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                idx === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Cinematic Gradient Overlays: Deep Blacks & Subtle Highlights */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/70 to-[#08090B]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090B]/90 via-[#08090B]/50 to-transparent" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#08090B]/40 to-[#08090B]" />
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Status & Location Indicator */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#222631] bg-[#111318]/90 backdrop-blur-md px-3.5 py-1.5 text-xs text-[#F5F4F0] shadow-xl">
              <span className="flex h-2 w-2 rounded-full bg-[#C9A227] animate-ping" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#C9A227] font-semibold">
                ALAUSA • IKEJA • LAGOS
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#222631]/80 bg-[#08090B]/70 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-[#A7A9AC]">
              <span>AUTOMOTIVE SERVICES • LAGOS, NIGERIA</span>
            </div>
          </div>

          {/* Subheading brand badge */}
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A227] block font-semibold">
              FAAJI AUTO CARE SERVICES
            </span>

            {/* Main Cinematic Headings */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F4F0] uppercase leading-[1.06]">
              MORE THAN AUTO CARE. <br />
              <span className="text-silver-gradient">WE KEEP YOU MOVING.</span>
            </h1>
          </div>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base md:text-lg text-[#A7A9AC] max-w-2xl leading-relaxed">
            From vehicle sales and diagnostics to repairs, automotive parts, A/C servicing and auto electrical solutions — Faaji brings multiple automotive services together under one trusted destination in Lagos.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-2 rounded-md bg-[#F5F4F0] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black hover:bg-[#C9A227] transition-all shadow-xl hover:shadow-[#C9A227]/25"
            >
              <span>BOOK A SERVICE</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={getWhatsAppUrl('Hello Faaji Auto Care Services, I would like to enquire about your automotive services.')}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="chat"
              className="flex items-center justify-center gap-2 rounded-md border border-[#C9A227]/60 bg-[#111318]/90 backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C9A227] hover:bg-[#C9A227] hover:text-black transition-all shadow-lg"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WHATSAPP FAAJI</span>
            </a>
          </div>

          {/* Dynamic Active Slide Highlights */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#A7A9AC] border-t border-[#222631]/80">
            <span className="text-[#C9A227] font-semibold tracking-wider">
              {activeSlide.badge}:
            </span>
            {activeSlide.highlights.map((hl, i) => (
              <span key={i} className="flex items-center gap-1.5 text-[11px] text-[#F5F4F0]">
                <span className="h-1 w-1 rounded-full bg-[#C9A227]" />
                <span>{hl}</span>
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Hero Bar: Carousel Controls & Slide Indicators */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#222631] pt-4">
          
          {/* Slide Progress Indicators */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className="group flex flex-col gap-1 text-left focus:outline-none flex-1 sm:flex-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div className="h-1 w-full sm:w-16 rounded-full bg-[#222631] overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-full bg-[#C9A227]' : 'w-0 group-hover:w-1/2 bg-white/40'
                    }`}
                  />
                </div>
                <span
                  className={`text-[9px] font-mono uppercase tracking-wider hidden sm:block ${
                    idx === currentSlide ? 'text-[#F5F4F0] font-semibold' : 'text-[#A7A9AC]'
                  }`}
                >
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Category Label and Manual Arrows */}
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
            <div className="text-right">
              <span className="text-[10px] font-mono text-[#A7A9AC] block uppercase tracking-widest">
                AUTOMOTIVE EXPERIENCE
              </span>
              <span className="text-xs font-semibold text-[#F5F4F0] uppercase tracking-wide">
                {activeSlide.category}
              </span>
            </div>

            {/* Left / Right Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-md border border-[#222631] bg-[#111318] text-[#F5F4F0] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-md border border-[#222631] bg-[#111318] text-[#F5F4F0] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
