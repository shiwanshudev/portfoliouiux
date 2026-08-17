"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

type Project = {
  title: string;
  slug: string;
  category: string;
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
    description:
      "Dark-mode crypto tracker designed for at-a-glance portfolio scanning.",
    tags: ["UI/UX", "Fintech", "App Design"],
    image: "/pixlorwallet.png",
    link: "https://www.behance.net/gallery/245611659/Pixlor-Wallet-Crypto-Tracker-App-Design",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-24"
    >
      <Reveal>
        <div className="mb-8 md:mb-10">
          <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-gray-500 mb-3">
            Portfolio
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 text-black dark:text-white">
            Selected UI/UX Work
          </h2>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                layout="position"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="group flex flex-col bg-card-bg border border-card-border hover:border-card-border-hover rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Image Wrapper */}
                <div className="w-full aspect-video bg-foreground/5 relative overflow-hidden border-b border-card-border">
                  {project.isVideo && project.videoUrl ? (
                    <iframe
                      src={project.videoUrl}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      title={project.title}
                    ></iframe>
                  ) : project.image ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full relative group-hover:scale-[1.05] transition-transform duration-500"
                    >
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
                  <div className="mb-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary-text">
                    {project.category}
                  </div>
                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold tracking-tight mb-2 text-foreground">
                    {project.link && !project.isVideo ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  {/* Description */}
                  <p className="text-sm leading-relaxed text-foreground/65 mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.title}-${tag}`}
                        className="rounded bg-tag-bg border border-transparent px-2 py-1 text-[10px] font-medium text-tag-text"
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
