import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing, Link } from '@/i18n/routing';
import { attractions } from '@/data/attractions';
import type { Locale } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    attractions
      .filter((a) => !a.hub)
      .map((a) => ({ locale, slug: a.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const attr = attractions.find((a) => a.slug === slug && !a.hub);
  if (!attr) return {};
  const c = attr.content[locale as Locale];
  return { title: c.name, description: c.desc };
}

export default async function AttractionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const attr = attractions.find((a) => a.slug === slug && !a.hub);
  if (!attr) notFound();
  const c = attr.content[locale as Locale];
  const t = await getTranslations({ locale, namespace: 'attractions' });

  const related = attractions.filter((a) => !a.hub && a.slug !== slug);

  return (
    <>
      <Header />
      <main className="pt-16">
        <article className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/attractions"
              className="text-sm font-medium"
              style={{ color: 'var(--accent)' }}
            >
              {t('backToList')}
            </Link>

            <h1
              className="font-display text-3xl sm:text-4xl font-semibold mt-4 mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {c.name}
            </h1>
            <p className="text-sm font-medium mb-6" style={{ color: 'var(--accent)' }}>
              {c.region}
            </p>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              {c.intro}
            </p>
            {c.source && (
              <p className="text-xs leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>
                {c.source}
              </p>
            )}

            <h2
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('relatedTitle')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((a) => {
                const rc = a.content[locale as Locale];
                return (
                  <Link
                    key={a.slug}
                    href={{ pathname: '/attractions/[slug]' as const, params: { slug: a.slug } }}
                    className="block rounded-xl p-5 transition-transform hover:-translate-y-1"
                    style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                  >
                    <h3 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                      {rc.name}
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {rc.region}
                    </p>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10">
              <Link href="/" className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                {t('backToHub')}
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
