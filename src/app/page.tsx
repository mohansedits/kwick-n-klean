'use client';

import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import('@/components/sections/Navigation').then((mod) => mod.Navigation), { ssr: false });
const Hero = dynamic(() => import('@/components/sections/Hero').then((mod) => mod.Hero), { ssr: false });
const Services = dynamic(() => import('@/components/sections/Services').then((mod) => mod.Services), { ssr: false });
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs').then((mod) => mod.WhyChooseUs), { ssr: false });
const Gallery = dynamic(() => import('@/components/sections/Gallery').then((mod) => mod.Gallery), { ssr: false });
const Reviews = dynamic(() => import('@/components/sections/Reviews').then((mod) => mod.Reviews), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/Contact').then((mod) => mod.Contact), { ssr: false });
const Footer = dynamic(() => import('@/components/sections/Footer').then((mod) => mod.Footer), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}