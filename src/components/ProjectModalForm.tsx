import React, { useState, useEffect } from 'react';
import { Project, ProjectCategory, ProjectOrigin } from '../types/portfolio';
import { X, Save, Plus, Trash2 } from 'lucide-react';

interface ProjectModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
  initialProject?: Project | null;
}

export const ProjectModalForm: React.FC<ProjectModalFormProps> = ({
  isOpen,
  onClose,
  onSave,
  initialProject,
}) => {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [fullStory, setFullStory] = useState('');
  const [category, setCategory] = useState<ProjectCategory>('juegos');
  const [origin, setOrigin] = useState<ProjectOrigin>('propio');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [showDate, setShowDate] = useState(true);
  const [role, setRole] = useState('Desarrollador Principal');
  const [clientOrTeam, setClientOrTeam] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [technologiesStr, setTechnologiesStr] = useState('');
  const [requirementsStr, setRequirementsStr] = useState('');
  const [demoUrl, setDemoUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [metricLabel, setMetricLabel] = useState('');
  const [metricValue, setMetricValue] = useState('');
  const [metrics, setMetrics] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    if (initialProject) {
      setTitle(initialProject.title || '');
      setTagline(initialProject.tagline || '');
      setDescription(initialProject.description || '');
      setFullStory(initialProject.fullStory || '');
      setCategory(initialProject.category || 'juegos');
      setOrigin(initialProject.origin || 'propio');
      setYear(initialProject.year || new Date().getFullYear().toString());
      setShowDate(initialProject.showDate !== false);
      setRole(initialProject.role || 'Desarrollador');
      setClientOrTeam(initialProject.clientOrTeam || '');
      setCoverImage(initialProject.coverImage || '');
      setTechnologiesStr((initialProject.technologies || []).join(', '));
      setRequirementsStr((initialProject.requirements || []).join('\n'));
      setMetrics(initialProject.metrics || []);

      const demo = initialProject.links?.find((l) => l.type === 'demo');
      const git = initialProject.links?.find((l) => l.type === 'github');
      setDemoUrl(demo ? demo.url : '');
      setGithubUrl(git ? git.url : '');
    } else {
      // Defaults for new project
      setTitle('');
      setTagline('');
      setDescription('');
      setFullStory('');
      setCategory('juegos');
      setOrigin('propio');
      setYear(new Date().getFullYear().toString());
      setShowDate(true);
      setRole('Desarrollador');
      setClientOrTeam('');
      setCoverImage('/src/assets/images/ely/overdrivers-teaser.jpg');
      setTechnologiesStr('Unity, C#, HLSL');
      setRequirementsStr('');
      setMetrics([]);
      setDemoUrl('');
      setGithubUrl('');
    }
  }, [initialProject, isOpen]);

  if (!isOpen) return null;

  const handleAddMetric = () => {
    if (!metricLabel.trim() || !metricValue.trim()) return;
    setMetrics([...metrics, { label: metricLabel.trim(), value: metricValue.trim() }]);
    setMetricLabel('');
    setMetricValue('');
  };

  const handleRemoveMetric = (idx: number) => {
    setMetrics(metrics.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const techs = technologiesStr
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const links = [];
    if (demoUrl.trim()) {
      links.push({
        label: 'Ver Demo / Web',
        url: demoUrl.trim(),
        type: 'demo' as const,
      });
    }
    if (githubUrl.trim()) {
      links.push({
        label: 'Código en GitHub',
        url: githubUrl.trim(),
        type: 'github' as const,
      });
    }

    const reqs = requirementsStr
      .split('\n')
      .map((r) => r.trim())
      .filter((r) => r.length > 0);

    const savedProject: Project = {
      id: initialProject ? initialProject.id : `project-${Date.now()}`,
      title: title.trim(),
      tagline: tagline.trim() || title.trim(),
      description: description.trim() || tagline.trim(),
      fullStory: fullStory.trim() || description.trim(),
      category,
      origin,
      year: year.trim() || '2025',
      showDate,
      role: role.trim() || 'Desarrollador',
      clientOrTeam: clientOrTeam.trim() || undefined,
      coverImage: coverImage.trim() || '/src/assets/images/ely/overdrivers-teaser.jpg',
      technologies: techs.length > 0 ? techs : ['Unity', 'C#'],
      metrics: metrics.length > 0 ? metrics : undefined,
      requirements: reqs.length > 0 ? reqs : undefined,
      links: links.length > 0 ? links : undefined,
    };

    onSave(savedProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center">
      <div className="relative w-full max-w-2xl rounded-2xl border border-[#232733] bg-[#10141d] p-6 shadow-2xl text-slate-200 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between border-b border-[#232733] pb-4 mb-5">
          <h3 className="text-xl font-bold text-white font-display">
            {initialProject ? 'Editar Proyecto / Ficha' : 'Agregar Nuevo Proyecto o Servicio'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-[#1a202d] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
          {/* Título & Año & Mostrar Fecha */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2 space-y-1">
              <label className="text-xs font-medium text-slate-400">Título del Proyecto / Servicio *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ej: Starfall Tactics o Ads Monetization System"
                className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-400">Año / Fecha</label>
                <label className="inline-flex items-center gap-1 text-[11px] text-amber-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showDate}
                    onChange={(e) => setShowDate(e.target.checked)}
                    className="rounded border-[#232733] text-amber-400 focus:ring-0"
                  />
                  <span>Mostrar</span>
                </label>
              </div>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2025"
                className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Origen & Categoría */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400">Tipo de Autoría / Sección *</label>
              <select
                value={origin}
                onChange={(e) => setOrigin(e.target.value as ProjectOrigin)}
                className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              >
                <option value="propio">Proyecto Propio</option>
                <option value="trabajado">Trabajado (Clientes)</option>
                <option value="servicios">Servicios Comunes</option>
                <option value="clases">Clases Privadas</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400">Categoría *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              >
                <option value="juegos">Juegos</option>
                <option value="aplicaciones">Aplicaciones</option>
                <option value="collab">Collab (Colaboración)</option>
              </select>
            </div>
          </div>

          {/* Rol & Cliente/Equipo */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400">Tu Rol Desempeñado *</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Ej: Programador de Gameplay, Frontend Lead"
                className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400">Cliente, Estudio o Equipo</label>
              <input
                type="text"
                value={clientOrTeam}
                onChange={(e) => setClientOrTeam(e.target.value)}
                placeholder="Ej: Mistral Studios / Equipo Jam"
                className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Tagline / Breve resumen */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-400">Resumen Breve (1-2 líneas) *</label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="Descripción concisa que se mostrará en el cuadro"
              className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
            />
          </div>

          {/* Descripción Detallada */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-400">Descripción Completa (Panel de detalles)</label>
            <textarea
              rows={3}
              value={fullStory}
              onChange={(e) => setFullStory(e.target.value)}
              placeholder="Explica qué problema resolvió, qué mecánicas implementaste o retos técnicos superados..."
              className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
            />
          </div>

          {/* ¿QUÉ NECESITO LISTO? (Requisitos para servicios o clientes) */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-amber-400">¿QUÉ NECESITO LISTO? (Requisitos, uno por línea)</label>
            <textarea
              rows={3}
              value={requirementsStr}
              onChange={(e) => setRequirementsStr(e.target.value)}
              placeholder="Ej:&#10;Cuenta activa de Google AdMob o Unity Ads&#10;Proyecto de Unity sin errores de consola&#10;Botones de UI para anuncios definidos"
              className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
            />
          </div>

          {/* Tecnologías */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-400">Tecnologías (separadas por comas)</label>
            <input
              type="text"
              value={technologiesStr}
              onChange={(e) => setTechnologiesStr(e.target.value)}
              placeholder="Unity, C#, ShaderLab, FMOD, React..."
              className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
            />
          </div>

          {/* Imagen de Portada */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-400">URL de Imagen de Portada</label>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="/src/assets/images/... o URL directa"
              className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
            />
            <div className="flex gap-2 text-[11px] text-slate-500 pt-1">
              <span>Plantillas rápidas:</span>
              <button
                type="button"
                onClick={() => setCoverImage('/src/assets/images/game_cyber_roguelike_1790482586818.jpg')}
                className="text-amber-400 hover:underline"
              >
                Cyber Roguelike
              </button>
              <button
                type="button"
                onClick={() => setCoverImage('/src/assets/images/app_creative_workspace_1790482598234.jpg')}
                className="text-cyan-400 hover:underline"
              >
                App Workspace
              </button>
              <button
                type="button"
                onClick={() => setCoverImage('/src/assets/images/game_fantasy_adventure_1790482617462.jpg')}
                className="text-emerald-400 hover:underline"
              >
                Fantasy 3D
              </button>
              <button
                type="button"
                onClick={() => setCoverImage('/src/assets/images/collab_interactive_xr_1790482628352.jpg')}
                className="text-purple-400 hover:underline"
              >
                Collab XR
              </button>
            </div>
          </div>

          {/* Enlaces: Demo y GitHub */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400">Enlace Demo / Tienda / Web</label>
              <input
                type="url"
                value={demoUrl}
                onChange={(e) => setDemoUrl(e.target.value)}
                placeholder="https://..."
                className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400">Enlace Repositorio GitHub</label>
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/..."
                className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Métricas destacadas */}
          <div className="space-y-2 pt-2 border-t border-[#1e2330]">
            <label className="text-xs font-medium text-slate-400">Métricas o Logros Destacados</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={metricLabel}
                onChange={(e) => setMetricLabel(e.target.value)}
                placeholder="Ej: Jugadores en Beta"
                className="flex-1 rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-1.5 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
              <input
                type="text"
                value={metricValue}
                onChange={(e) => setMetricValue(e.target.value)}
                placeholder="Ej: +10,000"
                className="w-32 rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-1.5 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleAddMetric}
                className="px-3 py-1.5 rounded-lg bg-[#181d28] border border-[#262d3c] text-xs font-medium text-slate-200 hover:text-white hover:bg-[#232b3b]"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {metrics.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {metrics.map((m, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161a24] border border-[#282f40] text-xs text-slate-300 font-mono"
                  >
                    <span>{m.label}: <strong>{m.value}</strong></span>
                    <button
                      type="button"
                      onClick={() => handleRemoveMetric(idx)}
                      className="text-slate-500 hover:text-rose-400"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-5 border-t border-[#232733]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Guardar Proyecto</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
