import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export function Card({
  className = "",
  children,
  ...props
}: Props) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-[#E4EAF5]
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}