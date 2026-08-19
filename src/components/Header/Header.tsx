"use client";
import NavigationButtons from "./NavigationButtons";
import useHeaderMenu from "../../hooks/useHeaderMenu";
import { Logo, LogoSmall, Backdrop } from "../ui";
import Navbar from "./Navbar/Navbar";
import cn from "../../utils/cn";

const Header = () => {
  const { open, animate, toggleMenu, headerRef } = useHeaderMenu();
  return (
    <header
      ref={headerRef}
      className={cn(
        "relative z-1000 text-text-primary",
        "w-full h-30",
        "flex justify-between items-center",
        "px-6",
        "bg-(image:--header-bg)",
      )}>
      <span className=" z-10000 block lg:min-w-48 md:max-w-[18rem]">
        <Logo className=" w-full h-full max-md:hidden" />
        <LogoSmall className="w-20 h-20 md:hidden" />
      </span>
      <Navbar open={open} animate={animate} toggleMenu={toggleMenu} />
      {!open && <NavigationButtons isSide={false} toggleMenu={toggleMenu} />}
      {open && (
        <Backdrop
          className="lg:hidden"
          bgColor={"solid"}
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
