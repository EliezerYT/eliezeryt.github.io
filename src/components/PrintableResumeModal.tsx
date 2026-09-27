import React from 'react';
import { X, Printer } from 'lucide-react';
import { UserProfile, Project, ExperienceItem, SkillCategory } from '../types/portfolio';

interface PrintableResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  projects: Project[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
}

export const PrintableResumeModal: React.FC<PrintableResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  projects,
  experience,
  skills,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center print:p-0 print:bg-white print:fixed-none">
      <div className="relative w-full max-w-4xl rounded-2xl border border-[#232733] bg-[#0d1017] p-6 sm:p-10 shadow-2xl text-slate-200 print:bg-white print:text-black print:border-none print:shadow-none print:p-8">
        {/* Header Controls (Hidden during print) */}
        <div className="flex items-center justify-between border-b border-[#232733] pb-4 mb-6 print:hidden">
          <span className="text-xs font-mono text-slate-400">
            Vista Previa de Impresión / Resumen Curricular
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar en PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#1a202d]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="space-y-6 text-slate-200 print:text-neutral-900">
          {/* Header block */}
          <div className="border-b border-[#232733] print:border-neutral-300 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black font-display">
                  {profile.name}
                </h1>
                <p className="text-sm font-semibold text-amber-400 print:text-neutral-700 mt-0.5">
                  {profile.title}
                </p>
              </div>
              <div className="text-xs text-slate-400 print:text-neutral-600 sm:text-right font-mono space-y-0.5">
                <div>{profile.email}</div>
                <div>{profile.location}</div>
                <div>{profile.github}</div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-300 print:text-neutral-800">
              {profile.bio}
            </p>
          </div>

          {/* Experiencia Laboral */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400 print:text-neutral-900 border-b border-[#232733] print:border-neutral-300 pb-1 mb-3">
              Experiencia Laboral & Trayectoria
            </h2>
            <div className="space-y-4">
              {experience.map((item, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between font-semibold text-white print:text-black">
                    <span>{item.role} · <span className="text-slate-300 print:text-neutral-700">{item.company}</span></span>
                    <span className="font-mono text-slate-400 print:text-neutral-600">{item.period}</span>
                  </div>
                  <p className="text-slate-300 print:text-neutral-700 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="mt-1.5 space-y-1 list-disc list-inside text-slate-400 print:text-neutral-600">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Proyectos Destacados (Juegos, Aplicaciones y Colaboraciones) */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400 print:text-neutral-900 border-b border-[#232733] print:border-neutral-300 pb-1 mb-3">
              Proyectos Destacados (Propios y Trabajados)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.slice(0, 6).map((proj) => (
                <div key={proj.id} className="text-xs p-3 rounded-lg bg-[#141822] print:bg-neutral-50 border border-[#232733] print:border-neutral-200">
                  <div className="flex justify-between font-semibold text-white print:text-black">
                    <span>{proj.title}</span>
                    <span className="text-amber-400 print:text-neutral-600 font-mono text-[11px]">
                      {proj.category.toUpperCase()} · {proj.origin === 'propio' ? 'PROPIO' : 'TRABAJADO'}
                    </span>
                  </div>
                  <p className="text-slate-300 print:text-neutral-700 mt-1 line-clamp-2">
                    {proj.tagline || proj.description}
                  </p>
                  <div className="mt-2 text-[11px] text-slate-400 print:text-neutral-500 font-mono">
                    Stack: {proj.technologies.slice(0, 4).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades Técnicas */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400 print:text-neutral-900 border-b border-[#232733] print:border-neutral-300 pb-1 mb-2">
              Habilidades Técnicas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {skills.map((cat, idx) => (
                <div key={idx}>
                  <div className="font-semibold text-white print:text-black mb-1">{cat.title}</div>
                  <p className="text-slate-400 print:text-neutral-600 leading-relaxed">
                    {cat.skills.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
