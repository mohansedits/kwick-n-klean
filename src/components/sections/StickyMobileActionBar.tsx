'use client';

import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { generateTelUrl, generateWhatsAppUrl } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface StickyMobileActionBarProps {
  hiddenIds?: string[];
}

export function StickyMobileActionBar({ hiddenIds = [] }: StickyMobileActionBarProps) {
  const isCallHidden = hiddenIds.includes('call');
  const isWhatsAppHidden = hiddenIds.includes('whatsapp');
  const isDirectionsHidden = hiddenIds.includes('directions');

  const visibleCount = [isCallHidden, isWhatsAppHidden, isDirectionsHidden].filter(Boolean).length;
  const showCount = 3 - visibleCount;

  if (showCount === 0) return null;

  return (
    <div 
      className={cn(
        'sticky-action-bar safe-bottom lg:hidden',
        showCount === 3 ? 'grid grid-cols-3' : 'flex'
      )}
      role="navigation"
      aria-label="Quick actions"
    >
      {!isCallHidden && (
        <a
          href={generateTelUrl(BUSINESS_INFO.phone)}
          className={cn(
            'flex flex-col items-center justify-center gap-1 px-3 py-3 text-text-primary transition-colors',
            'active:bg-primary/10 active:text-primary',
            showCount === 3 ? 'border-r border-border' : 'border-r border-border flex-1'
          )}
          aria-label="Call now"
        >
          <Phone className="w-6 h-6" aria-hidden="true" />
          <span className="text-caption font-medium">Call</span>
        </a>
      )}
      {!isWhatsAppHidden && (
        <a
          href={generateWhatsAppUrl(BUSINESS_INFO.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex flex-col items-center justify-center gap-1 px-3 py-3 text-accent transition-colors',
            'active:bg-accent/10',
            showCount === 3 ? 'border-r border-border' : 'border-r border-border flex-1'
          )}
          aria-label="WhatsApp enquiry"
        >
          <MessageCircle className="w-6 h-6" aria-hidden="true" />
          <span className="text-caption font-medium">WhatsApp</span>
        </a>
      )}
      {!isDirectionsHidden && (
        <a
          href={BUSINESS_INFO.location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex flex-col items-center justify-center gap-1 px-3 py-3 text-text-primary transition-colors',
            'active:bg-primary/10 active:text-primary',
            'flex-1'
          )}
          aria-label="Get directions"
        >
          <MapPin className="w-6 h-6" aria-hidden="true" />
          <span className="text-caption font-medium">Directions</span>
        </a>
      )}
    </div>
  );
}