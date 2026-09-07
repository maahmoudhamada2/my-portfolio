import { ComponentProps, ReactNode } from "react";
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
    "[background:var(--anchor-secondary-bg)] border-2 border-transparent",
    "shadow-anchor-secondary-shadow",
    "hover:[background:var(--anchor-secondary-bg-hover)]",
    "hover:shadow-anchor-secondary-shadow-hover",
  ],

  outline: [
    "text-btn-outline-text",
    "border border-btn-outline-border",
    "hover:bg-btn-outline-bg-hover",
    "hover:text-btn-outline-text-hover",
    "hover:border-btn-outline-border-hover",
  ],
};

interface AnchorProps extends ComponentProps<"a"> {
  href: string;
  variantKey: keyof typeof variants;
  children: ReactNode;
}
const Anchor = ({ href, variantKey, children }: AnchorProps) => {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5",
        "px-2.5 py-2 md:px-4.5",
        "cursor-pointer rounded-lg text-[14px] font-semibold leading-none",
        variants[variantKey],
      )}>
      {children}
    </a>
  );
};

export default Anchor;
