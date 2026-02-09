"use client";

import { BOT_PRICING } from "@/lib/constants";
import PricingCard from "@/components/ui/PricingCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function BotPricing() {
  return (
    <section className="py-24 border-t border-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Pricing"
            title="Simple, Transparent Pricing"
            description="Start free, upgrade when you're ready. No hidden fees."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {BOT_PRICING.map((plan, i) => (
            <ScrollReveal key={plan.tier} delay={i * 0.1}>
              <PricingCard {...plan} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
