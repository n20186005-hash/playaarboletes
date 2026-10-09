'use client';

import { useTranslations, useLocale } from 'next-intl';

type Item = { slug: string; label: string; desc: string };

export default function TopicLinks() {
  const t = useTranslations('topicLinks');
  const locale = useLocale();
  const items = t.raw('items') as Item[];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
          {t('intro')}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <a
              key={item.slug}
              href={`/${locale}/${item.slug}`}
              className="block rounded-xl p-5 transition-transform hover:-translate-y-1"
              style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)', border: '1px solid var(--border-color)' }}
            >
              <h3 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                {item.label}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
