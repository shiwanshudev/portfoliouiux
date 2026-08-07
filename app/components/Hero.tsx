"use client";

import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";



export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 scroll-mt-8 min-h-screen flex items-center"
    >


      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-3xl"
        >
          {/* Name Tag */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-gray-600 dark:text-gray-400">
              <span className="w-8 h-[1px] bg-primary/50"></span>
              Shiwanshu Shubham
              <span className="w-8 h-[1px] bg-primary/50"></span>
            </span>
          </motion.div>

          {/* Large Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold tracking-tight leading-[1.1] text-foreground mb-6"
          >
            UI/UX{" "}
            <span className="font-serif italic font-normal text-primary">
              Designer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-10"
          >
            I craft warm, intuitive digital experiences that balance
            human-centered design with clean aesthetics. From graphic design to
            motion and production-ready interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-8 py-3.5 text-base font-medium text-button-text transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 bg-transparent px-8 py-3.5 text-base font-medium text-foreground transition-all duration-300 w-full sm:w-auto"
            >
              Let's talk
              <ArrowUpRight size={18} className="opacity-70" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
