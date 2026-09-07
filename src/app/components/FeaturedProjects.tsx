import ProjectCard from "../../components/ProjectCard";
import cn from "../../utils/cn";

const FeaturedProjects = () => {
  return (
    <section
      className={cn(
        "flex flex-col items-center gap-8",
        "px-3 py-8",
        "[background:var(--section-bg)] text-text-primary",
      )}>
      <header className={cn("flex flex-col items-center")}>
        <h2 className="text-(length:--text-display) font-bold">
          Featured
          <span
            className={cn(
              "text-primary bg-(image:--text-section-title) bg-clip-text text-transparent",
            )}>
            {" "}
            Projects
          </span>
        </h2>
        <p
          className={cn(
            "max-w-155",
            "pt-4.5",
            "text-text-muted leading-[1.7] tracking-[-0.01rem] text-center font-medium",
          )}>
          Explore a curated selection of projects that blend thoughtful design,
          modern technology, and seamless user experiences.
        </p>
      </header>
      <div
        className={cn(
          "flex flex-wrap justify-center gap-4 items-center xl:flex-row",
          "w-full",
          "xl:py-12 gap-10",
        )}>
        <ProjectCard isFeatured={true} />
        <ProjectCard isFeatured={true} />
        <ProjectCard isFeatured={true} />
      </div>
    </section>
  );
};

export default FeaturedProjects;
