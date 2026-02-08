"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { FaFigma, FaReact } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-18">
      <Reveal>
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">

          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Bridging the gap between <br />
              <span className="text-purple-600 dark:text-purple-400">Design</span> & <span className="text-blue-600 dark:text-blue-400">Engineering</span>.
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Too often, beautiful designs get lost in translation. As a hybrid designer-developer, I speak both languages.
              </p>
              <p>
                I don&apos;t just hand off static files. I build <strong>component-driven design systems</strong> that scale, ensuring the final product looks and feels exactly as intended—pixel-perfect, responsive, and accessible.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                  <FaFigma className="text-xl" />
                  <span>Design Systems</span>
                </div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  <FaReact className="text-xl" />
                  <span>Component Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual "Hybrid" Demo */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-zinc-900 overflow-hidden shadow-2xl">
              {/* Fake Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5 dark:border-white/5 bg-white dark:bg-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 text-xs font-mono text-gray-400 flex gap-4">
                  <span className="text-purple-500">Button.fig</span>
                  <span className="text-blue-500">Button.tsx</span>
                </div>
              </div>

              {/* Split View */}
              <div className="grid grid-cols-2 h-[280px]">

                {/* Left: Design (Figma-ish) */}
                <div className="relative border-r border-black/5 dark:border-white/5 bg-[#F5F5F5] dark:bg-[#1E1E1E] p-6 flex flex-col items-center justify-center gap-4">
                  <div className="absolute top-2 left-2 text-[10px] text-gray-400 font-mono uppercase tracking-wider">Design Mode</div>

                  {/* Design Button Representation */}
                  <div className="relative group cursor-default">
                    {/* Selection Box */}
                    <div className="absolute -inset-2 border border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white border border-purple-500" />
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white border border-purple-500" />
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white border border-purple-500" />
                      <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white border border-purple-500" />
                    </div>

                    <div className="px-6 py-2.5 bg-blue-600 rounded-lg text-white font-semibold shadow-lg shadow-blue-500/30">
                      Continue
                    </div>
                  </div>

                  {/* Properties Panel Mockup */}
                  <div className="w-full max-w-[140px] space-y-2 opacity-50">
                    <div className="h-2 w-1/2 bg-gray-300 dark:bg-gray-700 rounded-full" />
                    <div className="h-2 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-full" />
                  </div>
                </div>

                {/* Right: Code (VS Code-ish) */}
                <div className="bg-[#1e1e1e] p-6 font-mono text-xs overflow-hidden relative">
                  <div className="absolute top-2 left-2 text-[10px] text-gray-500 font-mono uppercase tracking-wider">Code Mode</div>

                  <div className="text-gray-400 mt-4 leading-relaxed">
                    <div><span className="text-pink-400">export</span> <span className="text-blue-400">const</span> <span className="text-yellow-400">Button</span> = ({"{"}</div>
                    <div className="pl-4">variant,</div>
                    <div className="pl-4">children</div>
                    <div>{"}) => ("}</div>
                    <div className="pl-4 text-white">
                      <span className="text-gray-500">&lt;</span>
                      <span className="text-green-400">button</span>
                    </div>
                    <div className="pl-6 text-blue-300">
                      className=
                      <span className="text-orange-300">"px-6 py-2.5</span>
                    </div>
                    <div className="pl-6 text-orange-300">
                      bg-blue-600
                    </div>
                    <div className="pl-6 text-orange-300">
                      rounded-lg..."
                    </div>
                    <div className="pl-4 text-white">
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div className="pl-8 text-white">{"{children}"}</div>
                    <div className="pl-4 text-white">
                      <span className="text-gray-500">&lt;/</span>
                      <span className="text-green-400">button</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div>{");"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
