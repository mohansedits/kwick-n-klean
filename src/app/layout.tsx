import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { defaultSEO, generateLocalBusinessSchema, generateWebSiteSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  preload: true,
});

export const metadata: Metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: [
    'car wash',
    'car detailing',
    'ceramic coating',
    'teflon coating',
    'denting painting',
    'car accessories',
    'Kukatpally',
    'Hyderabad',
    'KPHB',
  ],
  authors: [{ name: 'KWICK N\' KLEAN CAR SERVICES' }],
  creator: 'KWICK N\' KLEAN CAR SERVICES',
  publisher: 'KWICK N\' KLEAN CAR SERVICES',
  robots: 'index, follow',
  openGraph: {
    type: defaultSEO.ogType,
    locale: 'en_IN',
    url: defaultSEO.canonical,
    siteName: 'KWICK N\' KLEAN CAR SERVICES',
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [
      {
        url: defaultSEO.ogImage || '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KWICK N\' KLEAN CAR SERVICES - Premium Car Care',
      },
    ],
  },
  twitter: {
    card: defaultSEO.twitterCard,
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [defaultSEO.ogImage || '/images/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  other: {
    'google-site-verification': 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#1E3A8A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = [
    generateLocalBusinessSchema(),
    generateWebSiteSchema(),
  ];

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}