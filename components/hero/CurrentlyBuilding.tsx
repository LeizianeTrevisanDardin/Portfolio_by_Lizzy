import type { CurrentlyBuildingProps } from "../../types/hero";

export default function CurrentlyBuilding({ 
    message, 
    label = "Currently" ,
}: CurrentlyBuildingProps) {
    return (
        <aside
            aria-label="Currently professional Status"
            className="
            absolute
            -bottom-8
            right-0
            z-20
            w-64
            rounded-2xl
            border border-lavender/30
            bg-panel2
            p-4
            shadow-xl
            sm: right-8
            "
            >   
            
            <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 animated-blink rounded-full bg-lime"
                aria-hidden="true"                
            />

                <span className="font-mono text-[10px] text-lime">
                    {label}  
                </span>
            </div>

                <p className="text-xs leading-relaxed text=paper/90">
                {message}
                </p>
            </aside>
    );
}