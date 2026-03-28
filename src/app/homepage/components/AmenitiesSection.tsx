'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const amenityCategories = [
  {
    title: 'Essentials',
    emoji: '⚡',
    color: '#E6F0FF',
    accentColor: '#3B82F6',
    items: [
      { icon: 'WifiIcon', label: 'High-Speed WiFi', desc: 'Unlimited broadband' },
      { icon: 'BeakerIcon', label: 'RO Water', desc: 'Pure drinking water' },
      { icon: 'SparklesIcon', label: 'Washing Machine', desc: 'In-house laundry' },
      { icon: 'BoltIcon', label: '24/7 Power', desc: 'Backup available' },
    ],
  },
  {
    title: 'Comfort',
    emoji: '🌸',
    color: '#FADADD',
    accentColor: '#C97B6E',
    items: [
      { icon: 'SunIcon', label: 'Air Purifier', desc: 'Clean fresh air' },
      { icon: 'FireIcon', label: 'Geyser', desc: 'Hot water anytime' },
      { icon: 'HomeIcon', label: 'Spacious Hall', desc: 'Open common area' },
      { icon: 'CakeIcon', label: 'Modular Kitchen', desc: 'Dishwasher + fridge' },
    ],
  },
  {
    title: 'Security',
    emoji: '🔐',
    color: '#F5F5DC',
    accentColor: '#7C3AED',
    items: [
      { icon: 'VideoCameraIcon', label: 'CCTV Surveillance', desc: '24/7 monitoring' },
      { icon: 'LockClosedIcon', label: 'Secure Entry', desc: 'Gated society' },
      { icon: 'ShieldCheckIcon', label: 'Female Only', desc: 'Women-exclusive' },
      { icon: 'MapPinIcon', label: 'Safe Locality', desc: 'Prime neighborhood' },
    ],
  },
  {
    title: 'Extra',
    emoji: '✨',
    color: '#FFE5B4',
    accentColor: '#D97706',
    items: [
      { icon: 'TruckIcon', label: 'Parking Area', desc: '2-wheeler parking' },
      { icon: 'BuildingOfficeIcon', label: 'Roof Access', desc: 'Terrace relaxation' },
      { icon: 'PhoneIcon', label: 'Caretaker', desc: 'Always available' },
      { icon: 'CubeIcon', label: 'Utensils', desc: 'Cooking setup' },
    ],
  },
];

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => {
      el.classList.add('reveal-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
      style={{ background: 'linear-gradient(160deg, #FFF0ED 0%, #FFFAF8 50%, #FFF5F0 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 scroll-reveal">
          <span className="section-label mb-4">
            <Icon name="SparklesIcon" size={13} />
            Amenities
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-4 mb-4 leading-tight"
            style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
          >
            Everything You Need,{' '}
            <span className="gradient-text">All in One Place</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
          >
            We've thought of every detail so you can focus on what matters — your goals, your growth, your life.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenityCategories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className={`scroll-reveal delay-${catIdx * 100 + 100} rounded-3xl p-6`}
              style={{
                background: 'white',
                border: '1px solid rgba(232,165,152,0.18)',
                boxShadow: '0 2px 20px rgba(45,27,22,0.05)',
              }}
            >
              {/* Category header */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                style={{ background: cat.color }}
              >
                <span className="text-sm">{cat.emoji}</span>
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: cat.accentColor, fontFamily: 'var(--font-display)' }}
                >
                  {cat.title}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-2.5 rounded-xl transition-colors duration-200 cursor-default"
                    style={{ transition: 'background 0.2s' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = cat.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: cat.color }}
                    >
                      <Icon
                        name={item.icon as 'HomeIcon'}
                        size={16}
                        style={{ color: cat.accentColor }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold leading-tight"
                        style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-body)' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="scroll-reveal mt-10 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, #FADADD 0%, #FFE5B4 100%)',
            border: '1px solid rgba(232,165,152,0.3)',
          }}
        >
          <div>
            <h3
              className="text-xl font-bold mb-1"
              style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
            >
              Ready to experience it all? 🌸
            </h3>
            <p
              className="text-sm"
              style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
            >
              Come for a visit and see the space for yourself — no commitment needed.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary flex-shrink-0"
          >
            <Icon name="CalendarDaysIcon" size={18} />
            Book a Visit
          </a>
        </div>
      </div>
    </section>
  );
}