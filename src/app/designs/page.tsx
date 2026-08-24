import Image from 'next/image';
import Link from 'next/link';
import { PHOTOS } from '@/lib/photos';
import SectionHeading from '@/components/SectionHeading';

const LAYOUTS = [
  {
    name: 'Classic 2\u00D76 Strip',
    format: '2 \u00D7 6 inch',
    description: 'Two vertical photos in a classic photo-strip format. Perfect for weddings.',
    grid: 'grid-rows-2',
    cells: 2,
  },
  {
    name: 'Elegant 4\u00D76',
    format: '4 \u00D7 6 inch',
    description: 'Single full-frame portrait. Clean and timeless.',
    grid: '',
    cells: 1,
  },
  {
    name: 'Modern Grid',
    format: '4 \u00D7 6 inch',
    description: 'Four equal frames in a 2\u00D72 grid layout. Fun and dynamic.',
    grid: 'grid-cols-2 grid-rows-2',
    cells: 4,
  },
  {
    name: 'Polaroid Style',
    format: '4 \u00D7 6 inch',
    description: 'Single photo with a wide white border and handwritten-style text area below.',
    grid: '',
    cells: 1,
  },
  {
    name: 'Photo Strip Duo',
    format: '2 \u00D7 6 inch',
    description: 'Three stacked frames. Guests get two copies \u2014 one to keep, one for the guest book.',
    grid: 'grid-rows-3',
    cells: 3,
  },
  {
    name: 'Six Frame Mosaic',
    format: '4 \u00D7 6 inch',
    description: 'Six small frames in a 3\u00D72 mosaic. Maximum variety in one print.',
    grid: 'grid-cols-3 grid-rows-2',
    cells: 6,
  },
  {
    name: 'Landscape Wide',
    format: '6 \u00D7 4 inch',
    description: 'Horizontal single frame for group shots and wide backdrops.',
    grid: '',
    cells: 1,
  },
  {
    name: 'Portrait Classic',
    format: '4 \u00D7 6 inch',
    description: 'Full portrait with a thin branded border and event details at the bottom.',
    grid: '',
    cells: 1,
  },
  {
    name: 'Minimalist Single',
    format: '4 \u00D7 6 inch',
    description: 'Edge-to-edge photo with minimal branding. Lets the image speak.',
    grid: '',
    cells: 1,
  },
  {
    name: 'Collage Mix',
    format: '4 \u00D7 6 inch',
    description: 'Five frames in mixed sizes \u2014 one large hero and four small thumbnails.',
    grid: 'grid-cols-2 grid-rows-3',
    cells: 5,
  },
];

export default function DesignsPage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative on-dark bg-ink-800 py-20 md:py-28 overflow-hidden">
        <Image
          src={PHOTOS.frames}
          alt="Photo booth print designs"
          fill
          className="object-cover opacity-25"
          unoptimized
        />
        <div className="absolute inset-0 bg-ink-900/50" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center">
          <p className="gp-eyebrow mb-4">Designs</p>
          <h1 className="font-display text-white text-4xl md:text-6xl font-medium leading-[1.04] tracking-[-0.01em]">
            Choose your print layout
          </h1>
          <p className="text-white/70 mt-4 max-w-lg mx-auto">
            Guests pick a layout at the booth, snap their photos, and walk away with a
            beautifully designed print in seconds.
          </p>
        </div>
      </section>

      {/* ════════ LAYOUTS GRID ════════ */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <SectionHeading
            eyebrow="Print Layouts"
            title="Ten formats for every occasion"
            lede="Each layout is customised with your names, event date and branding before the event. Guests simply choose and print."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LAYOUTS.map(({ name, format, description, grid, cells }) => (
              <div
                key={name}
                className="bg-white border border-black/[.12] rounded shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gold-500/45 transition-all duration-[280ms] overflow-hidden flex flex-col"
              >
                {/* Layout preview placeholder */}
                <div className="bg-mist p-4 flex items-center justify-center aspect-[4/5]">
                  <div
                    className={`bg-white border border-black/[.08] rounded-sm shadow-sm w-full h-full grid gap-1 p-2 ${grid}`}
                  >
                    {[...Array(cells)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-stone-500/10 rounded-sm flex items-center justify-center"
                      >
                        <span className="text-stone-500/40 text-xs">Photo</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-base font-medium mb-1">{name}</h3>
                  <p className="text-gold-500 text-xs tracking-wide uppercase mb-2">{format}</p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4 flex-1">{description}</p>
                  <Link
                    href="/contact"
                    className="block text-center bg-gold-500 text-ink-800 font-semibold text-[13px] tracking-[0.14em] uppercase px-5 py-2.5 rounded-sm hover:bg-gold-400 hover:-translate-y-0.5 transition-all duration-[280ms]"
                  >
                    Try a Layout
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
