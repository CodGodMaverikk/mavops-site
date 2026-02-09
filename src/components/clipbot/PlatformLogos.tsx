"use client";

import { CLIPBOT_PLATFORMS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function PlatformLogos() {
  return (
    <section className="py-24 border-y border-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Platforms"
            title="Upload Everywhere"
            description="Distribute your clips to all major short-form platforms simultaneously."
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {CLIPBOT_PLATFORMS.map((platform, i) => (
            <ScrollReveal key={platform.name} delay={i * 0.1}>
              <div className="glass-card p-6 text-center group hover:-translate-y-1 transition-all duration-300">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold font-orbitron"
                  style={{
                    background: `${platform.color}15`,
                    border: `2px solid ${platform.color}40`,
                    color: platform.color,
                  }}
                >
                  {platform.name[0]}
                </div>
                <p className="text-white text-sm font-medium">
                  {platform.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
