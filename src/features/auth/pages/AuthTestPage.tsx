import { useAuth } from "../hooks/useAuth";

export default function AuthTestPage() {
  const {
    loading,
    firebaseUser,
    appUser,
  } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-3">

        <h1 className="text-3xl font-bold">
          Auth Working ✅
        </h1>

        <p>
          Firebase:
          {firebaseUser?.email ?? "Not Logged In"}
        </p>

        <p>
          Role:
          {appUser?.role ?? "-"}
        </p>

        <p>
          Status:
          {appUser?.status ?? "-"}
        </p>

      </div>
    </div>
  );
}