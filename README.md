# KWICK N' KLEAN CAR SERVICES - Premium Website Demo

A premium, fully responsive Next.js website for KWICK N' KLEAN CAR SERVICES, located in Kukatpally, Hyderabad.

## 🚀 Features

- **Premium Design**: Cinematic hero, professional service cards, smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG 2.2 compliant with proper ARIA labels, focus management, and semantic HTML
- **SEO Optimized**: Local business schema, meta tags, Open Graph, Twitter cards
- **Performance**: Optimized images, lazy loading, code splitting
- **Form Validation**: Client-side validation with React Hook Form + Zod
- **Interactive Elements**: Carousel galleries, review sliders, lightbox, mobile menu

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (Motion)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Fonts**: Inter + Space Grotesk (Google Fonts)

## 📦 Project Structure

```
kwick-n-klean/
├── public/
│   ├── images/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Badge.tsx
│   │   └── sections/
│   │       ├── Navigation.tsx
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── WhyChooseUs.tsx
│   │       ├── Gallery.tsx
│   │       ├── Reviews.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   ├── hooks/
│   │   ├── useScrollSpy.ts
│   │   ├── useMobileMenu.ts
│   │   └── useContactForm.ts
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   └── seo.ts
│   └── types/
│       └── index.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🎨 Design System

### Colors
- **Primary (Royal Blue)**: `#1E3A8A` - Main brand color
- **Accent (Red)**: `#DC2626` - Call-to-action highlights
- **Secondary (Deep Navy)**: `#0F172A` - Dark backgrounds
- **Surface**: `#FFFFFF` - Light backgrounds
- **Metallic Silver**: `#CBD5E1` - Subtle accents
- **Text**: `#0F172A` (primary), `#475569` (secondary), `#94A3B8` (muted)

### Typography
- **Display**: Space Grotesk - Headlines and branding
- **Body**: Inter - UI text and content

### Spacing
- Base unit: 4px (Tailwind default)
- Section padding: `py-18` (mobile) to `py-26` (desktop)
- Container: `max-w-7xl` with responsive padding

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Navigate to project directory
cd kwick-n-klean

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check # Run TypeScript type checking
```

## 📱 Sections Overview

1. **Navigation** - Fixed header with logo, nav links, mobile menu, Book Now CTA
2. **Hero** - Full-screen cinematic background with headline, subtext, dual CTAs, trust indicators
3. **Services** - 5 confirmed services with expandable details and enquiry buttons
4. **Why Choose Us** - 6 value propositions with stats bar
5. **Gallery** - 8-image carousel with lightbox modal
6. **Reviews** - 6 sample reviews with rating summary and carousel
7. **Contact** - Contact info, quick action buttons, enquiry form, Google Maps, FAQ
8. **Footer** - Brand, navigation, services, contact, copyright

## 🔧 Configuration

### Business Information
Edit `src/lib/constants.ts` to update:
- Business name, address, phone, WhatsApp
- Services, features, images
- Gallery images
- Reviews (replace with real Google reviews via API)
- FAQ content

### SEO Metadata
Edit `src/lib/seo.ts` and `src/app/layout.tsx` for:
- Site URL
- Meta titles/descriptions
- Open Graph images
- Structured data

### Styling
Edit `tailwind.config.ts` for:
- Color palette
- Font families
- Spacing scale
- Custom animations
- Shadows

## 📝 Important Notes

### Demo Limitations
- **This is a demo concept** - not an officially approved business website
- **No backend** - Form submissions open WhatsApp with pre-filled data
- **Stock images** - All images from Unsplash (replace with real business photos)
- **Sample reviews** - Placeholder content (integrate Google Places API for real reviews)
- **No prices** - Services don't show pricing (add when verified)

### Production Checklist
- [ ] Replace all Unsplash images with real business photography
- [ ] Integrate Google Places API for live reviews
- [ ] Add backend API for form submissions
- [ ] Configure real domain and SSL
- [ ] Set up analytics (GA4, Search Console)
- [ ] Add error tracking (Sentry)
- [ ] Configure CDN for images
- [ ] Test on real devices
- [ ] Verify all phone/WhatsApp links work
- [ ] Add privacy policy and terms pages

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Focus visible states
- Keyboard navigation support
- Reduced motion support
- Color contrast ratios (WCAG AA)
- Screen reader optimized

## 📄 License

This project is a demo concept for portfolio purposes. Not for commercial use without permission.

## 🤝 Contributing

This is a demo project. For improvements or bug fixes, please create an issue or pull request.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**