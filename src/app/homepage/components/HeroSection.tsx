'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const badges = [
{ icon: 'ShieldCheckIcon', label: 'Female Only' },
{ icon: 'HomeIcon', label: 'Fully Furnished' },
{ icon: 'MapPinIcon', label: 'Prime Location' },
{ icon: 'StarIcon', label: 'Secure Living' }];


export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.hero-reveal');
    items?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 100 + i * 120);
    });
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}>
      
      {/* Atmospheric background blobs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(250,218,221,0.45) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />
      
      <div
        className="absolute bottom-[10%] left-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,229,180,0.35) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />
      
      <div
        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(230,240,255,0.3) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }} />
      

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Availability badge */}
            <div
              className="hero-reveal inline-flex items-center gap-2 self-start glass-card px-4 py-2 rounded-full"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                border: '1px solid rgba(232,165,152,0.3)'
              }}>
              
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full"
                  style={{ background: 'var(--color-primary)', opacity: 0.7 }} />
                
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: 'var(--color-primary)' }} />
                
              </span>
              <span
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: 'var(--color-primary-dark)', fontFamily: 'var(--font-display)' }}>
                
                Limited Rooms Available
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-reveal text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                color: 'var(--color-fg)',
                fontFamily: 'var(--font-display)'
              }}>
              
              A Safe, Sunny{' '}
              <span className="gradient-text">&amp; Peaceful</span>
              <br />
              Home for Girls
              <br />
              in Jaipur
            </h1>

            {/* Subtext */}
            <p
              className="hero-reveal text-base lg:text-lg leading-relaxed"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                color: 'var(--color-fg-muted)',
                fontFamily: 'var(--font-body)',
                maxWidth: '420px'
              }}>
              
              Fully furnished 4BHK PG with modern amenities, positive vibes &amp; complete safety. Starting at{' '}
              <strong style={{ color: 'var(--color-primary-dark)' }}>₹13,000/month.</strong>
            </p>

            {/* CTAs */}
            <div
              className="hero-reveal flex flex-wrap gap-3"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)'
              }}>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary">
                
                <Icon name="CalendarDaysIcon" size={18} />
                Schedule a Visit
              </a>
              <a
                href="#rooms"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary">
                
                View Rooms
                <Icon name="ArrowRightIcon" size={16} />
              </a>
            </div>

            {/* Badges */}
            <div
              className="hero-reveal flex flex-wrap gap-2 mt-2"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)'
              }}>
              
              {badges.map((badge) =>
              <div
                key={badge.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: 'var(--color-primary-light)',
                  color: 'var(--color-primary-dark)',
                  fontFamily: 'var(--font-display)'
                }}>
                
                  <Icon name={badge.icon as 'HomeIcon'} size={13} />
                  {badge.label}
                </div>
              )}
            </div>

            {/* Social proof */}
            <div
              className="hero-reveal flex items-center gap-4 pt-2 border-t"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                borderColor: 'rgba(232,165,152,0.2)'
              }}>
              
              <div className="flex -space-x-2.5">
                {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=64&h=64&fit=crop&crop=face'].
                map((src, i) =>
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 overflow-hidden"
                  style={{ borderColor: 'white' }}>
                  
                    <AppImage
                    src={src}
                    alt={`Happy resident ${i + 1}`}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover" />
                  
                  </div>
                )}
              </div>
              <div>
                <div
                  className="flex items-center gap-1"
                  style={{ color: 'var(--color-primary)' }}>
                  
                  {[1, 2, 3, 4, 5].map((s) =>
                  <Icon key={s} name="StarIcon" size={13} variant="solid" />
                  )}
                </div>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                  
                  Loved by 50+ happy residents
                </p>
              </div>
            </div>
          </div>

          {/* Right: Bento Photo Grid */}
          <div
            className="hero-reveal lg:col-span-7 relative h-[500px] sm:h-[560px] lg:h-[620px] hidden sm:block"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)'
            }}>
            
            <div className="grid grid-cols-12 grid-rows-6 gap-3 h-full w-full">
              {/* Main tall image */}
              <div className="col-span-5 row-span-6 rounded-3xl overflow-hidden relative group cursor-pointer shadow-card-hover">
                <AppImage
                  src="https://images.unsplash.com/photo-1626965556132-43d76de1004f"
                  alt="Bright sunlit furnished room with cozy aesthetic decor"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority />
                
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(45,27,22,0.5) 0%, transparent 50%)' }} />
                
                <div className="absolute bottom-5 left-5">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider block mb-1"
                    style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-display)' }}>
                    
                    Your Room
                  </span>
                  <p
                    className="text-base font-bold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}>
                    
                    Sunlit &amp; Cozy
                  </p>
                </div>
              </div>

              {/* Top right */}
              <div className="col-span-7 row-span-3 rounded-3xl overflow-hidden relative group cursor-pointer shadow-card-hover">
                <AppImage
                  src="https://images.unsplash.com/photo-1723470915155-621e10d20dfa"
                  alt="Modern modular kitchen with bright lighting"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" />
                
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(45,27,22,0.4) 0%, transparent 60%)' }} />
                
                <div className="absolute bottom-4 left-4">
                  <p
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}>
                    
                    Modern Kitchen
                  </p>
                </div>
                <div
                  className="absolute top-3 right-3 glass-card px-3 py-1.5 rounded-full flex items-center gap-1.5"
                  style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                  
                  <Icon name="SparklesIcon" size={12} style={{ color: 'var(--color-accent)' }} />
                  <span
                    className="text-xs font-semibold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}>
                    
                    Fully Equipped
                  </span>
                </div>
              </div>

              {/* Bottom right image */}
              <div className="col-span-4 row-span-3 rounded-3xl overflow-hidden relative group cursor-pointer shadow-card-hover">
                <AppImage
                  src="https://images.unsplash.com/photo-1562188207-ec042fd7922c"
                  alt="Spacious well-lit living area with comfortable seating"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" />
                
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(45,27,22,0.4) 0%, transparent 60%)' }} />
                
                <div className="absolute bottom-3 left-3">
                  <p
                    className="text-xs font-semibold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}>
                    
                    Common Hall
                  </p>
                </div>
              </div>

              {/* Circular spinning element */}
              <div className="col-span-3 row-span-3 flex items-center justify-center relative">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full absolute spin-slow" viewBox="0 0 100 100">
                    <path
                      id="heroCircle"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="transparent" />
                    
                    <text
                      fontSize="9.5"
                      fontFamily="var(--font-display)"
                      fontWeight="600"
                      fill="var(--color-primary-dark)"
                      letterSpacing="2">
                      
                      <textPath href="#heroCircle">
                        ✦ Girls PG Jaipur ✦ Safe &amp; Sunny ✦
                      </textPath>
                    </text>
                  </svg>
                  <a
                    href="#rooms"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 z-10"
                    style={{ background: 'var(--color-primary)', boxShadow: '0 4px 20px rgba(232,165,152,0.45)' }}>
                    
                    <Icon name="ArrowUpRightIcon" size={20} style={{ color: 'white' }} />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating availability card */}
            <div
              className="absolute top-[35%] right-[-16px] lg:right-[-20px] glass-card p-4 rounded-2xl w-52 shadow-pink-lg float-anim"
              style={{ border: '1px solid rgba(232,165,152,0.3)' }}>
              
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-display)' }}>
                  
                  Room Availability
                </span>
                <Icon name="EllipsisHorizontalIcon" size={16} style={{ color: 'var(--color-fg-subtle)' }} />
              </div>
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--color-primary-light)' }}>
                  
                  <Icon name="HomeIcon" size={18} style={{ color: 'var(--color-primary-dark)' }} />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
                    
                    Twin Sharing
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                    
                    2 rooms left
                  </p>
                </div>
              </div>
              <div
                className="flex items-center justify-between p-2.5 rounded-xl"
                style={{ background: 'rgba(232,165,152,0.1)', border: '1px solid rgba(232,165,152,0.2)' }}>
                
                <span
                  className="text-xs"
                  style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                  
                  From
                </span>
                <span
                  className="text-sm font-bold"
                  style={{ color: 'var(--color-primary-dark)', fontFamily: 'var(--font-display)' }}>
                  
                  ₹13,000/mo
                </span>
              </div>
              <div
                className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-lg w-fit"
                style={{
                  background: 'rgba(34,197,94,0.1)',
                  color: '#16a34a',
                  fontFamily: 'var(--font-display)'
                }}>
                
                <Icon name="CheckCircleIcon" size={12} />
                Available Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}