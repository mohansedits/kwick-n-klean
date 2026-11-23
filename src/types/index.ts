export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
  fullDescription?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
  verified: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  vehicleModel: string;
  service: string;
  preferredDate?: string;
  message: string;
}

export interface BusinessInfo {
  name: string;
  descriptor: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  rating: number;
  reviewCount: number;
  hours: {
    open: string;
    close: string;
  };
  location: {
    lat: number;
    lng: number;
    mapsUrl: string;
    embedUrl: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SEOData {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary_large_image';
  canonical?: string;
  structuredData?: object;
}

export interface FAQItem {
  question: string;
  answer: string;
}