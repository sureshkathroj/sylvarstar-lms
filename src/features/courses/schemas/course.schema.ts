import { z } from "zod";

export const courseSchema = z.object({
  name: z.string().min(1, "Course name is required"),

  category: z.string().min(1, "Category is required"),

  description: z.string().optional(),

  duration: z.string().min(1, "Duration is required"),

  fee: z.coerce
    .number()
    .min(0, "Fee must be greater than or equal to 0"),

  mode: z.enum(["Online", "Offline", "Hybrid"], {
    message: "Mode is required",
  }),

  level: z.enum(["Beginner", "Intermediate", "Advanced"], {
    message: "Level is required",
  }),
});

export type CourseFormValues = z.infer<typeof courseSchema>;