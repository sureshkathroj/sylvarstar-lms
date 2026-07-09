import { Button } from "@/components/ui/button";

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button size="lg">
        Get Started
      </Button>

      <Button variant="outline" size="lg">
        Explore Courses
      </Button>
    </div>
  );
}