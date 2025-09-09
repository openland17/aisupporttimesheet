import { Button } from "./ui/button";
import { cn } from "./ui/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "accent";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function GradientButton({ 
  children, 
  variant = "primary", 
  size = "md",
  glow = false,
  className,
  onClick,
  disabled = false
}: GradientButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "border-0 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg",
        `gradient-${variant}`,
        sizeClasses[size],
        glow && "glow-hover",
        disabled && "opacity-50 cursor-not-allowed hover:scale-100",
        className
      )}
    >
      {children}
    </Button>
  );
}