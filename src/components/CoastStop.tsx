import stops from '@/data/coastStops.json';
import type { Locale } from '@/i18n/routing';
import type {ReactNode} from 'react';

const labels = {
  es: ['Explorar', 'Acerca de', 'Consejos para la visita', 'Rasgos del lugar', 'Información básica', 'Nombre local', 'Ubicación', 'Tipo y gestión', 'Tiempo sugerido en el lugar', 'Condiciones de acceso', 'Horario de apertura', 'Entradas y gastos', 'Cómo llegar', 'Paisaje y vida local', 'Ruta a pie y precauciones', 'Dónde hacer fotografías', 'Dónde alojarse', 'Fotografía del lugar', 'Opiniones de visitantes', 'Guía de navegación', 'Preguntas frecuentes', 'Consultar opiniones en Google Maps', 'Abrir el destino en Google Maps', 'Fuente consultada', 'Volver al directorio', 'minutos, sin traslados', 'Fuente de la fotografía'],
  en: ['Explore', 'About', 'Visit advice', 'Features to notice', 'Basic information', 'Local name', 'Location', 'Type and management', 'Suggested time on site', 'Access conditions', 'Opening hours', 'Admission and costs', 'Getting there', 'Landscape and local life', 'Walking route and visitor notes', 'Photography viewpoints', 'Where to stay', 'Site photograph', 'Visitor reviews', 'Navigation guide', 'Visitor questions', 'Read reviews on Google Maps', 'Open the destination in Google Maps', 'Source checked', 'Back to the directory', 'minutes, excluding transfers', 'Photograph source'],
  zh: ['探索', '关于', '游览建议', '景区特色', '基础信息', '当地名称', '地区与地址', '类型与管理', '建议现场停留', '到访条件', '开放时间', '门票及费用', '交通方式', '景观与地方生活', '步行路线与游览须知', '拍照机位', '住宿建议', '实景照片', '游客评价', '交通指南', '游客常见问题', '去 Google 地图查看当前评价', '在 Google 地图导航', '资料核对日期', '返回周边目录', '分钟，不含接驳', '照片来源'],
};

const lodging = {
  Necoclí: {
    es: 'El centro de Necoclí facilita combinar mercado, malecón y salida por carretera. Dormir en Arboletes permite conservar una base junto a su playa; reserva el traslado de ida y vuelta hasta el punto de inicio.',
    en: 'Central Necoclí suits a trip combining the market, waterfront and a road departure. Stay in Arboletes to keep a beach base there and arrange return transport to the starting point.',
    zh: '住内科克利中心，适合同时逛市场、滨海步道，再接公路行程。若以阿沃莱特斯海滩为住宿基地，先约好到起点及回程的接驳。'},
  Montería: {
    es:'El centro de Montería facilita caminar a la ronda del Sinú. El norte conviene para cenar en Pasaje del Sol; desde allí organiza el traslado al centro o al aeropuerto según tu salida.',
    en:'Stay in central Montería for a walk to the Sinú riverfront. The northern district suits evenings in Pasaje del Sol. Arrange the separate ride to the centre or airport from there.',
    zh:'住蒙特里亚中心方便步行去锡努河滨。以太阳巷的晚餐和音乐为主可住北区，从北区去市中心或机场另约车辆。'},
  Turbo: {
    es:'El centro de Turbo conviene para acudir al embarcadero confirmado por la mañana. Necoclí funciona como base de playa en la orilla oriental; prevé un traslado por carretera si tu barco sale de Turbo.',
    en:'Central Turbo suits a morning departure from a confirmed landing. Necoclí is a beach base on the east shore. Allow for road transport if your boat leaves from Turbo.',
    zh:'如次晨要到已确认的码头登船，住宿可选图尔博中心。内科克利适合作东岸海滩基地；若船从图尔博开，须另计公路接驳。'},
  Lorica: {
    es:'El centro de Lorica permite ir andando entre la plaza, el mercado y el río. Montería conviene si continúas por su aeropuerto; acuerda el traslado de regreso desde Lorica.',
    en:'Central Lorica puts the square, market and river within the same walking outing. Montería suits an onward flight. Arrange the return road journey from Lorica.',
    zh:'住洛里卡中心，可以把广场、市场和河岸连成步行行程。若要接续航班，可住蒙特里亚，提前安排从洛里卡返回的公路接驳。'},
  Arboletes: {
    es:'El casco urbano de Arboletes permite combinar playa y servicios. Un alojamiento en el corredor costero puede acortar el desplazamiento al sector elegido; confirma el acceso exacto y el regreso antes de reservar.',
    en:'Central Arboletes combines beach access with town services. A stay on the coastal road may shorten the trip to your chosen sector. Check the exact entrance and return arrangements before booking.',
    zh:'住阿沃莱特斯城区方便兼顾海滩和城镇服务。滨海公路一带的住处可能更接近目标区域，预订前须核实实际入口及返程接驳。'}
};

