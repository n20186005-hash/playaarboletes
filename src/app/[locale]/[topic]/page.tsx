import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import { topics, getTopic } from '@/data/topics';
import { getBaseUrl } from '@/lib/env';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopicPage from '@/components/TopicPage';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    topics.map((t) => ({ locale, topic: t.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;
  const t = getTopic(topic);
  if (!t) return {};
  const c = t.content[locale as Locale];
  if (!c) return {};

  const baseUrl = getBaseUrl();
  const selfUrl = `${baseUrl}/${locale}/${topic}`;
  const esUrl = `${baseUrl}/es/${topic}`;
  const enUrl = `${baseUrl}/en/${topic}`;
  const zhUrl = `${baseUrl}/zh/${topic}`;

  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        'es-CO': esUrl,
        'en': enUrl,
        'zh': zhUrl,
        'x-default': esUrl,
      } as Record<string, string>,
    },
  };
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic } = await params;
  setRequestLocale(locale);

  const t = getTopic(topic);
  if (!t) notFound();
  const c = t.content[locale as Locale];
  if (!c) notFound();

  const baseUrl = getBaseUrl();
  const selfUrl = `${baseUrl}/${locale}/${topic}`;

  return (
    <>
      <Header />
      <main className="pt-16">
        <TopicPage topic={t} locale={locale as Locale} baseUrl={baseUrl} selfUrl={selfUrl} />
      </main>
      <Footer />
    </>
  );
}
