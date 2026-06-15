"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { FaFigma, FaReact } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-8">
      <Reveal>
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">

          {/* Text Content */}
          <div className="order-2 md:order-1 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Elevating UI/UX with <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                  Artificial Intelligence
                </span>
                {/* Animated stroke underneath */}
                <svg className="absolute w-full h-4 -bottom-1 left-0 z-0" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path 
                    d="M0,10 Q50,20 100,10" 
                    stroke="url(#ai-gradient)" 
                    strokeWidth="4" 
                    fill="none" 
                    pathLength="100"
                    strokeDasharray="100"
                    className="animate-[draw_3s_ease-out_forwards_infinite]"
                  />
                  <defs>
                    <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I integrate cutting-edge AI tools directly into my design and development workflows to achieve unprecedented speed and precision.
              </p>
              <p>
                My toolkit includes <strong>Claude, Gemini Pro, Antigravity, and Figma Make</strong>. Whether it&apos;s rapid ideation, generating complex layouts, or asking which tools are best for specific UI/UX challenges, I leverage AI to build scalable, high-fidelity products faster than ever before.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                  <span className="text-xl">✨</span>
                  <span>AI Ideation</span>
                </div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  <span className="text-xl">🤖</span>
                  <span>AI Driven Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual "AI" Demo */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-zinc-900 overflow-hidden shadow-2xl relative p-[2px]">
              {/* Animated Gradient Stroke Border around the card */}
              <div className="absolute inset-0 z-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(147,51,234,1)_360deg)] animate-spin-slow" />
              <div className="absolute inset-0 z-0 bg-[conic-gradient(from_180deg,transparent_0_340deg,rgba(37,99,235,1)_360deg)] animate-spin-slow" />
              
              <div className="relative z-10 w-full h-full bg-white dark:bg-zinc-900 rounded-xl overflow-hidden">
                {/* Fake Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5 dark:border-white/5 bg-gray-50 dark:bg-zinc-800/80">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 text-xs font-mono text-gray-500">
                    AI_Assistant
                  </div>
                </div>

                {/* AI Chat View */}
                <div className="flex flex-col h-[280px] bg-white dark:bg-zinc-900 p-4 gap-4 overflow-hidden relative">
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs flex-shrink-0">
                      👤
                    </div>
                    <div className="bg-gray-100 dark:bg-zinc-800 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300">
                      Generate a modern button component using Tailwind CSS, focusing on premium UI/UX aesthetics.
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start mt-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-xs flex-shrink-0">
                      ✨
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30 rounded-2xl rounded-tr-sm px-4 py-3 w-full">
                      <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-purple-600 dark:text-purple-400">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Generating UI...
                      </div>
                      
                      {/* Generated UI Mockup */}
                      <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-black/5 dark:border-white/5 flex items-center justify-center shadow-inner">
                        <div className="relative group cursor-pointer">
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                          <button className="relative px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold transform group-hover:-translate-y-0.5 transition duration-200">
                            Explore Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
