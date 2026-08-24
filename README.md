# The Booth — Gajare Photo Booth Website

Premium instant photo booth and 360° video booth rental website for **Gajare Photography**, Mumbai.

Built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. Designed with a luxury black-gold-white aesthetic matching the brand's premium positioning.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Fonts | Playfair Display + Poppins (Google Fonts) |
| Maps | Google Maps Embed (3D/Satellite/Normal) |
| Deploy | Vercel / any Node.js host |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, features, services, packages, gallery, how it works, FAQ, map, CTA |
| `/services` | Six booth formats + add-ons |
| `/packages` | Silver (₹9,999) / Gold / Platinum pricing |
| `/gallery` | Filterable photo gallery with lightbox |
| `/contact` | Inquiry form + WhatsApp/Call + interactive map |
| `/designs` | 10 print layout cards for guests |

## Design System

- **Colors**: Black `#111111` · Gold `#D4AF37` · White `#FFFFFF` · Warm paper `#FAF8F4`
- **Typography**: Playfair Display (headings) · Poppins (body)
- **Motion**: Single easing `cubic-bezier(.22,.61,.36,1)` — subtle, never bouncy
- **Interactions**: Scroll reveals, magnetic buttons, animated counters, Ken-Burns parallax, card hover lifts with gold glow
- **Custom cursors**: Gold-outlined arrow, pointer, and I-beam

## Features

- Scroll-triggered reveal animations (IntersectionObserver)
- Magnetic hover micro-interactions on CTA buttons
- Animated number counters (count-up on scroll)
- Ken-Burns parallax hero backgrounds
- Scroll-aware header (transparent → solid on scroll)
- Active page detection with gold dot indicator
- 3D Google Maps with satellite/normal toggle + directions
- Lazy-loaded map iframe (loads when near viewport)
- Custom gold-themed scrollbar
- Gold text selection highlight
- Respects `prefers-reduced-motion`
- Responsive: mobile-first, all grids collapse gracefully

## Performance Optimizations

- `optimizePackageImports` for lucide-react tree-shaking
- Image formats: AVIF + WebP
- Preconnect to Google Fonts, Maps, and image CDN
- DNS-prefetch for third-party domains
- Static generation (all pages pre-rendered)
- Aggressive cache headers for static assets
- Lazy-loaded map iframe with IntersectionObserver
- Gzip/Brotli compression enabled

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout (Header + Footer + WhatsApp)
│   ├── globals.css           # Design tokens + animations + utilities
│   ├── page.tsx              # Home page (10 sections)
│   ├── services/page.tsx     # Services page
│   ├── packages/page.tsx     # Packages page
│   ├── gallery/page.tsx      # Gallery with filter + lightbox
│   ├── contact/page.tsx      # Contact form + map
│   └── designs/page.tsx      # Print layout picker
├── components/
│   ├── Header.tsx            # Scroll-aware sticky header
│   ├── Footer.tsx            # Multi-column dark footer
│   ├── FloatingWhatsApp.tsx  # Fixed WhatsApp CTA
│   ├── SectionHeading.tsx    # Reusable eyebrow + title + lede
│   ├── Reveal.tsx            # Scroll-triggered animations
│   ├── MagneticButton.tsx    # Cursor-following hover effect
│   ├── AnimatedCounter.tsx   # Count-up numbers on scroll
│   └── LocationMap.tsx       # 3D Google Maps with view toggle
├── lib/
│   └── photos.ts            # Image URL constants
public/
├── logo-white.webp           # Brand logo
├── cursors/                  # Custom SVG cursors
│   ├── default.svg
│   ├── pointer.svg
│   └── text.svg
```

## Location

**Gajare Photography**  
Room No - 503, 6-C, Malvani Sai Savli CHSL,  
New Mahada Colony, near Billabong School,  
Jankalyan Nagar, Malad West,  
Mumbai, Maharashtra 400095

[Get Directions →](https://www.google.com/maps/dir//Gajare+Photography+-+Best+Photographer+in+Mumbai,+Room+No+-+503+,+6-C+,+Malvani+Sai+Savli+CHSL+New+Mahada+Colony,+near+Billabong+School,+Jankalyan+Nagar,+Malad+West,+Mumbai,+Maharashtra+400095/@19.2041522,72.8198668,17z)

## Brand

This website is the marketing arm of [Gajare Photography](https://gajarephotography.com/) — a Mumbai photography studio offering instant-print booth rentals for weddings, engagements, birthdays, corporate events and baby showers.

## License

Private — All rights reserved. Gajare Photography.
