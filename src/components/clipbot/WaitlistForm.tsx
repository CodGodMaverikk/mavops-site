"use client";

import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { DISCORD_INVITE } from "@/lib/constants";

export default function WaitlistForm() {
  return (
    <section id="waitlist" className="py-24 border-t border-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="glass-card p-12 md:p-16 text-center max-w-3xl mx-auto">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Early Access
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Clip Dummy is currently in development. Join our Discord to get
              notified when the beta launches and be among the first to try it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button href={DISCORD_INVITE} size="lg" external className="flex-1">
                Join Discord for Early Access
              </Button>
            </div>

            <p className="text-gray-600 text-sm mt-6">
              No spam. Just launch updates and early access invites.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
