"use client";

import { Link2, Scan, Upload } from "lucide-react";
import { CLIPBOT_STEPS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

const stepIcons = [Link2, Scan, Upload];

export default function HowItWorks() {
  return (
    <section className="py-24 border-y border-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="How It Works"
            title="Three Simple Steps"
            description="From stream to viral clip in minutes — fully automated."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-cyan/50 via-cyan to-cyan/50" />

          {CLIPBOT_STEPS.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <ScrollReveal key={step.step} delay={i * 0.2}>
                <div className="text-center relative">
                  <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center mx-auto mb-6 relative z-10">
                    <Icon className="w-8 h-8 text-cyan" />
                  </div>
                  <div className="text-cyan font-orbitron text-sm font-bold mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
