import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, FileCode2, Palette, Globe, Sparkles, Check, Search, Laptop,
  Bot, Brain, Zap, Flame, Wrench, Gamepad2, Compass
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillCategory, SkillItem } from '../types/portfolio';

// Dynamic icon mapper
const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'Globe': return <Globe className="w-5 h-5" />;
    case 'FileCode2': return <FileCode2 className="w-5 h-5" />;
    case 'Palette': return <Palette className="w-5 h-5" />;
    case 'Code2': return <Code2 className="w-5 h-5" />;
    case 'Laptop': return <Laptop className="w-5 h-5" />;
    case 'Bot': return <Bot className="w-5 h-5" />;
    case 'Brain': return <Brain className="w-5 h-5" />;
    case 'Zap': return <Zap className="w-5 h-5" />;
    case 'Flame': return <Flame className="w-5 h-5" />;
    case 'Compass': return <Compass className="w-5 h-5" />;
    case 'Gamepad2': return <Gamepad2 className="w-5 h-5" />;
    default: return <Code2 className="w-5 h-5" />;
  }
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(skillsData[0]);

  const categories: string[] = useMemo(() => {
    const desiredOrder = ['All', 'Web Development', 'UX Design', 'Game Development', 'Developer Tools', 'HTML & CSS', 'JavaScript'];
    const presentCats = Array.from(new Set(skillsData.map((s) => s.category)));
    const sorted = desiredOrder.filter(c => c === 'All' || presentCats.includes(c as SkillCategory));
    // Add any remaining
    presentCats.forEach(c => {
      if (!sorted.includes(c)) sorted.push(c);
    });
    return sorted;
  }, []);

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCat = 
        selectedCategory === 'All' || 
        skill.category === selectedCategory ||
        (selectedCategory === 'Developer Tools' && skill.id === 'html');
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative bg-[#080411]/90 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold mb-3 shadow-sm shadow-purple-950/50">
            <Wrench className="w-3.5 h-3.5 text-purple-400" />
            <span>02 // AK DIGITAL SKILLS & DEVELOPER TOOLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Web Developer & Modern Developer Tools
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
            Battle-tested expertise across modern web standards and cutting-edge developer tooling — including Google AI Studio, Antigravity, VS Code, Claude, Firebase, and semantic HTML.
          </p>
        </div>

        {/* Controls: Category Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Pills */}
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

          {/* Search Query Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
            <input
              type="text"
              placeholder="Search skill or tool (e.g. VS Code, Firebase, HTML)..."
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

        {/* Main Grid: Skills Cards & Spotlight Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skills Cards Grid (8 cols) */}
          <div className="lg:col-span-8">
            {filteredSkills.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#120924]/40 border border-purple-500/20">
                <p className="text-purple-300/70 text-sm">No skills found matching "{searchQuery}".</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="mt-3 text-xs text-purple-400 hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredSkills.map((skill) => {
                  const isSelected = selectedSkill?.id === skill.id;
                  return (
                    <motion.div
                      key={skill.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onClick={() => setSelectedSkill(skill)}
                      className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#180c30] border-2 border-purple-500 shadow-xl shadow-purple-950/60'
                          : 'bg-[#120924]/70 border border-purple-500/20 hover:border-purple-500/40 hover:bg-[#160b2b]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-xl border ${
                            isSelected
                              ? 'bg-purple-500/25 text-purple-200 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                              : 'bg-[#1c0e36] text-purple-300 border-purple-500/30'
                          }`}>
                            {getSkillIcon(skill.iconName)}
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-white leading-tight">
                              {skill.name}
                            </h3>
                            <span className="text-[11px] font-mono text-purple-300/70">
                              {skill.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#1c0e36] border border-purple-500/30 text-[11px] font-mono text-purple-300">
                          {skill.experience}
                        </div>
                      </div>

                      {/* Proficiency progress bar */}
                      <div className="space-y-1.5 mt-4">
                        <div className="flex justify-between text-[11px] font-mono text-purple-300/70">
                          <span>Mastery Level</span>
                          <span className="text-white font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-[#1c0e36] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-400 rounded-full shadow-[0_0_8px_#a855f7]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Selected Skill Deep-Dive Spotlight (4 cols) */}
          <div className="lg:col-span-4 sticky top-24">
            {selectedSkill ? (
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#160b2d] to-[#0d061a] border border-purple-500/40 shadow-2xl shadow-purple-950/60">
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-purple-500/20">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-md shadow-purple-950/50">
                      {getSkillIcon(selectedSkill.iconName)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-display">
                        {selectedSkill.name}
                      </h4>
                      <span className="text-xs font-mono text-purple-400">
                        {selectedSkill.category}
                      </span>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-purple-500/20 border border-purple-500/40 text-xs font-mono font-bold text-purple-200">
                    {selectedSkill.level}%
                  </div>
                </div>

                <div className="py-4 space-y-4">
                  <div>
                    <h5 className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      <span>// Practical Context & Standards</span>
                    </h5>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedSkill.description}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090412] border border-purple-500/20 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-purple-300/70">Practical Experience</span>
                      <span className="text-white font-mono font-semibold">{selectedSkill.experience}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-purple-300/70">Current Status</span>
                      <span className="text-emerald-400 font-mono font-semibold">Active Daily</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-purple-300/70">Code Quality</span>
                      <span className="text-purple-300 font-mono font-semibold">Clean & Modern</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-[11px] text-purple-300/80 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Crafted to modern web standards & accessibility</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-[#120924]/50 border border-purple-500/20 text-center">
                <p className="text-xs text-purple-300/70">Select any skill card to inspect practical context.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
