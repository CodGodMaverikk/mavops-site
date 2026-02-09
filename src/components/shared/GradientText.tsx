import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-cyan via-cyan-300 to-cyan bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
