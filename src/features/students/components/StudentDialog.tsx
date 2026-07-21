import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import type { Enquiry } from "@/features/enquiries/types/enquiry.types";

import StudentForm from "./StudentForm";

import type { Student } from "../types/student.types";

interface StudentDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;

    mode:
    | "create"
    | "convert"
    | "edit";

    enquiry?: Enquiry;

    student?: Student;

    onSuccess: () => void;
}

export default function StudentDialog({
    open,
    onOpenChange,
    mode,
    enquiry,
    student,
    onSuccess,
}: StudentDialogProps) {
    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent className="max-w-3xl">

                <DialogHeader>

                    <DialogTitle>
                       {mode === "create"
    ? "Create Student"
    : mode === "convert"
    ? "Convert Enquiry"
    : "Edit Student"}
                    </DialogTitle>

                </DialogHeader>

                <StudentForm
                    mode={mode}
                    enquiry={enquiry}
                    student={student}
                    onSuccess={onSuccess}
                    onCancel={() => onOpenChange(false)}
                />

            </DialogContent>
        </Dialog>
    );
}