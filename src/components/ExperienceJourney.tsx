import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award, GitBranch } from 'lucide-react';
import { experienceJourney } from '../data/portfolioData';

export const ExperienceJourney: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(experienceJourney[0].id);

  const activeExp = experienceJourney.find(e => e.id === activeExpId) || experienceJourney[0];

  return (
    <section id="experience" className="py-24 relative bg-[#080411]/95 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold mb-3 shadow-sm shadow-purple-950/50">
            <GitBranch className="w-3.5 h-3.5" />
            <span>05 // AK DIGITAL TRAJECTORY & TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Engineering Milestones & Systems Leadership
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
            Step-by-step career trajectory building high-scale products, leading digital engineering squads, and solving deep cloud infrastructure challenges.
          </p>
        </div>

        {/* 2-Column Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Timeline Stepper List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {experienceJourney.map((exp, idx) => {
              const isActive = exp.id === activeExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 relative border ${
                    isActive
                      ? 'bg-[#180c30] border-purple-500 shadow-xl shadow-purple-950/50'
                      : 'bg-[#120924]/60 border-purple-500/20 hover:bg-[#150b29] hover:border-purple-500/40'
                  }`}
                >
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-purple-400">
                      Phase 0{experienceJourney.length - idx}
                    </span>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                      exp.isCurrent
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'bg-[#0d061a] text-purple-300/70'
                    }`}>
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 font-display">
                    {exp.role}
                  </h3>
                  <div className="text-xs text-purple-300/70 flex items-center gap-1.5">
                    <span className="font-semibold text-purple-200">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  {isActive && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Deep-Dive Card (8 cols) */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeExp.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#140a2a] to-[#0c0517] border border-purple-500/40 shadow-2xl shadow-purple-950/60"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded-lg">
                      {activeExp.type}
                    </span>
                    {activeExp.isCurrent && (
                      <span className="px-2.5 py-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Current Focus
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white font-display">
                    {activeExp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-purple-300/70">
                    <span className="font-semibold text-purple-200 text-base">{activeExp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      {activeExp.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono text-xs text-purple-300">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {activeExp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary Statement */}
              <div className="py-5">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                  {activeExp.summary}
                </p>
              </div>

              {/* Quantified Accomplishments */}
              <div className="space-y-3 pt-2 pb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 flex items-center gap-2">
                  <span>// Key Technical Deliverables & Impact</span>
                </h4>
                <div className="space-y-2.5">
                  {activeExp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-5 border-t border-purple-500/20">
                <h4 className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-2.5">
                  Technologies Deployed:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeExp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-purple-200 bg-purple-500/15 border border-purple-500/30 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
