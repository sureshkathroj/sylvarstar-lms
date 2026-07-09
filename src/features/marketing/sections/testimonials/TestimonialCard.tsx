import { Star } from "lucide-react";

type Props = {
  name: string;
  role: string;
  company: string;
  review: string;
};

export function TestimonialCard({
  name,
  role,
  company,
  review,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="mb-6 flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="leading-7 text-slate-600">
        "{review}"
      </p>

      <div className="mt-8 flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
          {name.charAt(0)}
        </div>

        <div>

          <h3 className="font-semibold">
            {name}
          </h3>

          <p className="text-sm text-slate-500">
            {role} • {company}
          </p>

        </div>

      </div>

    </div>
  );
}