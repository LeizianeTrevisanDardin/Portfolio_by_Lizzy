 import {
  Coffee,
  CookingPot,
  Brush,
  BrainCircuit,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type Interest = {
  id: string;
  label: string;
  Icon: LucideIcon;
};

export const interests: Interest[] = [
  {
    id: "coffee",
    label: "Coffee lover",
    Icon: Coffee,
  },
  {
    id: "cooking",
    label: "Love cooking",
    Icon: CookingPot,
  },
  {
    id: "makeup",
    label: "Makeup lover",
    Icon: Brush,
  },
  {
    id: "filters",
    label: "Creating TikTok Filters",
    Icon: BrainCircuit,
  },
];