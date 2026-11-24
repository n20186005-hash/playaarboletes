import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // Keep static generation within the build worker's memory budget.
  experimental: { cpus: 1, staticGenerationMaxConcurrency: 2 },
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
    ],
  },
  // OpenNext + Cloudflare Workers 需要 standalone 产物（生成 .next/standalone）
  output: 'standalone',
  // 解决多lockfile警告
  outputFileTracingRoot: process.cwd(),
};

export default withNextIntl(nextConfig);
