import { Project, ExperienceItem, SkillCategory, UserProfile, Testimonial, DeveloperService } from '../types/portfolio';
import projectsData from './projects.json';
import experiencesData from './experiences.json';
import testimonialsData from './testimonials.json';

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

export const experienceData: ExperienceItem[] = (experiencesData as unknown as ExperienceItem[]) || [];

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

export const clientTestimonials: Testimonial[] = (testimonialsData as unknown as Testimonial[]) || [];
