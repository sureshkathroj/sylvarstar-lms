import { ArrowRight } from "lucide-react";

export function OracleCTA() {
  return (
    <div className="mt-20 text-center">
       <h3 className="text-3xl font-bold text-white">
    Ready to Become an Oracle Professional?
  </h3>

  <p className="mt-3 text-slate-400">
    Join industry-focused Oracle Fusion training designed to help you build real-world skills.
  </p>
      <button
        className="
group
inline-flex
items-center
rounded-2xl
bg-cyan-500
px-8
py-4
text-lg
font-semibold
text-white

shadow-lg
shadow-cyan-500/20

transition-all
duration-300

hover:-translate-y-1
hover:scale-105
hover:bg-cyan-400
hover:shadow-[0_25px_60px_rgba(34,211,238,.35)]
"
      >
        Explore Oracle Programs

        <ArrowRight
          className="
    ml-3
    h-5
    w-5
    transition-transform
    duration-300
    group-hover:translate-x-2
  "
        />
      </button>
    </div>
  );
}