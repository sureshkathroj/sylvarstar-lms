import { GraduationCap } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <GraduationCap className="h-5 w-5" />
      </div>

      <div>
        <h2 className="text-lg font-bold">
          SylvarStar
        </h2>

        <p className="text-xs text-muted-foreground">
          Oracle Fusion Learning
        </p>
      </div>
    </div>
  );
}