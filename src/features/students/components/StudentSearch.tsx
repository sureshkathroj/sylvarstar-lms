import { Input } from "@/components/ui/input";

interface StudentSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StudentSearch({
  value,
  onChange,
}: StudentSearchProps) {
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