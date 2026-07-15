import { TechnologyTracksHero } from "@/features/marketing/sections/technology-tracks/TechnologyTracksHero";
import { TechnologyTracksGrid } from "@/features/marketing/sections/technology-tracks/TechnologyTracksGrid";

export function ProgramsPage() {
  return (
    <main className="bg-slate-50">
      <TechnologyTracksHero />
      <TechnologyTracksGrid />
    </main>
  );
}