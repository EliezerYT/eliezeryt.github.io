import React from 'react';
import { Download, PlusCircle, Mail, User, ShieldCheck, LogIn } from 'lucide-react';
import { AuthUser } from '../types/portfolio';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenNewProject: () => void;
  onOpenContact: () => void;
  onPrintResume: () => void;
  currentUser: AuthUser | null;
  onOpenAuth: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenNewProject,
  onOpenContact,
  onPrintResume,
  currentUser,
  onOpenAuth,
  theme,
  onToggleTheme,
}) => {
  const isModerator = currentUser?.role === 'moderator';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#232733] bg-[#0b0d11]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('inicio');
            }}
            className="text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors font-display"
          >
            Eliezer Terrero
          </a>
          {isModerator && (
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-400/15 text-amber-400 border border-amber-400/30">
              <ShieldCheck className="w-3 h-3" />
              <span>Moderador</span>
            </span>
          )}
        </div>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => onNavigate('proyectos')}
            className={`transition-colors hover:text-white py-1 ${
              activeSection === 'proyectos'
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-slate-300'
            }`}
          >
            Proyectos
          </button>
          <button
            onClick={() => onNavigate('resumen')}
            className={`transition-colors hover:text-white py-1 ${
              activeSection === 'resumen'
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-slate-300'
            }`}
          >
            Resumen
          </button>
          <button
            onClick={() => onNavigate('experiencia')}
            className={`transition-colors hover:text-white py-1 ${
              activeSection === 'experiencia'
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-slate-300'
            }`}
          >
            Experiencia
          </button>
          <button
            onClick={() => onNavigate('habilidades')}
            className={`transition-colors hover:text-white py-1 ${
              activeSection === 'habilidades'
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-slate-300'
            }`}
          >
            Habilidades
          </button>
        </nav>

        {/* Zone 3: Actions + Auth switch */}
        <div className="flex items-center gap-2">
          {/* ONLY show "Nuevo Proyecto" if logged in as Moderator */}
          {isModerator && (
            <button
              onClick={onOpenNewProject}
              title="Añadir un nuevo proyecto al portafolio (Vista Moderador)"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-amber-400 rounded-md hover:bg-amber-300 transition-colors shadow-sm"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Nuevo Proyecto</span>
            </button>
          )}

          <button
            onClick={onPrintResume}
            title="Ver o guardar resumen curricular"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-[#141822] border border-[#2a3040] rounded-md hover:bg-[#1a1f2b] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CV / Resumen</span>
          </button>

          <button
            onClick={onOpenContact}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors shadow-sm ${
              isModerator
                ? 'bg-[#141822] text-slate-200 border border-[#2a3040] hover:text-white hover:bg-[#1a1f2b]'
                : 'bg-amber-400 text-black hover:bg-amber-300'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contacto</span>
          </button>

          {/* Theme Switcher */}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Auth button (Iniciar Sesión / Perfil) */}
          <button
            onClick={onOpenAuth}
            title={
              currentUser
                ? `Cuenta: ${currentUser.name} (${currentUser.role})`
                : 'Iniciar Sesión / Registro'
            }
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors border ${
              isModerator
                ? 'bg-amber-400/10 text-amber-300 border-amber-400/30 hover:bg-amber-400/20'
                : currentUser
                ? 'bg-[#141822] text-cyan-300 border-[#2a3040] hover:bg-[#1c2230]'
                : 'bg-transparent text-slate-400 border-dashed border-[#2d3446] hover:text-white hover:border-slate-500'
            }`}
          >
            {isModerator ? (
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            ) : currentUser ? (
              <User className="w-3.5 h-3.5 text-cyan-400" />
            ) : (
              <LogIn className="w-3.5 h-3.5" />
            )}
            <span className="hidden md:inline">
              {isModerator ? 'Moderador' : currentUser ? 'Cuenta' : 'Iniciar Sesión'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
