import { navigation } from "./navigation";

export function NavLinks() {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {navigation.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}