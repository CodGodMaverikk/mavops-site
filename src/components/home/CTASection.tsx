"use client";

import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { DISCORD_INVITE } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-cyan/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="glass-card p-12 md:p-16 text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Level Up?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Join the MavOps community and be the first to access our tools,
              updates, and exclusive features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={DISCORD_INVITE} size="lg" external>
                Join Discord
              </Button>
              <Button href="/bot" variant="outline" size="lg">
                Explore MavOps Bot
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
