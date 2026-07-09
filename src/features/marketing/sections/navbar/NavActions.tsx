import { Button } from "@/components/ui/button";

export function NavActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Button
        variant="ghost"
        className="font-medium"
      >
        Log In
      </Button>

      <Button className="rounded-xl bg-indigo-600 px-6 hover:bg-indigo-700">
        Sign Up
      </Button>
    </div>
  );
}