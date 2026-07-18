import { useEffect, useState } from "react";

import { Logo } from "../../../../components/shared/Logo";
import { NavActions } from "./NavActions";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
    sticky
    top-0
    z-50
    transition-all
    duration-300

    ${
      scrolled
        ? "border-b border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-sm"
        : "bg-white"
    }
  `}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-8">
        <Logo />

        <NavLinks />

        <NavActions />

        <MobileMenu />
      </div>
    </header>
  );
}