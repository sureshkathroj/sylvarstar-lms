import heroIllustration from "@/assets/illustrations/hero_image_home_v3.png";

export function HeroImage() {
  return (
    <div
  className="
    relative
    flex
    justify-center
    lg:justify-end
  "
>
      {/* Background Glow */}
      <div
        className="
          absolute
          h-72
w-72
sm:h-96
sm:w-96
lg:h-[520px]
lg:w-[520px]
          rounded-full
          bg-cyan-500/20
          blur-[120px]
        "
      />

      {/* Hero Illustration */}
      <img
        src={heroIllustration}
        alt="SylvarStar Learning Platform"
        className="
  relative
  z-10
  w-full
  max-w-[320px]
  sm:max-w-[460px]
  md:max-w-[560px]
  lg:max-w-[720px]
  xl:max-w-[860px]
  drop-shadow-[0_20px_80px_rgba(0,200,255,.25)]
  transition-transform
  duration-500
  lg:hover:scale-[1.02]
"
        draggable={false}
      />
    </div>
  );
}