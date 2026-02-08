"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { Figma } from "lucide-react";
import Reveal from "./Reveal";

type Project = {
  title: string;
  category: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  video?: string;
};

const projects: Project[] = [
  {
    title: "EZ Logistics",
    category: "B2B UX Case Study",
    date: "Feb 2026",
    description:
      "Optimized delivery routes for EZ Logistics, reducing driver wait times by 20% through a unified geospatial interface and real-time performance analytics.",
    tags: ["UX Case Study", "B2B", "Data Visualization"],
    image: "/ezlogistics.png",
    link: "https://www.behance.net/gallery/243388297/EZ-Logistics-Case-Study",
  },
  {
    title: "Signature Grooming",
    category: "Brand Identity & UI/UX",
    date: "Jan 2026",
    description:
      "Elevated a heritage barber shop into a premium digital brand, increasing booking conversion rates by streamlining the appointment flow for high-end clientele.",
    tags: ["Brand Identity", "UI/UX", "Design System"],
    image: "/signaturegrooming.png",
    link: "https://www.behance.net/gallery/242405359/Signature-Grooming-Luxury-Brand-Identity-UIUX",
  },
  {
    title: "Utsav Wale",
    category: "Brand Identity & UX UI",
    date: "Dec 2025",
    description:
      "Solved the problem of lost event photos with an AI-driven discovery platform. Designed high-traffic standees and a mobile interface that reduced photo retrieval time to seconds.",
    tags: ["UI/UX", "Brand Identity", "AI"],
    image: "/utsavwale.png",
    link: "https://www.behance.net/gallery/240812899/Utsav-Wale-AI-Event-Photo-Discovery-Brand-Identity#",
  },
  {
    title: "KiranaMitra",
    category: "UX Case Study",
    date: "Dec 2025",
    description:
      "Lowered the barrier to digital adoption for small business owners. Created a 'one-thumb' inventory management interface tailored for high-rush retail environments.",
    tags: ["UX Case Study", "Figma", "Accessibility"],
    image: "/kiranamitra_1.png",
    link: "https://www.behance.net/gallery/239959793/KiranaMitra-B2B-Inventory-App-Concept",
  },
  {
    title: "BowDigi",
    category: "Freelance UX/UI",
    date: "Jun 2024",
    description:
      "translated client vision into a responsive marketing site that established their digital presence. Managed the full lifecycle from wireframing to final UI handoff.",
    tags: ["Responsive Web", "Client Collaboration"],
    image: "/bowdigi.png",
    link: "https://www.figma.com/design/2Ng2OS9TLYmpsKuDmWG7KL/Freelance---BowDigi?node-id=17-2421&t=YVDNDwKEfDpq0Lsh-1",
  },
  {
    title: "Con10T Labs",
    category: "UX/UI + Frontend",
    date: "Dec 2022 – Apr 2024",
    description:
      "Streamlined internal workflows by redesigning the company website and support processes, resulting in improved team efficiency and a cohesive brand narrative.",
    tags: ["Design Systems", "Frontend", "Process Design"],
    image: "/con10tlabs.png",
    link: "https://con10tlabs.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-20">
      <Reveal>
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">UX/UI & Brand Design</h2>
          <p className="mt-4 muted max-w-2xl text-base md:text-lg">
            Solving real-world problems through design and code.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group relative flex flex-col md:flex-row gap-8 md:gap-12 items-center bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Project Image with restored 3D feel */}
              <div className="w-full md:w-1/2 aspect-[16/10] relative perspective-1000">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative group-hover:scale-[1.02] transition-transform duration-500"
                >
                  <div
                    className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-black/5 dark:border-white/5"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: 'rotateY(2deg)',
                      transition: 'transform 0.5s ease-out'
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>

                  {/* Floating Icon Overlay */}
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 z-20 border border-black/5 dark:border-white/5">
                    {project.tags.some(t => t.toLowerCase().includes("react") || t.toLowerCase().includes("frontend")) ? (
                      <FaReact className="text-3xl text-blue-500 animate-spin-slow" />
                    ) : (
                      <Figma className="text-3xl text-purple-500" />
                    )}
                  </div>
                </a>
              </div>

              {/* Project Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  <span>{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <span>{project.date}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-black dark:text-white">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {project.title}
                  </a>
                </h3>

                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 bg-transparent px-6 py-2.5 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-50 hover:scale-105 transform-gpu dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20"
                  >
                    View Case Study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
