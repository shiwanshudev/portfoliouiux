"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

type Project = {
  title: string;
  slug: string;
  category: string;
  filterCategory: string; // Used for the tab filtering
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  isVideo?: boolean;
  videoUrl?: string;
  isFeatured?: boolean;
};

const projects: Project[] = [
  {
    title: "Vaani — AI Language Coach",
    slug: "vaani",
    category: "ui/ux · landing page",
    filterCategory: "UI/UX",
    description:
      "Landing page for an AI language app helping users speak up in moments that matter.",
    tags: ["Figma", "Claude", "Adobe Firefly"],
    image: "/vaani.png",
    link: "https://www.behance.net/gallery/252822549/Vaani-Landing-Page-for-an-AI-Language-Coach",
  },
  {
    title: "Basecamp — homepage redesign",
    slug: "basecamp-redesign",
    category: "ui/ux · redesign challenge",
    filterCategory: "UI/UX",
    description:
      "Full UX audit, competitive teardown, and redesigned homepage system at 1920×1080.",
    tags: ["UX Audit", "Figma", "Claude", "Photoshop"],
    image: "/basecamp.png",
    link: "https://www.behance.net/gallery/252003423/Basecamp-Homepage-Redesign-UX-Visual-Design",
  },
  {
    title: "Headhunter Hairstyling",
    slug: "headhunter",
    category: "ui/ux · audit & redesign",
    filterCategory: "UI/UX",
    description:
      "Homepage audit and rebuild for a heritage salon brand, focused on booking-flow clarity.",
    tags: ["UX Audit", "UI Design", "Figma"],
    image: "/headhunter.png",
    link: "https://www.behance.net/gallery/251137919/Headhunter-Hairstyling-Homepage-Redesign",
  },
  {
    title: "Pixlor Wallet",
    slug: "pixlor-wallet",
    category: "ui/ux · fintech app",
    filterCategory: "UI/UX",
    description:
      "Dark-mode crypto tracker designed for at-a-glance portfolio scanning.",
    tags: ["UI/UX", "Fintech", "App Design"],
    image: "/pixlorwallet.png",
    link: "https://www.behance.net/gallery/245611659/Pixlor-Wallet-Crypto-Tracker-App-Design",
  },
  {
    title: "Excelfore — social media post",
    slug: "excelfore-social",
    category: "social media · carousel",
    filterCategory: "Social Media",
    description:
      "Automotive-tech carousel campaign designed to represent an OTA feature update.",
    tags: ["Graphics Design", "Brand Identity"],
    image: "/excelfore.png",
    link: "https://www.behance.net/gallery/244580609/Excelfore-Social-Media-Post",
  },
  {
    title: "Design showreel",
    slug: "design-reel",
    category: "motion graphics · reel",
    filterCategory: "Motion Graphics",
    description:
      "A short reel walking through process, craft, and the range of work behind this site.",
    tags: ["Motion Graphics", "Video"],
    isVideo: true,
    videoUrl: "https://player.vimeo.com/video/1186103012?badge=0&autopause=0&player_id=0&app_id=58479",
  },
];

const categories = ["All Work", "UI/UX", "Social Media", "Motion Graphics"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All Work" || project.filterCategory === activeCategory
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-24">
      <Reveal>
        <div className="mb-8 md:mb-10">
          <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-gray-500 mb-3">
            Portfolio
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 text-black dark:text-white">Projects, sorted by what they show</h2>
          
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-gray-100 dark:bg-[#1a1b1e] text-gray-600 dark:text-gray-400 border border-transparent dark:border-white/5 hover:bg-gray-200 dark:hover:bg-[#25262b]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-white dark:bg-[#1a1b1e] border border-black/10 dark:border-white/5 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Media Container */}
                <div className="w-full aspect-video bg-gray-100 dark:bg-[#141517] relative overflow-hidden border-b border-black/5 dark:border-white/5">
                  {project.isVideo && project.videoUrl ? (
                    <iframe
                      src={project.videoUrl}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      title={project.title}
                    ></iframe>
                  ) : project.image ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative group-hover:scale-[1.05] transition-transform duration-500">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    </a>
                  ) : null}
                </div>

                {/* Content */}
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <div className="mb-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-emerald-400">
                    {project.category}
                  </div>

                  <h3 className="text-base md:text-lg font-bold tracking-tight mb-2 text-black dark:text-white">
                    {project.link && !project.isVideo ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-emerald-400 transition-colors">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 px-2 py-1 text-[10px] font-medium text-gray-500 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Reveal>
    </section>
  );
}
