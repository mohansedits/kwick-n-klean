'use client';

import Link from 'next/link';
import { Car, MapPin, Phone, Mail, MessageCircle, Star, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, FOOTER_LINKS, NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white" role="contentinfo">
      <div className="container-premium py-10 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="#home"
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity mb-4"
              aria-label={`${BUSINESS_INFO.name} ${BUSINESS_INFO.descriptor} - Home`}
            >
              <div className="p-2 bg-gradient-primary rounded-xl" aria-hidden="true">
                <Car className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="font-display font-bold text-heading-sm tracking-tight">
                  {BUSINESS_INFO.name}
                </span>
                <span className="font-medium text-caption text-accent tracking-wider block">
                  {BUSINESS_INFO.descriptor}
                </span>
              </div>
            </Link>
            <p className="text-text-muted text-body-sm leading-relaxed mb-4">
              Premium car care services in Kukatpally, Hyderabad. From complete washes to
              advanced coatings and body restoration — we treat every vehicle with expertise.
            </p>
            <div className="flex items-center gap-2 text-text-muted text-body-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
              <span>{BUSINESS_INFO.rating} ({BUSINESS_INFO.reviewCount}+ reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="font-medium text-heading-sm mb-3">Quick Links</h4>
            <ul className="space-y-2" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-text-muted hover:text-white transition-colors flex items-center gap-2 text-body-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-accent" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="font-medium text-heading-sm mb-3">Our Services</h4>
            <ul className="space-y-2" role="list">
              {FOOTER_LINKS.services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-text-muted hover:text-white transition-colors flex items-center gap-2 text-body-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-accent" aria-hidden="true" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-heading-sm mb-3">Contact Us</h4>
            <address className="not-italic space-y-3 text-text-muted text-body-sm leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p>{BUSINESS_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                <a
                  href={ `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}` }
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Enquiry
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border-dark">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-text-muted text-body-sm">
              &copy; {currentYear} {BUSINESS_INFO.name} {BUSINESS_INFO.descriptor}. All rights reserved.
              <span className="hidden sm:inline"> This is a demo concept website.</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-white transition-colors text-body-sm"
              >
                Google Maps
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-white transition-colors text-body-sm"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                className="text-text-muted hover:text-white transition-colors text-body-sm"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}