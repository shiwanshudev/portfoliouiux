"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-12 md:pt-40 md:pb-24">
      {/* Dynamic Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
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
                Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Experiences</span>,<br />
                Building <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 pb-4 -mb-4">Reality</span>.
              </h1>

              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                I&apos;m Shiwanshu, a multidisciplinary designer & developer. I craft pixel-perfect interfaces and robust frontend architectures that scale.
              </p>

              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-black px-6 md:px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 dark:bg-white dark:text-black text-center"
                >
                  View Work
                </a>
                <a
                  href="mailto:shiwanshudev@outlook.com"
                  className="rounded-full border border-gray-200 bg-white px-6 md:px-8 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-center"
                >
                  Contact Me
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
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="relative z-10 w-2/3 sm:w-3/4 md:w-full max-w-md"
            >
               <div className="aspect-[4/5] relative overflow-hidden rounded-3xl border-4 border-white dark:border-gray-800 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                  <Image
                    src="/myphoto.png"
                    alt="Shiwanshu Shubham"
                    fill
                    className="object-cover"
                    priority
                  />
               </div>
               
               {/* Floating Icons - Hidden on mobile, visible on md+ */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="hidden md:block absolute -top-6 -right-6 z-20 rounded-2xl bg-white p-4 shadow-xl border border-black/5 dark:bg-zinc-800 dark:border-white/10"
               >
                  <FaFigma className="text-4xl text-[#F24E1E]" />
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="hidden md:block absolute -bottom-6 -left-6 z-20 rounded-2xl bg-white p-4 shadow-xl border border-black/5 dark:bg-zinc-800 dark:border-white/10"
               >
                  <FaReact className="text-4xl text-[#61DAFB]" />
               </motion.div>

               <motion.div 
                 animate={{ x: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                 className="hidden md:block absolute top-1/2 -right-10 z-20 rounded-2xl bg-white p-3 shadow-xl border border-black/5 dark:bg-zinc-800 dark:border-white/10"
               >
                  <SiNextdotjs className="text-3xl text-black dark:text-white" />
               </motion.div>
            </motion.div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 opacity-50 blur-3xl dark:from-blue-900/20 dark:to-purple-900/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
