import type { Enquiry } from "@/features/enquiries/types/enquiry.types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    studentSchema,
    type StudentFormValues,
} from "../schemas/student.schema";
import FormTextField from "@/shared/components/form/FormTextField";
import { studentService } from "../services/student.service";
import { enquiryService } from "@/features/enquiries/services/enquiry.service";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { Student } from "../types/student.types";


interface StudentFormProps {

    mode:
    | "create"
    | "convert"
    | "edit";

    enquiry?: Enquiry;

    student?: Student;

    onSuccess: () => void;

    onCancel: () => void;
}

export default function StudentForm({
    mode,
    enquiry,
    student,
    onSuccess,
    onCancel,
}: StudentFormProps) {

    const form = useForm<
        z.input<typeof studentSchema>,
        any,
        z.output<typeof studentSchema>
    >({
        resolver: zodResolver(studentSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            academy: "",
            mode: "",
            course: "",
            batch: "",
            trainer: "",
            admissionDate: "",
            fee: 0,
        },
    });
    useEffect(() => {

        if (
            mode === "convert" &&
            enquiry
        ) {

            form.reset({

                name: enquiry.name,
                email: enquiry.email,
                phone: enquiry.phone,
                academy: enquiry.academy,
                mode: enquiry.mode,

                course: "",
                batch: "",
                trainer: "",
                admissionDate: "",
                fee: 0,

            });

        }

        if (
            mode === "edit" &&
            student
        ) {

            form.reset({

                name: student.name,
                email: student.email,
                phone: student.phone,

                academy: student.academy,

                mode: student.mode,

                course: student.course,

                batch: student.batch,

                trainer: student.trainer,

                admissionDate: student.admissionDate,

                fee: student.fee,

            });

        }

    }, [
        mode,
        enquiry,
        student,
        form,
    ]);
    const onSubmit = async (values: StudentFormValues) => {
        try {

            if (mode === "edit" && student) {

                await studentService.updateStudent(
                    student.id,
                    values
                );

                toast.success("Student updated successfully.");

            } else {

                const studentId =
                    await studentService.createStudent({
                        ...values,
                        status: "active",
                    });

                if (mode === "convert" && enquiry) {
                    await enquiryService.convertEnquiry(
                        enquiry.id,
                        studentId
                    );
                }

                toast.success("Student created successfully.");
            }

            onSuccess();

        } catch (err) {

            console.error(err);

            toast.error(
                mode === "edit"
                    ? "Failed to update student."
                    : "Failed to create student."
            );
        }
    };
    return (

        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <div>
                <h3 className="text-lg font-semibold">
                    Basic Information
                </h3>

                <p className="text-sm text-muted-foreground">
                    Student contact details
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <FormTextField
                    control={form.control}
                    name="name"
                    label="Name"
                    placeholder="Enter student name"
                />

                <FormTextField
                    control={form.control}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter email"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <FormTextField
                    control={form.control}
                    name="phone"
                    label="Phone"
                    placeholder="Enter phone number"
                />

                <FormTextField
                    control={form.control}
                    name="academy"
                    label="Academy"
                    placeholder="Oracle Fusion"
                />
            </div>
            <FormTextField
                control={form.control}
                name="mode"
                label="Training Mode"
                placeholder="Online / Offline"
            />
            <div className="grid gap-4 md:grid-cols-2">
                <FormTextField
                    control={form.control}
                    name="course"
                    label="Course"
                    placeholder="Oracle HCM Technical"
                />

                <FormTextField
                    control={form.control}
                    name="batch"
                    label="Batch"
                    placeholder="Weekend Batch"
                />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <FormTextField
                    control={form.control}
                    name="trainer"
                    label="Trainer"
                    placeholder="Trainer Name"
                />

                <FormTextField
                    control={form.control}
                    name="fee"
                    label="Fee"
                    type="number"
                    placeholder="50000"
                />
            </div>
            <FormTextField
                control={form.control}
                name="admissionDate"
                label="Admission Date"
                type="date"
            />
            <div className="flex justify-end gap-2 pt-6">
                <Button
                    type="button"
                    variant="outline"
                    onClick={onCancel}
                >
                    Cancel
                </Button>

                <Button type="submit">
                    {mode === "create"
                        ? "Create Student"
                        : mode === "convert"
                            ? "Convert Student"
                            : "Update Student"}
                </Button>
            </div>
        </form>

    );
}