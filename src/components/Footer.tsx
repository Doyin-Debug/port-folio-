import React, { useState } from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Twitter, Mail, Check, Copy, Download, Globe, Server, ShieldCheck, Zap, MessageCircle, Phone } from 'lucide-react';
import { personalInfo, socialLinks, brandInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [copiedProfile, setCopiedProfile] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyProfileJSON = () => {
    const profileData = {
      brand: brandInfo.name,
      tagline: brandInfo.tagline,
      name: personalInfo.name,
      title: personalInfo.title,
      whatsapp: personalInfo.phone,
      whatsappUrl: personalInfo.whatsappUrl,
      email: personalInfo.email,
      location: personalInfo.location,
      status: personalInfo.status,
      website: 'https://akdigital.dev',
      specialties: ['Distributed Systems', 'React 19', 'TypeScript', 'Node.js', 'Go', 'Kubernetes', 'Cloud Architecture']
    };

    navigator.clipboard.writeText(JSON.stringify(profileData, null, 2));
    setCopiedProfile(true);
    setTimeout(() => setCopiedProfile(false), 2500);
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Kelvin;Kelly;;;
FN:Kelly Kelvin (AK Digital)
ORG:AK Digital Studio
TITLE:${personalInfo.title}
TEL;TYPE=CELL,VOICE,PREF:${personalInfo.phone}
EMAIL;TYPE=INTERNET,PREF:${personalInfo.email}
ADR;TYPE=WORK:;;Lagos;;;Nigeria
URL:https://akdigital.dev
NOTE:AK Digital - High-performance digital engineering and systems architecture. WhatsApp: ${personalInfo.phone}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'AK_Digital_Kelly_Kelvin.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer 
      role="contentinfo"
      className="py-16 bg-[#040208] border-t border-purple-500/20 text-purple-200/70 text-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-500/20">
          
          {/* Brand & Mission Statement (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-violet-600 p-[1px] shadow-md shadow-purple-600/30">
                <div className="w-full h-full bg-[#07040d] rounded-[11px] flex items-center justify-center font-mono font-black text-sm text-purple-300">
                  AK
                </div>
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight block font-display">
                  {brandInfo.name}
                </span>
                <span className="text-[11px] text-purple-300/70 font-mono">
                  {brandInfo.tagline}
                </span>
              </div>
            </div>

            <p className="text-purple-200/70 text-xs leading-relaxed max-w-sm">
              {brandInfo.mission}
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="p-3.5 rounded-2xl bg-[#0f241a] border border-emerald-500/30 text-emerald-200 flex items-center justify-between gap-3 max-w-sm">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-current shrink-0" />
                <div>
                  <span className="font-bold text-white block text-[11px]">Direct WhatsApp Channel</span>
                  <span className="text-[10px] font-mono text-emerald-300">{personalInfo.phone} (+234 903 023 7531)</span>
                </div>
              </div>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 text-[10px] font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors shrink-0 shadow"
              >
                Chat Now
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120924] border border-purple-500/30 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AK Systems Operational (99.999%)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#120924] border border-purple-500/30 text-[11px] font-mono text-purple-300">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>TLS 1.3 / HTTP/3 Active</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 font-mono text-xs">
            <div className="space-y-2.5">
              <span className="font-bold text-white text-xs uppercase tracking-wider block">
                Navigation
              </span>
              <a href="#about" className="block text-purple-300/70 hover:text-purple-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 rounded">
                // About AK
              </a>
              <a href="#skills" className="block text-purple-300/70 hover:text-purple-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 rounded">
                // Tech Matrix
              </a>
              <a href="#projects" className="block text-purple-300/70 hover:text-purple-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 rounded">
                // Projects & Deployments
              </a>
              <a href="#contact" className="block text-purple-300/70 hover:text-purple-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 rounded">
                // Direct Contact
              </a>
            </div>

            <div className="space-y-2.5">
              <span className="font-bold text-white text-xs uppercase tracking-wider block">
                Developer Tools
              </span>
              <button
                onClick={onOpenResume}
                className="block text-left text-purple-300/70 hover:text-purple-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 rounded"
              >
                // Structured CV
              </button>
              <button
                onClick={onOpenTerminal}
                className="block text-left text-purple-300/70 hover:text-purple-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 rounded"
              >
                // CLI Console [⌘K]
              </button>
            </div>
          </div>

          {/* Socials & Quick Actions (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <span className="font-bold text-white text-xs uppercase tracking-wider block md:text-right">
                Connect
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-[#120924] hover:bg-purple-900/40 text-purple-300 hover:text-white border border-purple-500/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                    title={s.platform}
                    aria-label={`Visit AK Digital ${s.platform} profile`}
                  >
                    {s.id === 'whatsapp' && <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />}
                    {s.id === 'github' && <Github className="w-4 h-4" />}
                    {s.id === 'linkedin' && <Linkedin className="w-4 h-4" />}
                    {s.id === 'twitter' && <Twitter className="w-4 h-4" />}
                    {s.id === 'email' && <Mail className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full sm:w-auto items-stretch md:items-end">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadVCard}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#120924] hover:bg-purple-900/40 border border-purple-500/30 text-purple-200 hover:text-white text-[11px] font-mono transition-all"
                  title="Download vCard contact card"
                >
                  <Download className="w-3 h-3 text-purple-400" />
                  <span>vCard</span>
                </button>

                <button
                  onClick={handleCopyProfileJSON}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#120924] hover:bg-purple-900/40 border border-purple-500/30 text-purple-200 hover:text-white text-[11px] font-mono transition-all"
                  title="Copy Profile JSON-LD payload"
                >
                  {copiedProfile ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-purple-400" />}
                  <span>{copiedProfile ? 'Copied' : 'JSON'}</span>
                </button>

                <button
                  onClick={scrollToTop}
                  id="footer-back-to-top-btn"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#120924] hover:bg-purple-900/40 border border-purple-500/30 text-purple-200 hover:text-white text-[11px] font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                  aria-label="Scroll to top of the page"
                >
                  <span>Top</span>
                  <ArrowUp className="w-3 h-3 text-purple-400" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright and status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-purple-400/60">
          <div>
            © {new Date().getFullYear()} {brandInfo.name}. All systems engineered with React 19, TypeScript &amp; Go.
          </div>

          <div className="flex items-center gap-4">
            <span>Style: {brandInfo.style}</span>
            <span>•</span>
            <span>Color: {brandInfo.primaryColor}</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">WhatsApp: {personalInfo.phone}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
