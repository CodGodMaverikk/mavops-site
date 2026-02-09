"use client";

import Link from "next/link";
import { Bot, Video, ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

const products = [
  {
    title: "The Overseer",
    description:
      "The ultimate Discord bot for gaming communities. XP systems, rank tiers, Twitch integration, trivia games, and powerful moderation — all in one bot.",
    icon: Bot,
    badge: "Alpha",
    badgeVariant: "green" as const,
    href: "/bot",
    features: ["XP & Leveling", "Rank System", "Twitch Integration", "Trivia Games"],
  },
  {
    title: "Clip Dummy AI",
    description:
      "AI-powered clip detection and distribution. Automatically find your best streaming moments and upload them everywhere.",
    icon: Video,
    badge: "Coming Soon",
    badgeVariant: "yellow" as const,
    href: "/clipbot",
    features: ["AI Detection", "Auto-Edit", "Multi-Platform", "Analytics"],
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Our Products"
            title="Tools Built for Gamers"
            description="From community management to content distribution, we've got you covered."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <ScrollReveal key={product.title} delay={i * 0.2}>
              <Link href={product.href} className="block h-full">
                <Card className="h-full group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                      <product.icon className="w-5 h-5 text-cyan" />
                    </div>
                    <Badge variant={product.badgeVariant}>
                      {product.badge}
                    </Badge>
                  </div>

                  <h3 className="font-orbitron text-xl font-bold text-white mb-3">
                    {product.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {product.features.map((f) => (
                      <div
                        key={f}
                        className="text-xs text-gray-500 bg-white/5 rounded-md px-3 py-1.5 text-center"
                      >
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-cyan text-sm font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
