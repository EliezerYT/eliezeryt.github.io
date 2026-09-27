import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle, className = '' }) => {
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={onToggle}
      title={isLight ? 'Cambiar a Modo Oscuro' : 'Cambiar a Modo Claro Profesional'}
      aria-label={isLight ? 'Activar modo oscuro' : 'Activar modo claro'}
      className={`group relative inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border text-xs font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
        isLight
          ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800 shadow-xs'
          : 'bg-[#141822] hover:bg-[#1a202c] border-[#2a3040] text-slate-300 hover:text-white'
      } ${className}`}
    >
      <div className="relative flex items-center justify-center w-3.5 h-3.5">
        {isLight ? (
          <Sun className="w-3.5 h-3.5 text-amber-600 transition-transform group-hover:rotate-45 duration-300" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-amber-400 transition-transform group-hover:-rotate-12 duration-300" />
        )}
      </div>
      <span className="hidden sm:inline text-[11px] font-semibold">
        {isLight ? 'Claro' : 'Oscuro'}
      </span>
    </button>
  );
};
