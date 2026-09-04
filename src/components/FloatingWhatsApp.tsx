import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles, Check, Copy, ArrowUpRight, Zap, Clock } from 'lucide-react';
import { personalInfo, brandInfo } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const [copiedNumber, setCopiedNumber] = useState(false);
  const [lagosTime, setLagosTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      };
      setLagosTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const quickPrompts = [
    "🚀 Hi AK Digital, I'd like to request a project quote.",
    "⚡ Hi Kelly, I need a technical architecture review / audit.",
    "💼 Hi, I'd like to discuss engineering partnership / retainer."
  ];

  const handleSendWhatsApp = (textToSend?: string) => {
    const message = textToSend || customMsg || "Hi AK Digital, I'd like to discuss a project.";
    const url = `https://wa.me/2349030237531?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyNumber = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Cyber WhatsApp Chat Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mb-3 w-[330px] sm:w-[360px] bg-[#0d061a] border border-purple-500/40 rounded-3xl shadow-2xl shadow-purple-950/90 overflow-hidden backdrop-blur-xl"
            role="dialog"
            aria-label="Direct WhatsApp Chat with AK Digital"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-purple-900/80 via-[#180933] to-[#0d061a] border-b border-purple-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-2xl overflow-hidden border border-purple-400/40 shadow-md">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0d061a] shadow-[0_0_8px_#10b981]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white font-display">
                      {brandInfo.name}
                    </span>
                    <span className="px-1.5 py-0.2 text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded">
                      Online
                    </span>
                  </div>
                  <p className="text-[11px] text-purple-300/70 font-mono flex items-center gap-1.5">
                    <span>Direct Line: {personalInfo.phone}</span>
                    {lagosTime && (
                      <span className="text-emerald-300">• Lagos: {lagosTime}</span>
                    )}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl bg-purple-950/60 hover:bg-purple-900 text-purple-300 hover:text-white border border-purple-500/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                aria-label="Close WhatsApp chat popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3.5 bg-[#090314]">
              
              {/* Message Bubble from AK Digital */}
              <div className="p-3 rounded-2xl rounded-tl-sm bg-[#180b33] border border-purple-500/25 text-xs text-purple-100 space-y-1.5 shadow-md">
                <div className="flex items-center justify-between text-[10px] font-mono text-purple-300/60">
                  <span>{personalInfo.name} (Founder)</span>
                  <span className="text-emerald-400 font-semibold">{lagosTime ? `Lagos: ${lagosTime}` : 'Active Now'}</span>
                </div>
                <p className="leading-relaxed">
                  Hi there! 👋 Message AK Digital directly on WhatsApp for instant inquiries, sprint scoping, or technical discussions.
                </p>
              </div>

              {/* Number Copy Strip */}
              <div className="p-2.5 rounded-xl bg-[#120726] border border-purple-500/20 flex items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-purple-200 truncate">
                  <span className="text-emerald-400">WA:</span>
                  <span className="font-bold">{personalInfo.phone}</span>
                  <span className="text-[10px] text-purple-400/60">(+234 903 023 7531)</span>
                </div>
                <button
                  onClick={handleCopyNumber}
                  className="px-2 py-1 rounded-lg bg-purple-600/20 hover:bg-purple-600 text-purple-200 hover:text-white text-[10px] font-mono flex items-center gap-1 border border-purple-500/30 transition-colors shrink-0"
                  title="Copy WhatsApp number"
                >
                  {copiedNumber ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-purple-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* One-Click Quick Inquiry Options */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 block">
                  Quick Inquiry Templates:
                </span>
                <div className="space-y-1.5">
                  {quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendWhatsApp(prompt)}
                      className="w-full p-2 text-left text-[11px] rounded-xl bg-[#120726] hover:bg-[#1f0d40] border border-purple-500/20 hover:border-purple-400/50 text-purple-200 hover:text-white transition-all flex items-center justify-between group"
                    >
                      <span className="truncate pr-2">{prompt}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Message Field & Direct Chat Button */}
              <div className="pt-2 border-t border-purple-500/20 space-y-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSendWhatsApp();
                      }
                    }}
                    className="w-full pl-3 pr-10 py-2.5 text-xs bg-[#120726] border border-purple-500/30 rounded-xl text-white placeholder-purple-400/40 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                  <button
                    onClick={() => handleSendWhatsApp()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    aria-label="Send custom WhatsApp message"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>

                <button
                  onClick={() => handleSendWhatsApp()}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/60 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Start WhatsApp Chat Now</span>
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Pill */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-btn"
        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-full shadow-2xl shadow-emerald-950/90 border border-emerald-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all duration-300 group"
        aria-label="Open direct WhatsApp chat with AK Digital"
      >
        <div className="relative">
          <MessageCircle className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
        </div>
        
        <span className="text-xs font-bold tracking-wide">
          WhatsApp {lagosTime && <span className="font-mono font-normal text-[11px] text-emerald-100 ml-1">({lagosTime})</span>}
        </span>
      </motion.button>

    </div>
  );
};
