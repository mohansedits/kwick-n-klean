import { BUSINESS_INFO } from './constants';
import { SEOData } from '@/types';

export const SITE_URL = 'https://kwicknklean.com';

export const defaultSEO: SEOData = {
  title: 'KWICK N\' KLEAN CAR SERVICES | Premium Car Care in Kukatpally, Hyderabad',
  description: 'Complete car care services in Kukatpally, Hyderabad. Ceramic coating, Teflon coating, denting & painting, car decors & more. 4.8★ from 473+ reviews. Open until 10 PM.',
  ogImage: '/images/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  canonical: SITE_URL,
};

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${SITE_URL}#business`,
    name: BUSINESS_INFO.name,
    description: defaultSEO.description,
    url: SITE_URL,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kaithalapur Flyover Road, KPHB Phase 15',
      addressLocality: 'Kukatpally',
      addressRegion: 'Telangana',
      postalCode: '500085',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.location.lat,
      longitude: BUSINESS_INFO.location.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '22:00',
      },
    ],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Digital Wallet',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.rating,
      reviewCount: BUSINESS_INFO.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://maps.google.com/?q=Kwick+N+Klean+Car+Services',
      `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`,
    ],
  };
}

export function generateServiceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    name: serviceName,
    description: description,
    provider: {
      '@type': 'AutoRepair',
      name: BUSINESS_INFO.name,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: 'Kukatpally, Hyderabad',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: SITE_URL,
      servicePhone: BUSINESS_INFO.phone,
      availableLanguage: {
        '@type': 'Language',
        name: 'English',
      },
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE_URL,
    name: BUSINESS_INFO.name,
    description: defaultSEO.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}