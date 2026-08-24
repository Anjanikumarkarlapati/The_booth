'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20photo%20booth%20for%20my%20event."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-[58px] h-[58px] rounded-full flex items-center justify-center text-white transition-all hover:-translate-y-0.5"
      style={{
        backgroundColor: '#25D366',
        transitionDuration: 'var(--dur-base)',
        transitionTimingFunction: 'var(--ease-lux)',
        boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(37, 211, 102, 0.45)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.3)';
      }}
    >
      <MessageCircle size={26} />
    </a>
  );
}
