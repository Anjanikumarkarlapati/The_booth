'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, Phone, Clock, MapPin, Mail, Camera } from 'lucide-react';
import { PHOTOS } from '@/lib/photos';
import LocationMap from '@/components/LocationMap';

export default function ContactPage() {
  const [whatsappQuote, setWhatsappQuote] = useState(false);

  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative on-dark bg-ink-800 py-20 md:py-28 overflow-hidden">
        <Image
          src={PHOTOS.wedding3}
          alt="Contact us"
          fill
          className="object-cover opacity-25"
          unoptimized
        />
        <div className="absolute inset-0 bg-ink-900/50" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center">
          <p className="gp-eyebrow mb-4">Contact / Book Now</p>
          <h1 className="font-display text-white text-4xl md:text-6xl font-medium leading-[1.04] tracking-[-0.01em]">
            Tell us about your event
          </h1>
          <p className="text-white/70 mt-4 max-w-lg mx-auto">
            Fill in the form below and we will send you a quote within the hour.
          </p>
        </div>
      </section>

      {/* ════════ FORM + SIDEBAR ════════ */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
            {/* ─── LEFT: FORM ─── */}
            <div className="bg-white border border-black/[.12] rounded-lg p-6 md:p-8 shadow-sm">
              <h2 className="font-display text-2xl font-medium mb-6">Inquiry Form</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full border border-black/[.12] rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition"
                    placeholder="Your full name"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-stone-600 mb-1.5">
                    Mobile
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-black/[.12] rounded-l-sm bg-mist text-sm text-stone-500">
                      +91
                    </span>
                    <input
                      id="mobile"
                      type="tel"
                      required
                      className="flex-1 border border-black/[.12] rounded-r-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition"
                      placeholder="98765 43210"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-black/[.12] rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition"
                    placeholder="you@email.com"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label htmlFor="event-type" className="block text-sm font-medium text-stone-600 mb-1.5">
                    Event Type
                  </label>
                  <select
                    id="event-type"
                    required
                    className="w-full border border-black/[.12] rounded-sm px-4 py-2.5 text-sm text-stone-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="engagement">Engagement</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="event-date" className="block text-sm font-medium text-stone-600 mb-1.5">
                    Event Date
                  </label>
                  <input
                    id="event-date"
                    type="date"
                    className="w-full border border-black/[.12] rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition"
                  />
                </div>

                {/* Venue */}
                <div>
                  <label htmlFor="venue" className="block text-sm font-medium text-stone-600 mb-1.5">
                    Venue
                  </label>
                  <input
                    id="venue"
                    type="text"
                    className="w-full border border-black/[.12] rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition"
                    placeholder="Venue name or area, Mumbai"
                  />
                </div>

                {/* Expected Guests */}
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-stone-600 mb-1.5">
                    Expected Guests
                  </label>
                  <select
                    id="guests"
                    className="w-full border border-black/[.12] rounded-sm px-4 py-2.5 text-sm text-stone-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition"
                  >
                    <option value="">Select approximate guests</option>
                    <option value="50">Up to 50</option>
                    <option value="100">50 \u2013 100</option>
                    <option value="200">100 \u2013 200</option>
                    <option value="300">200 \u2013 300</option>
                    <option value="500">300 \u2013 500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>

                {/* Package */}
                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-stone-600 mb-1.5">
                    Package
                  </label>
                  <select
                    id="package"
                    className="w-full border border-black/[.12] rounded-sm px-4 py-2.5 text-sm text-stone-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition"
                  >
                    <option value="">Select package (optional)</option>
                    <option value="silver">Silver \u2014 ₹9,999</option>
                    <option value="gold">Gold \u2014 On request</option>
                    <option value="platinum">Platinum \u2014 Custom</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-600 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border border-black/[.12] rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition resize-none"
                    placeholder="Anything else you would like us to know..."
                  />
                </div>

                {/* WhatsApp checkbox */}
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={whatsappQuote}
                    onChange={(e) => setWhatsappQuote(e.target.checked)}
                    className="w-4 h-4 rounded border-black/[.12] text-gold-500 focus:ring-gold-500/20"
                  />
                  <span className="text-sm text-stone-600">Send my quote on WhatsApp</span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gold-500 text-ink-800 font-semibold text-[13px] tracking-[0.14em] uppercase px-6 py-3.5 rounded-sm hover:bg-gold-400 hover:-translate-y-0.5 transition-all duration-[280ms]"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* ─── RIGHT: SIDEBAR ─── */}
            <div className="space-y-6">
              {/* Talk to us */}
              <div className="bg-white border border-black/[.12] rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-medium mb-4">Talk to us now</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919876543210?text=Hi%20Gajare%2C%20I%20want%20to%20book%20a%20photo%20booth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] text-white font-semibold text-[13px] tracking-[0.14em] uppercase px-5 py-3 rounded-sm hover:-translate-y-0.5 transition-all duration-[280ms]"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp Now
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 border border-gold-500/45 text-gold-500 font-semibold text-[13px] tracking-[0.14em] uppercase px-5 py-3 rounded-sm hover:-translate-y-0.5 transition-all duration-[280ms]"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </div>

              {/* Info card */}
              <div className="bg-white border border-black/[.12] rounded-lg p-6 shadow-sm space-y-4">
                <h3 className="font-display text-lg font-medium mb-2">Contact info</h3>
                <div className="flex items-start gap-3 text-sm text-stone-600">
                  <Clock className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  <span>Mon \u2013 Sun, 9:00 AM \u2013 9:00 PM</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-stone-600">
                  <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  <span>Andheri, Mumbai, Maharashtra</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-stone-600">
                  <Mail className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  <a href="mailto:info@gajarephotography.com" className="hover:text-gold-500 transition-colors">
                    info@gajarephotography.com
                  </a>
                </div>
                <div className="flex items-start gap-3 text-sm text-stone-600">
                  <Camera className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  <a
                    href="https://instagram.com/gajarephotography"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-500 transition-colors"
                  >
                    @gajarephotography
                  </a>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="rounded-lg overflow-hidden">
                <LocationMap />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
