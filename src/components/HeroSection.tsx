import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Sparkles, Send, Download, CheckCircle2, Shield, Activity, Zap, Radio, Globe2, Cpu, MessageCircle } from 'lucide-react';
import { personalInfo, brandInfo } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTerminal,
  onOpenResume,
  onOpenContact,
}) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Futuristic Purple Ambient Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Laser Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Buttons (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* AK Digital Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#120924]/90 border border-purple-500/30 shadow-lg shadow-purple-950/40 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500 shadow-[0_0_8px_#c084fc]"></span>
              </span>
              <span className="text-xs font-mono font-medium text-purple-200">
                [ AK.DIGITAL // QUANTUM ARCHITECTURE READY ]
              </span>
            </div>

            {/* Main Greeting & Futuristic Clean Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5 font-display">
              Web Development by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-200 text-glow-purple">AK DIGITAL</span>
              <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-100/90 font-sans">
                Web Developer • HTML, CSS & JavaScript
              </span>
            </h1>

            {/* Subtitle / Value proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Spearheaded by <strong className="text-white font-semibold">{personalInfo.name}</strong>, AK Digital crafts modern, responsive web experiences with clean HTML markup, tailored CSS styling, and dynamic JavaScript functionality.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <button
                onClick={scrollToProjects}
                id="hero-explore-projects-btn"
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 rounded-xl shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Systems</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id="hero-whatsapp-btn"
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 text-sm font-semibold text-emerald-300 bg-[#0c1f17]/90 hover:bg-[#122e22] border border-emerald-500/40 rounded-xl shadow-lg shadow-emerald-950/40 transition-all duration-200"
                title="Direct WhatsApp Chat with AK Digital"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                <span>WhatsApp: {personalInfo.phone}</span>
              </a>

              <button
                onClick={onOpenContact}
                id="hero-contact-btn"
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 text-sm font-semibold text-purple-200 bg-[#120924]/90 hover:bg-[#1c0e36] border border-purple-500/30 hover:border-purple-400 rounded-xl transition-all duration-200"
              >
                <Send className="w-4 h-4 text-purple-400" />
                <span>Start Project</span>
              </button>

              <button
                onClick={onOpenTerminal}
                id="hero-cli-btn"
                className="flex items-center justify-center gap-2 px-3.5 py-3.5 text-xs font-mono text-purple-300 bg-[#100720]/80 hover:bg-[#1a0c32] border border-purple-500/20 hover:border-purple-400/50 rounded-xl transition-all duration-200"
                title="Launch AK Digital Interactive Terminal"
              >
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>CLI [⌘K]</span>
              </button>
            </div>

            {/* Futuristic Telemetry KPI Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-purple-500/20">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                  {personalInfo.experienceYears}
                </span>
                <span className="text-xs font-medium text-purple-300/70 mt-0.5">
                  Years Architecture
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 tracking-tight font-display">
                  {personalInfo.projectsCompleted}
                </span>
                <span className="text-xs font-medium text-purple-300/70 mt-0.5">
                  Shipped Systems
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-fuchsia-400 tracking-tight font-display">
                  {personalInfo.uptimeRecord}
                </span>
                <span className="text-xs font-medium text-purple-300/70 mt-0.5">
                  Production SLA
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-violet-300 tracking-tight font-display">
                  {personalInfo.usersImpacted}
                </span>
                <span className="text-xs font-medium text-purple-300/70 mt-0.5">
                  Global Scale
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Holographic Avatar Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Concentric glowing animated purple rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-[spin_24s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-dashed border-fuchsia-500/25 animate-[spin_32s_linear_infinite_reverse]" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-600/25 via-fuchsia-600/15 to-transparent blur-2xl" />

              {/* Central 3D Avatar Container with Cyber Depth Effect */}
              <div className="relative w-[300px] sm:w-[340px] h-[300px] sm:h-[340px] rounded-3xl p-2 bg-gradient-to-b from-purple-500/40 via-purple-950/40 to-[#07040d] border border-purple-500/40 shadow-2xl shadow-purple-950/80 backdrop-blur-md overflow-hidden group">
                <img
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name} — AK Digital Systems Architect`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07040d]/90 via-transparent to-transparent opacity-60 pointer-events-none rounded-2xl" />
                
                {/* Cyber HUD overlay tag inside avatar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-purple-200 bg-[#07040d]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-500/30">
                  <span className="flex items-center gap-1.5 text-purple-300">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                    AK NODE // ONLINE
                  </span>
                  <span className="text-purple-400/80">LATENCY &lt; 0.8ms</span>
                </div>
              </div>

              {/* Floating Tech Badge 1: React 19 & TypeScript */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -top-3 -left-3 sm:-left-6 bg-[#0f071e]/95 border border-purple-500/40 shadow-xl shadow-black/60 px-3.5 py-2 rounded-xl backdrop-blur-xl flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-mono text-xs font-bold">
                  TS
                </div>
                <div>
                  <div className="text-xs font-bold text-white">React 19 & TypeScript</div>
                  <div className="text-[10px] text-purple-300/70">Strict Type Safety</div>
                </div>
              </motion.div>

              {/* Floating Tech Badge 2: Go & Microservices */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 bg-[#0f071e]/95 border border-purple-500/40 shadow-xl shadow-black/60 px-3.5 py-2 rounded-xl backdrop-blur-xl flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-fuchsia-500/20 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-300 font-bold text-xs">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">52k+ req/s</div>
                  <div className="text-[10px] text-purple-300/70">Go Streaming Engines</div>
                </div>
              </motion.div>

              {/* Floating Tech Badge 3: Distributed Cloud */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-3 left-4 sm:left-6 bg-[#0f071e]/95 border border-purple-500/40 shadow-xl shadow-black/60 px-3.5 py-2 rounded-xl backdrop-blur-xl flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-300 font-bold text-xs">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">AK Digital Cloud</div>
                  <div className="text-[10px] text-purple-300/70">AWS • Edge • Kafka</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
