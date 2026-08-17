"use client";

import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Player from "@vimeo/player";



export default function Hero() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      playerRef.current = player;
      
      // Enforce muted state on load
      player.setVolume(0).catch(() => {});
      player.setMuted(true).catch(() => {});
      setIsMuted(true);

      player.on('volumechange', (data: { volume: number }) => {
        setIsMuted(data.volume === 0);
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy().catch(() => {});
      }
    };
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      const newMutedState = !isMuted;
      playerRef.current.setVolume(newMutedState ? 0 : 1).catch(() => {});
      playerRef.current.setMuted(newMutedState).catch(() => {});
      setIsMuted(newMutedState);
    }
  };
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


      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          {/* Left Side: Text and CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Name Tag */}
            <motion.div variants={itemVariants} className="mb-4 md:mb-6">
              <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-gray-600 dark:text-gray-400">
                <span className="w-8 h-[1px] bg-primary/50"></span>
                Shiwanshu Shubham
                <span className="w-8 h-[1px] bg-primary/50 lg:hidden"></span>
              </span>
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground mb-6"
            >
              Designing <br className="hidden lg:block" />
              Experiences That{" "}
              <span className="font-serif italic font-normal text-primary">
                Matter
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-8 md:mb-10"
            >
              I craft intuitive, human-centered digital experiences that blend clean aesthetics with thoughtful usability. Let's build something exceptional together.
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
                Explore Work
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-full border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 bg-transparent px-8 py-3.5 text-base font-medium text-foreground transition-all duration-300 w-full sm:w-auto"
              >
                Let's Talk
                <ArrowUpRight size={18} className="opacity-70" />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Video */}
          <motion.div variants={itemVariants} className="w-full relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-card-border bg-foreground/5 group">
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1186103012?background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="Design showreel"
            ></iframe>
            
            {/* Custom Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all cursor-pointer shadow-lg"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
