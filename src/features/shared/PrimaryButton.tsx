import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({
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
        bg-[#2F5BFF]
        px-6
        py-3
        font-semibold
        text-white
        transition
        duration-300
        hover:bg-[#2447D9]
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}