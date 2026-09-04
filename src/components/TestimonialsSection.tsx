import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Sparkles, CheckCircle, MessageSquareQuote } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-[#07040d] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold mb-3 shadow-sm shadow-purple-950/50">
            <MessageSquareQuote className="w-3.5 h-3.5 text-purple-400" />
            <span>05 // INDUSTRY TESTIMONIALS & TRUST SIGNALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Endorsed by Engineering Leaders & Founders
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
            What technical co-founders, VPs of engineering, and product leaders say about partnering with AK Digital on high-throughput distributed systems and modern web applications.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#120924]/80 border border-purple-500/30 hover:border-purple-400/60 shadow-xl shadow-purple-950/40 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Top Rating & Focus Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/30 rounded-md">
                    {item.projectFocus}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {item.author}
                  </h4>
                  <p className="text-xs text-purple-300/70">
                    {item.role} • <span className="text-purple-300 font-semibold">{item.company}</span>
                  </p>
                </div>

                <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-colors">
                  <Quote className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
