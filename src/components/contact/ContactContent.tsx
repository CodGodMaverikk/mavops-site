"use client";

import { useState } from "react";
import { MessageCircle, Mail, Bot, ChevronDown } from "lucide-react";
import { FAQ, DISCORD_INVITE } from "@/lib/constants";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { cn } from "@/lib/cn";

const contactMethods = [
  {
    title: "Discord",
    description: "Join our server for the fastest support and community chat.",
    icon: MessageCircle,
    action: "Join Discord",
    href: DISCORD_INVITE,
    external: true,
  },
  {
    title: "Email",
    description: "For business inquiries and non-urgent support requests.",
    icon: Mail,
    action: "support@mavops.org",
    href: "mailto:support@mavops.org",
    external: false,
  },
  {
    title: "Bot Support",
    description: "Use /help in any server with The Overseer for instant help.",
    icon: Bot,
    action: "Use /help command",
    href: "/bot",
    external: false,
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-cyan flex-shrink-0 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="font-orbitron text-4xl sm:text-5xl font-bold text-white mb-4">
                Get in <span className="text-cyan">Touch</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Have a question, suggestion, or want to partner? Reach out
                through any of these channels.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, i) => (
              <ScrollReveal key={method.title} delay={i * 0.15}>
                <a
                  href={method.href}
                  {...(method.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block h-full"
                >
                  <Card className="h-full text-center group hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan/20 transition-colors">
                      <method.icon className="w-7 h-7 text-cyan" />
                    </div>
                    <h3 className="font-orbitron text-lg font-bold text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {method.description}
                    </p>
                    <span className="text-cyan text-sm font-medium">
                      {method.action}
                    </span>
                  </Card>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="FAQ"
              title="Frequently Asked Questions"
              description="Quick answers to common questions about MavOps and our products."
            />
          </ScrollReveal>

          <div className="max-w-2xl mx-auto space-y-3">
            {FAQ.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <FAQItem {...item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
