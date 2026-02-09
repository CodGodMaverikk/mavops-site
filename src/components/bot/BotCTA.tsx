"use client";

import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { BOT_INVITE, DISCORD_INVITE } from "@/lib/constants";

export default function BotCTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="glass-card p-12 md:p-16 text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-4">
              Add MavOps Bot to Your Server
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Set up in seconds. Start engaging your community with XP, ranks,
              trivia, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={BOT_INVITE} size="lg" external>
                Invite Bot
              </Button>
              <Button
                href={DISCORD_INVITE}
                variant="outline"
                size="lg"
                external
              >
                Join Discord
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
