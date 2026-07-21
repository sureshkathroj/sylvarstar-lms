import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormTextFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues, any>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
};

export default function FormTextField<
  TFieldValues extends FieldValues
>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormTextFieldProps<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="space-y-2">
          <Label htmlFor={String(name)}>
            {label}
          </Label>

          <Input
            id={String(name)}
            type={type}
            placeholder={placeholder}
            {...field}
          />

          {fieldState.error && (
            <p className="text-sm text-destructive">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}