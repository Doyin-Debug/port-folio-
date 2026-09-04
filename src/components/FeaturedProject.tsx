import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, ExternalLink, Github, ArrowRight, Activity, 
  Cpu, Layers, CheckCircle2, Play, Pause, RefreshCw, BarChart2, ShieldCheck, Zap
} from 'lucide-react';
import { featuredProject } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface FeaturedProjectProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onOpenCaseStudy }) => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simMetrics, setSimMetrics] = useState({
    throughput: 52480,
    latency: 11.2,
    activeWorkers: 64,
    droppedPackets: 0,
    bufferLoad: 28,
  });

  // Benchmark simulator effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating) {
      interval = setInterval(() => {
        setSimMetrics((prev) => ({
          throughput: Math.floor(51000 + Math.random() * 3200),
          latency: Number((10.4 + Math.random() * 1.8).toFixed(1)),
          activeWorkers: 64,
          droppedPackets: 0,
          bufferLoad: Math.floor(25 + Math.random() * 14),
        }));
      }, 400);
    }
    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <section id="featured" className="py-24 relative bg-[#07040d] border-t border-purple-500/20 overflow-hidden">
      {/* Futuristic purple background glow accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold mb-3 shadow-sm shadow-purple-950/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // AK DIGITAL FLAGSHIP SYSTEM</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Featured Architectural Innovation
              </h2>
              <p className="text-purple-200/70 text-base sm:text-lg max-w-2xl mt-2">
                A deep architectural dive into mission-critical distributed streaming, event pipelining, and sub-12ms throughput.
              </p>
            </div>
            <button
              onClick={() => onOpenCaseStudy(featuredProject)}
              id="featured-view-casestudy-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-purple-200 hover:text-white bg-purple-600/20 hover:bg-purple-600 border border-purple-500/40 rounded-xl transition-all duration-200 shadow-md shadow-purple-950/40"
            >
              <span>Full Case Study & RFC</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Featured Project Main Card Container */}
        <div className="rounded-3xl bg-gradient-to-b from-[#120924] via-[#0d061a] to-[#07040d] border border-purple-500/30 shadow-2xl shadow-purple-950/50 overflow-hidden">
          
          {/* Top Bar: Title & Tags */}
          <div className="p-6 sm:p-8 border-b border-purple-500/20 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded-lg">
                  AK Distributed Cloud Core
                </span>
                <span className="px-2.5 py-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-1">
                  <Activity className="w-3 h-3" />
                  Production Live
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {featuredProject.title}
              </h3>
              <p className="text-sm sm:text-base text-purple-200/70 mt-1">
                {featuredProject.subtitle}
              </p>
            </div>

            {/* Actions: Demo / GitHub / Modal */}
            <div className="flex items-center gap-3">
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-purple-200 hover:text-white bg-[#1a0c33] hover:bg-[#251247] border border-purple-500/30 rounded-xl transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source</span>
              </a>
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 rounded-xl shadow-lg shadow-purple-600/30 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Preview</span>
              </a>
            </div>
          </div>

          {/* Center Body: Visual Mockup & Interactive Simulator Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: 3D Mockup Visual (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 group shadow-xl">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07040d]/90 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-purple-200 bg-[#07040d]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-purple-500/30">
                  <span className="flex items-center gap-1.5 text-purple-300">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                    AK Cluster Synchronized
                  </span>
                  <span className="text-purple-300/70">Multi-Region US-East / EU-Central</span>
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono text-purple-200 bg-[#160b2b] border border-purple-500/20 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Architecture Highlights & Live Simulator (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Metrics Matrix */}
              <div className="grid grid-cols-2 gap-3">
                {featuredProject.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#120924]/80 border border-purple-500/20">
                    <span className="text-xs text-purple-300/70 block">{metric.label}</span>
                    <span className="text-lg font-bold font-mono text-white mt-0.5 block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Core Architectural Pillars */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>// Architectural Innovations</span>
                </h4>
                {featuredProject.architectureHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Live Benchmark Engine Simulation */}
              <div className="p-4 rounded-2xl bg-[#090412] border border-purple-500/30 shadow-inner">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-purple-500/20 text-purple-400">
                      <BarChart2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white font-mono">
                      AK Live Benchmark Stream
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setIsSimulating(!isSimulating)}
                    id="featured-toggle-sim-btn"
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                      isSimulating
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : 'bg-purple-600/20 text-purple-200 border border-purple-500/40 hover:bg-purple-600/30'
                    }`}
                  >
                    {isSimulating ? (
                      <>
                        <Pause className="w-3 h-3" />
                        <span>Halt Stream</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-purple-300" />
                        <span>Simulate 52k Spike</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Simulation Readouts */}
                <div className="grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="p-2 rounded-lg bg-[#120924] border border-purple-500/20">
                    <span className="text-[10px] text-purple-300/70 block">Ingestion Rate</span>
                    <span className="text-xs font-bold text-emerald-400">
                      {simMetrics.throughput.toLocaleString()} /s
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#120924] border border-purple-500/20">
                    <span className="text-[10px] text-purple-300/70 block">p99 Latency</span>
                    <span className="text-xs font-bold text-purple-300">
                      {simMetrics.latency} ms
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#120924] border border-purple-500/20">
                    <span className="text-[10px] text-purple-300/70 block">Packet Loss</span>
                    <span className="text-xs font-bold text-purple-200">
                      0.00% (DLQ: 0)
                    </span>
                  </div>
                </div>

                {/* Buffer load bar */}
                <div className="mt-3 space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-purple-300/70">
                    <span>Ring-Buffer Capacity</span>
                    <span>{simMetrics.bufferLoad}% utilized</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#120924] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-400 transition-all duration-300 rounded-full shadow-[0_0_8px_#a855f7]"
                      style={{ width: `${simMetrics.bufferLoad}%` }}
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
