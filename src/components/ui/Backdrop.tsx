import { ClassValue } from "clsx";
import cn from "../../utils/cn";

const background = {
  solid: "bg-backdrop",
  transparent: "transparent",
};

interface BackdropProps {
  bgColor: keyof typeof background;
  className?: ClassValue | ClassValue[];
  onClick?: () => void;
}

const Backdrop = ({ bgColor, className, onClick }: BackdropProps) => {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      onClick={onClick}
      className={cn(
        "absolute top-0 left-0",
        "w-full h-screen",
        background[bgColor],
        className,
      )}></div>
  );
};

export default Backdrop;
