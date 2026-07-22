import { useAuth } from "@/features/auth/hooks/useAuth";

import AdminDashboard from "./AdminDashboard";
import StudentDashboard from "./StudentDashboard";

import { USER_ROLES } from "@/features/users/constants/roles";

export default function DashboardPage() {
  const { appUser } = useAuth();

  switch (appUser?.role) {
    case USER_ROLES.STUDENT:
      return <StudentDashboard />;

    case USER_ROLES.ADMIN:
    case USER_ROLES.SUPER_ADMIN:
      return <AdminDashboard />;

    default:
      return <AdminDashboard />;
  }
}