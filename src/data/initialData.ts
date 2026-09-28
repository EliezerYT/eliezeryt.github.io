import { Project, ExperienceItem, SkillCategory, UserProfile, Testimonial, DeveloperService } from '../types/portfolio';
import projectsData from './projects.json';

export const initialProfile: UserProfile = {
  name: 'Eliezer Terrero',
  brandName: 'ElyDev',
  title: 'Game Developer & Unity Specialist',
  avatar: '/src/assets/images/ely/my-avatar.png',
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

export const initialProjects: Project[] = (projectsData as unknown as Project[]) || [];

export const experienceData: ExperienceItem[] = [
  {
    period: 'Feb 2025 — Presente',
    role: 'Freelance Game Developer',
    company: 'MoneyFight & Cesar',
    location: 'Remoto',
    description: 'Desarrollo en producción activa de un nuevo título confidencial de alto impacto para plataformas interactivas.',
    highlights: [
      'Diseño de mecánicas de juego principales y arquitectura de código modular.',
      'Integración de sistemas de juego avanzados con Unity y C#.'
    ],
    technologies: ['Unity', 'C#', 'Game Architecture', 'Physics']
  },
  {
    period: 'Ago 2024 — Ene 2025',
    role: 'Freelance Game & Web Developer',
    company: 'Capricornio Games (CapricornioTV)',
    location: 'República Dominicana / Remoto',
    description: 'Desarrollé íntegramente el juego "MotoLoco: En una goma" y creé su plataforma web promocional completa, gestionando frontend y backend con PHP y base de datos a medida.',
    highlights: [
      'Creación completa del videojuego de motocicletas y acrobacias para el influencer CapricornioTV.',
      'Desarrollo del sitio web promocional con backend PHP y base de datos para seguimiento y descargas.',
      'Proyecto que fusionó desarrollo de juegos y diseño web de alto impacto mediático.'
    ],
    technologies: ['Unity', 'C#', 'PHP', 'MySQL', 'Frontend Web', 'Game Tuning']
  },
  {
    period: 'Ene 2022 — Ene 2024',
    role: 'Freelance Game Developer',
    company: 'CaribeAtomic',
    location: 'Remoto',
    description: 'Contribución en diversas áreas críticas de desarrollo de videojuegos, incluyendo beta testing, mejoras de demos y diseño de niveles.',
    highlights: [
      'Optimización de demos jugables y retroalimentación técnica en etapas beta.',
      'Diseño y estructuración de niveles interactivos.',
      'Integración de elementos de voz para potenciar la inmersión del jugador.'
    ],
    technologies: ['Unity', 'C#', 'Level Design', 'Voice Integration', 'Beta Testing']
  },
  {
    period: 'Nov 2022 — Jul 2023',
    role: 'Freelance Lead Game Developer',
    company: 'MoneyFight',
    location: 'Remoto',
    description: 'Desarrollo integral de "MoneyFight Game", abarcando configuración de servidor, multijugador online, base de datos PHP y arte 2D.',
    highlights: [
      'Desarrollo de juego completo de punta a punta (gameplay, red, backend y arte).',
      'Configuración de infraestructura de servidores y sincronización multijugador en tiempo real.',
      'Gestión de base de datos PHP para cuentas de usuario y perfiles.'
    ],
    technologies: ['Unity', 'C#', 'Multiplayer Network', 'PHP', 'MySQL', '2D Art']
  },
  {
    period: 'Nov 2022',
    role: 'Game Developer (Bug Fixer & Optimization)',
    company: 'SHL · Dominoes Republic',
    location: 'Remoto',
    description: 'Resolución de problemas críticos de rendimiento e interferencias de geolocalización en el juego de dominó competitivo.',
    highlights: [
      'Diagnóstico y resolución de bugs en el emparejamiento por geolocalización.',
      'Estabilización de las reglas de juego y optimización de la experiencia de usuario.'
    ],
    technologies: ['Unity', 'C#', 'Geolocation Services', 'Profiling']
  },
  {
    period: 'Nov 2021 — Feb 2022',
    role: 'Freelance Game Developer (UI & Multijugador)',
    company: 'DoGame · Dominican Power',
    location: 'Remoto',
    description: 'Renovación técnica integral: corrección de errores, cambio de orientación de juego, rediseño completo de UI e integración de Photon Multiplayer.',
    highlights: [
      'Implementación de Photon Multiplayer para partidas en línea de alta estabilidad.',
      'Desarrollo del sistema completo de personalización de personajes y economía virtual.',
      'Remake visual total de la interfaz de usuario para una experiencia moderna.'
    ],
    technologies: ['Unity', 'C#', 'Photon Network / PUN 2', 'UI Remake', 'Game Economy']
  },
  {
    period: 'Oct 2019 — Dic 2021',
    role: 'Freelance Game Developer',
    company: 'Jobs Laru',
    location: 'Remoto',
    description: 'Desarrollo y mantenimiento de múltiples proyectos de videojuegos comerciales y herramientas:',
    highlights: [
      'Desarrollo completo del videojuego Simón (diseño e implementación 100%).',
      'LEVA 3D: Sistema de construcción, tienda in-game, selector multijugador y subida a Google Play Store.',
      'Fireball: Integración de jugabilidad, sistemas de anuncios publicitarios y mejoras continuas.',
      'Dark Castle: Animaciones de combos, oleadas y sistemas de ataque.',
      'GUGO & Xphera: Mejoras de animaciones, cajas de recompensa (loot boxes) y tienda.'
    ],
    technologies: ['Unity 2D & 3D', 'C#', 'Photon Multiplayer', 'AdMob', 'Google Play Store']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Desarrollo de Videojuegos 2D & 3D',
    skills: [
      'Unity Engine (Especialista C#)',
      'Físicas 2D & 3D (Rigidbody, Colisiones)',
      'Diseño de Niveles & Mecánicas de Juego',
      'Animación de Personajes & Controladores de Estado',
      'Optimización para Móviles (Draw Calls, Memoria)',
      'Publicación en Google Play Store',
      'Tilemaps, Sprites & Shaders'
    ]
  },
  {
    title: 'Juegos Multijugador & Red',
    skills: [
      'Photon Network & Photon PUN 2',
      'Sincronización de Salas & Matchmaking',
      'Replicación de Estados en Tiempo Real',
      'Economía Dentro del Juego & Tiendas',
      'Personalización de Jugadores (Avatares/Skins)',
      'WebSockets & Comunicación Cliente-Servidor'
    ]
  },
  {
    title: 'Monetización, Backend & Web',
    skills: [
      'Monetización con Anuncios (Banner, Interstitial, Rewarded Ads)',
      'Compras Integradas (In-App Purchases - IAP)',
      'PHP & Bases de Datos MySQL para Juegos',
      'Desarrollo Web (HTML5, CSS3, JavaScript, TypeScript)',
      'Arquitectura de Sonido FX & Música Interactiva',
      'Control de Versiones (Git, GitHub)'
    ]
  }
];

export const developerServices: DeveloperService[] = [
  {
    title: 'Ads Monetization Integration',
    description: 'Implementación completa de sistemas publicitarios (Banner, Intersticial y Videos Recompensados) para maximizar los ingresos de tu juego o app.',
    priceTag: '$80',
    canvaUrl: 'https://www.canva.com/design/DAG0NrslxiM/YHdVdLQOt2poFI0yOj-qCQ/view'
  },
  {
    title: 'In-App Purchases System',
    description: 'Integración segura de compras dentro de la aplicación (monedas virtuales, desbloqueo de niveles, remoción de anuncios y tienda in-game).',
    priceTag: '$80',
    canvaUrl: 'https://www.canva.com/design/DAHCkjRi0ls/YmC7BlfJ8XV_C34xoBTw3g/view'
  },
  {
    title: 'Sounds FX & Music System',
    description: 'Implementación de arquitectura y gestor de audio profesional para efectos de sonido, pistas musicales dinámicas y controles de volumen.',
    priceTag: '$50',
    canvaUrl: 'https://www.canva.com/design/DAG0eNukPlg/6Rbu0zCNNBiQZp2IjRZzyQ/view'
  },
  {
    title: 'Clases Privadas de Game Development',
    description: 'Mentoría personalizada y clases prácticas uno a uno en desarrollo de videojuegos con Unity, programación en C# y diseño de mecánicas.',
    priceTag: 'Consultar',
    canvaUrl: 'https://www.canva.com/design/DAG0NrslxiM/YHdVdLQOt2poFI0yOj-qCQ/view'
  }
];

export const clientTestimonials: Testimonial[] = [
  {
    name: 'Joselmin Carmona',
    roleOrProject: 'Cliente de Aplicación',
    content: 'Me siento sumamente satisfecho de haber trabajado mi aplicación con Eliezer; los resultados fueron mucho mejores de lo que esperaba y con un trato muy profesional.'
  },
  {
    name: 'Jobs Laru',
    roleOrProject: 'Estudio de Videojuegos / Colaborador Frecuente',
    content: 'Al principio deposité toda mi confianza en el trabajo de Eliezer y no pudo haber mejor persona. Tuve excelentes resultados de desarrollo en todos los proyectos. Rápido, accesible y con gran nivel técnico.'
  }
];
