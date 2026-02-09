import { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return <AboutContent />;
}
