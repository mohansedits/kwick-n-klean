import { BusinessInfo, Service, GalleryImage, NavItem, FAQItem } from '@/types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'KWICK N\' KLEAN',
  descriptor: 'CAR SERVICES',
  address: 'Kaithalapur Flyover Road, KPHB Phase 15, Kukatpally, Hyderabad, Telangana 500085',
  phone: '+91 98568 65865',
  whatsapp: '+919856865865',
  email: 'info@kwicknklean.com',
  rating: 4.8,
  reviewCount: 473,
  hours: {
    open: '8:00 AM',
    close: '10:00 PM',
  },
  location: {
    lat: 17.4924,
    lng: 78.3987,
    mapsUrl: 'https://maps.google.com/?q=Kwick+N+Klean+Car+Services+Kukatpally+Hyderabad',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.123456789!2d78.3987!3d17.4924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99abcdef123%3A0x456789abcdef!2sKwick%20N%20Klean%20Car%20Services!5e0!3m2!1sen!2sin!4v1234567890',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'complete-car-wash',
    name: 'Complete Car Wash',
    description: 'Premium pH-neutral foam wash with spot-free rinse and hand dry for a flawless finish.',
    icon: 'droplets',
    features: [
      'pH-neutral foam formula',
      'Touchless pre-wash',
      'Wheel & tire cleaning',
      'Spot-free rinse',
      'Hand dry with microfiber',
      'Interior vacuum included',
    ],
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    fullDescription: 'Our Complete Car Wash service uses premium pH-neutral products that safely remove dirt and grime without damaging your paint. We start with a touchless pre-wash foam that loosens contaminants, followed by a meticulous hand wash using the two-bucket method. Wheels and tires receive dedicated attention with specialized cleaners. We finish with a spot-free rinse and hand dry using premium microfiber towels. Interior vacuuming is included as standard.',
  },
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating',
    description: 'Advanced nano-ceramic coating for long-lasting hydrophobic protection and deep gloss.',
    icon: 'shield',
    features: [
      '2-5 year durability options',
      'Extreme hydrophobic effect',
      'UV & oxidation resistance',
      'Chemical stain protection',
      'Enhanced gloss depth',
      'Easy maintenance',
    ],
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e563?w=800&q=80',
    fullDescription: 'Our Ceramic Coating service applies a liquid polymer that chemically bonds with your vehicle\'s factory paint, creating a semi-permanent layer of protection. The nano-ceramic particles fill microscopic pores in the paint, creating an ultra-smooth, hydrophobic surface that repels water, dirt, and contaminants. Available in multiple durability tiers from 2 to 5 years. Includes full paint correction prep for optimal bonding and maximum gloss.',
  },
  {
    id: 'teflon-coating',
    name: 'Teflon Coating',
    description: 'Professional Teflon coating for paint protection with hydrophobic properties and easy maintenance.',
    icon: 'sparkles',
    features: [
      '6-12 month durability',
      'Hydrophobic surface',
      'UV protection',
      'Scratch resistance',
      'Easy maintenance',
      'Gloss enhancement',
    ],
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    fullDescription: 'Teflon coating provides a protective layer that shields your paint from environmental contaminants, UV rays, and minor scratches. The fluoropolymer formula creates a non-stick surface where water beads and rolls off effortlessly. Ideal for daily drivers who want professional-grade protection with easier maintenance. Our application process includes thorough paint decontamination and prep for optimal adhesion and longevity.',
  },
  {
    id: 'denting-painting',
    name: 'Denting & Painting',
    description: 'Expert dent repair and color-matched painting to restore your vehicle\'s body to factory finish.',
    icon: 'wrench',
    features: [
      'Paintless dent repair (PDR)',
      'Color-matched painting',
      'Factory finish quality',
      'Insurance claim assistance',
      'Rust prevention treatment',
      'Panel alignment',
    ],
    image: 'https://images.unsplash.com/photo-1623636010262-20e1b7f7d52a?w=800&q=80',
    fullDescription: 'Our Denting & Painting service handles everything from minor door dings to major collision repairs. We use Paintless Dent Repair (PDR) techniques where possible to preserve original factory paint. For paintwork, our computerized color matching ensures seamless blending with your vehicle\'s existing finish. All repairs include rust prevention treatment and panel alignment checks. We work with major insurance providers for hassle-free claims.',
  },
  {
    id: 'car-decors',
    name: 'Car Decors',
    description: 'Premium accessories and styling upgrades to personalize your vehicle\'s interior and exterior.',
    icon: 'car',
    features: [
      'Custom floor mats',
      'Seat covers & protection',
      'Chrome & styling accents',
      'LED lighting upgrades',
      'Steering wheel covers',
      'Organizers & storage',
    ],
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    fullDescription: 'Elevate your driving experience with our curated selection of Car Decors. From custom-fit all-weather floor mats and premium seat covers to chrome styling accents and ambient LED lighting, we offer accessories that combine function with aesthetics. All products are selected for quality, fit, and durability. Our team can advise on compatible options for your specific vehicle model and install selected accessories.',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gallery-1',
    src: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    alt: 'Complete car wash foam application',
    caption: 'Complete Car Wash - Premium foam application',
    category: 'Complete Car Wash',
  },
  {
    id: 'gallery-2',
    src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80',
    alt: 'Interior detailing and cleaning',
    caption: 'Interior deep cleaning and conditioning',
    category: 'Complete Car Wash',
  },
  {
    id: 'gallery-3',
    src: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    alt: 'Ceramic coating application',
    caption: 'Ceramic coating - Hydrophobic demonstration',
    category: 'Ceramic Coating',
  },
  {
    id: 'gallery-4',
    src: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e563?w=800&q=80',
    alt: 'Teflon coating on luxury car',
    caption: 'Teflon coating - Gloss and protection',
    category: 'Teflon Coating',
  },
  {
    id: 'gallery-5',
    src: 'https://images.unsplash.com/photo-1623636010262-20e1b7f7d52a?w=800&q=80',
    alt: 'Dent repair and painting',
    caption: 'Denting & Painting - Seamless repair',
    category: 'Denting & Painting',
  },
  {
    id: 'gallery-6',
    src: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
    alt: 'Wheel and tire detailing',
    caption: 'Wheel & tire detailing - Complete care',
    category: 'Complete Car Wash',
  },
  {
    id: 'gallery-7',
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    alt: 'Car accessories and decor',
    caption: 'Car Decors - Premium accessories',
    category: 'Car Decors',
  },
  {
    id: 'gallery-8',
    src: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    alt: 'Professional detailing studio',
    caption: 'Our professional detailing facility',
    category: 'Facility',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'quality',
    title: 'Uncompromising Quality',
    description: 'We use only premium, pH-balanced products that are safe for your vehicle\'s surfaces and the environment.',
    icon: 'award',
  },
  {
    id: 'detail',
    title: 'Attention to Detail',
    description: 'Every corner, crevice, and surface receives meticulous care. We don\'t just clean — we restore.',
    icon: 'search',
  },
  {
    id: 'satisfaction',
    title: 'Customer Satisfaction',
    description: 'Our 4.8-star rating from 473+ reviews speaks for itself. Your satisfaction is our only metric.',
    icon: 'heart',
  },
  {
    id: 'expertise',
    title: 'Certified Expertise',
    description: 'Our technicians are trained in the latest detailing techniques and certified by industry leaders.',
    icon: 'graduation-cap',
  },
  {
    id: 'convenience',
    title: 'Convenient Location & Hours',
    description: 'Easily accessible on Kaithalapur Flyover Road — open daily from 8 AM to 10 PM for your convenience.',
    icon: 'map-pin',
  },
  {
    id: 'transparency',
    title: 'Transparent Process',
    description: 'No hidden fees or surprise charges. We explain every service and provide clear pricing upfront.',
    icon: 'tag',
  },
];

