import cn from "../../utils/cn";
import { Logo } from "../ui";
import { Location, Contact } from "../ui/icons";
const Brand = () => {
  return (
    <div
      className={cn([
        "relative",
        "flex flex-col gap-3 max-md:items-center",
        "max-lg:row-span-2",
        "md:pt-25",
        "text-text-secondary",
      ])}>
      <span
        className={cn([
          "md:absolute md:-top-2 md:-left-3",
          "block",
          "w-full max-w-68",
        ])}>
        <Logo className="w-full h-full" />
      </span>
      <div className="flex gap-3">
        <Location className="stroke-brand" />
        <p>Alexandria, Egypt</p>
      </div>
      <div className="flex gap-3">
        <Contact className="stroke-brand" />
        <p>maahmoud.hamada@hotmail.com</p>
      </div>
    </div>
  );
};

export default Brand;
