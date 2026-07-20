import { useAuth } from "../hooks/useAuth";

export default function AuthTestPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-2">

        <h1 className="text-3xl font-bold">

          Auth Working ✅

        </h1>

        <p>

          Logged User:

          {user?.email ?? "Not Logged In"}

        </p>

      </div>
    </div>
  );
}