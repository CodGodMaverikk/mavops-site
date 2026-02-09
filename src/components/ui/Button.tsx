import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  external,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 whitespace-nowrap";

  const variants = {
    primary:
      "bg-cyan text-black hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan/25",
    secondary:
      "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-cyan/30",
    outline:
      "bg-transparent text-cyan border border-cyan/50 hover:bg-cyan/10 hover:border-cyan",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
