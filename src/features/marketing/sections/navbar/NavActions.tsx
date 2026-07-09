import { Button } from "@/components/ui/button";

export function NavActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Button variant="ghost">
        Login
      </Button>

      <Button>
        Get Started
      </Button>
    </div>
  );
}