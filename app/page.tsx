"use client";

"use client";

import { SiBehance } from "react-icons/si";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./components/ThemeToggle"), {
  ssr: false,
});
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import PortfolioSection from "./components/PortfolioSection";
import FrontendSection from "./components/FrontendSection";
import Artworks from "./components/Artworks";
import About from "./components/About";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between w-full max-w-6xl gap-4 rounded-full border border-black/10 bg-white/90 px-4 md:px-6 py-3 shadow-lg backdrop-blur-md dark:bg-black/90 dark:border-white/10">
          <a href="#home" className="text-base md:text-sm font-bold tracking-tight hover:text-blue-600 transition-colors">
            Shiwanshu
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a className="hover:text-blue-600 transition-colors" href="#projects">Projects</a>
            <a className="hover:text-blue-600 transition-colors" href="#experience">Experience</a>
            <a className="hover:text-blue-600 transition-colors" href="#skills">Skills</a>
            <a className="hover:text-blue-600 transition-colors" href="#about">About</a>
            <a className="hover:text-blue-600 transition-colors" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <Hero />

        {/* 1. Projects (Proof) */}
        <div className="py-10 md:py-16">
          <Projects />
        </div>

        {/* 2. Experience (History/Trust) */}
        <div className="py-10 md:py-16 bg-black/5 dark:bg-white/5">
          <Experience />
        </div>

        {/* 3. Skills (Toolbox) */}
        <div className="py-10 md:py-16">
          <Skills />
        </div>

        {/* 4. Hybrid / USP */}
        <div className="py-10 md:py-16 bg-black/5 dark:bg-white/5">
          <About />
        </div>

        <div className="py-10 md:py-16">
          <FrontendSection />
        </div>

        <div className="py-8 md:py-12 bg-black/5 dark:bg-white/5">
          <PortfolioSection />
        </div>

        <div className="py-10 md:py-16 bg-black/5 dark:bg-white/5">
          <Artworks />
        </div>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 scroll-mt-40">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 md:p-8 lg:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">
              Let&apos;s work together
            </h2>
            <p className="muted max-w-xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
              I&apos;m available for freelance projects and full-time opportunities.
              Let&apos;s build something amazing.
            </p>
            <a
              href="mailto:shiwanshudev@outlook.com"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 text-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-semibold transition-all hover:bg-blue-600 hover:scale-105"
            >
              <Mail size={18} />
              <span className="hidden sm:inline">shiwanshudev@outlook.com</span>
              <span className="sm:hidden">Email Me</span>
            </a>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="https://behance.net/studiovidya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4 text-gray-600 dark:text-gray-400 transition-all hover:scale-110 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
              >
                <SiBehance size={24} />
              </a>
              <a
                href="https://instagram.com/studiovidya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4 text-gray-600 dark:text-gray-400 transition-all hover:scale-110 hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-900/20 dark:hover:text-pink-400"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://github.com/shiwanshudev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4 text-gray-600 dark:text-gray-400 transition-all hover:scale-110 hover:bg-gray-50 hover:text-black dark:hover:bg-white/10 dark:hover:text-white"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shiwanshudev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4 text-gray-600 dark:text-gray-400 transition-all hover:scale-110 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 dark:border-white/10 py-12 md:py-16 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center">
            <div className="font-bold text-lg md:text-xl mb-2">Shiwanshu Shubham</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
              UX/UI Designer & Frontend Developer
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              Created by Shiwanshu Shubham · © 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
