"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { ArrowRightOutlined } from "@ant-design/icons";

const portfolioItems = [
  {
    id: 1,
    title: "DAN GEREP LABS",
    category: "Brand Identity & Visual Design",
    image: "/dan_gerep_labs.png",
    link: "https://www.behance.net/gallery/238666909/DAN-GEREP-LABS-Branding-Identity",
    description: "A comprehensive brand identity for a modern gaming company. The project features a custom logo inspired by scientific precision and gaming energy, a vibrant color palette, and a complete typography system.",
    year: "2024"
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-10">
            <div>
              <h2 className="text-xl md:text-3xl font-bold tracking-tight">Brand Identity & Graphics</h2>
              <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl">
                Visual storytelling and strategic branding.
              </p>
            </div>
            <a
              href="https://behance.net/studiovidya"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/5 px-4 py-1.5 text-xs font-medium transition-all hover:bg-black/10 dark:hover:bg-white/10 whitespace-nowrap"
            >
              View on Behance
              <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="space-y-8 md:space-y-12">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="group grid gap-6 md:gap-8 lg:gap-12 md:grid-cols-12 items-center"
              >
                {/* Image Side */}
                <div className="md:col-span-7 relative">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-900 shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
                    </div>
                  </a>
                </div>

                {/* Content Side */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="h-px w-12 bg-black/20 dark:bg-white/20" />
                    <span className="text-sm font-medium uppercase tracking-widest text-gray-500">{item.category}</span>
                  </div>

                  <h3 className="text-3xl font-bold md:text-4xl mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h3>

                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 md:mb-8">
                    {item.description}
                  </p>

                  <div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-500 text-white px-6 py-2.5 text-sm font-semibold transition-all hover:bg-blue-600 hover:scale-105"
                    >
                      View Case Study
                      <ArrowRightOutlined className="text-xs" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
