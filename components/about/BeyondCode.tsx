import {
    Coffee,
    CookingPot,
    Brush,
    BrainCircuit,
} from "lucide-react";

import { interests } from "@/data/interests";

export default function BeyondCode () {
    return (
        <div>

        {/* TITLE */}
            <h2 className="mb-5 font-display text-2xl font-medium text-paper">
                Beyond Code:
            </h2>

         {/* INTERESTS */}
         <ul className="flex flex-col gap-5">

            {interests.map(({ id, label, Icon}) => (
                <li
                    key={id}
                    className="group flex items-center gap-3">

                        {/* ICON */}
                        <Icon
                            size={22}
                            strokeWidth={1.8}
                            className="
                              shrink-0
                              text-lavender
                              transition-all duration-300
                              group-hover:scale-110
                              group-hover:text-lime

                            "
                            aria-hidden="true"
                        />

                        {/* LABEL */}
                        <span className="
                            text-xs
                            text-paper/90
                            transition-colors
                            group-hover:text-lime
                        ">
                            {label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}