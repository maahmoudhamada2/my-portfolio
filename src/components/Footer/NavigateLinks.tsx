import cn from "../../utils/cn";

const NavigateLinks = () => {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-subheading font-semibold max-md:hidden">Navigate</h3>
      <ul
        className={cn([
          "flex gap-3",
          "max-md:justify-center max-md:gap-6",
          "lg:flex-col",
          "text-[14px] text-text-secondary",
        ])}>
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </section>
  );
};

export default NavigateLinks;
