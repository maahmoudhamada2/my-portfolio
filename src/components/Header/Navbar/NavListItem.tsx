import Link from "next/link";
import cn from "../../../utils/cn";

interface NavListItemProps {
  href: string;
  label: string;
  icon: React.ComponentType;
}

const NavListItem = ({ href, label, icon: Icon }: NavListItemProps) => {
  return (
    <li
      className={cn(
        "relative",
        "flex gap-2",
        "font-medium cursor-pointer",
        "hover:text-nav-text-hover hover:transition-colors hover:duration-400 hover:ease-in-out",
      )}>
      <Icon />
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default NavListItem;
