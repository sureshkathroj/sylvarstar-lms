import { Logo } from "../../../../components/shared/Logo";
import { NavLinks } from "./NavLinks";
import { NavActions } from "./NavActions";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">

        <Logo />

        <NavLinks />

        <NavActions />

        <MobileMenu />

      </div>
    </header>
  );
}