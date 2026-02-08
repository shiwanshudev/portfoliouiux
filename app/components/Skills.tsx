"use client";

import { motion } from "framer-motion";
import { PenTool, Code2, Palette } from "lucide-react";
import Reveal from "./Reveal";

const skillCategories = [
  {
    id: "product",
    title: "Product & UX",
    icon: PenTool,
    description: "Research-driven design converting complex problems into intuitive flows.",
    skills: [
      "Figma",
      "Adobe CC",
      "Prototyping",
      "User Research",
      "Wireframing",
      "Design Systems",
    ],
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-900/10",
    border: "group-hover:border-purple-200 dark:group-hover:border-purple-800",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: "development",
    title: "Development",
    icon: Code2,
    description: "Building scalable, accessible, and performant frontend applications.",
    skills: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Git",
      "Next.js",
      "TypeScript",
    ],
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/10",
    border: "group-hover:border-blue-200 dark:group-hover:border-blue-800",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: "visual",
    title: "Visuals & Motion",
    icon: Palette,
    description: "Crafting engaging visual narratives and micro-interactions.",
    skills: [
      "Illustration Systems",
      "Character Design",
      "Visual Storytelling",
      "Motion Design",
      "After Effects",
    ],
    color: "text-pink-600 dark:text-pink-400",
    bg: "bg-pink-50 dark:bg-pink-900/10",
    border: "group-hover:border-pink-200 dark:group-hover:border-pink-800",
    iconBg: "bg-pink-100 dark:bg-pink-900/30",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-8">
      <Reveal>
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Expertise</h2>
          <p className="mt-4 muted max-w-2xl text-base md:text-lg">
            A multidisciplinary approach bridging the gap between design and engineering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className={`group flex flex-col h-full rounded-2xl border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-900 p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${category.border}`}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className={`p-3 rounded-xl ${category.iconBg} ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className={`text-xl font-bold ${category.color}`}>
                  {category.title}
                </h3>
              </div>

              <p className="mb-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {category.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.05) }}
                    className={`cursor-default rounded-full px-3 py-1 text-xs font-medium transition-colors bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700 hover:text-black dark:hover:text-white`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
