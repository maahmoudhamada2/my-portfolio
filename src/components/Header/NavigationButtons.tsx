import { Menu, ExternalLink, Button } from "../ui";
import ThemeToggle from "./ThemeToggle";
import cn from "../../utils/cn";

interface NavButtonsProps {
  isSide: boolean;
  toggleMenu: () => void;
}

const NavigationButtons = ({ isSide, toggleMenu }: NavButtonsProps) => {
  return (
    <div
      className={cn(
        "flex gap-4",
        isSide
          ? "w-full flex-col-reverse lg:flex-row lg:items-center"
          : "items-center lg:hidden",
      )}>
      <ThemeToggle isSide={isSide} />
      {!isSide && (
        <Button onClick={toggleMenu} variantKey="icon" type="button">
          <Menu className="w-8.5 h-8.5" />
        </Button>
      )}
      <Button
        variantKey="primary"
        type="button"
        className={!isSide && "hidden"}>
        Resume <ExternalLink />
      </Button>
    </div>
  );
};

export default NavigationButtons;
