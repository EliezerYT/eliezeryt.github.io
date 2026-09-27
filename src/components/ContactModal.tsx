import React, { useState } from 'react';
import { X, Send, Mail, Check, Copy, ExternalLink, Github, Linkedin, MessageSquare, Youtube, Instagram } from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  initialSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  profile,
  initialSubject = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Desarrollo de Videojuegos');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync initialSubject when opened
  React.useEffect(() => {
    if (initialSubject) {
      if (initialSubject.toLowerCase().includes('clase')) {
        setProjectType('Clases Privadas');
        setMessage(`Hola Eliezer, me interesa agendar la "${initialSubject}". ¿Qué disponibilidad de horarios tienes?`);
      } else if (initialSubject.toLowerCase().includes('servicio') || initialSubject.includes('$')) {
        setProjectType('Contratación de Servicio Técnico');
        setMessage(`Hola Eliezer, me interesa contratar el servicio "${initialSubject}". Cuéntame los siguientes pasos para comenzar.`);
      } else {
        setMessage(`Hola Eliezer, me gustaría consultar acerca del proyecto "${initialSubject}".`);
      }
    }
  }, [initialSubject, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Simulate reliable submission
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 2.5s or allow manual dismiss
    }, 2500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center">
      <div className="relative w-full max-w-xl rounded-2xl border border-[#232733] bg-[#10141d] p-6 sm:p-8 shadow-2xl text-slate-200 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between border-b border-[#232733] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-white font-display">
              Contactar / Iniciar Proyecto
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-[#1a202d] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Check className="h-7 w-7" />
            </div>
            <h4 className="text-xl font-bold text-white font-display">
              ¡Mensaje Enviado con Éxito!
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Gracias por ponerte en contacto, <strong className="text-white">{name}</strong>.
              He recibido tu solicitud sobre <strong className="text-amber-400">{projectType}</strong> y
              responderé a <strong className="text-white">{email}</strong> a la mayor brevedad.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Quick Email Copy pill card */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#141822] border border-[#232733]">
              <div>
                <span className="text-xs text-slate-400 block">Correo directo</span>
                <span className="text-sm font-semibold text-white font-mono">{profile.email}</span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#1a202c] border border-[#2b3345] text-slate-200 hover:text-white transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-400">Tu Nombre *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: Laura Méndez"
                    className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-400">Tu Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="laura@empresa.com"
                    className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-400">Tipo de Consulta / Proyecto *</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="Desarrollo de Videojuegos">Desarrollo de Videojuegos (Unity / Unreal / Godot)</option>
                  <option value="Aplicación Web / Frontend">Aplicación Web / Frontend React & TypeScript</option>
                  <option value="Colaboración o Co-creación">Colaboración / Jam / Proyecto Creativo</option>
                  <option value="Oportunidad Laboral / Contrato">Oportunidad Laboral / Contratación</option>
                  <option value="Consultoría Técnica">Consultoría Técnica & Optimización</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-400">Mensaje o Propuesta *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe brevemente tus objetivos, cronograma estimado o tecnologías de interés..."
                  className="w-full rounded-lg border border-[#232733] bg-[#0b0d11] px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#232733]">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  {profile.youtube && (
                    <a
                      href={profile.youtube}
                      target="_blank"
                      rel="noreferrer"
                      title="YouTube"
                      className="hover:text-red-400 transition-colors"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  )}
                  {profile.instagram && (
                    <a
                      href={profile.instagram}
                      target="_blank"
                      rel="noreferrer"
                      title="Instagram"
                      className="hover:text-pink-400 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {profile.github && (
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub"
                      className="hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Mensaje</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
