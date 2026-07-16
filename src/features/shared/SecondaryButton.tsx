import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function SecondaryButton({
  className = "",
  children,
  ...props
}: Props) {
  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        border
        border-[#E4EAF5]
        bg-white
        px-6
        py-3
        font-semibold
        text-[#111827]
        transition
        hover:border-[#2F5BFF]
        hover:text-[#2F5BFF]
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}