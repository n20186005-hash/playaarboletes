import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['zh', 'en', 'es'],
  // Spanish (es-CO) is the primary SEO market for this Colombian beach.
  defaultLocale: 'es',
  localeDetection: false,
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
    '/attractions': '/attractions',
    '/attractions/[slug]': '/attractions/[slug]',
    '/playas-de-arboletes': '/playas-de-arboletes',
    '/fotos': '/fotos',
    '/castillo-de-arboletes': '/castillo-de-arboletes',
    '/como-llegar': '/como-llegar',
    '/volcan-de-lodo': '/volcan-de-lodo',
    '/playas-cerca-de-medellin': '/playas-cerca-de-medellin',
  },
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
