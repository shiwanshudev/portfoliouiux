"use client";

import {
  BehanceSquareFilled,
  InstagramFilled,
  GithubOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./components/ThemeToggle"), {
  ssr: false,
});
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
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
            <a className="hover:text-blue-600 transition-colors" href="#skills">Skills</a>
            <a className="hover:text-blue-600 transition-colors" href="#projects">Projects</a>
            <a className="hover:text-blue-600 transition-colors" href="#portfolio">Portfolio</a>
            <a className="hover:text-blue-600 transition-colors" href="#about">About</a>
            <a className="hover:text-blue-600 transition-colors" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://github.com/shiwanshudev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-600 transition-colors hidden md:inline-block"
              aria-label="GitHub"
            >
              <GithubOutlined />
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <div className="py-16 md:py-24 bg-black/5 dark:bg-white/5">
          <Skills />
        </div>
        <div className="py-16 md:py-24">
          <Projects />
        </div>
        <div className="py-16 md:py-24 bg-black/5 dark:bg-white/5">
          <PortfolioSection />
        </div>
        <div className="py-16 md:py-24">
          <FrontendSection />
        </div>
        <div className="py-16 md:py-24 bg-black/5 dark:bg-white/5">
          <Artworks />
        </div>
        <div className="py-16 md:py-24">
          <About />
        </div>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
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
                <BehanceSquareFilled style={{ fontSize: 24 }} />
              </a>
              <a
                href="https://instagram.com/studiovidya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4 text-gray-600 dark:text-gray-400 transition-all hover:scale-110 hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-900/20 dark:hover:text-pink-400"
              >
                <InstagramFilled style={{ fontSize: 24 }} />
              </a>
              <a
                href="https://github.com/shiwanshudev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4 text-gray-600 dark:text-gray-400 transition-all hover:scale-110 hover:bg-gray-50 hover:text-black dark:hover:bg-white/10 dark:hover:text-white"
              >
                <GithubOutlined style={{ fontSize: 24 }} />
              </a>
              <a
                href="https://www.linkedin.com/in/shiwanshudev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-4 text-gray-600 dark:text-gray-400 transition-all hover:scale-110 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
              >
                <LinkedinFilled style={{ fontSize: 24 }} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 dark:border-white/10 py-12 md:py-16 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {/* Name and copyright */}
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
