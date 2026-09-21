import { LinkedIn, Github, Twitter } from "../ui/icons";
import { Anchor } from "../ui";

const SocialLinks = () => {
  return (
    <section className="flex flex-col gap-2 max-lg:self-center">
      <h3 className="text-subheading font-semibold max-lg:hidden">Connect</h3>
      <div className="flex max-md:justify-center  gap-5">
        <Anchor
          variantKey="secondary"
          href="#"
          className="w-12 md:p-0 rounded-full aspect-square">
          <Github className="w-6 h-6" />
        </Anchor>
        <Anchor
          href="#"
          variantKey="secondary"
          className="w-12 md:p-0 aspect-square rounded-full">
          <LinkedIn />
        </Anchor>
        <Anchor
          href="#"
          variantKey="secondary"
          className="w-12 md:p-0 aspect-square rounded-full">
          <Twitter />
        </Anchor>
      </div>
    </section>
  );
};
export default SocialLinks;
