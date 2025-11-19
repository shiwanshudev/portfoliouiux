"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
      <Reveal>
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Bridging the gap between <span className="text-blue-600 dark:text-blue-400">Design</span> and <span className="text-pink-600 dark:text-pink-400">Code</span>.
            </h2>
            <div className="mt-4 md:mt-6 space-y-4 md:space-y-6 text-base md:text-lg muted leading-relaxed">
              <p>
                I am a hybrid UX/UI Designer and Frontend Developer who believes that the best digital experiences are born at the intersection of aesthetics and functionality.
              </p>
              <p>
                With a deep understanding of both design systems and modern frontend architecture, I don&apos;t just design interfaces—I build them. This dual perspective allows me to create feasible, scalable, and pixel-perfect solutions that delight users and developers alike.
              </p>
              <p>
                Whether I&apos;m wireframing in Figma or shipping code in React & Next.js, my goal remains the same: to craft intuitive, accessible, and memorable digital products.
              </p>
            </div>
          </div>
          
          <div className="relative rounded-3xl bg-black/5 dark:bg-white/5 p-6 md:p-8 lg:p-12">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Design Philosophy</h3>
                <p className="muted text-sm md:text-base">
                  I believe in clarity over complexity. My designs prioritize user needs, accessibility, and emotional connection, ensuring every interaction feels natural and effortless.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Technical Approach</h3>
                <p className="muted text-sm md:text-base">
                  I write clean, component-based code that is scalable and maintainable. I leverage the power of modern frameworks to bring static designs to life with smooth animations and responsive layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
