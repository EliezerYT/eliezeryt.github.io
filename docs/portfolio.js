/**
 * ElyDev Portfolio - Pure Native JavaScript Core
 * Portafolio Creativo y Desarrollador (Eliezer Terrero)
 * 100% Vanilla JS - Sin dependencias de Node.js en tiempo de ejecución
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio_projects_elydev_v8';
  const EXPERIENCES_STORAGE_KEY = 'portfolio_experiences_v2';
  const TESTIMONIALS_STORAGE_KEY = 'portfolio_satisfied_clients_v3';
  const FEEDBACK_CODES_STORAGE_KEY = 'portfolio_feedback_codes_v2';
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
      galleryImages: [
        './assets/images/ely/overdrivers-teaser.jpg',
        './assets/images/ely/my-avatar.png'
      ],
      youtubeVideo: 'https://www.youtube.com/watch?v=PH6cK45nkto',
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
      galleryImages: [
        './assets/images/ely/icon-enunagoma.png',
        './assets/images/ely/overdrivers-teaser.jpg'
      ],
      youtubeVideo: '',
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
      galleryImages: [
        './assets/images/ely/icon-dominicanpower.png',
        './assets/images/ely/icon-yunonline.png'
      ],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/icon-telesancris.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/icon-yunonline.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/icon-retopolis.jpg'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/icon-helptuber.jpg'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/icon-dominoesrepublic.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/picon-aworld.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/picon-hellishF.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/picon-thespider.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/picon-Rball.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/picon-maddys.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/picon-snakes.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/picon-peace.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/icon-appads.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/icon-inapppurchase.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/icon-soundsystempng.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/icon-dominicanpower.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/my-avatar.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/icon-appads.png'],
      youtubeVideo: '',
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
      galleryImages: ['./assets/images/ely/icon-dominicanpower.png'],
      youtubeVideo: '',
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

  // 1.1 Listado Oficial de Experiencia Laboral & Contratos
  const initialExperiences = [
    {
      id: 'exp-moneyfight-cesar',
      title: 'Freelance Game Developer',
      company: 'MoneyFight & Cesar',
      location: 'Remoto',
      period: 'Feb 2025 — Presente',
      startDate: '2025-02-01',
      color: 'text-amber-400',
      description: 'Desarrollo en producción activa de un nuevo título confidencial de alto impacto para plataformas interactivas.',
      technologies: ['Unity', 'C#', 'Game Architecture']
    },
    {
      id: 'exp-capricornio-games',
      title: 'Freelance Game & Web Developer',
      company: 'Capricornio Games (CapricornioTV)',
      location: 'República Dominicana / Remoto',
      period: 'Ago 2024 — Ene 2025',
      startDate: '2024-08-01',
      color: 'text-cyan-400',
      description: 'Desarrollé íntegramente el juego "MotoLoco: En una goma" y creé su plataforma web promocional completa, gestionando frontend y backend con PHP y base de datos a medida.',
      technologies: ['Unity', 'PHP', 'MySQL', 'Web Full-Stack']
    },
    {
      id: 'exp-caribeatomic',
      title: 'Freelance Game Developer',
      company: 'CaribeAtomic',
      location: 'Remoto',
      period: 'Ene 2022 — Ene 2024',
      startDate: '2022-01-01',
      color: 'text-amber-400',
      description: 'Contribución en diversas áreas críticas de desarrollo de videojuegos, incluyendo beta testing, mejoras de demos y diseño de niveles.',
      technologies: ['Unity', 'Level Design', 'Beta Testing']
    },
    {
      id: 'exp-moneyfight-game',
      title: 'Freelance Lead Game Developer',
      company: 'MoneyFight',
      location: 'Remoto',
      period: 'Nov 2022 — Jul 2023',
      startDate: '2022-11-01',
      color: 'text-amber-400',
      description: 'Desarrollo integral de "MoneyFight Game", abarcando configuración de servidor, multijugador online, base de datos PHP y arte 2D.',
      technologies: ['Unity', 'Multiplayer Network', 'PHP/MySQL']
    },
    {
      id: 'exp-shl-dominoes',
      title: 'Game Developer (Bug Fixer & Optimization)',
      company: 'SHL · Dominoes Republic',
      location: 'Remoto',
      period: 'Nov 2022',
      startDate: '2022-11-15',
      color: 'text-cyan-400',
      description: 'Resolución de problemas críticos de rendimiento e interferencias de geolocalización en el juego de dominó competitivo.',
      technologies: ['Unity', 'Geolocation Services', 'Profiling']
    },
    {
      id: 'exp-dogame-dominican',
      title: 'Freelance Game Developer (UI & Multijugador)',
      company: 'DoGame · Dominican Power',
      location: 'Remoto',
      period: 'Nov 2021 — Feb 2022',
      startDate: '2021-11-01',
      color: 'text-cyan-400',
      description: 'Renovación técnica integral: corrección de errores, cambio de orientación de juego, rediseño completo de UI e integración de Photon Multiplayer.',
      technologies: ['Unity', 'Photon PUN 2', 'UI Remake']
    },
    {
      id: 'exp-jobs-laru',
      title: 'Freelance Game Developer',
      company: 'Jobs Laru',
      location: 'Remoto',
      period: 'Oct 2019 — Dic 2021',
      startDate: '2019-10-01',
      color: 'text-amber-400',
      description: 'Desarrollo y mantenimiento de múltiples proyectos comerciales: Simón, LEVA 3D (Google Play), Fireball (Ads), Dark Castle y GUGO.',
      technologies: ['Unity 2D/3D', 'AdMob', 'Google Play']
    }
  ];

  // 1.2 Listado Oficial de Clientes Satisfechos
  const initialSatisfiedClients = [
    {
      id: 'client-capricornio',
      name: 'CapricornioTV & Capricornio Games',
      role: 'Influencer Masivo & Productora',
      project: 'MotoLoco | En Una Goma (Juego + Web + Backend)',
      year: '2024 - 2025',
      rating: 5,
      avatar: './assets/images/ely/icon-enunagoma.png',
      feedback: 'Desarrollo completo del juego y la plataforma web oficial. Eliezer manejó tanto la programación del videojuego en Unity como la web promocional con base de datos en tiempo récord para nuestra comunidad.',
      tags: ['Videojuego Unity', 'Web PHP/MySQL', 'Audiencia Masiva']
    },
    {
      id: 'client-dogame',
      name: 'DoGame (Estudio de Videojuegos)',
      role: 'Estudio de Videojuegos & Producción',
      project: 'Dominican Power & Yun Online',
      year: '2021 - 2022',
      rating: 5,
      avatar: './assets/images/ely/icon-dominicanpower.png',
      feedback: 'Nos apoyó en un momento crucial realizando el remake integral de interfaz, corrigiendo bugs críticos de red y conectando el multijugador con Photon Network. Un profesional serio, ágil y con gran dominio de Unity.',
      tags: ['Photon PUN 2', 'UI/UX Remake', 'Economía In-Game']
    },
    {
      id: 'client-shl',
      name: 'SHL (Empresa / Cliente Comercial)',
      role: 'Cliente Comercial',
      project: 'Dominoes Republic (Optimización & Reglas)',
      year: '2022',
      rating: 5,
      avatar: './assets/images/ely/icon-dominoesrepublic.png',
      feedback: 'Excelente diagnóstico para solucionar errores críticos de geolocalización y sincronización de reglas en partidas competitivas. Muy resolutivo en situaciones de alta presión.',
      tags: ['Bug Fixing', 'Geolocalización', 'Reglas de Juego']
    },
    {
      id: 'client-jobslaru',
      name: 'Jobs Laru',
      role: 'Estudio de Videojuegos / Colaborador Frecuente',
      project: 'LEVA 3D, Simón, Fireball, Dark Castle, GUGO',
      year: '2019 - 2021',
      rating: 5,
      avatar: './assets/images/ely/my-avatar.png',
      feedback: 'Al principio deposité toda mi confianza en el trabajo de Eliezer y no pudo haber mejor persona. Tuve excelentes resultados de desarrollo en todos los proyectos. Rápido, accesible y con gran nivel técnico.',
      tags: ['Multi-Juegos', 'Google Play', 'Monetización AdMob']
    },
    {
      id: 'client-telesancris',
      name: 'Telesancris (Canal de Televisión)',
      role: 'Joselmin Carmona · Directiva Telesancris',
      project: 'Telesancris Mobile Streaming App',
      year: '2023',
      rating: 5,
      avatar: './assets/images/ely/icon-telesancris.png',
      feedback: 'Me siento sumamente satisfecho de haber trabajado mi aplicación con Eliezer; los resultados fueron mucho mejores de lo que esperaba y con un trato muy profesional.',
      tags: ['Streaming HLS', 'App Móvil', 'Android']
    },
    {
      id: 'client-cifraslimk',
      name: 'Cifra Slimk (Artista Musical)',
      role: 'Artista Urbano / Producción Sonora',
      project: 'OverDrivers Soundtrack ("Quieren Quitarme")',
      year: '2024 - 2025',
      rating: 5,
      avatar: './assets/images/ely/overdrivers-teaser.jpg',
      feedback: 'Increíble visión para sincronizar el ritmo de la música con las físicas de carreras del juego y crear los teasers cinematográficos oficiales con excelente calidad audiovisual.',
      tags: ['Banda Sonora', 'Teasers YouTube', 'Colaboración']
    },
    {
      id: 'client-moneyfight',
      name: 'MoneyFight & Cesar',
      role: 'Empresa / Desarrolladores Asociados',
      project: 'Nuevo Título Interactivo Confidencial',
      year: '2025 - Presente',
      rating: 5,
      avatar: './assets/images/ely/my-avatar.png',
      feedback: 'Actualmente trabajando en un proyecto comercial interactivo de alto impacto. Gran rigurosidad técnica, cumplimiento de hitos y comunicación fluida en cada fase.',
      tags: ['En Desarrollo Activo', 'Unity C#', 'Arquitectura']
    },
    {
      id: 'client-students',
      name: 'Alumnos de Clases Privadas Unity',
      role: 'Comunidad de Alumnos & Desarrolladores Indie',
      project: 'Mentorías Personalizadas en Unity, C# & Monetización',
      year: '2024 - 2025',
      rating: 5,
      avatar: './assets/images/ely/icon-appads.png',
      feedback: 'Las clases personalizadas 1 a 1 te ahorran meses de ensayo y error. Eliezer te enseña directamente en tu proyecto cómo implementar Ads, IAP, multijugador online y cómo compilar sin fallos para la tienda.',
      tags: ['Mentoría 1 a 1', 'Unity & C#', 'Monetización']
    }
  ];

  // 1.3 Códigos Especiales Iniciales para Realizar Feedback (Uso Único)
  const initialFeedbackCodes = [
    { code: 'ELY-VIP-2026', label: 'Invitación VIP Cliente', used: false, disabled: false, createdAt: '2026-03-01' },
    { code: 'CLIENT-GAME-77', label: 'Cliente Videojuego Unity', used: false, disabled: false, createdAt: '2026-03-05' },
    { code: 'STUDENT-UNITY-01', label: 'Alumno de Clase Privada', used: false, disabled: false, createdAt: '2026-03-10' },
    { code: 'FEEDBACK-SPECIAL-99', label: 'Invitado Especial', used: false, disabled: false, createdAt: '2026-03-15' },
    { code: 'DEMO-USED-CODE', label: 'Código de Ejemplo Usado', used: true, usedBy: 'Carlos Martínez', usedAt: '12 mar 2026', disabled: false, createdAt: '2026-02-20' }
  ];

  // 2. Estado de la aplicación
  let projects = [];
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        projects = parsed;
      }
    }
  } catch (e) {}
  if (!projects || projects.length === 0) {
    projects = JSON.parse(JSON.stringify(initialProjects));
  }

  // Experiencias Laborales
  let experiences = [];
  try {
    const expSaved = localStorage.getItem(EXPERIENCES_STORAGE_KEY);
    if (expSaved) {
      const parsedExp = JSON.parse(expSaved);
      if (Array.isArray(parsedExp) && parsedExp.length > 0) {
        experiences = parsedExp;
      }
    }
  } catch (e) {}
  if (!experiences || experiences.length === 0) {
    experiences = JSON.parse(JSON.stringify(initialExperiences));
  }

  // Clientes Satisfechos / Testimonios
  let satisfiedClients = [];
  try {
    const clientsSaved = localStorage.getItem(TESTIMONIALS_STORAGE_KEY);
    if (clientsSaved) {
      const parsedClients = JSON.parse(clientsSaved);
      if (Array.isArray(parsedClients) && parsedClients.length > 0) {
        satisfiedClients = parsedClients;
      }
    }
  } catch (e) {}
  if (!satisfiedClients || satisfiedClients.length === 0) {
    satisfiedClients = JSON.parse(JSON.stringify(initialSatisfiedClients));
  }

  // Códigos de Feedback
  let feedbackCodes = [];
  try {
    const codesSaved = localStorage.getItem(FEEDBACK_CODES_STORAGE_KEY);
    if (codesSaved) {
      const parsedCodes = JSON.parse(codesSaved);
      if (Array.isArray(parsedCodes) && parsedCodes.length > 0) {
        feedbackCodes = parsedCodes;
      }
    }
  } catch (e) {}
  if (!feedbackCodes || feedbackCodes.length === 0) {
    feedbackCodes = JSON.parse(JSON.stringify(initialFeedbackCodes));
  }

  let experienceSortOrder = 'desc'; // 'desc' = más recientes primero, 'asc' = más antiguos primero
  let selectedOrigin = 'todos';
  let selectedCategory = 'todos';
  let searchQuery = '';
  let selectedProject = null;
  let activeMediaIndex = 0; // Para el carrusel de imágenes
  let activeMediaMode = 'image'; // 'image' o 'video'
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

  // 3.1 Sistema de Notificaciones Flotantes de Estado (Status Notifications)
  // Animación slide-in sutil desde la esquina superior derecha con auto-cierre tras 3 segundos.
  function showStatusNotification(optionsOrTitle, maybeMessage, maybeType) {
    let opts = {};
    if (typeof optionsOrTitle === 'string') {
      opts = {
        title: optionsOrTitle,
        message: maybeMessage || '',
        type: maybeType || 'success'
      };
    } else if (optionsOrTitle && typeof optionsOrTitle === 'object') {
      opts = optionsOrTitle;
    }

    const title = opts.title || 'Acción completada';
    const message = opts.message || '';
    const type = opts.type || 'success';
    const duration = typeof opts.duration === 'number' ? opts.duration : 3000;

    let icon = opts.icon;
    let accentBorder = 'border-amber-400/40';
    let iconBg = 'bg-amber-400/20 text-amber-400';
    let badgeText = 'Éxito';
    let badgeClass = 'text-amber-400 bg-amber-400/10 border-amber-400/20';
    let progressBarClass = 'from-amber-400 to-amber-300';

    if (type === 'success') {
      if (!icon) icon = '✓';
      accentBorder = 'border-emerald-500/40';
      iconBg = 'bg-emerald-500/20 text-emerald-400';
      badgeText = 'Confirmado';
      badgeClass = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      progressBarClass = 'from-emerald-500 via-teal-400 to-amber-400';
    } else if (type === 'info') {
      if (!icon) icon = 'ℹ️';
      accentBorder = 'border-cyan-500/40';
      iconBg = 'bg-cyan-500/20 text-cyan-400';
      badgeText = 'Información';
      badgeClass = 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      progressBarClass = 'from-cyan-500 to-blue-400';
    } else if (type === 'warning') {
      if (!icon) icon = '⚠️';
      accentBorder = 'border-amber-500/50';
      iconBg = 'bg-amber-500/20 text-amber-300';
      badgeText = 'Aviso';
      badgeClass = 'text-amber-300 bg-amber-500/10 border-amber-500/20';
      progressBarClass = 'from-amber-500 to-yellow-400';
    } else if (type === 'error') {
      if (!icon) icon = '✕';
      accentBorder = 'border-red-500/50';
      iconBg = 'bg-red-500/20 text-red-400';
      badgeText = 'Error';
      badgeClass = 'text-red-400 bg-red-500/10 border-red-500/20';
      progressBarClass = 'from-red-500 to-rose-400';
    }

    let container = document.getElementById('status-notification-container');
    if (!container) {
      container = document.createElement('aside');
      container.id = 'status-notification-container';
      container.setAttribute('aria-live', 'polite');
      container.setAttribute('aria-atomic', 'true');
      container.className = 'fixed top-5 right-5 z-[99999] pointer-events-none flex flex-col gap-2.5 max-w-sm sm:max-w-md w-full px-4 sm:px-0';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `status-notification-toast status-toast-enter pointer-events-auto relative overflow-hidden rounded-2xl bg-[#121622]/95 border ${accentBorder} text-slate-100 shadow-2xl shadow-black/80 backdrop-blur-md p-4 transition-all duration-300`;
    toast.setAttribute('role', 'status');

    toast.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${iconBg} font-bold text-sm shadow-inner">
          ${icon}
        </div>
        <div class="flex-1 min-w-0 pr-1">
          <div class="flex items-center gap-2">
            <h5 class="toast-title text-xs font-bold text-white font-display tracking-tight">${title}</h5>
            <span class="text-[9px] font-mono font-semibold uppercase px-1.5 py-0.5 rounded border ${badgeClass}">
              ${badgeText}
            </span>
          </div>
          ${message ? `<p class="toast-desc text-[11px] text-slate-300 leading-snug mt-1">${message}</p>` : ''}
        </div>
        <button
          type="button"
          class="toast-close-btn -mr-1 -mt-1 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs cursor-pointer"
          aria-label="Cerrar notificación"
        >
          ✕
        </button>
      </div>
      <div class="status-toast-progress absolute bottom-0 left-0 h-1 bg-gradient-to-r ${progressBarClass}"></div>
    `;

    container.appendChild(toast);

    let dismissed = false;
    let timerId = null;
    let remainingTime = duration;
    let startTime = Date.now();

    function dismissToast() {
      if (dismissed) return;
      dismissed = true;
      if (timerId) clearTimeout(timerId);

      toast.classList.remove('status-toast-enter');
      toast.classList.add('status-toast-exit');

      setTimeout(function () {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 340);
    }

    function startTimer(time) {
      startTime = Date.now();
      timerId = setTimeout(dismissToast, time);
    }

    startTimer(remainingTime);

    // Pausar auto-dismiss al pasar el mouse por encima
    const progressBar = toast.querySelector('.status-toast-progress');
    toast.addEventListener('mouseenter', function () {
      if (dismissed) return;
      if (timerId) clearTimeout(timerId);
      remainingTime -= (Date.now() - startTime);
      if (remainingTime < 500) remainingTime = 500;
      if (progressBar) progressBar.classList.add('paused');
    });

    toast.addEventListener('mouseleave', function () {
      if (dismissed) return;
      if (progressBar) progressBar.classList.remove('paused');
      startTimer(remainingTime);
    });

    // Botón de cierre manual
    const closeBtn = toast.querySelector('.toast-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        dismissToast();
      });
    }

    return toast;
  }

  // Helper para extraer ID de video de YouTube
  function getYouTubeEmbedUrl(url) {
    if (!url || typeof url !== 'string') return null;
    const trimmed = url.trim();
    if (!trimmed) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = trimmed.match(regExp);
    return (match && match[2] && match[2].length === 11)
      ? 'https://www.youtube.com/embed/' + match[2] + '?rel=0&modestbranding=1'
      : null;
  }

  // 4. Filtrado de proyectos
  // Regla del usuario: "al seleccionar servicios comunes o clases privadas no deben aparecer las categorías secundarias"
  function getFilteredProjects() {
    return projects.filter(function (project) {
      if (selectedOrigin === 'todos') {
        if (project.origin === 'servicios' || project.origin === 'clases') {
          return false;
        }
      } else if (project.origin !== selectedOrigin) {
        return false;
      }

      // Si es servicios o clases, se ignoran las categorías de juegos/apps
      if (selectedOrigin !== 'servicios' && selectedOrigin !== 'clases') {
        if (selectedCategory !== 'todos' && project.category !== selectedCategory) {
          return false;
        }
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

  // 5. Renderizado de las tarjetas de proyectos con colapso hacia atrás
  let filterTransitionTimer = null;
  let lastFilterOrigin = 'todos';
  let lastFilterCategory = 'todos';
  let lastFilterSearch = '';
  let renderedCardIds = new Set();

  function updateCatalogHeaders() {
    const countDisplay = document.getElementById('projects-count-display');
    const headerTitle = document.getElementById('catalog-header-title');
    const headerSub = document.getElementById('catalog-header-sub');
    const badgeLabel = document.getElementById('catalog-badge-label');
    const secondaryFilters = document.getElementById('secondary-category-filters');

    // Ocultar categorías secundarias si se elige Servicios o Clases
    if (secondaryFilters) {
      if (selectedOrigin === 'servicios' || selectedOrigin === 'clases') {
        secondaryFilters.classList.add('hidden');
      } else {
        secondaryFilters.classList.remove('hidden');
      }
    }

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
  }

  function renderProjectsGrid(forceFilterTransition) {
    filteredProjects = getFilteredProjects();
    updateCatalogHeaders();

    const container = document.getElementById('projects-grid');
    if (!container) return;

    const currentCards = Array.from(container.querySelectorAll('article[data-id]'));
    const isFilterChange = forceFilterTransition === true || (
      currentCards.length > 0 && (
        lastFilterOrigin !== selectedOrigin ||
        lastFilterCategory !== selectedCategory ||
        lastFilterSearch !== searchQuery
      )
    );

    lastFilterOrigin = selectedOrigin;
    lastFilterCategory = selectedCategory;
    lastFilterSearch = searchQuery;

    // Si es cambio de filtro y ya hay elementos en pantalla:
    // Los cuadros que no van en el nuevo filtro se colapsan hacia atrás (scale down + fade out)
    if (isFilterChange && currentCards.length > 0) {
      if (filterTransitionTimer) {
        clearTimeout(filterTransitionTimer);
      }

      const nextIds = new Set(filteredProjects.map(p => p.id));
      const exitingCards = currentCards.filter(function (card) {
        const id = card.getAttribute('data-id');
        return !nextIds.has(id);
      });

      // Si hay elementos que no van a estar en el nuevo filtro, colapsarlos hacia atrás
      if (exitingCards.length > 0) {
        exitingCards.forEach(function (card) {
          card.classList.remove('card-fade-in');
          card.classList.add('card-collapse-exit');
        });

        filterTransitionTimer = setTimeout(function () {
          renderProjectsGridDOM();
          filterTransitionTimer = null;
        }, 220);
        return;
      }
    }

    renderProjectsGridDOM();
  }

  function renderProjectsGridDOM() {
    const container = document.getElementById('projects-grid');
    const emptyState = document.getElementById('projects-empty-state');
    if (!container) return;

    if (filteredProjects.length === 0) {
      container.innerHTML = '';
      container.classList.add('hidden');
      renderedCardIds.clear();
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    container.classList.remove('hidden');

    let html = '';
    filteredProjects.forEach(function (project, index) {
      const isServ = project.origin === 'servicios';
      const isClas = project.origin === 'clases';
      const isProp = project.origin === 'propio';
      const isAlreadyInDom = renderedCardIds.has(project.id);
      const entranceClass = isAlreadyInDom ? '' : 'card-fade-in';

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

      const hasVideo = !!project.youtubeVideo;
      const mediaBadge = hasVideo
        ? '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-red-600/80 text-white backdrop-blur-sm shadow">▶ Video YouTube</span>'
        : '';

      const techBadges = (project.technologies || []).slice(0, 4).map(function (t) {
        return '<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">' + t + '</span>';
      }).join('');

      const clientSubtitle = project.clientOrTeam
        ? '<div class="text-[11px] text-cyan-400 font-medium mb-1 truncate">Cliente: ' + project.clientOrTeam + '</div>'
        : '';

      // Barra de controles de moderador (Ajustar Orden, Editar, Eliminar)
      const moderatorBar = isModerator ? `
        <div class="flex items-center justify-between p-2.5 bg-amber-400/10 border-b border-amber-400/20 text-xs">
          <div class="flex items-center gap-1">
            <button
              type="button"
              onclick="event.stopPropagation(); window.ElyPortfolio.moveProjectOrder('${project.id}', -1)"
              class="px-2 py-1 rounded bg-[#12151d] text-amber-400 hover:bg-amber-400 hover:text-black font-bold transition-colors"
              title="Mover hacia arriba en la lista"
            >
              ▲ Subir
            </button>
            <button
              type="button"
              onclick="event.stopPropagation(); window.ElyPortfolio.moveProjectOrder('${project.id}', 1)"
              class="px-2 py-1 rounded bg-[#12151d] text-amber-400 hover:bg-amber-400 hover:text-black font-bold transition-colors"
              title="Mover hacia abajo en la lista"
            >
              ▼ Bajar
            </button>
          </div>
          <div class="flex items-center gap-1.5">
            <button
              type="button"
              onclick="event.stopPropagation(); window.ElyPortfolio.duplicateProject('${project.id}')"
              class="px-2 py-1 rounded bg-[#1e2534] text-amber-300 hover:bg-amber-400 hover:text-black text-[11px] font-bold transition-colors shadow-sm"
              title="Duplicar este proyecto"
            >
              📋 Duplicar
            </button>
            <button
              type="button"
              onclick="event.stopPropagation(); window.ElyPortfolio.openEditProjectModal('${project.id}')"
              class="px-2.5 py-1 rounded bg-amber-400 text-black font-bold hover:bg-amber-300 transition-colors shadow-sm"
              title="Editar título, descripciones, imágenes o video en grande"
            >
              ✏️ Editar
            </button>
            <button
              type="button"
              onclick="event.stopPropagation(); window.ElyPortfolio.deleteProject('${project.id}')"
              class="px-2.5 py-1 rounded bg-red-600 text-white font-bold hover:bg-red-500 transition-colors shadow-sm"
              title="Eliminar este cuadro de información"
            >
              🗑️ Eliminar
            </button>
          </div>
        </div>
      ` : '';

      html += `
        <article data-id="${project.id}" class="${entranceClass} group relative flex flex-col overflow-hidden rounded-2xl bg-[#12151d] border border-[#232733] hover:border-amber-400/60 transform hover:scale-105 transition-all duration-300 ease-out shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 z-0 hover:z-10">
          
          ${moderatorBar}

          <!-- Imagen de Cabecera (Soporta 16:9 y cliqueable) -->
          <div class="relative aspect-16-9 w-full overflow-hidden bg-[#181d28] cursor-pointer" onclick="window.ElyPortfolio.openProjectModal('${project.id}')">
            <img
              src="${project.coverImage || './assets/images/ely/my-avatar.png'}"
              alt="${project.title}"
              class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onerror="this.src='./assets/images/ely/my-avatar.png'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#12151d] via-transparent to-black/40"></div>
            
            <div class="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
              ${originBadge}
              ${categoryBadge}
              ${mediaBadge}
            </div>

            ${priceBadge ? '<div class="absolute top-3 right-3 z-10">' + priceBadge + '</div>' : ''}

            ${project.year && !isServ && !isClas ? '<div class="absolute bottom-2.5 right-3 text-[11px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm z-10">' + project.year + '</div>' : ''}
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
    renderedCardIds = new Set(filteredProjects.map(p => p.id));
  }

  // 6. Modal de detalle del proyecto (Soporta 16:9, Múltiples Imágenes y Videos de YouTube en Grande)
  function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    selectedProject = project;
    activeMediaIndex = 0;
    
    // Si tiene video de YouTube configurado, activarlo por defecto o permitir alternar
    activeMediaMode = (project.youtubeVideo && getYouTubeEmbedUrl(project.youtubeVideo)) ? 'video' : 'image';

    const modal = document.getElementById('project-detail-modal');
    if (!modal) return;

    // Actualizar campos de texto
    document.getElementById('modal-project-title').textContent = project.title;
    document.getElementById('modal-project-tagline').textContent = project.tagline;
    document.getElementById('modal-project-desc').textContent = project.fullStory || project.description;

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

    // Renderizar el visor multimedia (16:9)
    renderModalMediaViewer();

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

  // Renderizar visor 16:9 con soporte de Video de YouTube en Grande y Múltiples Imágenes
  function renderModalMediaViewer() {
    if (!selectedProject) return;
    const mediaContainer = document.getElementById('modal-media-viewport');
    const tabsContainer = document.getElementById('modal-media-tabs');
    const thumbsContainer = document.getElementById('modal-media-thumbs');

    const embedUrl = getYouTubeEmbedUrl(selectedProject.youtubeVideo);
    
    // Lista de imágenes (incluye coverImage y galleryImages)
    let images = [];
    if (Array.isArray(selectedProject.galleryImages) && selectedProject.galleryImages.length > 0) {
      images = selectedProject.galleryImages;
    } else if (selectedProject.coverImage) {
      images = [selectedProject.coverImage];
    } else {
      images = ['./assets/images/ely/my-avatar.png'];
    }

    // Pestañas superiores (si tiene video y fotos a la vez)
    if (tabsContainer) {
      if (embedUrl) {
        tabsContainer.innerHTML = `
          <div class="flex items-center gap-2 mb-2">
            <button
              type="button"
              onclick="window.ElyPortfolio.setModalMediaMode('video')"
              class="px-3 py-1 rounded-lg text-xs font-bold transition-all ${activeMediaMode === 'video' ? 'bg-red-600 text-white shadow' : 'bg-white/10 text-slate-300 hover:bg-white/20'}"
            >
              ▶ Ver Video en Grande (YouTube)
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.setModalMediaMode('image')"
              class="px-3 py-1 rounded-lg text-xs font-bold transition-all ${activeMediaMode === 'image' ? 'bg-amber-400 text-black shadow' : 'bg-white/10 text-slate-300 hover:bg-white/20'}"
            >
              📷 Galería de Fotos (${images.length})
            </button>
          </div>
        `;
        tabsContainer.classList.remove('hidden');
      } else {
        tabsContainer.innerHTML = '';
        tabsContainer.classList.add('hidden');
      }
    }

    // Contenido del visor (16:9)
    if (mediaContainer) {
      if (activeMediaMode === 'video' && embedUrl) {
        mediaContainer.innerHTML = `
          <div class="aspect-16-9 w-full rounded-xl overflow-hidden bg-black shadow-inner">
            <iframe
              src="${embedUrl}"
              title="${selectedProject.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full h-full"
            ></iframe>
          </div>
        `;
      } else {
        const currentImgSrc = images[activeMediaIndex] || images[0];
        mediaContainer.innerHTML = `
          <div class="relative aspect-16-9 w-full rounded-xl overflow-hidden bg-black/60 shadow-inner group">
            <img
              src="${currentImgSrc}"
              alt="${selectedProject.title}"
              class="w-full h-full object-cover object-center transition-all duration-300"
              onerror="this.src='./assets/images/ely/my-avatar.png'"
            />
            
            ${images.length > 1 ? `
              <button
                type="button"
                onclick="window.ElyPortfolio.cycleModalImage(-1)"
                class="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white text-sm transition-all"
                title="Foto anterior"
              >
                ◀
              </button>
              <button
                type="button"
                onclick="window.ElyPortfolio.cycleModalImage(1)"
                class="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white text-sm transition-all"
                title="Siguiente foto"
              >
                ▶
              </button>
            ` : ''}
          </div>
        `;
      }
    }

    // Miniaturas (Thumbs) si hay múltiples fotos y está en modo 'image'
    if (thumbsContainer) {
      if (activeMediaMode === 'image' && images.length > 1) {
        thumbsContainer.innerHTML = images.map(function (src, idx) {
          const isActive = idx === activeMediaIndex;
          return `
            <button
              type="button"
              onclick="window.ElyPortfolio.selectModalImage(${idx})"
              class="h-16 w-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${isActive ? 'border-amber-400 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}"
            >
              <img src="${src}" class="w-full h-full object-cover" onerror="this.src='./assets/images/ely/my-avatar.png'" />
            </button>
          `;
        }).join('');
        thumbsContainer.classList.remove('hidden');
      } else {
        thumbsContainer.innerHTML = '';
        thumbsContainer.classList.add('hidden');
      }
    }
  }

  function setModalMediaMode(mode) {
    activeMediaMode = mode;
    renderModalMediaViewer();
  }

  function selectModalImage(index) {
    activeMediaIndex = index;
    renderModalMediaViewer();
  }

  function cycleModalImage(delta) {
    if (!selectedProject) return;
    const images = (selectedProject.galleryImages && selectedProject.galleryImages.length > 0)
      ? selectedProject.galleryImages
      : [selectedProject.coverImage];
    activeMediaIndex = (activeMediaIndex + delta + images.length) % images.length;
    renderModalMediaViewer();
  }

  function closeProjectModal() {
    const modal = document.getElementById('project-detail-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
    // Detener reproducción de iframes al cerrar
    const mediaContainer = document.getElementById('modal-media-viewport');
    if (mediaContainer) mediaContainer.innerHTML = '';
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

  // 8. Testimonios & Clientes Satisfechos
  function renderTestimonialsPreview() {
    const container = document.getElementById('testimonials-preview-grid');
    const badge = document.getElementById('testimonials-count-badge');
    if (badge) {
      badge.textContent = satisfiedClients.length + '+';
    }
    if (!container) return;

    // Mostrar los primeros testimonios en la página principal
    const previewList = satisfiedClients.slice(0, 4);

    container.innerHTML = previewList.map(function (c) {
      const starIcons = '★'.repeat(c.rating || 5);
      const tagBadges = (c.tags || []).map(function (t) {
        return `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/10">${t}</span>`;
      }).join('');

      const moderatorBar = isModerator ? `
        <div class="flex items-center justify-between p-2 mb-2 bg-[#171c26] rounded-xl border border-amber-400/30 text-xs">
          <div class="flex items-center gap-1">
            <button
              type="button"
              onclick="window.ElyPortfolio.moveTestimonialOrder('${c.id}', -1)"
              class="px-2 py-0.5 rounded bg-[#10131a] text-amber-400 hover:bg-amber-400 hover:text-black font-bold cursor-pointer"
              title="Mover arriba"
            >
              ▲ Subir
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.moveTestimonialOrder('${c.id}', 1)"
              class="px-2 py-0.5 rounded bg-[#10131a] text-amber-400 hover:bg-amber-400 hover:text-black font-bold cursor-pointer"
              title="Mover abajo"
            >
              ▼ Bajar
            </button>
          </div>
          <div class="flex items-center gap-1.5">
            <button
              type="button"
              onclick="window.ElyPortfolio.duplicateTestimonial('${c.id}')"
              class="px-2 py-0.5 rounded bg-[#202738] text-amber-300 hover:bg-amber-400 hover:text-black font-bold cursor-pointer"
              title="Duplicar testimonio"
            >
              📋 Duplicar
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.openEditTestimonialModal('${c.id}')"
              class="px-2.5 py-0.5 rounded bg-amber-400 text-black font-bold hover:bg-amber-300 cursor-pointer"
              title="Editar testimonio"
            >
              ✏️ Editar
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.deleteTestimonial('${c.id}')"
              class="px-2.5 py-0.5 rounded bg-red-600 text-white font-bold hover:bg-red-500 cursor-pointer"
              title="Eliminar testimonio"
            >
              🗑️ Eliminar
            </button>
          </div>
        </div>
      ` : '';

      return `
        <div class="rounded-2xl bg-[#12151d] border border-[#232733] p-6 space-y-3 hover:border-amber-400/40 transition-colors">
          ${moderatorBar}
          <div class="flex items-center justify-between">
            <div class="text-amber-400 text-sm font-bold tracking-wider">${starIcons} <span class="text-xs text-slate-400 font-mono">${(c.rating || 5).toFixed(1)}</span></div>
            <span class="text-[11px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded">${c.year || '2025'}</span>
          </div>
          <p class="text-xs text-slate-300 italic leading-relaxed whitespace-pre-line">
            “${c.feedback}”
          </p>
          <div class="pt-3 border-t border-[#1e2330] flex items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <div class="h-9 w-9 rounded-lg overflow-hidden bg-black/40 border border-[#232733] shrink-0">
                <img src="${c.avatar || './assets/images/ely/my-avatar.png'}" alt="${c.name}" class="h-full w-full object-cover" onerror="this.src='./assets/images/ely/my-avatar.png'" />
              </div>
              <div>
                <div class="text-xs font-bold text-white">${c.name}</div>
                <div class="text-[11px] text-amber-400/90 truncate">${c.project}</div>
                <div class="text-[10px] text-slate-500">${c.role}</div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-1 pt-1">
            ${tagBadges}
          </div>
        </div>
      `;
    }).join('');
  }

  function renderSatisfiedClientsModalList() {
    const container = document.getElementById('satisfied-clients-list');
    const badge = document.getElementById('modal-clients-count-badge');
    if (badge) {
      badge.textContent = satisfiedClients.length + ' Clientes';
    }
    if (!container) return;

    container.innerHTML = satisfiedClients.map(function (c) {
      const starIcons = '★'.repeat(c.rating || 5);
      const tagBadges = (c.tags || []).map(function (t) {
        return `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">${t}</span>`;
      }).join('');

      const moderatorBar = isModerator ? `
        <div class="flex items-center justify-between p-2 mb-2 bg-[#171c26] rounded-xl border border-amber-400/30 text-xs">
          <div class="flex items-center gap-1">
            <button
              type="button"
              onclick="window.ElyPortfolio.moveTestimonialOrder('${c.id}', -1)"
              class="px-2 py-0.5 rounded bg-[#10131a] text-amber-400 hover:bg-amber-400 hover:text-black font-bold cursor-pointer"
              title="Mover arriba"
            >
              ▲ Subir
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.moveTestimonialOrder('${c.id}', 1)"
              class="px-2 py-0.5 rounded bg-[#10131a] text-amber-400 hover:bg-amber-400 hover:text-black font-bold cursor-pointer"
              title="Mover abajo"
            >
              ▼ Bajar
            </button>
          </div>
          <div class="flex items-center gap-1.5">
            <button
              type="button"
              onclick="window.ElyPortfolio.duplicateTestimonial('${c.id}')"
              class="px-2 py-0.5 rounded bg-[#202738] text-amber-300 hover:bg-amber-400 hover:text-black font-bold cursor-pointer"
              title="Duplicar testimonio"
            >
              📋 Duplicar
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.openEditTestimonialModal('${c.id}')"
              class="px-2.5 py-0.5 rounded bg-amber-400 text-black font-bold hover:bg-amber-300 cursor-pointer"
              title="Editar testimonio"
            >
              ✏️ Editar
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.deleteTestimonial('${c.id}')"
              class="px-2.5 py-0.5 rounded bg-red-600 text-white font-bold hover:bg-red-500 cursor-pointer"
              title="Eliminar testimonio"
            >
              🗑️ Eliminar
            </button>
          </div>
        </div>
      ` : '';

      return `
        <div class="rounded-2xl bg-[#0e1118] border border-[#232733] p-5 space-y-3 hover:border-amber-400/40 transition-colors">
          ${moderatorBar}
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="h-12 w-12 rounded-xl overflow-hidden bg-black/40 border border-[#232733] shrink-0">
                <img src="${c.avatar || './assets/images/ely/my-avatar.png'}" alt="${c.name}" class="h-full w-full object-cover" onerror="this.src='./assets/images/ely/my-avatar.png'" />
              </div>
              <div>
                <h4 class="text-sm font-bold text-white font-display">${c.name}</h4>
                <div class="text-xs text-amber-400 font-medium">${c.project}</div>
                <div class="text-[11px] text-slate-400">${c.role}</div>
              </div>
            </div>
            <div class="flex flex-col sm:items-end gap-1 shrink-0">
              <div class="star-rating text-sm font-bold text-amber-400">${starIcons} <span class="text-xs text-slate-300">${(c.rating || 5).toFixed(1)}</span></div>
              <div class="text-[11px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded">${c.year || '2025'}</div>
            </div>
          </div>

          <div class="rounded-xl bg-[#141822] p-3 border border-[#1f2534] text-xs text-slate-300 italic leading-relaxed whitespace-pre-line">
            “${c.feedback}”
          </div>

          <div class="flex flex-wrap items-center gap-1.5 pt-1">
            ${tagBadges}
          </div>
        </div>
      `;
    }).join('');
  }

  function openSatisfiedClientsModal() {
    const modal = document.getElementById('satisfied-clients-modal');
    if (!modal) return;
    renderSatisfiedClientsModalList();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeSatisfiedClientsModal() {
    const modal = document.getElementById('satisfied-clients-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function moveTestimonialOrder(testimonialId, delta) {
    const index = satisfiedClients.findIndex(c => c.id === testimonialId);
    if (index < 0) return;
    const newIndex = index + delta;
    if (newIndex < 0 || newIndex >= satisfiedClients.length) return;

    const temp = satisfiedClients[index];
    satisfiedClients[index] = satisfiedClients[newIndex];
    satisfiedClients[newIndex] = temp;

    try {
      localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(satisfiedClients));
    } catch (e) {}

    renderTestimonialsPreview();
    renderSatisfiedClientsModalList();
    showStatusNotification({
      title: 'Posición Actualizada',
      message: `Se reordenó la posición del testimonio de "${satisfiedClients[newIndex].name}".`,
      type: 'info',
      icon: '⇅'
    });
  }

  function duplicateTestimonial(testimonialId) {
    const target = satisfiedClients.find(c => c.id === testimonialId);
    if (!target) return;

    const copy = JSON.parse(JSON.stringify(target));
    copy.id = 'client-' + Date.now();
    copy.name = '[Copia] ' + copy.name;

    const index = satisfiedClients.findIndex(c => c.id === testimonialId);
    if (index >= 0) {
      satisfiedClients.splice(index + 1, 0, copy);
    } else {
      satisfiedClients.unshift(copy);
    }

    try {
      localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(satisfiedClients));
    } catch (e) {}

    renderTestimonialsPreview();
    renderSatisfiedClientsModalList();
    showStatusNotification({
      title: 'Testimonio Duplicado',
      message: `Se ha creado una copia del testimonio de "${target.name}".`,
      type: 'success',
      icon: '📋'
    });
  }

  function deleteTestimonial(testimonialId) {
    const target = satisfiedClients.find(c => c.id === testimonialId);
    if (!target) return;
    if (confirm('¿Eliminar el testimonio de "' + target.name + '"?')) {
      satisfiedClients = satisfiedClients.filter(c => c.id !== testimonialId);
      try {
        localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(satisfiedClients));
      } catch (e) {}
      renderTestimonialsPreview();
      renderSatisfiedClientsModalList();
    }
  }

  let editingTestimonialId = null;

  function openAddTestimonialModal() {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    editingTestimonialId = null;
    const modal = document.getElementById('testimonial-modal');
    const titleEl = document.getElementById('testimonial-modal-title');
    if (titleEl) titleEl.textContent = '+ Agregar Testimonio de Cliente';

    document.getElementById('test-form-id').value = '';
    document.getElementById('test-form-name').value = '';
    document.getElementById('test-form-role').value = '';
    document.getElementById('test-form-project').value = '';
    document.getElementById('test-form-year').value = '2025';
    document.getElementById('test-form-rating').value = '5';
    document.getElementById('test-form-avatar').value = './assets/images/ely/my-avatar.png';
    document.getElementById('test-form-feedback').value = '';
    document.getElementById('test-form-tags').value = 'Videojuego Unity, Colaboración';

    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function openEditTestimonialModal(testimonialId) {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    const target = satisfiedClients.find(c => c.id === testimonialId);
    if (!target) return;
    editingTestimonialId = testimonialId;

    const modal = document.getElementById('testimonial-modal');
    const titleEl = document.getElementById('testimonial-modal-title');
    if (titleEl) titleEl.textContent = '✏️ Editar Testimonio de Cliente';

    document.getElementById('test-form-id').value = target.id;
    document.getElementById('test-form-name').value = target.name || '';
    document.getElementById('test-form-role').value = target.role || '';
    document.getElementById('test-form-project').value = target.project || '';
    document.getElementById('test-form-year').value = target.year || '';
    document.getElementById('test-form-rating').value = String(target.rating || 5);
    document.getElementById('test-form-avatar').value = target.avatar || './assets/images/ely/my-avatar.png';
    document.getElementById('test-form-feedback').value = target.feedback || '';
    document.getElementById('test-form-tags').value = (target.tags || []).join(', ');

    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeTestimonialModal() {
    const modal = document.getElementById('testimonial-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
    editingTestimonialId = null;
  }

  function handleTestimonialSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('test-form-name').value.trim();
    const role = document.getElementById('test-form-role').value.trim();
    const project = document.getElementById('test-form-project').value.trim();
    const year = document.getElementById('test-form-year').value.trim();
    const rating = parseInt(document.getElementById('test-form-rating').value, 10) || 5;
    const avatar = document.getElementById('test-form-avatar').value.trim() || './assets/images/ely/my-avatar.png';
    const feedback = document.getElementById('test-form-feedback').value.trim();
    const tagsRaw = document.getElementById('test-form-tags').value;
    const tags = tagsRaw.split(',').map(s => s.trim()).filter(Boolean);

    if (editingTestimonialId) {
      const target = satisfiedClients.find(c => c.id === editingTestimonialId);
      if (target) {
        target.name = name;
        target.role = role;
        target.project = project;
        target.year = year;
        target.rating = rating;
        target.avatar = avatar;
        target.feedback = feedback;
        target.tags = tags;
      }
    } else {
      const newTestimonial = {
        id: 'client-' + Date.now(),
        name: name,
        role: role,
        project: project,
        year: year || '2025',
        rating: rating,
        avatar: avatar,
        feedback: feedback,
        tags: tags
      };
      satisfiedClients.unshift(newTestimonial);
    }

    try {
      localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(satisfiedClients));
    } catch (err) {}

    closeTestimonialModal();
    renderTestimonialsPreview();
    renderSatisfiedClientsModalList();
    showStatusNotification({
      title: editingTestimonialId ? 'Testimonio Actualizado' : 'Testimonio Guardado',
      message: `El testimonio de "${name}" se guardó exitosamente.`,
      type: 'success',
      icon: '⭐'
    });
  }

  // 8.1 Sistema de Feedback con Códigos Especiales (Dejar Feedback)
  function openFeedbackModal(initialCode) {
    const modal = document.getElementById('feedback-modal');
    const codeInput = document.getElementById('feedback-input-code');
    const statusMsg = document.getElementById('feedback-status-msg');
    if (!modal) return;

    if (statusMsg) statusMsg.classList.add('hidden');
    document.getElementById('feedback-submission-form').reset();

    if (codeInput && initialCode) {
      codeInput.value = initialCode.toUpperCase().trim();
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function handleFeedbackSubmit(e) {
    e.preventDefault();
    const codeInput = document.getElementById('feedback-input-code');
    const nameInput = document.getElementById('feedback-input-name');
    const roleInput = document.getElementById('feedback-input-role');
    const projInput = document.getElementById('feedback-input-project');
    const ratingInput = document.getElementById('feedback-input-rating');
    const textInput = document.getElementById('feedback-input-text');
    const avatarInput = document.getElementById('feedback-input-avatar');
    const tagsInput = document.getElementById('feedback-input-tags');
    const statusMsg = document.getElementById('feedback-status-msg');
    const submitBtn = document.getElementById('feedback-submit-btn');

    const enteredCode = codeInput.value.trim().toUpperCase();
    const name = nameInput.value.trim();
    const role = roleInput.value.trim();
    const project = projInput.value.trim();
    const rating = parseInt(ratingInput.value, 10) || 5;
    const feedback = textInput.value.trim();
    const avatar = avatarInput.value.trim() || './assets/images/ely/my-avatar.png';
    const tags = tagsInput.value.split(',').map(s => s.trim()).filter(Boolean);

    // Validar código
    const foundCode = feedbackCodes.find(c => c.code.toUpperCase() === enteredCode);

    if (!foundCode) {
      if (statusMsg) {
        statusMsg.className = 'p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-xs leading-relaxed';
        statusMsg.innerHTML = '❌ <strong>Código no válido:</strong> El código ingresado no existe en el sistema. Solicita un código a Eliezer para poder publicar tu feedback.';
        statusMsg.classList.remove('hidden');
      }
      return;
    }

    if (foundCode.disabled) {
      if (statusMsg) {
        statusMsg.className = 'p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-xs leading-relaxed';
        statusMsg.innerHTML = '⚠️ <strong>Código deshabilitado:</strong> Este código ha sido pausado temporalmente por el moderador.';
        statusMsg.classList.remove('hidden');
      }
      return;
    }

    if (foundCode.used) {
      if (statusMsg) {
        statusMsg.className = 'p-3 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs leading-relaxed';
        statusMsg.innerHTML = `⚠️ <strong>Código ya utilizado:</strong> Este código fue registrado${foundCode.usedBy ? ' por ' + foundCode.usedBy : ''}${foundCode.usedAt ? ' el ' + foundCode.usedAt : ''}. Cada código es de un solo uso.`;
        statusMsg.classList.remove('hidden');
      }
      return;
    }

    // Invalida el código y registra uso
    foundCode.used = true;
    foundCode.usedBy = name;
    foundCode.usedAt = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });

    // Agregar nuevo testimonio verificado
    const newFeedback = {
      id: 'feedback-' + Date.now(),
      name: name,
      role: role || 'Cliente Verificado',
      project: project,
      year: new Date().getFullYear().toString(),
      rating: rating,
      avatar: avatar,
      feedback: feedback,
      tags: tags.length > 0 ? tags : ['Feedback Verificado', 'Cliente Satisfecho']
    };

    satisfiedClients.unshift(newFeedback);

    try {
      localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(satisfiedClients));
      localStorage.setItem(FEEDBACK_CODES_STORAGE_KEY, JSON.stringify(feedbackCodes));
    } catch (err) {}

    renderTestimonialsPreview();
    renderSatisfiedClientsModalList();

    if (statusMsg) {
      statusMsg.className = 'p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs leading-relaxed';
      statusMsg.innerHTML = '✓ <strong>¡Muchas gracias!</strong> Tu feedback ha sido verificado con éxito y ya aparece publicado en los testimonios de Eliezer Terrero.';
      statusMsg.classList.remove('hidden');
    }

    if (submitBtn) submitBtn.disabled = true;

    setTimeout(function () {
      if (submitBtn) submitBtn.disabled = false;
      closeFeedbackModal();
    }, 2500);
  }

  // 8.2 Panel Moderador de Códigos de Feedback
  function openFeedbackCodesModal() {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    const modal = document.getElementById('feedback-codes-modal');
    if (!modal) return;
    renderFeedbackCodesList();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeFeedbackCodesModal() {
    const modal = document.getElementById('feedback-codes-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function renderFeedbackCodesList() {
    const container = document.getElementById('feedback-codes-list');
    const countEl = document.getElementById('codes-total-count');
    if (countEl) countEl.textContent = feedbackCodes.length;
    if (!container) return;

    if (feedbackCodes.length === 0) {
      container.innerHTML = `
        <div class="p-4 rounded-xl bg-[#141822] text-center text-xs text-slate-400">
          No hay códigos registrados. Genera uno nuevo arriba.
        </div>
      `;
      return;
    }

    container.innerHTML = feedbackCodes.map(function (c) {
      const statusBadge = c.used
        ? `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700">✓ Usado por ${c.usedBy || 'Cliente'} (${c.usedAt || 'Fecha'})</span>`
        : c.disabled
        ? `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-red-900/40 text-red-400 border border-red-800/40">✕ Deshabilitado</span>`
        : `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">● Disponible (1 uso)</span>`;

      return `
        <div class="rounded-xl bg-[#141822] border border-[#232733] p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-black/60 font-mono text-amber-400 font-bold text-xs border border-amber-400/30 tracking-wider">
                ${c.code}
              </span>
              ${statusBadge}
            </div>
            <div class="text-[11px] text-slate-300">
              ${c.label || 'Para cliente comercial o alumno'}
              <span class="text-slate-500 text-[10px] ml-1">· Creado: ${c.createdAt || 'Reciente'}</span>
            </div>
          </div>

          <div class="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onclick="window.ElyPortfolio.copyFeedbackLink('${c.code}')"
              class="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
              title="Copiar enlace directo con este código"
            >
              📋 Link
            </button>

            ${!c.used ? `
              <button
                type="button"
                onclick="window.ElyPortfolio.toggleDisableCode('${c.code}')"
                class="px-2.5 py-1 rounded ${c.disabled ? 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30' : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30'} text-xs font-semibold transition-colors cursor-pointer"
              >
                ${c.disabled ? 'Habilitar' : 'Deshabilitar'}
              </button>
            ` : ''}

            <button
              type="button"
              onclick="window.ElyPortfolio.deleteFeedbackCode('${c.code}')"
              class="px-2.5 py-1 rounded bg-red-600/30 hover:bg-red-600 text-red-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              title="Eliminar código"
            >
              🗑️
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function handleCreateCodeSubmit(e) {
    e.preventDefault();
    const codeInput = document.getElementById('new-code-input');
    const labelInput = document.getElementById('new-code-label');
    const rawCode = codeInput.value.trim().toUpperCase();
    const label = labelInput.value.trim();

    if (!rawCode) return;

    if (feedbackCodes.some(c => c.code.toUpperCase() === rawCode)) {
      alert('Ya existe un código con ese nombre: ' + rawCode);
      return;
    }

    feedbackCodes.unshift({
      code: rawCode,
      label: label || 'Código de cliente',
      used: false,
      disabled: false,
      createdAt: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
    });

    try {
      localStorage.setItem(FEEDBACK_CODES_STORAGE_KEY, JSON.stringify(feedbackCodes));
    } catch (err) {}

    codeInput.value = '';
    labelInput.value = '';
    renderFeedbackCodesList();
    showStatusNotification({
      title: 'Código de Feedback Generado',
      message: `Código "${rawCode}" creado con éxito para ${label || 'cliente'}. Puedes enviárselo para su feedback.`,
      type: 'success',
      icon: '🔑'
    });
  }

  function generateRandomCodeInput() {
    const input = document.getElementById('new-code-input');
    if (!input) return;
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    input.value = 'ELY-VIP-' + randomHex;
    showStatusNotification({
      title: 'Código Aleatorio Generado',
      message: `Código propuesto "${input.value}". Haz clic en "Crear" para guardarlo en la lista.`,
      type: 'info',
      icon: '🎲'
    });
  }

  function toggleDisableCode(codeStr) {
    const target = feedbackCodes.find(c => c.code.toUpperCase() === codeStr.toUpperCase());
    if (!target) return;
    target.disabled = !target.disabled;
    try {
      localStorage.setItem(FEEDBACK_CODES_STORAGE_KEY, JSON.stringify(feedbackCodes));
    } catch (err) {}
    renderFeedbackCodesList();
    showStatusNotification({
      title: target.disabled ? 'Código Deshabilitado' : 'Código Habilitado',
      message: `El código "${codeStr}" ha sido ${target.disabled ? 'pausado temporalmente' : 'reactivado para su uso'}.`,
      type: 'info',
      icon: '⚡'
    });
  }

  function deleteFeedbackCode(codeStr) {
    if (confirm('¿Eliminar el código ' + codeStr + '?')) {
      feedbackCodes = feedbackCodes.filter(c => c.code.toUpperCase() !== codeStr.toUpperCase());
      try {
        localStorage.setItem(FEEDBACK_CODES_STORAGE_KEY, JSON.stringify(feedbackCodes));
      } catch (err) {}
      renderFeedbackCodesList();
      showStatusNotification({
        title: 'Código Eliminado',
        message: `El código "${codeStr}" ha sido eliminado del sistema.`,
        type: 'warning',
        icon: '🗑️'
      });
    }
  }

  function copyFeedbackLink(codeStr) {
    const base = window.location.origin + window.location.pathname;
    const directUrl = base + '?feedback=' + encodeURIComponent(codeStr);
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(directUrl).then(function () {
        showStatusNotification({
          title: 'Enlace Directo Copiado',
          message: `Enlace con código "${codeStr}" copiado al portapapeles. Listo para enviar por WhatsApp o correo.`,
          type: 'success',
          icon: '📋'
        });
      }).catch(function () {
        prompt('Copia este enlace directo para tu cliente:', directUrl);
      });
    } else {
      prompt('Copia este enlace directo para tu cliente:', directUrl);
    }
  }

  function checkFeedbackUrlParam() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const hash = window.location.hash || '';
      const pathname = window.location.pathname || '';

      let targetCode = '';
      let shouldOpen = false;

      if (urlParams.has('feedback')) {
        shouldOpen = true;
        const val = urlParams.get('feedback');
        if (val && val !== 'true' && val !== '1') {
          targetCode = val;
        }
      } else if (hash.includes('feedback')) {
        shouldOpen = true;
        const parts = hash.split('=');
        if (parts.length > 1) {
          targetCode = parts[1];
        }
      } else if (pathname.endsWith('/feedback') || pathname.endsWith('/feedback/')) {
        shouldOpen = true;
      }

      if (shouldOpen) {
        setTimeout(function () {
          openFeedbackModal(targetCode);
        }, 500);
      }
    } catch (e) {}
  }

  // 9. Modal de Contacto y Envío de Correo Directo desde la Web (FormSubmit AJAX + Fallback Mailto)
  function openContactModal(initialSubject) {
    const modal = document.getElementById('contact-modal');
    if (!modal) return;
    const subjInput = document.getElementById('contact-subject');
    if (subjInput && initialSubject) {
      subjInput.value = initialSubject;
    }
    const successMsg = document.getElementById('contact-success-msg');
    const errorMsg = document.getElementById('contact-error-msg');
    if (successMsg) successMsg.classList.add('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  async function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    const submitBtn = document.getElementById('contact-submit-btn');
    const successMsg = document.getElementById('contact-success-msg');
    const errorMsg = document.getElementById('contact-error-msg');

    if (!name || !email || !message) {
      alert('Por favor completa tu nombre, correo y mensaje.');
      return;
    }

    // Estado cargando en el botón
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Enviando mensaje... ⏳</span>';
    }
    if (successMsg) successMsg.classList.add('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');

    try {
      // 1. Envío AJAX directo sin recargar página (FormSubmit API hacia el correo de Eliezer)
      const response = await fetch('https://formsubmit.co/ajax/eliezerterrero275@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: name,
          Correo: email,
          Asunto: subject || 'Consulta desde Portafolio ElyDev',
          Mensaje: message,
          _subject: '[Portafolio ElyDev] ' + (subject || 'Nuevo Mensaje de Contacto'),
          _template: 'table'
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        if (successMsg) {
          successMsg.innerHTML = '✓ ¡Mensaje enviado con éxito directamente a Eliezer Terrero! Recibirás respuesta pronto a tu correo.';
          successMsg.classList.remove('hidden');
        }
        document.getElementById('contact-form').reset();
        setTimeout(function () {
          closeContactModal();
        }, 3000);
      } else {
        throw new Error(result.message || 'Error al enviar');
      }
    } catch (err) {
      console.warn('Fallo envío AJAX, intentando vía mailto o contact.php...', err);
      // Fallback automático para que el mensaje NUNCA se pierda
      const mailto = `mailto:eliezerterrero275@gmail.com?subject=${encodeURIComponent(subject || 'Consulta Portafolio ElyDev')}&body=${encodeURIComponent('De: ' + name + ' (' + email + ')\n\n' + message)}`;
      window.location.href = mailto;

      if (successMsg) {
        successMsg.innerHTML = '✓ Abriendo tu gestor de correo para enviar mensaje a eliezerterrero275@gmail.com...';
        successMsg.classList.remove('hidden');
      }
      setTimeout(function () {
        closeContactModal();
      }, 3000);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Enviar Mensaje</span>';
      }
    }
  }

  // 10. Modal de CV Imprimible
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

  // 11. Modal de Autenticación de Moderador
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
      closeAuthModal();
      updateModeratorUI();
      renderProjectsGrid();
      showStatusNotification({
        title: 'Acceso de Moderador Autorizado',
        message: 'Bienvenido ElyDev. Los controles de edición, reordenar y feedback están activos.',
        type: 'success',
        icon: '🛡️'
      });
    } else {
      alert('Contraseña incorrecta. (Pista: elydev2026)');
    }
  }

  function handleLogout() {
    isModerator = false;
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (err) {}
    updateModeratorUI();
    renderProjectsGrid();
    showStatusNotification({
      title: 'Sesión Cerrada',
      message: 'Has salido del modo moderador de manera segura.',
      type: 'info',
      icon: '🔒'
    });
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
    renderExperiences();
    renderTestimonialsPreview();
    renderSatisfiedClientsModalList();
  }

  // 12. Reordenar Proyectos (Subir o Bajar orden)
  function moveProjectOrder(projectId, delta) {
    const index = projects.findIndex(p => p.id === projectId);
    if (index < 0) return;
    const newIndex = index + delta;
    if (newIndex < 0 || newIndex >= projects.length) return;

    // Intercambiar posición en el array
    const temp = projects[index];
    projects[index] = projects[newIndex];
    projects[newIndex] = temp;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {}

    renderProjectsGrid();
    showStatusNotification({
      title: 'Posición Actualizada',
      message: `Se movió la posición de "${projects[newIndex].title}".`,
      type: 'info',
      icon: '⇅'
    });
  }

  // 12.1 Duplicar Proyecto
  function duplicateProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const copy = JSON.parse(JSON.stringify(project));
    copy.id = 'proj-' + Date.now();
    copy.title = '[Copia] ' + (copy.title || 'Proyecto');

    const index = projects.findIndex(p => p.id === projectId);
    if (index >= 0) {
      projects.splice(index + 1, 0, copy);
    } else {
      projects.unshift(copy);
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {}

    renderProjectsGrid();
    showStatusNotification({
      title: 'Proyecto Duplicado',
      message: `Se ha creado una copia de "${project.title}".`,
      type: 'success',
      icon: '📋'
    });
  }

  // 13. Eliminar Proyecto
  function deleteProject(projectId) {
    const target = projects.find(p => p.id === projectId);
    if (!target) return;
    if (confirm('¿Estás seguro de eliminar el cuadro de información "' + target.title + '"?')) {
      projects = projects.filter(p => p.id !== projectId);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
      } catch (err) {}
      renderProjectsGrid();
    }
  }

  // 14. Modal para Editar Proyecto Existente (Solo moderador)
  let editingProjectId = null;

  function openEditProjectModal(projectId) {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    editingProjectId = projectId;

    const modal = document.getElementById('edit-project-modal');
    if (!modal) return;

    document.getElementById('edit-proj-id').value = project.id;
    document.getElementById('edit-proj-title').value = project.title || '';
    document.getElementById('edit-proj-tagline').value = project.tagline || '';
    document.getElementById('edit-proj-origin').value = project.origin || 'propio';
    document.getElementById('edit-proj-category').value = project.category || 'juegos';
    document.getElementById('edit-proj-price').value = project.priceTag || '';
    document.getElementById('edit-proj-role').value = project.role || '';
    document.getElementById('edit-proj-client').value = project.clientOrTeam || '';
    document.getElementById('edit-proj-year').value = project.year || '';
    document.getElementById('edit-proj-cover').value = project.coverImage || '';
    
    // Múltiples imágenes (galería) separadas por salto de línea
    const galleryImgs = Array.isArray(project.galleryImages) ? project.galleryImages.join('\n') : (project.coverImage || '');
    document.getElementById('edit-proj-gallery').value = galleryImgs;

    // Video de YouTube en grande
    document.getElementById('edit-proj-video').value = project.youtubeVideo || '';

    document.getElementById('edit-proj-desc').value = project.description || '';
    document.getElementById('edit-proj-story').value = project.fullStory || project.description || '';
    document.getElementById('edit-proj-techs').value = (project.technologies || []).join(', ');
    document.getElementById('edit-proj-contribs').value = (project.keyContributions || []).join('\n');
    document.getElementById('edit-proj-reqs').value = (project.requirements || []).join('\n');

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeEditProjectModal() {
    const modal = document.getElementById('edit-project-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
    editingProjectId = null;
  }

  function handleEditProjectSubmit(e) {
    e.preventDefault();
    if (!editingProjectId) return;
    const project = projects.find(p => p.id === editingProjectId);
    if (!project) return;

    project.title = document.getElementById('edit-proj-title').value.trim();
    project.tagline = document.getElementById('edit-proj-tagline').value.trim();
    project.origin = document.getElementById('edit-proj-origin').value;
    project.category = document.getElementById('edit-proj-category').value;
    project.priceTag = document.getElementById('edit-proj-price').value.trim() || undefined;
    project.role = document.getElementById('edit-proj-role').value.trim();
    project.clientOrTeam = document.getElementById('edit-proj-client').value.trim() || undefined;
    project.year = document.getElementById('edit-proj-year').value.trim();
    project.coverImage = document.getElementById('edit-proj-cover').value.trim() || './assets/images/ely/my-avatar.png';

    // Parsear galería de imágenes (una por línea o por coma)
    const galleryRaw = document.getElementById('edit-proj-gallery').value;
    const parsedGallery = galleryRaw
      .split(/[\n,]+/)
      .map(s => s.trim())
      .filter(Boolean);
    project.galleryImages = parsedGallery.length > 0 ? parsedGallery : [project.coverImage];

    // Video de YouTube en grande
    project.youtubeVideo = document.getElementById('edit-proj-video').value.trim();

    project.description = document.getElementById('edit-proj-desc').value.trim();
    project.fullStory = document.getElementById('edit-proj-story').value.trim() || project.description;

    const techsRaw = document.getElementById('edit-proj-techs').value;
    project.technologies = techsRaw.split(',').map(s => s.trim()).filter(Boolean);

    const contribsRaw = document.getElementById('edit-proj-contribs').value;
    project.keyContributions = contribsRaw.split('\n').map(s => s.trim()).filter(Boolean);

    const reqsRaw = document.getElementById('edit-proj-reqs').value;
    project.requirements = reqsRaw.split('\n').map(s => s.trim()).filter(Boolean);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {}

    closeEditProjectModal();
    renderProjectsGrid();
    showStatusNotification({
      title: 'Proyecto Guardado',
      message: `Los cambios en "${project.title}" fueron actualizados y guardados exitosamente.`,
      type: 'success',
      icon: '✏️'
    });
  }

  // 15. Modal para Agregar Proyecto (Solo moderador)
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
    const title = document.getElementById('new-proj-title').value.trim();
    const tagline = document.getElementById('new-proj-tagline').value.trim();
    const origin = document.getElementById('new-proj-origin').value;
    const category = document.getElementById('new-proj-category').value;
    const priceTag = document.getElementById('new-proj-price').value.trim();
    const coverImage = document.getElementById('new-proj-cover').value.trim() || './assets/images/ely/my-avatar.png';
    const galleryRaw = document.getElementById('new-proj-gallery').value;
    const videoUrl = document.getElementById('new-proj-video').value.trim();
    const desc = document.getElementById('new-proj-desc').value.trim();
    const techs = document.getElementById('new-proj-techs').value.split(',').map(s => s.trim()).filter(Boolean);

    const parsedGallery = galleryRaw.split(/[\n,]+/).map(s => s.trim()).filter(Boolean);

    const newProject = {
      id: 'proj-' + Date.now(),
      title: title,
      tagline: tagline,
      origin: origin,
      category: category,
      priceTag: priceTag || undefined,
      description: desc,
      fullStory: desc,
      coverImage: coverImage,
      galleryImages: parsedGallery.length > 0 ? parsedGallery : [coverImage],
      youtubeVideo: videoUrl || '',
      technologies: techs.length > 0 ? techs : ['Unity', 'C#'],
      role: 'Desarrollador'
    };

    projects.unshift(newProject);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {}

    closeAddProjectModal();
    renderProjectsGrid();
    showStatusNotification({
      title: 'Proyecto Guardado',
      message: `El proyecto "${newProject.title}" se guardó y publicó exitosamente en el catálogo.`,
      type: 'success',
      icon: '🚀'
    });
  }

  // 15.1 Experiencia Laboral & Contratos (CRUD, Reordenar, Duplicar)
  function renderExperiences() {
    const container = document.getElementById('experiences-list');
    if (!container) return;

    const sortBtnLabel = document.getElementById('label-sort-experiences');
    if (sortBtnLabel) {
      sortBtnLabel.textContent = (experienceSortOrder === 'asc') 
        ? 'Reordenar: Más Recientes' 
        : 'Reordenar: Antiguos Primero';
    }

    if (experiences.length === 0) {
      container.innerHTML = `
        <div class="rounded-2xl border border-dashed border-[#282f40] bg-[#10131b] p-6 text-center text-xs text-slate-400">
          No hay experiencias laborales registradas.
        </div>
      `;
      return;
    }

    container.innerHTML = experiences.map(function (exp, index) {
      const colorClass = exp.color || 'text-amber-400';
      const techBadges = (exp.technologies || []).map(function (t) {
        return `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400">${t}</span>`;
      }).join('');

      const moderatorBar = isModerator ? `
        <div class="flex items-center justify-between p-2 mb-2 bg-[#171c26] rounded-xl border border-amber-400/30 text-xs">
          <div class="flex items-center gap-1">
            <button
              type="button"
              onclick="window.ElyPortfolio.moveExperienceOrder('${exp.id}', -1)"
              class="px-2 py-0.5 rounded bg-[#10131a] text-amber-400 hover:bg-amber-400 hover:text-black font-bold transition-colors cursor-pointer"
              title="Mover arriba"
            >
              ▲ Subir
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.moveExperienceOrder('${exp.id}', 1)"
              class="px-2 py-0.5 rounded bg-[#10131a] text-amber-400 hover:bg-amber-400 hover:text-black font-bold transition-colors cursor-pointer"
              title="Mover abajo"
            >
              ▼ Bajar
            </button>
          </div>
          <div class="flex items-center gap-1.5">
            <button
              type="button"
              onclick="window.ElyPortfolio.duplicateExperience('${exp.id}')"
              class="px-2 py-0.5 rounded bg-[#202738] text-amber-300 hover:bg-amber-400 hover:text-black font-bold transition-colors cursor-pointer"
              title="Duplicar experiencia"
            >
              📋 Duplicar
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.openEditExperienceModal('${exp.id}')"
              class="px-2.5 py-0.5 rounded bg-amber-400 text-black font-bold hover:bg-amber-300 transition-colors cursor-pointer"
              title="Editar experiencia"
            >
              ✏️ Editar
            </button>
            <button
              type="button"
              onclick="window.ElyPortfolio.deleteExperience('${exp.id}')"
              class="px-2.5 py-0.5 rounded bg-red-600 text-white font-bold hover:bg-red-500 transition-colors cursor-pointer"
              title="Eliminar experiencia"
            >
              🗑️ Eliminar
            </button>
          </div>
        </div>
      ` : '';

      return `
        <div class="rounded-2xl bg-[#12151d] border border-[#232733] p-5 space-y-2 hover:border-amber-400/40 transition-colors">
          ${moderatorBar}
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <h4 class="text-sm font-bold text-white font-display">${exp.title}</h4>
              <div class="text-xs ${colorClass}">${exp.company}${exp.location ? ' · ' + exp.location : ''}</div>
            </div>
            <div class="text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-1 rounded w-fit sm:w-auto">
              ${exp.period}
            </div>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed">${exp.description}</p>
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${techBadges}
          </div>
        </div>
      `;
    }).join('');
  }

  function toggleSortExperiencesByDate() {
    experienceSortOrder = (experienceSortOrder === 'desc') ? 'asc' : 'desc';

    experiences.sort(function (a, b) {
      const dateA = a.startDate || '2000-01-01';
      const dateB = b.startDate || '2000-01-01';
      return experienceSortOrder === 'asc' 
        ? dateA.localeCompare(dateB)
        : dateB.localeCompare(dateA);
    });

    try {
      localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(experiences));
    } catch (e) {}

    renderExperiences();
    showStatusNotification({
      title: 'Cronología Reordenada',
      message: experienceSortOrder === 'asc' 
        ? 'Experiencias ordenadas: Más antiguas primero (cronológico).' 
        : 'Experiencias ordenadas: Más recientes primero.',
      type: 'info',
      icon: '📅'
    });
  }

  function moveExperienceOrder(expId, delta) {
    const index = experiences.findIndex(e => e.id === expId);
    if (index < 0) return;
    const newIndex = index + delta;
    if (newIndex < 0 || newIndex >= experiences.length) return;

    const temp = experiences[index];
    experiences[index] = experiences[newIndex];
    experiences[newIndex] = temp;

    try {
      localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(experiences));
    } catch (e) {}

    renderExperiences();
    showStatusNotification({
      title: 'Posición Actualizada',
      message: `Se reordenó la experiencia "${experiences[newIndex].title}".`,
      type: 'info',
      icon: '⇅'
    });
  }

  function duplicateExperience(expId) {
    const exp = experiences.find(e => e.id === expId);
    if (!exp) return;

    const copy = JSON.parse(JSON.stringify(exp));
    copy.id = 'exp-' + Date.now();
    copy.title = '[Copia] ' + copy.title;

    const index = experiences.findIndex(e => e.id === expId);
    if (index >= 0) {
      experiences.splice(index + 1, 0, copy);
    } else {
      experiences.unshift(copy);
    }

    try {
      localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(experiences));
    } catch (e) {}

    renderExperiences();
    showStatusNotification({
      title: 'Experiencia Duplicada',
      message: `Se ha duplicado la experiencia "${exp.title}".`,
      type: 'success',
      icon: '📋'
    });
  }

  function deleteExperience(expId) {
    const exp = experiences.find(e => e.id === expId);
    if (!exp) return;
    if (confirm('¿Eliminar la experiencia "' + exp.title + '" en ' + exp.company + '?')) {
      experiences = experiences.filter(e => e.id !== expId);
      try {
        localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(experiences));
      } catch (e) {}
      renderExperiences();
    }
  }

  let editingExpId = null;

  function openAddExperienceModal() {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    editingExpId = null;
    const modal = document.getElementById('experience-modal');
    const titleEl = document.getElementById('experience-modal-title');
    if (titleEl) titleEl.textContent = '+ Agregar Experiencia Laboral & Contrato';

    document.getElementById('exp-form-id').value = '';
    document.getElementById('exp-form-title').value = '';
    document.getElementById('exp-form-company').value = '';
    document.getElementById('exp-form-location').value = 'Remoto';
    document.getElementById('exp-form-period').value = '';
    document.getElementById('exp-form-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('exp-form-color').value = 'text-amber-400';
    document.getElementById('exp-form-desc').value = '';
    document.getElementById('exp-form-techs').value = 'Unity, C#';

    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function openEditExperienceModal(expId) {
    if (!isModerator) {
      openAuthModal();
      return;
    }
    const exp = experiences.find(e => e.id === expId);
    if (!exp) return;
    editingExpId = expId;

    const modal = document.getElementById('experience-modal');
    const titleEl = document.getElementById('experience-modal-title');
    if (titleEl) titleEl.textContent = '✏️ Editar Experiencia Laboral & Contrato';

    document.getElementById('exp-form-id').value = exp.id;
    document.getElementById('exp-form-title').value = exp.title || '';
    document.getElementById('exp-form-company').value = exp.company || '';
    document.getElementById('exp-form-location').value = exp.location || '';
    document.getElementById('exp-form-period').value = exp.period || '';
    document.getElementById('exp-form-date').value = exp.startDate || '';
    document.getElementById('exp-form-color').value = exp.color || 'text-amber-400';
    document.getElementById('exp-form-desc').value = exp.description || '';
    document.getElementById('exp-form-techs').value = (exp.technologies || []).join(', ');

    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeExperienceModal() {
    const modal = document.getElementById('experience-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
    editingExpId = null;
  }

  function handleExperienceSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('exp-form-title').value.trim();
    const company = document.getElementById('exp-form-company').value.trim();
    const location = document.getElementById('exp-form-location').value.trim();
    const period = document.getElementById('exp-form-period').value.trim();
    const startDate = document.getElementById('exp-form-date').value;
    const color = document.getElementById('exp-form-color').value;
    const desc = document.getElementById('exp-form-desc').value.trim();
    const techsRaw = document.getElementById('exp-form-techs').value;
    const techs = techsRaw.split(',').map(s => s.trim()).filter(Boolean);

    if (editingExpId) {
      const exp = experiences.find(e => e.id === editingExpId);
      if (exp) {
        exp.title = title;
        exp.company = company;
        exp.location = location;
        exp.period = period;
        exp.startDate = startDate || exp.startDate;
        exp.color = color;
        exp.description = desc;
        exp.technologies = techs;
      }
    } else {
      const newExp = {
        id: 'exp-' + Date.now(),
        title: title,
        company: company,
        location: location,
        period: period,
        startDate: startDate || new Date().toISOString().split('T')[0],
        color: color,
        description: desc,
        technologies: techs
      };
      experiences.unshift(newExp);
    }

    try {
      localStorage.setItem(EXPERIENCES_STORAGE_KEY, JSON.stringify(experiences));
    } catch (err) {}

    closeExperienceModal();
    renderExperiences();
    showStatusNotification({
      title: editingExpId ? 'Experiencia Editada' : 'Experiencia Guardada',
      message: `"${title}" en ${company} se guardó exitosamente en la trayectoria.`,
      type: 'success',
      icon: '💼'
    });
  }

  // 16. Restablecer datos originales
  function resetSampleData() {
    if (confirm('¿Restablecer los proyectos y servicios originales de muestra?')) {
      projects = JSON.parse(JSON.stringify(initialProjects));
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (err) {}
      renderProjectsGrid();
      alert('Proyectos restablecidos.');
    }
  }

  // 17. Event Listeners y arranque
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
        renderProjectsGrid(true);
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
        renderProjectsGrid(true);
      });
    });

    // Search Input
    const searchInput = document.getElementById('projects-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        searchQuery = e.target.value;
        renderProjectsGrid(true);
      });
    }

    const searchClear = document.getElementById('projects-search-clear');
    if (searchClear && searchInput) {
      searchClear.addEventListener('click', function () {
        searchInput.value = '';
        searchQuery = '';
        renderProjectsGrid(true);
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

        renderProjectsGrid(true);
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
        renderProjectsGrid(true);
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

    const editProjForm = document.getElementById('edit-project-form');
    if (editProjForm) editProjForm.addEventListener('submit', handleEditProjectSubmit);

    const expForm = document.getElementById('experience-form');
    if (expForm) expForm.addEventListener('submit', handleExperienceSubmit);

    const testForm = document.getElementById('testimonial-form');
    if (testForm) testForm.addEventListener('submit', handleTestimonialSubmit);

    const feedbackForm = document.getElementById('feedback-submission-form');
    if (feedbackForm) feedbackForm.addEventListener('submit', handleFeedbackSubmit);

    const createCodeForm = document.getElementById('create-code-form');
    if (createCodeForm) createCodeForm.addEventListener('submit', handleCreateCodeSubmit);

    // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeProjectModal();
        closeContactModal();
        closeResumeModal();
        closeAuthModal();
        closeAddProjectModal();
        closeEditProjectModal();
        closeSatisfiedClientsModal();
        closeExperienceModal();
        closeTestimonialModal();
        closeFeedbackModal();
        closeFeedbackCodesModal();
      } else if (e.key === 'ArrowLeft') {
        navigateProjectModal(-1);
      } else if (e.key === 'ArrowRight') {
        navigateProjectModal(1);
      }
    });

    updateModeratorUI();
    renderProjectsGrid();
    renderExperiences();
    renderTestimonialsPreview();
    checkFeedbackUrlParam();
  });

  // Exponer API global para interactividad
  window.ElyPortfolio = {
    // Proyectos
    openProjectModal: openProjectModal,
    closeProjectModal: closeProjectModal,
    navigateProjectModal: navigateProjectModal,
    setModalMediaMode: setModalMediaMode,
    selectModalImage: selectModalImage,
    cycleModalImage: cycleModalImage,
    openAddProjectModal: openAddProjectModal,
    closeAddProjectModal: closeAddProjectModal,
    openEditProjectModal: openEditProjectModal,
    closeEditProjectModal: closeEditProjectModal,
    moveProjectOrder: moveProjectOrder,
    duplicateProject: duplicateProject,
    deleteProject: deleteProject,
    // Experiencias Laborales & Contratos
    renderExperiences: renderExperiences,
    toggleSortExperiencesByDate: toggleSortExperiencesByDate,
    moveExperienceOrder: moveExperienceOrder,
    duplicateExperience: duplicateExperience,
    deleteExperience: deleteExperience,
    openAddExperienceModal: openAddExperienceModal,
    openEditExperienceModal: openEditExperienceModal,
    closeExperienceModal: closeExperienceModal,
    // Testimonios & Clientes Satisfechos
    renderTestimonialsPreview: renderTestimonialsPreview,
    renderSatisfiedClientsModalList: renderSatisfiedClientsModalList,
    openSatisfiedClientsModal: openSatisfiedClientsModal,
    closeSatisfiedClientsModal: closeSatisfiedClientsModal,
    moveTestimonialOrder: moveTestimonialOrder,
    duplicateTestimonial: duplicateTestimonial,
    deleteTestimonial: deleteTestimonial,
    openAddTestimonialModal: openAddTestimonialModal,
    openEditTestimonialModal: openEditTestimonialModal,
    closeTestimonialModal: closeTestimonialModal,
    // Feedback con Código Especial (Clientes)
    openFeedbackModal: openFeedbackModal,
    closeFeedbackModal: closeFeedbackModal,
    // Gestión de Códigos de Feedback (Moderador)
    openFeedbackCodesModal: openFeedbackCodesModal,
    closeFeedbackCodesModal: closeFeedbackCodesModal,
    generateRandomCodeInput: generateRandomCodeInput,
    toggleDisableCode: toggleDisableCode,
    deleteFeedbackCode: deleteFeedbackCode,
    copyFeedbackLink: copyFeedbackLink,
    // Modales de contacto, auth, CV y utilidades
    showStatusNotification: showStatusNotification,
    openContactModal: openContactModal,
    closeContactModal: closeContactModal,
    openResumeModal: openResumeModal,
    closeResumeModal: closeResumeModal,
    openAuthModal: openAuthModal,
    closeAuthModal: closeAuthModal,
    resetSampleData: resetSampleData,
    toggleTheme: toggleTheme
  };
})();
