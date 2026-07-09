import { HeroBadge } from "./HeroBadge";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  return (
    <div className="max-w-xl">

      <HeroBadge />

      <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-7xl">
        Learn Smarter.
        <br />
        Grow Faster.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
  Master modern technologies with AI-assisted learning,
  hands-on projects, live online classes, and expert mentors—
  all in one beautiful platform.
</p>

      <HeroButtons />

      <HeroStats />

    </div>
  );
}