/**
 * Shared environment variable helpers.
 * All site-level URLs must be read dynamically from NEXT_PUBLIC_SITE_URL
 * to prevent hard-coded domain leaks across pSEO sites.
 */

export const getBaseUrl = () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url || url.trim() === '') {
    if (process.env.NODE_ENV === 'development') return 'http://localhost:3000';
    throw new Error(
      'NEXT_PUBLIC_SITE_URL environment variable is not set! ' +
      'Add it to .env.local (development) or your deployment environment variables.'
    );
  }
  return url.replace(/\/+$/, '');
};

export const getAdsenseClientId = () => {
  return process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-XXXXXXXXXX';
};
