import { Input } from "@/components/ui/input";

interface CourseSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CourseSearch({
  value,
  onChange,
}: CourseSearchProps) {
  return (
    <div className="max-w-sm">
      <Input
        placeholder="Search by name, email or phone..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}