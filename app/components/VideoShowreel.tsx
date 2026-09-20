"use client";

import { useRef } from "react";

export default function VideoShowreel() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <section
      aria-labelledby="showreel-heading"
      className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-mono font-semibold uppercase tracking-widest text-gray-500">
            Design in motion
          </p>
          <h2
            id="showreel-heading"
            className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          >
            A closer look at the work
          </h2>
        </div>
        <span className="hidden text-xs text-foreground/50 sm:block">
          Showreel
        </span>
      </div>

      <div
        className="group relative aspect-video overflow-hidden rounded-2xl border border-card-border bg-black shadow-2xl"
      >
        <iframe
          ref={iframeRef}
            src="https://player.vimeo.com/video/1186103012?autoplay=0&muted=1&title=0&byline=0&portrait=0&controls=1"
          loading="lazy"
          title="UX and visual design showreel"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </section>
  );
}