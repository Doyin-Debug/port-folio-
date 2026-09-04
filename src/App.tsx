import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Project } from './types/portfolio';

function PortfolioContent() {
  const { theme } = useTheme();

  // Modal states
  const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Global keyboard shortcut listener (CMD+K or CTRL+K opens terminal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedCaseStudyProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudyProject(null);
  };

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  const handleOpenTerminal = () => {
    setIsTerminalOpen(true);
  };

  const handleCloseTerminal = () => {
    setIsTerminalOpen(false);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToSection = (sectionId: string) => {
    setIsTerminalOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#07040d] text-slate-100' : 'bg-[#fbf9fe] text-slate-900'} flex flex-col selection:bg-purple-600 selection:text-white relative transition-colors duration-300`}>
      
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenTerminal={handleOpenTerminal}
        onOpenResume={handleOpenResume}
        onOpenContact={handleScrollToContact}
      />

      {/* Main Sections - Minimal & High Impact */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {/* Hero Section */}
        <HeroSection
          onOpenTerminal={handleOpenTerminal}
          onOpenResume={handleOpenResume}
          onOpenContact={handleScrollToContact}
        />

        {/* 01 // About AK Digital */}
        <AboutSection
          onOpenResume={handleOpenResume}
          onOpenContact={handleScrollToContact}
        />

        {/* 02 // Skills & Technical Matrix */}
        <SkillsSection />

        {/* 03 // Production Case Studies & Deployments */}
        <ProjectsSection
          onOpenCaseStudy={handleOpenCaseStudy}
        />

        {/* 04 // Direct Contact & Communication */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={handleOpenTerminal}
        onOpenResume={handleOpenResume}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedCaseStudyProject}
        onClose={handleCloseCaseStudy}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />

      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={handleCloseTerminal}
        onNavigateToSection={handleNavigateToSection}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
