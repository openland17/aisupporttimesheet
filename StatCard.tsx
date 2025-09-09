import { GlassCard } from "./GlassCard";
import { cn } from "./ui/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  gradient?: "primary" | "secondary" | "success" | "accent";
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  change, 
  icon, 
  trend = "neutral",
  gradient = "primary",
  className 
}: StatCardProps) {
  return (
    <GlassCard className={cn("p-6 hover:scale-105 transition-transform duration-300", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {value}
          </p>
          {change && (
            <div className={cn(
              "flex items-center text-sm",
              trend === "up" && "text-green-400",
              trend === "down" && "text-red-400",
              trend === "neutral" && "text-muted-foreground"
            )}>
              {trend === "up" && "↗"}
              {trend === "down" && "↘"}
              {trend === "neutral" && "→"}
              <span className="ml-1">{change}</span>
            </div>
          )}
        </div>
        {icon && (
          <div className={cn(
            "p-3 rounded-xl",
            `gradient-${gradient}`
          )}>
            {icon}
          </div>
        )}
      </div>
    </GlassCard>
  );
}