'use client';

import { motion } from 'motion/react';
import {
  Award,
  Search,
  Heart,
  GraduationCap,
  MapPin,
  Tag,
} from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

const featureIcons = {
  award: Award,
  search: Search,
  heart: Heart,
  'graduation-cap': GraduationCap,
  'map-pin': MapPin,
  tag: Tag,
};

function StatItem({
  value,
  label,
  prefix = '',
  suffix = '',
}: {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="text-center p-4 lg:p-6">
      <div className="font-display font-bold text-display-sm lg:text-display-md text-text-primary mb-1">
        {prefix}
        <span className="text-gradient">{value}</span>
        {suffix}
      </div>
      <div className="text-body-sm lg:text-body text-text-secondary">{label}</div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section
      id="about"
      className="section-py-mobile bg-surface-muted"
      aria-labelledby="why-choose-heading"
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
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-body-sm font-medium mb-3">
            Why Choose Us
          </span>
          <h2
            id="why-choose-heading"
            className="font-display font-bold text-heading-mobile text-text-primary mb-3"
          >
            The{' '}
            <span className="text-gradient">{BUSINESS_INFO.name}</span>{' '}
            Difference
          </h2>
          <p className="text-body text-text-secondary leading-relaxed">
            We don&apos;t just clean cars — we restore them. Every service is backed by expertise,
            premium products, and an unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Trust Stats - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4 mb-10 lg:mb-16"
        >
          <StatItem value="4.8" label="Google Rating" suffix="/5" />
          <StatItem value="473+" label="Google Reviews" />
          <StatItem value="5" label="Premium Services" />
          <StatItem value="10" label="Hours Daily" suffix="PM" prefix="8 AM - " />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {WHY_CHOOSE_US.map((feature, index) => {
            const Icon = featureIcons[feature.icon as keyof typeof featureIcons] || Award;

            return (
              <motion.article
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="default" hover className="h-full">
                  <CardContent className="pt-4 lg:pt-6 pb-4 lg:pb-6 px-4 lg:px-6">
                    <div className="p-3 lg:p-4 bg-primary/10 rounded-2xl w-fit text-primary mb-4">
                      <Icon className="w-6 h-6 lg:w-8 lg:h-8" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-bold text-heading-sm lg:text-heading-md text-text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-body-sm lg:text-body text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}