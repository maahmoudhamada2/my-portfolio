import cn from "../../../utils/cn";
import {
  WorkFlowLabel,
  ExternalLink,
  Download,
} from "../../../components/ui/icons";
import Image from "next/image";
import { Anchor } from "../../../components/ui";
import WorkFlowStep from "./WorkFlowStep";

const steps = [
  {
    id: 1,
    numb: "01",
    title: "Understand",
    description: "Clarify the goal and what users need.",
  },
  {
    id: 2,
    numb: "02",
    title: "Design",
    description: "Shape the layout, flow, and interactions.",
  },
  {
    id: 3,
    numb: "03",
    title: "Build",
    description: "Create responsive, reusable components.",
  },
  {
    id: 4,
    numb: "04",
    title: "Refine",
    description: "Test across screens and polish the details.",
  },
];

const WorkFlowCard = () => {
  return (
    <section
      className={cn(
        "flex flex-col gap-4.5 md:max-lg:self-center",
        "md:max-lg:max-w-155",
        "pt-6.25 px-7.25 pb-4.5",
        "[background:var(--about-panel-bg)]",
        "border border-transparent rounded-[14px]",
      )}>
      <header className="flex flex-col gap-4.5">
        <div className="flex items-center gap-4 ">
          <WorkFlowLabel className="text-brand" />
          <p className="text-text-muted font-bold text-[14px] tracking-[2px]">
            HOW I WORK
          </p>
        </div>
        <h2 className="text-heading font-bold">
          From idea to
          <span
            className={cn(
              "bg-clip-text bg-linear-to-br",
              "from-[#b437ff] from-0%",
              " via-[#8242fc] via-42%",
              "to-[#2d82ff] to-100% text-transparent",
            )}>
            interface.
          </span>
        </h2>
        <div className="w-full h-auto relative [background:var(--work-flow-frame-bg)]">
          <Image src="/workflow-chart.png" alt="" width={1200} height={900} />
        </div>
      </header>
      <div
        className={cn(
          "flex flex-col gap-3.5 justify-around flex-1 relative",
          "before:absolute before:h-[80%] before:w-0.5",
          "before:bg-linear-0 before:from-[#8f36ff] before:from-0%",
          "before:to-[#2c7cff] before:to-100%",
          "before:left-7.5 lg:before:left-9.5 ",
        )}>
        {steps.map(({ numb, title, description }) => (
          <WorkFlowStep
            stepNumb={numb}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="flex flex-col gap-5 mt-auto">
        <Anchor href="#" variantKey="primary" className="justify-center gap-4">
          Explore Projects <ExternalLink className="w-7.5 h-7.5" />
        </Anchor>
        <Anchor
          href="#"
          variantKey="secondary"
          className="justify-center gap-4  ">
          Download Resume <Download className="w-7.5 h-7.5" />
        </Anchor>
      </div>
    </section>
  );
};

export default WorkFlowCard;
