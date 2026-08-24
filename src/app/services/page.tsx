import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  Printer,
  BookOpen,
  Frame,
  Palette,
  Flower2,
  Lightbulb,
  RotateCw,
  Stamp,
} from 'lucide-react';
import { PHOTOS } from '@/lib/photos';
import SectionHeading from '@/components/SectionHeading';

const SERVICES = [
  {
    image: PHOTOS.guests,
    title: 'Instant Photo Booth',
    description:
      'Professional DSLR quality prints in seconds. Perfect for any event where guests want a tangible memory to take home.',
    includes: ['Instant 4\u00D76 prints', 'DSLR camera', 'Studio lighting', 'Props box', 'Booth assistant'],
  },
  {
    image: PHOTOS.wedding,
    title: 'Wedding Photo Booth',
    description:
      'Elegant setups designed for your wedding theme. Custom backdrops, premium frames and branding that match your celebration.',
    includes: ['Custom backdrop', 'Premium frames', 'Branding with names & date', 'Guest book prints', 'Professional photographer'],
  },
  {
    image: PHOTOS.baby,
    title: 'Birthday Photo Booth',
    description:
      'Fun, vibrant booth setups with themed props and colourful backdrops that bring birthday energy to life.',
    includes: ['Themed props', 'Colourful backdrops', 'Instant prints', 'Booth assistant', 'Custom branding'],
  },
  {
    image: PHOTOS.corporate,
    title: 'Corporate Photo Booth',
    description:
      'Professional booth with corporate branding. Ideal for product launches, conferences and team celebrations.',
    includes: ['Corporate branding', 'Logo on prints', 'On-site technician', 'Digital copies', 'Backdrop with branding'],
  },
  {
    image: PHOTOS.guests2,
    title: '360\u00B0 Video Booth',
    description:
      'Cinematic 360-degree slow-motion video on a rotating platform. Guests receive a shareable video clip instantly.',
    includes: ['360\u00B0 rotating platform', 'Slow-motion video', 'Instant digital sharing', 'LED ring light', 'Technician'],
  },
  {
    image: PHOTOS.engagement,
    title: 'Selfie Booth',
    description:
      'A compact, self-operated booth with ring light and instant print capability. Great for intimate gatherings.',
    includes: ['Ring light', 'Self-operated camera', 'Instant prints', 'Custom overlays', 'Compact setup'],
  },
];

const ADDONS = [
  { icon: Printer, label: 'Extra prints' },
  { icon: BookOpen, label: 'Guest book' },
  { icon: Frame, label: 'Custom frames' },
  { icon: Palette, label: 'Custom backdrops' },
  { icon: Flower2, label: 'Flower wall' },
  { icon: Lightbulb, label: 'LED booth' },
  { icon: RotateCw, label: '360\u00B0 platform' },
  { icon: Stamp, label: 'Event branding' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative on-dark bg-ink-800 py-20 md:py-28 overflow-hidden">
        <Image
          src={PHOTOS.guests2}
          alt="Photo booth at a corporate event"
          fill
          className="object-cover opacity-30"
          unoptimized
        />
        <div className="absolute inset-0 bg-ink-900/50" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center">
          <p className="gp-eyebrow mb-4">Services</p>
          <h1 className="font-display text-white text-4xl md:text-6xl font-medium leading-[1.04] tracking-[-0.01em]">
            Six booth formats, one team
          </h1>
          <p className="text-white/70 mt-4 max-w-lg mx-auto">
            From instant prints to cinematic 360-degree video, we bring the right format
            for your event.
          </p>
        </div>
      </section>

      {/* ════════ SERVICE CARDS ════════ */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ image, title, description, includes }) => (
              <div
                key={title}
                className="bg-white border border-black/[.12] rounded shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gold-500/45 transition-all duration-[280ms] overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-medium mb-2">{title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">{description}</p>
                  <ul className="space-y-2 mb-5 mt-auto">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                        <Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-auto block text-center bg-gold-500 text-ink-800 font-semibold text-[13px] tracking-[0.14em] uppercase px-6 py-3 rounded-sm hover:bg-gold-400 hover:-translate-y-0.5 transition-all duration-[280ms]"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ ADD-ONS ════════ */}
      <section className="on-dark bg-ink-800 py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <SectionHeading eyebrow="Add-ons" title="Make your booth even better" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ADDONS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 border border-white/[.14] rounded-full px-5 py-3"
              >
                <Icon className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-white text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
