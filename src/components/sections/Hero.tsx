'use client';

import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Hero() {
  const scrollToContact = () => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const scrollToServices = () => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-56px)] lg:min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1920&q=80")',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/90 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-mesh" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-premium py-10 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-body-sm mb-6"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            <span className="hidden sm:inline">Premium Car Care in Kukatpally, Hyderabad</span>
            <span className="sm:hidden">Premium Car Care • Kukatpally</span>
            <span className="w-px h-4 bg-white/30 mx-1 hidden sm:inline" />
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" aria-hidden="true" />
              <span>{BUSINESS_INFO.rating}</span>
              <span className="text-text-muted hidden sm:inline">({BUSINESS_INFO.reviewCount}+ reviews)</span>
              <span className="sm:hidden">({BUSINESS_INFO.reviewCount}+)</span>
            </span>
          </motion.div>

          {/* Headline - Optimized for mobile */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-display-mobile text-white mb-5 tracking-tight leading-tight"
          >
            MORE THAN A CAR WASH.
            <br />
            <span className="text-gradient-accent">COMPLETE CAR CARE.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-body text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            From a spotless wash to premium coatings and body care, give your car the attention it deserves.
          </motion.p>

          {/* CTA Buttons - Stacked on mobile, side-by-side on tablet+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
          >
            <Button
              variant="accent"
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto touch-target-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-text-primary touch-target-lg"
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Trust Indicators - Stacked on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80 text-body-sm"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="hidden sm:inline">Insured & Certified</span>
              <span className="sm:hidden">Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="hidden sm:inline">Open until 10 PM</span>
              <span className="sm:hidden">Open 10 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="hidden sm:inline">KPHB Phase 15, Kukatpally</span>
              <span className="sm:hidden">KPHB Phase 15</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce lg:bottom-8"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="text-caption">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
}