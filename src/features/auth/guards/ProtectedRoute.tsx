import { Navigate, Outlet } from "react-router-dom";

import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute() {
  const {
    firebaseUser,
    appUser,
    loading,
  } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!firebaseUser) {
    return <Navigate to="/login" replace />;
  }

  /**
   * Firebase user exists but profile
   * is still loading or missing.
   */
  if (!appUser) {
    return <LoadingSpinner />;
  }

  return <Outlet />;
}