"use client";

import Reveal from "./Reveal";

export default function Showreel() {
  return (
    <section id="showreel" className="py-10 md:py-16 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Showreel</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A quick glimpse into my design process, craft, and the experiences I've built.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl md:rounded-3xl border border-black/10 bg-black/5 shadow-2xl dark:border-white/10 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/5 p-2 md:p-4">
            <div className="aspect-video w-full relative rounded-xl overflow-hidden bg-black/10 dark:bg-black/40">
              <iframe 
                src="https://player.vimeo.com/video/1186103012?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                title="Design Showreel">
              </iframe>
            </div>
            
            {/* Ambient background glow behind the player */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-50 blur-[80px]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
