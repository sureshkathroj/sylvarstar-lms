import { Button } from "@/components/ui/button";

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10 pt-8">
      <Button
        size="lg"
        className="rounded-xl bg-indigo-600 px-8 hover:bg-indigo-700"
      >
        Book Free Demo
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="rounded-xl px-8"
      >
        Explore Programs
      </Button>
    </div>
  );
}