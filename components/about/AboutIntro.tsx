import Button from "@/components/ui/Button"
import { ArrowUpRight } from "lucide-react";

export default function AboutIntro () {
    return (
        <div>
             {/* TITLE */}
             <h2
                id="about-title"
                className="mb-4 font-display text-4xl font-medium text-paper">
                    About me
            </h2>
            {/* DESCRIPTION */}
            <p className="max-w-sm text-xs leading-[1.7] text-paper/80">
                I’m a developer who loves  turning ideas into
                real products. I enjoy working on full-stack 
                applications, solving complex problems and 
                creating tools tha makes people’s lives easier. 
            </p>

            {/* ACTION */}
             <div className="mt-5">
                <Button
                    href="https://www.linkedin.com/in/leiziane-trevisan-dardin/"
                    variant="primary"
                >
                    MORE ABOUT ME
                    <ArrowUpRight size={13} />
                </Button>
                </div>
             </div>
    );
}
