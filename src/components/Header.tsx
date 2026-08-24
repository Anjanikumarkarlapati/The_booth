'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/designs', label: 'Designs' },
  { href: '/packages', label: 'Packages' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        height: scrolled ? '72px' : '82px',
        backgroundColor: scrolled ? 'rgba(17,17,17,.95)' : 'rgba(17,17,17,.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,.12)' : '1px solid rgba(255,255,255,.08)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,.3)' : 'none',
      }}
    >
      <div className="gp-container w-full h-full flex items-center justify-between">
        {/* Logo + label */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-white.webp"
            alt="Gajare Photography"
            width={120}
            height={32}
            className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span
            className="hidden sm:block pl-3 text-gold-500 font-body text-[11px] font-semibold uppercase tracking-[0.28em]"
            style={{ borderLeft: '1px solid rgba(212,175,55,.35)' }}
          >
            Photo Booth
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[12.5px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 py-1 ${
                isActive(link.href)
                  ? 'text-gold-500'
                  : 'text-white/[.72] hover:text-white'
              }`}
            >
              {link.label}
              {/* Active indicator dot */}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-500" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 text-ink-800 text-[12px] font-semibold uppercase tracking-[0.12em] rounded-[2px] btn-glow"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Now
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2.5 rounded-sm border border-white/10 text-white hover:border-gold-500/30 hover:text-gold-500 transition-all duration-200"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-[${scrolled ? '72px' : '82px'}] bg-ink-900/98 backdrop-blur-md lg:hidden flex flex-col transition-all duration-300`}
        style={{
          top: scrolled ? '72px' : '82px',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        <nav className="flex flex-col gap-0 p-6 pt-4">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-4 text-[14px] font-medium uppercase tracking-[0.12em] border-b border-white/[.06] transition-all duration-200 flex items-center justify-between ${
                isActive(link.href) ? 'text-gold-500' : 'text-white/[.72]'
              }`}
              style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="w-2 h-2 rounded-full bg-gold-500" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gold-500 text-ink-800 text-[13px] font-semibold uppercase tracking-[0.14em] rounded-[2px] btn-glow"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
