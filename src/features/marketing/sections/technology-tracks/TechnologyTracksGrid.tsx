import { tracks } from "@/features/marketing/data/tracks";
import { TechnologyTrackCard } from "./TechnologyTrackCard";

export function TechnologyTracksGrid() {
  return (
    <section className="container mx-auto px-6 pb-24">
      <div className="grid gap-8 md:grid-cols-2">
        {tracks.map((track) => (
          <TechnologyTrackCard
            key={track.id}
            track={track}
          />
        ))}
      </div>
    </section>
  );
}