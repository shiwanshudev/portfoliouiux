"use client";

"use client";

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { ExternalLink, Github } from "lucide-react";

const repos = [
  {
    name: "Con10T Labs",
    description: "Developed end-to-end with Next.js, Tailwind & TypeScript. Integrated Zoho CRM & Desk to streamline operations.",
    language: "Next.js / TypeScript",
    repoUrl: "", // Private repo
    demoUrl: "https://con10tlabs.com/",
    image: "/con10tlabs.png",
  },
  {
    name: "posta",
    description: "Sticky notes using PostgreSQL, ExpressJS, ReactJS and NodeJS.",
    language: "JavaScript",
    repoUrl: "https://github.com/shiwanshudev/posta",
    demoUrl: "https://posta-mu.vercel.app",
    image: "/posta.png", // Add project screenshots
  },
  {
    name: "shiwanshudev.vercel.app",
    description: "Personal portfolio and playground.",
    language: "TypeScript",
    repoUrl: "https://github.com/shiwanshudev/portfoliouiux",
    demoUrl: "https://shiwanshudev.vercel.app/",
    image: "/portfolio.png", // Add project screenshots
  },
];

export default function FrontendSection() {
  return (
    <section id="frontend" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-40">
      <Reveal>
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frontend Development</h2>
          <p className="mt-4 muted max-w-2xl text-base md:text-lg">
            Clean code, modern frameworks, and performance-first mindset.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 transition-all hover:shadow-xl"
            >
              {/* Background Image with Overlay */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                {repo.image && (
                  <Image
                    src={repo.image}
                    alt={repo.name}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-t from-black/20 to-transparent transition-all duration-500" />

                {/* Language Badge */}
                <div className="absolute top-3 right-3 rounded-full bg-white/90 dark:bg-black/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  {repo.language}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold tracking-tight mb-2">
                  {repo.name}
                </h3>
                <p className="text-sm muted leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {repo.repoUrl && (
                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 rounded-full bg-black/5 dark:bg-white/5 px-4 py-2 text-sm font-medium transition-colors hover:bg-black/10 dark:hover:bg-white/10"
                      title="View Code"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {repo.demoUrl && (
                    <a
                      href={repo.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium transition-all hover:bg-blue-700 hover:scale-105"
                      title="View Demo"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
