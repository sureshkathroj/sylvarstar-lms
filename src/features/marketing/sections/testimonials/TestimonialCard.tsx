type TestimonialCardProps = {
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
};

export function TestimonialCard({
  name,
  role,
  company,
  rating,
  review,
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className="mb-4 text-yellow-500">
        {"⭐".repeat(rating)}
      </div>

      <p className="mb-6 italic text-muted-foreground">
        "{review}"
      </p>

      <div>
        <h3 className="font-semibold">{name}</h3>

        <p className="text-sm text-muted-foreground">
          {role} • {company}
        </p>
      </div>
    </div>
  );
}