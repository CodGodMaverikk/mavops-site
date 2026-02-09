"use client";

import { RANK_TIERS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function RankSystem() {
  return (
    <section className="py-24 border-y border-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Rank System"
            title="Climb the Ranks"
            description="Earn XP, level up, and unlock exclusive perks as you progress through the tiers."
          />
        </ScrollReveal>

        {/* Progress Bar */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              {/* Track */}
              <div className="h-3 bg-dark-50 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[#cd7f32] via-[#c0c0c0] via-[#ffd700] to-[#00e5ff] w-full" />
              </div>
              {/* Markers */}
              <div className="flex justify-between mt-2">
                {RANK_TIERS.map((tier) => (
                  <div key={tier.name} className="text-center">
                    <div
                      className="w-4 h-4 rounded-full border-2 mx-auto -mt-5 bg-background"
                      style={{ borderColor: tier.color }}
                    />
                    <span
                      className="text-xs font-bold mt-2 block"
                      style={{ color: tier.color }}
                    >
                      {tier.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tier Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RANK_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.1}>
              <div
                className="glass-card p-6 text-center"
                style={{
                  borderColor: `${tier.color}33`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold font-orbitron"
                  style={{
                    background: `${tier.color}15`,
                    color: tier.color,
                    border: `2px solid ${tier.color}50`,
                  }}
                >
                  {tier.name[0]}
                </div>
                <h3
                  className="font-orbitron font-bold text-lg mb-1"
                  style={{ color: tier.color }}
                >
                  {tier.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{tier.xp} XP</p>
                <p className="text-gray-400 text-xs">{tier.perks}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
