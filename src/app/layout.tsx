import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://girlspgjaipur.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'GirlsPgJaipur — Safe, Sunny & Homely PG for Girls in Jaipur',
    template: '%s | GirlsPgJaipur',
  },
  description:
    'Premium girls-only PG in Vaishali Nagar, Jaipur. Fully furnished rooms from ₹13,000/month, CCTV security, RO water, modular kitchen. Ideal for students and working women.',
  keywords: [
    'girls PG Jaipur',
    'girls hostel Jaipur',
    'PG for girls Jaipur',
    'ladies PG Jaipur',
    'girls accommodation Jaipur',
    'Vaishali Nagar PG',
    'safe PG for girls',
    'furnished PG Jaipur',
    'working women PG Jaipur',
    'student PG Jaipur',
  ],
  authors: [{ name: 'GirlsPgJaipur', url: baseUrl }],
  creator: 'GirlsPgJaipur',
  publisher: 'GirlsPgJaipur',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: baseUrl,
    siteName: 'GirlsPgJaipur',
    title: 'GirlsPgJaipur — Safe, Sunny & Homely PG for Girls in Jaipur',
    description:
      'Premium girls-only PG in Vaishali Nagar, Jaipur. Fully furnished rooms from ₹13,000/month, CCTV security, modern amenities.',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'GirlsPgJaipur — Safe and Homely PG for Girls in Jaipur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GirlsPgJaipur — Safe, Sunny & Homely PG for Girls in Jaipur',
    description:
      'Premium girls-only PG in Vaishali Nagar, Jaipur. Fully furnished rooms from ₹13,000/month.',
    images: ['/assets/images/app_logo.png'],
  },
  alternates: {
    canonical: `${baseUrl}/homepage`,
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />

        <script type="module" async  />
        <script type="module" defer  /></head>
      <body>
        {children}
      </body>
    </html>
  );
}