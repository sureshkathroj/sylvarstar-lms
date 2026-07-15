import { navigation } from "../../config/navigation";
import { NavLink } from "react-router-dom";

export function NavLinks() {
  return (
    <nav className="hidden lg:flex gap-8">
      {navigation.map((item) => (
        <NavLink
          key={item.label}
          to={item.href}
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-indigo-600"
              : "text-slate-600 hover:text-indigo-600"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}