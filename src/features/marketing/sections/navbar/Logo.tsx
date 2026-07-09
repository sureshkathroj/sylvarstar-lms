import { Sparkles } from "lucide-react";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
        <Sparkles className="h-5 w-5" />
      </div>

      <div>
        <h1 className="text-lg font-black tracking-tight text-slate-900">
          SylvarStar
        </h1>

        <p className="text-xs text-slate-500">
          AI Learning Platform
        </p>
      </div>
    </a>
  );
}