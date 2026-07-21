import PageHeader from "@/shared/components/layout/PageHeader";
import EmptyState from "@/shared/components/feedback/EmptyState";
import { Button } from "@/components/ui/button";

import { useStudents } from "../hooks/useStudents";
import StudentTable from "../components/StudentTable";

export default function StudentsPage() {
  const {
    students,
    loading,
  } = useStudents();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Students"
        description="Manage admitted students"
        actions={
          <Button>
            Create Student
          </Button>
        }
      />

      {loading && (
        <p>Loading students...</p>
      )}

      {!loading && students.length === 0 && (
        <EmptyState
          title="No Students"
          description="Students will appear here after admission."
        />
      )}

      {!loading && students.length > 0 && (
        <div>
          <StudentTable
  students={students}
  onEdit={(student) => {
    console.log("Edit", student);
  }}
  onToggleStatus={(student) => {
    console.log("Toggle", student);
  }}
/>

          {/* StudentTable will be added in the next step */}
        </div>
      )}
    </div>
  );
}