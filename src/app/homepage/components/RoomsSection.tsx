'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { rooms } from '@/data/rooms';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1723470915155-621e10d20dfa',
    alt: 'Modern modular kitchen with clean countertops and bright lighting',
    label: 'Kitchen',
  },
  {
    src: '/assets/images/common_hall.png',
    alt: 'Spacious well-lit living hall with comfortable furniture',
    label: 'Common Hall',
  },
  {
    src: 'https://images.unsplash.com/photo-1721396181219-1c676297c435',
    alt: 'Clean modern bathroom with geyser and good ventilation',
    label: 'Bathroom',
  },
  {
    src: '/assets/images/study_area.png',
    alt: 'Study area with desk and good lighting for focused work',
    label: 'Study Area',
  },
];

export default function RoomsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<'single' | 'twin'>('twin');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = sectionRef?.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => {
      el?.classList?.add('reveal-hidden');
      observer?.observe(el);
    });

    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="rooms"
      ref={sectionRef}
      className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
      style={{ background: 'var(--color-bg)' }}>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 scroll-reveal">
          <div>
            <span className="section-label mb-4">
              <Icon name="HomeIcon" size={13} />
              Rooms & Pricing
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-4 leading-tight"
              style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
              Choose Your{' '}
              <span className="gradient-text">Perfect Space</span>
            </h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e?.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary self-start sm:self-auto text-sm">
            Schedule a Visit
            <Icon name="ArrowRightIcon" size={15} />
          </a>
        </div>

        {/* Room cards - bento style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          {rooms?.map((room, i) => (
            <div
              key={room?.id}
              className={`scroll-reveal delay-${(i + 1) * 200} rounded-3xl overflow-hidden hover-lift`}
              style={{
                background: 'white',
                border: room?.highlight
                  ? '2px solid var(--color-primary)'
                  : '1px solid rgba(232,165,152,0.2)',
                boxShadow: room?.highlight
                  ? '0 8px 32px rgba(232,165,152,0.2)'
                  : '0 2px 16px rgba(45,27,22,0.05)',
              }}>

              {/* Image */}
              <div className="room-img-wrap h-52 sm:h-64 relative">
                <AppImage
                  src={room?.image}
                  alt={room?.imageAlt}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(45,27,22,0.4) 0%, transparent 50%)' }}
                />
                {room?.highlight && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      background: 'var(--color-primary)',
                      color: 'white',
                      fontFamily: 'var(--font-display)',
                    }}>
                    ⭐ Most Popular
                  </div>
                )}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: room?.badgeColor,
                    color: room?.badgeTextColor,
                    fontFamily: 'var(--font-display)',
                  }}>
                  {room?.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
                      {room?.type}
                    </h3>
                    <p
                      className="text-sm mt-1 leading-relaxed"
                      style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                      {room?.desc}
                    </p>
                  </div>
                  <div className="text-right ml-4 flex-shrink-0">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: 'var(--color-primary-dark)', fontFamily: 'var(--font-display)' }}>
                      {room?.price}
                    </span>
                    <span
                      className="text-xs block"
                      style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-body)' }}>
                      {room?.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {room?.features?.map((feat) => (
                    <div key={feat} className="flex items-center gap-1.5">
                      <Icon
                        name="CheckCircleIcon"
                        size={14}
                        variant="solid"
                        style={{ color: 'var(--color-primary)', flexShrink: 0 }}
                      />
                      <span
                        className="text-xs"
                        style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={`/rooms/${room?.id}`}
                    className="btn-secondary flex-1 justify-center text-sm"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icon name="EyeIcon" size={15} />
                    View Details
                  </Link>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e?.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex-1 justify-center text-sm ${room?.highlight ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icon name="CalendarDaysIcon" size={15} />
                    Book Room
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="scroll-reveal">
          <h3
            className="text-xl font-bold mb-6"
            style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
            Inside the PG 📸
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {galleryImages?.map((img) =>
            <div key={img?.label} className="gallery-item h-36 sm:h-44">
                <AppImage
                src={img?.src}
                alt={img?.alt}
                fill
                className="object-cover" />
              
                <div
                className="absolute bottom-0 left-0 right-0 px-3 py-2 z-10"
                style={{ background: 'linear-gradient(to top, rgba(45,27,22,0.6) 0%, transparent 100%)' }}>
                
                  <span
                  className="text-xs font-semibold text-white"
                  style={{ fontFamily: 'var(--font-display)' }}>
                  
                    {img?.label}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}