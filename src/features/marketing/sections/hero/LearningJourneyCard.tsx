import {
  BookOpen,
  Briefcase,
  Code2,
  Database,
  Layers3,
} from "lucide-react";

function Chip({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${color}`}
    >
      {children}
    </span>
  );
}

export function LearningJourneyCard() {
  return (
    <div
      className="
        relative
        w-full
        max-w-xl
        rounded-[32px]
        border
        border-[#E4EAF5]
        bg-white/90
        p-8
        backdrop-blur-xl
        shadow-[0_35px_80px_rgba(47,91,255,0.12)]
      "
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-[#64748B]">
            Learn • Build • Succeed
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#111827]">
            Choose Your Career Path
          </h2>
        </div>

        <div className="rounded-2xl bg-[#2F5BFF]/10 p-4">
          <Code2 className="h-8 w-8 text-[#2F5BFF]" />
        </div>
      </div>

      {/* Oracle */}

      <div className="rounded-2xl border border-[#E4EAF5] p-5">
        <div className="flex items-center gap-3">
          <Database className="h-6 w-6 text-[#2F5BFF]" />

          <h3 className="text-lg font-semibold text-[#111827]">
            Oracle Fusion Academy
          </h3>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Chip color="bg-blue-50 text-blue-700">
            HCM
          </Chip>

          <Chip color="bg-blue-50 text-blue-700">
            Finance
          </Chip>

          <Chip color="bg-blue-50 text-blue-700">
            SCM
          </Chip>

          <Chip color="bg-blue-50 text-blue-700">
            SQL
          </Chip>
        </div>
      </div>

      {/* Software */}

      <div className="mt-5 rounded-2xl border border-[#E4EAF5] p-5">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-[#2F5BFF]" />

          <h3 className="text-lg font-semibold text-[#111827]">
            Software Development Academy
          </h3>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Chip color="bg-green-50 text-green-700">
            AI Full Stack
          </Chip>

          <Chip color="bg-slate-100 text-slate-700">
            React
          </Chip>

          <Chip color="bg-slate-100 text-slate-700">
            Angular
          </Chip>

          <Chip color="bg-slate-100 text-slate-700">
            Java
          </Chip>

          <Chip color="bg-slate-100 text-slate-700">
            Python
          </Chip>
        </div>
      </div>

      {/* Bottom */}

      <div className="mt-8 flex items-center justify-between rounded-2xl bg-[#F7F9FC] px-5 py-4">
        <div className="flex items-center gap-3">
          <Layers3 className="h-6 w-6 text-[#2F5BFF]" />

          <div>
            <p className="text-sm text-[#64748B]">
              Training Modes
            </p>

            <h4 className="font-semibold text-[#111827]">
              Online & Classroom
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-green-600" />

          <div>
            <p className="text-sm text-[#64748B]">
              Career Support
            </p>

            <h4 className="font-semibold text-[#111827]">
              Resume + Mock Interviews
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}