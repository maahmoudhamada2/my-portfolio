import { ReactNode } from "react";
import cn from "../../utils/cn";
import { ClassValue } from "clsx";

const layout = {
  icon: [
    "aspect-square",
    "bg-(image:--badge-default-bg)",
    "shadow-badge-default",
    "border-badge-default-border",
    "hover:bg-(image:--badge-default-bg-hover)",
    "hover:border-badge-default-border-hover",
  ],
  mixed: [
    "w-auto",
    "px-2.25 py-1.25",
    "text-xs font-bold leading-1 tracking-[0.09em] ",
    "[background:var(--badge-featured-bg)]",
    "border border-transparent rounded-lg",
    "text-badge-featured-text",
  ],
};

interface BadgeProps {
  layoutKey: keyof typeof layout;
  children?: ReactNode;
  className?: string | string[];
}

const Badge = ({ layoutKey, children, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "flex items-center justify-center gap-1.5",
        // "w-10.5",
        "border rounded-lg",
        layout[layoutKey],
        className,
      )}>
      {children}
    </span>
  );
};
export default Badge;
