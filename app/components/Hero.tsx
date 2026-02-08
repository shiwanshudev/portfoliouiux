"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-12 md:pt-40 md:pb-24">
      {/* Dynamic Background with Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for new projects
              </div>

              <h1 className="mt-4 md:mt-6 text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.2]">
                UI/UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Designer.</span>
              </h1>

              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                I design scalable systems and turn complex problems into intuitive, high-fidelity interfaces.
              </p>

              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="#contact"
                  className="rounded-full border-2 border-transparent bg-blue-600 px-6 md:px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform-gpu text-center"
                >
                  Hire Me
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-transparent px-6 md:px-8 py-3 text-sm font-semibold text-gray-600 dark:text-gray-400 transition-all duration-300 hover:border-gray-400 hover:text-gray-900 dark:hover:border-gray-500 dark:hover:text-white hover:scale-105 transform-gpu text-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                  Download Resume
                </a>
              </div>

              <div className="mt-8 md:mt-12 flex items-center gap-4 md:gap-6 text-gray-400 grayscale transition-all hover:grayscale-0">
                <FaFigma className="text-xl md:text-2xl hover:text-[#F24E1E] transition-colors" title="Figma" />
                <FaReact className="text-xl md:text-2xl hover:text-[#61DAFB] transition-colors" title="React" />
                <SiNextdotjs className="text-xl md:text-2xl hover:text-black dark:hover:text-white transition-colors" title="Next.js" />
                <SiTailwindcss className="text-xl md:text-2xl hover:text-[#06B6D4] transition-colors" title="Tailwind CSS" />
                <SiTypescript className="text-xl md:text-2xl hover:text-[#3178C6] transition-colors" title="TypeScript" />
              </div>
            </Reveal>
          </div>

          <div className="order-1 md:order-2 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="relative z-10 w-2/3 sm:w-3/4 md:w-full max-w-sm"
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-3xl border-[8px] border-white dark:border-white/10 shadow-2xl bg-white transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out">
                <Image
                  src="/hero.jpg"
                  alt="Shiwanshu Shubham"
                  fill
                  className="object-cover"
                  priority
                />
              </div>



              {/* Floating Badge - React */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-6 -left-6 md:-left-8 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-xl border border-black/5 dark:border-white/5 animate-float-delayed"
              >
                <FaReact className="text-3xl text-[#61DAFB] animate-spin-slow" />
              </motion.div>
            </motion.div>

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 opacity-50 blur-3xl dark:from-blue-900/20 dark:to-purple-900/20" />

            {/* Overlapping Glassmorphism Cards (Repositioned to frame the subject) */}





            {/* Card 3: UX/UI Flow - Top/Right (Wireframe Style) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              className="absolute -top-12 -right-12 md:-right-20 w-48 h-auto bg-white/5 backdrop-blur-sm border border-white/30 rounded-2xl p-3 shadow-xl z-20 hidden md:block"
            >
              <div className="flex flex-col gap-2 opacity-80">
                {/* Mini Wireframe Header */}
                <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-1">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/60"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400/60"></div>
                  </div>
                  <div className="h-1 w-12 bg-white/20 rounded-full"></div>
                </div>

                {/* Wireframe Flow */}
                <div className="space-y-2">
                  {/* Screen 1 */}
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 rounded bg-blue-500/20 border border-blue-400/30 flex-shrink-0"></div>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="h-1.5 w-16 bg-white/30 rounded-full"></div>
                      <div className="h-1 w-10 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                  {/* Connection Line */}
                  <div className="ml-4 h-3 w-0.5 bg-gradient-to-b from-blue-400/40 to-purple-400/40"></div>
                  {/* Screen 2 */}
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 rounded bg-purple-500/20 border border-purple-400/30 flex-shrink-0"></div>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="h-1.5 w-14 bg-white/30 rounded-full"></div>
                      <div className="flex gap-1 mt-1">
                        <div className="h-3 w-6 bg-green-400/20 rounded border border-green-400/20"></div>
                        <div className="h-3 w-6 bg-red-400/20 rounded border border-red-400/20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge - Figma (Moved out to ensure top z-index) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 right-8 md:top-8 md:right-16 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-xl border border-black/5 dark:border-white/5 animate-float z-50"
            >
              <FaFigma className="text-3xl text-[#F24E1E]" />
            </motion.div>

            {/* Background Blob - Enhanced Visibility */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-200/40 to-purple-200/40 opacity-70 blur-3xl dark:from-blue-900/30 dark:to-purple-900/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
