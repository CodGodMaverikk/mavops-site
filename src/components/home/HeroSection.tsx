"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { DISCORD_INVITE } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-radial from-cyan/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="MavOps Logo"
            width={120}
            height={120}
            className="mx-auto drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 glow-text tracking-wider"
        >
          MAVOPS
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-orbitron text-lg sm:text-xl text-cyan tracking-[0.3em] mb-8 uppercase"
        >
          OPS don&apos;t sleep
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
        >
          A gaming organization building next-gen tools for streamers,
          communities, and content creators.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href={DISCORD_INVITE} size="lg" external>
            Join Discord
          </Button>
          <Button href="/bot" variant="secondary" size="lg">
            Explore Products
          </Button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
