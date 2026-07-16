"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-8 md:pt-32 md:pb-12 scroll-mt-8">
      {/* Dynamic Background with Grid (kept subtle) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-50 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="mx-auto max-w-4xl px-4 md:px-6 flex flex-col items-center text-center">
        <Reveal>
          {/* Status Badge - Restored to Design System Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1.5 text-xs font-medium text-green-600 dark:text-green-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </div>

          {/* Heading - Reduced size */}
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-display font-bold tracking-tight leading-[1.2] text-black dark:text-white max-w-3xl">
            I turn confusing product flows into interfaces people{" "}
            <span className="text-purple-600 dark:text-purple-400">
              don&apos;t
            </span>{" "}
            have to think about.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 md:mt-6 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mx-auto">
            A versatile product designer crafting intuitive digital experiences. Two years shipping end-to-end — from UX audits and scalable systems to high-fidelity screens that hold up in production.
          </p>

          {/* CTA Buttons - Restored to Design System Rounded Style */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full border border-transparent bg-purple-600 px-6 md:px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transform-gpu text-center w-full sm:w-auto"
            >
              View Selected Work
            </a>
            <a
              href="/resume.pdf?v=2026-06"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-transparent px-6 md:px-8 py-3 text-sm font-semibold text-gray-600 dark:text-gray-400 transition-all duration-300 hover:border-gray-400 hover:text-gray-900 dark:hover:border-gray-500 dark:hover:text-white hover:scale-105 transform-gpu text-center w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download Resume
            </a>
          </div>

          {/* Trust Badge / Stats */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-black/5 dark:border-white/5 w-full flex flex-wrap justify-center gap-12 md:gap-24 text-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold font-display text-black dark:text-white">2+</span>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-2">Years Exp.</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold font-display text-black dark:text-white">10+</span>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-2">Products Designed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold font-display text-black dark:text-white">100%</span>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-2">Commitment</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
