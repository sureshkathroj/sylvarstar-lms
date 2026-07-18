import heroIllustration from "@/assets/illustrations/hero_image_home_v3.png";

export function HeroImage() {
  return (
    <div className="relative flex items-center justify-end">
      {/* Background Glow */}
      <div
        className="
          absolute
          h-[520px]
          w-[520px]
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
          max-w-[900px]
          drop-shadow-[0_20px_80px_rgba(0,200,255,.25)]
          transition-transform
          duration-500
          hover:scale-[1.02]
        "
        draggable={false}
      />
    </div>
  );
}