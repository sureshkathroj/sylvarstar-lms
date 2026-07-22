import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { authService } from "@/features/auth/services/auth.service";
import { ROUTES } from "@/app/constants/routes";
import { navigation } from "../config/navigation";
import { USER_ROLES } from "@/features/users/constants/roles";

export default function AdminLayout() {
  const navigate = useNavigate();
  const { appUser } = useAuth();
  const handleLogout = async () => {
    try {
      await authService.logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    ].join(" ");

  const menu =
    navigation[appUser?.role ?? USER_ROLES.STUDENT] ?? [];



  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        <div className="border-b p-6">
          <div>
            <h1 className="text-xl font-bold text-blue-600">
              SylvarStar
            </h1>

            <p className="text-sm text-slate-500">
              Learning Management System
            </p>
          </div>
        </div>

        <nav className="space-y-6 p-4">
          {menu.map((section) => (
            <div key={section.title}>
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {section.title}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={navLinkClass}
                    >
                      <Icon className="h-4 w-4" />

                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex flex-1 flex-col">

        <header className="flex h-16 items-center justify-between border-b bg-white px-8">

          <div>
            <h2 className="text-lg font-semibold">
              Dashboard
            </h2>

            <p className="text-sm text-slate-500">
              Welcome back,
            </p>

            <h3 className="font-medium">
              {appUser?.displayName}
            </h3>
          </div>

          <Button
            variant="outline"
            onClick={handleLogout}
          >
            Logout
          </Button>

        </header>

        <main className="flex-1 p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
}