import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111111',
};

export const metadata: Metadata = {
  title: "Gajare Photo Booth | Mumbai's Premium Instant Photo Booth Service",
  description:
    'Instant photo prints, 360 video booth, and premium DSLR quality photo booth rental for weddings, engagements, birthdays, corporate events and baby showers in Mumbai. Starting at \u20B99,999.',
  keywords: [
    'photo booth Mumbai',
    'instant photo booth',
    '360 video booth',
    'wedding photo booth Mumbai',
    'corporate photo booth',
    'photo booth rental Mumbai',
    'Gajare Photography',
    'instant prints Mumbai',
    'photo booth Malad',
  ],
  openGraph: {
    title: "Gajare Photo Booth | Mumbai's Premium Instant Photo Booth",
    description: 'Instant 4x6 prints, 360 video booth, professional photographer. Starting \u20B99,999. Weddings, birthdays, corporate events.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Gajare Photo Booth',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://gajarephotography.com" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@400;500;600&display=swap"
          as="style"
        />
      </head>
      <body className="font-body bg-paper">
        <ScrollProgress />
        <Header />
        <main className="pt-[82px]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
