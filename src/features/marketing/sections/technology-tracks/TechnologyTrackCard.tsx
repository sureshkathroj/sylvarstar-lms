import type { TechnologyTrack } from "@/features/marketing/types/track";
import { ArrowRight } from "lucide-react";

type Props = {
  track: TechnologyTrack;
};

export function TechnologyTrackCard({ track }: Props) {
  const Icon = track.icon;

  return (
    <article
      className={`rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        track.featured
          ? "border-indigo-500 bg-gradient-to-br from-indigo-600 to-violet-600 text-white"
          : "border-slate-200 bg-white"
      }`}
    >
      <Icon
        className={`h-12 w-12 ${
          track.featured
            ? "text-white"
            : "text-indigo-600"
        }`}
      />

      <h2 className="mt-6 text-2xl font-bold">
        {track.title}
      </h2>

      <p
        className={`mt-4 ${
          track.featured
            ? "text-indigo-100"
            : "text-slate-600"
        }`}
      >
        {track.description}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <span
          className={`text-sm ${
            track.featured
              ? "text-indigo-100"
              : "text-slate-500"
          }`}
        >
          {track.comingSoon
            ? "Coming Soon"
            : "Explore Track"}
        </span>

        <ArrowRight />
      </div>
    </article>
  );
}