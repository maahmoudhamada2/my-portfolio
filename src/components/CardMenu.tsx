"use client";
import { useState } from "react";
import cn from "../utils/cn";
import { ThreeDot } from "./ui";

const CardMenu = ({ className }) => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "View Project", href: "#" },
    { label: "View Code", href: "#" },
    { label: "Case Study", href: "#" },
    { label: "Copy Project Link", href: "#" },
  ];
  const toggleMenu = () => setOpen((prev) => !prev);
  return (
    <>
      <button
        onClick={toggleMenu}
        className={cn(
          "flex items-center justify-center",
          "w-9.5 h-9.5",
          "text-three-dot-text bg-three-dot-bg border border-three-dot-border rounded-lg",
          "cursor-pointer",
          "hover:text-three-dot-hover",
          "hover:border-three-dot-border-hover",
          "hover:bg-three-dot-bg-hover",
          className,
        )}>
        <ThreeDot />
      </button>
      {open && (
        <div
          className={cn(
            "z-20 absolute top-16.25 right-3.25",
            "min-w-45",
            "p-2",
            "bg-(image:--three-dot-list-bg) backdrop-blur-lg",
            "border border-three-dot-list-border rounded-[10px]",
            "shadow-three-dot-list-shadow",
          )}>
          <ul className="text-text-muted">
            {links.map((item, idx) => (
              <li
                key={idx}
                className={cn(
                  "flex flex-col gap-2.5",
                  "py-2.5 px-3",
                  "text-text-muted text-left leading-[1.2] font-medium",
                  "cursor-pointer rounded-lg",
                  "hover:bg-(image:--three-dot-list-item-bg-hover) ",
                )}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CardMenu;
