import type { Locale } from '@/i18n/routing';

export type TopicSection = { id: string; title: string; content: string };
export type TopicFaq = { q: string; a: string };
export type TopicContent = {
  title: string;
  description: string;
  intro: string;
  sections: TopicSection[];
  faq: TopicFaq[];
};

export type Topic = {
  slug: string;
  /** When true, the on-page photo gallery (public/gallery) is rendered. */
  showGallery?: boolean;
  content: Record<Locale, TopicContent>;
};

export const topics: Topic[] = [
  {
    slug: 'playas-de-arboletes',
    content: {
      es: {
        title: 'Playas de Arboletes',
        description:
          'Las playas y caletas de Arboletes, Antioquia: aguas cálidas, arena fina y la playa pública principal junto a otras caletas más tranquilas.',
        intro:
          'Arboletes se extiende junto al Mar Caribe y reúne varias playas. La más conocida es Playa Arboletes, una playa pública con aguas cálidas y arena fina, ideal para el baño familiar y los atardeceres. Más allá de la playa principal, el pueblo cuenta con caletas más tranquilas y zonas rocosas para quienes buscan calma.',
        sections: [
          {
            id: 'playa-principal',
            title: 'Playa Arboletes (la playa principal)',
            content:
              'Es una playa pública y de acceso gratuito, con aguas cálidas y poca profundidad al inicio, lo que la hace cómoda para familias. Cuenta con restaurantes, baños y estacionamiento cercanos. El volcán de lodo natural queda a pocos pasos de la orilla.',
          },
          {
            id: 'caletas',
            title: 'Otras caletas y playas',
            content:
              'Hacia los extremos del pueblo hay caletas más tranquilas (localmente conocidas como Playa Juan y otras) con menos gente, ideales para caminar, observar aves y disfrutar de atardeceres sin multitudes.',
          },
          {
            id: 'servicios',
            title: 'Servicios en la playa',
            content:
              'En la zona pública suele haber puestos de comida, baños y estacionamiento. El parque acuático de temática de castillo (Riviera del Sol) es un negocio privado y tiene sus propias tarifas e instalaciones.',
          },
          {
            id: 'mejor-momento',
            title: 'Mejor momento para ir',
            content:
              'Las horas de la mañana y el atardecer son las más agradables y fotografiables. Al mediodía el sol es fuerte; lleva protector solar, sombrero y agua. Entre semana suele haber menos gente que los fines de semana.',
          },
        ],
        faq: [
          {
            q: '¿La playa de Arboletes es pública y gratuita?',
            a: 'Sí. Playa Arboletes es una playa pública y de acceso gratuito. Los negocios privados cercanos (como el parque acuático) tienen precios aparte.',
          },
          {
            q: '¿Se puede nadar?',
            a: 'El agua es cálida y suele ser tranquila cerca de la orilla, pero no hay socorrista fijo; mantente en zonas poco profundas y cuida a los niños y a quienes no saben nadar.',
          },
          {
            q: '¿Qué servicios hay en la playa?',
            a: 'Restaurantes y puestos de comida, baños y estacionamiento. El castillo acuático (Riviera del Sol) es privado y se paga aparte.',
          },
          {
            q: '¿Cuándo hay menos gente?',
            a: 'Entre semana y en las primeras horas de la mañana o al atardecer. Los fines de semana y festivos suele haber más visitantes.',
          },
        ],
      },
      en: {
        title: 'Beaches of Arboletes',
        description:
          'The beaches and coves of Arboletes, Antioquia: warm waters, fine sand and the main public beach alongside quieter coves.',
        intro:
          'Arboletes stretches along the Caribbean Sea and gathers several beaches. The best known is Playa Arboletes, a public beach with warm water and fine sand, great for family swimming and sunsets. Beyond the main beach, the town has quieter coves and rocky stretches for those seeking calm.',
        sections: [
          {
            id: 'playa-principal',
            title: 'Playa Arboletes (the main beach)',
            content:
              'A public, free-access beach with warm, shallow-near-the-shore water that makes it comfortable for families. Restaurants, restrooms and parking are nearby. The natural mud volcano is a short walk from the shore.',
          },
          {
            id: 'caletas',
            title: 'Other coves and beaches',
            content:
              'Toward the edges of the town are quieter coves (locally called Playa Juan and others) with fewer people, ideal for walking, birdwatching and uncrowded Caribbean sunsets.',
          },
          {
            id: 'servicios',
            title: 'Services on the beach',
            content:
              'The public area usually has food stalls, restrooms and parking. The castle-themed water park (Riviera del Sol) is a private business with its own rates and facilities.',
          },
          {
            id: 'mejor-momento',
            title: 'Best time to go',
            content:
              'Morning and late afternoon are the most pleasant and photogenic. At midday the sun is strong; bring sunscreen, a hat and water. Weekdays are usually less crowded than weekends.',
          },
        ],
        faq: [
          {
            q: 'Is Playa Arboletes public and free?',
            a: 'Yes. Playa Arboletes is a public, free-access beach. Nearby private businesses (such as the water park) charge separately.',
          },
          {
            q: 'Can you swim?',
            a: 'The water is warm and usually calm near the shore, but there is no fixed lifeguard; stay in shallow areas and watch children and non-swimmers.',
          },
          {
            q: 'What services are on the beach?',
            a: 'Food stalls, restaurants, restrooms and parking. The castle water park (Riviera del Sol) is private and paid separately.',
          },
          {
            q: 'When is it less crowded?',
            a: 'On weekdays and in the early morning or at sunset. Weekends and holidays tend to draw more visitors.',
          },
        ],
      },
      zh: {
        title: '阿沃莱特斯海滩',
        description: '阿沃莱特斯（安蒂奥基亚）的海滩与小海湾：温暖的海水、细软的沙滩，以及主要公共海滩与更清静的小海湾。',
        intro:
          '阿沃莱特斯（Arboletes）沿加勒比海延伸，分布着多处海滩。最知名的是 Playa Arboletes，一处免费开放的公共海滩，海水温暖、沙质细软，适合亲子戏水与欣赏日落。除了主海滩，镇上还有更安静的小海湾与礁岩地带，适合喜欢清静的游客。',
        sections: [
          {
            id: 'playa-principal',
            title: 'Playa Arboletes（主海滩）',
            content:
              '这是一处免费开放的公共海滩，近岸海水温暖、水浅，适合家庭游客。海滩附近有餐厅、洗手间与停车场。天然泥火山距离岸边仅几步之遥。',
          },
          {
            id: 'caletas',
            title: '其他小海湾与海滩',
            content:
              '在镇子两端，有更安静的小海湾（当地人称 Playa Juan 等），人少清静，适合漫步、观鸟，以及欣赏无人打扰的加勒比海日落。',
          },
          {
            id: 'servicios',
            title: '海滩上的服务设施',
            content:
              '公共区域通常设有小吃摊、洗手间与停车场。城堡主题水上乐园（Riviera del Sol）为私人经营，价格与设施另行收费。',
          },
          {
            id: 'mejor-momento',
            title: '最佳出行时间',
            content:
              '清晨与傍晚最为舒适也最适合拍照。正午阳光强烈，请携带防晒霜、帽子与充足的饮水。相比周末，工作日人流通常更少。',
          },
        ],
        faq: [
          {
            q: 'Playa Arboletes 是公共且免费的吗？',
            a: '是的。Playa Arboletes 是一处免费开放的公共海滩。附近的私人商户（如水上乐园）另行收费。',
          },
          {
            q: '可以游泳吗？',
            a: '海水温暖，近岸通常较为平静，但没有固定救生员；请停留在浅水区，并看护好儿童与不会游泳者。',
          },
          {
            q: '海滩上有哪些服务？',
            a: '小吃摊、餐厅、洗手间与停车场。城堡水上乐园（Riviera del Sol）为私人经营，需另行付费。',
          },
          {
            q: '什么时候人最少？',
            a: '工作日以及清晨、傍晚时分。周末与节假日通常游客更多。',
          },
        ],
      },
    },
  },
  {
    slug: 'como-llegar',
    content: {
      es: {
        title: 'Cómo llegar a Playa Arboletes',
        description:
          'Cómo llegar a Playa Arboletes desde Montería (MTR) y Medellín: avión, bus, taxi y carro, con tiempos y costos.',
        intro:
          'La forma más rápida de llegar es volar a Montería (Aeropuerto Los Garzones, MTR) y continuar por tierra unos 80 km hasta Arboletes. Desde Medellín por carretera el viaje es largo, por lo que muchos viajeros eligen primero el avión a Montería.',
        sections: [
          {
            id: 'desde-monteria',
            title: 'Desde Montería (aeropuerto MTR)',
            content:
              'El aeropuerto más cercano es Los Garzones (MTR), a unas 80 km. En taxi autorizado el trayecto es de 1.5–2 h (≈ COP 120.000–160.000). En colectivo (microbús) cuesta ≈ COP 15.000–25.000; al llegar al pueblo toma un mototaxi (~5 min) hasta la playa.',
          },
          {
            id: 'desde-medellin',
            title: 'Desde Medellín',
            content:
              'En bus intermunicipal el viaje dura unas 8–10 horas cruzando zonas de montaña. Para ahorrar tiempo, lo más recomendado es volar a Montería (MTR) y luego seguir en taxi o colectivo (~2 h) hasta la playa.',
          },
          {
            id: 'transporte-publico',
            title: 'Transporte público local',
            content:
              'Dentro de Arboletes puedes moverte a pie o en mototaxi. Los colectivos conectan el pueblo con Montería y otras localidades de la costa del Urabá.',
          },
          {
            id: 'en-coche',
            title: 'En coche',
            content:
              'Desde Montería las carreteras son mayormente planas y en buen estado. En temporada de lluvias (aprox. abr–may y sep–nov) algunos tramos pueden inundarse; viaja de día y confirma el estado de las vías.',
          },
        ],
        faq: [
          {
            q: '¿Cuál es el aeropuerto más cercano?',
            a: 'El Aeropuerto Los Garzones (MTR) en Montería, a unas 80 km de la playa.',
          },
          {
            q: '¿Cuánto cuesta el taxi desde el aeropuerto?',
            a: 'Un taxi autorizado cuesta aproximadamente COP 120.000–160.000 (unos USD 30–40) y tarda 1.5–2 horas.',
          },
          {
            q: '¿Cuánto se tarda desde Medellín?',
            a: 'En bus unas 8–10 horas por carretera; la opción más rápida es volar a Montería (≈1 h) y seguir en taxi/colectivo (~2 h).',
          },
          {
            q: '¿Hay transporte público hasta la playa?',
            a: 'Sí: colectivos hasta el pueblo y mototaxi hasta la orilla. Confirma horarios y precios en origen.',
          },
        ],
      },
      en: {
        title: 'How to Get to Playa Arboletes',
        description:
          'How to get to Playa Arboletes from Montería (MTR) and Medellín: flight, bus, taxi and car, with times and costs.',
        intro:
          'The fastest way is to fly to Montería (Los Garzones Airport, MTR) and continue ~80 km by road to Arboletes. From Medellín the drive is long, so many travelers fly to Montería first.',
        sections: [
          {
            id: 'desde-monteria',
            title: 'From Montería (MTR airport)',
            content:
              'The nearest airport is Los Garzones (MTR), about 80 km away. An authorized taxi takes 1.5–2 h (≈ COP 120,000–160,000). A colectivo (shared minibus) costs ≈ COP 15,000–25,000; at the town take a mototaxi (~5 min) to the beach.',
          },
          {
            id: 'desde-medellin',
            title: 'From Medellín',
            content:
              'An intercity bus takes about 8–10 hours crossing mountainous terrain. To save time, the best option is to fly to Montería (MTR) and then continue by taxi or colectivo (~2 h) to the beach.',
          },
          {
            id: 'transporte-publico',
            title: 'Local public transport',
            content:
              'Within Arboletes you can walk or use a mototaxi. Colectivos connect the town with Montería and other Urabá coast towns.',
          },
          {
            id: 'en-coche',
            title: 'By car',
            content:
              'From Montería roads are mostly flat and in good condition. In the rainy season (approx. Apr–May and Sep–Nov) some stretches may flood; travel by day and check road conditions.',
          },
        ],
        faq: [
          {
            q: 'What is the nearest airport?',
            a: 'Los Garzones Airport (MTR) in Montería, about 80 km from the beach.',
          },
          {
            q: 'How much is the taxi from the airport?',
            a: 'An authorized taxi costs roughly COP 120,000–160,000 (about USD 30–40) and takes 1.5–2 hours.',
          },
          {
            q: 'How long from Medellín?',
            a: 'By bus about 8–10 hours by road; the fastest option is to fly to Montería (≈1 h) then taxi/colectivo (~2 h).',
          },
          {
            q: 'Is there public transport to the beach?',
            a: 'Yes: colectivos to the town and a mototaxi to the shore. Confirm schedules and fares at origin.',
          },
        ],
      },
      zh: {
        title: '如何到达 Playa Arboletes',
        description: '如何从蒙特里亚（MTR）与麦德林前往 Playa Arboletes：航班、大巴、出租车与自驾，含时间与费用。',
        intro:
          '最快捷的方式是先飞往蒙特里亚（洛斯加尔松机场 MTR），再沿陆路行驶约 80 公里到达阿沃莱特斯。从麦德林自驾路程较长，因此许多游客选择先飞到蒙特里亚。',
        sections: [
          {
            id: 'desde-monteria',
            title: '从蒙特里亚（MTR 机场）',
            content:
              '最近的机场是蒙特里亚的洛斯加尔松机场（MTR），约 80 公里。官方授权出租车约 1.5–2 小时（≈ COP 120,000–160,000）。中巴（Colectivo）约 COP 15,000–25,000；到达镇上后换乘摩的（mototaxi，约 5 分钟）即到海滩。',
          },
          {
            id: 'desde-medellin',
            title: '从麦德林出发',
            content:
              '城际大巴需穿越山区，车程约 8–10 小时。若想省时，最推荐先飞往蒙特里亚（MTR），再换乘出租车或中巴（约 2 小时）抵达海滩。',
          },
          {
            id: 'transporte-publico',
            title: '当地公共交通',
            content:
              '在阿沃莱特斯镇内可步行或乘坐摩的。中巴连接镇上与蒙特里亚及乌拉巴海岸的其他城镇。',
          },
          {
            id: 'en-coche',
            title: '自驾前往',
            content:
              '从蒙特里亚出发多为平坦、路况良好的沿海公路。雨季（约 4–5 月、9–11 月）局部路段可能积水；建议白天出行并提前确认路况。',
          },
        ],
        faq: [
          {
            q: '最近的机场是哪一个？',
            a: '蒙特里亚的洛斯加尔松机场（MTR），距海滩约 80 公里。',
          },
          {
            q: '从机场打车多少钱？',
            a: '官方授权出租车约 COP 120,000–160,000（约 USD 30–40），车程 1.5–2 小时。',
          },
          {
            q: '从麦德林要多久？',
            a: '大巴沿陆路约 8–10 小时；最快的方式是先飞往蒙特里亚（约 1 小时），再换乘出租车/中巴（约 2 小时）。',
          },
          {
            q: '有公共交通到海滩吗？',
            a: '有：中巴到镇上，再换乘摩的到岸边。请于出发地确认班次与价格。',
          },
        ],
      },
    },
  },
  {
    slug: 'fotos',
    showGallery: true,
    content: {
      es: {
        title: 'Fotos de Playa Arboletes',
        description:
          'Fotos reales de Playa Arboletes: la playa, el mar Caribe, el volcán de lodo, las caletas y la vida del pueblo.',
        intro:
          'Aquí reunimos fotos del lugar tomadas en Playa Arboletes y sus alrededores: la playa pública, el mar Caribe, el volcán de lodo natural, las caletas y la vida cotidiana del pueblo. Usa las descripciones (texto alternativo) para entender cada imagen.',
        sections: [
          {
            id: 'que-ver',
            title: 'Qué verás en las fotos',
            content:
              'Aguas caribeñas, arena fina, el volcán de lodo y su cráter, esculturas de arena en la playa, manglares, botes de pescadores y calles del pueblo. Son escenas reales del entorno, no ilustraciones.',
          },
          {
            id: 'consejos-fotos',
            title: 'Consejos para tus fotos',
            content:
              'La luz dorada de la mañana y el atardecer da las mejores imágenes de la playa. Respeta la privacidad de las personas y no subas a zonas cerradas ni inseguras por una foto.',
          },
          {
            id: 'donde-ver-mas',
            title: 'Dónde ver más fotos',
            content:
              'Puedes ver más fotos recientes y reseñas de visitantes en Google Maps, donde la comunidad comparte imágenes actualizadas del lugar.',
          },
        ],
        faq: [
          {
            q: '¿Las fotos son reales del lugar?',
            a: 'Sí, corresponden a Playa Arboletes y sus alrededores. Te recomendamos verificar el estado actual en Google Maps antes de viajar.',
          },
          {
            q: '¿Puedo usar estas fotos?',
            a: 'Son para referencia e inspiración; si las reutilizas, cita la fuente y respeta los derechos de autor correspondientes.',
          },
          {
            q: '¿Dónde ver más imágenes?',
            a: 'En Google Maps encontrarás fotos recientes publicadas por visitantes y la comunidad local.',
          },
        ],
      },
      en: {
        title: 'Photos of Playa Arboletes',
        description:
          'Real photos of Playa Arboletes: the beach, the Caribbean Sea, the mud volcano, the coves and village life.',
        intro:
          'Here we gather photos taken at Playa Arboletes and its surroundings: the public beach, the Caribbean Sea, the natural mud volcano, the coves and daily village life. Use the descriptions (alt text) to understand each image.',
        sections: [
          {
            id: 'que-ver',
            title: 'What you will see in the photos',
            content:
              'Caribbean waters, fine sand, the mud volcano and its crater, sand sculptures on the beach, mangroves, fishing boats and village streets. These are real scenes of the place, not illustrations.',
          },
          {
            id: 'consejos-fotos',
            title: 'Tips for your photos',
            content:
              'Golden morning and late-afternoon light gives the best beach images. Respect people’s privacy and do not climb closed or unsafe areas for a photo.',
          },
          {
            id: 'donde-ver-mas',
            title: 'Where to see more photos',
            content:
              'You can see more recent photos and visitor reviews on Google Maps, where the community shares up-to-date images of the place.',
          },
        ],
        faq: [
          {
            q: 'Are the photos real and from the place?',
            a: 'Yes, they correspond to Playa Arboletes and its surroundings. We recommend checking the current status on Google Maps before traveling.',
          },
          {
            q: 'May I use these photos?',
            a: 'They are for reference and inspiration; if you reuse them, credit the source and respect applicable copyright.',
          },
          {
            q: 'Where can I see more images?',
            a: 'On Google Maps you will find recent photos shared by visitors and the local community.',
          },
        ],
      },
      zh: {
        title: 'Playa Arboletes 照片',
        description: 'Playa Arboletes 的真实照片：海滩、加勒比海、泥火山、小海湾与小镇生活。',
        intro:
          '这里汇集了在 Playa Arboletes 及其周边拍摄的照片：公共海滩、加勒比海、天然泥火山、小海湾与日常的小镇生活。请通过图片说明（替代文字）了解每张照片的内容。',
        sections: [
          {
            id: 'que-ver',
            title: '照片中能看到什么',
            content:
              '加勒比海的水域、细软的沙滩、泥火山及其火山口、海滩上的沙雕、红树林、渔船与镇上的街道。这些都是当地真实的场景，而非插图。',
          },
          {
            id: 'consejos-fotos',
            title: '拍照建议',
            content:
              '清晨与傍晚的金色光线最适合拍摄海滩。请尊重他人隐私，不要为拍照而进入封闭或不安全的区域。',
          },
          {
            id: 'donde-ver-mas',
            title: '在哪里看更多照片',
            content:
              '你可以在 Google Maps 上看到更多近期照片与游客评价，当地社区会持续分享该地的最新影像。',
          },
        ],
        faq: [
          {
            q: '这些照片是当地真实拍摄的吗？',
            a: '是的，照片对应 Playa Arboletes 及其周边。建议出行前在 Google Maps 上确认最新状态。',
          },
          {
            q: '我可以使用这些照片吗？',
            a: '照片仅供参考与灵感；若需转载，请注明来源并遵守相关版权规定。',
          },
          {
            q: '在哪里可以看到更多图片？',
            a: '在 Google Maps 上可看到由游客与当地社区分享的近期照片。',
          },
        ],
      },
    },
  },
  {
    slug: 'volcan-de-lodo',
    content: {
      es: {
        title: 'Volcán de Lodo de Arboletes',
        description:
          'El volcán de lodo natural junto a Playa Arboletes: qué es, cómo se forma (diapirismo) y consejos de visita.',
        intro:
          'A pocos pasos de la playa se encuentra un volcán de lodo formado por diapirismo: el gas y el agua a presión empujan arcilla rica en minerales a la superficie. Es una curiosidad geológica que puedes visitar por separado de la playa.',
        sections: [
          {
            id: 'que-es',
            title: '¿Qué es el volcán de lodo?',
            content:
              'No es un volcán de magma, sino un fenómeno de "diapirismo de lodo": gas natural y agua a presión empujan arcilla mineral al exterior, creando una piscina de lodo cálido. El lodo es rico en azufre, magnesio y calcio, y por su densidad es muy flotante.',
          },
          {
            id: 'cerca-playa',
            title: 'Ubicación',
            content:
              'Queda a pocos pasos de la orilla de Playa Arboletes, dentro del pueblo. Se llega caminando desde la playa principal.',
          },
          {
            id: 'consejos',
            title: 'Consejos de visita',
            content:
              'Usa ropa vieja que no te importe manchar. El lodo flota mucho, pero eso no reemplaza la supervisión: quienes no saben nadar deben quedarse en zonas someras y nunca entrar solos.',
          },
          {
            id: 'estado',
            title: 'Estado de acceso',
            content:
              'El acceso, las zonas habilitadas y las normas de seguridad pueden cambiar por erosiones costeras o recuperación ambiental. Confirma el estado actual y las áreas permitidas antes de visitar.',
          },
        ],
        faq: [
          {
            q: '¿Qué es el volcán de lodo?',
            a: 'Es un fenómeno de diapirismo de lodo: gas y agua a presión llevan arcilla mineral a la superficie, formando una piscina de lodo cálido. No es actividad volcánica magmática.',
          },
          {
            q: '¿Se puede entrar al lodo?',
            a: 'El acceso puede cambiar; verifica el estado y las áreas habilitadas en el lugar antes de entrar. No garantizamos que esté abierto en todo momento.',
          },
          {
            q: '¿Es seguro para quienes no saben nadar?',
            a: 'El lodo tiene mucha flotabilidad, pero no reemplaza la vigilancia. Los no nadadores deben permanecer en zonas someras y nunca entrar solos.',
          },
          {
            q: '¿Cuánto cuesta?',
            a: 'El enjuague con el lodo y los servicios de lavado locales se pagan en el sitio; confirma el precio con los prestadores directamente.',
          },
        ],
      },
      en: {
        title: 'Arboletes Mud Volcano',
        description:
          'The natural mud volcano by Playa Arboletes: what it is, how it forms (diapirism) and visiting tips.',
        intro:
          'A few steps from the beach is a mud volcano formed by diapirism: gas and pressurized water push mineral-rich clay to the surface. It is a geological curiosity you can visit separately from the beach.',
        sections: [
          {
            id: 'que-es',
            title: 'What is the mud volcano?',
            content:
              'It is not a magma volcano but a "mud diapirism" phenomenon: natural gas and pressurized water push mineral clay outward, creating a pool of warm mud. The mud is rich in sulfur, magnesium and calcium, and very buoyant due to its density.',
          },
          {
            id: 'cerca-playa',
            title: 'Location',
            content:
              'It sits a few steps from the shore of Playa Arboletes, within the town. You can walk there from the main beach.',
          },
          {
            id: 'consejos',
            title: 'Visiting tips',
            content:
              'Wear old clothes you do not mind staining. The mud is very buoyant, but that does not replace supervision — non-swimmers should stay in shallow areas and never enter alone.',
          },
          {
            id: 'estado',
            title: 'Access status',
            content:
              'Access, open areas and safety rules can change due to coastal erosion or environmental recovery. Confirm the current status and permitted areas before visiting.',
          },
        ],
        faq: [
          {
            q: 'What is the mud volcano?',
            a: 'It is a mud-diapirism phenomenon: gas and pressurized water bring mineral clay to the surface, forming a warm mud pool. It is not magmatic volcanic activity.',
          },
          {
            q: 'Can you enter the mud?',
            a: 'Access can change; verify the status and open areas on site before entering. We do not guarantee it is open at all times.',
          },
          {
            q: 'Is it safe for non-swimmers?',
            a: 'The mud is very buoyant, but that does not replace supervision. Non-swimmers should stay in shallow areas and never enter alone.',
          },
          {
            q: 'How much does it cost?',
            a: 'The mud rinse and local washing services are paid on site; confirm the price directly with the providers.',
          },
        ],
      },
      zh: {
        title: '阿沃莱特斯泥火山',
        description: 'Playa Arboletes 旁的天然泥火山：它是什么、如何形成（泥底辟），以及游览建议。',
        intro:
          '步行几步即可到达一处由泥底辟作用形成的泥火山：地下气体与高压水流将富含矿物质的黏土推至地表。这是一处可独立于海滩参观的地质奇观。',
        sections: [
          {
            id: 'que-es',
            title: '什么是泥火山',
            content:
              '它并非岩浆火山，而是“泥底辟”现象：天然气与高压水流将矿泥推送至地表，形成一汪温润的泥浆。泥浆富含硫磺、镁与钙，因密度大而有很强的浮力。',
          },
          {
            id: 'cerca-playa',
            title: '位置',
            content:
              '它位于 Playa Arboletes 岸边仅几步之遥，在镇内。可从主海滩步行抵达。',
          },
          {
            id: 'consejos',
            title: '游览建议',
            content:
              '请穿着不怕弄脏的旧衣服。泥浆浮力很大，但不能替代看管——不会游泳者应停留在浅水区，且切勿独自进入。',
          },
          {
            id: 'estado',
            title: '开放状态',
            content:
              '受海岸侵蚀或环境修复影响，其开放区域与安全规定可能变动。请于前往前确认最新状态与可进入范围。',
          },
        ],
        faq: [
          {
            q: '泥火山是什么？',
            a: '它是泥底辟现象：气体与高压水流将矿泥带到地表，形成温润的泥浆池，并非岩浆火山活动。',
          },
          {
            q: '可以进入泥浆吗？',
            a: '开放状态可能变动；请于现场确认最新情况与可进入区域。我们无法保证其始终开放。',
          },
          {
            q: '不会游泳者安全吗？',
            a: '泥浆浮力很强，但不能替代看管。不会游泳者应停留在浅水区，切勿独自进入。',
          },
          {
            q: '费用是多少？',
            a: '泥浆浴与当地冲洗服务在现场另行收费，请直接向服务提供方确认价格。',
          },
        ],
      },
    },
  },
  {
    slug: 'castillo-de-arboletes',
    content: {
      es: {
        title: 'Castillo de Arboletes (Riviera del Sol)',
        description:
          'El complejo hotelero y parque acuático de temática de castillo junto a Playa Arboletes: un negocio privado, con tarifas e instalaciones propias.',
        intro:
          'Junto a la playa se encuentra Riviera del Sol, un complejo hotelero y parque acuático de temática de castillo. Es un negocio privado, operado de forma independiente, y no forma parte de la playa pública de Arboletes.',
        sections: [
          {
            id: 'que-es',
            title: 'Qué es',
            content:
              'Un resort con piscinas, toboganes de agua, un área de barco pirata y decoración de castillo. Es un hito visual famoso en la zona y un lugar popular para familias.',
          },
          {
            id: 'privado',
            title: 'Es un negocio privado',
            content:
              'Riviera del Sol tiene sus propias tarifas, horarios y política de alojamiento, distintas a la playa pública. La playa de Arboletes sigue siendo gratuita y abierta a todos.',
          },
          {
            id: 'como-llegar',
            title: 'Cómo llegar',
            content:
              'Queda junto a Playa Arboletes, a corta distancia a pie o en mototaxi desde el centro del pueblo. También ofrece traslado pre-reservado desde el aeropuerto de Montería.',
          },
          {
            id: 'consejos',
            title: 'Antes de ir',
            content:
              'Consulta directamente con el operador los precios, la disponibilidad de habitaciones y los horarios de piscinas y toboganes, ya que pueden cambiar sin previo aviso.',
          },
        ],
        faq: [
          {
            q: '¿El castillo es parte de la playa pública?',
            a: 'No. Riviera del Sol es un complejo privado; la playa de Arboletes es pública y gratuita, aparte del resort.',
          },
          {
            q: '¿Cuánto cuesta?',
            a: 'Las tarifas y el alojamiento los define el operador; confírmalos directamente con Riviera del Sol.',
          },
          {
            q: '¿Hay hospedaje?',
            a: 'Sí, Riviera del Sol cuenta con hotel; reserva y precios consulta con el operador.',
          },
          {
            q: '¿Dónde confirmar datos?',
            a: 'En los canales oficiales de Riviera del Sol (sitio web o recepción). Este sitio es informativo y no vende sus servicios.',
          },
        ],
      },
      en: {
        title: 'Arboletes Castle (Riviera del Sol)',
        description:
          'The castle-themed hotel and water park by Playa Arboletes: a private business with its own rates and facilities.',
        intro:
          'Next to the beach is Riviera del Sol, a castle-themed hotel and water park. It is a private, independently operated business and is not part of the public Playa Arboletes beach.',
        sections: [
          {
            id: 'que-es',
            title: 'What it is',
            content:
              'A resort with pools, water slides, a pirate-ship area and castle decor. It is a well-known visual landmark in the area and a popular spot for families.',
          },
          {
            id: 'privado',
            title: 'It is a private business',
            content:
              'Riviera del Sol has its own rates, hours and lodging policy, separate from the public beach. Playa Arboletes beach remains free and open to everyone.',
          },
          {
            id: 'como-llegar',
            title: 'How to get there',
            content:
              'It is next to Playa Arboletes, a short walk or mototaxi ride from the town center. It also offers pre-booked transfers from Montería airport.',
          },
          {
            id: 'consejos',
            title: 'Before you go',
            content:
              'Check prices, room availability and pool/slide hours directly with the operator, as they can change without notice.',
          },
        ],
        faq: [
          {
            q: 'Is the castle part of the public beach?',
            a: 'No. Riviera del Sol is a private complex; Playa Arboletes beach is public and free, separate from the resort.',
          },
          {
            q: 'How much does it cost?',
            a: 'Rates and lodging are set by the operator; confirm directly with Riviera del Sol.',
          },
          {
            q: 'Is there lodging?',
            a: 'Yes, Riviera del Sol has a hotel; check reservations and prices with the operator.',
          },
          {
            q: 'Where to confirm details?',
            a: 'On Riviera del Sol official channels (website or front desk). This site is informational and does not sell its services.',
          },
        ],
      },
      zh: {
        title: '阿沃莱特斯城堡（Riviera del Sol）',
        description: 'Playa Arboletes 旁的城堡主题酒店与水上乐园：私人经营，价格与设施另行制定。',
        intro:
          '海滩旁是 Riviera del Sol，一座城堡主题酒店与水上乐园。它由私人独立运营，不属于阿沃莱特斯公共海滩。',
        sections: [
          {
            id: 'que-es',
            title: '它是什么',
            content:
              '一处配有泳池、水上滑梯、海盗船互动区与城堡装饰的度假村。它是当地著名的视觉地标，也很受家庭游客欢迎。',
          },
          {
            id: 'privado',
            title: '它是私人经营的',
            content:
              'Riviera del Sol 有独立的票价、开放时间与住宿政策，与公共海滩不同。Playa Arboletes 海滩依旧免费、对所有人开放。',
          },
          {
            id: 'como-llegar',
            title: '如何到达',
            content:
              '它紧邻 Playa Arboletes，从镇中心步行或乘摩的片刻即达。也提供从蒙特里亚机场预约的接送服务。',
          },
          {
            id: 'consejos',
            title: '前往前',
            content:
              '请直接向经营方确认价格、房态以及泳池与滑梯的开放时间，这些信息可能随时变动。',
          },
        ],
        faq: [
          {
            q: '城堡属于公共海滩的一部分吗？',
            a: '不属于。Riviera del Sol 是私人综合设施；Playa Arboletes 海滩为公共且免费，与度假村相互独立。',
          },
          {
            q: '费用是多少？',
            a: '票价与住宿由经营方制定，请直接向 Riviera del Sol 确认。',
          },
          {
            q: '可以住宿吗？',
            a: '可以，Riviera del Sol 设有酒店；预订与价格请向经营方咨询。',
          },
          {
            q: '在哪里确认信息？',
            a: '请通过 Riviera del Sol 官方渠道（官网或前台）确认。本站仅作信息参考，不销售其服务。',
          },
        ],
      },
    },
  },
  {
    slug: 'playas-cerca-de-medellin',
    content: {
      es: {
        title: 'Playas cerca de Medellín',
        description:
          'Otras playas del Caribe colombiano para combinar con Playa Arboletes: desde Arboletes hasta el Golfo de Urabá y la costa antioqueña.',
        intro:
          'Medellín es una ciudad de montaña, sin mar; la playa más cercana está a varias horas, en la costa caribeña. La opción más directa es volar a Montería y llegar a Arboletes, pero también puedes explorar otras playas del Urabá y del Caribe colombiano.',
        sections: [
          {
            id: 'en-antioquia',
            title: 'Playas del Caribe antioqueño',
            content:
              'Arboletes, en el subtrópico del Urabá antioqueño, es la playa costera más cercana a Medellín por vía Montería. La costa antioqueña es más corta que la de otros departamentos, por lo que muchos viajeros combinan varias localidades.',
          },
          {
            id: 'golfo-uraba',
            title: 'Golfo de Urabá',
            content:
              'Más al norte están Turbó y Necoclí, con playas y manglares en la transición del Caribe hacia el istmo de Panamá. Son destinos más remotos, ideales para ecoturismo.',
          },
          {
            id: 'caribe-colombiano',
            title: 'Más allá de Antioquia',
            content:
              'El Caribe colombiano ofrece muchas playas (Cartagena, San Andrés, Santa Marta). Si tu viaje es amplio, puedes encadenar varias por vuelo o bus.',
          },
          {
            id: 'como-combinar',
            title: 'Cómo combinarlas',
            content:
              'Lo más práctico es volar a Montería (MTR) y usar Arboletes como base para explorar la costa del Urabá en 2–3 días, con transporte en colectivo entre pueblos.',
          },
        ],
        faq: [
          {
            q: '¿Hay playa cerca de Medellín?',
            a: 'Medellín es de montaña y no tiene mar; la playa más cercana está a varias horas, en la costa caribeña (Arboletes, por vía Montería).',
          },
          {
            q: '¿Cuál es la playa más cercana?',
            a: 'Por vía aérea a Montería, Arboletes (Urabá antioqueño) es la opción costera más directa, a unas 2 h por tierra del aeropuerto.',
          },
          {
            q: '¿Cómo combinar varias playas?',
            a: 'Vuela a Montería y usa Arboletes como base; los colectivos conectan con Turbó, Necoclí y otras localidades del Urabá.',
          },
          {
            q: '¿Otras playas del Caribe?',
            a: 'Sí: Cartagena, Santa Marta y San Andrés, entre otras; quedan más lejos y se combinan mejor en viajes más largos.',
          },
        ],
      },
      en: {
        title: 'Beaches near Medellín',
        description:
          'Other Colombian Caribbean beaches to combine with Playa Arboletes: from Arboletes to the Gulf of Urabá and the Antioquia coast.',
        intro:
          'Medellín is a mountain city with no sea; the nearest beach is several hours away, on the Caribbean coast. The most direct option is to fly to Montería and reach Arboletes, but you can also explore other beaches of the Urabá and the Colombian Caribbean.',
        sections: [
          {
            id: 'en-antioquia',
            title: 'Antioquia Caribbean beaches',
            content:
              'Arboletes, in the Antioquia Urabá subtropics, is the coastal beach closest to Medellín via Montería. Antioquia’s coast is shorter than other departments, so many travelers combine several towns.',
          },
          {
            id: 'golfo-uraba',
            title: 'Gulf of Urabá',
            content:
              'Further north are Turbó and Necoclí, with beaches and mangroves at the Caribbean transition toward the Panama isthmus. They are more remote, ideal for ecotourism.',
          },
          {
            id: 'caribe-colombiano',
            title: 'Beyond Antioquia',
            content:
              'The Colombian Caribbean has many beaches (Cartagena, San Andrés, Santa Marta). On a wider trip you can chain several by flight or bus.',
          },
          {
            id: 'como-combinar',
            title: 'How to combine them',
            content:
              'The most practical plan is to fly to Montería (MTR) and use Arboletes as a base to explore the Urabá coast over 2–3 days, with colectivo transport between towns.',
          },
        ],
        faq: [
          {
            q: 'Is there a beach near Medellín?',
            a: 'Medellín is mountainous and has no sea; the nearest beach is several hours away, on the Caribbean coast (Arboletes, via Montería).',
          },
          {
            q: 'Which beach is closest?',
            a: 'By air to Montería, Arboletes (Antioquia Urabá) is the most direct coastal option, about 2 h by road from the airport.',
          },
          {
            q: 'How to combine several beaches?',
            a: 'Fly to Montería and use Arboletes as a base; colectivos connect with Turbó, Necoclí and other Urabá towns.',
          },
          {
            q: 'Other Caribbean beaches?',
            a: 'Yes: Cartagena, Santa Marta and San Andrés, among others; they are farther and better combined on longer trips.',
          },
        ],
      },
      zh: {
        title: '麦德林附近的海滩',
        description: '可与 Playa Arboletes 搭配的哥伦比亚加勒比海其他海滩：从阿沃莱特斯到乌拉巴湾与安蒂奥基亚海岸。',
        intro:
          '麦德林是一座内陆山城，并无海岸；最近的海滩位于数小时车程外的加勒比海岸。最直接的方式是先飞往蒙特里亚再抵达阿沃莱特斯，你也可以进一步探索乌拉巴与哥伦比亚加勒比海的其他海滩。',
        sections: [
          {
            id: 'en-antioquia',
            title: '安蒂奥基亚的加勒比海滩',
            content:
              '位于安蒂奥基亚乌拉巴次区的阿沃莱特斯，是经蒙特里亚前往时离麦德林最近的海岸海滩。安蒂奥基亚海岸线较其他省份更短，因此许多游客会把多个城镇串联游览。',
          },
          {
            id: 'golfo-uraba',
            title: '乌拉巴湾',
            content:
              '更北处是图尔沃（Turbó）与内科克利（Necoclí），拥有连接加勒比海与巴拿马地峡过渡带的沙滩与红树林，更为偏远，适合生态旅游。',
          },
          {
            id: 'caribe-colombiano',
            title: '安蒂奥基亚之外',
            content:
              '哥伦比亚加勒比海还有众多海滩（卡塔赫纳、圣安德烈斯、圣玛尔塔等）。若行程较长，可通过航班或大巴串联多个目的地。',
          },
          {
            id: 'como-combinar',
            title: '如何串联游览',
            content:
              '最实用的方案是飞往蒙特里亚（MTR），以阿沃莱特斯为基地，用 2–3 天探索乌拉巴海岸，镇间以中巴接驳。',
          },
        ],
        faq: [
          {
            q: '麦德林附近有海滩吗？',
            a: '麦德林为内陆山城，没有海岸；最近的海滩位于数小时外的加勒比海岸（经蒙特里亚前往的阿沃莱特斯）。',
          },
          {
            q: '哪片海滩最近？',
            a: '经航班到蒙特里亚后，阿沃莱特斯（安蒂奥基亚乌拉巴）是最直接的海岸选择，距机场约 2 小时车程。',
          },
          {
            q: '如何串联多片海滩？',
            a: '飞往蒙特里亚并以阿沃莱特斯为基地；中巴连接图尔沃、内科克利等乌拉巴城镇。',
          },
          {
            q: '还有其他加勒比海海滩吗？',
            a: '有：卡塔赫纳、圣玛尔塔、圣安德烈斯等；它们更远，更适合在较长行程中安排。',
          },
        ],
      },
    },
  },
];

export const getTopic = (slug: string) => topics.find((t) => t.slug === slug);
