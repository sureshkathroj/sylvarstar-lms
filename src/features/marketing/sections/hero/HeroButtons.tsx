import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroButtons() {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
      <Button
        size="lg"
        className="
          h-14
          rounded-xl
          bg-cyan-500
          px-8
          text-base
          font-semibold
          text-white
          hover:bg-cyan-400
        "
      >
        Explore Programs

        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="
          h-14
          rounded-xl
          border-slate-600
          bg-transparent
          px-8
          text-base
          text-white
          hover:border-cyan-400
          hover:bg-slate-800
        "
      >
        <PlayCircle className="mr-2 h-5 w-5" />

        Watch Demo
      </Button>
    </div>
  );
}