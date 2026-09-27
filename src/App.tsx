import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { ProjectFilters } from './components/ProjectFilters';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailDrawer } from './components/ProjectDetailDrawer';
import { ResumeSection } from './components/ResumeSection';
import { ProjectModalForm } from './components/ProjectModalForm';
import { ContactModal } from './components/ContactModal';
import { PrintableResumeModal } from './components/PrintableResumeModal';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';

import {
  initialProjects,
  initialProfile,
  experienceData,
  skillCategories,
  clientTestimonials,
} from './data/initialData';
import { Project, ProjectCategory, ProjectOrigin, UserProfile, AuthUser } from './types/portfolio';
import {
  Sparkles,
  RotateCcw,
  ShieldCheck,
  Gamepad2,
  Briefcase,
  Layers,
  GraduationCap,
} from 'lucide-react';

const STORAGE_KEY = 'portfolio_projects_elydev_v6';
const AUTH_STORAGE_KEY = 'portfolio_auth_user_v2';

export default function App() {
  // Authentication state (Visitor by default, Moderator when logged in)
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem(AUTH_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {}
    return null;
  });
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const isModerator = currentUser?.role === 'moderator';

  const handleLogin = (user: AuthUser) => {
    setCurrentUser(user);
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } catch (err) {
      console.warn('Could not save auth user to localStorage', err);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (err) {
      console.warn('Could not remove auth user from localStorage', err);
    }
  };

  // Projects state with LocalStorage persistence
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          Array.isArray(parsed) &&
          parsed.length > 0 &&
          parsed.some((p) => p.id === 'service-ads-monetization' || p.id === 'overdrivers')
        ) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return initialProjects;
  });

  const [profile] = useState<UserProfile>(initialProfile);

  // Filters state
  const [selectedOrigin, setSelectedOrigin] = useState<ProjectOrigin | 'todos'>('todos');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('proyectos');

  // Drawer / Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedSubjectForContact, setSelectedSubjectForContact] = useState('');
  const [isPrintResumeOpen, setIsPrintResumeOpen] = useState(false);

  // Save projects to localStorage whenever modified
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {
      console.warn('Could not save projects to localStorage', err);
    }
  }, [projects]);

  // Filtered projects
  // CRITICAL RULE: "los servicios comunes y clases privadas no deen filtrarse en TODOS"
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Origin filter
      if (selectedOrigin === 'todos') {
        // When 'todos' is chosen, ONLY show 'propio' and 'trabajado'
        if (project.origin === 'servicios' || project.origin === 'clases') {
          return false;
        }
      } else if (project.origin !== selectedOrigin) {
        return false;
      }

      // Category filter (juegos, aplicaciones, collab)
      if (selectedCategory !== 'todos' && project.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = project.title.toLowerCase().includes(query);
        const inTagline = project.tagline.toLowerCase().includes(query);
        const inDescription = project.description.toLowerCase().includes(query);
        const inTech = project.technologies.some((t) => t.toLowerCase().includes(query));
        const inRole = project.role.toLowerCase().includes(query);
        const inClient = project.clientOrTeam?.toLowerCase().includes(query);

        if (!inTitle && !inTagline && !inDescription && !inTech && !inRole && !inClient) {
          return false;
        }
      }

      return true;
    });
  }, [projects, selectedOrigin, selectedCategory, searchQuery]);

  // Detail Drawer Handlers & Navigation
  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDrawerOpen(false);
  };

  const currentProjectIndex = useMemo(() => {
    if (!selectedProject) return -1;
    return filteredProjects.findIndex((p) => p.id === selectedProject.id);
  }, [filteredProjects, selectedProject]);

  const hasPrev = currentProjectIndex > 0;
  const hasNext = currentProjectIndex >= 0 && currentProjectIndex < filteredProjects.length - 1;

  const handlePrevProject = () => {
    if (hasPrev) {
      setSelectedProject(filteredProjects[currentProjectIndex - 1]);
    }
  };

  const handleNextProject = () => {
    if (hasNext) {
      setSelectedProject(filteredProjects[currentProjectIndex + 1]);
    }
  };

  // Add / Edit Project Handlers (Moderator only)
  const handleOpenNewProject = () => {
    setEditingProject(null);
    setIsProjectFormOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setIsProjectFormOpen(true);
    setIsDrawerOpen(false);
  };

  const handleDeleteProject = (projectId: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
    setIsDrawerOpen(false);
  };

  const handleSaveProject = (savedProject: Project) => {
    setProjects((prev) => {
      const existsIndex = prev.findIndex((p) => p.id === savedProject.id);
      if (existsIndex >= 0) {
        const next = [...prev];
        next[existsIndex] = savedProject;
        return next;
      }
      return [savedProject, ...prev];
    });
  };

  const handleResetSampleData = () => {
    if (confirm('¿Restablecer los proyectos y servicios originales de muestra?')) {
      setProjects(initialProjects);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  // Smooth Navigation
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  // Statistical counts
  const ownCount = projects.filter((p) => p.origin === 'propio').length;
  const workedCount = projects.filter((p) => p.origin === 'trabajado').length;
  const servicesCount = projects.filter((p) => p.origin === 'servicios').length;
  const classesCount = projects.filter((p) => p.origin === 'clases').length;

  return (
    <div className="min-h-screen bg-[#0b0d11] text-[#ededef]">
      {/* 1. Header with Top Bar Contract & Auth status */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenNewProject={handleOpenNewProject}
        onOpenContact={() => {
          setSelectedSubjectForContact('');
          setIsContactOpen(true);
        }}
        onPrintResume={() => setIsPrintResumeOpen(true)}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10">
        {/* 2. Sleek, Compact Hero Section (Optimized screen space) */}
        <section id="inicio" className="pt-2 pb-6 border-b border-[#1c212c]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#141822] border border-[#232733] text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Disponible para Proyectos, Servicios & Clases</span>
              </div>

              {/* Compact title that doesn't waste vertical viewport */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display">
                Portafolio de <span className="text-amber-400">Videojuegos</span>, Apps & Clases
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hola, soy <strong className="text-white font-semibold">{profile.name}</strong> ({profile.brandName}).
                Desarrollador Unity, Photon Network, monetización de videojuegos y tutor de clases privadas.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <button
                  onClick={() => handleNavigate('proyectos')}
                  className="px-3.5 py-1.5 font-semibold rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors shadow-sm"
                >
                  Ver Catálogo
                </button>
                <button
                  onClick={() => handleNavigate('resumen')}
                  className="px-3.5 py-1.5 font-medium rounded-lg bg-[#141822] border border-[#262c3b] text-slate-200 hover:text-white hover:bg-[#1d2331] transition-colors"
                >
                  Resumen & Experiencia
                </button>
                <button
                  onClick={() => {
                    setSelectedSubjectForContact('');
                    setIsContactOpen(true);
                  }}
                  className="px-3 py-1.5 font-medium text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Contacto Directo →
                </button>
              </div>
            </div>

            {/* Compact Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0 lg:max-w-md w-full">
              <div
                onClick={() => setSelectedOrigin('propio')}
                className="cursor-pointer p-3 rounded-xl bg-[#12151d] border border-[#232733] hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Propios</span>
                  <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-xl font-bold text-white font-mono mt-0.5">{ownCount}</div>
                <div className="text-[10px] text-slate-500">Títulos Indie</div>
              </div>

              <div
                onClick={() => setSelectedOrigin('trabajado')}
                className="cursor-pointer p-3 rounded-xl bg-[#12151d] border border-[#232733] hover:border-cyan-400/40 transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Trabajados</span>
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-xl font-bold text-white font-mono mt-0.5">{workedCount}</div>
                <div className="text-[10px] text-slate-500">Clientes</div>
              </div>

              <div
                onClick={() => setSelectedOrigin('servicios')}
                className="cursor-pointer p-3 rounded-xl bg-[#12151d] border border-[#232733] hover:border-emerald-400/40 transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Servicios</span>
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-xl font-bold text-white font-mono mt-0.5">{servicesCount}</div>
                <div className="text-[10px] text-slate-500">Ads/IAP/Audio</div>
              </div>

              <div
                onClick={() => setSelectedOrigin('clases')}
                className="cursor-pointer p-3 rounded-xl bg-[#12151d] border border-[#232733] hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Clases</span>
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-xl font-bold text-white font-mono mt-0.5">{classesCount}</div>
                <div className="text-[10px] text-slate-500">Mentorías 1 a 1</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Proyectos Section: Filtros + Presentación en Cuadros */}
        <section id="proyectos" className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>
                  {selectedOrigin === 'servicios'
                    ? 'Catálogo de Servicios Comunes'
                    : selectedOrigin === 'clases'
                    ? 'Clases Privadas Personalizadas'
                    : selectedOrigin === 'propio'
                    ? 'Proyectos Propios (Indie)'
                    : selectedOrigin === 'trabajado'
                    ? 'Proyectos Trabajados para Clientes'
                    : 'Catálogo de Proyectos (Todos)'}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight font-display">
                {selectedOrigin === 'servicios'
                  ? 'Servicios Técnicos Especializados'
                  : selectedOrigin === 'clases'
                  ? 'Clases & Asesorías Privadas'
                  : 'Proyectos Trabajados & Propios'}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
                {selectedOrigin === 'servicios'
                  ? 'Sistemas llave en mano de monetización publicitaria, compras in-app, audio y multiplayer con entrega rápida.'
                  : selectedOrigin === 'clases'
                  ? 'Aprende Unity, programación C#, monetización y multijugador online con sesiones 1 a 1 en vivo.'
                  : 'Filtra por Propios, Trabajados o explora Servicios Comunes y Clases Privadas.'}
              </p>
            </div>

            {/* Moderation Controls: Only visible when logged in as moderator! */}
            {isModerator && (
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleOpenNewProject}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors shadow-sm"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>+ Agregar Proyecto/Ficha</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetSampleData}
                  title="Restablecer proyectos iniciales (Moderador)"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-[#141822] border border-[#232733] hover:bg-[#1f2534] transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Interactive Filters Bar */}
          <ProjectFilters
            selectedOrigin={selectedOrigin}
            onSelectOrigin={setSelectedOrigin}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalFiltered={filteredProjects.length}
            totalAll={projects.length}
            onResetFilters={() => {
              setSelectedOrigin('todos');
              setSelectedCategory('todos');
              setSearchQuery('');
            }}
          />

          {/* Grid de Cuadros de Proyectos */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-1">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetails={handleOpenDetails}
                />
              ))}
            </div>
          ) : (
            /* Empty state if search or filters yield 0 results */
            <div className="rounded-2xl border border-dashed border-[#282f40] bg-[#10131b] p-10 text-center space-y-3">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                No se encontraron elementos con los filtros seleccionados
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Prueba cambiando la pestaña de autoría o limpiando el término de búsqueda.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedOrigin('todos');
                  setSelectedCategory('todos');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors"
              >
                Restablecer Filtros
              </button>
            </div>
          )}
        </section>

        {/* 4. Resumen Curricular, Experiencia, Habilidades y Testimonios */}
        <ResumeSection
          profile={profile}
          experience={experienceData}
          skills={skillCategories}
          testimonials={clientTestimonials}
          onOpenContact={() => {
            setSelectedSubjectForContact('');
            setIsContactOpen(true);
          }}
          onPrintResume={() => setIsPrintResumeOpen(true)}
        />
      </main>

      {/* 5. Project Detail Panel / Slide-Over Drawer */}
      <ProjectDetailDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDetails}
        onPrevProject={handlePrevProject}
        onNextProject={handleNextProject}
        hasPrev={hasPrev}
        hasNext={hasNext}
        isModerator={isModerator}
        onEditProject={isModerator ? handleEditProject : undefined}
        onDeleteProject={isModerator ? handleDeleteProject : undefined}
        onRequestService={(proj) => {
          setSelectedSubjectForContact(proj.title);
          setIsContactOpen(true);
          setIsDrawerOpen(false);
        }}
      />

      {/* 6. Modals: Add/Edit Project (Moderator only), Contact Form, Printable Resume, Auth */}
      {isModerator && (
        <ProjectModalForm
          isOpen={isProjectFormOpen}
          onClose={() => {
            setIsProjectFormOpen(false);
            setEditingProject(null);
          }}
          onSave={handleSaveProject}
          initialProject={editingProject}
        />
      )}

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={currentUser}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setSelectedSubjectForContact('');
        }}
        profile={profile}
        initialSubject={selectedSubjectForContact}
      />

      <PrintableResumeModal
        isOpen={isPrintResumeOpen}
        onClose={() => setIsPrintResumeOpen(false)}
        profile={profile}
        projects={projects}
        experience={experienceData}
        skills={skillCategories}
      />

      {/* 7. Footer */}
      <Footer
        profile={profile}
        onNavigate={handleNavigate}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
}
