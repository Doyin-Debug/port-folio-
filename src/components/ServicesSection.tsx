import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, Layout, Server, Palette, ShieldCheck, 
  Check, ArrowRight, Calculator, Sparkles, Clock, CheckCircle2, Zap
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { ServiceItem } from '../types/portfolio';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string, estimateInfo?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForContact }) => {
  // Estimator state
  const [selectedServiceType, setSelectedServiceType] = useState('fullstack');
  const [projectScale, setProjectScale] = useState('mvp');
  const [needsCloudInfra, setNeedsCloudInfra] = useState(true);
  const [needsDesignSystem, setNeedsDesignSystem] = useState(true);

  // Dynamic estimate calculation
  const getEstimatedTimeline = () => {
    let baseWeeks = selectedServiceType === 'fullstack' ? 4 : selectedServiceType === 'cloud' ? 3 : 2;
    if (projectScale === 'enterprise') baseWeeks += 4;
    if (projectScale === 'scaleup') baseWeeks += 2;
    if (needsCloudInfra) baseWeeks += 1;
    if (needsDesignSystem) baseWeeks += 1;
    return `${baseWeeks} — ${baseWeeks + 2} Weeks`;
  };

  const handleApplyEstimate = () => {
    const serviceName = servicesData.find(s => s.id.includes(selectedServiceType))?.title || 'Custom Engineering Project';
    const estimateSummary = `Project Scale: ${projectScale.toUpperCase()}, Estimated Timeline: ${getEstimatedTimeline()}, Cloud Infra: ${needsCloudInfra ? 'Yes' : 'No'}, Design System: ${needsDesignSystem ? 'Yes' : 'No'}`;
    onSelectServiceForContact(serviceName, estimateSummary);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-purple-300" />;
      case 'Server': return <Server className="w-5 h-5 text-fuchsia-300" />;
      case 'Palette': return <Palette className="w-5 h-5 text-violet-300" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-purple-200" />;
      default: return <Briefcase className="w-5 h-5 text-purple-300" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#07040d]/95 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold mb-3 shadow-sm shadow-purple-950/50">
            <Briefcase className="w-3.5 h-3.5" />
            <span>06 // AK DIGITAL SOLUTIONS & CONSULTING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            How AK Digital Partners & Builds With You
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
            Tailored engineering partnerships for ambitious founders, scaleups, and enterprise teams seeking high-velocity execution and uncompromised code quality.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#120924]/80 border border-purple-500/20 hover:border-purple-400/50 shadow-xl shadow-purple-950/30 hover:shadow-purple-950/60 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1d0e38] border border-purple-500/30 flex items-center justify-center group-hover:scale-105 group-hover:border-purple-400 shadow-md shadow-purple-950/50 transition-all">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="px-3 py-1 text-xs font-mono text-purple-300 bg-purple-500/15 border border-purple-500/30 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {service.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors font-display">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-purple-300/70 mb-4">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
                    // Included Deliverables
                  </h4>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between">
                <span className="text-[11px] text-purple-300/60 max-w-[200px] truncate">
                  Ideal: {service.recommendedFor}
                </span>
                <button
                  onClick={() => onSelectServiceForContact(service.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 rounded-xl transition-all shadow-md shadow-purple-600/30"
                >
                  <span>Request Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Engineering Workflow */}
        <div className="p-8 rounded-3xl bg-[#100720]/80 border border-purple-500/30 shadow-xl shadow-purple-950/40 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              The 4-Step AK Digital Engineering Process
            </h3>
            <p className="text-xs sm:text-sm text-purple-200/70 mt-1.5">
              Structured for radical transparency, clear milestones, and rapid iteration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery & RFC Specs',
                desc: 'Clarifying business goals, technical constraints, data models, and drafting a formal architecture RFC.'
              },
              {
                step: '02',
                title: 'Architecture & Design',
                desc: 'Schema design, API contract specifications, design system tokens, and continuous integration pipeline scaffolding.'
              },
              {
                step: '03',
                title: 'High-Velocity Sprints',
                desc: 'Modular test-driven development, daily commit visibility, preview staging environments, and weekly demos.'
              },
              {
                step: '04',
                title: 'Audit, QA & Launch',
                desc: 'Load testing (k6/artillery), security audit, Core Web Vitals optimization, zero-downtime production rollout.'
              }
            ].map((phase, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#090412] border border-purple-500/20 relative">
                <span className="font-mono text-2xl font-extrabold text-purple-400/40 block mb-2">
                  {phase.step}
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5 font-display">
                  {phase.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Scope & Timeline Estimator Widget */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#140a2a] via-[#1a0c36] to-[#120826] border border-purple-500/40 shadow-2xl shadow-purple-950/60">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/20 text-purple-300 font-mono text-xs font-semibold mb-2 border border-purple-500/30">
                <Calculator className="w-3.5 h-3.5" />
                <span>AK Interactive Scope Estimator</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Estimate Project Scope & Velocity
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/70 mt-1">
                Configure your target requirements to instantly generate an estimated delivery window and tailored proposal brief.
              </p>

              {/* Selector Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="text-xs font-mono text-purple-300/70 block mb-1.5">Primary Scope</label>
                  <select
                    value={selectedServiceType}
                    onChange={(e) => setSelectedServiceType(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#090412] border border-purple-500/30 rounded-xl text-purple-100 focus:outline-none focus:border-purple-400"
                  >
                    <option value="fullstack">Full-Stack Application</option>
                    <option value="cloud">Cloud & Microservices</option>
                    <option value="uiux">Design System & Frontend</option>
                    <option value="consulting">Architecture & Security Audit</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-purple-300/70 block mb-1.5">Scale Tier</label>
                  <select
                    value={projectScale}
                    onChange={(e) => setProjectScale(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#090412] border border-purple-500/30 rounded-xl text-purple-100 focus:outline-none focus:border-purple-400"
                  >
                    <option value="mvp">Early MVP (Fast Launch)</option>
                    <option value="scaleup">Scaleup (High Growth)</option>
                    <option value="enterprise">Enterprise (Multi-region)</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-purple-200">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needsCloudInfra}
                    onChange={(e) => setNeedsCloudInfra(e.target.checked)}
                    className="rounded bg-[#090412] border-purple-500/40 text-purple-600 focus:ring-0"
                  />
                  <span>Include AWS / K8s Infrastructure</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needsDesignSystem}
                    onChange={(e) => setNeedsDesignSystem(e.target.checked)}
                    className="rounded bg-[#090412] border-purple-500/40 text-purple-600 focus:ring-0"
                  />
                  <span>Include Custom Design System</span>
                </label>
              </div>
            </div>

            {/* Estimated Output Result Card */}
            <div className="p-6 rounded-2xl bg-[#090412] border border-purple-500/40 shadow-xl w-full lg:w-80 flex flex-col items-center text-center">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                Estimated Delivery Window
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mt-1.5 mb-2">
                {getEstimatedTimeline()}
              </div>
              <p className="text-[11px] text-purple-300/70 mb-5 leading-relaxed">
                Includes automated CI/CD pipelines, test coverage, and weekly milestone demos.
              </p>

              <button
                onClick={handleApplyEstimate}
                id="services-apply-estimate-btn"
                className="w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 rounded-xl shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Prefill Project Brief</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
