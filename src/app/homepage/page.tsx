import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import VibeSection from './components/VibeSection';
import RoomsSection from './components/RoomsSection';
import AmenitiesSection from './components/AmenitiesSection';
import SafetyLocationSection from './components/SafetyLocationSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://girlspgjaipur.com';

export const metadata: Metadata = {
  title: 'GirlsPgJaipur — Safe, Sunny & Homely PG for Girls in Jaipur',
  description:
    'Premium girls-only PG in Vaishali Nagar, Jaipur. Fully furnished rooms from ₹13,000/month, CCTV security, modern amenities. Ideal for students and working women.',
  keywords: [
    'girls PG Jaipur',
    'girls hostel Jaipur',
    'PG for girls Jaipur',
    'ladies PG Vaishali Nagar',
    'safe PG for girls Jaipur',
    'furnished PG Jaipur',
    'working women hostel Jaipur',
    'student accommodation Jaipur',
    'single room PG Jaipur',
    'twin sharing PG Jaipur',
  ],
  openGraph: {
    title: 'GirlsPgJaipur — Safe & Homely PG for Girls in Jaipur',
    description:
      'Fully furnished girls PG in Vaishali Nagar, Jaipur with CCTV, RO water, modular kitchen & more. Rooms from ₹13,000/month.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630, alt: 'GirlsPgJaipur — Safe PG for Girls in Jaipur' }],
    url: `${baseUrl}/homepage`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/homepage`,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': `${baseUrl}/#organization`,
  name: 'GirlsPgJaipur',
  alternateName: 'Girls PG Jaipur',
  description:
    'Premium girls-only PG accommodation in Vaishali Nagar, Jaipur. Safe, sunny, fully furnished rooms for students and working women.',
  url: `${baseUrl}/homepage`,
  telephone: '+917073054354',
  email: 'hello@girlspgjaipur.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vaishali Nagar',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302021',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.9124,
    longitude: 75.7396,
  },
  priceRange: '₹13,000 - ₹20,000/month',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Bank Transfer, UPI',
  openingHours: 'Mo-Su 09:00-20:00',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'CCTV Security', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Female Only', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'RO Water', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Modular Kitchen', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Power Backup', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Housekeeping', value: true },
  ],
  hasMap: 'https://maps.google.com/?q=Vaishali+Nagar+Jaipur',
  sameAs: [],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the monthly rent for girls PG in Jaipur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GirlsPgJaipur offers rooms starting from ₹13,000/month for twin sharing and ₹20,000/month for single occupancy, including electricity, WiFi, and housekeeping.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GirlsPgJaipur safe for girls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, GirlsPgJaipur is a girls-only PG with 24/7 CCTV surveillance, biometric entry, a female caretaker, and a secure gate that closes at 10:30 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is GirlsPgJaipur located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GirlsPgJaipur is located in Vaishali Nagar, Jaipur, Rajasthan — a safe, well-connected residential area close to schools, colleges, hospitals, and metro connectivity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What amenities are included in the PG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Amenities include high-speed WiFi, RO drinking water, modular kitchen, power backup, daily housekeeping, CCTV security, laundry area, and a comfortable common hall.',
      },
    },
  ],
};

export default function HomepagePage() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <HeroSection />
        <VibeSection />
        <RoomsSection />
        <AmenitiesSection />
        <SafetyLocationSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Sticky WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}