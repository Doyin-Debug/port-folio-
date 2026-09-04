import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles, Send } from 'lucide-react';
import { faqData, personalInfo } from '../data/portfolioData';
import { FAQItem } from '../types/portfolio';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Engagement', 'Technical', 'Delivery & IP', 'Pricing'];

  const filteredFaqs = faqData.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative bg-[#090412]/80 border-t border-purple-500/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold mb-3 shadow-sm shadow-purple-950/50">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>06 // FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Engagement & Technical FAQ
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
            Everything you need to know about working with AK Digital, our delivery methodology, code ownership, and communication standards.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400'
                  : 'bg-[#120924] text-purple-300/70 hover:text-white hover:bg-[#1a0d33] border border-purple-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#120924] border-purple-500/50 shadow-xl shadow-purple-950/40' 
                    : 'bg-[#0e071c]/70 border-purple-500/20 hover:border-purple-500/40'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-display">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-purple-950/60 text-purple-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white bg-purple-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-purple-200/80 leading-relaxed border-t border-purple-500/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Question to WhatsApp CTA */}
        <div className="mt-12 p-6 rounded-3xl bg-[#120924]/90 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white font-display">
              Have a specific technical question not listed here?
            </h4>
            <p className="text-xs text-purple-200/70 mt-1">
              Ask Kelly Kelvin directly on WhatsApp for an immediate answer or consultation.
            </p>
          </div>

          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold shadow-lg shadow-emerald-950/50 shrink-0 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp (09030237531)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
