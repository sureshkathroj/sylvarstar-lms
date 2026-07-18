import { Logo } from "@/components/shared/Logo";
import  Container  from "@/components/shared/Container";

import { FooterColumn } from "./FooterColumn";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Oracle Fusion", href: "/oracle-fusion" },
  { label: "Software Development", href: "/software-development" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const programs = [
  { label: "Oracle Fusion HCM", href: "#" },
  { label: "Oracle Financials", href: "#" },
  { label: "Oracle SCM", href: "#" },
  { label: "AI Full Stack", href: "#" },
];

const company = [
  { label: "Hyderabad, India", href: "#" },
  { label: "contact@sylvarstar.com", href: "#" },
  { label: "+91 XXXXX XXXXX", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <Container className="py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          <div className="max-w-sm">
            <Logo />

            <p className="mt-6 text-sm leading-7 text-slate-600">
              Building careers through industry-focused Oracle Fusion and
              Software Development programs with hands-on learning and
              real-world projects.
            </p>
          </div>

          <FooterColumn title="Quick Links" links={quickLinks} />

          <FooterColumn title="Programs" links={programs} />

          <FooterColumn title="Contact" links={company} />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} SylvarStar. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#">Privacy</a>

            <a href="#">Terms</a>

            <a href="#">LinkedIn</a>

            <a href="#">YouTube</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}