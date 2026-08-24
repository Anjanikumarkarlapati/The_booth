'use client';

import { useState, useRef, useEffect } from 'react';
import { Map, Satellite, Navigation, ExternalLink } from 'lucide-react';

type MapView = '3d' | 'satellite' | 'normal';

const LOCATION = {
  name: 'Gajare Photography',
  address: 'Room No - 503, 6-C, Malvani Sai Savli CHSL, New Mahada Colony, near Billabong School, Jankalyan Nagar, Malad West, Mumbai, Maharashtra 400095',
  lat: 19.2041522,
  lng: 72.8198668,
  placeId: '0x3be7b716ea4e3de1:0xd68ccf6db0e9fbc3',
  directionsUrl: 'https://www.google.com/maps/dir//Gajare+Photography+-+Best+Photographer+in+Mumbai,+Room+No+-+503+,+6-C+,+Malvani+Sai+Savli+CHSL+New+Mahada+Colony,+near+Billabong+School,+Jankalyan+Nagar,+Malad+West,+Mumbai,+Maharashtra+400095/@19.2041522,72.8198668,17z',
};

function getEmbedUrl(view: MapView): string {
  const base = 'https://www.google.com/maps/embed?pb=';
  // Use place embed for reliable loading without API key
  const placeQuery = encodeURIComponent('Gajare Photography Mumbai Malad West');

  switch (view) {
    case '3d':
      // Satellite with tilt for 3D effect
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885!2d${LOCATION.lng}!3d${LOCATION.lat}!2m3!1f0!2f45!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s${LOCATION.placeId}!2sGajare%20Photography!5e1!3m2!1sen!2sin`;
    case 'satellite':
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${LOCATION.lng}!3d${LOCATION.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${LOCATION.placeId}!2sGajare%20Photography!5e1!3m2!1sen!2sin`;
    case 'normal':
    default:
      return `https://www.google.com/maps/embed/v1/place?key=&q=${placeQuery}&center=${LOCATION.lat},${LOCATION.lng}&zoom=16&maptype=roadmap`;
  }
}

// Fallback embed URL that works without API key
function getFallbackUrl(view: MapView): string {
  const q = encodeURIComponent('Gajare Photography Malad West Mumbai');
  switch (view) {
    case '3d':
      return `https://maps.google.com/maps?q=${q}&t=k&z=18&ie=UTF8&iwloc=&output=embed&layer=transit&tilt=45`;
    case 'satellite':
      return `https://maps.google.com/maps?q=${q}&t=k&z=17&ie=UTF8&iwloc=&output=embed`;
    case 'normal':
    default:
      return `https://maps.google.com/maps?q=${q}&t=m&z=16&ie=UTF8&iwloc=&output=embed`;
  }
}

export default function LocationMap() {
  const [view, setView] = useState<MapView>('3d');
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy load: only render iframe when section is near viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const views: { key: MapView; label: string; icon: typeof Map }[] = [
    { key: '3d', label: '3D', icon: Navigation },
    { key: 'satellite', label: 'Satellite', icon: Satellite },
    { key: 'normal', label: 'Map', icon: Map },
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* View toggle buttons */}
      <div className="absolute top-4 right-4 z-10 flex gap-1 bg-ink-900/90 backdrop-blur-md rounded-lg p-1 border border-white/10">
        {views.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => { setView(key); setLoaded(false); }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
              view === key
                ? 'bg-gold-500 text-ink-800'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>

      {/* Get Directions button */}
      <a
        href={LOCATION.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-gold-500 text-ink-800 font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded-md btn-glow shadow-lg"
      >
        <Navigation className="w-3.5 h-3.5" />
        Get Directions
      </a>

      {/* Address overlay */}
      <div className="absolute bottom-4 left-4 z-10 max-w-xs">
        <div className="bg-ink-900/90 backdrop-blur-md rounded-lg p-3 border border-white/10">
          <p className="text-gold-500 text-xs font-semibold uppercase tracking-wider mb-1">
            {LOCATION.name}
          </p>
          <p className="text-white/60 text-[11px] leading-relaxed">
            {LOCATION.address}
          </p>
        </div>
      </div>

      {/* Map container */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gold-500/20 bg-ink-900">
        {/* Loading skeleton */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink-800">
            <div className="text-center">
              <div className="w-10 h-10 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin mx-auto mb-3" />
              <p className="text-white/40 text-sm">Loading {view === '3d' ? '3D' : view} view...</p>
            </div>
          </div>
        )}

        {/* Iframe - lazy loaded */}
        {inView && (
          <iframe
            key={view}
            src={getFallbackUrl(view)}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Gajare Photography location - ${view} view`}
            onLoad={() => setLoaded(true)}
            className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
      </div>

      {/* Open in Google Maps link */}
      <div className="mt-3 text-center">
        <a
          href={LOCATION.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-gold-500 text-sm font-medium hover:text-gold-400 transition-colors link-underline"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
