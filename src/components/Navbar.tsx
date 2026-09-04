import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, FileText, Menu, X, Send, Sparkles, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollVal = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scrollVal);

      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Skip to main content link for screen-readers and keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white text-xs font-semibold"
      >
        Skip to main content
      </a>

      {/* Global Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-purple-950/40 z-50 pointer-events-none"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading scroll progress"
      >
        <div
          className="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-violet-400 shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07040d]/90 backdrop-blur-xl border-b border-purple-500/20 shadow-xl shadow-purple-950/30 py-2.5 sm:py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Live Availability Indicator */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-xl"
            id="nav-brand-link"
            aria-label="AK Digital systems home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-fuchsia-600 to-violet-700 p-[1px] shadow-lg shadow-purple-600/30 group-hover:scale-105 group-hover:shadow-purple-500/50 transition-all duration-300">
              <div className="w-full h-full bg-[#07040d] rounded-[11px] flex items-center justify-center font-mono font-extrabold text-base text-purple-300 tracking-wider">
                AK
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3" title="AK Digital Network Active & Ready">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500 shadow-[0_0_8px_#a855f7]"></span>
              </span>
            </div>
            <div>
              <div className="font-bold text-white tracking-tight text-sm sm:text-base flex items-center gap-2">
                <span className="font-display tracking-wide font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">AK DIGITAL</span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono tracking-wide bg-purple-500/15 text-purple-300 border border-purple-500/30 rounded-md">
                  v3.8
                </span>
              </div>
              <p className="text-[11px] text-purple-300/60 font-mono hidden md:block">
                Systems & Digital Engineering • {personalInfo.name}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav 
            className="hidden lg:flex items-center gap-1 bg-[#100720]/80 border border-purple-500/20 px-3 py-1 rounded-full backdrop-blur-xl shadow-inner shadow-purple-950/50"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-purple-200 hover:bg-purple-900/30'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-fuchsia-600/20 to-purple-600/30 border border-purple-500/50 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* WhatsApp Quick Chat Button */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              id="nav-whatsapp-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-[#0c1f17]/90 border border-emerald-500/30 hover:border-emerald-400 hover:bg-[#122e22] rounded-lg transition-all duration-200 shadow-sm"
              title="Chat on WhatsApp (09030237531)"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Interactive Terminal Button */}
            <button
              onClick={onOpenTerminal}
              id="nav-terminal-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-purple-200 bg-[#120924]/90 border border-purple-500/30 hover:border-purple-400 hover:text-white rounded-lg transition-all duration-200 group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              title="Open AK Digital Interactive Terminal (CLI)"
              aria-label="Open Interactive Developer Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>CLI</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] bg-purple-950/80 text-purple-300 rounded border border-purple-500/30">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle (Light / Dark Mode) */}
            <ThemeToggle />

            {/* Resume Modal Trigger */}
            <button
              onClick={onOpenResume}
              id="nav-resume-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-[#120924]/90 border border-purple-500/20 hover:border-purple-500/40 hover:text-white rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-label="View Curriculum Vitae Preview"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>CV</span>
            </button>

            {/* Hire / Contact Primary Button */}
            <button
              onClick={onOpenContact}
              id="nav-hire-btn"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 rounded-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-label="Initiate contact or project inquiry"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Engage AK</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />

            <button
              onClick={onOpenTerminal}
              className="p-2 text-purple-300 bg-[#120924] border border-purple-500/30 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              title="Open Terminal"
              aria-label="Open CLI Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 text-slate-300 hover:text-white bg-[#120924] border border-purple-500/30 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-purple-300" /> : <Menu className="w-5 h-5 text-purple-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden bg-[#0a0514]/98 border-b border-purple-500/20 px-4 pt-3 pb-6 backdrop-blur-2xl"
              role="dialog"
              aria-label="Mobile Navigation Menu"
            >
              <div className="flex flex-col gap-1 mb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? 'bg-purple-600/20 text-purple-300 font-semibold border border-purple-500/30'
                        : 'text-slate-300 hover:bg-purple-950/40 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-3 border-t border-purple-500/20">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-slate-200 bg-[#120924] border border-purple-500/20 rounded-lg"
                >
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span>View Curriculum Vitae</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg shadow-lg shadow-purple-600/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Start Project with AK Digital</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
