import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  programs: number;
  featured?: boolean;
  comingSoon?: boolean;
  icon: React.ElementType;
};

export function TrackCard({
  title,
  description,
  programs,
  featured,
  comingSoon,
  icon: Icon,
}: Props) {
  return (
    <div
      className={`group rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        featured
          ? "border-indigo-500 bg-gradient-to-br from-indigo-600 to-violet-600 text-white"
          : "border-slate-200 bg-white"
      }`}
    >
      <Icon
        className={`h-12 w-12 ${
          featured ? "text-white" : "text-indigo-600"
        }`}
      />

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p
        className={`mt-4 ${
          featured ? "text-indigo-100" : "text-slate-600"
        }`}
      >
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <span
          className={`text-sm ${
            featured ? "text-indigo-100" : "text-slate-500"
          }`}
        >
          {comingSoon ? "Coming Soon" : `${programs} Programs`}
        </span>

        <ArrowRight
          className={`transition-transform group-hover:translate-x-1 ${
            featured ? "text-white" : "text-indigo-600"
          }`}
        />
      </div>
    </div>
  );
}