export type ProjectCategory = 'juegos' | 'aplicaciones' | 'collab';
export type ProjectOrigin = 'propio' | 'trabajado' | 'servicios' | 'clases';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'demo' | 'github' | 'store' | 'video' | 'external' | 'canva';
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullStory?: string;
  category: ProjectCategory;
  origin: ProjectOrigin;
  year: string;
  showDate?: boolean;
  priceTag?: string;
  deliveryTime?: string;
  clientOrTeam?: string;
  role: string;
  featured?: boolean;
  coverImage: string;
  gallery?: string[];
  technologies: string[];
  metrics?: ProjectMetric[];
  keyContributions?: string[];
  requirements?: string[]; // ¿QUÉ NECESITO LISTO?
  links?: ProjectLink[];
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'moderator' | 'visitor';
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Testimonial {
  name: string;
  roleOrProject?: string;
  content: string;
  avatar?: string;
}

export interface DeveloperService {
  title: string;
  description: string;
  icon?: string;
  priceTag?: string;
  canvaUrl?: string;
}

export interface UserProfile {
  name: string;
  brandName?: string;
  title: string;
  avatar?: string;
  bio: string;
  summaryParagraphs: string[];
  location: string;
  availableForWork: boolean;
  email: string;
  github?: string;
  linkedin?: string;
  itchIo?: string;
  linktree?: string;
  youtube?: string;
  instagram?: string;
}
