import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  FolderGit2, ExternalLink, Github, ArrowRight, Search, 
  Layers, Star, Sparkles, Filter 
} from 'lucide-react';
import { allProjects } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: ProjectCategory[] = ['All', 'Full Stack', 'Cloud & Systems', 'AI & Analytics', 'Dev Tools'];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((proj) => {
      const matchesCat = selectedCategory === 'All' || proj.category === selectedCategory;
      const matchesSearch = 
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative bg-[#07040d]/90 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold mb-3 shadow-sm shadow-purple-950/50">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // PRODUCTION CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Production Systems & Deployed Products
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
            Engineered by AK Digital for resilient scale, security, and sub-50ms user latency. Each deployed system highlights architectural trade-offs, live production URLs, and benchmarked performance.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400'
                      : 'bg-[#120924]/80 text-purple-300/70 hover:text-white hover:bg-[#1a0d33] border border-purple-500/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
            <input
              type="text"
              placeholder="Filter by tech (e.g. WASM, Kafka)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-[#120924]/90 border border-purple-500/30 rounded-xl text-purple-100 placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-purple-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-[#120924]/80 border border-purple-500/20 hover:border-purple-400/50 shadow-xl shadow-purple-950/30 hover:shadow-purple-950/60 overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Image Banner */}
              <div className="relative aspect-video overflow-hidden bg-[#07040d] border-b border-purple-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07040d] via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#07040d]/90 backdrop-blur-md text-purple-300 border border-purple-500/30 rounded-md">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 text-[10px] font-mono font-semibold bg-purple-500/20 text-purple-200 border border-purple-400/50 rounded-md flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-purple-300" />
                      AK Flagship
                    </span>
                  )}
                </div>

                {/* Live and GitHub icons overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-[#07040d]/90 text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-400 transition-colors"
                      title="View GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-500 hover:to-fuchsia-500 transition-colors shadow-md shadow-purple-600/30"
                      title="Open Live Preview"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-300/70 mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Impact metrics chips */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-[#07040d]/70 border border-purple-500/20 text-[11px]">
                          <span className="text-purple-300/70 block">{m.label}</span>
                          <span className="font-mono font-bold text-purple-200">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono text-purple-200 bg-[#1c0e36] border border-purple-500/20 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-purple-300/70">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action footer */}
                <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between">
                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-200 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Architecture & Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] font-mono text-purple-300/60">
                    Live System
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
