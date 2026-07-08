'use client';

import { useTranslations } from 'next-intl';

export default function BasicInfo() {
  const t = useTranslations('basicInfo');
  const facts = t.raw('facts') as Array<{ icon: string; label: string; value: string }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, i) => (
            <InfoCard key={i} title={fact.label} value={fact.value} icon={fact.icon} />
          ))}
          <div className="md:col-span-3">
            <InfoCard title={t('address')} value={t('addressValue')} icon="📌" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value, icon }: { title: string; value: string; icon?: string }) {
  return (
    <div
      className="rounded-xl p-5 flex items-start gap-4 transition-transform hover:-translate-y-1 hover:shadow-md"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      {icon && <div className="text-2xl mt-1">{icon}</div>}
      <div>
        <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>{title}</p>
        <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{value}</p>
      </div>
    </div>
  );
}
