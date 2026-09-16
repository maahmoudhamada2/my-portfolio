import { Monitor, Cube, Lightning, Book } from "../../../components/ui/icons";
import cn from "../../../utils/cn";

const strengths = [
  {
    id: 1,
    title: "Clean UI",
    description: "Modern responsive interfaces",
    icon: Monitor,
  },
  {
    id: 2,
    title: "Reusable Code",
    description: "Component-based architecture",
    icon: Cube,
  },
  {
    id: 3,
    title: "Performance",
    description: "Fast and optimized experiences",
    icon: Lightning,
  },
  {
    title: "Continuous Learning",
    description: "Improving with every project",
    icon: Book,
  },
];

const KeyStrengths = () => {
  return (
    <div className="grid gap-4 xs:grid-cols-2 md:grid-cols-4 ">
      {strengths.map(({ title, description, icon: Icon, id }) => (
        <article
          key={id}
          className={cn(
            "[background:var(--practice-card-bg)]",
            "flex flex-col",
            "p-4 ",
            "rounded-xl border-2 border-practice-card-border",
          )}>
          <Icon className="w-9.5 h-9.5" />
          <h3 className={"mt-4 text-text-primary text-[18px] font-medium"}>
            {title}
          </h3>
          <p className="text-text-muted text-small">{description}</p>
        </article>
      ))}
    </div>
  );
};

export default KeyStrengths;
