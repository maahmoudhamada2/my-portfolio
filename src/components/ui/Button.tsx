import { ReactNode } from "react";
import { ClassValue } from "clsx";
import cn from "../../utils/cn";

const variants = {
  primary: [
    "text-btn-primary-text",
    "bg-linear-to-br",
    "from-btn-primary-from",
    "to-btn-primary-to",
    "shadow-btn-primary",
    "rounded-lg",

    "hover:from-btn-primary-from-hover",
    "hover:to-btn-primary-to-hover",
    "hover:shadow-btn-primary-hover",
  ],
  secondary: [
    "bg-btn-secondary-bg",
    "text-btn-secondary-text",
    "border border-btn-secondary-border",
    "hover:bg-btn-secondary-bg-hover",
    "hover:text-btn-secondary-text-hover",
    "hover:border-btn-secondary-border-hover",
  ],
  outline: [
    "text-btn-outline-text",
    "border border-btn-outline-border",
    "hover:bg-btn-outline-bg-hover",
    "hover:text-btn-outline-text-hover",
    "hover:border-btn-outline-border-hover",
  ],
  icon: ["rounded-full", "p-0"],
};

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  variantKey: keyof typeof variants;
  className?: ClassValue | ClassValue[];
  onClick?: () => void;
}

const Button = ({
  type,
  children,
  className,
  variantKey,
  onClick,
}: ButtonProps) => {
  const baseStyle = [
    "inline-flex items-center justify-center gap-2",
    "px-[28px] py-[12px]",
    "rounded-lg",
    "font-medium",
    "transition-all duration-200",
    "cursor-pointer",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-[#A855F7]/50",
  ];
  return (
    <button
      onClick={onClick}
      className={cn(baseStyle, variants[variantKey], className)}
      type={type}>
      {children}
    </button>
  );
};
export default Button;
