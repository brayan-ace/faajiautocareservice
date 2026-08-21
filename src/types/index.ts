export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  image: string;
  accentColor: string;
  highlights: string[];
}

export interface QuickNeed {
  id: 'buy' | 'sell' | 'repair' | 'diagnose';
  action: string;
  title: string;
  subtitle: string;
  ctaText: string;
  image: string;
  icon: string;
  tag: string;
  whatsappMessage: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  keyFeatures: string[];
  systemType: string;
  whatsappMessage: string;
  image: string;
}

export interface DemoVehicle {
  id: string;
  category: string;
  title: string;
  specEngine: string;
  specTransmission: string;
  specFuel: string;
  status: 'Opportunity' | 'Inspection Ready' | 'Enquiry Open';
  image: string;
  badge: string;
  description: string;
}

export interface DiagnosticSystem {
  id: string;
  name: string;
  icon: string;
  status: 'Nominal' | 'Scanning' | 'Active' | 'Inspected';
  code: string;
  description: string;
  commonSigns: string[];
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  vehicleMakeModel: string;
  preferredDate: string;
  preferredTime: string;
  issueDescription: string;
}
