import { OracleTrackCard } from "./OracleTrackCard";
import { oracleTracks } from "./oracle.data";

export function OracleTracksGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2">
      {oracleTracks.map((track) => (
        <OracleTrackCard
          key={track.title}
          {...track}
        />
      ))}
    </div>
  );
}