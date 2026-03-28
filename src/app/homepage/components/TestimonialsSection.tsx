'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
{
  name: 'Priya Sharma',
  role: 'Engineering Student, RTU Jaipur',
  avatar: "https://images.unsplash.com/photo-1716731348131-643b344bff30",
  text: "Moving to GirlsPgJaipur was the best decision I made. The sunlit rooms, warm atmosphere, and safety measures made my parents feel completely at ease. It truly feels like a second home.",
  rating: 5,
  duration: 'Living here for 8 months'
},
{
  name: 'Anjali Mehra',
  role: 'Software Engineer, Infosys Jaipur',
  avatar: "https://images.unsplash.com/photo-1562664348-cb222fdcfa86",
  text: "As a working professional, I needed a safe, peaceful place to come home to after long days. The modular kitchen, fast WiFi, and the amazing community of women here made it perfect.",
  rating: 5,
  duration: 'Living here for 14 months'
},
{
  name: 'Nidhi Agarwal',
  role: 'CA Student, ICAI Jaipur',
  avatar: "/assets/images/exterior.png",
  text: "The east-facing rooms with natural sunlight, the RO water, air purifier — everything is so well thought out. The caretaker is always available and the neighborhood is incredibly safe.",
  rating: 5,
  duration: 'Living here for 5 months'
}];


export default function TestimonialsSection() {
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
      { threshold: 0.08 }
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
      ref={sectionRef}
      className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
      style={{ background: 'linear-gradient(160deg, #FFF5F0 0%, #FFFAF8 100%)' }}>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 scroll-reveal">
          <span className="section-label mb-4">
            <Icon name="HeartIcon" size={13} />
            Resident Stories
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-4 mb-4"
            style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
            
            What Our Girls{' '}
            <span className="gradient-text">Love About Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials?.map((t, i) =>
          <div
            key={t?.name}
            className={`scroll-reveal delay-${(i + 1) * 150} testimonial-card hover-lift`}>
            
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t?.rating })?.map((_, s) =>
              <Icon key={s} name="StarIcon" size={14} variant="solid" style={{ color: 'var(--color-primary)' }} />
              )}
              </div>

              {/* Quote */}
              <p
              className="text-sm leading-relaxed mb-5 relative z-10"
              style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
              
                {t?.text}
              </p>

              {/* Person */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'rgba(232,165,152,0.2)' }}>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2" style={{ borderColor: 'var(--color-primary-light)' }}>
                  <AppImage
                  src={t?.avatar}
                  alt={`Photo of ${t?.name}, a happy GirlsPgJaipur resident`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover" />
                
                </div>
                <div>
                  <p
                  className="text-sm font-bold"
                  style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
                  
                    {t?.name}
                  </p>
                  <p
                  className="text-xs"
                  style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                  
                    {t?.role}
                  </p>
                </div>
                <span
                className="ml-auto text-xs px-2 py-1 rounded-full"
                style={{
                  background: 'var(--color-primary-light)',
                  color: 'var(--color-primary-dark)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '10px',
                  fontWeight: 600
                }}>
                
                  {t?.duration}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}