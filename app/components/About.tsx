"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { BrainCircuit, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-24">
      <Reveal>
        <div className="grid gap-8 md:gap-16 md:grid-cols-2 items-center">

          {/* Text Content */}
          <div className="order-2 md:order-1 relative z-10">
            <div className="mb-12 md:mb-16">
              <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-gray-500 mb-3">
                Workflow
              </h3>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 text-black dark:text-white">
                Elevating UI/UX with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                  Artificial Intelligence
                </span>
              </h2>
            </div>
            <div className="space-y-6 text-[15px] md:text-base text-gray-500 dark:text-gray-400 font-light leading-[1.8] md:leading-[2]">
              <p>
                I integrate cutting-edge AI tools directly into my design and development workflows to achieve unprecedented speed and precision.
              </p>
              <p>
                My toolkit includes <strong className="font-medium text-gray-900 dark:text-gray-100">Claude, Gemini Pro, Antigravity, and Figma Make</strong>. Whether it&apos;s rapid ideation, generating complex layouts, or asking which tools are best for specific UI/UX challenges, I leverage AI to build scalable, high-fidelity products faster than ever before.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                  <BrainCircuit size={18} strokeWidth={2.5} />
                  <span>AI Ideation</span>
                </div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  <Code2 size={18} strokeWidth={2.5} />
                  <span>AI Driven Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual "AI" Demo */}
          <div className="order-1 md:order-2 relative">
            {/* Soft background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl rounded-full opacity-50" />
            
            <div className="relative rounded-2xl border border-black/10 dark:border-white/5 bg-white dark:bg-[#111215] overflow-hidden shadow-2xl flex flex-col">
              {/* Fake Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-[#16171a]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="ml-4 text-[10px] font-mono tracking-widest uppercase text-gray-400">
                  AI_Workflow
                </div>
              </div>

              {/* AI Chat View */}
              <div className="flex flex-col h-[280px] p-5 gap-5 overflow-hidden">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex gap-3 items-start"
                >
                  <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center flex-shrink-0 border border-black/5 dark:border-white/5">
                    <span className="text-xs">U</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl rounded-tl-none px-4 py-3 text-[13px] text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                    Generate a modern button component using Tailwind CSS, focusing on premium UI/UX aesthetics.
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex gap-3 items-start"
                >
                  <div className="w-7 h-7 rounded-full bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-100 dark:border-purple-500/20">
                    <BrainCircuit size={14} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="bg-purple-50/50 dark:bg-purple-500/5 border border-purple-100/50 dark:border-purple-500/10 rounded-2xl rounded-tl-none px-4 py-4 w-full">
                    <div className="flex items-center gap-2 mb-4 text-[11px] font-mono tracking-widest uppercase text-purple-600 dark:text-purple-400">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
                      </span>
                      Generating UI
                    </div>
                    
                    {/* Generated UI Mockup */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="p-6 bg-white dark:bg-[#1a1b1e] rounded-xl border border-black/5 dark:border-white/5 flex items-center justify-center shadow-sm"
                    >
                      <div className="relative group cursor-pointer">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <button className="relative px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-semibold tracking-wide transform transition duration-200">
                          Explore Now
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
