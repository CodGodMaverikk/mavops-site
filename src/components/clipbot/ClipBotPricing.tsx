"use client";

import { CLIPBOT_PRICING } from "@/lib/constants";
import PricingCard from "@/components/ui/PricingCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ClipBotPricing() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Pricing"
            title="Plans for Every Creator"
            description="Start free, scale as you grow. Cancel anytime."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {CLIPBOT_PRICING.map((plan, i) => (
            <ScrollReveal key={plan.tier} delay={i * 0.1}>
              <PricingCard {...plan} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
