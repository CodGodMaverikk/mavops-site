"use client";

import { STATS } from "@/lib/constants";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function StatsBar() {
  return (
    <section className="py-16 border-y border-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-orbitron text-3xl sm:text-4xl font-bold text-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
