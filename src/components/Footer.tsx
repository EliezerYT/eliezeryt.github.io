import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Gamepad2 } from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface FooterProps {
  profile: UserProfile;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onNavigate, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#232733] bg-[#090b0f] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1b202c]">
          <div className="text-center sm:text-left">
            <span className="text-base font-bold text-white font-display">
              {profile.name}
            </span>
            <p className="text-xs text-slate-400 mt-0.5">
              Portafolio de Videojuegos, Aplicaciones y Colaboraciones
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 text-slate-400">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-amber-400 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-amber-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {profile.itchIo && (
              <a
                href={profile.itchIo}
                target="_blank"
                rel="noreferrer"
                aria-label="Itch.io"
                className="hover:text-amber-400 transition-colors"
              >
                <Gamepad2 className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onOpenContact}
              aria-label="Contacto por email"
              className="hover:text-amber-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {profile.name} · Diseñado & Desarrollado para web
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('proyectos')}
              className="hover:text-slate-300 transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => onNavigate('resumen')}
              className="hover:text-slate-300 transition-colors"
            >
              Resumen
            </button>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Subir al inicio</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
