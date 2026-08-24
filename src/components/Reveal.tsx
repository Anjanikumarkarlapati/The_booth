'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion — render immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '-10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  // UX Pro recommended: subtle 12px offset, 350ms duration, power1.out easing
  const transforms: Record<string, string> = {
    up: 'translateY(12px)',
    down: 'translateY(-12px)',
    left: 'translateX(16px)',
    right: 'translateX(-16px)',
    scale: 'scale(0.97)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : transforms[direction],
        transition: `opacity 350ms cubic-bezier(.25,.46,.45,.94) ${delay}ms, transform 350ms cubic-bezier(.25,.46,.45,.94) ${delay}ms`,
        willChange: visible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
