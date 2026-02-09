"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VALUES } from "@/lib/constants";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import Button from "@/components/ui/Button";
import { DISCORD_INVITE } from "@/lib/constants";

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <Image
                src="/logo.png"
                alt="MavOps"
                width={80}
                height={80}
                className="mx-auto mb-8"
              />
              <h1 className="font-orbitron text-4xl sm:text-5xl font-bold text-white mb-6">
                About <span className="text-cyan">MavOps</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                MavOps is a gaming organization on a mission to build the best
                tools for streamers and gaming communities. We believe that
                content creators and community leaders deserve powerful,
                intuitive tools — without the complexity.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                From our Discord bot that powers XP systems and community
                engagement, to ClipBot AI that automates clip creation and
                distribution — we&apos;re building the future of gaming
                community infrastructure.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-y border-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Our Mission"
              title="What Drives Us"
              description="We're gamers building for gamers. Here's what we stand for."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.15}>
                <FeatureCard {...value} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Link */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Our Products"
              title="What We're Building"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ScrollReveal>
              <Link href="/bot" className="block">
                <div className="glass-card p-8 group hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">
                    The Overseer
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    The ultimate Discord bot for gaming communities.
                  </p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Link href="/clipbot" className="block">
                <div className="glass-card p-8 group hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">
                    ClipBot AI
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    AI-powered clip detection and distribution.
                  </p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-orbitron text-3xl font-bold text-white mb-4">
                Join the Community
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                Be part of the MavOps journey. Connect with us on Discord.
              </p>
              <Button href={DISCORD_INVITE} size="lg" external>
                Join Discord
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
