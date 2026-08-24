import Image from 'next/image';
import Link from 'next/link';
import { Check, Info } from 'lucide-react';
import { PHOTOS } from '@/lib/photos';

const PACKAGES = [
  {
    tier: 'Silver',
    price: '₹9,999',
    priceNote: 'Per event · Inclusive of taxes',
    badge: 'Most Booked',
    featured: true,
    includes: [
      '100 instant prints (4×6)',
      'Professional photographer',
      'Booth assistant',
      'Premium printer on-site',
      'Premium frames',
      'Live printing 3–4 hours',
      'Props box',
      'Backdrop setup',
    ],
  },
  {
    tier: 'Gold',
    price: 'On request',
    priceNote: 'Custom quote based on event',
    badge: '200 prints',
    featured: false,
    includes: [
      '200 instant prints (4×6)',
      'Professional photographer',
      'Booth assistant',
      'Premium printer on-site',
      'Premium frames',
      'Live printing 4–5 hours',
      'Custom backdrop',
      'Custom branding on prints',
      'Digital copies of all photos',
      'Guest book',
    ],
  },
  {
    tier: 'Platinum',
    price: 'Custom',
    priceNote: 'Tailored for large events',
    badge: 'Unlimited prints',
    featured: false,
    includes: [
      'Unlimited instant prints',
      'Professional photographer',
      '2 booth assistants',
      '2 premium printers',
      'Premium frames',
      'Full-day coverage (up to 8 hours)',
      'Custom backdrop & branding',
      '360° video booth included',
      'Flower wall',
      'Digital gallery',
      'Priority scheduling',
    ],
  },
];

const EXTRAS = [
  '₹80 per extra print beyond package limit',
  'Custom branding (names, date, logo) \u2014 included from Gold',
  'Additional hours at ₹2,000/hour',
  'Travel outside Mumbai \u2014 charged per distance',
];

export default function PackagesPage() {
  return (
    <>
      {/* â•â•â•â•â•â•â•â• HERO â•â•â•â•â•â•â•â• */}
      <section className="relative on-dark bg-ink-800 py-20 md:py-28 overflow-hidden">
        <Image
          src={PHOTOS.frames}
          alt="Premium photo frames"
          fill
          className="object-cover opacity-25"
          unoptimized
        />
        <div className="absolute inset-0 bg-ink-900/50" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center">
          <p className="gp-eyebrow mb-4">Packages</p>
          <h1 className="font-display text-white text-4xl md:text-6xl font-medium leading-[1.04] tracking-[-0.01em]">
            Clear pricing, no surprises
          </h1>
          <p className="text-white/70 mt-4 max-w-lg mx-auto">
            Pick a package that fits your event. Everything is included \u2014 equipment,
            team, prints and setup.
          </p>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â• PACKAGES GRID â•â•â•â•â•â•â•â• */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PACKAGES.map(({ tier, price, priceNote, badge, featured, includes }) => (
              <div
                key={tier}
                className={`relative rounded-xl p-8 bg-white flex flex-col transition-all duration-500 will-change-transform ${featured ? 'border-2 border-gold-500 shadow-[0_8px_40px_-12px_rgba(212,175,55,0.4)] scale-105 z-10' : 'border border-black/[.08] shadow-[0_4px_24px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] hover:border-gold-500/30'}`}
              >
                {badge && (
                  <span
                    className={`absolute -top-3 left-6 text-[11px] tracking-[0.14em] uppercase font-semibold px-3 py-1 rounded-sm ${
                      featured
                        ? 'bg-gold-500 text-ink-800'
                        : 'bg-ink-800 text-white'
                    }`}
                  >
                    {badge}
                  </span>
                )}
                <p className="gp-eyebrow mt-2">{tier}</p>
                <p className="font-display text-5xl font-semibold mt-3 text-ink-900 tracking-tight">{price}</p>
                <p className="text-stone-500 text-sm mt-1 mb-5">{priceNote}</p>
                <ul className="space-y-3 flex-1">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 block text-center font-semibold text-[13px] tracking-[0.14em] uppercase px-6 py-3 rounded-sm hover:-translate-y-0.5 transition-all duration-[280ms] ${
                    featured
                      ? 'bg-gold-500 text-ink-800 hover:bg-gold-400'
                      : 'border border-gold-500/45 text-gold-500'
                  }`}
                >
                  {price === 'Custom' ? 'Request a Quote' : 'Book Now'}
                </Link>
              </div>
            ))}
          </div>

          {/* â•â•â•â•â•â•â•â• EXTRAS INFO â•â•â•â•â•â•â•â• */}
          <div className="mt-12 border border-gold-500/30 bg-gold-100/50 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-5 h-5 text-gold-600 mt-0.5 shrink-0" />
              <h3 className="font-display text-lg font-medium">Additional pricing</h3>
            </div>
            <ul className="space-y-2 ml-8">
              {EXTRAS.map((item) => (
                <li key={item} className="text-sm text-stone-600 list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
