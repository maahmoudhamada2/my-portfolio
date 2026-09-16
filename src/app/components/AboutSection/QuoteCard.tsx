import cn from "../../../utils/cn";
import { Quote } from "../../../components/ui/icons";

const QuoteCard = () => {
  return (
    <figure
      className={cn(
        "relative",
        "flex flex-col justify-center flex-1",
        "pl-20 pt-8.75 pr-6.25 pb-3.5",
        "[background:var(--about-panel-bg)] shadow-about-panel-shadow",
        "border border-transparent rounded-[14px]",
      )}>
      <Quote className="w-12 h-12 absolute left-6.25 top-6.25" />
      <blockquote className="text-[23px] font-semibold  text-text-secondary italic text-center">
        “ Thoughtful interfaces come from thoughtful decisions. ”
      </blockquote>
      <figcaption
        className={cn(
          "relative",
          "mt-4 pt-3.5",
          "text-text-muted text-[14px]",
          "before:absolute",
          "before:left-0 before:top-1",
          "before:w-12 before:h-0.5",
          "before:bg-brand ",
        )}>
        Personal Design Philosophy
      </figcaption>
    </figure>
  );
};

export default QuoteCard;
