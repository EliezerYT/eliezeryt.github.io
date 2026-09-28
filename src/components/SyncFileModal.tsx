import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import {
  Download,
  Upload,
  Copy,
  Check,
  Github,
  X,
  FileCode,
  HardDrive,
  Info,
  Loader2,
  Cloud,
} from 'lucide-react';

interface SyncFileModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onImportProjects: (imported: Project[]) => void;
  onSaveToFile: () => Promise<boolean>;
}

export const SyncFileModal: React.FC<SyncFileModalProps> = ({
  isOpen,
  onClose,
  projects,
  onImportProjects,
  onSaveToFile,
}) => {
  const [copied, setCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);
  const [lastSavedAt, setLastSavedAt] = useState<string | null>(null);

  if (!isOpen) return null;

  const jsonString = JSON.stringify(projects, null, 2);

  const showStatus = (type: 'success' | 'error' | 'info', message: string, autoClear = true) => {
    setSaveStatus({ type, message });
    if (autoClear) setTimeout(() => setSaveStatus(null), 5000);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'projects.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadInitialDataTs = () => {
    const tsContent = `// Archivo generado automáticamente para sincronización con GitHub
// Coloca este archivo en: src/data/projects.json o usa initialProjects directamente
import { Project } from '../types/portfolio';

export const exportedProjects: Project[] = ${jsonString};
`;
    const blob = new Blob([tsContent], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'exportedProjects.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        const list = Array.isArray(parsed) ? parsed : parsed.projects;
        if (Array.isArray(list) && list.length > 0) {
          onImportProjects(list);
          showStatus('success', `✓ ${list.length} proyectos importados exitosamente`);
        } else {
          showStatus('error', '⚠ El archivo no contiene un arreglo válido de proyectos');
        }
      } catch (err: any) {
        showStatus('error', '⚠ Error al leer archivo JSON: ' + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleApplyChanges = async () => {
    setIsSaving(true);
    setSaveStatus(null);
    try {
      const ok = await onSaveToFile();
      if (ok) {
        const now = new Date().toLocaleString('es-ES');
        setLastSavedAt(now);
        showStatus('success', `✓ Cambios aplicados exitosamente. ${projects.length} elementos guardados en src/data/projects.json, public/data y docs/data. Listo para git push.`, false);
      } else {
        showStatus('error', '⚠ No se pudo escribir en el servidor. Puedes descargar el archivo projects.json y colocarlo manualmente en tu repositorio.', false);
      }
    } catch (err: any) {
      showStatus('error', '⚠ Error: ' + err.message, false);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl border border-[#232733] bg-[#12151d] p-6 shadow-2xl text-left">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1f2533] pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-display">
                Sincronización de Archivos para GitHub
              </h2>
              <p className="text-xs text-slate-400">
                Guarda, descarga o importa los proyectos en el archivo <code className="text-amber-400 font-mono">projects.json</code>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Apply Changes Button - Prominent */}
        <div className="mb-5">
          <button
            type="button"
            onClick={handleApplyChanges}
            disabled={isSaving}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-amber-400 text-black font-bold text-sm hover:bg-amber-300 transition-all shadow-lg hover:shadow-amber-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Aplicando cambios...</span>
              </>
            ) : (
              <>
                <Cloud className="w-5 h-5" />
                <span>Aplicar Cambios y Guardar en Archivos</span>
              </>
            )}
          </button>
          {lastSavedAt && !saveStatus && (
            <p className="text-[11px] text-slate-500 mt-1.5 text-center">
              Última sincronización: {lastSavedAt}
            </p>
          )}
        </div>

        {/* Status notification */}
        {saveStatus && (
          <div
            className={`mb-4 p-3 rounded-lg border text-xs font-semibold animate-in fade-in duration-200 ${
              saveStatus.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                : saveStatus.type === 'error'
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                : 'bg-[#18202d] border-amber-400/30 text-amber-300'
            }`}
          >
            {saveStatus.message}
          </div>
        )}

        {/* Info Callout */}
        <div className="mb-5 rounded-xl border border-amber-400/20 bg-amber-400/5 p-3.5 text-xs text-amber-200/90 flex items-start gap-2.5">
          <Info className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-amber-300">
              Cómo funciona la sincronización
            </p>
            <p className="text-slate-300">
              Al hacer clic en <strong>"Aplicar Cambios"</strong>, los datos se guardan automáticamente en <code className="px-1 py-0.5 rounded bg-black/40 text-amber-400 font-mono">src/data/projects.json</code>, <code className="px-1 py-0.5 rounded bg-black/40 text-amber-400 font-mono">public/data/projects.json</code> y <code className="px-1 py-0.5 rounded bg-black/40 text-amber-400 font-mono">docs/data/projects.json</code> en el disco del proyecto.
            </p>
            <p className="text-slate-400 text-[11px]">
              Las imágenes subidas se guardan en <code className="text-slate-200">public/images/</code>, <code className="text-slate-200">docs/images/</code> y <code className="text-slate-200">src/assets/images/</code>.
              Luego ejecuta <code className="text-slate-200">git add .</code>, <code className="text-slate-200">git commit -m "update"</code> y <code className="text-slate-200">git push</code> para sincronizar con GitHub.
            </p>
          </div>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {/* Action 1: Save to file in disk */}
          <button
            type="button"
            onClick={handleApplyChanges}
            disabled={isSaving}
            className="flex items-center gap-3 p-3.5 rounded-xl border border-[#232733] bg-[#171b26] hover:bg-[#1d2230] hover:border-amber-400/40 text-left transition-all group disabled:opacity-50"
          >
            <div className="p-2.5 rounded-lg bg-amber-400 text-black group-hover:scale-105 transition-transform">
              {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <HardDrive className="w-4 h-4" />}
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Guardar en disco</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 font-mono">
                  {projects.length} items
                </span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Escribe en todos los projects.json
              </div>
            </div>
          </button>

          {/* Action 2: Download projects.json */}
          <button
            type="button"
            onClick={handleDownloadJson}
            className="flex items-center gap-3 p-3.5 rounded-xl border border-[#232733] bg-[#171b26] hover:bg-[#1d2230] hover:border-cyan-400/40 text-left transition-all group"
          >
            <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 group-hover:scale-105 transition-transform">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Descargar projects.json</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Para guardar o arrastrar a tu repo
              </div>
            </div>
          </button>

          {/* Action 3: Copy JSON */}
          <button
            type="button"
            onClick={handleCopyJson}
            className="flex items-center gap-3 p-3.5 rounded-xl border border-[#232733] bg-[#171b26] hover:bg-[#1d2230] hover:border-emerald-400/40 text-left transition-all group"
          >
            <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 group-hover:scale-105 transition-transform">
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                {copied ? '¡Copiado al portapapeles!' : 'Copiar contenido JSON'}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Pega directamente en GitHub web
              </div>
            </div>
          </button>

          {/* Action 4: Import JSON file */}
          <label className="flex items-center gap-3 p-3.5 rounded-xl border border-[#232733] bg-[#171b26] hover:bg-[#1d2230] hover:border-purple-400/40 text-left transition-all cursor-pointer group">
            <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-400/30 group-hover:scale-105 transition-transform">
              <Upload className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Importar archivo JSON</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Carga un archivo projects.json
              </div>
            </div>
            <input
              type="file"
              accept=".json"
              onChange={handleFileImport}
              className="hidden"
            />
          </label>
        </div>

        {/* JSON Preview */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-[11px] text-slate-300">
              Vista previa: projects.json ({projects.length} elementos)
            </span>
            <button
              type="button"
              onClick={handleDownloadInitialDataTs}
              className="text-[11px] text-amber-400 hover:text-amber-300 underline underline-offset-2 flex items-center gap-1"
            >
              <FileCode className="w-3 h-3" />
              <span>Descargar como TS</span>
            </button>
          </div>
          <div className="relative rounded-xl border border-[#1f2533] bg-[#0c0e14] p-3 max-h-48 overflow-y-auto font-mono text-[11px] text-slate-300 scrollbar-thin">
            <pre>{jsonString.slice(0, 1200)}...</pre>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-[#1f2533] flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Total en catálogo: <strong className="text-slate-300">{projects.length}</strong> items
          </span>
          <div className="flex items-center gap-2">
            {saveStatus?.type === 'success' && (
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
                <Check className="w-3 h-3" />
                Sincronizado
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
