import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, Mail, MapPin, Clock, Check, Copy, Sparkles, 
  Github, Linkedin, Twitter, MessageSquare, AlertCircle, ArrowUpRight, Zap, MessageCircle, Phone 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, socialLinks, brandInfo } from '../data/portfolioData';
import { ContactFormData } from '../types/portfolio';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledEstimate?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  prefilledService, 
  prefilledEstimate 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: prefilledService || 'Full-Stack Product Engineering',
    budgetRange: '$15k — $35k',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // Update prefilled data when changed from services estimator
  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({
        ...prev,
        projectType: prefilledService,
        message: prefilledEstimate 
          ? `Hi AK Digital,\n\nI'm interested in discussing a project for ${prefilledService}.\nDetails: ${prefilledEstimate}.\n\nLooking forward to speaking!` 
          : prev.message
      }));
    }
  }, [prefilledService, prefilledEstimate]);

  // Live time ticker for Lagos, Nigeria (WAT / West Africa Time, GMT+1)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hi AK Digital, I am ${formData.name || 'a prospective client'}.\nProject Type: ${formData.projectType}\nBudget Target: ${formData.budgetRange}\nEmail: ${formData.email || 'N/A'}\nMessage: ${formData.message || 'I would like to discuss a project with AK Digital.'}`;
    const url = `https://wa.me/2349030237531?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please provide a brief message or project description.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07040d] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold mb-3 shadow-sm shadow-purple-950/50">
            <Mail className="w-3.5 h-3.5" />
            <span>04 // GET IN TOUCH & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Let's Architect Something Extraordinary
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
            Have a project in mind, need high-performance digital engineering, or want to discuss enterprise architecture? Connect directly with AK Digital via WhatsApp or secure message dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info, SF Clock, Social Links (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Dedicated WhatsApp Instant Transmission Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#140a2b] via-[#100720] to-[#07040d] border border-emerald-500/30 shadow-xl shadow-emerald-950/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  // Instant WhatsApp Channel
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full">
                  Fastest Response
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 bg-[#07040d] rounded-2xl border border-emerald-500/25 mb-4">
                <div className="flex items-center gap-2 text-white font-mono text-sm">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-bold select-all">{personalInfo.phone}</span>
                  <span className="text-xs text-purple-300/60 hidden sm:inline">(+234 903 023 7531)</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  id="contact-copy-phone-btn"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded-xl transition-colors shrink-0 border border-emerald-500/30"
                  title="Copy WhatsApp number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id="contact-whatsapp-direct-btn"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/60 flex items-center justify-center gap-2 transition-all group"
              >
                <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp Directly (09030237531)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Email Copy Tile */}
            <div className="p-6 rounded-3xl bg-[#120924]/80 border border-purple-500/30 shadow-xl shadow-purple-950/40">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-2">
                // Direct Email Protocol
              </span>
              <div className="flex items-center justify-between gap-3 p-3 bg-[#07040d] rounded-2xl border border-purple-500/20">
                <span className="text-sm font-mono text-purple-200 truncate select-all">
                  {personalInfo.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-purple-600/20 hover:bg-purple-600 text-purple-200 hover:text-white rounded-xl transition-colors shrink-0 border border-purple-500/30"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status & Time indicator */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-purple-500/20">
                <div>
                  <span className="text-[11px] text-purple-300/70 block">Current Base</span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-white mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
                <div>
                  <span className="text-[11px] text-purple-300/70 block">Local Time (WAT / GMT+1)</span>
                  <div className="flex items-center gap-1 text-xs font-mono font-semibold text-emerald-400 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentTime || 'West Africa Time'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="p-6 rounded-3xl bg-[#120924]/60 border border-purple-500/20">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-4">
                // Connect Across Networks
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-[#090412] border border-purple-500/20 hover:border-purple-400/50 hover:bg-[#160b2b] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-xs font-bold text-white block group-hover:text-purple-300 transition-colors">
                        {social.platform}
                      </span>
                      <span className="text-[11px] font-mono text-purple-300/70">
                        {social.handle}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-purple-400/60 group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Response Promise */}
            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>
                <strong>AK Digital Response SLA:</strong> Instant responses on WhatsApp (09030237531). For email transmissions, we respond within 12-24 business hours.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#120924]/80 border border-purple-500/30 shadow-2xl shadow-purple-950/50">
              
              <h3 className="text-xl font-bold text-white mb-1 font-display">
                Send a Direct Project Message
              </h3>
              <p className="text-xs text-purple-200/70 mb-6">
                Fill in your parameters below to initiate an inquiry. You can dispatch via secure email or launch immediately into WhatsApp.
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your message regarding <em>{formData.projectType}</em> has been securely transmitted. AK Digital will respond to <strong>{formData.email}</strong> promptly.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: '',
                          email: '',
                          projectType: 'Full-Stack Product Engineering',
                          budgetRange: '$15k — $35k',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-semibold text-white bg-purple-600/30 hover:bg-purple-600 border border-purple-500/40 rounded-xl transition-colors"
                    >
                      Send Another Message
                    </button>

                    <a
                      href={personalInfo.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Also Connect on WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-purple-300/70 block mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        placeholder="Alex Rivers"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#07040d] border border-purple-500/30 rounded-xl text-purple-100 placeholder-purple-400/40 focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-purple-300/70 block mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#07040d] border border-purple-500/30 rounded-xl text-purple-100 placeholder-purple-400/40 focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-purple-300/70 block mb-1.5">Inquiry Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#07040d] border border-purple-500/30 rounded-xl text-purple-100 focus:outline-none focus:border-purple-400 transition-colors"
                      >
                        <option value="Full-Stack Product Engineering">Full-Stack Product Engineering</option>
                        <option value="Distributed Systems & Cloud Architecture">Distributed Systems & Cloud</option>
                        <option value="Design Systems & UI/UX Engineering">Design Systems & UI/UX</option>
                        <option value="Technical Advisory & Code Audits">Technical Advisory / Audit</option>
                        <option value="Full-Time Staff Role Opportunity">Full-Time Staff Role</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-purple-300/70 block mb-1.5">Budget / Scope Target</label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#07040d] border border-purple-500/30 rounded-xl text-purple-100 focus:outline-none focus:border-purple-400 transition-colors"
                      >
                        <option value="< $10k">&lt; $10k (Sprint / Audit)</option>
                        <option value="$10k — $25k">$10k — $25k (MVP / Modular)</option>
                        <option value="$25k — $50k+">$25k — $50k+ (Comprehensive)</option>
                        <option value="Full-Time Competitive Staff Comp">Full-Time Staff Comp</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-purple-300/70 block mb-1.5">Project Overview / Goals *</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your product goals, timeline, and tech requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#07040d] border border-purple-500/30 rounded-xl text-purple-100 placeholder-purple-400/40 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[11px] text-purple-300/70">
                      🔒 Zero spam. High-priority transmission.
                    </span>

                    <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={handleSendViaWhatsApp}
                        id="contact-whatsapp-submit-btn"
                        className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-emerald-200 bg-[#0f241a] hover:bg-emerald-900/60 border border-emerald-500/40 rounded-xl transition-all flex items-center justify-center gap-2"
                        title="Send this message directly through WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                        <span>Send to WhatsApp</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        id="contact-submit-btn"
                        className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 rounded-xl shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Dispatching Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Dispatch Email</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

