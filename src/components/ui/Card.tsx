import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

interface CardSectionProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <div className={`p-6 pb-3 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <div className={`px-6 pb-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <div className={`border-t px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}