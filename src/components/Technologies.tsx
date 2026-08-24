import {
  CSS,
  Git,
  HTML,
  JavaScript,
  NextJs,
  ReactIcon,
  TailwindCSS,
  TypeScript,
} from "./ui/icons";

const techMap = [
  {
    id: 1,
    label: "TypeScript",
    icon: TypeScript,
  },
  {
    id: 2,
    label: "React",
    icon: ReactIcon,
  },
  {
    id: 3,
    label: "NextJs",
    icon: NextJs,
  },
  {
    id: 4,
    label: "TailwindCSS",
    icon: TailwindCSS,
  },
  {
    id: 5,
    label: "HTML 5",
    icon: HTML,
  },
  {
    id: 6,
    label: "JavaScript",
    icon: JavaScript,
  },
  {
    id: 7,
    label: "Git",
    icon: Git,
  },
  { id: 8, label: "CSS3", icon: CSS },
];

const Technologies = ({
  title,
  keys = ["React", "TypeScript", "TailwindCSS", "Git"],
}) => {
  const filteredList = [];

  keys.forEach((key) => {
    const tech = techMap.find((tech) => tech.label === key);
    filteredList.push(tech);
  });

  return (
    <section className="mt-8 flex flex-col gap-6">
      <h2 className="text-hero-description font-medium">{title}</h2>
      <div className="flex gap-4">
        {filteredList.map(({ id, label, icon: Icon }) => (
          <div
            className="text-white text-small font-medium flex flex-col items-center gap-2"
            key={id}>
            <Icon className="w-8 h-8" />
            <small>{label}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
