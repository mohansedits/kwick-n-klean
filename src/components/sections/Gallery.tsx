'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [itemsPerView, setItemsPerView] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      const newItems = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      setItemsPerView(newItems);
      setCurrentIndex(prev => Math.min(prev, Math.max(0, GALLERY_IMAGES.length - newItems)));
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, GALLERY_IMAGES.length - itemsPerView);

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

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const handleLightboxNext = () => {
    setLightboxIndex(prev => (prev + 1) % GALLERY_IMAGES.length);
  };

  const handleLightboxPrev = () => {
    setLightboxIndex(prev => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleLightboxNext();
      if (e.key === 'ArrowLeft') handleLightboxPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  const scrollToIndex = useCallback((index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / GALLERY_IMAGES.length;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <section
      id="gallery"
      className="section-py-mobile bg-surface"
      aria-labelledby="gallery-heading"
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
            Our Work
          </span>
          <h2
            id="gallery-heading"
            className="font-display font-bold text-heading-mobile text-text-primary mb-3"
          >
            Gallery
          </h2>
          <p className="text-body text-text-secondary leading-relaxed">
            A showcase of our premium car care results. All images are illustrative —
            actual results may vary based on vehicle condition.
          </p>
        </motion.div>

        {/* Gallery Carousel - Native scroll snap for mobile */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="carousel-container gap-4 pb-4 lg:pb-0 -mx-4 lg:mx-0 px-4 lg:px-0"
            role="region"
            aria-label="Gallery carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {GALLERY_IMAGES.map((image, index) => (
              <motion.article
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  'carousel-item',
                  itemsPerView === 3 && 'w-[calc(33.333%-16px)] min-w-[280px]',
                  itemsPerView === 2 && 'w-[calc(50%-12px)] min-w-[280px]',
                  itemsPerView === 1 && 'w-[calc(100%-8px)] min-w-[280px]'
                )}
              >
                <Card variant="bordered" className="h-full overflow-hidden cursor-pointer" onClick={() => openLightbox(index)}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <p className="font-medium text-body-sm">{image.caption}</p>
                      <p className="text-caption text-white/80">{image.category}</p>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => { e.stopPropagation(); openLightbox(index); }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors touch-target"
                        aria-label={`View ${image.caption} in full size`}
                      >
                        <Expand className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* Navigation Dots - Mobile only */}
          {itemsPerView === 1 && (
            <div className="flex items-center justify-center gap-2 mt-6 lg:hidden" role="tablist" aria-label="Gallery pages">
              {GALLERY_IMAGES.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={() => { setCurrentIndex(i); scrollToIndex(i); }}
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
              aria-label="Previous images"
              className="p-3 touch-target"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </Button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Gallery pages">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Go to gallery page ${i + 1}`}
                  onClick={() => { setCurrentIndex(i); scrollToIndex(i * itemsPerView); }}
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
              aria-label="Next images"
              className="p-3 touch-target"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 safe-top safe-bottom"
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
              aria-label="Image gallery"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors touch-target"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
                <button
                  onClick={handleLightboxPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors touch-target"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                </button>
                <div className="relative aspect-[4/3] max-h-[80vh] rounded-xl overflow-hidden">
                  <img
                    src={GALLERY_IMAGES[lightboxIndex].src}
                    alt={GALLERY_IMAGES[lightboxIndex].alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <button
                  onClick={handleLightboxNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors touch-target"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" aria-hidden="true" />
                </button>
                <div className="mt-4 text-center text-white/80">
                  <p className="font-medium text-body-sm">{GALLERY_IMAGES[lightboxIndex].caption}</p>
                  <p className="text-caption">{GALLERY_IMAGES[lightboxIndex].category}</p>
                  <p className="text-caption mt-1">{lightboxIndex + 1} / {GALLERY_IMAGES.length}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}