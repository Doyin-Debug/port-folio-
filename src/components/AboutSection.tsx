import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Zap, ShieldCheck, HeartHandshake, Check, Copy, FileText, ArrowRight, Compass, Code2, Cpu, Radio, Sparkles } from 'lucide-react';
import { personalInfo, brandInfo } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume, onOpenContact }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const developerManifesto = `// AK Digital Engineering Manifesto & Architecture Blueprint
interface AKDigitalProtocol {
  brand: "AK Digital";
  developer: "${personalInfo.name}";
  role: "Web Developer";
  experience: "${personalInfo.experienceYears}";
  corePrinciples: [
    "Clean semantic HTML5 markup & accessibility compliance",
    "Modern responsive CSS3 design, Flexbox & Grid layouts",
    "Dynamic, high-performance JavaScript (ES6+) interactivity",
    "Cross-browser compatibility, rapid load times & visual craft"
  ];
  specializations: [
    "Modern Web Development & Mobile-First Design",
    "Semantic HTML & Accessible DOM Architectures",
    "Responsive CSS & Custom Interactive Styling",
    "Dynamic Client-Side JavaScript Logic & APIs"
  ];
  status: "ONLINE // Open for Client Projects & Contracts ⚡";
}

export const deployWithAKDigital = async (): Promise<WebExcellence> => {
  return await buildModernWebSolution({
    responsiveness: "Flawless Across All Screen Sizes",
    styling: "Modern HTML5 & Responsive CSS3",
    interactivity: "Smooth Dynamic JavaScript Logic"
  });
};`;

  const handleCopyManifesto = () => {
    navigator.clipboard.writeText(developerManifesto);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const principleIcons = [
    <Layers className="w-5 h-5 text-purple-400" />,
    <Zap className="w-5 h-5 text-fuchsia-400" />,
    <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    <HeartHandshake className="w-5 h-5 text-violet-400" />
  ];

  return (
    <section id="about" className="py-24 relative bg-[#090412]/80 border-t border-purple-500/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold mb-3 shadow-sm shadow-purple-950/50">
            <Compass className="w-3.5 h-3.5" />
            <span>01 // ABOUT AK DIGITAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Next-Generation Systems at the Intersection of Scale & Craft
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
            AK Digital transforms complex business requirements into ultra-responsive web applications and resilient distributed cloud architectures.
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Principles (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Principles Grid */}
            <div className="mt-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-display">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>AK Digital Engineering Pillars</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.principles.map((principle, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#120924]/80 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-950/40 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1c0e36] border border-purple-500/30 flex items-center justify-center mb-3">
                      {principleIcons[idx % principleIcons.length]}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">
                      {principle.title}
                    </h4>
                    <p className="text-xs text-purple-200/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenResume}
                id="about-view-resume-btn"
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1a0d33] hover:bg-[#251347] border border-purple-500/30 hover:border-purple-400 rounded-xl transition-all duration-200 shadow-md shadow-purple-950/40"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>View Structured CV</span>
              </button>

              <button
                onClick={onOpenContact}
                id="about-discuss-roles-btn"
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-purple-200 hover:text-white bg-purple-600/20 hover:bg-purple-600 border border-purple-500/40 rounded-xl transition-all duration-200 shadow-md shadow-purple-950/40"
              >
                <span>Engage AK Digital</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Code Manifesto & Quick Facts (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Developer Manifesto Code Window */}
            <div className="rounded-2xl bg-[#0f071e]/90 border border-purple-500/30 shadow-2xl shadow-purple-950/60 overflow-hidden">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080311] border-b border-purple-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-purple-500/80" />
                  <span className="ml-2 font-mono text-xs text-purple-300/80">
                    ak_digital_manifesto.ts
                  </span>
                </div>
                <button
                  onClick={handleCopyManifesto}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-purple-300 hover:text-white bg-purple-950/80 hover:bg-purple-900 border border-purple-500/30 transition-colors"
                  title="Copy snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Editor Body */}
              <pre className="p-4 text-xs font-mono leading-relaxed text-purple-100/90 overflow-x-auto selection:bg-purple-500/40">
                <code>{developerManifesto}</code>
              </pre>
            </div>

            {/* Quick Facts Card */}
            <div className="p-6 rounded-2xl bg-[#120924]/70 border border-purple-500/20 shadow-lg shadow-purple-950/30">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-4 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>// AK Digital Reference Snapshot</span>
              </h4>
              <div className="flex flex-col gap-3.5">
                {personalInfo.quickFacts.map((fact, idx) => (
                  <div key={idx} className="flex flex-col pb-3 border-b border-purple-500/10 last:border-0 last:pb-0">
                    <span className="text-xs font-medium text-purple-300/70">
                      {fact.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-100 mt-0.5">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
