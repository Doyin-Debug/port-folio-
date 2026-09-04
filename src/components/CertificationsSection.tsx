import React, { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Cloud, Server, Cpu, Layout, Sparkles } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { CertificationItem } from '../types/portfolio';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-amber-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-fuchsia-400" />;
      default:
        return <Award className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#140a2b] border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>08 // Verified Accreditations & Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Technical Certifications &amp; Standards
            </h2>
            <p className="text-purple-200/70 text-sm mt-2 max-w-2xl">
              Industry-standard verified engineering credentials in enterprise cloud infrastructure, container orchestration, and high-performance system design.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>100% Cryptographically Verified Credentials</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#120924] border border-purple-500/25 hover:border-purple-400 transition-all duration-300 group relative overflow-hidden shadow-lg shadow-purple-950/40"
            >
              {/* Ambient gradient top light */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-600/20 transition-all" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1a0e36] border border-purple-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(cert.badgeIcon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors font-display">
                      {cert.title}
                    </h3>
                    <span className="text-xs text-purple-300/80 font-mono block">
                      {cert.issuer} • Issued {cert.issueDate}
                    </span>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold shrink-0 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>ACTIVE</span>
                </div>
              </div>

              {/* Skills and Domain Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-[#1c0e38] text-[11px] font-mono text-purple-200/80 border border-purple-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Credential Verification Footer */}
              <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs font-mono text-purple-300/70">
                <div className="flex items-center gap-1.5">
                  <span className="text-purple-400">ID:</span>
                  <span className="text-white font-mono">{cert.credentialId}</span>
                </div>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors hover:underline text-[11px]"
                  >
                    <span>Verify Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
