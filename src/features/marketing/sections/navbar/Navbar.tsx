import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { NavActions } from "./NavActions";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Logo />

        <NavLinks />

        <NavActions />

        <MobileMenu />
      </div>
    </header>
  );
}