'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    roomType: 'twin',
  });
  const [submitted, setSubmitted] = useState(false);

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

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => {
      el.classList.add('reveal-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler — connect to backend/form service here
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
      style={{ background: 'linear-gradient(160deg, #FFF0ED 0%, #FFFAF8 60%, #FFF5E6 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 scroll-reveal">
          <span className="section-label mb-4">
            <Icon name="PhoneIcon" size={13} />
            Contact Us
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-4 mb-3 leading-tight"
            style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
          >
            Ready to Call This{' '}
            <span className="gradient-text">Home?</span>
          </h2>
          <p
            className="text-base max-w-lg mx-auto mb-2"
            style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
          >
            Limited rooms available — book your visit today!
          </p>
          <p
            className="text-sm font-semibold"
            style={{ color: 'var(--color-primary-dark)', fontFamily: 'var(--font-display)' }}
          >
            🌸 Only 2 rooms left for April 2026
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 scroll-reveal">
            <div
              className="rounded-3xl p-7 h-full"
              style={{
                background: 'white',
                border: '1px solid rgba(232,165,152,0.2)',
                boxShadow: '0 4px 24px rgba(232,165,152,0.1)',
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
              >
                Get in Touch
              </h3>

              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: 'PhoneIcon',
                    label: 'Call Us',
                    value: '+917073054354',
                    href: 'tel:+917073054354',
                    color: '#FADADD',
                    iconColor: '#C97B6E',
                  },
                  {
                    icon: 'EnvelopeIcon',
                    label: 'Email Us',
                    value: 'hello@girlspgjaipur.com',
                    href: 'mailto:hello@girlspgjaipur.com',
                    color: '#E6F0FF',
                    iconColor: '#3B82F6',
                  },
                  {
                    icon: 'MapPinIcon',
                    label: 'Visit Us',
                    value: 'Vaishali Nagar, Jaipur, Rajasthan',
                    href: 'google.com/maps/place/T.T.WEST+PARK-33+HEERA+NAGAR+A/@26.9069168,75.7374557,14z/data=!4m6!3m5!1s0x396db4be0ac157d7:0x1e721093cb275008!8m2!3d26.8952688!4d75.7358181!16s%2Fg%2F11cm43655m?hl=en&entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D',
                    color: '#FFE5B4',
                    iconColor: '#D97706',
                  },
                  {
                    icon: 'ClockIcon',
                    label: 'Visit Hours',
                    value: 'Mon–Sat: 10 AM – 6 PM',
                    href: '#',
                    color: '#F5F5DC',
                    iconColor: '#7C3AED',
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: item.color }}
                    >
                      <Icon name={item.icon as 'HomeIcon'} size={18} style={{ color: item.iconColor }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-display)' }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-body)' }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Action buttons */}
              <div className="space-y-3">
                <a
                  href="https://wa.me/917073054354?text=Hi!%20I%27m%20interested%20in%20GirlsPgJaipur.%20Can%20I%20schedule%20a%20visit%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    background: '#25D366',
                    color: 'white',
                    fontFamily: 'var(--font-display)',
                    boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+917073054354"
                  className="w-full btn-secondary justify-center"
                >
                  <Icon name="PhoneIcon" size={17} />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 scroll-reveal delay-200">
            <div
              className="rounded-3xl p-7 sm:p-8"
              style={{
                background: 'white',
                border: '1px solid rgba(232,165,152,0.2)',
                boxShadow: '0 4px 24px rgba(232,165,152,0.1)',
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'var(--color-primary-light)' }}
                  >
                    <Icon name="CheckCircleIcon" size={32} style={{ color: 'var(--color-primary-dark)' }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                  >
                    Request Sent! 🌸
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    We'll get back to you within 24 hours to confirm your visit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary mt-6 text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="text-xl font-bold mb-6"
                    style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                  >
                    Book a Visit
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-display)' }}
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Priya Sharma"
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-display)' }}
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+917073054354"
                          className="form-input"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-display)' }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="priya@email.com"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-display)' }}
                      >
                        Interested Room Type
                      </label>
                      <select
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        className="form-input appearance-none"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="twin">Twin Sharing — ₹13,000/month</option>
                        <option value="single">Single Room — ₹20,000/month</option>
                        <option value="both">Show me both options</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-display)' }}
                      >
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}onChange={handleChange}
                        placeholder="Any questions or preferred visit date?"
                        rows={3}
                        className="form-input"
                        style={{ resize: 'none' }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center text-base py-4"
                    >
                      <Icon name="CalendarDaysIcon" size={19} />
                      Book a Visit
                    </button>

                    <p
                      className="text-xs text-center"
                      style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-body)' }}
                    >
                      We'll confirm your visit within 24 hours. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}