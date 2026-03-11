"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Instagram, Sparkles } from "lucide-react";

export default function Artworks() {
  return (
    <section id="artworks" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-8 relative">
      <Reveal>
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Digital Art Showcase</h2>
            <p className="mt-4 muted max-w-2xl text-base md:text-lg">
              A visual playground of digital illustrations and experiments.
            </p>
          </div>
          <a
            href="https://www.instagram.com/studiovidya/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-6 py-2.5 text-sm font-medium transition-all hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 dark:hover:bg-pink-500/10 dark:hover:text-pink-400 dark:hover:border-pink-500/30"
          >
            <Instagram size={18} />
            Follow on Instagram
          </a>
        </div>

        {/* The sliding artwork container */}
        <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden rounded-3xl bg-black/5 dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-xl group">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white dark:from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ 
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className="w-full relative flex flex-col"
            style={{ willChange: "transform" }}
          >
            <Image
              src="/MyArt/art.jpg"
              alt="Artworks Collection"
              width={2000}
              height={4000}
              className="w-full h-auto object-cover"
              priority
            />
            <Image
              src="/MyArt/art.jpg"
              alt="Artworks Collection (Loop)"
              width={2000}
              height={4000}
              className="w-full h-auto object-cover pointer-events-none"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/20 md:bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none flex items-center justify-center">
             <a
                href="https://www.instagram.com/studiovidya/"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center gap-3 transform md:translate-y-4 group-hover:translate-y-0 hover:scale-105 active:scale-95 group/cta"
             >
                <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 px-8 py-3.5 rounded-full shadow-[0_8px_30px_-4px_rgba(236,72,153,0.6)] flex items-center justify-center text-white transition-all group-hover/cta:shadow-[0_15px_40px_-5px_rgba(236,72,153,0.8)] border border-white/20 gap-2.5 font-medium tracking-wide">
                  <Instagram size={20} className="text-white" />
                  <span>Explore digital art on Instagram</span>
                </div>
             </a>
          </div>
        </div>


      </Reveal>
    </section>
  );
}
