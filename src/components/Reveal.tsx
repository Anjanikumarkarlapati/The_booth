'use client';

import { useEffect, useRef, useState, type ReactNode, Children, isValidElement } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
  once?: boolean;
  /** Enable stagger mode: each direct child animates sequentially */
  stagger?: number;
  /** Use spring physics for more organic motion */
  spring?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
  stagger,
  spring = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
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
      { threshold: 0.08, rootMargin: '-5% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const easing = spring
    ? 'cubic-bezier(.34, 1.56, .64, 1)'
    : 'cubic-bezier(.22, .61, .36, 1)';

  const duration = spring ? 600 : 420;

  const transforms: Record<string, string> = {
    up: 'translateY(20px)',
    down: 'translateY(-20px)',
    left: 'translateX(24px)',
    right: 'translateX(-24px)',
    scale: 'scale(0.96)',
  };

  // Stagger mode: animate each child with increasing delay
  if (stagger && visible) {
    const childArray = Children.toArray(children);
    return (
      <div ref={ref} className={className}>
        {childArray.map((child, i) => {
          if (!isValidElement(child)) return child;
          return (
            <div
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : transforms[direction],
                transition: `opacity ${duration}ms ${easing} ${delay + i * stagger}ms, transform ${duration}ms ${easing} ${delay + i * stagger}ms`,
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : transforms[direction],
        transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
        willChange: visible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
