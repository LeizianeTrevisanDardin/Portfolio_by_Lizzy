
import type { LucideIcon } from "lucide-react";
import type { BrandIconProps } from "./hero";

export type SocialIcon =
  | LucideIcon
  | ((props: BrandIconProps) => React.JSX.Element);

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  Icon: SocialIcon;
  external?: boolean;
};
