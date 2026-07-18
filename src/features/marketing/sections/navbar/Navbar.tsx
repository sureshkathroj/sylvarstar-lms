import { useEffect, useState } from "react";

import { Logo } from "../../../../components/shared/Logo";
import { NavLinks } from "./NavLinks";
import { NavActions } from "./NavActions";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Logo />

        <NavLinks />

        <NavActions />

        <MobileMenu />
      </div>
    </header>
  );
}