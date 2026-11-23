'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'outline-accent';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-xl min-h-[48px] min-w-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
      primary: 'bg-primary text-white hover:bg-primary-dark active:bg-primary-dark focus-visible:ring-primary shadow-[0_4px_14px_rgba(30,58,138,0.3)] hover:shadow-[0_6px_20px_rgba(30,58,138,0.4)] active:scale-[0.98]',
      secondary: 'bg-surface text-text-primary border border-border hover:bg-surface-muted hover:border-metallic focus-visible:ring-primary active:scale-[0.98]',
      accent: 'bg-accent text-white hover:bg-accent-light active:bg-accent-dark focus-visible:ring-accent shadow-[0_4px_14px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] active:scale-[0.98]',
      ghost: 'bg-transparent text-text-primary hover:bg-surface-muted focus-visible:ring-primary active:scale-[0.98]',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary active:scale-[0.98]',
      'outline-accent': 'border-2 border-accent text-accent hover:bg-accent hover:text-white focus-visible:ring-accent active:scale-[0.98]',
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-body-sm',
      md: 'px-6 py-3 text-body-lg',
      lg: 'px-8 py-4 text-heading-sm',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';