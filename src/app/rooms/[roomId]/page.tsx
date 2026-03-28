import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { rooms, getRoomById } from '@/data/rooms';

interface PageProps {
  params: Promise<{ roomId: string }>;
}

export async function generateStaticParams() {
  return rooms.map((room) => ({ roomId: room.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { roomId } = await params;
  const room = getRoomById(roomId);
  if (!room) return { title: 'Room Not Found' };

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://girlspgjaipur.com';

  return {
    title: `${room.type} — GirlsPgJaipur | Girls PG in Jaipur`,
    description: `${room.desc} Starting at ${room.price}/month. ${room.size}, ${room.occupancy}. Book your visit today.`,
    keywords: [
      `${room.type.toLowerCase()} PG Jaipur`,
      'girls PG Jaipur',
      'girls hostel Jaipur',
      'PG accommodation Jaipur',
      'Vaishali Nagar PG',
      room.type,
    ],
    openGraph: {
      title: `${room.type} — GirlsPgJaipur`,
      description: room.desc,
      images: [{ url: room.images[0].src, width: 1200, height: 630, alt: room.images[0].alt }],
      url: `${baseUrl}/rooms/${room.id}`,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/rooms/${room.id}`,
    },
  };
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { roomId } = await params;
  const room = getRoomById(roomId);
  if (!room) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://girlspgjaipur.com';

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    name: room.type,
    description: room.longDesc,
    url: `${baseUrl}/rooms/${room.id}`,
    image: room.images.map((img) => img.src),
    occupancy: {
      '@type': 'QuantitativeValue',
      value: room.occupancy === '1 Person' ? 1 : 2,
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      value: parseInt(room.size),
      unitCode: 'FTK',
    },
    amenityFeature: room.detailedFeatures.map((f) => ({
      '@type': 'LocationFeatureSpecification',
      name: f.label,
      value: true,
    })),
    containedInPlace: {
      '@type': 'LodgingBusiness',
      name: 'GirlsPgJaipur',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Vaishali Nagar',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302021',
        addressCountry: 'IN',
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/homepage` },
      { '@type': 'ListItem', position: 2, name: 'Rooms', item: `${baseUrl}/homepage#rooms` },
      { '@type': 'ListItem', position: 3, name: room.type, item: `${baseUrl}/rooms/${room.id}` },
    ],
  };

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="pt-20" style={{ background: 'var(--color-bg)' }}>
        {/* Breadcrumb */}
        <div className="px-5 sm:px-8 lg:px-12 py-4 max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm flex-wrap" style={{ fontFamily: 'var(--font-body)' }}>
              <li>
                <Link
                  href="/homepage"
                  className="flex items-center gap-1 transition-colors hover:opacity-80"
                  style={{ color: 'var(--color-primary-dark)' }}
                >
                  <Icon name="HomeIcon" size={14} />
                  Home
                </Link>
              </li>
              <li style={{ color: 'var(--color-fg-subtle)' }}>
                <Icon name="ChevronRightIcon" size={14} />
              </li>
              <li>
                <Link
                  href="/homepage#rooms"
                  className="transition-colors hover:opacity-80"
                  style={{ color: 'var(--color-primary-dark)' }}
                >
                  Rooms
                </Link>
              </li>
              <li style={{ color: 'var(--color-fg-subtle)' }}>
                <Icon name="ChevronRightIcon" size={14} />
              </li>
              <li style={{ color: 'var(--color-fg-muted)' }} aria-current="page">
                {room.type}
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Image */}
        <div className="px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-10">
          <div className="relative h-72 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden">
            <AppImage
              src={room.images[0].src}
              alt={room.images[0].alt}
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(45,27,22,0.5) 0%, transparent 60%)' }}
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-end justify-between flex-wrap gap-4">
                <div>
                  <span
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-bold mb-3"
                    style={{ background: room.badgeColor, color: room.badgeTextColor }}
                  >
                    {room.badge}
                  </span>
                  <h1
                    className="text-3xl sm:text-4xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {room.type}
                  </h1>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    {room.price}
                  </span>
                  <span className="text-white/80 text-sm block">{room.period}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Room Size', value: room.size, icon: 'HomeIcon' },
                  { label: 'Occupancy', value: room.occupancy, icon: 'UsersIcon' },
                  { label: 'Deposit', value: room.deposit, icon: 'BanknotesIcon' },
                  { label: 'Availability', value: room.availability, icon: 'CalendarDaysIcon' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl p-4 text-center"
                    style={{ background: 'white', border: '1px solid rgba(232,165,152,0.2)' }}
                  >
                    <Icon name={stat.icon as 'HomeIcon'} size={20} style={{ color: 'var(--color-primary)', margin: '0 auto 8px' }} />
                    <p className="text-xs mb-1" style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-body)' }}>
                      {stat.label}
                    </p>
                    <p className="text-sm font-bold" style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                >
                  About This Room
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {room.longDesc}
                </p>
              </div>

              {/* Photo Gallery */}
              <div>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                >
                  Photo Gallery 📸
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {room.images.map((img, i) => (
                    <div
                      key={i}
                      className={`relative rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2 h-64 sm:h-80' : 'h-44 sm:h-52'}`}
                    >
                      <AppImage src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                      <div
                        className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: 'rgba(255,255,255,0.9)', color: 'var(--color-fg)' }}
                      >
                        {img.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Virtual Tour */}
              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                >
                  Virtual Tour 🎥
                </h2>
                <p
                  className="text-sm mb-5"
                  style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
                >
                  Take a virtual walkthrough of the room and common areas before you visit in person.
                </p>
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ paddingBottom: '56.25%', background: '#000' }}
                >
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${room.virtualTourVideoId}?rel=0&modestbranding=1`}
                    title={`Virtual tour of ${room.type} at GirlsPgJaipur`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Detailed Features */}
              <div>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                >
                  Room Features & Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.detailedFeatures.map((feat) => (
                    <div
                      key={feat.label}
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ background: 'white', border: '1px solid rgba(232,165,152,0.15)' }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--color-primary-light)' }}
                      >
                        <Icon name="CheckCircleIcon" size={16} variant="solid" style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <span className="text-sm" style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                        {feat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2
                  className="text-2xl font-bold mb-5"
                  style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                >
                  What's Included in Rent
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {room.included.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <Icon name="CheckCircleIcon" size={16} variant="solid" style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                      <span className="text-sm" style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* House Rules */}
              <div>
                <h2
                  className="text-2xl font-bold mb-5"
                  style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                >
                  House Rules
                </h2>
                <div className="space-y-2.5">
                  {room.rules.map((rule) => (
                    <div key={rule} className="flex items-start gap-2.5">
                      <Icon name="InformationCircleIcon" size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 2 }} />
                      <span className="text-sm" style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                        {rule}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Booking Card */}
            <div className="lg:col-span-1">
              <div
                className="sticky top-24 rounded-3xl p-6 space-y-5"
                style={{ background: 'white', border: '2px solid var(--color-primary)', boxShadow: '0 8px 32px rgba(232,165,152,0.2)' }}
              >
                <div>
                  <span className="text-3xl font-bold" style={{ color: 'var(--color-primary-dark)', fontFamily: 'var(--font-display)' }}>
                    {room.price}
                  </span>
                  <span className="text-sm ml-1" style={{ color: 'var(--color-fg-subtle)' }}>
                    {room.period}
                  </span>
                </div>

                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
                  style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', fontFamily: 'var(--font-body)' }}
                >
                  <Icon name="CheckCircleIcon" size={15} variant="solid" />
                  {room.availability}
                </div>

                <div className="space-y-3 text-sm" style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                  <div className="flex justify-between">
                    <span>Room Size</span>
                    <span className="font-semibold" style={{ color: 'var(--color-fg)' }}>{room.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Occupancy</span>
                    <span className="font-semibold" style={{ color: 'var(--color-fg)' }}>{room.occupancy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Deposit</span>
                    <span className="font-semibold" style={{ color: 'var(--color-fg)' }}>{room.deposit}</span>
                  </div>
                </div>

                <Link
                  href="/homepage#contact"
                  className="btn-primary w-full justify-center text-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', borderRadius: '12px' }}
                >
                  <Icon name="CalendarDaysIcon" size={16} />
                  Book a Visit
                </Link>

                <a
                  href="https://wa.me/917073054354?text=Hi! I'm interested in the {room.type} at GirlsPgJaipur."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center text-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', borderRadius: '12px' }}
                >
                  <Icon name="ChatBubbleLeftIcon" size={16} />
                  WhatsApp Us
                </a>

                <p className="text-xs text-center" style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-body)' }}>
                  Free visit. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
