import { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import BotHero from "@/components/bot/BotHero";
import BotFeatureGrid from "@/components/bot/BotFeatureGrid";
import RankSystem from "@/components/bot/RankSystem";
import CommandShowcase from "@/components/bot/CommandShowcase";
import BotPricing from "@/components/bot/BotPricing";
import BotCTA from "@/components/bot/BotCTA";

export const metadata: Metadata = pageMetadata.bot;

export default function BotPage() {
  return (
    <>
      <BotHero />
      <BotFeatureGrid />
      <RankSystem />
      <CommandShowcase />
      <BotPricing />
      <BotCTA />
    </>
  );
}
