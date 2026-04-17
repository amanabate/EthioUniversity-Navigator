import { useState, useEffect } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  animate?: boolean;
  targetNumber?: number;
  valueSuffix?: string;
  formatValue?: (num: number) => string;
}

const StatCard = ({
  value,
  label,
  icon,
  animate = false,
  targetNumber,
  valueSuffix,
  formatValue,
}: StatCardProps) => {
  const [count, setCount] = useState(animate ? 0 : 0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!animate || hasAnimated) return;

    const numericValue = targetNumber || parseInt(value.replace(/\D/g, "")) || 0;
    if (numericValue <= 1) {
      setCount(numericValue);
      setHasAnimated(true);
      return;
    }

    const isLargeNumber = numericValue > 1000;
    const startValue = isLargeNumber ? Math.floor(numericValue * 0.2) : 0;
    const increment = isLargeNumber ? Math.max(1, Math.floor(numericValue / 80)) : 1;

    setCount(startValue);

    const startDelay = setTimeout(() => {
      const duration = 2000;
      const steps = Math.ceil((numericValue - startValue) / increment);
      const stepDuration = Math.max(10, duration / steps);
      let current = startValue;

      const id = setInterval(() => {
        current = Math.min(current + increment, numericValue);
        setCount(current);
        if (current >= numericValue) {
          clearInterval(id);
          setHasAnimated(true);
          setCount(numericValue);
        }
      }, stepDuration);

      return () => clearInterval(id);
    }, 200);

    return () => clearTimeout(startDelay);
  }, [animate, value, targetNumber, hasAnimated]);

  const displayValue = (() => {
    if (animate && !hasAnimated) {
      return formatValue ? formatValue(count) : count.toString() + (valueSuffix || "");
    }
    return value;
  })();

  return (
    <div className="relative overflow-hidden bg-gradient-primary text-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-3 min-h-[148px]">
      {/* Decorative circle */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-8 -left-4 w-20 h-20 rounded-full bg-white/5 pointer-events-none" />

      {icon && (
        <div className="relative z-10 text-white/80">{icon}</div>
      )}
      <div className="relative z-10 text-4xl md:text-5xl font-extrabold tracking-tight tabular-nums">
        {displayValue}
      </div>
      <div className="relative z-10 text-sm font-semibold uppercase tracking-widest text-white/75">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
