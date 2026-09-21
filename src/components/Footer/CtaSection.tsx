import cn from "../../utils/cn";
import { ChatBubble, Button } from "../ui";

const CtaSection = () => {
  return (
    <section
      className={cn([
        "flex flex-col items-center",
        "text-center text-balance",
      ])}>
      <h2 className="text-(length:--text-display) text-text-primary font-bold">
        Let's build something great
        <span
          className={cn([
            "inline-block",
            "ml-3",
            "w-2",
            "bg-brand aspect-square rounded-full ",
          ])}></span>
      </h2>
      <p className="text-text-secondary mt-0.75">
        Have an idea, a role, or a project in mind? i'd love to hear about it.
      </p>
      <Button
        type="button"
        variantKey="primary"
        className="mt-10 rounded-3xl min-w-60">
        Let's Talk <ChatBubble />
      </Button>
    </section>
  );
};

export default CtaSection;
