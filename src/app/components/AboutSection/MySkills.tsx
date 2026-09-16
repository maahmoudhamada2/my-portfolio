import {
  ReactIcon,
  HTML,
  CSS,
  JavaScript,
  TypeScript,
  TailwindCSS,
  NextJs,
  Git,
  Github,
  Charts,
  ArrowRight,
  More,
} from "../../../components/ui/icons";
import { Anchor, Badge } from "../../../components/ui";
import cn from "../../../utils/cn";

const MySkills = () => {
  const techList = [
    { id: 1, icon: HTML },
    { id: 2, icon: CSS },
    { id: 3, icon: JavaScript },
    { id: 4, icon: ReactIcon },
    { id: 5, icon: TypeScript },
    { id: 6, icon: TailwindCSS },
    { id: 7, icon: NextJs },
    { id: 8, icon: Git },
    { id: 9, icon: Github },
  ];
  return (
    <section
      className={cn(
        "flex flex-col gap-6",
        "px-7.75 py-5",
        "[background:var(--about-panel-bg)]",
        "border border-transparent rounded-[14px]",
      )}>
      <header className="flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <Charts className="w-7 h-7" />
          <h3>Technologies I work with</h3>
        </div>
        <Anchor href="#" variantKey="ghost">
          View All Skills <ArrowRight className="w-6 h-6" />
        </Anchor>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 ">
        {techList.map(({ id, icon: Icon }) => (
          <Badge key={id} layoutKey="icon" className={["aspect-auto py-3"]}>
            <Icon />
          </Badge>
        ))}
        <Badge layoutKey="icon" className={["aspect-auto py-3"]}>
          <More />
        </Badge>
      </div>
    </section>
  );
};

export default MySkills;
