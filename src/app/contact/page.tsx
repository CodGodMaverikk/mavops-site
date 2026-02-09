import { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
  return <ContactContent />;
}
