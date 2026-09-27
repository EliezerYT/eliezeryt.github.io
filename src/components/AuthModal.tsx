import React, { useState } from 'react';
import { AuthUser } from '../types/portfolio';
import { X, ShieldCheck, User, Lock, Mail, Sparkles, LogIn, UserPlus, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: AuthUser | null;
  onLogin: (user: AuthUser) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout,
}) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [adminPin, setAdminPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleQuickModeratorLogin = () => {
    const modUser: AuthUser = {
      id: 'admin-elydev',
      name: 'Eliezer Terrero',
      email: 'eliezerterrero275@gmail.com',
      role: 'moderator',
    };
    onLogin(modUser);
    setSuccessMsg('¡Sesión iniciada como Moderador!');
    setTimeout(() => {
      setSuccessMsg('');
      onClose();
    }, 900);
  };

  const handleQuickVisitorLogin = () => {
    const visitorUser: AuthUser = {
      id: `visitor-${Date.now()}`,
      name: 'Visitante',
      email: 'visitante@portafolio.com',
      role: 'visitor',
    };
    onLogin(visitorUser);
    setSuccessMsg('¡Sesión iniciada como Visitante!');
    setTimeout(() => {
      setSuccessMsg('');
      onClose();
    }, 900);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (tab === 'login') {
      if (!email.trim() || !password.trim()) {
        setErrorMsg('Por favor completa todos los campos.');
        return;
      }

      // Check if moderator email or password matches known admin criteria
      const isMod =
        email.toLowerCase().trim() === 'eliezerterrero275@gmail.com' ||
        email.toLowerCase().trim() === 'admin@elydev.com' ||
        password === 'elydev' ||
        password === 'admin123';

      const user: AuthUser = {
        id: isMod ? 'admin-elydev' : `user-${Date.now()}`,
        name: isMod ? 'Eliezer Terrero' : email.split('@')[0],
        email: email.trim(),
        role: isMod ? 'moderator' : 'visitor',
      };

      onLogin(user);
      setSuccessMsg(isMod ? '¡Bienvenido Moderador!' : '¡Bienvenido!');
      setTimeout(() => {
        setSuccessMsg('');
        onClose();
      }, 900);
    } else {
      // Register
      if (!name.trim() || !email.trim() || !password.trim()) {
        setErrorMsg('Por favor completa tu nombre, correo y contraseña.');
        return;
      }

      // If user inputs the moderator secret or Eliezer's email
      const isMod =
        adminPin.trim().toLowerCase() === 'elydev' ||
        adminPin.trim().toLowerCase() === 'admin' ||
        email.toLowerCase().trim() === 'eliezerterrero275@gmail.com';

      const user: AuthUser = {
        id: `user-${Date.now()}`,
        name: name.trim(),
        email: email.trim(),
        role: isMod ? 'moderator' : 'visitor',
      };

      onLogin(user);
      setSuccessMsg(
        isMod
          ? '¡Cuenta creada con privilegios de Moderador!'
          : '¡Cuenta creada exitosamente como visitante!'
      );
      setTimeout(() => {
        setSuccessMsg('');
        onClose();
      }, 900);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center">
      <div className="relative w-full max-w-md rounded-2xl border border-[#232733] bg-[#10141d] p-6 shadow-2xl text-slate-200 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#232733] pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                {currentUser ? 'Perfil de Acceso' : 'Iniciar Sesión / Registro'}
              </h3>
              <p className="text-xs text-slate-400">
                {currentUser
                  ? `Conectado como ${currentUser.role === 'moderator' ? 'Moderador' : 'Visitante'}`
                  : 'Acceso para gestionar proyectos o explorar'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-[#1a202d] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* If already logged in, show current status and Logout button */}
        {currentUser ? (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-[#141822] border border-[#232733] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Estado de Cuenta</span>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    currentUser.role === 'moderator'
                      ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30'
                      : 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
                  }`}
                >
                  {currentUser.role === 'moderator' ? (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Moderador Activo
                    </>
                  ) : (
                    <>
                      <User className="w-3.5 h-3.5" />
                      Visitante
                    </>
                  )}
                </span>
              </div>

              <div>
                <div className="text-sm font-bold text-white">{currentUser.name}</div>
                <div className="text-xs text-slate-400 font-mono">{currentUser.email}</div>
              </div>

              {currentUser.role === 'moderator' ? (
                <p className="text-xs text-amber-300/80 bg-amber-500/10 p-2.5 rounded-lg border border-amber-400/20 leading-relaxed">
                  Tienes permisos para agregar nuevos proyectos, editar fichas técnicas existentes,
                  cambiar visibilidad de fechas y eliminar elementos del catálogo.
                </p>
              ) : (
                <p className="text-xs text-slate-400 bg-white/5 p-2.5 rounded-lg border border-white/5 leading-relaxed">
                  Estás en modo visitante. Los controles de edición y adición están ocultos para mantener
                  una experiencia limpia y profesional.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2.5">
              {currentUser.role === 'visitor' ? (
                <button
                  type="button"
                  onClick={handleQuickModeratorLogin}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Cambiar a Vista Moderador (Eliezer)</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleQuickVisitorLogin}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-[#141822] text-slate-300 border border-[#262c3b] hover:text-white hover:bg-[#1d2331] transition-colors"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Probar Vista como Visitante Normal</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  onLogout();
                  setSuccessMsg('Has cerrado sesión.');
                  setTimeout(() => {
                    setSuccessMsg('');
                    onClose();
                  }, 800);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/20 hover:bg-rose-500/20 transition-colors"
              >
                <span>Cerrar Sesión</span>
              </button>
            </div>
          </div>
        ) : (
          /* Login / Register tabs */
          <div className="space-y-4">
            {/* Quick 1-click Moderator button */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-[#181d28] to-[#12151d] border border-amber-400/30">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Acceso Rápido Moderador</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    Activa la vista de moderador de Eliezer con 1 clic
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleQuickModeratorLogin}
                  className="shrink-0 px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors shadow-sm"
                >
                  Entrar Moderador
                </button>
              </div>
            </div>

            {/* Segmented switch: Iniciar Sesión vs Registro */}
            <div className="grid grid-cols-2 rounded-lg bg-[#0b0d11] p-1 border border-[#232733]">
              <button
                type="button"
                onClick={() => {
                  setTab('login');
                  setErrorMsg('');
                }}
                className={`py-1.5 text-xs font-medium rounded-md transition-colors ${
                  tab === 'login'
                    ? 'bg-[#181d28] text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Iniciar Sesión
              </button>
              <button
                type="button"
                onClick={() => {
                  setTab('register');
                  setErrorMsg('');
                }}
                className={`py-1.5 text-xs font-medium rounded-md transition-colors ${
                  tab === 'register'
                    ? 'bg-[#181d28] text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Crear Cuenta
              </button>
            </div>

            {errorMsg && (
              <div className="p-2.5 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs">
                {errorMsg}
              </div>
            )}

            {successMsg && (
              <div className="p-2.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{successMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 pt-1">
              {tab === 'register' && (
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre o empresa"
                    className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ej: eliezerterrero275@gmail.com"
                  className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  Contraseña *
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              {tab === 'register' && (
                <div className="space-y-1 pt-1 border-t border-[#1d222e]">
                  <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    Clave de Moderador (Opcional)
                  </label>
                  <input
                    type="password"
                    value={adminPin}
                    onChange={(e) => setAdminPin(e.target.value)}
                    placeholder="Introduce 'elydev' para permisos de moderador"
                    className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                  <p className="text-[10px] text-slate-500">
                    Si eres Eliezer, ingresa tu clave o tu correo para obtener permisos de administración.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 mt-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors shadow-sm"
              >
                {tab === 'login' ? (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>Iniciar Sesión</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    <span>Registrarse</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
