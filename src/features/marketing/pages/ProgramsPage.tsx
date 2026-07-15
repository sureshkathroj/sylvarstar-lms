import { TrackGrid } from "@/features/marketing/sections/tracks/TrackGrid";

export function ProgramsPage() {
  return (
    <main className="bg-slate-50">
      <section className="container mx-auto px-6 py-24">
        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
          Technology Tracks
        </span>

        <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-slate-900">
          Choose Your Technology Career Path
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Explore specialized learning tracks designed to help you build
          real-world skills and grow your career.
        </p>
      </section>

      <TrackGrid />
    </main>
  );
}