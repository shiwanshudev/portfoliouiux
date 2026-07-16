"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-24">
      <Reveal>
        <div className="mb-12 md:mb-16">
          <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-gray-500 mb-3">
            Skills
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black dark:text-white">
            Toolkit
          </h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Main UI/UX Card - Highlighted & Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 flex flex-col h-full rounded-2xl border border-black/10 dark:border-white/5 bg-gray-50/50 dark:bg-[#111215] p-6 md:p-10 transition-colors hover:bg-gray-100 dark:hover:bg-[#16171a]"
          >
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-8 text-purple-600 dark:text-purple-400">
              UI/UX & PRODUCT DESIGN
            </h3>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {[
                "user research",
                "wireframing",
                "design systems",
                "prototyping",
                "information architecture",
                "interaction design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full px-4 md:px-5 py-2 text-xs md:text-sm font-mono tracking-wide bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-400 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Design Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col h-full rounded-2xl border border-black/10 dark:border-white/5 bg-gray-50/50 dark:bg-[#111215] p-6 md:p-8 transition-colors hover:bg-gray-100 dark:hover:bg-[#16171a]"
          >
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-8 text-emerald-600 dark:text-emerald-400">
              DESIGN TOOLS
            </h3>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {[
                "figma",
                "adobe photoshop",
                "adobe after effects",
                "figjam",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full px-4 py-2 text-[11px] font-mono tracking-wide bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-400 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* AI Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col h-full rounded-2xl border border-black/10 dark:border-white/5 bg-gray-50/50 dark:bg-[#111215] p-6 md:p-8 transition-colors hover:bg-gray-100 dark:hover:bg-[#16171a]"
          >
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-8 text-blue-600 dark:text-blue-400">
              AI & GENERATION TOOLS
            </h3>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {[
                "claude",
                "adobe firefly",
                "gemini pro",
                "figma make",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full px-4 py-2 text-[11px] font-mono tracking-wide bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-400 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
