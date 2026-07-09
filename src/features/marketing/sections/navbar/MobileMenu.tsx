import { Menu } from "lucide-react";

export function MobileMenu() {
  return (
    <button
      className="rounded-xl border p-2 lg:hidden"
      aria-label="Open Menu"
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}