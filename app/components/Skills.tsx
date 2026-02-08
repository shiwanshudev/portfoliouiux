"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = {
  design: [
    "Figma",
    "Adobe CC",
    "Prototyping",
    "User Research",
    "Wireframing",
    "Design Systems",
  ],
  development: [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Git",
    "Next.js",
    "TypeScript",
  ],
  visual: [
    "Illustration Systems",
    "Character Design",
    "Visual Storytelling",
    "Motion Design",
    "After Effects",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 md:px-6 scroll-mt-24">
      <Reveal>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Expertise</h2>
          <p className="mt-4 muted max-w-2xl text-base md:text-lg">
            Categorized to show depth across disciplines.
          </p>
        </div>


        <div className="grid gap-6 md:grid-cols-3">
          {/* User Experience & Product Design */}
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-purple-600 dark:text-purple-400">
              <span className="w-2 h-2 rounded-full bg-current"></span>
              Product & UX
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.design.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="cursor-default rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-black/10 dark:hover:bg-white/10"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Development Skills */}
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <span className="w-2 h-2 rounded-full bg-current"></span>
              Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.development.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="cursor-default rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-black/10 dark:hover:bg-white/10"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Visuals & Motion */}
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <span className="w-2 h-2 rounded-full bg-current"></span>
              Visuals & Motion
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.visual.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="cursor-default rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-black/10 dark:hover:bg-white/10"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
