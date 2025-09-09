import { cn } from "./ui/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "strong";
  glow?: boolean;
  float?: boolean;
}

export function GlassCard({ 
  children, 
  className, 
  variant = "default",
  glow = false,
  float = false 
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        variant === "default" ? "glass" : "glass-strong",
        glow && "glow",
        float && "animate-float",
        className
      )}
    >
      {children}
    </div>
  );
}