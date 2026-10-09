import type { Locale } from '@/i18n/routing';
import { topics, type Topic } from '@/data/topics';
import Gallery from './Gallery';

type Props = {
  topic: Topic;
  locale: Locale;
  baseUrl: string;
  selfUrl: string;
};

export default function TopicPage({ topic, locale, baseUrl, selfUrl }: Props) {
  const c = topic.content[locale];
  const related = topics.filter((t) => t.slug !== topic.slug);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Colombia', item: `${baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Antioquia', item: `${baseUrl}/` },
      { '@type': 'ListItem', position: 3, name: c.title, item: selfUrl },
    ],
  };

  return (
    <article className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto">
        <nav className="text-sm mb-4" style={{ color: 'var(--text-muted)' }} aria-label="Breadcrumb">
          <a href={`/${locale}`} style={{ color: 'var(--accent)' }}>
            Playa Arboletes
          </a>
          <span className="mx-2">/</span>
          <span>{c.title}</span>
        </nav>

        <h1
          className="font-display text-3xl sm:text-4xl font-semibold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          {c.title}
        </h1>
        <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          {c.description}
        </p>
        <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
          {c.intro}
        </p>

        {topic.showGallery && (
          <div className="mb-10">
            <Gallery />
          </div>
        )}

        <div className="space-y-8 mb-12">
          {c.sections.map((s) => (
            <section key={s.id}>
              <h2
                className="font-display text-xl sm:text-2xl font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {s.title}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {s.content}
              </p>
            </section>
          ))}
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2
            className="font-display text-xl sm:text-2xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            {c.faq.map((f, i) => (
              <details
                key={i}
                className="rounded-lg p-4"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
              >
                <summary className="font-medium cursor-pointer" style={{ color: 'var(--text-primary)' }}>
                  {f.q}
                </summary>
                <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related topics */}
        <section>
          <h2
            className="font-display text-xl sm:text-2xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Más guías de Playa Arboletes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((t) => (
              <a
                key={t.slug}
                href={`/${locale}/${t.slug}`}
                className="block rounded-xl p-5 transition-transform hover:-translate-y-1"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
              >
                <h3 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                  {t.content[locale].title}
                </h3>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {t.content[locale].description}
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </article>
  );
}
