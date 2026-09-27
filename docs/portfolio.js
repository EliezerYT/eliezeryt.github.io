/**
 * ElyDev Portfolio - Pure Native JavaScript Core
 * Portafolio Creativo y Desarrollador (Eliezer Terrero)
 * 100% Vanilla JS - Sin dependencias de Node.js en tiempo de ejecución
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio_projects_elydev_v6';
  const AUTH_STORAGE_KEY = 'portfolio_auth_user_v2';
  const THEME_STORAGE_KEY = 'portfolio_theme_elydev';

  // 1. Datos iniciales del perfil y proyectos
  const initialProfile = {
    name: 'Eliezer Terrero',
    brandName: 'ElyDev',
    title: 'Game Developer & Unity Specialist',
    avatar: './assets/images/ely/my-avatar.png',
    bio: 'Desarrollador apasionado de videojuegos enfocado en aprovechar el máximo potencial de tecnologías avanzadas como Unity, Photon Network y desarrollo full-stack para crear proyectos innovadores y experiencias inmersivas.',
    summaryParagraphs: [
      'Mi compromiso es consolidarme como un desarrollador vanguardista, ampliando constantemente los límites de lo posible y construyendo una sólida reputación en la industria de los videojuegos.',
      'Mi meta principal es fundar y liderar mi propia compañía de videojuegos en República Dominicana, contribuyendo activamente al crecimiento del ecosistema de desarrollo local y generando oportunidades e innovación en este mercado emergente.'
    ],
    location: 'República Dominicana (Disponible Remoto)',
    availableForWork: true,
    email: 'eliezerterrero275@gmail.com',
    linktree: 'https://linktr.ee/elydev',
    youtube: 'https://www.youtube.com/channel/UCuiY3lZrlrbXsX-RR9v3Kbg',
    instagram: 'https://www.instagram.com/_elydev',
    github: 'https://github.com/eliezeryt',
    linkedin: 'https://www.linkedin.com'
  };

  const initialProjects = [
    {
      id: 'overdrivers',
      title: 'OverDrivers: Racing Game',
      tagline: 'Juego de carreras y velocidad de alta adrenalina con banda sonora original',
      description: 'Proyecto de carreras en 3D desarrollado por ElyDev, con físicas dinámicas de derrape, personalización de vehículos y colaboración musical con artistas urbanos en el soundtrack oficial.',
      fullStory: 'OverDrivers representa mi proyecto insignia de carreras y acción. Diseñado con modelos de alta fidelidad, sistema de cámaras dinámicas de seguimiento y un pipeline de audio integrado que incluye colaboraciones oficiales con artistas musicales (canción "Quieren Quitarme" de Cifra Slimk). Cuenta con teasers oficiales en YouTube y optimización continua de rendimiento.',
      category: 'juegos',
      origin: 'propio',
      year: '2024 - 2025',
      role: 'Lead Game Designer & Programador Principal',
      featured: true,
      coverImage: './assets/images/ely/overdrivers-teaser.jpg',
      technologies: ['Unity 3D', 'C#', 'Vehicle Physics', 'FMOD Audio', 'Cinemachine', 'Custom Shaders'],
      metrics: [
        { label: 'Estado', value: 'En Desarrollo Activo' },
        { label: 'Teasers Oficiales', value: '#1 y #2 en YouTube' },
        { label: 'Colaboración', value: 'Soundtrack Original' }
      ],
      keyContributions: [
        'Implementación del modelo de físicas de vehículos con tracción en las cuatro ruedas y derrape asistido.',
        'Sistema de sonido adaptativo con motores reactivos a RPM y cambios de marcha.',
        'Dirección y edición de los teasers cinematográficos oficiales publicados en el canal de YouTube.',
        'Diseño de circuitos urbanos nocturnos con iluminación optimizada para tasas de cuadros estables.'
      ],
      links: [
        { label: 'Ver Teaser #2 en YouTube', url: 'https://www.youtube.com/watch?v=PH6cK45nkto', type: 'video' },
        { label: 'Colaboración Musical Cifra Slimk', url: 'https://www.youtube.com/watch?v=jA9kxcgnPmw', type: 'video' }
      ]
    },
    {
      id: 'en-una-goma',
      title: 'MotoLoco | En Una Goma',
      tagline: 'Desarrollo completo de videojuego y portal web para CapricornioTV',
      description: 'Videojuego oficial desarrollado para el reconocido influencer CapricornioTV, recreando la cultura de acrobacias y motocicletas con portal web promocional, backend en PHP y base de datos propia.',
      fullStory: 'Desarrollé el juego "En una goma" de principio a fin, creando tanto la experiencia interactiva como su portal web promocional. Gestioné el frontend y backend en PHP junto a una base de datos personalizada para rankings y estadísticas de jugadores. El proyecto fusionó creatividad con rigor técnico para una comunidad masiva de seguidores.',
      category: 'juegos',
      origin: 'trabajado',
      clientOrTeam: 'Capricornio Games & CapricornioTV',
      year: '2024 - 2025',
      role: 'Freelance Lead Game Developer & Web Full-Stack',
      featured: true,
      coverImage: './assets/images/ely/icon-enunagoma.png',
      technologies: ['Unity', 'C#', 'PHP', 'MySQL', 'Web Development', 'Physics Tuning'],
      metrics: [
        { label: 'Cliente', value: 'CapricornioTV' },
        { label: 'Alcance', value: 'Audiencia Masiva' },
        { label: 'Sistemas', value: 'Juego + Web + Backend' }
      ],
      keyContributions: [
        'Diseño y programación de las mecánicas de balance, caballitos ("en una goma") y control de aceleración.',
        'Construcción de la web promocional responsiva para descarga e interacción con los fanáticos.',
        'Arquitectura de base de datos MySQL y endpoints PHP para sincronización de puntuaciones.',
        'Optimización de texturas y consumo de memoria para compatibilidad en dispositivos Android gama media y baja.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAHCkhIcWiA/6wdEoS2nzQ9AS30-C88Rqw/view', type: 'external' }
      ]
    },
    {
      id: 'dominican-power',
      title: 'Dominican Power',
      tagline: 'Remake integral de UI, economía in-game y multijugador online con Photon',
      description: 'Renovación técnica integral del título: cambio de orientación de pantalla, reconstrucción visual de interfaz, integración de multijugador online mediante Photon y personalización completa de personajes.',
      fullStory: 'Contratado por DoGame para revitalizar y estabilizar Dominican Power. Asumí la corrección de errores críticos, lideré un rediseño completo de interfaz de usuario con navegación más intuitiva, implementé la orientación de pantalla más cómoda e integré Photon PUN 2 para habilitar partidas multijugador con personalización y tienda dentro del juego.',
      category: 'juegos',
      origin: 'trabajado',
      clientOrTeam: 'DoGame (Estudio / Empresa)',
      year: '2021 - 2022',
      role: 'Freelance Game Developer (UI, Red & Gameplay)',
      featured: true,
      coverImage: './assets/images/ely/icon-dominicanpower.png',
      technologies: ['Unity', 'C#', 'Photon Network', 'Photon PUN 2', 'UI/UX Redesign', 'In-Game Economy'],
      metrics: [
        { label: 'Multijugador', value: 'Photon Online' },
        { label: 'Rediseño UI', value: '100% Remake' },
        { label: 'Personalización', value: 'Inventario & Tienda' }
      ],
      keyContributions: [
        'Reemplazo y modernización de todo el pipeline de interfaz de usuario con flujo optimizado de navegación.',
        'Sincronización de salas, emparejamiento de jugadores y replicación de estados vía Photon PUN 2.',
        'Implementación del sistema de cambio de orientación de juego fluida sin pérdida de contexto.',
        'Desarrollo del catálogo de customización de personajes y balance de economía virtual.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAHCk6iQVwY/FlPYVFA3lew686sjP3Cyvw/view', type: 'external' }
      ]
    },
    {
      id: 'telesancris',
      title: 'Telesancris Mobile App',
      tagline: 'Aplicación para transmisiones en vivo y contenido de canal televisivo',
      description: 'Desarrollo integral de la aplicación para el canal Telesancris, permitiendo a los televidentes disfrutar de transmisiones en streaming directo, programación y noticias desde sus smartphones.',
      fullStory: 'Creación completa de la aplicación móvil para el canal Telesancris. Diseñada para garantizar una reproducción fluida de vídeo en streaming, arquitectura de interfaz moderna y compatibilidad multiplataforma para maximizar la audiencia del canal.',
      category: 'aplicaciones',
      origin: 'trabajado',
      clientOrTeam: 'Canal Telesancris (Cliente Comercial)',
      year: '2023',
      role: 'Desarrollador de Aplicación Móvil',
      featured: true,
      coverImage: './assets/images/ely/icon-telesancris.png',
      technologies: ['C# / Unity Mobile Tools', 'HLS Video Streaming', 'UI/UX Design', 'Android Deployment'],
      metrics: [
        { label: 'Plataforma', value: 'Mobile Android' },
        { label: 'Streaming', value: 'Transmisión en Vivo' },
        { label: 'Desarrollo', value: 'Proyecto Completo' }
      ],
      keyContributions: [
        'Integración del reproductor de vídeo HLS con auto-reconexión ante pérdidas de señal.',
        'Diseño de interfaces intuitivas y adaptables a diferentes tamaños de pantalla y tabletas.',
        'Optimización de consumo de datos móviles y batería durante reproducciones prolongadas.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0MVzjW94/j7VFCuqrg5BSzVhgUEqyTA/view', type: 'external' }
      ]
    },
    {
      id: 'yun-online',
      title: 'Yun Online',
      tagline: 'Reskin y adaptación multijugador competitiva de minijuego',
      description: 'Adaptación y reskin completo del popular minijuego extraído de Dominican Power, optimizado para partidas rápidas multijugador y competición en línea.',
      fullStory: 'Proyecto colaborativo derivado de Dominican Power. Se reconstruyó la presentación artística, el bucle de juego y las mecánicas competitivas para convertirlo en un título independiente rápido y altamente rejugable.',
      category: 'collab',
      origin: 'trabajado',
      clientOrTeam: 'DoGame / Colaboración',
      year: '2022',
      role: 'Programador de Juego & Reskin',
      featured: false,
      coverImage: './assets/images/ely/icon-yunonline.png',
      technologies: ['Unity', 'C#', 'Photon Network', 'Sprite Pipeline', 'Mobile Controls'],
      metrics: [
        { label: 'Tipo', value: 'Colaboración / Spin-off' },
        { label: 'Modo', value: 'Multijugador Rápido' }
      ],
      keyContributions: [
        'Desacople del minijuego como aplicación autónoma con arquitectura limpia.',
        'Integración del nuevo paquete artístico 2D y adaptación a controles táctiles.',
        'Sincronización de eventos de red y detección de ganador en partidas multijugador.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0NNsRCC0/gjlQJP0_Fy8q-d42zMkRZA/view', type: 'external' }
      ]
    },
    {
      id: 'retopolis',
      title: 'Retopolis',
      tagline: 'Hub completo de desafíos interactivos y minijuegos arcade',
      description: 'Creación integral del juego Retopolis, concebido como una plataforma de retos y minijuegos con mecánicas variadas y enfoque en la diversión inmediata.',
      fullStory: 'Desarrollé la arquitectura completa del videojuego Retopolis, implementando un sistema modular que permite seleccionar y desbloquear diferentes tipos de desafíos, acumulando puntuaciones globales.',
      category: 'juegos',
      origin: 'trabajado',
      clientOrTeam: 'Cliente Comercial',
      year: '2023',
      role: 'Desarrollador Integral de Juego',
      featured: false,
      coverImage: './assets/images/ely/icon-retopolis.jpg',
      technologies: ['Unity', 'C#', 'Modular Gameplay Architecture', 'Mobile UI', 'Audio Manager'],
      metrics: [
        { label: 'Estructura', value: 'Hub Multi-Juego' },
        { label: 'Desarrollo', value: 'Integral (100%)' }
      ],
      keyContributions: [
        'Diseño modular de minijuegos para carga dinámica sin saturar la memoria RAM.',
        'Sistema de recompensas, trofeos y desbloqueo progresivo.',
        'Efectos visuales y respuesta táctil para maximizar la satisfacción del jugador.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAHCkkao1s4/zyVN3YLet4Bukyi6TTFucg/view', type: 'external' }
      ]
    },
    {
      id: 'helptuber',
      title: 'HELPTUBER',
      tagline: 'Suite de productividad y herramientas para creadores de YouTube',
      description: 'Aplicación propia creada para asistir a YouTubers y streamers en la generación de títulos atractivos, análisis de palabras clave, cálculo de metas y organización de publicaciones.',
      fullStory: 'Desarrollada como proyecto propio para potenciar la presencia digital de creadores. Proporciona herramientas de cálculo de engagement, ideas de títulos y un flujo de trabajo ágil para canales en crecimiento.',
      category: 'aplicaciones',
      origin: 'propio',
      year: '2023',
      role: 'Creador & Desarrollador Principal',
      featured: false,
      coverImage: './assets/images/ely/icon-helptuber.jpg',
      technologies: ['Unity UI / C#', 'REST API Integration', 'Data Serialization', 'Productivity UX'],
      metrics: [
        { label: 'Objetivo', value: 'Asistente para YouTubers' },
        { label: 'Tipo', value: 'Proyecto Propio' }
      ],
      keyContributions: [
        'Algoritmos de puntuación de títulos basados en longitud, palabras gancho y mayúsculas.',
        'Calculadora de proyecciones de visualizaciones y suscriptores.',
        'Interfaz oscura y limpia diseñada para sesiones prolongadas de planificación.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAHCk7lYFWk/tiI_f0hndpYcUp3XCdBKVg/view', type: 'external' }
      ]
    },
    {
      id: 'dominoes-republic',
      title: 'Dominoes Republic',
      tagline: 'Soporte técnico, reglas internacionales y corrección de geolocalización',
      description: 'Intervención especializada para resolver errores críticos en las reglas de juego y solucionar interferencias con separadores de geolocalización en partidas competitivas.',
      fullStory: 'Contratado por SHL para un diagnóstico urgente de errores y estabilización del juego Dominoes Republic. Identifiqué y corregí la interferencia en la lógica de geolocalización que afectaba el emparejamiento entre regiones y pulí las reglas de puntuación.',
      category: 'juegos',
      origin: 'trabajado',
      clientOrTeam: 'SHL (Cliente Comercial)',
      year: '2022',
      role: 'Freelance Game Developer (Bug Fixer & Optimization)',
      featured: false,
      coverImage: './assets/images/ely/icon-dominoesrepublic.png',
      technologies: ['Unity', 'C#', 'Geolocation Services', 'Board Game Logic', 'Profiling'],
      metrics: [
        { label: 'Resolución', value: 'Bugs Críticos Solucionados' },
        { label: 'Área', value: 'Geolocalización & Reglas' }
      ],
      keyContributions: [
        'Depuración a fondo de la capa de geolocalización eliminando conflictos de red.',
        'Refactorización del cálculo de puntos y validación de fichas jugables en tiempo real.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0NBKnGd8/vFlbYTjjWVnj48E-iLjBiA/view', type: 'external' }
      ]
    },
    {
      id: 'adventure-world',
      title: 'Adventure World',
      tagline: 'Plataformas clásico con niveles desafiantes y físicas precisas',
      description: 'Videojuego propio de plataformas en 2D con salto cinemático, enemigos móviles, coleccionables y trampas dinámicas.',
      fullStory: 'Proyecto personal enfocado en pulir al máximo la sensación del salto y la respuesta inmediata del jugador en plataformas. Cuenta con diseño de niveles artesanal y transiciones fluidas.',
      category: 'juegos',
      origin: 'propio',
      year: '2022',
      role: 'Desarrollador & Diseñador de Niveles',
      featured: false,
      coverImage: './assets/images/ely/picon-aworld.png',
      technologies: ['Unity 2D', 'C#', '2D Tilemaps', 'Player Controller', 'Sound Effects'],
      metrics: [
        { label: 'Género', value: 'Plataformas 2D' },
        { label: 'Control', value: 'Físicas Ajustadas al Milímetro' }
      ],
      keyContributions: [
        'Controlador de personaje 2D con coyote time, jump buffering y aceleración variable.',
        'Implementación de cámaras Cinemachine con zonas de confinamiento por nivel.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0MF1rMQw/2JTfqiurWyJgWguk06b7UA/view', type: 'external' }
      ]
    },
    {
      id: 'hellish-flash',
      title: 'Hellish Flash',
      tagline: 'Acción vertiginosa, reflejos y esquivas en entornos incandescentes',
      description: 'Juego arcade de supervivencia rápida donde el jugador debe sortear proyectiles incandescentes y trampas con reflejos de milisegundos.',
      fullStory: 'Una experiencia diseñada para poner a prueba los reflejos y la coordinación visomotriz. Utiliza sistemas de partículas intensos y una curva de dificultad progresiva que engancha desde el primer intento.',
      category: 'juegos',
      origin: 'propio',
      year: '2022',
      role: 'Creador & Programador de Jugabilidad',
      featured: false,
      coverImage: './assets/images/ely/picon-hellishF.png',
      technologies: ['Unity', 'C#', 'Particle Systems', 'Score Management', 'Arcade Loop'],
      metrics: [
        { label: 'Estilo', value: 'Arcade de Reflejos' },
        { label: 'Velocidad', value: 'Ritmo Dinámico Creciente' }
      ],
      keyContributions: [
        'Generador procedural de oleadas de proyectiles con patrones geométricos.',
        'Efectos de pantalla (screen shake, destellos) para un impacto sensorial contundente.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0MBfNzv0/V_wjWT_qnxDu_W-t39kSHg/view', type: 'external' }
      ]
    },
    {
      id: 'la-aranita-online',
      title: 'La Arañita Online',
      tagline: 'Juego multijugador online casual con interacción en tiempo real',
      description: 'Experiencia multijugador en red conectando jugadores en tiempo real para partidas dinámicas y divertidas.',
      fullStory: 'Desarrollado para experimentar con el manejo de salas y sincronización rápida en Unity con Photon PUN. Permite a múltiples usuarios interactuar simultáneamente en la misma sesión.',
      category: 'collab',
      origin: 'propio',
      clientOrTeam: 'ElyDev & Comunidad',
      year: '2022',
      role: 'Creador & Desarrollador de Red',
      featured: false,
      coverImage: './assets/images/ely/picon-thespider.png',
      technologies: ['Unity', 'Photon PUN 2', 'C#', 'Multiplayer Sync', 'Lobby System'],
      metrics: [
        { label: 'Modo', value: 'Multijugador en Línea' },
        { label: 'Red', value: 'Photon Network' }
      ],
      keyContributions: [
        'Sistema de creación de salas y emparejamiento automático por código.',
        'Sincronización suave de posiciones con interpolación y predicción de retardo.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0MCJd1U0/qY3RQ3ugWYEIVYuZOHauJg/view', type: 'external' }
      ]
    },
    {
      id: 'rolling-ball',
      title: 'Rolling Ball',
      tagline: 'Físicas 3D, equilibrio e inercia a través de pistas complejas',
      description: 'Juego de precisión física donde controlas una esfera superando rampas estrechas, plataformas móviles y obstáculos gravitacionales.',
      fullStory: 'Centrado en la simulación de rozamiento y dinámica de cuerpos rígidos en 3D. Cada nivel presenta retos de equilibrio con física realista y escenarios suspendidos en el vacío.',
      category: 'juegos',
      origin: 'propio',
      year: '2021',
      role: 'Diseñador de Físicas & Programador',
      featured: false,
      coverImage: './assets/images/ely/picon-Rball.png',
      technologies: ['Unity 3D', 'C#', 'Rigidbody & Physics Materials', 'Dynamic Camera'],
      metrics: [
        { label: 'Motor de Físicas', value: 'Unity 3D PhysX' },
        { label: 'Reto', value: 'Precisión & Equilibrio' }
      ],
      keyContributions: [
        'Ajuste fino de aceleración, inercia angular y fricción para un control satisfactorio.',
        'Cámara orbital que acompaña fluidamente giros y caídas.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0MKEi_ZM/xu3nXL1jueAwZXqBjPZQ-Q/view', type: 'external' }
      ]
    },
    {
      id: 'maddys-adventures',
      title: 'Maddys Adventures',
      tagline: 'Aventura 2D con exploración de mundos y acertijos',
      description: 'Juego de aventura y exploración protagonizado por Maddy, combinando acción ligera, saltos y desafíos de exploración.',
      fullStory: 'Un proyecto lleno de encanto visual donde se implementaron animaciones por cuadros, estados de movimiento del personaje y diseño de ambientes variados.',
      category: 'juegos',
      origin: 'propio',
      year: '2021',
      role: 'Desarrollador Integral',
      featured: false,
      coverImage: './assets/images/ely/picon-maddys.png',
      technologies: ['Unity 2D', 'C#', 'Animation Controllers', 'Tilemap Design'],
      metrics: [
        { label: 'Tipo', value: 'Aventura 2D' },
        { label: 'Arte', value: 'Animación Tradicional Integrada' }
      ],
      keyContributions: [
        'Implementación del sistema de vida, daño y checkpoints.',
        'Diseño de mecánicas interactivas con el entorno (llaves, puertas, resortes).'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0IFpYdNI/nNmvLL1L61rDTfBl8RWKuQ/view', type: 'external' }
      ]
    },
    {
      id: 'snakes-battles',
      title: 'Snakes Battles',
      tagline: 'Duelos de serpientes con arenas competitivas y power-ups',
      description: 'Reinvención del clásico juego de la serpiente con arenas de batalla, potenciadores tácticos e inteligencia artificial reactiva.',
      fullStory: 'Desarrollo de mecánicas competitivas en cuadrícula donde múltiples serpientes compiten por territorio y coleccionables con trampas y power-ups de aceleración.',
      category: 'juegos',
      origin: 'propio',
      year: '2021',
      role: 'Programador & Diseñador',
      featured: false,
      coverImage: './assets/images/ely/picon-snakes.png',
      technologies: ['Unity', 'C#', 'Grid Logic', 'AI Pathfinding', 'Power-ups'],
      metrics: [
        { label: 'IA', value: 'Enemigos Autónomos' },
        { label: 'Estilo', value: 'Snake Battle Arena' }
      ],
      keyContributions: [
        'Lógica de detección de colisiones corporales por segmentos sin fallos de precisión.',
        'Sistema de IA que calcula rutas de intercepción hacia los alimentos más cercanos.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0IadlXmc/HB7dfaGUkaMH-D7-kC5fDA/view', type: 'external' }
      ]
    },
    {
      id: 'peace-in-the-forest',
      title: 'Peace In The Forest & Wall Ball',
      tagline: 'Colección de minijuegos arcade y experiencias visuales',
      description: 'Experiencias interactivas complementarias centradas en estética ambiental tranquila y destreza de reflejos en pantalla táctil.',
      fullStory: 'Títulos diseñados para experimentar con paletas de color calmantes, efectos atmosféricos y mecánicas de rebote en Wall Ball.',
      category: 'juegos',
      origin: 'propio',
      year: '2020',
      role: 'Desarrollador',
      featured: false,
      coverImage: './assets/images/ely/picon-peace.png',
      technologies: ['Unity', 'C#', 'Atmospheric Lighting', 'Touch Controls'],
      metrics: [
        { label: 'Enfoque', value: 'Casual & Relax' }
      ],
      keyContributions: [
        'Optimización de draw calls para ejecución ultrarrápida.',
        'Sistemas de sonido ambiental estéreo inmersivo.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAG0MJdu2og/XTAwznoKYCso9oa_41NnHg/view', type: 'external' }
      ]
    },
    {
      id: 'service-ads-monetization',
      title: 'Ads Monetization System | $80',
      tagline: 'Implementación de Banner, Intersticial y Rewarded Ads en tu juego o app',
      description: 'Implementa sistemas de monetización publicitaria completos para maximizar los ingresos y engagement de tu juego o aplicación en Android e iOS sin perjudicar el rendimiento.',
      fullStory: 'Servicio técnico especializado para desarrolladores y estudios que desean monetizar sus títulos. Integro Google AdMob o Unity Ads con arquitectura de eventos limpia, pruebas exhaustivas en dispositivos físicos y configuración de anuncios recompensados (Rewarded) que incentivan al jugador a continuar jugando.',
      category: 'aplicaciones',
      origin: 'servicios',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$80 USD',
      deliveryTime: '2 - 4 días hábiles',
      role: 'Especialista en Monetización & SDKs',
      featured: true,
      coverImage: './assets/images/ely/icon-appads.png',
      technologies: ['Google AdMob', 'Unity Ads', 'Mediation SDKs', 'C# Event Callbacks', 'Google Play Policy'],
      metrics: [
        { label: 'Precio Fijo', value: '$80 USD' },
        { label: 'Formatos', value: 'Banner, Interstitial & Rewarded' },
        { label: 'Plataformas', value: 'Android / iOS / Unity' }
      ],
      keyContributions: [
        'Configuración completa de IDs de anuncios y modo de pruebas (Test Ads) para evitar sanciones de Google.',
        'Controladores modulares en C# con eventos onAdLoaded, onAdFailed y onUserEarnedReward.',
        'Optimización de carga en segundo plano para no generar tirones ni caídas de fotogramas.',
        'Documentación paso a paso de uso y soporte post-entrega.'
      ],
      requirements: [
        'Cuenta activa de Google AdMob o Unity Ads con App ID generado.',
        'Proyecto de Unity (versión 2020.3 LTS o superior) listo y sin errores de consola.',
        'Botones o pantallas de UI definidos donde el usuario verá los anuncios recompensados o intersticiales.',
        'Acceso al proyecto vía repositorio de GitHub o paquete .unitypackage.'
      ],
      links: [
        { label: 'Ver Presentación en Canva (Slides)', url: 'https://www.canva.com/design/DAG0NrslxiM/YHdVdLQOt2poFI0yOj-qCQ/view', type: 'canva' }
      ]
    },
    {
      id: 'service-in-app-purchases',
      title: 'In App Purchases System | $80',
      tagline: 'Sistema de compras integradas seguro para Android e iOS',
      description: 'Integración completa de compras dentro de la aplicación para videojuegos o apps: monedas virtuales, gemas, remoción de anuncios y desbloqueo de skins.',
      fullStory: 'Implementación profesional del subsistema de compras integradas (IAP). Manejo seguro de recibos, catálogo de productos consumibles (como monedas o vidas) y no consumibles (como "Quitar Anuncios" permanente), con guardado encriptado de compras restaurables.',
      category: 'aplicaciones',
      origin: 'servicios',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$80 USD',
      deliveryTime: '2 - 3 días hábiles',
      role: 'Ingeniero de Integración IAP & Billing',
      featured: true,
      coverImage: './assets/images/ely/icon-inapppurchase.png',
      technologies: ['Unity IAP', 'Google Play Billing', 'Apple StoreKit', 'C# State Manager', 'Data Encryption'],
      metrics: [
        { label: 'Precio Fijo', value: '$80 USD' },
        { label: 'Seguridad', value: 'Receipt Validation' },
        { label: 'Compatibilidad', value: 'Google Play & App Store' }
      ],
      keyContributions: [
        'Configuración de catálogo de productos en Google Play Console / App Store Connect.',
        'Lógica de compra, fallo y restauración automática de compras previas.',
        'Persistencia de balance de divisas del jugador protegida contra modificaciones locales.',
        'Interfaz de tienda in-game limpia y responsiva adaptada a tu diseño.'
      ],
      requirements: [
        'Cuenta de desarrollador en Google Play Console o Apple Developer activa.',
        'Lista de productos con Product IDs exactos, nombres descriptivos y precios en cada moneda.',
        'Proyecto de Unity funcional sin errores de compilación previos.',
        'Keystore de producción (en caso de que el juego ya esté publicado en la tienda).'
      ],
      links: [
        { label: 'Ver Presentación en Canva (Slides)', url: 'https://www.canva.com/design/DAHCkjRi0ls/YmC7BlfJ8XV_C34xoBTw3g/view', type: 'canva' }
      ]
    },
    {
      id: 'service-sounds-fx',
      title: 'Sounds FX & Music System | $50',
      tagline: 'Gestor completo de audio, efectos y música interactiva',
      description: 'Implementación de sistema de música y efectos sonoros (SFX) para videojuegos o apps: mezcladores, volumen por canales, persistencia y eventos dinámicos.',
      fullStory: 'El sonido es el 50% de la experiencia en cualquier juego o aplicación. Este sistema proporciona un Sound Manager centralizado en Unity, permitiendo disparar efectos sonoros espaciales o estéreo con una sola línea de código, controlar música de fondo con transiciones suaves y guardar preferencias de volumen del usuario.',
      category: 'aplicaciones',
      origin: 'servicios',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$50 USD',
      deliveryTime: '1 - 2 días hábiles',
      role: 'Arquitecto de Audio & Sound Design',
      featured: false,
      coverImage: './assets/images/ely/icon-soundsystempng.png',
      technologies: ['Unity AudioSource', 'AudioMixer', 'FMOD Integration', 'PlayerPrefs Sound Persistence', 'C#'],
      metrics: [
        { label: 'Precio Fijo', value: '$50 USD' },
        { label: 'Entrega Rápida', value: '24 a 48 Horas' },
        { label: 'Canales', value: 'Master, Music & SFX' }
      ],
      keyContributions: [
        'Sound Manager Singleton con métodos PlaySFX(clip) y PlayMusic(clip, fadeDuration).',
        'Configuración de AudioMixer con sliders de volumen en decibelios logarítmicos naturales.',
        'Audio 3D espacializado para fuentes puntuales en videojuegos 3D.',
        'Optimización de importación de clips de audio para reducir drásticamente el peso del build.'
      ],
      requirements: [
        'Archivos de sonido y pistas musicales en formatos .wav, .mp3 o .ogg.',
        'Lista o guion de eventos donde debe sonar cada efecto.',
        'Proyecto de Unity donde se importará y configurará el Sound Manager.'
      ],
      links: [
        { label: 'Ver Presentación en Canva (Slides)', url: 'https://www.canva.com/design/DAG0eNukPlg/6Rbu0zCNNBiQZp2IjRZzyQ/view', type: 'canva' }
      ]
    },
    {
      id: 'service-multiplayer-pun',
      title: 'Multiplayer Photon Network | $120',
      tagline: 'Arquitectura multijugador online, lobbies y sincronización en tiempo real',
      description: 'Configuración y programación de juego multijugador en línea usando Photon PUN 2: salas por código, emparejamiento, sincronización de transformadas y eventos.',
      fullStory: 'Convierte tu juego single-player en una experiencia multijugador competitiva o cooperativa. Implemento la infraestructura de red con Photon PUN 2, gestionando salas, lobby, sincronización de animaciones y RPCs con manejo suave de latencia.',
      category: 'juegos',
      origin: 'servicios',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$120 USD',
      deliveryTime: '4 - 7 días hábiles',
      role: 'Ingeniero de Redes & Multijugador',
      featured: false,
      coverImage: './assets/images/ely/icon-dominicanpower.png',
      technologies: ['Photon PUN 2', 'Photon Voice', 'C# Network Streams', 'Multiplayer Interpolation', 'Lobby System'],
      metrics: [
        { label: 'Precio', value: '$120 USD' },
        { label: 'Capacidad', value: 'Salas & Matchmaking' },
        { label: 'Latencia', value: 'Interpolación Suave' }
      ],
      keyContributions: [
        'Sistema de creación y unión a salas públicas o privadas por código.',
        'Replicación de movimientos y variables sincronizadas vía PhotonView y PhotonTransformView.',
        'Manejo de desconexiones imprevistas y transferencia de Master Client sin caídas.',
        'UI de sala de espera con selector de personaje y estado "Listo".'
      ],
      requirements: [
        'Cuenta gratuita de Photon Engine (photonengine.com) con App ID de PUN 2 listo.',
        'Prefabs de personajes con scripts básicos de movimiento y animaciones ya creados.',
        'Mecánicas centrales del juego definidas.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAHCk6iQVwY/FlPYVFA3lew686sjP3Cyvw/view', type: 'canva' }
      ]
    },
    {
      id: 'clase-unity-csharp',
      title: 'Clase Privada: Desarrollo de Juegos Unity & C#',
      tagline: 'Sesiones personalizadas 1 a 1 para aprender programación y diseño de videojuegos',
      description: 'Aprende a programar videojuegos desde cero o sube de nivel con proyectos reales. Clases prácticas uno a uno enfocadas en lo que tú quieras aprender.',
      fullStory: 'Clases particulares personalizadas impartidas por ElyDev a través de Discord o Google Meet con pantalla compartida. Adaptadas a tu ritmo, desde los fundamentos de programación en C# y físicas en Unity hasta mecánicas complejas, inteligencia artificial y arquitectura de código limpio.',
      category: 'juegos',
      origin: 'clases',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$20 USD / hora',
      deliveryTime: 'Horarios Flexibles a Convenir',
      role: 'Tutor & Desarrollador Senior',
      featured: true,
      coverImage: './assets/images/ely/my-avatar.png',
      technologies: ['Unity 2D & 3D', 'C# Programming', 'Game Architecture', 'Debugging', 'Live Screen Share'],
      metrics: [
        { label: 'Tarifa', value: '$20 USD / hora' },
        { label: 'Modalidad', value: '1 a 1 en Vivo' },
        { label: 'Nivel', value: 'Principiante a Intermedio' }
      ],
      keyContributions: [
        'Clases prácticas con código real y resolución de dudas en vivo.',
        'Material de apoyo, scripts comentados y ejercicios para practicar entre sesiones.',
        'Orientación para el diseño de tu propio videojuego personal.',
        'Revisión y optimización del código de tus propios proyectos.'
      ],
      requirements: [
        'Computadora con Unity Hub y versión reciente de Unity instalada.',
        'Visual Studio o VS Code configurado con soporte para C#.',
        'Discord instalado con micrófono funcional para audio y compartir pantalla.',
        'Lista de dudas o proyecto personal sobre el cual quieras avanzar en clase.'
      ],
      links: [
        { label: 'Ver Información en Canva', url: 'https://www.canva.com/design/DAG0NrslxiM/YHdVdLQOt2poFI0yOj-qCQ/view', type: 'canva' }
      ]
    },
    {
      id: 'clase-monetizacion-publicacion',
      title: 'Clase Privada: Monetización & Lanzamiento Play Store',
      tagline: 'Aprende a monetizar y publicar tu juego en Google Play Store con éxito',
      description: 'Sesión práctica guiada donde aprenderás a compilar APK/AAB, configurar Google Play Console, integrar anuncios AdMob/Unity Ads e implementar compras integradas IAP.',
      fullStory: 'Tutoría especializada donde te guío en todo el proceso para transformar tu proyecto de Unity en un producto comercial listo para el público. Cubrimos desde la generación de Keystores y paquetes AAB hasta la integración de anuncios, compras in-app y políticas de privacidad obligatorias.',
      category: 'aplicaciones',
      origin: 'clases',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$25 USD / hora',
      deliveryTime: 'Sesión en Vivo con Pantalla Compartida',
      role: 'Mentor de Publicación & Monetización',
      featured: false,
      coverImage: './assets/images/ely/icon-appads.png',
      technologies: ['Google Play Console', 'Unity IAP', 'Google AdMob', 'Android App Bundles (.aab)', 'Keystore Security'],
      metrics: [
        { label: 'Tarifa', value: '$25 USD / hora' },
        { label: 'Enfoque', value: 'Lanzamiento Comercial' },
        { label: 'Resultado', value: 'Juego Publicado' }
      ],
      keyContributions: [
        'Paso a paso para crear y firmar tu aplicación para Google Play Store.',
        'Configuración de cuenta de desarrollador, fichas de tienda y cuestionarios de contenido.',
        'Integración práctica de banners y rewarded ads con AdMob.',
        'Evita los rechazos más comunes de Google Play.'
      ],
      requirements: [
        'Proyecto de Unity terminado o en fase final listo para compilar.',
        'Cuenta de Google Play Console (o intención de adquirirla).',
        'Conexión estable a internet para sesión por Discord / Google Meet.'
      ],
      links: [
        { label: 'Ver Información en Canva', url: 'https://www.canva.com/design/DAG0NrslxiM/YHdVdLQOt2poFI0yOj-qCQ/view', type: 'canva' }
      ]
    },
    {
      id: 'clase-multijugador-photon',
      title: 'Clase Privada: Multijugador Online con Photon PUN 2',
      tagline: 'Aprende a crear juegos multijugador online desde cero',
      description: 'Domina la programación de videojuegos online: estructura cliente-servidor, sincronización sin lag, interpolación de movimientos, manejo de salas y RPCs con Photon Network.',
      fullStory: 'Una clase intensiva donde desmitificamos la programación en red. Aprenderás cómo sincronizar personajes entre jugadores, sincronizar disparos y proyectiles, manejar la desconexión de usuarios y crear lobbies con búsqueda de partidas de forma comprensible y modular.',
      category: 'juegos',
      origin: 'clases',
      year: '2024 - 2025',
      showDate: false,
      priceTag: '$25 USD / hora',
      deliveryTime: 'Sesión en Vivo con Pantalla Compartida',
      role: 'Mentor de Multijugador & Networking',
      featured: false,
      coverImage: './assets/images/ely/icon-dominicanpower.png',
      technologies: ['Photon PUN 2', 'Unity C#', 'Network RPCs', 'Lobby & Room Management', 'Smooth Interpolation'],
      metrics: [
        { label: 'Tarifa', value: '$25 USD / hora' },
        { label: 'Enfoque', value: 'Arquitectura Online' },
        { label: 'Tecnología', value: 'Photon Network' }
      ],
      keyContributions: [
        'Entendimiento profundo de RPCs y Custom Properties de Photon.',
        'Técnicas de interpolación de red para que el movimiento de otros jugadores se vea fluido.',
        'Estructura de lobbies para invitar amigos con códigos de sala.',
        'Plantilla de proyecto multijugador funcional para tus futuros juegos.'
      ],
      requirements: [
        'Conocimientos básicos de C# y programación de scripts en Unity.',
        'Unity instalado y cuenta en photonengine.com creada.',
        'Discord para llamada en vivo y visualización compartida de código.'
      ],
      links: [
        { label: 'Ver Ficha en Canva', url: 'https://www.canva.com/design/DAHCk6iQVwY/FlPYVFA3lew686sjP3Cyvw/view', type: 'canva' }
      ]
    }
  ];

  // 2. Estado de la aplicación
  let projects = [];
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0 && parsed.some(p => p.id === 'overdrivers' || p.id === 'service-ads-monetization')) {
        projects = parsed;
      }
    }
  } catch (e) {}
  if (!projects || projects.length === 0) {
    projects = [...initialProjects];
  }

  let selectedOrigin = 'todos';
  let selectedCategory = 'todos';
  let searchQuery = '';
  let selectedProject = null;
  let filteredProjects = [];
  let isModerator = false;

  try {
    const authSaved = localStorage.getItem(AUTH_STORAGE_KEY);
    if (authSaved) {
      const parsedUser = JSON.parse(authSaved);
      if (parsedUser && parsedUser.role === 'moderator') {
        isModerator = true;
      }
    }
  } catch (e) {}

  // 3. Gestión de tema claro / oscuro
  let currentTheme = 'dark';
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      currentTheme = savedTheme;
    }
  } catch (e) {}

  function applyTheme(theme) {
    currentTheme = theme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {}
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      const icon = document.getElementById('theme-toggle-icon');
      if (icon) icon.textContent = '🌙';
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      const icon = document.getElementById('theme-toggle-icon');
      if (icon) icon.textContent = '☀️';
    }
  }

  function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  // 4. Filtrado de proyectos con la regla crítica:
  // "los servicios comunes y clases privadas no deben filtrarse en TODOS"
  function getFilteredProjects() {
    return projects.filter(function (project) {
      if (selectedOrigin === 'todos') {
        if (project.origin === 'servicios' || project.origin === 'clases') {
          return false;
        }
      } else if (project.origin !== selectedOrigin) {
        return false;
      }

      if (selectedCategory !== 'todos' && project.category !== selectedCategory) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = (project.title || '').toLowerCase().includes(q);
        const inTagline = (project.tagline || '').toLowerCase().includes(q);
        const inDesc = (project.description || '').toLowerCase().includes(q);
        const inTech = (project.technologies || []).some(t => t.toLowerCase().includes(q));
        const inRole = (project.role || '').toLowerCase().includes(q);
        const inClient = (project.clientOrTeam || '').toLowerCase().includes(q);

        if (!inTitle && !inTagline && !inDesc && !inTech && !inRole && !inClient) {
          return false;
        }
      }

      return true;
    });
  }

  // 5. Renderizado de las tarjetas de proyectos
  function renderProjectsGrid() {
    filteredProjects = getFilteredProjects();
    const container = document.getElementById('projects-grid');
    const emptyState = document.getElementById('projects-empty-state');
    const countDisplay = document.getElementById('projects-count-display');
    const headerTitle = document.getElementById('catalog-header-title');
    const headerSub = document.getElementById('catalog-header-sub');
    const badgeLabel = document.getElementById('catalog-badge-label');

    if (countDisplay) {
      countDisplay.textContent = 'Mostrando ' + filteredProjects.length + ' de ' + projects.length + ' elementos';
    }

    if (badgeLabel) {
      badgeLabel.textContent =
        selectedOrigin === 'servicios' ? 'Catálogo de Servicios Comunes' :
        selectedOrigin === 'clases' ? 'Clases Privadas Personalizadas' :
        selectedOrigin === 'propio' ? 'Proyectos Propios (Indie)' :
        selectedOrigin === 'trabajado' ? 'Proyectos Trabajados para Clientes' :
        'Catálogo de Proyectos (Todos)';
    }

    if (headerTitle) {
      headerTitle.textContent =
        selectedOrigin === 'servicios' ? 'Servicios Técnicos Especializados' :
        selectedOrigin === 'clases' ? 'Clases & Asesorías Privadas' :
        'Proyectos Trabajados & Propios';
    }

    if (headerSub) {
      headerSub.textContent =
        selectedOrigin === 'servicios' ? 'Sistemas llave en mano de monetización publicitaria, compras in-app, audio y multiplayer.' :
        selectedOrigin === 'clases' ? 'Aprende Unity, programación C#, monetización y multijugador online con sesiones 1 a 1 en vivo.' :
        'Filtra por Propios, Trabajados o explora Servicios Comunes y Clases Privadas.';
    }

    // Actualizar contadores del hero
    const ownCountEl = document.getElementById('metric-count-propio');
    const workedCountEl = document.getElementById('metric-count-trabajado');
    const servicesCountEl = document.getElementById('metric-count-servicios');
    const classesCountEl = document.getElementById('metric-count-clases');
    if (ownCountEl) ownCountEl.textContent = projects.filter(p => p.origin === 'propio').length;
    if (workedCountEl) workedCountEl.textContent = projects.filter(p => p.origin === 'trabajado').length;
    if (servicesCountEl) servicesCountEl.textContent = projects.filter(p => p.origin === 'servicios').length;
    if (classesCountEl) classesCountEl.textContent = projects.filter(p => p.origin === 'clases').length;

    if (!container) return;

    if (filteredProjects.length === 0) {
      container.innerHTML = '';
      container.classList.add('hidden');
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    container.classList.remove('hidden');

    let html = '';
    filteredProjects.forEach(function (project) {
      const isServ = project.origin === 'servicios';
      const isClas = project.origin === 'clases';
      const isProp = project.origin === 'propio';

      const originBadge = isServ
        ? '<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Servicio Técnico</span>'
        : isClas
        ? '<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">Clase Privada</span>'
        : isProp
        ? '<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">Proyecto Propio</span>'
        : '<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Para Cliente</span>';

      const categoryBadge = project.category === 'juegos'
        ? '<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300">🎮 Juego</span>'
        : project.category === 'aplicaciones'
        ? '<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300">📱 App</span>'
        : '<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300">🤝 Colab</span>';

      const priceBadge = project.priceTag
        ? '<div class="inline-flex items-center px-2.5 py-1 rounded-lg bg-amber-400 text-black font-extrabold text-xs shadow-md">' + project.priceTag + '</div>'
        : '';

      const techBadges = (project.technologies || []).slice(0, 4).map(function (t) {
        return '<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">' + t + '</span>';
      }).join('');

      const clientSubtitle = project.clientOrTeam
        ? '<div class="text-[11px] text-cyan-400 font-medium mb-1 truncate">Cliente: ' + project.clientOrTeam + '</div>'
        : '';

      html += `
        <article class="group relative flex flex-col overflow-hidden rounded-2xl bg-[#12151d] border border-[#232733] hover:border-amber-400/50 transition-all duration-300 shadow-lg hover:shadow-amber-500/10">
          <!-- Imagen de Cabecera -->
          <div class="relative h-48 w-full overflow-hidden bg-[#181d28] cursor-pointer" onclick="window.ElyPortfolio.openProjectModal('${project.id}')">
            <img
              src="${project.coverImage}"
              alt="${project.title}"
              class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onerror="this.src='./assets/images/ely/my-avatar.png'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#12151d] via-transparent to-black/40"></div>
            
            <div class="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
              ${originBadge}
              ${categoryBadge}
            </div>

            ${priceBadge ? '<div class="absolute top-3 right-3">' + priceBadge + '</div>' : ''}

            ${project.year && !isServ && !isClas ? '<div class="absolute bottom-2.5 right-3 text-[11px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">' + project.year + '</div>' : ''}
          </div>

          <!-- Contenido de la Ficha -->
          <div class="flex flex-1 flex-col p-5 justify-between space-y-4">
            <div class="space-y-2">
              ${clientSubtitle}
              <h3
                class="text-lg font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-1 font-display"
                onclick="window.ElyPortfolio.openProjectModal('${project.id}')"
              >
                ${project.title}
              </h3>
              <p class="text-xs text-amber-300/80 font-medium line-clamp-1">
                ${project.tagline}
              </p>
              <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                ${project.description}
              </p>
            </div>

            <div class="space-y-3 pt-2 border-t border-[#1e2330]">
              <div class="flex flex-wrap items-center gap-1.5">
                ${techBadges}
              </div>

              <div class="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onclick="window.ElyPortfolio.openProjectModal('${project.id}')"
                  class="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Ver Ficha Completa</span>
                  <span>→</span>
                </button>

                ${project.links && project.links.length > 0 ? `
                  <a
                    href="${project.links[0].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs text-slate-400 hover:text-white transition-colors"
                    title="${project.links[0].label}"
                  >
                    ↗ ${project.links[0].type === 'canva' ? 'Canva' : project.links[0].type === 'video' ? 'YouTube' : 'Enlace'}
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        </article>
      `;
    });

    container.innerHTML = html;
  }

  // 6. Modal de detalle del proyecto (Slide-Over Drawer)
  function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    selectedProject = project;

    const modal = document.getElementById('project-detail-modal');
    if (!modal) return;

    // Actualizar campos
    document.getElementById('modal-project-title').textContent = project.title;
    document.getElementById('modal-project-tagline').textContent = project.tagline;
    document.getElementById('modal-project-desc').textContent = project.fullStory || project.description;
    
    const imgEl = document.getElementById('modal-project-img');
    if (imgEl) {
      imgEl.src = project.coverImage;
      imgEl.onerror = function () { this.src = './assets/images/ely/my-avatar.png'; };
    }

    const priceEl = document.getElementById('modal-project-price');
    if (priceEl) {
      if (project.priceTag) {
        priceEl.textContent = project.priceTag;
        priceEl.parentElement.classList.remove('hidden');
      } else {
        priceEl.parentElement.classList.add('hidden');
      }
    }

    const roleEl = document.getElementById('modal-project-role');
    if (roleEl) roleEl.textContent = project.role || 'Game Developer';

    const clientEl = document.getElementById('modal-project-client');
    if (clientEl) {
      if (project.clientOrTeam) {
        clientEl.textContent = project.clientOrTeam;
        clientEl.parentElement.classList.remove('hidden');
      } else {
        clientEl.parentElement.classList.add('hidden');
      }
    }

    // Métricas
    const metricsContainer = document.getElementById('modal-project-metrics');
    if (metricsContainer) {
      if (project.metrics && project.metrics.length > 0) {
        metricsContainer.innerHTML = project.metrics.map(function (m) {
          return `
            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div class="text-[10px] text-slate-400 font-medium">${m.label}</div>
              <div class="text-xs font-bold text-white mt-0.5">${m.value}</div>
            </div>
          `;
        }).join('');
        metricsContainer.parentElement.classList.remove('hidden');
      } else {
        metricsContainer.parentElement.classList.add('hidden');
      }
    }

    // Contribuciones clave
    const contribContainer = document.getElementById('modal-project-contributions');
    if (contribContainer) {
      if (project.keyContributions && project.keyContributions.length > 0) {
        contribContainer.innerHTML = project.keyContributions.map(function (c) {
          return `
            <li class="flex items-start gap-2 text-xs text-slate-300">
              <span class="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
              <span>${c}</span>
            </li>
          `;
        }).join('');
        contribContainer.parentElement.classList.remove('hidden');
      } else {
        contribContainer.parentElement.classList.add('hidden');
      }
    }

    // Requisitos (si es servicio o clase)
    const reqContainer = document.getElementById('modal-project-requirements');
    if (reqContainer) {
      if (project.requirements && project.requirements.length > 0) {
        reqContainer.innerHTML = project.requirements.map(function (r) {
          return `
            <li class="flex items-start gap-2 text-xs text-slate-300">
              <span class="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
              <span>${r}</span>
            </li>
          `;
        }).join('');
        reqContainer.parentElement.classList.remove('hidden');
      } else {
        reqContainer.parentElement.classList.add('hidden');
      }
    }

    // Tecnologías
    const techContainer = document.getElementById('modal-project-techs');
    if (techContainer) {
      techContainer.innerHTML = (project.technologies || []).map(function (t) {
        return '<span class="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-amber-300 border border-white/10">' + t + '</span>';
      }).join('');
    }

    // Enlaces externos
    const linksContainer = document.getElementById('modal-project-links');
    if (linksContainer) {
      if (project.links && project.links.length > 0) {
        linksContainer.innerHTML = project.links.map(function (l) {
          return `
            <a
              href="${l.url}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <span>${l.label}</span>
              <span>↗</span>
            </a>
          `;
        }).join('');
        linksContainer.classList.remove('hidden');
      } else {
        linksContainer.classList.add('hidden');
      }
    }

    // Botón de solicitar servicio / contactar
    const contactCta = document.getElementById('modal-project-contact-btn');
    if (contactCta) {
      contactCta.onclick = function () {
        closeProjectModal();
        openContactModal(project.title);
      };
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    const modal = document.getElementById('project-detail-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // 7. Navegación Anterior / Siguiente en Modal
  function navigateProjectModal(direction) {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex < 0) return;

    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < filteredProjects.length) {
      openProjectModal(filteredProjects[nextIndex].id);
    }
  }

  // 8. Modal de Contacto
  function openContactModal(initialSubject) {
    const modal = document.getElementById('contact-modal');
    if (!modal) return;
    const subjInput = document.getElementById('contact-subject');
    if (subjInput && initialSubject) {
      subjInput.value = initialSubject;
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

    const mailto = `mailto:eliezerterrero275@gmail.com?subject=${encodeURIComponent(subject || 'Consulta Portafolio')}&body=${encodeURIComponent('De: ' + name + ' (' + email + ')\n\n' + message)}`;
    window.location.href = mailto;

    const msg = document.getElementById('contact-success-msg');
    if (msg) {
      msg.classList.remove('hidden');
      setTimeout(function () {
        msg.classList.add('hidden');
        closeContactModal();
      }, 2500);
    }
  }

  // 9. Modal de CV Imprimible
  function openResumeModal() {
    const modal = document.getElementById('resume-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  // 10. Modal de Autenticación de Moderador
  function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  function handleAuthSubmit(e) {
    e.preventDefault();
    const pass = document.getElementById('auth-password').value;
    if (pass === 'elydev2026') {
      isModerator = true;
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ role: 'moderator', username: 'ElyDev' }));
      } catch (err) {}
      alert('¡Acceso de Moderador Autorizado!');
      closeAuthModal();
      updateModeratorUI();
    } else {
      alert('Contraseña incorrecta. (Pista: elydev2026)');
    }
  }

  function handleLogout() {
    isModerator = false;
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (err) {}
    alert('Sesión de moderador cerrada.');
    updateModeratorUI();
  }

  function updateModeratorUI() {
    const modElements = document.querySelectorAll('.moderator-only');
    modElements.forEach(function (el) {
      if (isModerator) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
    const authBtn = document.getElementById('nav-auth-btn');
    if (authBtn) {
      authBtn.textContent = isModerator ? 'Cerrar Moderador' : 'Acceso Moderador';
    }
  }

  // 11. Modal para Agregar Proyecto (Solo moderador)
  function openAddProjectModal() {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    const modal = document.getElementById('add-project-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAddProjectModal() {
    const modal = document.getElementById('add-project-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  function handleAddProjectSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('new-proj-title').value;
    const tagline = document.getElementById('new-proj-tagline').value;
    const origin = document.getElementById('new-proj-origin').value;
    const category = document.getElementById('new-proj-category').value;
    const priceTag = document.getElementById('new-proj-price').value;
    const desc = document.getElementById('new-proj-desc').value;
    const techs = document.getElementById('new-proj-techs').value.split(',').map(s => s.trim()).filter(Boolean);

    const newProject = {
      id: 'proj-' + Date.now(),
      title: title,
      tagline: tagline,
      origin: origin,
      category: category,
      priceTag: priceTag || undefined,
      description: desc,
      fullStory: desc,
      coverImage: './assets/images/ely/my-avatar.png',
      technologies: techs.length > 0 ? techs : ['Unity', 'C#'],
      role: 'Desarrollador'
    };

    projects.unshift(newProject);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {}

    closeAddProjectModal();
    renderProjectsGrid();
    alert('¡Proyecto agregado con éxito!');
  }

  // 12. Restablecer datos originales
  function resetSampleData() {
    if (confirm('¿Restablecer los proyectos y servicios originales de muestra?')) {
      projects = [...initialProjects];
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (err) {}
      renderProjectsGrid();
      alert('Proyectos restablecidos.');
    }
  }

  // 13. Event Listeners y arranque
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(currentTheme);

    // Theme toggle button
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // Auth nav button
    const authNavBtn = document.getElementById('nav-auth-btn');
    if (authNavBtn) {
      authNavBtn.addEventListener('click', function () {
        if (isModerator) {
          handleLogout();
        } else {
          openAuthModal();
        }
      });
    }

    // Filter Buttons (Origen)
    const originButtons = document.querySelectorAll('[data-origin-filter]');
    originButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        originButtons.forEach(b => {
          b.classList.remove('bg-amber-400', 'text-black', 'font-bold');
          b.classList.add('bg-[#141822]', 'text-slate-300');
        });
        btn.classList.add('bg-amber-400', 'text-black', 'font-bold');
        btn.classList.remove('bg-[#141822]', 'text-slate-300');

        selectedOrigin = btn.getAttribute('data-origin-filter');
        renderProjectsGrid();
      });
    });

    // Category Buttons (Pills)
    const categoryButtons = document.querySelectorAll('[data-category-filter]');
    categoryButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        categoryButtons.forEach(b => {
          b.classList.remove('bg-white/20', 'text-white', 'border-amber-400');
          b.classList.add('bg-white/5', 'text-slate-400');
        });
        btn.classList.add('bg-white/20', 'text-white', 'border-amber-400');
        btn.classList.remove('bg-white/5', 'text-slate-400');

        selectedCategory = btn.getAttribute('data-category-filter');
        renderProjectsGrid();
      });
    });

    // Search Input
    const searchInput = document.getElementById('projects-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        searchQuery = e.target.value;
        renderProjectsGrid();
      });
    }

    const searchClear = document.getElementById('projects-search-clear');
    if (searchClear && searchInput) {
      searchClear.addEventListener('click', function () {
        searchInput.value = '';
        searchQuery = '';
        renderProjectsGrid();
      });
    }

    // Reset filters button
    const resetFiltersBtn = document.getElementById('reset-filters-btn');
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', function () {
        selectedOrigin = 'todos';
        selectedCategory = 'todos';
        searchQuery = '';
        if (searchInput) searchInput.value = '';

        // Reset UI active states
        originButtons.forEach(b => {
          if (b.getAttribute('data-origin-filter') === 'todos') {
            b.classList.add('bg-amber-400', 'text-black', 'font-bold');
            b.classList.remove('bg-[#141822]', 'text-slate-300');
          } else {
            b.classList.remove('bg-amber-400', 'text-black', 'font-bold');
            b.classList.add('bg-[#141822]', 'text-slate-300');
          }
        });

        categoryButtons.forEach(b => {
          if (b.getAttribute('data-category-filter') === 'todos') {
            b.classList.add('bg-white/20', 'text-white', 'border-amber-400');
            b.classList.remove('bg-white/5', 'text-slate-400');
          } else {
            b.classList.remove('bg-white/20', 'text-white', 'border-amber-400');
            b.classList.add('bg-white/5', 'text-slate-400');
          }
        });

        renderProjectsGrid();
      });
    }

    // Quick metric cards in Hero
    const metricCards = document.querySelectorAll('[data-hero-metric]');
    metricCards.forEach(function (card) {
      card.addEventListener('click', function () {
        const origin = card.getAttribute('data-hero-metric');
        selectedOrigin = origin;
        originButtons.forEach(b => {
          if (b.getAttribute('data-origin-filter') === origin) {
            b.classList.add('bg-amber-400', 'text-black', 'font-bold');
            b.classList.remove('bg-[#141822]', 'text-slate-300');
          } else {
            b.classList.remove('bg-amber-400', 'text-black', 'font-bold');
            b.classList.add('bg-[#141822]', 'text-slate-300');
          }
        });
        renderProjectsGrid();
        const projSection = document.getElementById('proyectos');
        if (projSection) {
          projSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Form submits
    const contactForm = document.getElementById('contact-form');
    if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

    const authForm = document.getElementById('auth-form');
    if (authForm) authForm.addEventListener('submit', handleAuthSubmit);

    const addProjForm = document.getElementById('add-project-form');
    if (addProjForm) addProjForm.addEventListener('submit', handleAddProjectSubmit);

    // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeProjectModal();
        closeContactModal();
        closeResumeModal();
        closeAuthModal();
        closeAddProjectModal();
      } else if (e.key === 'ArrowLeft') {
        navigateProjectModal(-1);
      } else if (e.key === 'ArrowRight') {
        navigateProjectModal(1);
      }
    });

    updateModeratorUI();
    renderProjectsGrid();
  });

  // Exponer API global para interactividad
  window.ElyPortfolio = {
    openProjectModal: openProjectModal,
    closeProjectModal: closeProjectModal,
    navigateProjectModal: navigateProjectModal,
    openContactModal: openContactModal,
    closeContactModal: closeContactModal,
    openResumeModal: openResumeModal,
    closeResumeModal: closeResumeModal,
    openAuthModal: openAuthModal,
    closeAuthModal: closeAuthModal,
    openAddProjectModal: openAddProjectModal,
    closeAddProjectModal: closeAddProjectModal,
    resetSampleData: resetSampleData,
    toggleTheme: toggleTheme
  };
})();
