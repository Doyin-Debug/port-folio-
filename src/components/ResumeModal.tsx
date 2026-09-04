import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, MapPin, Globe, Briefcase, GraduationCap, Award } from 'lucide-react';
import { personalInfo, experienceJourney, brandInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#040208]/90 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        {/* CV Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#090412] border border-purple-500/40 rounded-3xl shadow-2xl shadow-purple-950/80 overflow-hidden z-10 my-6 flex flex-col max-h-[92vh]"
        >
          {/* Top Actions Bar */}
          <div className="p-4 sm:p-5 border-b border-purple-500/20 flex items-center justify-between bg-[#120826]/90">
            <div className="flex items-center gap-2">
              <span id="resume-modal-title" className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                AK Digital Curriculum Vitae
              </span>
              <span className="hidden sm:inline-block text-xs text-purple-300/60 font-mono">
                • {brandInfo.name} ({personalInfo.name})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                id="resume-print-btn"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-200 hover:text-white bg-[#1e0d38] hover:bg-purple-900/60 border border-purple-500/30 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                title="Print or Save as PDF"
                aria-label="Print or Save CV as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-purple-300" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                id="resume-close-btn"
                className="p-1.5 rounded-lg bg-[#1e0d38] hover:bg-purple-900/60 text-purple-300 hover:text-white border border-purple-500/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                aria-label="Close CV preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document View */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090412] text-purple-100">
            
            {/* CV Header */}
            <div className="border-b border-purple-500/20 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-white tracking-tight font-display">
                    {brandInfo.name} <span className="text-xl font-normal text-purple-300">({personalInfo.name})</span>
                  </h1>
                  <h2 className="text-base font-semibold text-purple-400 mt-1">
                    {personalInfo.title}
                  </h2>
                </div>

                <div className="text-xs font-mono text-purple-300/70 space-y-1 sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-purple-400" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-300 transition-colors">{personalInfo.email}</a>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <span className="text-emerald-400 font-bold">WhatsApp:</span>
                    <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-200 transition-colors">{personalInfo.phone}</a>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-purple-200/80 mt-4 leading-relaxed max-w-3xl">
                Experienced Web Developer with 6+ years of expertise building modern, clean, and responsive web applications with semantic HTML5, modern CSS3 styling, and dynamic client-side JavaScript.
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple-400" />
                <span>Core Competencies & Stack</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#120826] border border-purple-500/30">
                  <strong className="text-white block mb-1">Web Development</strong>
                  <p className="text-purple-200/70 leading-relaxed">
                    Responsive multi-device architecture, cross-browser compatibility, modern frontend UI, web performance & mobile-first design.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#120826] border border-purple-500/30">
                  <strong className="text-white block mb-1">HTML, CSS & JS</strong>
                  <p className="text-purple-200/70 leading-relaxed">
                    Semantic HTML5 markup, modern CSS3 Flexbox/Grid animations, and dynamic ES6+ JavaScript client-side logic.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#120826] border border-purple-500/30">
                  <strong className="text-white block mb-1">UX Design</strong>
                  <p className="text-purple-200/70 leading-relaxed">
                    User-centered design architecture, wireframing, high-fidelity prototypes, user journeys, and accessibility compliance.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#120826] border border-purple-500/30">
                  <strong className="text-white block mb-1">Game Development</strong>
                  <p className="text-purple-200/70 leading-relaxed">
                    HTML5 Canvas, WebGL, 2D/3D browser gameplay, physics loops, sprite animations, and interactive experiences.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#120826] border border-purple-500/30 sm:col-span-2">
                  <strong className="text-white block mb-1">Developer Tools</strong>
                  <p className="text-purple-200/70 leading-relaxed">
                    Google AI Studio, Antigravity, VS Code, Claude, Firebase, and modern browser dev tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Professional Experience</span>
              </h3>

              <div className="space-y-6">
                {experienceJourney.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-purple-500/30 pl-4 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="text-sm font-bold text-white font-display">
                          {exp.role} <span className="text-purple-400 font-semibold">• {exp.company}</span>
                        </h4>
                        <span className="text-xs text-purple-300/70">{exp.location}</span>
                      </div>
                      <span className="text-xs font-mono text-purple-300/70">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs text-purple-200/80">
                      {exp.summary}
                    </p>

                    <ul className="space-y-1.5 pt-1">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="text-xs text-purple-200/70 flex items-start gap-2 leading-relaxed">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Credentials */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span>Education & Credentials</span>
              </h3>
              <div className="p-4 rounded-xl bg-[#120826] border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <h4 className="font-bold text-white">B.S. in Computer Science & Systems Engineering</h4>
                  <span className="text-purple-300/70">University of California • Magna Cum Laude</span>
                </div>
                <span className="font-mono text-purple-400">Honors Graduate</span>
              </div>
            </div>

          </div>

          {/* Footer Close */}
          <div className="p-4 bg-[#120826] border-t border-purple-500/20 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 transition-colors shadow-md shadow-purple-600/30"
            >
              Close CV
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
