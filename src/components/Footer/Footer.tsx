"use client";
import cn from "../../utils/cn";
import { Anchor, Button, ChatBubble, Logo } from "../ui";
import {
  ArrowRight,
  Contact,
  Github,
  Home,
  LinkedIn,
  Location,
  Twitter,
} from "../ui/icons";
import Brand from "./Brand";
import CtaSection from "./CtaSection";
import NavigateLinks from "./NavigateLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="min-h-100 px-4.5 py-12.5 bg-footer-bg">
      <CtaSection />
      <div
        role="separator"
        className="filter-[drop-shadow(2px_4px_12px_var(--brand))]  w-full h-0.5 bg-linear-[90deg] from-transparent from-0% via-brand via-50% to-transparent to-100% mt-10 mb-16"></div>
      <div
        className={cn([
          "grid grid-cols-1 justify-items-center items-end gap-10",
          "md:grid-cols-2 lg:grid-cols-3",
          "px-6.5",
          "text-text-primary",
        ])}>
        <Brand />
        <NavigateLinks />
        <SocialLinks />
      </div>
      <div
        role="separator"
        className="filter-[drop-shadow(2px_4px_12px_var(--brand))]  w-full  h-0.5 bg-linear-[90deg] from-transparent from-0% via-brand via-50% to-transparent to-100% mt-12 mb-10"></div>
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between px-6">
        <small className="text-text-secondary">
          © {new Date().getFullYear()} Mahmoud Hamada.
        </small>
        <Button
          variantKey="outline"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top <ArrowRight className="w-6 h-6 rotate-270" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
