import { HeroBadge } from "./HeroBadge";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  return (
    <div className="max-w-2xl">
      <HeroBadge />

     <h1 className="mt-8 max-w-[620px] text-6xl font-black leading-[1.05] tracking-tight text-white lg:text-8xl">
  Build Your
  <br />
  Future,
  <br />
  <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
    Not&nbsp;Just&nbsp;Your
    <br />
    Resume.
  </span>
</h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
        Industry-focused Oracle Fusion and Modern Software Development
        programs designed with live projects, AI-powered learning,
        expert mentors, placement assistance and a next-generation
        student learning platform.
      </p>

      <HeroButtons />

      <HeroStats />
      
    </div>
    
  );
  
}