interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <div
      className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}