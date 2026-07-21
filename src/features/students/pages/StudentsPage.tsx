import PageHeader from "@/shared/components/layout/PageHeader";
import EmptyState from "@/shared/components/feedback/EmptyState";
import { Button } from "@/components/ui/button";

import { useStudents } from "../hooks/useStudents";
import StudentTable from "../components/StudentTable";
import { Student } from "../types/student.types";
import { useState } from "react";
import StudentDialog from "../components/StudentDialog";
import { studentService } from "../services/student.service";
import { toast } from "sonner";
import StudentSearch from "../components/StudentSearch";
import AssignCourseDialog from "@/features/student-courses/components/AssignCourseDialog";

export default function StudentsPage() {
    const [search, setSearch] = useState("");
    const {
        students,
        loading,
        refresh,
    } = useStudents();
    const [

        selectedStudent,

        setSelectedStudent,

    ] =
        useState<Student>();
    const [

        dialogMode,

        setDialogMode,

    ] = useState<
        "create"
        | "edit"
    >("create");
    const [studentDialogOpen, setStudentDialogOpen] =
        useState(false);

    const [
        assignCourseOpen,
        setAssignCourseOpen,
    ] = useState(false);

    const filteredStudents = students.filter((student) => {

        const keyword = search.toLowerCase();

        return (
            student.name.toLowerCase().includes(keyword) ||
            student.email.toLowerCase().includes(keyword) ||
            student.phone.toLowerCase().includes(keyword)
        );

    });

    return (
        <div className="space-y-8">
            <PageHeader
                title="Students"
                description="Manage admitted students"
                actions={
                    <Button
                        onClick={() => {
                            setDialogMode("create");
                            setSelectedStudent(undefined);
                            setStudentDialogOpen(true);
                        }}
                    >
                        Create Student
                    </Button>
                }
            />
            <StudentSearch
                value={search}
                onChange={setSearch}
            />

            {!loading && students.length === 0 && (
                <EmptyState
                    title="No Students"
                    description="Students will appear here after admission."
                />
            )}

            {!loading &&
                students.length > 0 &&
                filteredStudents.length === 0 && (
                    <EmptyState
                        title="No Results"
                        description="No students match your search."
                    />
                )}

            {!loading && filteredStudents.length > 0 && (
                <div>
                    <StudentTable
                        students={filteredStudents}
                        onEdit={(student) => {
                            setDialogMode("edit");
                            setSelectedStudent(student);
                            setStudentDialogOpen(true);
                        }}
                        onToggleStatus={async (student) => {

                            await studentService.updateStudentStatus(
                                student.id,
                                student.status === "active"
                                    ? "inactive"
                                    : "active"
                            );

                            toast.success(
                                student.status === "active"
                                    ? "Student deactivated."
                                    : "Student activated."
                            );

                            await refresh();

                        }}
                        onAssignCourse={(student) => {

                            setSelectedStudent(student);

                            setAssignCourseOpen(true);

                        }}
                    />


                </div>
            )}
            <StudentDialog
                open={studentDialogOpen}
                onOpenChange={setStudentDialogOpen}
                mode={dialogMode}
                student={selectedStudent}
                onSuccess={async () => {
                    setStudentDialogOpen(false);
                    await refresh();
                }}
            />
            <AssignCourseDialog
                open={assignCourseOpen}
                onOpenChange={setAssignCourseOpen}
                student={selectedStudent}
                onSuccess={() => {
                    setAssignCourseOpen(false);
                    refresh();
                }}
            />
        </div>
    );
}