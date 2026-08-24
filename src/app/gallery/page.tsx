'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { PHOTOS } from '@/lib/photos';

const GALLERY_DATA: [string, string][] = [
  ['Weddings', PHOTOS.wedding],
  ['Weddings', PHOTOS.wedding2],
  ['Weddings', PHOTOS.wedding3],
  ['Engagements', PHOTOS.engagement],
  ['Engagements', PHOTOS.engagement2],
  ['Engagements', PHOTOS.engagement3],
  ['Baby Shower', PHOTOS.babyshower],
  ['Baby Shower', PHOTOS.baby],
  ['Baby Shower', PHOTOS.baby2],
  ['Corporate Events', PHOTOS.corporate],
  ['Corporate Events', PHOTOS.guests],
  ['360\u00B0 Booth', PHOTOS.guests2],
  ['Pre-wedding', PHOTOS.prewedding],
  ['Pre-wedding', PHOTOS.prewedding2],
  ['Pre-wedding', PHOTOS.prewedding3],
  ['Pre-wedding', PHOTOS.prewedding4],
  ['Maternity', PHOTOS.maternity],
];

const CATEGORIES = ['All', 'Weddings', 'Engagements', 'Baby Shower', 'Corporate Events', '360\u00B0 Booth', 'Pre-wedding', 'Maternity'];

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'All' ? GALLERY_DATA : GALLERY_DATA.filter(([cat]) => cat === active);

  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative on-dark bg-ink-800 py-20 md:py-28 overflow-hidden">
        <Image
          src={PHOTOS.engagement2}
          alt="Gallery"
          fill
          className="object-cover opacity-25"
          unoptimized
        />
        <div className="absolute inset-0 bg-ink-900/50" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center">
          <p className="gp-eyebrow mb-4">Gallery</p>
          <h1 className="font-display text-white text-4xl md:text-6xl font-medium leading-[1.04] tracking-[-0.01em]">
            Moments we have captured
          </h1>
          <p className="text-white/70 mt-4 max-w-lg mx-auto">
            Browse our work across weddings, engagements, corporate events and more.
          </p>
        </div>
      </section>

      {/* ════════ FILTER + GRID ════════ */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Filter row */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-sm text-[13px] tracking-[0.08em] uppercase font-medium transition-colors ${
                  active === cat
                    ? 'bg-gold-500 text-ink-800'
                    : 'border border-black/[.12] text-stone-600 hover:border-gold-500/45 hover:text-gold-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map(([category, url], idx) => (
              <button
                key={`${category}-${idx}`}
                onClick={() => setLightbox(url)}
                className="group relative aspect-[4/5] rounded overflow-hidden cursor-pointer"
              >
                <Image
                  src={url}
                  alt={`${category} photo`}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[520ms]"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ LIGHTBOX ════════ */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-ink-900/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            aria-label="Close lightbox"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="relative max-w-4xl w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Gallery photo full view"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded"
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  );
}
