"use client";

import { BOT_FEATURES } from "@/lib/constants";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function BotFeatureGrid() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Features"
            title="Everything Your Server Needs"
            description="Packed with features to engage your community, reward activity, and keep things running smoothly."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOT_FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
