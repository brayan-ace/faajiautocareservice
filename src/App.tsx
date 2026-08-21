import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatDoYouNeed } from './components/WhatDoYouNeed';
import { ServicesSection } from './components/ServicesSection';
import { DiagnosticsExperience } from './components/DiagnosticsExperience';
import { VehicleShowcase } from './components/VehicleShowcase';
import { WhyFaaji } from './components/WhyFaaji';
import { LocationSection } from './components/LocationSection';
import { WhatsAppConversion } from './components/WhatsAppConversion';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Toast } from './components/Toast';
import { ServiceItem } from './types';
import { openWhatsApp } from './utils/whatsapp';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingService, setSelectedBookingService] = useState<string>('GENERAL CAR REPAIR');
  const [activeDetailService, setActiveDetailService] = useState<ServiceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedBookingService(serviceName);
    }
    setBookingModalOpen(true);
  };

  const handleSelectQuickAction = (actionId: 'buy' | 'sell' | 'repair' | 'diagnose') => {
    switch (actionId) {
      case 'buy':
        openWhatsApp('Hello Faaji Auto Care Services, I would like to enquire about buying a vehicle.');
        break;
      case 'sell':
        handleOpenBooking('VEHICLE SALES (SELL VEHICLE)');
        break;
      case 'repair':
        handleOpenBooking('GENERAL CAR REPAIR');
        break;
      case 'diagnose':
        handleOpenBooking('VEHICLE DIAGNOSTICS');
        break;
    }
  };

  const handleSelectServiceDetail = (service: ServiceItem) => {
    setActiveDetailService(service);
  };

  return (
    <div className="relative min-h-screen bg-[#08090B] text-[#F5F4F0] selection:bg-[#C9A227]/30 selection:text-[#F5F4F0] flex flex-col justify-between">
      {/* Desktop Custom Luxury Cursor */}
      <CustomCursor />

      {/* Global Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Automotive Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking('GENERAL CAR REPAIR')}
          onExploreNeeds={() => {
            document.getElementById('what-you-need')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. What Do You Need? (Buy, Sell, Repair, Diagnose) */}
        <WhatDoYouNeed onSelectAction={handleSelectQuickAction} />

        {/* 3. Comprehensive Services (01 to 07) */}
        <ServicesSection
          onOpenBookingWithService={handleOpenBooking}
          onSelectServiceDetail={handleSelectServiceDetail}
        />

        {/* 4. Interactive Computerized Diagnostics Experience */}
        <DiagnosticsExperience onOpenBooking={handleOpenBooking} />

        {/* 5. Vehicle Opportunities & Showcase */}
        <VehicleShowcase onOpenBooking={handleOpenBooking} />

        {/* 6. Why Faaji (Trust Pillars) */}
        <WhyFaaji onOpenBooking={() => handleOpenBooking('GENERAL CAR REPAIR')} />

        {/* 7. Location & Google Maps Hub */}
        <LocationSection />

        {/* 8. WhatsApp Conversion Banner */}
        <WhatsAppConversion onOpenBooking={() => handleOpenBooking('GENERAL CAR REPAIR')} />

        {/* 9. Contact & Booking Form */}
        <ContactSection
          initialService={selectedBookingService}
          onShowToast={(msg) => setToastMessage(msg)}
        />
      </main>

      {/* Global Minimalist Footer */}
      <Footer />

      {/* Floating Mobile Quick Action Bar */}
      <MobileQuickBar onOpenBooking={() => handleOpenBooking('GENERAL CAR REPAIR')} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedBookingService}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Deep-dive Service Detail Modal */}
      <ServiceDetailModal
        service={activeDetailService}
        onClose={() => setActiveDetailService(null)}
        onBookThisService={(serviceName) => {
          setSelectedBookingService(serviceName);
          setBookingModalOpen(true);
        }}
      />

      {/* Toast Feedback Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
