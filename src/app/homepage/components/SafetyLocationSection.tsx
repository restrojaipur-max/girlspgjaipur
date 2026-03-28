'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const trustBadges = [
  {
    icon: 'ShieldCheckIcon',
    title: 'Female-Only PG',
    desc: 'Exclusively for women — students and working professionals.',
    color: '#FADADD',
    iconColor: '#C97B6E',
  },
  {
    icon: 'VideoCameraIcon',
    title: 'CCTV Surveillance',
    desc: '24/7 camera coverage at all entry/exit points and common areas.',
    color: '#E6F0FF',
    iconColor: '#3B82F6',
  },
  {
    icon: 'LockClosedIcon',
    title: 'Secure Gated Society',
    desc: 'Controlled entry with intercom — only authorized visitors allowed.',
    color: '#F5F5DC',
    iconColor: '#7C3AED',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Owner Available',
    desc: 'Resident caretaker available round-the-clock for any assistance.',
    color: '#FFE5B4',
    iconColor: '#D97706',
  },
  {
    icon: 'MapPinIcon',
    title: 'Safe Locality',
    desc: 'Located in a well-lit, family residential area of Vaishali Nagar.',
    color: '#FADADD',
    iconColor: '#C97B6E',
  },
  {
    icon: 'PhoneIcon',
    title: 'Emergency Support',
    desc: 'Nearby police station + emergency contact always reachable.',
    color: '#E6F0FF',
    iconColor: '#3B82F6',
  },
];

const nearbyPlaces = [
  { icon: '🎓', label: 'Coaching Centers', dist: '5 min walk' },
  { icon: '🚌', label: 'City Bus Stop', dist: '2 min walk' },
  { icon: '🛍️', label: 'Markets & Cafes', dist: '5 min drive' },
  { icon: '🏥', label: 'Hospital', dist: '10 min drive' },
  { icon: '🚓', label: 'Police Station', dist: '7 min drive' },
  { icon: '⛽', label: '200ft Bypass', dist: '5 min drive' },
];

const faqItems = [
  {
    q: 'What are the curfew timings?',
    a: 'The gate closes at 10:00 PM on weekdays and 10:30 PM on weekends. Early arrangements can be made with prior notice for special occasions.',
  },
  {
    q: 'Are male visitors allowed?',
    a: 'Male visitors (family only) are welcome in the common hall during designated visiting hours (10 AM – 7 PM). No male visitors are permitted in the rooms.',
  },
  {
    q: 'What is the cleanliness policy?',
    a: 'Residents are expected to keep their rooms and shared spaces tidy. A weekly cleaning service is included. Kitchen must be cleaned after every use.',
  },
  {
    q: 'What are the noise rules?',
    a: 'Quiet hours are from 10:30 PM to 7:00 AM. We ask all residents to be mindful of others, especially during study and sleep hours.',
  },
  {
    q: 'Is cooking allowed?',
    a: 'Yes! The modular kitchen is available for all residents. We ask that you clean up after cooking and respect shared cooking times.',
  },
  {
    q: 'What is the notice period for leaving?',
    a: 'A 30-day advance notice is required before vacating. Security deposit is refundable after inspection of the room.',
  },
];

export default function SafetyLocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      ref={sectionRef}
      className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Safety Section */}
        <div id="safety" className="mb-20">
          <div className="text-center mb-12 scroll-reveal">
            <span className="section-label mb-4">
              <Icon name="ShieldCheckIcon" size={13} />
              Safety First
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-4 mb-4 leading-tight"
              style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
            >
              Your Safety Is Our{' '}
              <span className="gradient-text">Top Priority</span>
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
            >
              We've built multiple layers of security so you and your parents can rest easy. Here's how we keep you safe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustBadges.map((badge, i) => (
              <div
                key={badge.title}
                className={`scroll-reveal delay-${(i % 3 + 1) * 100} trust-badge`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: badge.color }}
                >
                  <Icon name={badge.icon as 'HomeIcon'} size={20} style={{ color: badge.iconColor }} />
                </div>
                <div>
                  <p
                    className="text-sm font-bold mb-0.5"
                    style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                  >
                    {badge.title}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    {badge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div id="location" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Map */}
            <div className="scroll-reveal">
              <span className="section-label mb-4">
                <Icon name="MapPinIcon" size={13} />
                Location
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold mt-4 mb-3"
                style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
              >
                Vaishali Nagar, Jaipur
              </h2>
              <p
                className="text-sm mb-5 leading-relaxed"
                style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
              >
                Perfectly located in the heart of Vaishali Nagar — a safe, well-connected residential area with everything you need within minutes.
              </p>

              {/* Nearby places */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {nearbyPlaces.map((place) => (
                  <div
                    key={place.label}
                    className="flex items-center gap-2.5 p-3 rounded-2xl"
                    style={{
                      background: 'white',
                      border: '1px solid rgba(232,165,152,0.18)',
                    }}
                  >
                    <span className="text-lg">{place.icon}</span>
                    <div>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                      >
                        {place.label}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: 'var(--color-primary-dark)', fontFamily: 'var(--font-body)' }}
                      >
                        {place.dist}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://www.google.com/maps/place/T.T.WEST+PARK-33+HEERA+NAGAR+A/@26.8952736,75.7332432,17z/data=!3m1!4b1!4m6!3m5!1s0x396db4be0ac157d7:0x1e721093cb275008!8m2!3d26.8952688!4d75.7358181!16s%2Fg%2F11cm43655m?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                <Icon name="MapPinIcon" size={16} />
                Get Directions
              </a>
            </div>

            {/* Map embed */}
            <div className="scroll-reveal">
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  height: '380px',
                  border: '2px solid rgba(232,165,152,0.25)',
                  boxShadow: '0 8px 32px rgba(232,165,152,0.15)',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1!2d75.7396!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b3a10b7e9d%3A0x4bb40f9e41c42c9!2sVaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1711613000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GirlsPgJaipur Location - Vaishali Nagar, Jaipur"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="text-center mb-10 scroll-reveal">
            <span className="section-label mb-4">
              <Icon name="QuestionMarkCircleIcon" size={13} />
              House Rules & FAQ
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold mt-4"
              style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
            >
              Good to Know Before You Move In
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="scroll-reveal rounded-2xl overflow-hidden"
                style={{
                  background: 'white',
                  border: openFaq === i
                    ? '1.5px solid var(--color-primary)'
                    : '1px solid rgba(232,165,152,0.2)',
                  boxShadow: openFaq === i ? '0 4px 20px rgba(232,165,152,0.15)' : 'none',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span
                    className="text-sm font-semibold pr-4"
                    style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                  >
                    {item.q}
                  </span>
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: openFaq === i ? 'var(--color-primary)' : 'var(--color-primary-light)',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                    }}
                  >
                    <Icon
                      name="ChevronDownIcon"
                      size={14}
                      style={{ color: openFaq === i ? 'white' : 'var(--color-primary-dark)' }}
                    />
                  </div>
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                  <p
                    className="px-5 pb-5 text-sm leading-relaxed"
                    style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}