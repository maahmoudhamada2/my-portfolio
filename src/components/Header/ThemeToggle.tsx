"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { Moon, Sun } from "../ui";

const ThemeToggle = ({ isSide }: { isSide: boolean }) => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <Button
      type="button"
      variantKey="outline"
      onClick={toggleTheme}
      className={
        isSide ? "lg:rounded-full lg:p-[0.4rem]" : "rounded-full p-[0.4rem]"
      }>
      {isDark ? <Sun /> : <Moon />}
      {isSide && (
        <span className="lg:hidden">{isDark ? "Light Mode" : "Dark Mode"}</span>
      )}
    </Button>
  );
};
export default ThemeToggle;
