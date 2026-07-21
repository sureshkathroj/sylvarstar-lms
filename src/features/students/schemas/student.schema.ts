import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z.email("Invalid email"),

  phone: z.string().min(10),

  academy: z.string().min(1),

  mode: z.string().min(1),

  course: z.string().min(1),

  batch: z.string().min(1),

  trainer: z.string().min(1),

  admissionDate: z.string().min(1),

  fee: z.coerce.number().min(0),
});

export type StudentFormValues =
  z.output<typeof studentSchema>;