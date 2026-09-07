import Image from "next/image";
import cn from "../utils/cn";
import {
  ExternalLink,
  Github,
  ReactIcon,
  Star,
  TailwindCSS,
  TypeScript,
} from "./ui/icons";
import { Anchor, Badge } from "./ui";
import CardMenu from "./CardMenu";

const ProjectCard = ({ isFeatured }) => {
  return (
    <article
      className={cn(
        "group",
        "w-full max-[600px]:max-w-[24rem] h-auto min-[600px]:max-w-216 xl:w-88",
        "flex flex-col min-[600px]:max-xl:flex-row ",
        "bg-(image:--project-card-bg) text-text-primary",
        "border-2 border-project-card-border rounded-2xl shadow-project-card-shadow",
        "hover:[background:var(--project-card-bg-hover)]",
        "hover:border-project-card-border-hover",
        "hover:shadow-project-card-shadow-hover",
        "transition-[border-color,box-shadow] duration-200 ease-in",
      )}>
      <header className="h-60 min-[600px]:h-auto min-[600px]:w-[50%] xl:w-full xl:h-68 p-2">
        <div
          className={cn(
            "relative",
            "flex items-center justify-center",
            "w-full h-full p-4",
            "rounded-lg border-4 border-pc-img-frame-border",
            "[background:var(--project-img-frame-glow)] ",
            "shadow-pc-img-frame",
          )}>
          <Image
            src="/invoice-screenshot.png"
            width="1600"
            height="900"
            className={cn(
              "w-[90%] h-auto",
              "rounded-xl",
              "group-hover:scale-110 transition-transform duration-300",
            )}
            alt="#"
          />
        </div>
      </header>
      <div
        className={cn(
          "relative",
          "flex flex-col",
          "min-[600px]:w-1/2 xl:w-auto",
          "px-4 py-3.5",
        )}>
        <div
          className={cn(
            "flex items-center min-h-7.5",
            isFeatured ? "justify-between" : "justify-end",
          )}>
          {isFeatured && (
            <Badge layoutKey="mixed">
              <Star />
              Featured
            </Badge>
          )}
          <CardMenu className="max-[600px]:hidden " />
        </div>
        <h2 className="font-bold text-subheading mt-4">Invoice App</h2>
        <p className="pt-2.5 text-text-muted text-[14px] leading-[1.7]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ad
        </p>
        <div className="flex gap-3 mt-5">
          <Badge layoutKey="icon">
            <ReactIcon />
          </Badge>
          <Badge layoutKey="icon">
            <TypeScript />
          </Badge>
          <Badge layoutKey="icon">
            <TailwindCSS />
          </Badge>
        </div>
        <div className="mt-auto pb-4 pt-8 flex gap-6  items-center">
          <div className="flex gap-4 items-center">
            <Anchor href="#" variantKey="secondary">
              <span className="max-[375px]:hidden">View</span> Code <Github />
            </Anchor>
            <Anchor href="#" variantKey="outline">
              <span className="max-[375px]:hidden">Live</span>
              Demo <ExternalLink />
            </Anchor>
          </div>
          <CardMenu className="min-[600px]:hidden" />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
