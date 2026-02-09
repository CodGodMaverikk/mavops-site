"use client";

import { CLIPBOT_FEATURES } from "@/lib/constants";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ClipBotFeatures() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Features"
            title="AI-Powered Clip Engine"
            description="Let AI handle the editing while you focus on the gameplay."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {CLIPBOT_FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
