import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const NAV_COLUMNS = [
  {
    title: 'Services',
    links: [
      { href: '/services', label: 'Photo Booth' },
      { href: '/services', label: '360 Video Booth' },
      { href: '/services', label: 'Instant Prints' },
      { href: '/designs', label: 'Print Designs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/packages', label: 'Packages' },
      { href: '/gallery', label: 'Gallery' },
      { href: '/contact', label: 'Contact' },
      { href: 'https://gajarephotography.com', label: 'Gajare Photography' },
    ],
  },
];

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width={18} height={18}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width={18} height={18}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width={18} height={18}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const SOCIALS = [
  { href: 'https://instagram.com/gajarephotography', Icon: IconInstagram, label: 'Instagram' },
  { href: 'https://facebook.com/gajarephotography', Icon: IconFacebook, label: 'Facebook' },
  { href: 'https://youtube.com/@gajarephotography', Icon: IconYoutube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="on-dark bg-ink-900 pt-16 pb-8">
      <div className="gp-container">
        {/* Tagline */}
        <p className="font-display text-2xl md:text-3xl text-white/90 text-center mb-12 italic">
          Are You Ready To Capture Your Memories&hellip;
        </p>

        <div className="border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-white.webp"
                alt="Gajare Photography"
                width={120}
                height={32}
                className="h-7 w-auto"
                unoptimized
              />
              <span
                className="pl-3 text-gold-500 text-[11px] font-semibold uppercase tracking-[0.28em]"
                style={{ borderLeft: '1px solid rgba(212,175,55,.45)' }}
              >
                Photo Booth
              </span>
            </div>

            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              Mumbai&apos;s premium instant photo booth and 360&deg; video booth rental service for weddings, engagements, corporate events and celebrations.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 text-sm text-white/70">
              <a href="https://wa.me/919876543210" className="flex items-center gap-2 hover:text-whatsapp transition-colors">
                <MessageCircle size={15} /> WhatsApp Now
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gold-500 transition-colors">
                <Phone size={15} /> +91 98765 43210
              </a>
              <a href="mailto:info@gajarephotography.com" className="flex items-center gap-2 hover:text-gold-500 transition-colors">
                <Mail size={15} /> info@gajarephotography.com
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={15} /> Mumbai, Maharashtra
              </p>
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-[11.5px] font-semibold uppercase tracking-[0.28em] text-gold-500">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                      style={{ transitionDuration: 'var(--dur-fast)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-gold-500 hover:bg-white/10 transition-all"
                style={{ transitionDuration: 'var(--dur-fast)', transitionTimingFunction: 'var(--ease-lux)' }}
              >
                <s.Icon />
              </a>
            ))}
          </div>

          <p className="text-xs text-white/40 text-center">
            <span className="text-gold-500/60 mx-2">&middot;</span>
            &copy; {new Date().getFullYear()} Gajare Photography. All rights reserved.
            <span className="text-gold-500/60 mx-2">&middot;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
