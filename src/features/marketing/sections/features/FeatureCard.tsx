import { Sparkles } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <Sparkles className="h-6 w-6 text-primary" />
      </div>

      <h3 className="mb-2 text-lg font-semibold">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}