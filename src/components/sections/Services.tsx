'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Droplets,
  Shield,
  Sparkles,
  Wrench,
  Car,
  ChevronRight,
  Check,
  X,
} from 'lucide-react';
import { SERVICES, SERVICE_OPTIONS } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const serviceIcons = {
  droplets: Droplets,
  shield: Shield,
  sparkles: Sparkles,
  wrench: Wrench,
  car: Car,
};

export function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="section-py-mobile bg-surface"
      aria-labelledby="services-heading"
    >
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-16"
        >
          <Badge variant="primary" className="mb-3">
            Our Services
          </Badge>
          <h2
            id="services-heading"
            className="font-display font-bold text-heading-mobile text-text-primary mb-3"
          >
            Premium Care for{' '}
            <span className="text-gradient">Every Detail</span>
          </h2>
          <p className="text-body text-text-secondary leading-relaxed">
            From precision foam washes to advanced ceramic coatings and body restoration,
            our certified technicians treat your vehicle with the expertise it deserves.
          </p>
        </motion.div>

        {/* Services Grid - Mobile-first: single column, then 2, then 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-10">
          {SERVICES.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] || Car;
            const isExpanded = expandedService === service.id;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="bordered" hover className="h-full flex flex-col">
                  {/* Service Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                      <div className="p-2 bg-primary/90 rounded-xl text-primary">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <Badge variant="outline" className="text-caption">
                        View Details
                      </Badge>
                    </div>
                  </div>
                  <div className="relative p-4 lg:p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-heading-md text-text-primary mb-2">
                      {service.name}
                    </h3>
                    <p className="text-body text-text-secondary mb-4 leading-relaxed flex-1">
                      {service.description}
                    </p>
                  </div>
                  <CardContent className="flex-1 pt-0 px-4 pb-4 lg:px-6 lg:pb-6">
                    <ul className="space-y-2 mb-4" role="list">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + featureIndex * 0.05 }}
                          className="flex items-start gap-2 text-body-sm text-text-secondary"
                        >
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full justify-between touch-target"
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                    >
                      <span>{isExpanded ? 'Show Less' : 'Enquire Now'}</span>
                      {isExpanded ? (
                        <X className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <ChevronRight className="w-4 h-4" aria-hidden="true" />
                      )}
                    </Button>
                  </CardContent>
                  {/* Expanded Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4 lg:px-6 lg:pb-6 border-t border-border bg-surface-muted/50"
                      >
                        <div className="space-y-3">
                          <p className="text-body text-text-secondary leading-relaxed">
                            {service.fullDescription}
                          </p>
                          <Button
                            variant="accent"
                            className="w-full touch-target"
                            onClick={() => {
                              const contactSection = document.getElementById('contact');
                              if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                              setExpandedService(null);
                            }}
                          >
                            Book {service.name}
                            <ChevronRight className="w-4 h-4" aria-hidden="true" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.article>
            );
          })}
        </div>

        {/* Note about pricing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-body-sm text-text-muted"
        >
          Prices vary based on vehicle size, condition, and selected package. Contact us for a personalized quote.
        </motion.p>
      </div>
    </section>
  );
}