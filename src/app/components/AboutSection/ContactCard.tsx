import { ArrowRight, Send } from "../../../components/ui/icons";
import { Anchor } from "../../../components/ui";
import cn from "../../../utils/cn";

const ContactCard = () => {
  return (
    <section
      className={cn(
        "relative",
        "flex flex-col justify-center gap-2 flex-1",
        "pl-26 pt-6.25 pr-7.5 pb-4.5",
        "[background:var(--about-panel-bg)]",
        "border border-transparent rounded-[14px]",
        "shadow-about-panel-shadow",
      )}>
      <header>
        <Send className="absolute top-6.25 left-5" />
        <h3 className="text-[21px] font-bold">Let’s Work Together</h3>
      </header>
      <div className="flex flex-col gap-3.75">
        <p className="text-text-secondary">
          Have a project in mind? Let’s build something clean and functional
          together.
        </p>
        <Anchor
          href="#"
          variantKey="secondary"
          className="justify-center py-2.25 text-[17px] rounded-[14px] gap-4.5">
          Get In Touch <ArrowRight className="w-5.25 h-5.25" />
        </Anchor>
      </div>
    </section>
  );
};
export default ContactCard;
