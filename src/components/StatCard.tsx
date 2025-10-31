interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary text-primary-foreground p-6 rounded-3xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 flex flex-col items-center justify-center gap-2 min-h-[140px]">
      {icon && <div className="text-primary-foreground/90">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold">{value}</div>
      <div className="text-base md:text-lg font-medium opacity-90">{label}</div>
    </div>
  );
};

export default StatCard;
