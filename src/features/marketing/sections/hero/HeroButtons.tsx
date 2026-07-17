import { Button } from "@/components/ui/button";

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10 pt-8">
      <Button
        size="lg"
        className="rounded-xl bg-indigo-600 px-8 hover:bg-indigo-700"
      >
        <a
          href="#contact"
          className="..."
        >Book My Free Demo</a>
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="rounded-xl px-8"
      >
        <a
          href="#programs"
          className="..."
        >Explore Programs</a>
      </Button>
    </div>
  );
}