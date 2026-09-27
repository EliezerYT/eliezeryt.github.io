import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types/portfolio';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Play,
  CheckCircle2,
  Calendar,
  UserCheck,
  Building2,
  Layers,
  Sparkles,
  Gamepad2,
  Laptop,
  Users,
  Edit3,
  Trash2,
  Clock,
  Coins,
  Images,
  MessageCircle,
  ClipboardCheck,
} from 'lucide-react';

interface ProjectDetailDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevProject?: () => void;
  onNextProject?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  isModerator?: boolean;
  onEditProject?: (project: Project) => void;
  onDeleteProject?: (projectId: string) => void;
  onRequestService?: (project: Project) => void;
}

export const ProjectDetailDrawer: React.FC<ProjectDetailDrawerProps> = ({
  project: propProject,
  isOpen,
  onClose,
  onPrevProject,
  onNextProject,
  hasPrev,
  hasNext,
  isModerator = false,
  onEditProject,
  onDeleteProject,
  onRequestService,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  // Preserve the last project reference so exit animation completes smoothly without blanking
  const lastProjectRef = React.useRef<Project | null>(propProject);
  if (propProject) {
    lastProjectRef.current = propProject;
  }
  const project = propProject || lastProjectRef.current;

  // Close on Escape key and navigate with arrow keys
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev && onPrevProject) {
        onPrevProject();
      } else if (e.key === 'ArrowRight' && hasNext && onNextProject) {
        onNextProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, hasPrev, hasNext, onPrevProject, onNextProject]);

  // Reset active image index and error state when project changes
  useEffect(() => {
    setActiveImageIndex(0);
    setImgError(false);
  }, [project?.id]);

  // Build the list of images (cover + gallery)
  const allImages = project
    ? [project.coverImage, ...(project.gallery || [])].filter((img, idx, arr) => img && arr.indexOf(img) === idx)
    : [];

  const activeImage = project ? (allImages[activeImageIndex] || project.coverImage) : '';

  const getCategoryIcon = () => {
    if (!project) return null;
    switch (project.category) {
      case 'juegos':
        return <Gamepad2 className="w-4 h-4 text-amber-400" />;
      case 'aplicaciones':
        return <Laptop className="w-4 h-4 text-cyan-400" />;
      case 'collab':
        return <Users className="w-4 h-4 text-emerald-400" />;
    }
  };

  const getCategoryName = () => {
    if (!project) return '';
    switch (project.category) {
      case 'juegos':
        return 'Videojuego';
      case 'aplicaciones':
        return 'Aplicación';
      case 'collab':
        return 'Colaboración';
    }
  };

  const getOriginName = () => {
    if (!project) return '';
    switch (project.origin) {
      case 'propio':
        return 'Iniciativa Propia (Indie)';
      case 'trabajado':
        return 'Proyecto Trabajado (Cliente)';
      case 'servicios':
        return 'Servicio Técnico Común';
      case 'clases':
        return 'Clase Privada Personalizada';
      default:
        return 'Proyecto';
    }
  };

  const shouldShowDate = project ? (project.showDate !== false && Boolean(project.year)) : false;

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
          {/* Backdrop with smooth darkening, blur and fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10 pointer-events-none">
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 32,
                stiffness: 320,
                mass: 0.85,
              }}
              className="w-screen max-w-2xl bg-[#0e1117] border-l border-[#232733] shadow-2xl flex flex-col text-slate-200 pointer-events-auto"
            >
          {/* Drawer Top Navigation Header */}
          <div className="flex h-16 items-center justify-between border-b border-[#232733] px-6 bg-[#0b0d11]">
            {/* Quick switcher between projects */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onPrevProject}
                disabled={!hasPrev}
                title="Proyecto anterior (←)"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#232733] bg-[#141822] text-slate-400 hover:text-white hover:bg-[#1e2330] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={onNextProject}
                disabled={!hasNext}
                title="Proyecto siguiente (→)"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#232733] bg-[#141822] text-slate-400 hover:text-white hover:bg-[#1e2330] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <span className="hidden sm:inline text-xs text-slate-500 font-mono ml-2">
                Ficha Técnica & Detalles
              </span>
            </div>

            {/* Actions: Edit & Delete ONLY if logged in as Moderator */}
            <div className="flex items-center gap-2">
              {isModerator && onEditProject && (
                <button
                  type="button"
                  onClick={() => onEditProject(project)}
                  title="Editar este proyecto (Moderador)"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-amber-400 border border-[#232733] rounded-md bg-[#141822] hover:bg-[#1c2230] transition-colors"
                >
                  <Edit3 className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Editar</span>
                </button>
              )}
              {isModerator && onDeleteProject && (
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`¿Eliminar el proyecto "${project.title}" del portafolio?`)) {
                      onDeleteProject(project.id);
                    }
                  }}
                  title="Eliminar este proyecto (Moderador)"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-rose-400 hover:text-rose-300 border border-[#232733] rounded-md bg-[#141822] hover:bg-[#201518] transition-colors"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                title="Cerrar panel (Esc)"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#232733] bg-[#141822] text-slate-300 hover:text-white hover:bg-[#252c3c] transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Drawer Body - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Visual Media Showcase & Image Carousel / Slides */}
            <div className="space-y-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#232733] bg-[#161a24] shadow-lg">
                {!imgError && activeImage ? (
                  <img
                    src={activeImage}
                    alt={`${project.title} - Imagen ${activeImageIndex + 1}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover transition-opacity duration-200"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#1a202c] to-[#0f131a] p-8 text-center">
                    <div className="mb-3 p-4 rounded-xl bg-white/5 border border-white/10 text-amber-400">
                      {getCategoryIcon()}
                    </div>
                    <h3 className="text-xl font-bold text-white font-display">{project.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {getCategoryName()} · {getOriginName()}
                    </p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Slides navigation arrows if multiple images */}
                {allImages.length > 1 && (
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === 0 ? allImages.length - 1 : prev - 1
                        )
                      }
                      title="Imagen anterior"
                      className="pointer-events-auto p-1.5 rounded-full bg-black/70 text-white hover:bg-black/90 border border-white/10 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === allImages.length - 1 ? 0 : prev + 1
                        )
                      }
                      title="Imagen siguiente"
                      className="pointer-events-auto p-1.5 rounded-full bg-black/70 text-white hover:bg-black/90 border border-white/10 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Top badges on media */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-md bg-[#0b0d11]/90 px-2.5 py-1 text-xs font-medium text-white border border-white/10 backdrop-blur-md">
                      {getCategoryIcon()}
                      {getCategoryName()}
                    </span>
                    <span className="rounded-md bg-[#0b0d11]/90 px-2.5 py-1 text-xs font-medium text-amber-400 border border-amber-400/20 backdrop-blur-md">
                      {getOriginName()}
                    </span>
                  </div>

                  {allImages.length > 1 && (
                    <span className="flex items-center gap-1 rounded-md bg-[#0b0d11]/90 px-2 py-0.5 text-[11px] font-mono text-slate-300 border border-white/10 backdrop-blur-md">
                      <Images className="w-3 h-3 text-amber-400" />
                      {activeImageIndex + 1}/{allImages.length}
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnails row if multiple images/slides */}
              {allImages.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[16/9] w-20 overflow-hidden rounded-lg border transition-all shrink-0 ${
                        activeImageIndex === idx
                          ? 'border-amber-400 ring-2 ring-amber-400/30'
                          : 'border-[#232733] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title & Tagline */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                  {project.title}
                </h2>
                {project.priceTag && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-400 text-black font-extrabold text-sm shadow-sm shrink-0">
                    <Coins className="w-4 h-4" />
                    <span>{project.priceTag}</span>
                  </div>
                )}
              </div>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Service / Booking banner if applicable */}
            {(project.origin === 'servicios' || project.origin === 'clases' || project.priceTag) && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-[#181d28] to-[#141822] border border-amber-400/30">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {project.origin === 'clases' ? 'Clase Privada 1 a 1' : 'Servicio Técnico Profesional'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {project.deliveryTime ? (
                      <span className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        {project.deliveryTime}
                      </span>
                    ) : (
                      'Contratación directa, asesoría y soporte personalizado.'
                    )}
                  </p>
                </div>
                {onRequestService && (
                  <button
                    type="button"
                    onClick={() => onRequestService(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors shadow-sm shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>
                      {project.origin === 'clases' ? 'Agendar esta Clase' : 'Contratar este Servicio'}
                    </span>
                  </button>
                )}
              </div>
            )}

            {/* Meta Grid: Role, Client/Team, Year (Date conditionally rendered) */}
            <div
              className={`grid grid-cols-1 ${
                shouldShowDate ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
              } gap-3 p-4 rounded-xl bg-[#141822] border border-[#232733] text-xs`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mi Rol / Especialidad</span>
                </div>
                <div className="font-semibold text-white">{project.role}</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{project.origin === 'propio' ? 'Autor' : 'Cliente / Estudio'}</span>
                </div>
                <div className="font-semibold text-white">
                  {project.clientOrTeam || 'ElyDev (Propio)'}
                </div>
              </div>

              {shouldShowDate && (
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Año / Vigencia</span>
                  </div>
                  <div className="font-semibold text-white font-mono">{project.year}</div>
                </div>
              )}
            </div>

            {/* Interactive Links / Canva / CTAs */}
            {project.links && project.links.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Enlaces & Presentaciones Oficiales
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.links.map((link) => {
                    const isCanva =
                      link.type === 'canva' ||
                      link.url.includes('canva.com') ||
                      link.label.toLowerCase().includes('canva');

                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors shadow-sm ${
                          isCanva
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500'
                            : 'bg-amber-400 text-black hover:bg-amber-300'
                        }`}
                      >
                        {link.type === 'video' && <Play className="w-3.5 h-3.5" />}
                        {link.type === 'github' && <Github className="w-3.5 h-3.5" />}
                        {link.type === 'demo' && <Play className="w-3.5 h-3.5 fill-current" />}
                        {isCanva && <Sparkles className="w-3.5 h-3.5" />}
                        {!isCanva && link.type === 'external' && <ExternalLink className="w-3.5 h-3.5" />}
                        <span>{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Impact Metrics (Numbers in Tabular Font) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Especificaciones & Métricas
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-3.5 rounded-lg bg-[#141822] border border-[#232733]"
                    >
                      <div className="text-lg font-bold text-amber-400 font-mono tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description & Narrative */}
            <div className="space-y-3">
              <h4 className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Sobre el Proyecto / Descripción
              </h4>
              <p className="text-sm leading-relaxed text-slate-300 whitespace-pre-line">
                {project.fullStory || project.description}
              </p>
            </div>

            {/* Key Contributions & Engineering Milestones / Inclusions */}
            {project.keyContributions && project.keyContributions.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  {project.origin === 'servicios' || project.origin === 'clases'
                    ? 'Qué incluye este servicio o clase'
                    : 'Aportes & Soluciones Técnicas'}
                </h4>
                <ul className="space-y-2.5">
                  {project.keyContributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ¿QUÉ NECESITO LISTO? (Prerrequisitos / Requisitos previos) */}
            {project.requirements && project.requirements.length > 0 && (
              <div className="space-y-3 p-4 rounded-xl bg-[#141822] border border-amber-400/30">
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="w-4 h-4 text-amber-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                    ¿QUÉ NECESITO LISTO? (Requisitos Previos)
                  </h4>
                </div>
                <ul className="space-y-2">
                  {project.requirements.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[10px] font-bold text-amber-400 mt-0.5">
                        {rIdx + 1}
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Stack */}
            <div className="space-y-3 pt-3 border-t border-[#1d222e]">
              <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Tecnologías & Herramientas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#161a24] text-slate-300 border border-[#282f40]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  )}
</AnimatePresence>
  );
};
