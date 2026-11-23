'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

// Placeholder - In production, fetch from Google Places API
// These are sample reviews that should be replaced with real Google reviews
const SAMPLE_REVIEWS = [
  {
    id: '1',
    author: 'Rajesh Kumar',
    rating: 5,
    text: 'Exceptional service! My car looks brand new after the detailing. The team is professional, thorough, and uses premium products. Highly recommended for anyone in Kukatpally.',
    date: '2 weeks ago',
    verified: true,
  },
  {
    id: '2',
    author: 'Priya Sharma',
    rating: 5,
    text: 'Best car spa in Hyderabad. The foam wash and interior cleaning exceeded my expectations. Staff is courteous and explains everything. Will definitely return for ceramic coating.',
    date: '1 month ago',
    verified: true,
  },
  {
    id: '3',
    author: 'Amit Patel',
    rating: 4,
    text: 'Good service overall. The Teflon coating has held up well for 4 months. Only reason for 4 stars is the wait time on weekends, but quality makes up for it.',
    date: '3 months ago',
    verified: true,
  },
  {
    id: '4',
    author: 'Sneha Reddy',
    rating: 5,
    text: 'Amazing attention to detail! My SUV interior was deep cleaned and smells fresh. The underbody wash removed all the monsoon mud. Great value for money.',
    date: '1 month ago',
    verified: true,
  },
  {
    id: '5',
    author: 'Vikram Singh',
    rating: 5,
    text: 'Professional team with top-notch equipment. The ceramic coating prep and application was flawless. Car has incredible hydrophobic properties now. Worth every rupee.',
    date: '2 months ago',
    verified: true,
  },
  {
    id: '6',
    author: 'Anjali Gupta',
    rating: 4,
    text: 'Very satisfied with the interior detailing. Leather seats look new again. Staff explained the process and gave maintenance tips. Will book again for exterior.',
    date: '3 weeks ago',
    verified: true,
  },
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      const newItems = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      setItemsPerView(newItems);
      setCurrentIndex(prev => Math.min(prev, Math.max(0, SAMPLE_REVIEWS.length - newItems)));
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, SAMPLE_REVIEWS.length - itemsPerView);

  const next = useCallback(() => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const diff = touchStart - touchEnd;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      id="reviews"
      className="section-py-mobile bg-surface"
      aria-labelledby="reviews-heading"
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
            Customer Reviews
          </span>
          <h2
            id="reviews-heading"
            className="font-display font-bold text-heading-mobile text-text-primary mb-3"
          >
            Trusted by{' '}
            <span className="text-gradient">{BUSINESS_INFO.reviewCount}+ Customers</span>
          </h2>
          <p className="text-body text-text-secondary leading-relaxed mb-8">
            Real experiences from car owners in Kukatpally and across Hyderabad.
          </p>

          {/* Rating Summary - Mobile optimized */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-4 p-4 bg-surface-muted rounded-2xl border border-border w-full sm:w-auto">
              <div className="text-center">
                <div className="font-display font-bold text-display-sm text-text-primary">
                  {BUSINESS_INFO.rating}
                </div>
                <div className="flex items-center justify-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="text-body-sm text-text-muted mt-1">
                  {BUSINESS_INFO.reviewCount}+ Google Reviews
                </div>
              </div>
              <div className="w-px h-10 bg-border mx-3 sm:mx-4 hidden sm:block" aria-hidden="true" />
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-body-sm text-text-secondary w-6 text-right">{star}</span>
                    <div className="flex-1 h-1.5 bg-surface rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                        style={{ width: `${star === 5 ? 85 : star === 4 ? 10 : star === 3 ? 3 : star === 2 ? 1.5 : 0.5}%` }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews Carousel - Native scroll snap for mobile */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="carousel-container gap-4 pb-4 -mx-4 px-4">
            {SAMPLE_REVIEWS.map((review, index) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="carousel-item w-[calc(100%-16px)] min-w-[280px] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-8px)]"
              >
                <Card variant="bordered" className="h-full">
                  <CardContent className="pt-4 pb-4 lg:pt-6 lg:pb-6">
                    <div className="flex items-center gap-1 mb-3" role="img" aria-label={`${review.rating} out of 5 stars`}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={cn(
                            'w-4 h-4',
                            star <= review.rating ? 'text-yellow-400 fill-current' : 'text-border fill-none stroke-current'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                      {review.verified && (
                        <span className="ml-2 flex items-center gap-1 text-body-sm text-primary">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                          Verified
                        </span>
                      )}
                    </div>
                    <Quote className="w-6 h-6 text-primary/20 mb-3" aria-hidden="true" />
                    <blockquote className="text-body text-text-secondary leading-relaxed mb-4">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                    <footer className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-medium text-heading-sm"
                        aria-hidden="true"
                      >
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-text-primary">{review.author}</div>
                        <div className="text-body-sm text-text-muted">{review.date}</div>
                      </div>
                    </footer>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* Navigation Dots - Mobile only */}
          {itemsPerView === 1 && (
            <div className="flex items-center justify-center gap-2 mt-6 lg:hidden" role="tablist" aria-label="Review pages">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Go to review page ${i + 1}`}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    i === currentIndex
                      ? 'bg-primary w-6'
                      : 'bg-border hover:bg-metallic'
                  )}
                />
              ))}
            </div>
          )}

          {/* Navigation Arrows - Desktop only */}
          <div className="hidden lg:flex items-center justify-center gap-4 mt-8">
            <Button
              variant="secondary"
              size="sm"
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="Previous reviews"
              className="p-3 touch-target"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </Button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Review pages">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Go to review page ${i + 1}`}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    i === currentIndex
                      ? 'bg-primary w-6'
                      : 'bg-border hover:bg-metallic'
                  )}
                />
              ))}
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={next}
              disabled={currentIndex === maxIndex}
              aria-label="Next reviews"
              className="p-3 touch-target"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>

          {/* Google Reviews Link */}
          <div className="text-center mt-8 lg:mt-10">
            <Button variant="ghost" size="lg" onClick={() => window.open('https://g.page/kwicknklean', '_blank', 'noopener,noreferrer')}>
              <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
              View All {BUSINESS_INFO.reviewCount}+ Reviews on Google
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}