"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { DISCORD_INVITE, BOT_INVITE } from "@/lib/constants";

export default function BotHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial from-cyan/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="green" className="mb-4">
              Alpha Release
            </Badge>
            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              The{" "}
              <span className="text-cyan">Overseer</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              The ultimate Discord bot for gaming communities. XP &amp; leveling,
              5 rank tiers, Twitch integration, AI-powered trivia, streamer
              spotlights, chess, and full server customization via /setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={BOT_INVITE} size="lg" external>
                Add to Server
              </Button>
              <Button href={DISCORD_INVITE} variant="secondary" size="lg" external>
                Join Discord
              </Button>
            </div>
          </motion.div>

          {/* Right: Discord Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-6 max-w-md mx-auto">
              {/* Mock Discord Message */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-cyan text-sm">
                      The Overseer
                    </span>
                    <span className="bg-[#5865F2] text-white text-[10px] px-1.5 py-0.5 rounded font-medium">
                      BOT
                    </span>
                    <span className="text-gray-600 text-xs">Today at 4:20 PM</span>
                  </div>
                  <div className="bg-dark-100 rounded-lg p-4 border-l-4 border-cyan">
                    <p className="text-sm font-semibold text-white mb-2">
                      Level Up!
                    </p>
                    <p className="text-sm text-gray-400 mb-3">
                      Congrats <span className="text-cyan">@Mav</span>! You
                      reached <span className="text-yellow-400 font-semibold">Level 15</span> and
                      earned the <span className="text-[#ffd700] font-semibold">Gold</span> rank!
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>XP: 8,240 / 15,000</span>
                      <span>Rank: Gold</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* XP Bar */}
              <div className="ml-[52px]">
                <div className="w-full bg-dark-300 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan to-cyan-400 h-2 rounded-full"
                    style={{ width: "87%" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
