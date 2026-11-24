import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { attractions } from '@/data/attractions';
import type { Locale } from '@/i18n/routing';

type Props = {
  /** When true (default), the hub card (Playa Arboletes itself) is hidden. */
  excludeHub?: boolean;
};

export default async function NearbyExplorations({ excludeHub = true }: Props) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('nearby');
  const items = attractions.filter((a) => !(excludeHub && a.hub));

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-2"
          style={{ color: 'var(--accent)' }}
        >
          {t('eyebrow')}
        </p>
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <p
          className="text-lg leading-relaxed mb-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('intro')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {(['volcan-de-lodo','castillo-de-arboletes'] as const).map(slug => (
            <Link key={slug} href={('/'+slug) as '/volcan-de-lodo' | '/castillo-de-arboletes'} className="block rounded-2xl p-6" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>
              <h3 className="font-medium">{slug === 'volcan-de-lodo' ? {es:'Volcán de lodo de Arboletes',en:'Arboletes Mud Volcano',zh:'阿沃莱特斯泥火山'}[locale] : {es:'Castillo Riviera del Sol',en:'Riviera del Sol Castle Resort',zh:'太阳里维埃拉城堡度假区'}[locale]}</h3>
              <p className="text-sm mt-2">Arboletes · Antioquia</p>
            </Link>
          ))}
          {items.map((a) => {
            const c = a.content[locale];
            const href = a.hub
              ? { pathname: '/' as const }
              : { pathname: '/attractions/[slug]' as const, params: { slug: a.slug } };
            return (
              <Link
                key={a.slug}
                href={href}
                className="block rounded-2xl p-6 transition-transform hover:-translate-y-1"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
              >
                <h3
                  className="font-display text-xl font-semibold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {c.name}
                </h3>
                <p className="text-xs font-medium mb-3" style={{ color: 'var(--accent)' }}>
                  {c.region}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {c.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
