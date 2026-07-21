import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Controller } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import FormTextField from "@/shared/components/form/FormTextField";

import {
    courseSchema,
    type CourseFormValues,
} from "../schemas/course.schema";

import { courseService } from "../services/course.service";
import type { Course } from "../types/course.types";

interface CourseFormProps {
    mode: "create" | "edit";
    course?: Course;
    onSuccess: () => void;
    onCancel: () => void;
}

export default function CourseForm({
    mode,
    course,
    onSuccess,
    onCancel,
}: CourseFormProps) {
    const form = useForm<
        z.input<typeof courseSchema>,
        any,
        z.output<typeof courseSchema>
    >({
        resolver: zodResolver(courseSchema),

        defaultValues: {
            name: "",
            category: "",
            description: "",
            duration: "",
            fee: 0,
            mode: "Online",
            level: "Beginner",
        },
    });

    useEffect(() => {
        if (mode === "edit" && course) {
            form.reset({
                name: course.name,
                category: course.category,
                description: course.description ?? "",
                duration: course.duration,
                fee: course.fee,
                mode: course.mode,
                level: course.level,
            });
        }
    }, [course, mode, form]);

    const onSubmit = async (values: CourseFormValues) => {
        try {
            if (mode === "edit" && course) {
                await courseService.updateCourse(course.id, values);

                toast.success("Course updated successfully.");
            } else {
                await courseService.createCourse(values);

                toast.success("Course created successfully.");
            }

            onSuccess();
        } catch (error) {
            console.error(error);

            toast.error(
                mode === "edit"
                    ? "Failed to update course."
                    : "Failed to create course."
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
                    Course Information
                </h3>

                <p className="text-sm text-muted-foreground">
                    Enter the course details below.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <FormTextField
                    control={form.control}
                    name="name"
                    label="Course Name"
                    placeholder="Oracle Fusion HCM Technical"
                />

                <FormTextField
                    control={form.control}
                    name="category"
                    label="Category"
                    placeholder="Oracle Fusion"
                />
            </div>

            <FormTextField
                control={form.control}
                name="description"
                label="Description"
                placeholder="Enter course description"
            />

            <div className="grid gap-4 md:grid-cols-2">
                <FormTextField
                    control={form.control}
                    name="duration"
                    label="Duration"
                    placeholder="3 Months"
                />

                <FormTextField
                    control={form.control}
                    name="fee"
                    label="Fee"
                    type="number"
                    placeholder="50000"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-medium">
                        Mode
                    </label>

                    <Controller
                        control={form.control}
                        name="mode"
                        render={({ field, fieldState }) => (
                            <>
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Mode" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="Online">Online</SelectItem>
                                        <SelectItem value="Offline">Offline</SelectItem>
                                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                                    </SelectContent>
                                </Select>

                                {fieldState.error && (
                                    <p className="text-sm text-destructive">
                                        {fieldState.error.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">
                        Level
                    </label>

                    <Controller
                        control={form.control}
                        name="level"
                        render={({ field, fieldState }) => (
                            <>
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Level" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="Beginner">Beginner</SelectItem>
                                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                                        <SelectItem value="Advanced">Advanced</SelectItem>
                                    </SelectContent>
                                </Select>

                                {fieldState.error && (
                                    <p className="text-sm text-destructive">
                                        {fieldState.error.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                </div>
            </div>

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
                        ? "Create Course"
                        : "Update Course"}
                </Button>
            </div>
        </form>
    );
}