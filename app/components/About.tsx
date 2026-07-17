"use client";

import Reveal from "./Reveal";
import { SiFigma, SiAdobephotoshop, SiAdobeaftereffects, SiAnthropic, SiGooglegemini } from "react-icons/si";

export default function About() {
  const tools = [
    { name: "Figma", icon: SiFigma },
    { name: "Photoshop", icon: SiAdobephotoshop },
    { name: "After Effects", icon: SiAdobeaftereffects },
    { name: "Claude", icon: SiAnthropic },
    { name: "Gemini", icon: SiGooglegemini },
    { name: "Figma Make", icon: SiFigma },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-24">
      <Reveal>
        <div className="mb-12 md:mb-16 max-w-3xl">
          <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400 mb-3">
            Workflow
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 text-black dark:text-white">
            Tools I design with
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            AI tools speed up how I explore and prototype. Every final screen is still shaped and refined by hand in Figma before it ships.
          </p>
        </div>

        {/* Workflow Card */}
        <div className="rounded-3xl border border-black/10 dark:border-white/5 bg-gray-50/50 dark:bg-[#111215] p-6 md:p-12 shadow-2xl">
          
          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-[#16171a] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-default"
                >
                  <Icon className="w-5 h-5 text-gray-700 dark:text-white" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{tool.name}</span>
                </div>
              );
            })}
          </div>

          {/* Dashed Separator */}
          <div className="w-full border-t border-dashed border-black/10 dark:border-white/10 mb-12" />

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold mb-3">01</div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Explore fast</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Use AI to generate a wide spread of directions before committing to one.
              </p>
            </div>
            
            <div>
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold mb-3">02</div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Refine by hand</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Rebuild the strongest direction properly, real grids, real type, real detail.
              </p>
            </div>

            <div>
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold mb-3">03</div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Ship with intent</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Every shipped screen is checked against real usability standards.
              </p>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
