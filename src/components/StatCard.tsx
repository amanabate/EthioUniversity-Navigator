import { useState, useEffect } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  animate?: boolean;
  targetNumber?: number;
  valueSuffix?: string; // For suffixes like "+", "%", "K+", etc.
  formatValue?: (num: number) => string; // Custom formatter function
}

const StatCard = ({ value, label, icon, animate = false, targetNumber, valueSuffix, formatValue }: StatCardProps) => {
  const [count, setCount] = useState(animate ? 1 : 0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!animate || hasAnimated) return;

    const numericValue = targetNumber || parseInt(value.replace(/\D/g, '')) || 0;
    if (numericValue <= 1) {
      setCount(numericValue);
      setHasAnimated(true);
      return;
    }

    // For large numbers, start from a percentage and use larger increments
    const isLargeNumber = numericValue > 1000;
    const startValue = isLargeNumber ? Math.floor(numericValue * 0.3) : 1;
    const increment = isLargeNumber ? Math.max(1, Math.floor(numericValue / 100)) : 1;
    
    setCount(startValue);

    // Small delay before animation starts for better UX
    let intervalId: NodeJS.Timeout | null = null;
    
    const startDelay = setTimeout(() => {
      // Smooth counting animation
      const duration = 2500; // 2.5 seconds total animation
      const steps = Math.ceil((numericValue - startValue) / increment);
      const stepDuration = duration / steps;

      let currentStep = startValue;
      intervalId = setInterval(() => {
        currentStep = Math.min(currentStep + increment, numericValue);
        setCount(currentStep);
        
        if (currentStep >= numericValue) {
          if (intervalId) clearInterval(intervalId);
          setHasAnimated(true);
          setCount(numericValue); // Ensure final value is exact
        }
      }, stepDuration);
    }, 300); // 300ms delay before starting

    return () => {
      clearTimeout(startDelay);
      if (intervalId) clearInterval(intervalId);
    };
  }, [animate, value, targetNumber, hasAnimated]);

  // Format the display value
  const getDisplayValue = () => {
    if (animate && !hasAnimated) {
      if (formatValue) {
        return formatValue(count);
      }
      return count.toString() + (valueSuffix || '');
    }
    return value;
  };

  const displayValue = getDisplayValue();

  return (
    <div className="bg-gradient-to-r from-secondary to-primary text-primary-foreground p-6 rounded-3xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 flex flex-col items-center justify-center gap-2 min-h-[140px]">
      {icon && <div className="text-primary-foreground/90">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold transition-all duration-300">{displayValue}</div>
      <div className="text-base md:text-lg font-medium opacity-90">{label}</div>
    </div>
  );
};

export default StatCard;
