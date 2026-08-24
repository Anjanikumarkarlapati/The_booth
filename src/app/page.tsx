'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Play, Star, MapPin, Printer, Camera, User, Users, Frame,
  BadgeCheck, Sparkles, Zap, ArrowRight, Check, Phone,
  MessageCircle, Calendar, ChevronDown,
} from 'lucide-react';
import { PHOTOS } from '@/lib/photos';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import MagneticButton from '@/components/MagneticButton';
import LocationMap from '@/components/LocationMap';

/* ─── DATA ─── */
const SERVICE_TAGS = [
  'Instant Photo Prints',
  '360\u00B0 Video Booth',
  'Wedding Photo Booth',
  'Corporate Events',
  'Birthday Parties',
];

const FEATURES = [
  { icon: Printer, title: 'Instant Prints in Seconds' },
  { icon: Camera, title: 'Premium DSLR Quality' },
  { icon: User, title: 'Professional Photographer' },
  { icon: Users, title: 'Booth Assistant' },
  { icon: Frame, title: 'Premium Frames' },
  { icon: BadgeCheck, title: 'Custom Branding' },
  { icon: Sparkles, title: 'Unlimited Fun' },
  { icon: Zap, title: 'Fast Setup' },
];

const SERVICES_PREVIEW = [
  {
    image: PHOTOS.guests,
    title: 'Instant Photo Booth',
    body: 'Professional DSLR quality prints in seconds. Your guests walk away with a physical memory.',
  },
  {
    image: PHOTOS.wedding,
    title: 'Wedding Photo Booth',
    body: 'Elegant setups with custom backdrops, props and premium frames for your big day.',
  },
  {
    image: PHOTOS.baby,
    title: 'Birthday Photo Booth',
    body: 'Fun, vibrant setups with themed props and instant prints for unforgettable birthdays.',
  },
];

const PACKAGE_INCLUDES = [
  '100 instant prints (4\u00D76)',
  'Professional photographer',
  'Booth assistant',
  'Premium printer on-site',
  'Premium frames',
  'Live printing 3\u20134 hours',
];

const GALLERY_CATEGORIES = [
  { label: 'Weddings', image: PHOTOS.wedding2 },
  { label: 'Engagements', image: PHOTOS.engagement },
  { label: 'Baby Shower', image: PHOTOS.babyshower },
  { label: '360\u00B0 Booth', image: PHOTOS.guests2 },
];

const STEPS = [
  { icon: Phone, title: 'Enquire', body: 'Tell us your date and guest count on WhatsApp.' },
  { icon: Calendar, title: 'Book', body: 'We hold the date once confirmed.' },
  { icon: Frame, title: 'Customise', body: 'Pick your backdrop, frames and branding.' },
  { icon: Camera, title: 'Event Day', body: 'Our team sets up and runs the booth.' },
  { icon: Printer, title: 'Deliver', body: 'Guests leave with instant prints in hand.' },
];

const FAQS = [
  { q: 'How far in advance should I book?', a: 'We recommend booking 2\u20134 weeks before your event to ensure availability, especially during the wedding season (November\u2013February).' },
  { q: 'How many prints are included?', a: 'The Silver package includes 100 instant 4\u00D76 prints. Additional prints are available at \u20B980 per print.' },
  { q: 'Do you travel outside Mumbai?', a: 'Yes. Travel within Mumbai is included. For locations outside the city, a travel surcharge applies based on distance.' },
  { q: 'Can we customise the print design?', a: 'Absolutely. We offer custom branding with your names, event date, hashtag or logo on every print.' },
  { q: 'What equipment do you bring?', a: 'A professional DSLR camera, studio lighting, instant dye-sublimation printer, backdrop stand, props box and all cables and power strips.' },
];

