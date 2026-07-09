import {
  CalendarDays,
  BookOpen,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-indigo-100 blur-3xl opacity-70" />

      {/* Main Card */}

      <div className="relative w-full max-w-md rounded-3xl border bg-white p-8 shadow-2xl">

        <p className="text-xs text-slate-500">
          Welcome back 👋
        </p>

        <h3 className="mt-1 text-2xl font-bold">
          Today's Schedule
        </h3>

        <div className="mt-8 space-y-5">

          <div className="flex items-center gap-3">

            <BookOpen className="h-5 w-5 text-indigo-600" />

            <div className="flex-1">

              <p className="font-medium">
                React Masterclass
              </p>

              <p className="text-sm text-slate-500">
                10:00 AM – 11:30 AM
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Sparkles className="h-5 w-5 text-yellow-500" />

            <div className="flex-1">

              <p className="font-medium">
                AI Fundamentals
              </p>

              <p className="text-sm text-slate-500">
                2:00 PM – 3:30 PM
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <CalendarDays className="h-5 w-5 text-green-600" />

            <div className="flex-1">

              <p className="font-medium">
                Weekend Batch
              </p>

              <p className="text-sm text-slate-500">
                Saturday • 9 AM
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* Floating Card */}

      <div className="absolute left-4 -bottom-6 rounded-2xl border bg-white px-4 py-3 shadow-xl">

    <CheckCircle className="mb-2 h-5 w-5 text-green-600"/>

    <p className="text-xs text-slate-500">
        🎯 Career

    </p>

    <p className="font-semibold">
        Guidance
    </p>

</div>

      {/* Floating Card */}

      <div className="absolute -right-8 top-8 rounded-2xl border bg-white p-4 shadow-xl">

        <CalendarDays className="mb-2 h-6 w-6 text-indigo-600" />

        <p className="text-xs text-slate-500">
          New Batch
        </p>

        <p className="font-bold">
          Starts Monday
        </p>

      </div>

    </div>
  );
}