
import ContactSocials from "@/components/contact/ContactSocials";

export default function ContactLinks() {
    return (
 <div>
             {/* TITLE */}
             <h2
                id="about-title"
                className="mb-4 font-display text-3xl font-medium text-paper">
                    Let's work together.
            </h2>
            {/* DESCRIPTION */}
            <p className="max-w-sm text-xs leading-[1.7] text-paper/80">
                Open to projects, collaborations, and software development
opportunities.
            </p>

            {/* ACTION */}
             <div className="mt-5">
                < ContactSocials />
               
                </div>
             </div>
    );
}
