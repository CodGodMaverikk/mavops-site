"use client";

import { motion } from "framer-motion";
import { Play, Clock, Eye } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { DISCORD_INVITE } from "@/lib/constants";

export default function ClipBotHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="yellow" className="mb-4">
              Coming Soon
            </Badge>
            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Clip Dummy{" "}
              <span className="text-cyan">AI</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              AI-powered clip detection and distribution. Automatically find
              your best streaming moments, edit them, and upload everywhere
              — while you keep gaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#waitlist" size="lg">
                Join Waitlist
              </Button>
              <Button href={DISCORD_INVITE} variant="secondary" size="lg" external>
                Join Discord
              </Button>
            </div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-6 max-w-md mx-auto">
              {/* Mock Clip Card */}
              <div className="bg-dark-100 rounded-lg overflow-hidden mb-4">
                <div className="aspect-video bg-gradient-to-br from-dark-300 to-dark-50 flex items-center justify-center relative">
                  <div className="w-14 h-14 rounded-full bg-cyan/20 flex items-center justify-center">
                    <Play className="w-6 h-6 text-cyan ml-1" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
                    0:32
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                      AI DETECTED
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-white text-sm font-semibold mb-2">
                    Insane 1v4 Clutch
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 2 min ago
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" /> Auto-uploading...
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {["TikTok", "YouTube", "Insta"].map((p) => (
                      <span
                        key={p}
                        className="text-[10px] bg-cyan/10 text-cyan px-2 py-1 rounded"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Upload Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Uploading to 3 platforms</span>
                  <span className="text-cyan">67%</span>
                </div>
                <div className="w-full bg-dark-300 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-cyan to-purple-500 h-1.5 rounded-full transition-all"
                    style={{ width: "67%" }}
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
