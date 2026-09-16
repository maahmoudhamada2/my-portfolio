import cn from "../../../utils/cn";
import WorkFlowCard from "./WorkFLowCard";
import { User } from "../../../components/ui/icons";
import { Badge } from "../../../components/ui";
import KeyStrengths from "./KeyStrengths";
import MySkills from "./MySkills";
import ContactCard from "./ContactCard";
import MyApproach from "./MyApproach";
import QuoteCard from "./QuoteCard";

const AboutSection = () => {
  return (
    <section
      className={cn(
        "flex flex-col",
        "lg:grid lg:grid-cols-[minmax(250px,400px)_1.5fr_1fr] gap-4.5",
        "min-h-screen",
        "px-4.5 py-4",
        "[background:var(--section-bg)] text-text-primary",
      )}>
      <header className="flex justify-between items-center col-span-full">
        <h2 className="text-text-primary text-heading font-bold">
          ABOUT <span className="text-brand">ME</span>
        </h2>
        <div className="flex items-center text-text-secondary text-[14px] max-md:hidden">
          <p>GET TO KNOW ME</p>
          <span className="mx-3 w-1 aspect-square bg-brand rounded-full"></span>
          <p>MORE THAN JUST CODE</p>
        </div>
      </header>
      <WorkFlowCard />
      <div className=" flex flex-col max-about-layout:col-span-2">
        <header className="flex flex-col">
          <Badge layoutKey="mixed" className="self-start">
            <User className="w-6.5 h-6.5" /> A BIT ABOUT ME
          </Badge>
          <h2 className="text-(length:--text-display) font-bold text-balance leading-[1.2] my-4.5">
            Turning Ideas Into {""}
            <span className="bg-(image:--text-section-title) bg-clip-text text-transparent ">
              Clean Web Experiences
            </span>
          </h2>
        </header>
        <div className="flex flex-col gap-5">
          <p className="text-text-secondary leading-7.75">
            I’m a front-end developer focused on building clean, responsive, and
            user-friendly web interfaces. I enjoy turning ideas into polished
            experiences using modern tools like React, Next.js, and TypeScript.
          </p>
          <p className="text-text-secondary leading-7.75 ">
            I’m continuously improving through hands-on practice, refining the
            details that make interfaces feel better to use, and learning with
            every build.
          </p>
          <KeyStrengths />
          <MySkills />
        </div>
      </div>
      <div
        className={cn(
          "grid gap-4.5",
          " md:grid-cols-2",
          "lg:grid-cols-3",
          "lg:max-about-layout:col-span-full",
          "xl:grid-cols-1",
        )}>
        <MyApproach />
        <QuoteCard />
        <ContactCard />
      </div>
    </section>
  );
};

export default AboutSection;
