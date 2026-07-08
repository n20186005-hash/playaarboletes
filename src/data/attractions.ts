import type { Locale } from '@/i18n/routing';

export type AttractionContent = {
  name: string;
  region: string;
  desc: string;
  intro: string;
  source?: string;
};

export type Attraction = {
  slug: string;
  /** hub = the current single-page attraction (Playa Arboletes itself) */
  hub?: boolean;
  content: Record<Locale, AttractionContent>;
};

/**
 * Single source of truth for the internal-link graph.
 * When an entity page exists, the UI activates the <a> automatically;
 * when it does not, the same component degrades to a static card.
 * Content here is SEED data — replace via RAG-retrieved sources before scaling.
 */
export const attractions: Attraction[] = [
  {
    slug: 'playa-arboletes',
    hub: true,
    content: {
      zh: {
        name: 'Playa Arboletes',
        region: '🌋 本页核心景点',
        desc: '加勒比海岸的地理奇观——天然泥火山与湛蓝大海在此交汇。',
        intro:
          'Playa Arboletes 是哥伦比亚安蒂奥基亚省阿沃莱特斯的海滨奇观，以天然泥火山与加勒比海共存闻名，是这一带地理探索的起点。',
        source: '引用说明：综合自哥伦比亚地质局 (SGC) 与 CORPOURABA 区域环保资料。',
      },
      en: {
        name: 'Playa Arboletes',
        region: '🌋 The featured attraction',
        desc: 'A Caribbean geographic wonder — a natural mud volcano meets the blue sea.',
        intro:
          'Playa Arboletes is a coastal wonder in Arboletes, Antioquia, Colombia, famed for its natural mud volcano coexisting with the Caribbean Sea — the starting point of this geographic exploration.',
        source: 'Source: Colombian Geological Service (SGC) and CORPOURABA environmental records.',
      },
      es: {
        name: 'Playa Arboletes',
        region: '🌋 La atracción principal',
        desc: 'Una maravilla geográfica del Caribe: un volcán de lodo natural encuentra el mar azul.',
        intro:
          'Playa Arboletes es una maravilla costera en Arboletes, Antioquia, Colombia, famosa por su volcán de lodo natural conviviendo con el Mar Caribe; el punto de partida de esta exploración geográfica.',
        source: 'Fuente: Servicio Geológico Colombiano (SGC) y registros ambientales de CORPOURABA.',
      },
    },
  },
  {
    slug: 'monteria',
    content: {
      zh: {
        name: '蒙特里亚 (Montería)',
        region: '🚗 东北约 80 公里 · 最近航空门户',
        desc: '被誉为“世界树木之城”的省会，坐落于辛苏莱河（Sinú）畔，是抵达阿沃莱特斯最近的航空枢纽（洛斯加尔松机场 MTR 所在地）。',
        intro:
          '蒙特里亚（Montería）是哥伦比亚科尔多瓦省（Córdoba）省会，坐落于辛苏莱河（Río Sinú）畔，素有“世界树木之城”之称。作为抵达阿沃莱特斯最近的航空门户，洛斯加尔松机场（Aeropuerto Los Garzones, MTR）即位于此，是多数旅客飞抵后的中转起点。',
        source: '引用说明：综合自维基百科 / Wikidata 与蒙特里亚市政府（Alcaldía de Montería）公开资料。',
      },
      en: {
        name: 'Montería',
        region: '🚗 ~80 km northeast · nearest air gateway',
        desc: "The provincial capital on the Sinú River, known as the 'City of Trees' and home to Los Garzones Airport (MTR) — the nearest air gateway to Arboletes.",
        intro:
          "Montería is the capital of Córdoba department, set on the Río Sinú and known as the 'City of Trees.' It is the nearest air gateway to Arboletes and home to Los Garzones Airport (MTR), the usual transfer point for most travelers flying in.",
        source: 'Source: Wikipedia / Wikidata and the Alcaldía de Montería public records.',
      },
      es: {
        name: 'Montería',
        region: '🚗 ~80 km al noreste · puerta aérea más cercana',
        desc: "Capital provincial a orillas del río Sinú, conocida como la 'Ciudad de los Árboles' y sede del Aeropuerto Los Garzones (MTR), la puerta aérea más cercana a Arboletes.",
        intro:
          "Montería es la capital del departamento de Córdoba, sobre el río Sinú, conocida como la 'Ciudad de los Árboles'. Es la puerta aérea más cercana a Arboletes y sede del Aeropuerto Los Garzones (MTR), el punto de transbordo habitual para quienes llegan en avión.",
        source: 'Fuente: Wikipedia / Wikidata y registros públicos de la Alcaldía de Montería.',
      },
    },
  },
  {
    slug: 'golfo-de-uraba',
    content: {
      zh: {
        name: '乌拉巴湾 (Golfo de Urabá)',
        region: '🌊 北侧加勒比海口',
        desc: '一片深入陆地的半封闭海湾，是太平洋与大西洋生物迁徙的过渡带，沿岸红树林与潟湖孕育丰富的幼年鱼类与候鸟。',
        intro:
          '乌拉巴湾（Golfo de Urabá）是加勒比海的一处半封闭海湾，位于哥伦比亚西北端、巴拿马地峡南缘，是太平洋与大西洋生物迁徙的过渡带。沿岸红树林与潟湖孕育丰富的幼年鱼类与候鸟，被视为观察加勒比生态门户的天然课堂。',
        source: '引用说明：综合自维基百科 / Wikidata 与 CORPOURABA 区域环保资料。',
      },
      en: {
        name: 'Gulf of Urabá',
        region: '🌊 northern Caribbean mouth',
        desc: 'A semi-enclosed bay cutting deep into the land, a transition zone between Pacific and Atlantic migrations, rich in mangroves and juvenile fish.',
        intro:
          'The Gulf of Urabá is a semi-enclosed bay on the Caribbean, at Colombia\'s northwest tip near the Panama isthmus — a transition zone between Pacific and Atlantic migrations. Its mangroves and lagoons nurture juvenile fish and migratory birds, a natural classroom for observing the Caribbean ecological gateway.',
        source: 'Source: Wikipedia / Wikidata and CORPOURABA environmental records.',
      },
      es: {
        name: 'Golfo de Urabá',
        region: '🌊 boca caribeña norte',
        desc: 'Una bahía semicerrada que penetra en tierra, zona de transición entre las migraciones del Pacífico y el Atlántico, rica en manglares y peces juveniles.',
        intro:
          'El Golfo de Urabá es una bahía semicerrada del Caribe, en el extremo noroccidental de Colombia junto al istmo de Panamá; zona de transición entre migraciones del Pacífico y el Atlántico. Sus manglares y lagunas alimentan peces juveniles y aves migratorias, un aula natural para observar la puerta ecológica del Caribe.',
        source: 'Fuente: Wikipedia / Wikidata y registros ambientales de CORPOURABA.',
      },
    },
  },
  {
    slug: 'turbo',
    content: {
      zh: {
        name: '图尔沃 (Turbó)',
        region: '🚌 西北约 1.5 小时车程',
        desc: '乌拉巴地区腹地，连接哥伦比亚与巴拿马地峡的生态过渡带，保留大片低地热带雨林，是观察濒危物种的边陲秘境。',
        intro:
          '图尔沃（Turbó）是安蒂奥基亚省乌拉巴（Urabá）次区的自治市，地处连接哥伦比亚与巴拿马地峡的生态过渡带，周边保留大片低地热带雨林，是观察美洲豹、貘等濒危物种与原始原住民文化的边陲秘境。',
        source: '引用说明：综合自维基百科 / Wikidata 与安蒂奥基亚省政府（Gobernación de Antioquia）公开资料。',
      },
      en: {
        name: 'Turbó',
        region: '🚌 ~1.5 h northwest by road',
        desc: 'The hinterland of the Urabá region, an ecological transition belt to the Panama isthmus, with large tracts of lowland rainforest.',
        intro:
          'Turbó is a municipality in Antioquia\'s Urabá subregion, on the ecological transition belt linking Colombia with the Panama isthmus. Large tracts of lowland tropical rainforest remain here — a frontier for spotting endangered species such as jaguars and tapirs, and for experiencing living Indigenous cultures.',
        source: 'Source: Wikipedia / Wikidata and the Gobernación de Antioquia public records.',
      },
      es: {
        name: 'Turbó',
        region: '🚌 ~1.5 h al noroeste por carretera',
        desc: 'La hinterland de la región del Urabá, un cinturón de transición ecológica hacia el istmo de Panamá, con grandes extensiones de selva tropical de tierras bajas.',
        intro:
          'Turbó es un municipio de la subregión del Urabá en Antioquia, en el cinturón de transición ecológica que conecta Colombia con el istmo de Panamá. Grandes extensiones de selva tropical de tierras bajas persisten aquí: un frente para avistar especies en peligro como jaguares y tapires, y para vivir culturas indígenas vivas.',
        source: 'Fuente: Wikipedia / Wikidata y registros públicos de la Gobernación de Antioquia.',
      },
    },
  },
  {
    slug: 'playa-juan',
    content: {
      zh: {
        name: '阿沃莱特斯其他海岸 (Playa Juan 等)',
        region: '🏖️ 镇内步行/短驱可达',
        desc: '除主海滩外，阿沃莱特斯镇沿线还分布着数处更静谧的小海湾与礁岩潮间带，适合赶海、观鸟与欣赏少有人迹的加勒比日落。',
        intro:
          '除主海滩外，阿沃莱特斯镇沿线还分布着数处更静谧的小海湾与礁岩潮间带（当地人称 Playa Juan 等），适合赶海、观鸟与欣赏少有人迹的加勒比日落。',
        source: '引用说明：当地旅游资讯（阿沃莱特斯市政府）。',
      },
      en: {
        name: 'Other Arboletes shores (Playa Juan, etc.)',
        region: '🏖️ walk or short drive within town',
        desc: 'Beyond the main beach, Arboletes stretches along several quieter coves and rocky intertidal zones, ideal for beachcombing and birdwatching.',
        intro:
          'Beyond the main beach, Arboletes stretches along several quieter coves and rocky intertidal zones (locally called Playa Juan and others), ideal for beachcombing, birdwatching, and solitary Caribbean sunsets.',
        source: 'Source: Local tourism information (Alcaldía de Arboletes).',
      },
      es: {
        name: 'Otras costas de Arboletes (Playa Juan, etc.)',
        region: '🏖️ a pie o corto trayecto en el pueblo',
        desc: 'Más allá de la playa principal, Arboletes se extiende junto a varias caletas más tranquilas y zonas intermareales rocosas, ideales para recolección en la orilla.',
        intro:
          'Más allá de la playa principal, Arboletes se extiende junto a varias caletas más tranquilas y zonas intermareales rocosas (localmente Playa Juan y otras), ideales para recolección en la orilla, observación de aves y atardeceres caribeños solitarios.',
        source: 'Fuente: Información turística local (Alcaldía de Arboletes).',
      },
    },
  },
];
