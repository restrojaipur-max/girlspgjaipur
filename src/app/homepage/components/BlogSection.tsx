'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { blogPosts } from '@/data/blog';

export default function BlogSection() {
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
      id="blog"
      ref={sectionRef}
      className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
      style={{ background: 'var(--color-bg)' }}>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12 scroll-reveal">
          <div>
            <span className="section-label mb-4">
              <Icon name="BookOpenIcon" size={13} />
              Blog
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-4 leading-tight"
              style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
              
              Tips for Your{' '}
              <span className="gradient-text">PG Life</span>
            </h2>
          </div>
          <Link
            href="/blog/diy-room-decor-budget-pg"
            className="text-sm font-medium flex items-center gap-1.5 group self-start sm:self-auto underline-link"
            style={{ color: 'var(--color-primary-dark)', fontFamily: 'var(--font-display)' }}>
            
            View all posts
            <Icon
              name="ArrowRightIcon"
              size={15}
              className="group-hover:translate-x-1 transition-transform" />
            
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts?.map((post, i) =>
          <article
            key={post?.slug}
            className={`scroll-reveal delay-${(i + 1) * 150} blog-card`}>
            
              {/* Image */}
              <div className="h-52 sm:h-60 relative overflow-hidden">
                <AppImage
                src={post?.image}
                alt={post?.imageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105" />
              
                <div className="absolute top-4 left-4">
                  <span
                  className="px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    color: 'var(--color-primary-dark)',
                    fontFamily: 'var(--font-display)'
                  }}>
                  
                    {post?.emoji} {post?.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                  className="text-xs"
                  style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-body)' }}>
                  
                    {post?.date}
                  </span>
                  <span style={{ color: 'var(--color-fg-subtle)' }}>·</span>
                  <span
                  className="text-xs"
                  style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-body)' }}>
                  
                    {post?.readTime}
                  </span>
                </div>

                <h3
                className="text-lg font-bold mb-2 leading-snug"
                style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
                
                  {post?.title}
                </h3>

                <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                
                  {post?.excerpt}
                </p>

                {/* Tips tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {post?.tips?.map((tip) =>
                <span
                  key={tip}
                  className="px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'var(--color-primary-light)',
                    color: 'var(--color-primary-dark)',
                    fontFamily: 'var(--font-display)'
                  }}>
                  
                      {tip}
                    </span>
                )}
                </div>

                <Link
                  href={`/blog/${post?.slug}`}
                  className="flex items-center gap-1.5 text-sm font-semibold group"
                  style={{ color: 'var(--color-primary-dark)', fontFamily: 'var(--font-display)' }}>
                
                  Read Full Article
                  <Icon
                  name="ArrowRightIcon"
                  size={15}
                  className="group-hover:translate-x-1 transition-transform" />
                
                </Link>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}