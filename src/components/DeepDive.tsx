'use client';

import { useTranslations, useMessages } from 'next-intl';

type SubSection = {
  title: string;
  intro?: string;
  points?: string[];
  warning?: string;
  source?: string;
};

const ORDER: Array<{ key: 'geology' | 'heritage' | 'legends' | 'airport'; index: number }> = [
  { key: 'geology', index: 0 },
  { key: 'heritage', index: 1 },
  { key: 'legends', index: 2 },
  { key: 'airport', index: 3 },
];

export default function DeepDive() {
  const t = useTranslations('deepDive');
  const messages = useMessages() as any;
  const sections = messages?.deepDive as Record<
    'geology' | 'heritage' | 'legends' | 'airport',
    SubSection
  >;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-2"
          style={{ color: 'var(--accent)' }}
        >
          {t('eyebrow')}
        </p>

        <div className="space-y-16">
          {ORDER.map(({ key, index }) => {
            const section = sections[key];
            if (!section) return null;
            return (
              <article key={key}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: 'var(--accent)' }}
                  >
                    {index + 1}
                  </span>
                  <h2
                    className="font-display text-2xl sm:text-3xl font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />

                {section.warning && (
                  <div
                    className="mb-5 rounded-lg px-4 py-3 text-sm leading-relaxed"
                    style={{
                      background: 'var(--warning-bg, #fff7ed)',
                      border: '1px solid var(--warning-border, #fdba74)',
                      color: 'var(--warning-text, #9a3412)',
                    }}
                  >
                    {section.warning}
                  </div>
                )}

                {section.intro && (
                  <p
                    className="text-lg leading-relaxed mb-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {section.intro}
                  </p>
                )}

                {section.points && section.points.length > 0 && (
                  <div className="space-y-4">
                    {section.points.map((point, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-5 sm:p-6 leading-relaxed"
                        style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                      >
                        <p style={{ color: 'var(--text-secondary)' }}>{point}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.source && (
                  <p
                    className="mt-5 text-xs leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {section.source}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
