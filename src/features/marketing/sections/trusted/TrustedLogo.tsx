type TrustedLogoProps = {
  name: string;
};

export function TrustedLogo({ name }: TrustedLogoProps) {
  return (
    <div className="flex h-16 items-center justify-center rounded-lg border bg-white px-6 shadow-sm transition hover:shadow-md">
      <span className="text-sm font-semibold tracking-wide text-muted-foreground">
        {name}
      </span>
    </div>
  );
}