import { navigation } from "./navigation";

export function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}