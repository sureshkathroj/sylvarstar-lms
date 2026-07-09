type WhyChooseCardProps = {
  title: string;
  description: string;
};

export function WhyChooseCard({
  title,
  description,
}: WhyChooseCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl">
        ⭐
      </div>

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
}