import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { authService } from "@/features/auth/services/auth.service";

export default function AppLayout() {
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
    `block rounded-lg px-4 py-2 transition-colors ${isActive
      ? "bg-blue-600 text-white"
      : "text-slate-700 hover:bg-slate-100"
    }`;

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        <div className="border-b p-6">
          <h1 className="text-xl font-bold text-blue-600">
            SylvarStar LMS
          </h1>
        </div>

        <nav className="space-y-2 p-4">
          <NavLink
            to="/app/dashboard"
            className={navLinkClass}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/app/courses"
            className={navLinkClass}
          >
            My Courses
          </NavLink>

          <NavLink
            to="/app/profile"
            className={navLinkClass}
          >
            Profile
          </NavLink>
          <NavLink
            to="/app/enquiries"
            className={navLinkClass}
          >
            Enquiries
          </NavLink>
          <NavLink
            to="/app/students"
            className={navLinkClass}
          >
            Students
          </NavLink>
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
              Welcome, {appUser?.displayName}
            </p>
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