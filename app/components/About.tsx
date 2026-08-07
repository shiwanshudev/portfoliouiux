"use client";

import Reveal from "./Reveal";
import {
  SiFigma,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAnthropic,
  SiGooglegemini,
} from "react-icons/si";

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
          <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-secondary-text mb-3">
            Workflow
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 text-foreground">
            I don't just prompt.
            <br />I build.
          </h2>
          <p className="text-foreground/65 text-sm md:text-base leading-relaxed">
            AI tools speed up how I explore and prototype. Every final screen is
            still shaped and refined by hand in Figma before it ships.
          </p>
        </div>

        {/* Workflow Card */}
        <div className="rounded-3xl border border-card-border bg-card-bg p-6 md:p-12 shadow-2xl">
          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl border border-transparent bg-tag-bg hover:bg-tag-bg/80 transition-colors cursor-default"
                >
                  <Icon className="w-5 h-5 text-tag-text" />
                  <span className="text-sm font-semibold text-tag-text">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Dashed Separator */}
          <div className="w-full border-t border-dashed border-card-border mb-12" />

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="text-primary font-mono text-sm font-bold mb-3">
                01
              </div>
              <h4 className="text-base font-bold text-foreground mb-2">
                Explore fast
              </h4>
              <p className="text-sm text-foreground/65 leading-relaxed">
                Use AI to generate a wide spread of directions before committing
                to one.
              </p>
            </div>

            <div>
              <div className="text-primary font-mono text-sm font-bold mb-3">
                02
              </div>
              <h4 className="text-base font-bold text-foreground mb-2">
                Refine by hand
              </h4>
              <p className="text-sm text-foreground/65 leading-relaxed">
                Rebuild the strongest direction properly, real grids, real type,
                real detail.
              </p>
            </div>

            <div>
              <div className="text-primary font-mono text-sm font-bold mb-3">
                03
              </div>
              <h4 className="text-base font-bold text-foreground mb-2">
                Ship with intent
              </h4>
              <p className="text-sm text-foreground/65 leading-relaxed">
                Every shipped screen is checked against real usability
                standards.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
