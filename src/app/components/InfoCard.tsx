import Socials from "../../components/Socials";
import { Button } from "../../components/ui";
import Image from "next/image";
import cn from "../../utils/cn";
import {
  Location,
  Phone,
  Contact,
  ChatBubble,
} from "../../components/ui/icons";

const InfoCard = () => {
  return (
    <section
      className={cn(
        "relative z-200",
        "w-full sm:w-[70%] md:w-auto",
        "bg-(image:--info-card-bg) bgColorAnimation",
        "text-white  shadow-info-card-shadow",
        "border border-info-card-border rounded-2xl",
        "flex flex-col items-center",
        "px-8 sm:px-15 py-8 md:px-6",
      )}>
      <header className="relative w-full flex flex-col items-center gap-4 ">
        <div className="relative w-[clamp(5rem,50vw,15rem)] aspect-square rounded-full">
          <Image
            src="/avatar-image.png"
            alt="Info card profile picture"
            fill
            className="rounded-full"
          />
        </div>

        <h1 className="text-[28px] font-bold text-nowrap">Mahmoud Hamada</h1>
      </header>
      <div className="w-full flex flex-col gap-4 mt-8 font-medium">
        <div className="flex gap-2">
          <Location className="stroke-brand-light" />
          <p>Alexandria, Egypt</p>
        </div>
        <div className="flex gap-2">
          <Phone className="stroke-brand-light" />
          <p>+02123456789</p>
        </div>
        <div className="flex gap-2">
          <Contact className="stroke-brand-light" />
          <p className="max-sm:wrap-anywhere">maahmoud.hamada@hotmail.com</p>
        </div>
        <div className="w-full h-px bg-separator mt-4 mb-8"></div>
      </div>
      <footer className="w-full flex flex-col gap-7">
        <Socials withBorder size="md" />
        <Button type="button" variantKey="outline">
          Let's Talk
          <ChatBubble />
        </Button>
      </footer>
    </section>
  );
};
export default InfoCard;
