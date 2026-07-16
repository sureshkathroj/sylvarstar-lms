import { HeroBadge } from "./HeroBadge";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  return (
    <div className="max-w-xl">

      <HeroBadge />

      <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-6xl">
        Build Your Career in
        <br />
        Oracle Fusion {" "} &
        <br/>
        Modern Software Development
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
  Learn Oracle Fusion and modern software development from experienced industry professionals through classroom training, online sessions, live projects, AI-assisted development, and career mentoring.
</p>

      <HeroButtons />

      <HeroStats />

    </div>
  );
}