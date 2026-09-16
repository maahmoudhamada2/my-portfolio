import { Code, User, Book, Target } from "../../../components/ui/icons";
import { Badge } from "../../../components/ui";
import cn from "../../../utils/cn";

const approachs = [
  {
    id: 1,
    title: "User First",
    description:
      "I focus on creating intuitive and meaningful user experiences",
    icon: User,
  },
  {
    id: 2,
    title: "Clean & Scalable",
    description:
      "I write maintainable code that stays organized as projects grow",
    icon: Code,
  },
  {
    id: 3,
    title: "Always Learning",
    description: "I keep improving by exploring new tools, patterns, and ideas",
    icon: Book,
  },
];
const MyApproach = () => {
  return (
    <section
      className={cn(
        "px-3.75 pt-5 pb-2",
        "flex flex-col gap-4.25 md:max-lg:col-span-full",
        "[background:var(--about-panel-bg)]",
        "border border-transparent shadow-about-panel-shadow",
        "rounded-[14px]",
      )}>
      <header className="flex items-center gap-6.25">
        <Target className="w-7.75 h-7.75 " />
        <h3>MY APPROACH</h3>
      </header>
      <div className="flex flex-col gap-6">
        {approachs.map(({ id, title, description, icon: Icon }) => (
          <article
            key={id}
            className={cn(
              "grid grid-cols-[57px_minmax(0,1fr)] gap-3 md:gap-5.5",
              "md:grid-cols-[72px_minmax(0,1fr)]",
              "bg-(image:--about-panel-item-bg)",
              "border border-panel-item-border rounded-[14px]",
              "shadow-about-panel-item-shadow",
            )}>
            <Badge layoutKey="icon" className="rounded-[14px]">
              <Icon className="w-7.75 h-7.75" />
            </Badge>
            <div className="flex flex-col justify-center gap-0.75">
              <h4 className="text-[16px] font-semibold">{title}</h4>
              <p className="text-[15px] text-text-muted wrap-anywhere">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyApproach;
