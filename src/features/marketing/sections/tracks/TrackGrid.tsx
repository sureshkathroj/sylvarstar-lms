import { tracks } from "@/features/marketing/data/tracks";
import { TrackCard } from "./TrackCard";

export function TrackGrid() {
  return (
    <section className="container mx-auto px-6 pb-24">
      <div className="grid gap-8 md:grid-cols-2">
        {tracks.map((track) => (
          <TrackCard programs={0} key={track.id} {...track} />
        ))}
      </div>
    </section>
  );
}