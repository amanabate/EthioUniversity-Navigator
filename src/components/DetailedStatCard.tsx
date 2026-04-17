import { useState, useEffect } from "react";
import { LucideIcon } from "lucide-react";

interface DetailedStatCardProps {
  label: string;
  targetNumber: number;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  startFromZero?: boolean;
}

const DetailedStatCard = ({ label, targetNumber, icon: Icon, startFromZero = true }: DetailedStatCardProps) => {
  const [count, setCount] = useState(startFromZero ? 0 : 1);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    if (targetNumber <= 0) {
      setCount(0);
      setHasAnimated(true);
      return;
    }

    // For large numbers, start from a percentage and use larger increments
    const isLargeNumber = targetNumber > 1000;
    const startValue = startFromZero ? 0 : (isLargeNumber ? Math.floor(targetNumber * 0.2) : 1);
    const increment = isLargeNumber ? Math.max(1, Math.floor(targetNumber / 150)) : 1;
    
    setCount(startValue);

    // Small delay before animation starts
    let intervalId: NodeJS.Timeout | null = null;
    
    const startDelay = setTimeout(() => {
      // Smooth counting animation
      const duration = 3000; // 3 seconds total animation
      const steps = Math.ceil((targetNumber - startValue) / increment);
      const stepDuration = duration / steps;

      let currentStep = startValue;
      intervalId = setInterval(() => {
        currentStep = Math.min(currentStep + increment, targetNumber);
        setCount(currentStep);
        
        if (currentStep >= targetNumber) {
          if (intervalId) clearInterval(intervalId);
          setHasAnimated(true);
          setCount(targetNumber); // Ensure final value is exact
        }
      }, stepDuration);
    }, 400); // 400ms delay before starting

    return () => {
      clearTimeout(startDelay);
      if (intervalId) clearInterval(intervalId);
    };
  }, [targetNumber, hasAnimated, startFromZero]);

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card border border-border/60 hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[148px]">
      {Icon && (
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div className="text-3xl md:text-4xl font-extrabold text-foreground tabular-nums tracking-tight">
        {formatNumber(count)}
      </div>
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">
        {label}
      </div>
    </div>
  );
};

export default DetailedStatCard;

