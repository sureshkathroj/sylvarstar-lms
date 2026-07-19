import {
  Boxes,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Users,
} from "lucide-react";

function OrbitBadge({
  icon: Icon,
  label,
  className,
}: {
  icon: React.ElementType;
  label: string;
  className: string;
}) {
  return (
    <div
      className={`absolute flex h-20 w-20 flex-col items-center justify-center rounded-full border border-cyan-400/30 bg-[#0B1D3A]/90 backdrop-blur-xl ${className}`}
    >
      <Icon className="h-8 w-8 text-cyan-400" />
      <span className="mt-1 text-xs font-semibold text-white">
        {label}
      </span>
    </div>
  );
}

export function OracleIllustration() {
  return (
    <div className="mt-10 flex justify-center">
      <div className="relative h-[500px] w-full max-w-[900px]">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

        {/* Orbit */}
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

        <div className="absolute left-1/2 top-1/2 h-[260px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

        {/* Center Card */}
        <div className="absolute left-1/2 top-1/2 flex h-[260px] w-[340px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[36px] border border-cyan-400/20 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,.15)]">
          <div className="text-4xl font-black tracking-wide text-red-500">
            ORACLE
          </div>

          <div className="mt-2 text-2xl font-semibold text-white">
            Fusion Cloud
          </div>

          <Cloud className="mt-6 h-16 w-16 text-cyan-400" />

          <div className="mt-6 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-2 text-sm text-cyan-300">
            One Platform • Four Career Paths
          </div>
        </div>

        {/* Orbit Nodes */}
        <OrbitBadge
          icon={Users}
          label="HCM"
          className="left-[18%] top-[18%]"
        />

        <OrbitBadge
          icon={BriefcaseBusiness}
          label="ERP"
          className="right-[18%] top-[18%]"
        />

        <OrbitBadge
          icon={Boxes}
          label="SCM"
          className="left-[18%] bottom-[18%]"
        />

        <OrbitBadge
          icon={Code2}
          label="TECH"
          className="right-[18%] bottom-[18%]"
        />
      </div>
    </div>
  );
}