export const FOOTER_LINKS = {
  services: [
    { label: 'Complete Car Wash', href: '#services' },
    { label: 'Ceramic Coating', href: '#services' },
    { label: 'Teflon Coating', href: '#services' },
    { label: 'Denting & Painting', href: '#services' },
    { label: 'Car Decors', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Contact Us', href: '#contact' },
  ],
  contact: [
    { label: 'Kaithalapur Flyover Road', href: '#' },
    { label: 'KPHB Phase 15, Kukatpally', href: '#' },
    { label: 'Hyderabad, Telangana 500085', href: '#' },
    { label: '+91 98568 65865', href: 'tel:+919856865865' },
  ],
};

export const SERVICE_OPTIONS = SERVICES.map(s => ({ value: s.id, label: s.name }));

export const FAQS: FAQItem[] = [
  {
    question: 'How long does a complete car wash take?',
    answer: 'A complete car wash typically takes 45-60 minutes depending on the vehicle size and condition. Ceramic coating applications require 4-8 hours including prep and curing time.',
  },
  {
    question: 'Do I need to book an appointment?',
    answer: 'We recommend booking for ceramic coating, Teflon coating, and denting/painting services. Walk-ins are welcome for complete car washes and car decor purchases during business hours.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, UPI, credit/debit cards, and digital wallets. Contact us for any specific payment queries.',
  },
  {
    question: 'Is there a warranty on ceramic coating?',
    answer: 'Our ceramic coating services come with manufacturer-backed durability ratings (2-5 years depending on the package). Specific warranty terms are provided at the time of service.',
  },
  {
    question: 'Can you handle insurance claims for dent repairs?',
    answer: 'Yes, we work with major insurance providers and can assist with the claims process for denting and painting repairs. Please contact us with your insurance details.',
  },
];