import {
  CheckCircle2,
  FolderGit2,
  GraduationCap,
} from "lucide-react";

export function WhyChooseDashboard() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Main Card */}

      <div className="w-full max-w-xl rounded-[32px] border border-[#E4EAF5] bg-white p-8 shadow-xl">

        <span className="text-sm font-semibold text-[#64748B]">
          Student Journey
        </span>

        <h3 className="mt-2 text-3xl font-bold text-[#111827]">
          Become Job Ready
        </h3>

        <div className="mt-8 space-y-5">

          {[
            "Learn Modern Technologies",
            "Build Live Projects",
            "GitHub Portfolio",
            "Mock Interviews",
            "Career Ready",
          ].map((step) => (
            <div
              key={step}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />

              <span className="font-medium text-[#111827]">
                {step}
              </span>
            </div>
          ))}

        </div>

        <div className="mt-10 grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-[#F7F9FC] p-4">
            <FolderGit2 className="h-6 w-6 text-[#2F5BFF]" />

            <p className="mt-3 text-sm text-[#64748B]">
              Portfolio
            </p>

            <h4 className="font-semibold">
              GitHub Projects
            </h4>
          </div>

          <div className="rounded-2xl bg-[#F7F9FC] p-4">
            <GraduationCap className="h-6 w-6 text-[#22C55E]" />

            <p className="mt-3 text-sm text-[#64748B]">
              Interview
            </p>

            <h4 className="font-semibold">
              Mock Sessions
            </h4>
          </div>

        </div>

      </div>

      {/* Floating Card Top */}

      {/* <div className="absolute -right-6 top-10 rounded-3xl border border-[#E4EAF5] bg-white p-5 shadow-lg">

        <Briefcase className="h-8 w-8 text-[#2F5BFF]" />

        <p className="mt-3 text-sm text-[#64748B]">
          Placement
        </p>

        <h4 className="font-bold">
          Support
        </h4>

      </div> */}

      {/* Floating Card Bottom */}

      {/* <div className="absolute -bottom-6 -left-6 rounded-3xl border border-[#E4EAF5] bg-white p-5 shadow-lg">

        <CheckCircle2 className="h-8 w-8 text-[#22C55E]" />

        <p className="mt-3 text-sm text-[#64748B]">
          Learning
        </p>

        <h4 className="font-bold">
          Online + Classroom
        </h4>

      </div> */}

    </div>
  );
}