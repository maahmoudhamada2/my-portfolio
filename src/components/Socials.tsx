import { Facebook, Twitter, LinkedIn, Github } from "./ui/icons";
import cn from "../utils/cn";

const iconSize = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

interface SocialsProps {
  withBorder: boolean;
  size: keyof typeof iconSize;
}

const Socials = ({ withBorder = false, size }: SocialsProps) => {
  const socialIcons = [Facebook, Twitter, LinkedIn, Github];
  return (
    <ul className="flex justify-center gap-4 self-center">
      {socialIcons.map((Icon, idx) => (
        <li
          key={`icon-${idx + 1}`}
          className={cn(
            "cursor-pointer hover:text-brand hover:-translate-y-1.25 transition-all duration-200",
            withBorder &&
              "border-2 border-white rounded-full p-2 hover:border-brand-light",
          )}>
          <a>
            <Icon className={cn(iconSize[size])} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
