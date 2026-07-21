import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import type { Enquiry } from "@/features/enquiries/types/enquiry.types";

import StudentForm from "./StudentForm";

interface StudentDialogProps {
    open: boolean;

    onOpenChange: (open: boolean) => void;

    mode: "create" | "convert";

    enquiry?: Enquiry;

    onSuccess: () => void;
}

export default function StudentDialog({
    open,
    onOpenChange,
    mode,
    enquiry,
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
                            : "Convert Enquiry"}
                    </DialogTitle>

                </DialogHeader>

                <StudentForm

                    mode={mode}

                    enquiry={enquiry}

                    onSuccess={onSuccess}

                    onCancel={() =>
                        onOpenChange(false)
                    }

                />

            </DialogContent>
        </Dialog>
    );
}