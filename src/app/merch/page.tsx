import { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import MerchContent from "@/components/merch/MerchContent";

export const metadata: Metadata = pageMetadata.merch;

export default function MerchPage() {
  return <MerchContent />;
}
