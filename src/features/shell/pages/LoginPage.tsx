export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">

      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-3xl font-bold">
          Login
        </h1>

        <p className="mb-8 text-slate-500">
          Welcome back to SylvarStar LMS
        </p>

        <form className="space-y-5">

          <div>
            <label>Email</label>

            <input
              type="email"
              className="mt-1 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              className="mt-1 w-full rounded-lg border p-3"
            />
          </div>

          <button
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}