"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Instagram } from "lucide-react";

const artworks = [
  { id: 1, title: "Tanjiro", image: "/MyArt/Illustration.gif" },
  { id: 2, title: "Chonky", image: "/MyArt/chonky.png" },
  { id: 3, title: "Happy Diwali", image: "/MyArt/happydiwali.png" },
];

export default function Artworks() {
  return (
    <section id="artworks" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-40">
      <Reveal>
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Artworks & Experiments</h2>
            <p className="mt-4 muted max-w-2xl text-base md:text-lg">
              Digital art and visual experiments.
            </p>
          </div>
          <a
            href="https://www.instagram.com/studiovidya/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border soft-border px-4 py-2 text-sm font-medium transition-colors hover:bg-pink-500/10 hover:text-pink-600 hover:border-pink-500/20"
          >
            <Instagram size={18} />
            Follow on Instagram
          </a>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {artworks.slice(0, 3).map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="relative w-full overflow-hidden rounded-xl bg-black/5 dark:bg-white/5 group">
                <Image
                  src={art.image}
                  alt={art.title}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                  <span className="text-white font-medium text-sm">{art.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <a
            href="https://www.instagram.com/studiovidya/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 px-6 md:px-8 py-2.5 md:py-3 text-white shadow-md transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <Instagram className="text-base md:text-lg" />
            <span className="text-sm md:text-base font-bold tracking-wide">Follow on Instagram</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
