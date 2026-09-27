import React from 'react';
import { Search, X, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { ProjectCategory, ProjectOrigin } from '../types/portfolio';

interface ProjectFiltersProps {
  selectedOrigin: ProjectOrigin | 'todos';
  onSelectOrigin: (origin: ProjectOrigin | 'todos') => void;
  selectedCategory: ProjectCategory | 'todos';
  onSelectCategory: (category: ProjectCategory | 'todos') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalFiltered: number;
  totalAll: number;
  onResetFilters: () => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  selectedOrigin,
  onSelectOrigin,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalFiltered,
  totalAll,
  onResetFilters,
}) => {
  const isFiltered =
    selectedOrigin !== 'todos' ||
    selectedCategory !== 'todos' ||
    searchQuery.trim().length > 0;

  return (
    <div className="space-y-4 rounded-xl border border-[#232733] bg-[#12151d] p-4 sm:p-5">
      {/* Top row: Origin switch and Search input */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Origin Filter Segmented Bar */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Tipo de autoría & servicios
          </label>
          <div className="flex flex-wrap items-center rounded-lg bg-[#0b0d11] p-1 border border-[#232733] gap-1">
            <button
              type="button"
              onClick={() => onSelectOrigin('todos')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedOrigin === 'todos'
                  ? 'bg-amber-400 text-black font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              type="button"
              onClick={() => onSelectOrigin('propio')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedOrigin === 'propio'
                  ? 'bg-amber-400 text-black font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Propios
            </button>
            <button
              type="button"
              onClick={() => onSelectOrigin('trabajado')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedOrigin === 'trabajado'
                  ? 'bg-amber-400 text-black font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Trabajados (Clientes)
            </button>
            <button
              type="button"
              onClick={() => onSelectOrigin('servicios')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedOrigin === 'servicios'
                  ? 'bg-amber-400 text-black font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Servicios Comunes
            </button>
            <button
              type="button"
              onClick={() => onSelectOrigin('clases')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedOrigin === 'clases'
                  ? 'bg-amber-400 text-black font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Clases Privadas
            </button>
          </div>
        </div>

        {/* Live Search Box */}
        <div className="w-full lg:max-w-xs">
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Buscar por nombre o tecnología
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Ej: Unity, React, Unreal, Roguelike..."
              className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] pl-9 pr-8 py-1.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Second row: Categories & Results summary */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-[#1d222e]">
        {/* Category Filter Buttons */}
        <div className="flex items-center flex-wrap gap-1.5">
          <span className="text-xs font-medium text-slate-400 mr-1 flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3 text-slate-500" />
            Categoría:
          </span>
          <button
            type="button"
            onClick={() => onSelectCategory('todos')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === 'todos'
                ? 'bg-white/10 text-white border border-white/20'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            Todas
          </button>
          <button
            type="button"
            onClick={() => onSelectCategory('juegos')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === 'juegos'
                ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            Juegos
          </button>
          <button
            type="button"
            onClick={() => onSelectCategory('aplicaciones')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === 'aplicaciones'
                ? 'bg-cyan-400/15 text-cyan-300 border border-cyan-400/30'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            Aplicaciones
          </button>
          <button
            type="button"
            onClick={() => onSelectCategory('collab')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === 'collab'
                ? 'bg-emerald-400/15 text-emerald-300 border border-emerald-400/30'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            Collab
          </button>
        </div>

        {/* Counter and Reset */}
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="font-mono tabular-nums">
            Mostrando <span className="font-semibold text-white">{totalFiltered}</span> de{' '}
            <span className="text-slate-500">{totalAll}</span> proyectos
          </div>
          {isFiltered && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Limpiar filtros</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
