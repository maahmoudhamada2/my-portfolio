import { Home, Projects, Skills, About, MenuClose, Button } from "../../ui";
import NavigationButtons from "../NavigationButtons";
import NavListItem from "./NavListItem";
import cn from "../../../utils/cn";

interface NavbarProps {
  open: boolean;
  animate: boolean;
  toggleMenu: () => void;
}

const Navbar = ({ animate, open, toggleMenu }: NavbarProps) => {
  const navListItems = [
    { id: 1, href: "/", label: "Home", icon: Home },
    { id: 2, href: "/projects", label: "Projects", icon: Projects },
    { id: 3, href: "/skills", label: "Skills", icon: Skills },
    { id: 4, href: "/about", label: "About", icon: About },
  ];

  return (
    <div
      className={cn(
        "fixed left-0 top-0 lg:static z-1000",
        "w-full sm:w-1/2 md:w-[47%] lg:w-auto h-screen lg:h-full",
        "flex flex-col items-start lg:flex-row lg:items-center",
        "ml-auto px-6 lg:pt-0",
        "max-lg:bg-(image:--header-bg) rounded-tr-[20px] rounded-br-[20px]",
        "-translate-x-full lg:translate-none lg:transition-none",
        animate && "transition-transform duration-300",
        open && "translate-x-0",
      )}>
      <div
        className={cn(
          "w-full h-30",
          "flex items-center justify-end",
          "lg:hidden",
        )}>
        <Button
          type="button"
          onClick={toggleMenu}
          variantKey="icon"
          className={[open ? "opacity-100" : "opacity-0"]}>
          <MenuClose className="w-8.5 h-8.5" />
        </Button>
      </div>
      <nav
        className={cn("z-200", "flex flex-col lg:flex-row", "pt-6.5 lg:pt-0")}>
        <ul className={cn("flex flex-col lg:flex-row gap-8", "text-nav-text")}>
          {navListItems.map((item) => (
            <NavListItem key={item.id} {...item} />
          ))}
        </ul>
      </nav>
      <div
        role="separator"
        className={cn(
          "w-full h-px lg:w-px lg:h-[30%]",
          "my-8 lg:ml-[3vw] lg:mr-[5vw]",
          "bg-separator",
        )}></div>
      <NavigationButtons isSide={true} toggleMenu={toggleMenu} />
    </div>
  );
};
export default Navbar;
