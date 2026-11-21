import Image from "next/image";
import { skills } from "@/data/skills";

export default function TechStack () {
    return (
    <div>
        {/* TITLE */}
        <h2 className="mb-4 font-display text-2xl font-medium text-paper">
            My stacks:
        </h2>
    
        {/* SKILLS GRID */}
        <div className="grid w-fit grid-cols-5 gap-3">

            {skills.map((skill) => (
                <div 
                    key={skill.id}
                    className="
                     group flex h-12 w-12
                     flex-col items-center justify-center
                     gap-1 rounded-md
                     border border-panel2
                     bg-panel
                     transition-all duration-300
                     hover:-translate-y-1
                     hover:border-lime/60
                     hover:bg-panel
                    "
        >
        {/* Technology Logo */}
        <div className="relative h-7 w-7">
            <Image
                src={skill.image}
                alt={skill.name}
                fill
                sizes="28px"
                className="object-contain"
                />
        </div>

        {/* TECHNOLOGY NAME */}
        <span className="
            font-mono text-[8px]
            text-paper
            transition-colors
            group-hover:text-lime
            ">
                {skill.name}
            </span>
        </div>
        ))}
        </div>
    </div>
    );
}