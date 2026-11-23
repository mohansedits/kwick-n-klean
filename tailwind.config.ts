import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium automotive palette from brand identity
        primary: {
          DEFAULT: '#1E3A8A', // Royal blue
          light: '#3B82F6',
          dark: '#1E40AF',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#0F172A', // Deep navy/black
          light: '#1E293B',
          dark: '#020617',
        },
        accent: {
          DEFAULT: '#DC2626', // Red accent
          light: '#EF4444',
          dark: '#B91C1C',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8FAFC',
          dark: '#0F172A',
        },
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          muted: '#94A3B8',
          inverse: '#FFFFFF',
        },
        border: {
          DEFAULT: '#E2E8F0',
          dark: '#1E293B',
        },
        metallic: {
          DEFAULT: '#CBD5E1', // Metallic silver
          light: '#E2E8F0',
          dark: '#94A3B8',
        },
        success: {
          DEFAULT: '#059669',
          light: '#10B981',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '0' }],
        'heading-xl': ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.25' }],
        'heading-lg': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3' }],
        'heading-md': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.35' }],
        'heading-sm': ['clamp(1.125rem, 2vw, 1.25rem)', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'premium': '0 20px 50px -12px rgba(15, 23, 42, 0.15), 0 8px 16px -8px rgba(15, 23, 42, 0.1)',
        'premium-lg': '0 32px 64px -12px rgba(15, 23, 42, 0.2), 0 12px 24px -12px rgba(15, 23, 42, 0.15)',
        'inner-premium': 'inset 0 2px 4px 0 rgba(15, 23, 42, 0.06)',
        'glow-blue': '0 0 40px -8px rgba(30, 58, 138, 0.4)',
        'glow-red': '0 0 40px -8px rgba(220, 38, 38, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)',
        'gradient-accent': 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
        'gradient-surface': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0F172A 0%, #020617 100%)',
        'gradient-mesh': 'radial-gradient(ellipse at 50% 50%, rgba(30, 58, 138, 0.15) 0%, transparent 70%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
    },
  },
  plugins: [],
};

export default config;