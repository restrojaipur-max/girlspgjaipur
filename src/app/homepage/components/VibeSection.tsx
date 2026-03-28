'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const vibeHighlights = [
{
  icon: 'SunIcon',
  title: 'East-Facing Home',
  desc: 'Natural sunlight fills every room from early morning — start your day with warmth and brightness.',
  color: '#FFE5B4',
  iconColor: '#D97706'
},
{
  icon: 'HomeIcon',
  title: 'Feels Like Home',
  desc: 'Spacious open hall, cozy corners, and a calm environment designed for comfort — not a hostel.',
  color: '#FADADD',
  iconColor: '#C97B6E'
},
{
  icon: 'SparklesIcon',
  title: 'Positive Vibes Only',
  desc: 'A thoughtfully curated space with good energy, clean aesthetics, and a supportive community.',
  color: '#E6F0FF',
  iconColor: '#3B82F6'
},
{
  icon: 'HeartIcon',
  title: 'Community of Women',
  desc: 'Live alongside ambitious students and working women who uplift and inspire each other.',
  color: '#F5F5DC',
  iconColor: '#7C3AED'
}];


const stats = [
{ number: '50+', label: 'Happy Residents' },
{ number: '4BHK', label: 'Spacious Home' },
{ number: '24/7', label: 'Security' },
{ number: '100%', label: 'Female Only' }];


export default function VibeSection() {
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
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
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
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFAF8 0%, #FFF0ED 50%, #FFFDF5 100%)' }}>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 scroll-reveal">
          <span className="section-label mb-4">
            <Icon name="SunIcon" size={13} />
            Our Vibe
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 leading-tight"
            style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
            
            Wake Up to Sunshine.
            <br />
            <span className="gradient-text">Live in Peace.</span>
          </h2>
          <p
            className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
            
            Wake up to sunlight, breathe in a peaceful space, and live in a home designed for comfort, safety, and positivity. This isn't a hostel — it's your home.
          </p>
        </div>

        {/* Main grid: image + highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          {/* Image collage */}
          <div className="scroll-reveal relative">
            <div className="relative h-[400px] sm:h-[480px]">
              {/* Main image */}
              <div
                className="absolute top-0 left-0 w-[70%] h-[80%] rounded-3xl overflow-hidden shadow-pink-lg"
                style={{ border: '3px solid white' }}>
                
                <AppImage
                  src="https://images.unsplash.com/photo-1641058235482-aa0216c7a88e"
                  alt="Bright sunlit room interior with warm natural light streaming through windows"
                  fill
                  className="object-cover" />
                
              </div>
              {/* Second image */}
              <div
                className="absolute bottom-0 right-0 w-[55%] h-[60%] rounded-3xl overflow-hidden shadow-pink-lg"
                style={{ border: '3px solid white' }}>
                
                <AppImage
                  src="https://images.unsplash.com/photo-1721614663976-01789a57b0bf"
                  alt="Cozy kitchen area with modern appliances and clean aesthetic"
                  fill
                  className="object-cover" />
                
              </div>
              {/* Floating tag */}
              <div
                className="absolute top-[45%] right-[26%] glass-card px-4 py-2.5 rounded-2xl shadow-pink-md float-anim"
                style={{ border: '1px solid rgba(232,165,152,0.3)' }}>
                
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌞</span>
                  <div>
                    <p
                      className="text-xs font-bold"
                      style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
                      
                      East-Facing
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                      
                      Natural sunlight
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {vibeHighlights.map((item, i) =>
            <div
              key={item.title}
              className={`scroll-reveal amenity-card delay-${(i + 1) * 100}`}>
              
                <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: item.color }}>
                
                  <Icon name={item.icon as 'HomeIcon'} size={20} style={{ color: item.iconColor }} />
                </div>
                <h3
                className="text-sm font-bold mb-1.5"
                style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
                
                  {item.title}
                </h3>
                <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                
                  {item.desc}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div
          className="scroll-reveal grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl"
          style={{
            background: 'white',
            border: '1px solid rgba(232,165,152,0.2)',
            boxShadow: '0 4px 32px rgba(232,165,152,0.1)'
          }}>
          
          {stats.map((stat, i) =>
          <div
            key={stat.label}
            className={`text-center ${i < stats.length - 1 ? 'border-r' : ''}`}
            style={{ borderColor: 'rgba(232,165,152,0.2)' }}>
            
              <div className="stat-number gradient-text">{stat.number}</div>
              <p
              className="text-xs mt-1 font-medium"
              style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-display)' }}>
              
                {stat.label}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}