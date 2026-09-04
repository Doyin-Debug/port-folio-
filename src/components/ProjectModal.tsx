import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#040208]/90 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        
        {/* Backdrop click dismiss */}
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#090412] border border-purple-500/40 rounded-3xl shadow-2xl shadow-purple-950/80 overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="p-6 border-b border-purple-500/20 flex items-start justify-between gap-4 bg-[#120826]/90">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 text-[11px] font-mono uppercase font-bold tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-md">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-purple-300/70">
                  AK Digital Case Study & Architecture Review
                </span>
              </div>
              <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-purple-300/70 mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              id="project-modal-close-btn"
              className="p-2 rounded-xl bg-[#1e0d38] hover:bg-purple-900/60 text-purple-300 hover:text-white border border-purple-500/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-label="Close case study modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Image Preview Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 max-h-72">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090412] via-transparent to-transparent opacity-60" />
            </div>

            {/* Metrics Ribbon */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#120826] border border-purple-500/30">
                    <span className="text-[11px] text-purple-300/70 block">{metric.label}</span>
                    <span className="text-base font-mono font-extrabold text-white mt-0.5 block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Executive Case Study Summary */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-2">
                // System Architecture Summary
              </h4>
              <p className="text-sm text-purple-200/80 leading-relaxed">
                {project.fullCaseStudy || project.description}
              </p>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-300 mb-2">
                  // Core Bottleneck & Challenge
                </h5>
                <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 mb-2">
                  // Architectural Solution
                </h5>
                <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Quantified Impact */}
            <div className="p-5 rounded-2xl bg-purple-900/20 border border-purple-500/30">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-2">
                // Quantifiable Business & Tech Impact
              </h5>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                {project.impact}
              </p>
            </div>

            {/* Architectural Highlights */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-3">
                  // Technical Architectural Decisions
                </h4>
                <div className="space-y-2">
                  {project.architectureHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-purple-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack Tags */}
            <div>
              <h4 className="text-xs font-mono text-purple-300/80 uppercase tracking-wider mb-2">
                Technologies & Tools:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono text-purple-200 bg-[#1e0d38] border border-purple-500/30 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-5 bg-[#120826] border-t border-purple-500/20 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-purple-200 hover:text-white bg-[#1e0d38] hover:bg-purple-900/60 border border-purple-500/30 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl shadow-md shadow-purple-600/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-purple-300/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
