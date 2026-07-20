import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import LoadingSpinner from "@/shared/components/loading/LoadingSpinner";

export default function ProtectedRoute() {
  const { firebaseUser, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!firebaseUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}