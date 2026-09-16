import cn from "../../../utils/cn";

const WorkFlowStep = ({ stepNumb, title, description }) => {
  return (
    <article
      className={cn(
        "grid grid-cols-[4rem_minmax(0,1fr)] gap-3 items-center",
        "lg:grid-cols-[5rem_minmax(0,1fr)]",
      )}>
      <span
        className={cn(
          "relative",
          "flex items-center justify-center",
          " aspect-square",
          "[background:var(--step-bg)] border-3 border-transparent rounded-full",
          "shadow-step-shadow",
          "font-bold text-[20px]",
        )}>
        {stepNumb}
      </span>
      <div>
        <h3 className="text-[18px] font-bold">{title}</h3>
        <p className="text-[14px] text-text-muted font-semibold">
          {description}
        </p>
      </div>
    </article>
  );
};

export default WorkFlowStep;
