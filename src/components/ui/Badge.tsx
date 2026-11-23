'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const variantStyles = {
      default: 'bg-surface-muted text-text-secondary border border-border',
      primary: 'bg-primary/10 text-primary border border-primary/20',
      accent: 'bg-accent/10 text-accent border border-accent/20',
      success: 'bg-success/10 text-success border border-success/20',
      warning: 'bg-amber/10 text-amber-700 border border-amber/20',
      outline: 'bg-transparent text-text-secondary border border-border',
    };

    const sizeStyles = {
      sm: 'px-2 py-0.5 text-caption',
      md: 'px-2.5 py-1 text-body-sm',
      lg: 'px-3 py-1.5 text-body',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium rounded-full',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';