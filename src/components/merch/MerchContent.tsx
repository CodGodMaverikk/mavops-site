"use client";

import { ShoppingBag, ExternalLink, Shirt, Package, Truck } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { MERCH_URL, DISCORD_INVITE } from "@/lib/constants";

const perks = [
  {
    title: "Official Merch",
    description: "Authentic MavOps gear designed for the community.",
    icon: Shirt,
  },
  {
    title: "Quality Materials",
    description: "Premium fabrics and printing that lasts.",
    icon: Package,
  },
  {
    title: "Worldwide Shipping",
    description: "We ship globally so everyone can rep MavOps.",
    icon: Truck,
  },
];

export default function MerchContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan/5 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="w-20 h-20 rounded-2xl bg-cyan/10 flex items-center justify-center mx-auto mb-8 border border-cyan/20">
              <ShoppingBag className="w-10 h-10 text-cyan" />
            </div>

            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              MavOps{" "}
              <span className="text-cyan">Merch</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Rep the brand. Official MavOps apparel, accessories, and gear
              — powered by Fourthwall.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={MERCH_URL} size="lg" external>
                <span className="flex items-center gap-2">
                  Shop Now <ExternalLink className="w-4 h-4" />
                </span>
              </Button>
              <Button href={DISCORD_INVITE} variant="secondary" size="lg" external>
                Join Discord
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 border-y border-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Why MavOps Merch"
              title="Wear the OPS"
              description="Look good, rep the community, support the org."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {perks.map((perk, i) => (
              <ScrollReveal key={perk.title} delay={i * 0.15}>
                <Card className="text-center group">
                  <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan/20 transition-colors">
                    <perk.icon className="w-7 h-7 text-cyan" />
                  </div>
                  <h3 className="font-orbitron text-lg font-semibold text-white mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{perk.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass-card p-12 md:p-16 text-center">
              <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-4">
                Visit the Store
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                Browse the full collection on our Fourthwall store. New drops
                announced on Discord.
              </p>
              <Button href={MERCH_URL} size="lg" external>
                <span className="flex items-center gap-2">
                  Shop MavOps Merch <ExternalLink className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
