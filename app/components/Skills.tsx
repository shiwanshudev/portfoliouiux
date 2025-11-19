"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = {
  design: [
    "Figma",
    "Wireframing",
    "User Research",
    "Prototyping",
    "Usability Testing",
    "Design Systems",
    "Interaction Design",
    "Accessibility (a11y)",
  ],
  development: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Git & GitHub",
    "Node.js",
    "HTML5 & CSS3",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 md:px-6">
      <Reveal>
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Skills & Expertise</h2>
          <p className="mt-2 muted max-w-2xl text-sm md:text-base">
            A blend of creative design thinking and robust technical engineering.
          </p>
        </div>

        <div className="grid gap-6 md:gap-12 md:grid-cols-2">
          {/* UX/UI Skills */}
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 md:p-8">
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              UX/UI Design
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.design.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="cursor-default rounded-full border soft-border bg-black/5 dark:bg-white/5 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 md:p-8">
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Technical Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.development.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="cursor-default rounded-full border soft-border bg-black/5 dark:bg-white/5 px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/20"
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
