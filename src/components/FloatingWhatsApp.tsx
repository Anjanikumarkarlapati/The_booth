'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after user scrolls past hero
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20photo%20booth%20for%20my%20event."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center justify-center transition-all"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.9)',
        transitionDuration: '400ms',
        transitionTimingFunction: 'cubic-bezier(.22,.61,.36,1)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Tooltip */}
      <span className="tooltip-label font-medium">
        Chat with us
      </span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-pulse-gold" />
      <span
        className="absolute inset-[-4px] rounded-full border-2 border-[#25D366] opacity-60"
        style={{ animation: 'whatsapp-ring 2.5s ease-in-out infinite' }}
      />

      {/* Button */}
      <span
        className="relative w-[58px] h-[58px] rounded-full flex items-center justify-center text-white transition-all group-hover:-translate-y-0.5"
        style={{
          backgroundColor: '#25D366',
          boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
          transitionDuration: 'var(--dur-base)',
          transitionTimingFunction: 'var(--ease-lux)',
        }}
      >
        <MessageCircle size={26} />
      </span>
    </a>
  );
}
