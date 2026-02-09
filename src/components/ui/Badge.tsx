import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "cyan" | "yellow" | "green" | "purple";
  className?: string;
}

const variants = {
  cyan: "bg-cyan/10 text-cyan border-cyan/30",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  green: "bg-green-500/10 text-green-400 border-green-500/30",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
};

export default function Badge({
  children,
  variant = "cyan",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