const STATS = [
  { value: 500, suffix: '+', label: 'Events Covered' },
  { value: 50000, suffix: '+', label: 'Prints Delivered' },
  { value: 5, suffix: '.0', label: 'Google Rating' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

export default function HomePage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-[700px] lg:min-h-[85vh] flex items-center bg-ink-900 overflow-hidden">
        <Image
          src={PHOTOS.hero}
          alt="Photo booth at a premium wedding event"
          fill
          className="object-cover opacity-40 animate-ken-burns"
          priority
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10,10,10,.94) 0%, rgba(10,10,10,.7) 50%, rgba(10,10,10,.4) 100%)',
          }}
        />
        {/* Decorative gold line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px gold-line-animated" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 py-20 md:py-28 w-full">
          <Reveal delay={0}>
            <p className="gp-eyebrow flex items-center gap-2.5 mb-6">
              <span className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                <Play className="w-3 h-3 text-gold-500" />
              </span>
              Cinematic booth experiences
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="font-display text-white text-5xl md:text-6xl lg:text-[84px] font-bold max-w-4xl leading-[1.04] tracking-[-0.01em]">
              Mumbai&apos;s Premium{' '}
              <span className="text-gold-gradient">Instant Photo Booth</span>{' '}
              Service
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-white/60 text-base md:text-lg max-w-xl mt-6 leading-relaxed">
              Instant prints, premium frames, and professional booth experiences for weddings, corporate events and celebrations across Mumbai.
            </p>
          </Reveal>

          {/* Service pills */}
          <Reveal delay={400}>
            <div className="flex flex-wrap gap-2.5 mt-8">
              {SERVICE_TAGS.map((tag, i) => (
                <span
                  key={tag}
                  className="glass-card text-white/80 text-xs px-4 py-2 rounded-full transition-all duration-[280ms] hover:border-gold-500/40 hover:text-white"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          {/* CTA buttons */}
          <Reveal delay={550}>
            <div className="flex flex-wrap gap-4 mt-10">
              <MagneticButton href="/contact" strength={0.15}>
                <span className="bg-gold-500 text-ink-800 font-semibold text-[13px] tracking-[0.14em] uppercase px-7 py-3.5 rounded-sm inline-flex items-center gap-2 btn-glow">
                  <Calendar className="w-4 h-4" /> Book Now
                </span>
              </MagneticButton>
              <MagneticButton
                href="https://wa.me/919876543210?text=Hi%20Gajare%2C%20I%20want%20to%20book%20a%20photo%20booth"
                target="_blank"
                rel="noopener noreferrer"
                strength={0.15}
              >
                <span className="bg-[#25D366] text-white font-semibold text-[13px] tracking-[0.14em] uppercase px-7 py-3.5 rounded-sm inline-flex items-center gap-2 btn-glow">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Now
                </span>
              </MagneticButton>
              <MagneticButton href="tel:+919876543210" strength={0.15}>
                <span className="border border-gold-500/45 text-gold-400 font-semibold text-[13px] tracking-[0.14em] uppercase px-7 py-3.5 rounded-sm inline-flex items-center gap-2 hover:bg-gold-500/5 transition-colors">
                  <Phone className="w-4 h-4" /> Call Now
                </span>
              </MagneticButton>
            </div>
          </Reveal>

          {/* Trust indicators */}
          <Reveal delay={700}>
            <div className="flex flex-wrap gap-6 mt-12 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <span className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </span>
                5.0 on Google
              </span>
              <span className="w-px h-4 bg-white/20" />
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-500" /> Travel included within Mumbai
              </span>
              <span className="w-px h-4 bg-white/20" />
              <span className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-gold-500" /> Prints in seconds
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ STATS BAR ════════ */}
      <section className="bg-ink-800 py-10 border-t border-b border-gold-500/10">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ value, suffix, label }, i) => (
              <Reveal key={label} delay={i * 100} direction="scale">
                <div className="text-center">
                  <p className="font-display text-3xl md:text-4xl text-white font-bold">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </p>
                  <p className="text-white/50 text-sm mt-1">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE US ════════ */}
      <section className="bg-paper py-20 md:py-28 section-transition">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Gajare Photography"
              title="Everything the booth needs, handled by our team"
              lede="One team brings the booth, the printer, the frames and the people who run it. You enjoy the party."
            />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {FEATURES.map(({ icon: Icon, title }, i) => (
              <Reveal key={title} delay={i * 80} direction="scale">
                <div className="group flex flex-col items-center text-center p-6 rounded-lg bg-white border border-transparent hover:border-gold-500/30 hover:shadow-lg transition-all duration-[280ms]">
                  <div className="w-14 h-14 rounded-full border-2 border-gold-500/40 group-hover:border-gold-500 group-hover:bg-gold-500/5 flex items-center justify-center mb-4 transition-all duration-[280ms]">
                    <Icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="font-display text-sm md:text-base font-medium text-[var(--text-heading)]">{title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SERVICES ════════ */}
      <section className="on-dark bg-ink-800 py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Premium photo booth experiences for every event"
              lede="From intimate birthdays to grand weddings, our booths transform your celebration."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES_PREVIEW.map(({ image, title, body }, i) => (
              <Reveal key={title} delay={i * 150}>
                <Link href="/services" className="group block card-hover bg-[var(--bg-surface)] rounded-lg overflow-hidden border border-white/[.1]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover card-image"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-medium text-white mb-2">{title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{body}</p>
                    <span className="inline-flex items-center gap-1.5 text-gold-500 text-sm font-medium group-hover:gap-3 transition-all duration-[280ms]">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={500}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="bg-gold-500 text-ink-800 font-semibold text-[13px] tracking-[0.14em] uppercase px-8 py-3.5 rounded-sm btn-glow inline-flex items-center gap-2"
              >
                All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ FEATURED PACKAGE ════════ */}
      <section className="bg-paper py-20 md:py-28 section-transition">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal direction="left">
              <div>
                <p className="gp-eyebrow mb-4">Featured Package</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-[-0.01em] mb-5">
                  Premium Instant Photo Booth at{' '}
                  <span className="text-gold-gradient">\u20B99,999</span>
                </h2>
                <p className="text-stone-600 leading-relaxed mb-8 text-base">
                  Our most-booked package delivers everything you need. A professional team arrives,
                  sets up, runs the booth, and packs away. You enjoy the celebration with your guests.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/packages"
                    className="bg-gold-500 text-ink-800 font-semibold text-[13px] tracking-[0.14em] uppercase px-7 py-3.5 rounded-sm btn-glow inline-block"
                  >
                    View All Packages
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-gold-500/45 text-gold-500 font-semibold text-[13px] tracking-[0.14em] uppercase px-7 py-3.5 rounded-sm hover:-translate-y-0.5 transition-all duration-[280ms] inline-block"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <div className="relative border-2 border-gold-500 rounded-lg p-7 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-gold-400/20 via-transparent to-gold-600/20 rounded-lg blur-sm -z-10" />
                <span className="absolute -top-3.5 left-6 bg-gold-500 text-ink-800 text-[11px] tracking-[0.14em] uppercase font-bold px-4 py-1.5 rounded-sm shadow-sm">
                  Most Booked
                </span>
                <p className="gp-eyebrow mt-3">Silver</p>
                <p className="font-display text-4xl lg:text-5xl font-bold mt-2 text-[var(--text-heading)]">\u20B99,999</p>
                <p className="text-stone-500 text-sm mt-1 mb-6">Per event &middot; Inclusive of taxes</p>
                <div className="gold-line mb-6" />
                <ul className="space-y-3.5">
                  {PACKAGE_INCLUDES.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-600">
                      <span className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gold-500" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 block text-center bg-gold-500 text-ink-800 font-semibold text-[13px] tracking-[0.14em] uppercase px-6 py-3.5 rounded-sm btn-glow"
                >
                  Book This Package
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════ GALLERY TEASER ════════ */}
      <section className="bg-mist py-20 md:py-28 section-transition">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="Gallery" title="Moments we have captured" lede="Real events, real prints, real celebrations across Mumbai." />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_CATEGORIES.map(({ label, image }, i) => (
              <Reveal key={label} delay={i * 120}>
                <Link
                  href="/gallery"
                  className="group relative aspect-[4/5] rounded-lg overflow-hidden card-hover block"
                >
                  <Image
                    src={image}
                    alt={label}
                    fill
                    className="object-cover card-image"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="font-display text-white text-lg font-medium block mb-1">
                      {label}
                    </span>
                    <span className="text-white/60 text-xs flex items-center gap-1 group-hover:text-gold-400 transition-colors">
                      View gallery <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={500}>
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="bg-gold-500 text-ink-800 font-semibold text-[13px] tracking-[0.14em] uppercase px-8 py-3.5 rounded-sm btn-glow inline-flex items-center gap-2"
              >
                View Full Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ HOW IT WORKS ════════ */}
      <section className="on-dark bg-ink-800 py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="How It Works" title="Five simple steps to your booth" lede="From first message to prints in hand, we handle everything." />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-5 mt-4">
            {STEPS.map(({ icon: Icon, title, body }, idx) => (
              <Reveal key={title} delay={idx * 120}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Connecting line */}
                  {idx < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-gradient-to-r from-gold-500/50 to-gold-500/10" />
                  )}
                  <div className="w-14 h-14 rounded-full bg-gold-500 text-ink-800 flex items-center justify-center font-bold text-base mb-4 shadow-md animate-pulse-gold" style={{ animationDelay: `${idx * 0.5}s` }}>
                    {idx + 1}
                  </div>
                  <Icon className="w-5 h-5 text-gold-400 mb-2" />
                  <h3 className="font-display text-white text-sm font-medium mb-1.5">{title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed max-w-[140px]">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="bg-paper py-20 md:py-28 section-transition">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
            <Reveal direction="left">
              <div>
                <SectionHeading
                  eyebrow="FAQ"
                  title="Common questions"
                  align="left"
                  lede="Everything else, we answer on WhatsApp within a couple of hours."
                />
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold-500 text-sm font-medium mt-4 link-underline"
                >
                  <MessageCircle className="w-4 h-4" /> Ask us on WhatsApp
                </Link>
              </div>
            </Reveal>
            <Reveal direction="right" delay={200}>
              <div className="space-y-3">
                {FAQS.map(({ q, a }) => (
                  <details key={q} className="group border border-black/[.08] rounded-lg bg-white overflow-hidden transition-all hover:border-gold-500/20">
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-4.5 font-display text-sm md:text-[15px] font-medium text-[var(--text-heading)]">
                      {q}
                      <ChevronDown className="w-4 h-4 text-stone-400 group-open:rotate-180 transition-transform duration-300 shrink-0 ml-4" />
                    </summary>
                    <div className="px-6 pb-5 pt-0">
                      <div className="gold-line mb-4 opacity-30" />
                      <p className="text-sm text-stone-600 leading-relaxed">{a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════ LOCATION ════════ */}
      <section className="on-dark bg-ink-800 py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Find Us"
              title="Visit our studio in Mumbai"
              lede="Malad West, Mumbai. Walk-ins welcome for booth demos and design consultations."
            />
          </Reveal>
          <Reveal delay={200}>
            <LocationMap />
          </Reveal>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="relative on-dark bg-ink-900 py-24 md:py-32 overflow-hidden">
        <Image
          src={PHOTOS.wedding3}
          alt="Event celebration"
          fill
          className="object-cover opacity-25 animate-ken-burns"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-ink-900/60" />
        <div className="absolute top-0 left-0 right-0 h-px gold-line-animated" />

        <div className="relative z-10 max-w-[760px] mx-auto px-6 text-center">
          <Reveal direction="scale">
            <p className="gp-eyebrow mb-5">Ready to book?</p>
            <h2 className="font-display text-white text-3xl md:text-5xl lg:text-[56px] font-bold leading-[1.08]">
              Are you ready to capture your memories?
            </h2>
            <p className="text-white/60 mt-5 text-base md:text-lg max-w-md mx-auto leading-relaxed">
              Tell us your date and guest count. We will send you a quote within the hour.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <MagneticButton
                href="https://wa.me/919876543210?text=Hi%20Gajare%2C%20I%20want%20to%20book%20a%20photo%20booth"
                target="_blank"
                rel="noopener noreferrer"
                strength={0.2}
              >
                <span className="bg-[#25D366] text-white font-semibold text-[13px] tracking-[0.14em] uppercase px-8 py-4 rounded-sm inline-flex items-center gap-2.5 btn-glow shadow-lg">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Now
                </span>
              </MagneticButton>
              <MagneticButton href="tel:+919876543210" strength={0.2}>
                <span className="border border-gold-500/45 text-gold-400 font-semibold text-[13px] tracking-[0.14em] uppercase px-8 py-4 rounded-sm inline-flex items-center gap-2.5 hover:bg-gold-500/5 transition-colors">
                  <Phone className="w-4 h-4" /> Call Now
                </span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
