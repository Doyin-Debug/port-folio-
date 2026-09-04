import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, X, CornerDownLeft, Sun, Moon } from 'lucide-react';
import { personalInfo, skillsData, allProjects, experienceJourney, servicesData, brandInfo, certificationsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  onNavigateToSection,
}) => {
  const { theme, toggleTheme, setTheme } = useTheme();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1.5 text-xs text-purple-200/80">
          <div className="text-purple-300 font-bold">
            AK Digital Hypervisor Shell v3.1.0 (x86_64-cloudrun-linux)
          </div>
          <div>Type <span className="text-emerald-400 font-bold">help</span> to view available commands or try <span className="text-purple-300 font-bold">skills</span>, <span className="text-purple-300 font-bold">projects</span>, <span className="text-purple-300 font-bold">featured</span>.</div>
        </div>
      ),
    },
  ]);

  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => inputRef.current?.focus(), 100);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCommandList(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs text-purple-200/80">
            <div className="text-purple-400 mb-1">// Available Terminal Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono">
              <div><span className="text-emerald-400 font-semibold">about</span> — Bio & core principles</div>
              <div><span className="text-emerald-400 font-semibold">skills</span> — Full technical matrix</div>
              <div><span className="text-emerald-400 font-semibold">featured</span> — Flagship system benchmark</div>
              <div><span className="text-emerald-400 font-semibold">projects</span> — Production case studies</div>
              <div><span className="text-emerald-400 font-semibold">sandbox</span> — Live Latency & Architecture Lab</div>
              <div><span className="text-emerald-400 font-semibold">certs</span> — Verified Accreditations & Credentials</div>
              <div><span className="text-emerald-400 font-semibold">reviews</span> — Client endorsements</div>
              <div><span className="text-emerald-400 font-semibold">experience</span> — Career progression timeline</div>
              <div><span className="text-emerald-400 font-semibold">services</span> — Engineering capabilities</div>
              <div><span className="text-emerald-400 font-semibold">whatsapp</span> — Direct WhatsApp chat (09030237531)</div>
              <div><span className="text-emerald-400 font-semibold">contact</span> — Transmission coordinates</div>
              <div><span className="text-emerald-400 font-semibold">hire</span> — Direct partnership request</div>
              <div><span className="text-emerald-400 font-semibold">brand</span> — AK Digital Mission & Stack</div>
              <div><span className="text-emerald-400 font-semibold">theme [dark|light]</span> — Switch visual mode</div>
              <div><span className="text-emerald-400 font-semibold">whoami</span> — Current session context</div>
              <div><span className="text-emerald-400 font-semibold">clear</span> — Wipe terminal output</div>
              <div><span className="text-emerald-400 font-semibold">exit</span> — Close CLI drawer</div>
            </div>
          </div>
        );
        break;

      case 'theme':
      case 'theme toggle':
      case 'mode':
      case 'dark':
      case 'light':
      case 'theme dark':
      case 'theme light': {
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        if (cmd === 'dark' || cmd === 'theme dark') newTheme = 'dark';
        if (cmd === 'light' || cmd === 'theme light') newTheme = 'light';
        setTheme(newTheme as 'dark' | 'light');
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-purple-200">
            <div className="text-emerald-400 font-bold">// Theme Switched Successfully:</div>
            <div>Active Visual Mode: <strong className="text-white uppercase">{newTheme}</strong></div>
            <div className="text-[11px] text-purple-300/70">Palettes &amp; contrast adjusted across all application viewports.</div>
          </div>
        );
        break;
      }

      case 'whatsapp':
        window.open(personalInfo.whatsappUrl, '_blank');
        outputNode = (
          <div className="space-y-1.5 text-xs text-emerald-300 font-mono">
            <div className="font-bold">// Launching WhatsApp Direct Session:</div>
            <div>Number: <strong className="text-white">{personalInfo.phone}</strong> (+234 903 023 7531)</div>
            <div>URL: <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer" className="text-emerald-400 underline">{personalInfo.whatsappUrl}</a></div>
          </div>
        );
        break;

      case 'brand':
        outputNode = (
          <div className="space-y-2 text-xs text-purple-200/80">
            <div className="text-purple-300 font-bold">{brandInfo.name} — {brandInfo.tagline}</div>
            <p>{brandInfo.mission}</p>
            <div className="text-purple-400 font-mono">Design Archetype: {brandInfo.style} | Color: {brandInfo.primaryColor}</div>
          </div>
        );
        break;

      case 'about':
      case 'bio':
        outputNode = (
          <div className="space-y-2 text-xs text-purple-200/80">
            <div className="text-purple-300 font-bold">{brandInfo.name} ({personalInfo.name}) — {personalInfo.title}</div>
            <p>{personalInfo.bio[0]}</p>
            <p>{personalInfo.bio[1]}</p>
            <div className="text-purple-400">Location: {personalInfo.location} • Status: {personalInfo.status}</div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs text-purple-200/80">
            <div className="text-purple-400 font-bold">// Web Developer Skills & Developer Tools</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Array.from(new Set(skillsData.map(s => s.category))).map((cat) => (
                <div key={cat} className="p-2 rounded bg-[#090412] border border-purple-500/30">
                  <div className="text-purple-300 font-semibold mb-1">{cat}:</div>
                  <div className="text-slate-300">
                    {skillsData.filter(s => s.category === cat).map(s => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'featured':
        outputNode = (
          <div className="space-y-2 text-xs text-purple-200/80">
            <div className="text-emerald-400 font-bold">⚡ Flagship: NexusStream Cloud</div>
            <div className="text-purple-200">High-throughput event streaming engine in Go & React 19.</div>
            <div className="p-2 rounded bg-[#090412] border border-purple-500/30 font-mono text-[11px] grid grid-cols-3 gap-2">
              <div>Throughput: <span className="text-emerald-400">52,480 req/s</span></div>
              <div>Latency: <span className="text-purple-300">&lt; 11.4 ms</span></div>
              <div>Uptime: <span className="text-white">99.999%</span></div>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-1.5 text-xs text-purple-200/80">
            <div className="text-purple-400 font-bold">// Production Case Studies:</div>
            {allProjects.map((p, i) => (
              <div key={p.id} className="flex items-center justify-between py-1 border-b border-purple-500/20">
                <span className="text-white font-semibold">0{i+1}. {p.title}</span>
                <span className="text-purple-300 font-mono">[{p.category}]</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'sandbox':
      case 'lab':
        onNavigateToSection('architecture-lab');
        outputNode = (
          <div className="space-y-1 text-xs text-purple-200/80">
            <div className="text-emerald-400 font-bold">// Navigating to Live Architecture &amp; Latency Lab:</div>
            <div>Loaded real-time rate limiter, cache storage hierarchy, and multi-region CDN simulators.</div>
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
      case 'credentials':
        outputNode = (
          <div className="space-y-1.5 text-xs text-purple-200/80">
            <div className="text-purple-400 font-bold">// Verified Accreditations &amp; Credentials:</div>
            {certificationsData.map((c) => (
              <div key={c.id} className="p-2 rounded bg-[#090412] border border-purple-500/30">
                <div className="text-white font-bold">{c.title}</div>
                <div className="text-purple-300/70 text-[11px] font-mono">{c.issuer} • ID: {c.credentialId} (Issued {c.issueDate})</div>
                <div className="text-emerald-400 text-[10px] mt-0.5">Status: Cryptographically Verified</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-2 text-xs text-purple-200/80">
            <div className="text-purple-400 font-bold">// Career Trajectory:</div>
            {experienceJourney.map((exp) => (
              <div key={exp.id} className="p-2 rounded bg-[#090412] border border-purple-500/30">
                <div className="text-white font-bold">{exp.role} @ {exp.company}</div>
                <div className="text-purple-300/70 text-[11px] font-mono">{exp.period} • {exp.location}</div>
                <div className="text-slate-300 mt-1">{exp.summary}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'services':
        outputNode = (
          <div className="space-y-1.5 text-xs text-purple-200/80">
            <div className="text-purple-400 font-bold">// Engineering Offerings:</div>
            {servicesData.map((s) => (
              <div key={s.id} className="py-1">
                <span className="text-emerald-400 font-semibold">• {s.title}</span>: <span className="text-purple-200/70">{s.tagline}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
      case 'hire':
        outputNode = (
          <div className="space-y-1.5 text-xs text-purple-200/80">
            <div className="text-purple-400 font-bold">// Direct Contact Protocol:</div>
            <div>WhatsApp: <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer" className="text-emerald-400 underline font-bold">{personalInfo.phone} (+234 903 023 7531)</a></div>
            <div>Email: <a href={`mailto:${personalInfo.email}`} className="text-purple-300 underline">{personalInfo.email}</a></div>
            <div>GitHub: <a href="https://github.com" target="_blank" rel="noreferrer" className="text-purple-300 underline">github.com</a></div>
            <div>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-purple-300 underline">linkedin.com</a></div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="text-xs text-purple-200/80 font-mono">
            visitor@ak-digital-guest-session [Permissions: Read-Only Evaluator]
          </div>
        );
        break;

      case 'date':
        outputNode = (
          <div className="text-xs text-purple-200 font-mono">
            {new Date().toUTCString()}
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        outputNode = (
          <div className="text-xs text-rose-400 font-mono">
            command not recognized: "{cmd}". Type <span className="text-emerald-400 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for command list.
          </div>
        );
        break;
    }

    setHistory(prev => [...prev, { command: rawCmd, output: outputNode }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      if (commandList.length > 0) {
        const nextIdx = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandList[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandList.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandList[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#040208]/90 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label="AK Digital CLI Terminal Emulator"
      >
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#090412] border border-purple-500/40 rounded-2xl shadow-2xl shadow-purple-950/80 overflow-hidden z-10 flex flex-col h-[520px] font-mono"
        >
          {/* Terminal Titlebar */}
          <div className="p-3.5 bg-[#120826] border-b border-purple-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full bg-rose-500 cursor-pointer hover:opacity-80" 
                onClick={onClose}
                title="Close terminal"
                role="button"
                aria-label="Close terminal"
              />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs text-purple-300 font-mono ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                ak-digital-shell — zsh 5.9
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-1 rounded bg-purple-950/50 text-purple-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                aria-label="Close terminal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Output Log Area */}
          <div 
            className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-mono"
            role="log"
            aria-live="polite"
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-purple-300/70">
                  <span className="text-purple-400">ak@digital:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-purple-500/30">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Bar */}
          <div className="p-3 bg-[#120826]/90 border-t border-purple-500/30 flex items-center gap-2">
            <label htmlFor="terminal-cli-input" className="text-purple-400 text-xs font-bold shrink-0">
              ak@digital:~$
            </label>
            <input
              id="terminal-cli-input"
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'skills', 'projects', 'brand'..."
              className="flex-1 bg-transparent text-xs text-emerald-300 font-mono focus:outline-none placeholder-purple-400/40"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="px-2.5 py-1 text-[11px] bg-purple-600 hover:bg-purple-500 text-white rounded font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-label="Execute terminal command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
