import { Button } from "@/components/ui/button";

import StudentStatusBadge from "./StudentStatusBadge";
import type { Student } from "../types/student.types";

interface StudentTableProps {
  students: Student[];
  onEdit: (student: Student) => void;
  onToggleStatus: (student: Student) => void;
}

export default function StudentTable({
  students,
  onEdit,
  onToggleStatus,
}: StudentTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Course</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t">
              <td className="p-4">{student.name}</td>
              <td className="p-4">{student.course}</td>
              <td className="p-4">{student.phone}</td>

              <td className="p-4">
                <StudentStatusBadge
                  status={student.status}
                />
              </td>

              <td className="p-4">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(student)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onToggleStatus(student)}
                  >
                    {student.status === "active"
                      ? "Deactivate"
                      : "Activate"}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}