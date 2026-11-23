'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Car } from 'lucide-react';
import { NAV_ITEMS, BUSINESS_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, isTransitioning, close, toggle } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
    close();
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-surface/95 backdrop-blur-xl shadow-premium border-b border-border'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container-premium" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo - Compact for mobile */}
          <Link
            href="#home"
            className="flex items-center gap-2 text-text-primary hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label={`${BUSINESS_INFO.name} ${BUSINESS_INFO.descriptor} - Home`}
            onClick={(e) => {
              e.preventDefault();
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              close();
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 bg-gradient-primary rounded-xl"
              aria-hidden="true"
            >
              <Car className="w-5 h-5 text-white" aria-hidden="true" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-heading-sm tracking-tight leading-none">
                {BUSINESS_INFO.name}
              </span>
              <span className="font-medium text-[10px] text-accent tracking-wider leading-none block">
                {BUSINESS_INFO.descriptor}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }
                }}
                className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" onClick={() => scrollToSection('#contact')}>
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl text-text-primary hover:bg-surface-muted transition-colors touch-target"
            onClick={toggle}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={cn(
                'lg:hidden overflow-hidden border-t border-border bg-surface',
                isScrolled ? 'shadow-premium' : ''
              )}
              role="navigation"
              aria-label="Mobile menu"
            >
              <div className="px-4 py-4 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }
                    }}
                    className="block px-4 py-3 text-body font-medium text-text-primary hover:text-primary hover:bg-surface-muted rounded-xl transition-colors touch-target"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2 border-t border-border space-y-3">
                  <Button variant="primary" className="w-full touch-target-lg" onClick={() => scrollToSection('#contact')}>
                    Book Now
                  </Button>
                  <div className="flex flex-col gap-3 text-body-sm text-text-muted">
                    <a
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 touch-target"
                    >
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{BUSINESS_INFO.phone}</span>
                    </a>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`}
                      className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 touch-target"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}