function Section({id,title,children}:{id:string;title:string;children:ReactNode}) {
  return <section id={id} className="space-y-2"><h2 className="font-display text-xl sm:text-2xl font-semibold">{title}</h2>{children}</section>;
}

export default function CoastStop({slug, locale, topic = false}: {slug: string; locale: Locale; topic?: boolean}) {
  const p = stops.find(place => place.slug === slug);
  if (!p) return null;
  const c = p.copy[locale];
  const [explore,about,advice,features,basic,name,location,kind,time,conditions,hours,fees,arrive,discover,walk,photo,stay,gallery,reviews,directions,faq,reviewLink,mapLink,source,directory,minutes,imageSource] = labels[locale];
  const path = topic ? slug : 'attractions/' + slug;
  const mapHref = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(p.map);
  const stayTown = p.town.includes('Lorica') ? 'Lorica' : p.town.split(',')[0] as keyof typeof lodging;
  const facts = [[name,p.copy.es.name],[location,p.map],[kind,c.kind+' · '+p.operator],[time,p.duration+' '+minutes],[conditions,c.access]];
  return <div className="mb-10 space-y-8" style={{color:'var(--text-primary)'}}>
    <div className="space-y-2"><p className="font-medium">{c.kind} · {p.town}</p>
      <p>{c.look}</p>
      <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium" aria-label={{es:'Guía e idiomas',en:'Guide and languages',zh:'指南与语言'}[locale]}>
        <a className="underline" href="#hours">{hours}</a><a className="underline" href={mapHref}>{mapLink}</a><a className="underline" href="#reviews">{reviews}</a>
        {(['es','en','zh'] as const).map(lang => <a key={lang} href={'/'+lang+'/'+path} hrefLang={lang} aria-current={lang === locale ? 'page' : undefined} className="underline">{{es:'Español',en:'English',zh:'中文'}[lang]}</a>)}
      </nav></div>
    <Section id="explore" title={explore+' '+c.name}><p>{c.route}</p>
      <h3 className="font-display text-lg font-semibold">{about} {c.name}</h3><p>{p.operator} · {c.access}</p><p>{c.body.split(/(?<=[。.!?])\s*/u)[0]}</p>
      <h3 className="font-semibold">{advice}</h3><p>{c.legs[0]} → {c.legs[1]} · {p.duration} {minutes}.</p>
      <h3 className="font-semibold">{features}</h3><p>{c.look}</p>
    </Section>
    <Section id="basics" title={basic}><dl className="divide-y" style={{borderColor:'var(--border-color)'}}>{facts.map(([k,v])=><div key={k} className="py-2 sm:grid sm:grid-cols-3 sm:gap-4"><dt className="font-semibold">{k}</dt><dd className="sm:col-span-2">{v}</dd></div>)}</dl></Section>
    <Section id="hours" title={hours}><p>{c.hours}</p></Section>
    <Section id="fees" title={fees}><p>{c.fees}</p></Section>
    <Section id="getting-there" title={arrive}><p>{p.town} → {c.legs[0]}</p><p>{c.route}</p></Section>
    <Section id="landscape" title={discover}><p>{c.body}</p></Section>
    <Section id="walk" title={walk}><ol className="list-decimal ps-6 space-y-1">{c.legs.map(leg=><li key={leg}>{leg}</li>)}</ol><p>{c.answer}</p></Section>
    <Section id="viewpoints" title={photo}><p>{c.photo}</p></Section>
    <Section id="lodging" title={stay}><p>{lodging[stayTown][locale]}</p><p>{c.legs[0]} → {c.legs[1]}</p></Section>
    <Section id="photograph" title={gallery}><figure>
      <img src={'/region/'+slug+'.webp'} alt={c.name+' · '+p.town} loading="lazy" className="w-full h-auto rounded-xl" />
      <figcaption className="text-sm mt-2">{c.name} · {p.town} · <a className="underline" href={p.imageSource}>{imageSource} · {p.credit}</a></figcaption>
    </figure></Section>
    <Section id="reviews" title={reviews}><a className="underline" href={mapHref}>{reviewLink} · {p.copy.es.name}</a></Section>
    <Section id="navigation" title={directions}><p>{p.map}</p><a className="font-semibold underline" href={mapHref}>{mapLink}</a></Section>
    {!topic && <Section id="faqs" title={faq}>{[[c.question,c.answer],[c.lookQuestion,c.look],[c.accessQuestion,c.access]].map(([q,a]) =>
      <details key={q} className="rounded-lg p-4 mb-2" style={{background:'var(--bg-tertiary)'}}><summary className="font-medium cursor-pointer">{q}</summary><p className="mt-2">{a}</p></details>)}</Section>}
    <p className="text-sm"><a className="underline" href={p.source}>{source} · {p.credit}</a> · 2026-11-24</p>
    <a className="underline" href={'/'+locale+'/attractions'}>{directory}</a>
  </div>;
}
