import { HeroBadge } from "./HeroBadge";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  return (
    <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
      <HeroBadge />

      <h1
        className="
          mt-6
          text-4xl
          font-black
          leading-tight
          tracking-tight
          text-white

          sm:text-5xl

          lg:mt-8
          lg:max-w-[620px]
          lg:text-7xl
          xl:text-8xl
          lg:leading-[1.05]
        "
      >
        Build Your
        <br />
        Future,
        <br />

        <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
          Not Just Your
          <br />
          Resume.
        </span>
      </h1>

      <p
        className="
          mx-auto
          mt-6
          max-w-lg
          text-base
          leading-7
          text-slate-300

          sm:text-lg
          sm:leading-8

          lg:mx-0
          lg:mt-8
          lg:max-w-xl
        "
      >
        Industry-focused Oracle Fusion and Modern Software Development
        programs designed with live projects, AI-powered learning,
        expert mentors, placement assistance, and a next-generation
        student learning platform.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}