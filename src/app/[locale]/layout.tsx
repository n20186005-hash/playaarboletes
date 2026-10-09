import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { getBaseUrl, getAdsenseClientId } from '@/lib/env';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const baseUrl = getBaseUrl();

  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;
  const esUrl = `${baseUrl}/es`;

  let selfUrl = esUrl;
  if (locale === 'en') selfUrl = enUrl;
  else if (locale === 'zh') selfUrl = zhUrl;

  const localeMap: Record<string, string> = {
    'zh': 'zh_CN',
    'en': 'en_US',
    'es': 'es_CO',
  };

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        'es-CO': esUrl,
        'en': enUrl,
        'zh': zhUrl,
        'x-default': esUrl,
      } as Record<string, string>,
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: messages.header.siteName,
      locale: localeMap[locale] || 'es_CO',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const langMap: Record<string, string> = {
    'zh': 'zh-CN',
    'en': 'en',
    'es': 'es',
  };

  const baseUrl = getBaseUrl();

  const selfUrl =
    locale === 'en' ? `${baseUrl}/en` : locale === 'es' ? `${baseUrl}/es` : `${baseUrl}/zh`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        '@id': `${selfUrl}#attraction`,
        name: 'Playa Arboletes',
        description:
          'Playa Arboletes is a public Caribbean beach in Arboletes, Antioquia, Colombia, known for warm waters, fine sand and calm swimming. A nearby natural mud volcano (mud diapirism) sits a short walk from the shore. An independent, non-profit travel-information guide to the beach, how to get there, photos and what to do.',
        url: selfUrl,
        isAccessibleForFree: true,
        touristType: ['Beach Lovers', 'Ecotourism', 'Family Travel'],
        isPartOf: {
          '@type': 'Place',
          name: 'Arboletes, Antioquia, Colombia',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Arboletes',
            addressRegion: 'Antioquia',
            addressCountry: 'CO',
          },
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 8.865,
          longitude: -76.426,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Cl. 31 #3246',
          addressLocality: 'Arboletes',
          addressRegion: 'Antioquia',
          addressCountry: 'CO',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: 4.5,
          reviewCount: 6825,
          bestRating: 5,
          worstRating: 1,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${selfUrl}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is Playa Arboletes free to visit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Playa Arboletes is a public beach and free to access. Nearby private businesses — such as the castle-themed water park (Riviera del Sol) — set their own prices for pools, slides and stays. The natural mud-volcano rinse and any local washing services are priced on-site.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I get from Montería airport (MTR) to Playa Arboletes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Los Garzones Airport (MTR) in Montería is about 80 km away. Take an authorized taxi cooperative (≈ COP 120,000–160,000 / USD 30–40, 1.5–2h) or a Colectivo minibus (≈ COP 15,000–25,000 / USD 4–6) then a mototaxi to the beach. Roads are mostly flat and in good condition.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the natural mud volcano near Playa Arboletes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A short walk from the shore is a natural mud volcano formed by mud diapirism — deep gases and pressure push mineral-rich mud to the surface. Access, safety rules and open areas can change; always check current conditions and local guidance before visiting.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang={langMap[locale] || 'zh-CN'} suppressHydrationWarning>
      <head>
        <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${getAdsenseClientId()}`} crossOrigin="anonymous" />
        <meta name="google-adsense-account" content={getAdsenseClientId()} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Colombia",
                  "item": `${baseUrl}/`
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Antioquia",
                  "item": `${baseUrl}/`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Arboletes",
                  "item": selfUrl
                }
              ]
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
