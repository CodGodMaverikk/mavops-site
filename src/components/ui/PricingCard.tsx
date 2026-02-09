import { cn } from "@/lib/cn";
import { Check } from "lucide-react";
import Button from "./Button";

interface PricingCardProps {
  tier: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export default function PricingCard({
  tier,
  price,
  period,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "glass-card p-8 flex flex-col relative",
        highlighted &&
          "border-cyan/50 shadow-lg shadow-cyan/10 scale-[1.02]"
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-cyan text-black text-xs font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-orbitron text-lg font-bold text-white mb-2">
          {tier}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-500 text-sm">{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? "primary" : "outline"}
        className="w-full"
      >
        {cta}
      </Button>
    </div>
  );
}
