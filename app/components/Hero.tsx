"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const featuredProjects = [
  {
    title: "Vaani",
    category: "AI language coach · landing page",
    image: "/vaani.png",
    href: "https://www.behance.net/gallery/252822549/Vaani-Landing-Page-for-an-AI-Language-Coach",
  },
  {
    title: "Headhunter",
    category: "UX audit · booking flow",
    image: "/headhunter.png",
    href: "https://www.behance.net/gallery/251137919/Headhunter-Hairstyling-Homepage-Redesign",
  },
  {
    title: "Pixlor Wallet",
    category: "Fintech · mobile product design",
    image: "/pixlorwallet.png",
    href: "https://www.behance.net/gallery/245611659/Pixlor-Wallet-Crypto-Tracker-App-Design",
  },
];


export default function Hero() {
  const [activeProject, setActiveProject] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % featuredProjects.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[min(760px,100svh)] items-center overflow-hidden scroll-mt-8 pb-12 pt-28 md:pb-16 md:pt-32"
    >


      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid min-w-0 grid-cols-1 items-center gap-12 xl:grid-cols-2 xl:gap-14"
        >
          {/* Left Side: Text and CTA */}
          <div className="flex min-w-0 flex-col items-center text-center xl:items-start xl:text-left">
            {/* Name Tag */}
            <motion.div variants={itemVariants} className="mb-4 md:mb-6">
              <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-gray-600 dark:text-gray-400">
                <span className="w-8 h-[1px] bg-primary/50"></span>
                Shiwanshu Shubham
                <span className="w-8 h-[1px] bg-primary/50 lg:hidden"></span>
              </span>
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Designing <br className="hidden xl:block" />
              Experiences That{" "}
              <span className="font-serif italic font-normal text-primary">
                Matter
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-8 md:mb-10"
            >
              I craft intuitive, human-centered digital experiences that blend clean aesthetics with thoughtful usability. Let&apos;s build something exceptional together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-8 py-3.5 text-base font-medium text-button-text transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Explore Work
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-full border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 bg-transparent px-8 py-3.5 text-base font-medium text-foreground transition-all duration-300 w-full sm:w-auto"
              >
                Let&apos;s Talk
                <ArrowUpRight size={18} className="opacity-70" />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Featured work carousel */}
          <motion.div
            variants={itemVariants}
            className="min-w-0 w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
          >
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/50">
                  Selected work
                </p>
                <p className="mt-1 text-sm text-foreground/60">
                  Product, UX, and graphics design
                </p>
              </div>
              <span className="text-xs font-medium text-foreground/45">
                Featured
              </span>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-2xl border border-card-border bg-card-bg shadow-2xl">
              {featuredProjects.map((featuredProject, index) => (
                <motion.div
                  key={featuredProject.title}
                  initial={false}
                  animate={{
                    opacity: activeProject === index ? 1 : 0,
                    scale: activeProject === index ? 1 : 1.015,
                  }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                  aria-hidden={activeProject !== index}
                  className="pointer-events-none absolute inset-0"
                >
                  <Image
                    src={featuredProject.image}
                    alt={`${featuredProject.title} project preview`}
                    fill
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white md:inset-x-6 md:bottom-6">
                    <div>
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                        Featured project
                      </p>
                      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                        {featuredProject.title}
                      </h2>
                      <p className="mt-1 text-xs text-white/75 md:text-sm">
                        {featuredProject.category}
                      </p>
                    </div>
                    <a
                      href={featuredProject.href}
                      target={featuredProject.href.startsWith("#") ? undefined : "_blank"}
                      rel={featuredProject.href.startsWith("#") ? undefined : "noopener noreferrer"}
                      aria-label={`Open ${featuredProject.title} case study`}
                      className="shrink-0 rounded-full border border-white/30 bg-black/20 p-3 backdrop-blur-sm transition-colors hover:bg-white/20"
                    >
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex gap-2" aria-label="Featured projects">
                {featuredProjects.map((featuredProject, index) => (
                  <button
                    key={featuredProject.title}
                    type="button"
                    onClick={() => {
                      setActiveProject(index);
                      setIsPaused(true);
                    }}
                    aria-label={`Show ${featuredProject.title}`}
                    aria-current={activeProject === index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeProject === index
                        ? "w-10 bg-primary"
                        : "w-5 bg-foreground/20 hover:bg-foreground/40"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-foreground/50">
                {String(activeProject + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
