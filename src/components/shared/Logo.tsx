import { GraduationCap } from "lucide-react";

export default function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-3"
      aria-label="SylvarStar Home"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
        <GraduationCap className="h-6 w-6" />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          SylvarStar
        </h1>

        <p className="text-xs text-slate-500">
          Oracle Fusion Learning
        </p>
      </div>
    </a>
  );
}