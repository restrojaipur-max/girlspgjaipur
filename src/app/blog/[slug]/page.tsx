import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from '@/data/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Article Not Found' };

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://girlspgjaipur.com';

  return {
    title: `${post.title} — GirlsPgJaipur Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
      url: `${baseUrl}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://girlspgjaipur.com';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: 'GirlsPgJaipur',
      url: baseUrl,
    },
    url: `${baseUrl}/blog/${post.slug}`,
    keywords: post.keywords.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/homepage` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/homepage#blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${baseUrl}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="pt-20" style={{ background: 'var(--color-bg)' }}>
        {/* Breadcrumb */}
        <div className="px-5 sm:px-8 lg:px-12 py-4 max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm flex-wrap" style={{ fontFamily: 'var(--font-body)' }}>
              <li>
                <Link
                  href="/homepage"
                  className="flex items-center gap-1 transition-colors hover:opacity-80"
                  style={{ color: 'var(--color-primary-dark)' }}
                >
                  <Icon name="HomeIcon" size={14} />
                  Home
                </Link>
              </li>
              <li style={{ color: 'var(--color-fg-subtle)' }}>
                <Icon name="ChevronRightIcon" size={14} />
              </li>
              <li>
                <Link
                  href="/homepage#blog"
                  className="transition-colors hover:opacity-80"
                  style={{ color: 'var(--color-primary-dark)' }}
                >
                  Blog
                </Link>
              </li>
              <li style={{ color: 'var(--color-fg-subtle)' }}>
                <Icon name="ChevronRightIcon" size={14} />
              </li>
              <li
                className="truncate max-w-[200px] sm:max-w-xs"
                style={{ color: 'var(--color-fg-muted)' }}
                aria-current="page"
              >
                {post.title}
              </li>
            </ol>
          </nav>
        </div>

        {/* Article */}
        <article className="px-5 sm:px-8 lg:px-12 max-w-4xl mx-auto pb-20">
          {/* Category + Meta */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="px-3 py-1.5 rounded-full text-xs font-bold"
              style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', fontFamily: 'var(--font-display)' }}
            >
              {post.emoji} {post.category}
            </span>
            <span className="text-xs" style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-body)' }}>
              {post.date}
            </span>
            <span style={{ color: 'var(--color-fg-subtle)' }}>·</span>
            <span className="text-xs" style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-body)' }}>
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
            style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
          >
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-8 pb-8" style={{ borderBottom: '1px solid rgba(232,165,152,0.2)' }}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{ background: 'var(--color-primary-light)' }}
            >
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}>
                {post.author}
              </p>
              <p className="text-xs" style={{ color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-body)' }}>
                {post.authorRole}
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-10">
            <AppImage src={post.image} alt={post.imageAlt} fill className="object-cover" />
          </div>

          {/* Article Content */}
          <div className="space-y-6">
            {post.content.map((section, i) => {
              if (section.type === 'paragraph') {
                return (
                  <p
                    key={i}
                    className="text-base leading-relaxed"
                    style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    {section.text}
                  </p>
                );
              }
              if (section.type === 'heading') {
                return (
                  <h2
                    key={i}
                    className="text-xl sm:text-2xl font-bold pt-4"
                    style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                  >
                    {section.text}
                  </h2>
                );
              }
              if (section.type === 'list') {
                return (
                  <ul key={i} className="space-y-2.5 pl-2">
                    {section.items?.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Icon
                          name="CheckCircleIcon"
                          size={16}
                          variant="solid"
                          style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 2 }}
                        />
                        <span className="text-sm" style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-body)' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === 'tip') {
                return (
                  <div
                    key={i}
                    className="px-5 py-4 rounded-2xl text-sm leading-relaxed"
                    style={{
                      background: 'var(--color-primary-light)',
                      color: 'var(--color-primary-dark)',
                      fontFamily: 'var(--font-body)',
                      border: '1px solid rgba(232,165,152,0.3)',
                    }}
                  >
                    {section.text}
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8" style={{ borderTop: '1px solid rgba(232,165,152,0.2)' }}>
            {post.tips.map((tip) => (
              <span
                key={tip}
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', fontFamily: 'var(--font-display)' }}
              >
                {tip}
              </span>
            ))}
          </div>

          {/* Back to Blog */}
          <div className="mt-10">
            <Link
              href="/homepage#blog"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: 'var(--color-primary-dark)', fontFamily: 'var(--font-display)' }}
            >
              <Icon name="ArrowLeftIcon" size={16} />
              Back to Blog
            </Link>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
              >
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group rounded-2xl overflow-hidden hover-lift"
                    style={{ background: 'white', border: '1px solid rgba(232,165,152,0.2)', display: 'block' }}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <AppImage
                        src={related.image}
                        alt={related.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span
                        className="text-xs font-bold"
                        style={{ color: 'var(--color-primary-dark)', fontFamily: 'var(--font-display)' }}
                      >
                        {related.emoji} {related.category}
                      </span>
                      <h3
                        className="text-sm font-bold mt-1 leading-snug"
                        style={{ color: 'var(--color-fg)', fontFamily: 'var(--font-display)' }}
                      >
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
