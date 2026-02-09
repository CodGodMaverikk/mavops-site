import { cn } from "@/lib/cn";
import GradientText from "@/components/shared/GradientText";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  gradient?: boolean;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  gradient = true,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-4">
        {gradient ? <GradientText>{title}</GradientText> : title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-gray-400 text-lg max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
