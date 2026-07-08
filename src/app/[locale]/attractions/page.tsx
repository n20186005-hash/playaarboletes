import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NearbyExplorations from '@/components/NearbyExplorations';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'attractions' });
  return { title: t('title'), description: t('intro') };
}

export default async function AttractionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="pt-16">
        <NearbyExplorations excludeHub={false} />
      </main>
      <Footer />
    </>
  );
}
