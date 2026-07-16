type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-[#2F5BFF]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#2F5BFF]">
      {children}
    </span>
  );
}