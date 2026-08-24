"use client";
import cn from "../../utils/cn";
import { Backdrop, Button } from "../../components/ui";
import { ProjectsExternal } from "../../components/ui";
import InfoCard from "./InfoCard";
import Technologies from "../../components/Technologies";

const HeroSection = () => {
  return (
    <section
      className={cn(
        "relative",
        "w-full h-auto min-h-screen ",
        "flex flex-col items-center md:flex-row gap-18",
        "px-6 py-8",
        'text-body bg-[url("/hero-bg-mobile.png")] md:bg-[url("/hero-bg-desktop.png")] bg-cover',
      )}>
      <Backdrop bgColor="solid" />
      <InfoCard />
      <div className={cn("w-full h-full ")}>
        <div
          className={cn(
            "relative z-20 h-full",
            "w-full md:max-w-140 h-full",
            "flex flex-col justify-center",
          )}>
          <h1 className="hero-title mt-3 bgColorAnimation ">
            Building Digital Experiences That Feel as Good as They Look.
          </h1>
          <p className=" mt-5 text-hero-description text-body font-medium">
            I build responsive, performant, and thoughtfully crafted web
            experiences with React and Next.js.
          </p>

          <div className="flex gap-4 mt-8">
            <Button type="button" variantKey="primary">
              <span className="max-lg:hidden">View My</span> Projects
              <ProjectsExternal />
            </Button>
            <Button type="button" variantKey="secondary">
              <span className="max-lg:hidden">More</span> About Me
            </Button>
          </div>
          <Technologies title={"TECH STACK"} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
