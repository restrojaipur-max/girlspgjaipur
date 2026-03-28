'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(232,165,152,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2.5 group"
            aria-label="GirlsPgJaipur home"
          >
            <AppLogo
              size={34}
              className="group-hover:scale-105 transition-transform duration-200"
            />
            <span
              className="font-display font-700 text-lg tracking-tight"
              style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)', fontWeight: 700 }}
            >
              GirlsPg<span style={{ color: 'var(--color-primary-dark)' }}>Jaipur</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="underline-link text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="btn-primary hidden sm:inline-flex text-sm py-2.5 px-5"
              style={{ borderRadius: '12px', fontSize: '14px', padding: '10px 20px' }}
            >
              Book a Visit
            </a>
            <button
              className="md:hidden p-2 rounded-xl transition-colors"
              style={{ color: 'var(--color-fg)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <Icon name="XMarkIcon" size={22} />
                : <Icon name="Bars3Icon" size={22} />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu md:hidden ${mobileOpen ? 'open' : ''}`}>
          <div
            className="pb-4 border-t"
            style={{ borderColor: 'rgba(232,165,152,0.2)' }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-3 px-2 text-sm font-medium transition-colors"
                style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="btn-primary mt-3 w-full justify-center"
              style={{ borderRadius: '12px', fontSize: '14px' }}
            >
              Book a Visit
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}