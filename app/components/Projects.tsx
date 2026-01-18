"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    title: "Signature Grooming | Luxury Brand Identity & UI/UX",
    category: "Brand Identity & UI/UX",
    date: "Jan 2026",
    description:
      "Transforming a heritage barber shop into a luxurious digital experience. From competitive analysis to high-fidelity prototyping, every detail was crafted to resonate with a sophisticated clientele.",
    tags: ["Brand Identity", "UI/UX", "Prototyping", "Design System"],
    image: "/signaturegrooming.png",
    link: "https://www.behance.net/gallery/242405359/Signature-Grooming-Luxury-Brand-Identity-UIUX",
  },
  {
    title: "Utsav Wale - AI Event Photo Discovery",
    category: "Brand Identity & UX UI",
    date: "Dec 2025",
    description:
      "Utsav Wale is an AI-driven platform designed to simplify photo discovery at large events. The project features a strategic brand identity, high-traffic event standees, and a mobile interface focused on instant, magical discovery.",
    tags: ["UI/UX", "Brand Identity", "Figma", "AI"],
    image: "/utsavwale.png",
    link: "https://www.behance.net/gallery/240812899/Utsav-Wale-AI-Event-Photo-Discovery-Brand-Identity#",
  },
  {
    title: "KiranaMitra - B2B Inventory App",
    category: "UX Case Study",
    date: "Dec 2025",
    description:
      "KiranaMitra is a concept app designed to lower the barrier of entry for small business owners in India. The interface prioritizes high accessibility, local context, and \"one-thumb\" interactions to manage inventory during rush hours.",
    tags: ["UX Case Study", "Figma", "UI/UX"],
    image: "/kiranamitra_1.png",
    link: "https://www.behance.net/gallery/239959793/KiranaMitra-B2B-Inventory-App-Concept",
  },

  {
    title: "BowDigi — Responsive Marketing Website",
    category: "Freelance UX/UI",
    date: "Jun 2024",
    description:
      "Led the design of a responsive marketing website, collaborating directly with the client to translate their vision into an intuitive UI. My process involved iterative wireframing, prototyping, and feedback sessions.",
    tags: ["Responsive Web", "Client Collaboration", "Usability"],
    image: "/bowdigi.png",
    link: "https://www.figma.com/design/2Ng2OS9TLYmpsKuDmWG7KL/Freelance---BowDigi?node-id=17-2421&t=YVDNDwKEfDpq0Lsh-1",
  },
  {
    title: "Con10T Labs — Website Redesign & Frontend",
    category: "UX/UI + Frontend",
    date: "Dec 2022 – Apr 2024",
    description:
      "Led the end-to-end (E2E) design and development of the new company website. Redesigned internal workflows by analyzing and mapping customer support and content management processes.",
    tags: ["Design Systems", "Frontend", "Process Design"],
    image: "/con10tlabs.png",
    link: "https://con10tlabs.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 md:px-6">
      <Reveal>
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Projects</h2>
          <p className="mt-2 muted max-w-2xl text-sm md:text-base">
            A selection of my recent work in UX/UI design and frontend development.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid items-start gap-6 md:gap-8 overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4 md:p-6 lg:p-8 transition-all hover:shadow-lg md:grid-cols-2"
            >
              {project.video ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/5">
                  <iframe
                    src={project.video}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </a>
              )}

              <div className="flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider muted">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.date}</span>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title"
                >
                  <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover/title:text-blue-600 dark:group-hover/title:text-blue-400">
                    {project.title}
                  </h3>
                </a>

                <p className="mt-4 text-base leading-relaxed muted">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border soft-border bg-black/5 dark:bg-white/5 px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project
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
