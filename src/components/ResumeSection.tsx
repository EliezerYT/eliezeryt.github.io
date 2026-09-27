import React, { useState } from 'react';
import { UserProfile, ExperienceItem, SkillCategory, Testimonial, DeveloperService, Project } from '../types/portfolio';
import {
  Briefcase,
  Code2,
  Download,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  Github,
  Youtube,
  Instagram,
  Sparkles,
  Quote,
  Layers,
} from 'lucide-react';

interface ResumeSectionProps {
  profile: UserProfile;
  experience: ExperienceItem[];
  skills: SkillCategory[];
  testimonials?: Testimonial[];
  onOpenContact: () => void;
  onPrintResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  profile,
  experience,
  skills,
  testimonials = [],
  onOpenContact,
  onPrintResume,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-16 py-8">
      {/* 1. Resumen Ejecutivo / Bio Statement */}
      <section id="resumen" className="rounded-2xl border border-[#232733] bg-[#12151d] p-6 sm:p-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-[#202534] pb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {profile.avatar && (
              <div className="relative shrink-0">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-24 w-24 rounded-2xl object-cover border-2 border-amber-400/40 shadow-lg shadow-amber-500/10 bg-[#161a23]"
                />
                <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-[#12151d] text-[10px] text-black font-bold">
                  ✓
                </span>
              </div>
            )}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
                <span>{profile.brandName || 'ElyDev'}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3.5 h-3.5" />
                  {profile.location}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                {profile.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {profile.bio}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-col items-start gap-2.5 shrink-0">
            <button
              onClick={onPrintResume}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Imprimir / Descargar CV</span>
            </button>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-[#181d28] border border-[#272e3f] text-slate-200 hover:text-white hover:bg-[#202736] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">¡Email Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{profile.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
          {profile.summaryParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Social / Profiles */}
        <div className="mt-8 pt-6 border-t border-[#1d222e] flex flex-wrap items-center gap-5 text-xs">
          <span className="text-slate-500 font-medium">Perfiles & Enlaces:</span>
          {profile.youtube && (
            <a
              href={profile.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-red-400 transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </a>
          )}
          {profile.instagram && (
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </a>
          )}
          {profile.linktree && (
            <a
              href={profile.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Linktree</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </a>
          )}
        </div>
      </section>

      {/* 2. Trayectoria / Experiencia Laboral */}
      <section id="experiencia" className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-amber-400" />
            <h3 className="text-2xl font-bold text-white font-display">
              Experiencia Laboral & Proyectos Comerciales
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            {experience.length} etapas destacadas
          </span>
        </div>

        <div className="space-y-4">
          {experience.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#232733] bg-[#12151d] p-6 transition-colors hover:border-[#32394a]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#1f2533] pb-3 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white font-display">
                    {item.role}
                  </h4>
                  <div className="text-sm font-medium text-amber-400">
                    {item.company} <span className="text-slate-500 font-normal">· {item.location}</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-400 font-medium">
                  {item.period}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-4">
                {item.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                    <span className="text-amber-400 font-bold">›</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Technologies row */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1b202c]">
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#181d28] text-slate-300 border border-[#252c3c]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Matriz de Habilidades Técnicas */}
      <section id="habilidades" className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-amber-400" />
            <h3 className="text-2xl font-bold text-white font-display">
              Habilidades Técnicas Especializadas
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Unity · C# · Photon · Full-Stack
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#232733] bg-[#12151d] p-5 flex flex-col"
            >
              <h4 className="text-sm font-bold text-white font-display border-b border-[#202534] pb-2.5 mb-4">
                {category.title}
              </h4>
              <ul className="space-y-2 flex-1">
                {category.skills.map((sk) => (
                  <li
                    key={sk}
                    className="flex items-center gap-2 text-xs text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                    <span>{sk}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Testimonios Reales */}
      {testimonials.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-amber-400" />
            <h3 className="text-2xl font-bold text-white font-display">
              Testimonios de Clientes & Colaboradores
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {testimonials.map((test, tIdx) => (
              <div
                key={tIdx}
                className="rounded-xl border border-[#232733] bg-[#12151d] p-6 relative flex flex-col justify-between"
              >
                <p className="text-sm text-slate-300 italic leading-relaxed mb-4">
                  "{test.content}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-[#1d222e]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/10 text-amber-400 font-bold text-xs font-display">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{test.name}</h5>
                    <span className="text-[11px] text-slate-400">{test.roleOrProject}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
