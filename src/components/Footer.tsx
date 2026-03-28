import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer
      className="border-t pt-16 pb-8 px-5 sm:px-8 lg:px-12"
      style={{ borderColor: 'rgba(232,165,152,0.2)', backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
          {/* Left: Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <AppLogo size={36} />
              <span
                className="font-display font-bold text-lg"
                style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
              >
                GirlsPg<span style={{ color: 'var(--color-primary-dark)' }}>Jaipur</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
            >
              A safe, sunny, and peaceful home for girls in Jaipur. Fully furnished with modern amenities.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: 'instagram', href: '#', label: 'Instagram' },
                { icon: 'phone', href: 'tel:+917073054354', label: 'Phone' },
                { icon: 'envelope', href: 'mailto:hello@girlspgjaipur.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'var(--color-primary-light)',
                    color: 'var(--color-primary-dark)',
                  }}
                >
                  <Icon
                    name={
                      social.icon === 'instagram' ? 'CameraIcon' :
                      social.icon === 'phone' ? 'PhoneIcon' : 'EnvelopeIcon'
                    }
                    size={16}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-8 sm:gap-12">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-display)' }}
              >
                Quick Links
              </p>
              {['Home', 'Rooms', 'Amenities', 'Location', 'Blog'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm mb-2.5 underline-link transition-colors"
                  style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {link}
                </a>
              ))}
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-display)' }}
              >
                Contact
              </p>
              <div className="space-y-2.5">
                {[
                  { icon: 'MapPinIcon', text: 'Vaishali Nagar, Jaipur' },
                  { icon: 'PhoneIcon', text: '+917073054354' },
                  { icon: 'EnvelopeIcon', text: 'hello@girlspgjaipur.com' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <Icon name={item.icon as 'MapPinIcon'} size={14} className="flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                    <span
                      className="text-sm"
                      style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: 'rgba(232,165,152,0.15)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-body)' }}
          >
            © 2026 GirlsPgJaipur. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs underline-link"
                style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-body)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}