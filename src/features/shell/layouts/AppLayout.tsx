import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        <div className="p-6 text-xl font-bold text-blue-600">
          SylvarStar LMS
        </div>

        <nav className="space-y-2 px-4">
          <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-slate-100">
            Dashboard
          </button>

          <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-slate-100">
            My Courses
          </button>

          <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-slate-100">
            Profile
          </button>
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">

        <header className="flex h-16 items-center justify-between border-b bg-white px-8">

          <h1 className="text-xl font-semibold">
            Dashboard
          </h1>

          <div>
            User
          </div>

        </header>

        <main className="flex-1 p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
}