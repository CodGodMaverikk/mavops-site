"use client";

import { useState } from "react";
import { Terminal } from "lucide-react";
import { BOT_COMMANDS, COMMAND_CATEGORIES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { cn } from "@/lib/cn";

export default function CommandShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? BOT_COMMANDS
      : BOT_COMMANDS.filter((cmd) => cmd.category === activeCategory);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Commands"
            title="25+ Slash Commands"
            description="Powerful commands organized by category. Easy to use, easy to remember."
          />
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {COMMAND_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-cyan text-black"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Command Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((cmd) => (
            <div
              key={cmd.name}
              className="glass-card p-4 flex items-start gap-3 hover:border-cyan/30 transition-all"
            >
              <Terminal className="w-4 h-4 text-cyan mt-1 flex-shrink-0" />
              <div>
                <code className="text-cyan text-sm font-mono font-semibold">
                  {cmd.name}
                </code>
                <p className="text-gray-500 text-xs mt-1">{cmd.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
