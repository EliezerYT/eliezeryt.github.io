import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ArrowUpRight, Gamepad2, Laptop, Users, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const [imageFailed, setImageFailed] = useState(false);

  const getCategoryIcon = () => {
    switch (project.category) {
      case 'juegos':
        return <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />;
      case 'aplicaciones':
        return <Laptop className="w-3.5 h-3.5 text-cyan-400" />;
      case 'collab':
        return <Users className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  const categoryLabel =
    project.category === 'juegos'
      ? 'Juego'
      : project.category === 'aplicaciones'
      ? 'Aplicación'
      : 'Colaboración';

  const getOriginLabel = () => {
    switch (project.origin) {
      case 'propio':
        return 'Propio (Indie)';
      case 'trabajado':
        return 'Trabajado (Cliente)';
      case 'servicios':
        return 'Servicio Común';
      case 'clases':
        return 'Clase Privada';
      default:
        return 'Proyecto';
    }
  };

  const originLabel = getOriginLabel();

  return (
    <article
      onClick={() => onOpenDetails(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenDetails(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalles del proyecto ${project.title}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[#232733] bg-[#12151d] text-left transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
    >
      {/* Visual Media Container with 16:10 aspect ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#181c26]">
        {!imageFailed && project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Zero-broken-image fallback container with themed gradient mesh */
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#181d29] via-[#141720] to-[#0d1017] p-6 text-center">
            <div className="mb-2 p-3 rounded-xl bg-white/5 border border-white/10 text-amber-400">
              {getCategoryIcon()}
            </div>
            <span className="text-sm font-semibold text-slate-200 font-display">
              {project.title}
            </span>
            <span className="text-xs text-slate-400 mt-1">
              {categoryLabel} · {originLabel}
            </span>
          </div>
        )}

        {/* Contrast Scrim overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12151d] via-[#12151d]/40 to-transparent" />

        {/* Featured or Price corner badge if applicable */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          {project.featured && (
            <div className="flex items-center gap-1 rounded bg-[#0b0d11]/85 px-2 py-1 text-[11px] font-medium text-amber-400 border border-amber-400/20 backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              <span>Destacado</span>
            </div>
          )}
          {project.priceTag && (
            <div className="rounded bg-amber-400 px-2 py-0.5 text-[11px] font-bold text-black shadow-sm">
              {project.priceTag}
            </div>
          )}
        </div>

        {/* Year discrete tag on top right (if enabled) */}
        {project.showDate !== false && project.year && (
          <div className="absolute top-3 right-3 rounded bg-[#0b0d11]/85 px-2 py-1 text-[11px] font-mono text-slate-300 border border-white/10 backdrop-blur-sm">
            {project.year}
          </div>
        )}
      </div>

      {/* Card Content Zone */}
      <div className="flex flex-1 flex-col p-5">
        {/* Clean unboxed metadata line with typographic bullet separators */}
        <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 font-medium text-slate-300">
            {getCategoryIcon()}
            {categoryLabel}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className={project.origin === 'propio' ? 'text-amber-400/90' : 'text-cyan-400/90'}>
            {originLabel}
          </span>
          {project.clientOrTeam && (
            <>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="truncate max-w-[130px] text-slate-400" title={project.clientOrTeam}>
                {project.clientOrTeam}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-amber-400 font-display line-clamp-1">
          {project.title}
        </h3>

        {/* Tagline / Brief Description */}
        <p className="mt-1.5 text-xs leading-relaxed text-slate-300 line-clamp-2">
          {project.tagline || project.description}
        </p>

        {/* Role highlight */}
        <div className="mt-3 text-xs text-slate-400">
          <span className="text-slate-500 font-medium">Rol:</span>{' '}
          <span className="text-slate-300">{project.role}</span>
        </div>

        {/* Technologies footer */}
        <div className="mt-auto pt-4 border-t border-[#1d222e] flex items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-hidden text-xs text-slate-400 font-mono">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span key={tech} className="truncate">
                {tech}
                {idx < Math.min(project.technologies.length, 3) - 1 && (
                  <span className="text-slate-600 ml-1.5">/</span>
                )}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-slate-500 ml-0.5">+{project.technologies.length - 3}</span>
            )}
          </div>

          {/* Action indicator */}
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-0.5 transition-transform">
            Ver ficha
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
};
