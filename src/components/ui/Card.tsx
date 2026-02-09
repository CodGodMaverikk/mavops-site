import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hover && "hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/5",
        className
      )}
    >
      {children}
    </div>
  );
}
