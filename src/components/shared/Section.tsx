type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`container mx-auto px-6 py-24 ${className}`}
    >
      {children}
    </section>
  );
}