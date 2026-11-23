import { useState, useEffect, useCallback } from 'react';

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const open = useCallback(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
    setIsTransitioning(true);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
    setIsTransitioning(true);
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, close]);

  return {
    isOpen,
    isTransitioning,
    open,
    close,
    toggle,
  };
}