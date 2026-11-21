
import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";
import {
  GithubIcon,
  LinkedinIcon,
} from "@/components/ui/BrandIcons";

import type { SocialLink } from "@/types/social";

export const socialLinks: SocialLink[] = [
  {
    id: "email",
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    Icon: Mail,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/LeizianeTrevisanDardin",
    Icon: GithubIcon,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leiziane-trevisan-dardin/",
    Icon: LinkedinIcon,
    external: true,
  },
];
