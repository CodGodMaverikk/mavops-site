import { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import ClipBotHero from "@/components/clipbot/ClipBotHero";
import HowItWorks from "@/components/clipbot/HowItWorks";
import ClipBotFeatures from "@/components/clipbot/ClipBotFeatures";
import PlatformLogos from "@/components/clipbot/PlatformLogos";
import ClipBotPricing from "@/components/clipbot/ClipBotPricing";
import WaitlistForm from "@/components/clipbot/WaitlistForm";

export const metadata: Metadata = pageMetadata.clipbot;

export default function ClipBotPage() {
  return (
    <>
      <ClipBotHero />
      <HowItWorks />
      <ClipBotFeatures />
      <PlatformLogos />
      <ClipBotPricing />
      <WaitlistForm />
    </>
  );
}
