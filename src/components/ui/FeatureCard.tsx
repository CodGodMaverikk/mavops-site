import Card from "./Card";
import {
  TrendingUp,
  Award,
  Tv,
  Gamepad2,
  Star,
  Crown,
  Shield,
  Settings,
  Brain,
  Scissors,
  Share2,
  BarChart3,
  Zap,
  Users,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Award,
  Tv,
  Gamepad2,
  Star,
  Crown,
  Shield,
  Settings,
  Brain,
  Scissors,
  Share2,
  BarChart3,
  Zap,
  Users,
  Sparkles,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <Card className="group">
      <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors">
        {Icon && <Icon className="w-6 h-6 text-cyan" />}
      </div>
      <h3 className="font-orbitron text-lg font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}
