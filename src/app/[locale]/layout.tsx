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

  let selfUrl = zhUrl;
  if (locale === 'en') selfUrl = enUrl;
  else if (locale === 'es') selfUrl = esUrl;

  const localeMap: Record<string, string> = {
    'zh': 'zh_CN',
    'en': 'en_US',
    'es': 'es_ES',
  };

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'es': esUrl,
        'x-default': enUrl,
      } as Record<string, string>,
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: messages.header.siteName,
      locale: localeMap[locale] || 'en_US',
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
          'A rare Caribbean geographic wonder in Colombia where a natural mud volcano (mud diapirism) meets the blue sea. A non-profit, in-depth guide to its geology, indigenous heritage and transport.',
        url: selfUrl,
        touristType: ['Geology Enthusiasts', 'Ecotourism', 'Educational Travel'],
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
      },
      {
        '@type': 'FAQPage',
        '@id': `${selfUrl}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the mud volcano at Playa Arboletes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It is a natural mud volcano formed by mud diapirism — deep gases and pressure push mineral-rich mud to the surface. The warm, sulfur- and mineral-rich mud is used for natural baths.',
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
            name: 'Is Playa Arboletes free to visit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The public beach is free. The mud-volcano rinse and water-park/resort services are priced on-site.',
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
                  "item": `${baseUrl}/`
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
