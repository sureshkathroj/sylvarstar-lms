import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  ShieldCheck,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    label: "Live Projects",
  },
  {
    icon: Users,
    label: "Expert Trainers",
  },
  {
    icon: Award,
    label: "Certification Guidance",
  },
  {
    icon: BriefcaseBusiness,
    label: "Placement Support",
  },
  {
    icon: CalendarDays,
    label: "Weekend & Weekday",
  },
  {
    icon: ShieldCheck,
    label: "Lifetime Support",
  },
];

export function OracleBenefits() {
  return (
    <div className="mt-20 flex flex-wrap items-center justify-center gap-4">
      {benefits.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="
group
inline-flex
items-center
gap-3
rounded-full
border
border-white/10
bg-white/[0.04]
px-6
py-3.5
transition-all
duration-300

hover:-translate-y-1
hover:scale-105
hover:border-cyan-400/40
hover:bg-cyan-500/10
hover:shadow-lg
hover:shadow-cyan-500/20
"
        >
          <Icon className="h-6 w-6 text-cyan-400 transition group-hover:scale-110" />

          <span className="text-sm font-medium text-slate-200">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}