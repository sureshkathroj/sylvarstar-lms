import { HeroBadge } from "./HeroBadge";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  return (
    <div className="space-y-8">
      <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        <HeroBadge text="AI Powered Learning Platform" />
      </span>

      <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
        Learn Smarter.
        <br />
        Grow Faster.
      </h1>

      <p className="max-w-xl text-lg text-muted-foreground">
        Personalized courses, quizzes, progress tracking, certificates,
        and AI-assisted learning—all in one platform.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}