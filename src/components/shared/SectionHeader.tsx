type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <h2 className="text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}