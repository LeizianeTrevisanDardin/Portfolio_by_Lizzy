import type { LucideIcon } from "lucide-react";

type ProjectCardProps = {
  symbol: string;
  name: string;
  icon?: LucideIcon;
  useCandleIcon?: boolean;
  status: "LIVE" | "SHIPPED" | "IN BUILD";
  description: string;
  stack: string[];
  href?: string;
};

function CandleGlyph() {
  return (
    <svg
      width="28"
      height="32"
      viewBox="0 0 28 32"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <line x1="5" y1="2" x2="5" y2="30" stroke="#9C93C4" strokeWidth="1" />
      <rect x="2" y="10" width="6" height="12" rx="1" fill="#C6FF3D" />

      <line x1="16" y1="6" x2="16" y2="26" stroke="#9C93C4" strokeWidth="1" />
      <rect x="13" y="14" width="6" height="8" rx="1" fill="#FF5C7A" />

      <line x1="24" y1="4" x2="24" y2="20" stroke="#9C93C4" strokeWidth="1" />
      <rect x="21" y="8" width="6" height="7" rx="1" fill="#C6FF3D" />
    </svg>
  );
}

const statusStyles: Record<ProjectCardProps["status"], string> = {
  LIVE: "bg-lime/10 text-lime border-lime/40",
  SHIPPED: "bg-lavender/10 text-lavender border-lavender/40",
  "IN BUILD": "bg-coral/10 text-coral border-coral/40",
};

export default function ProjectCard({
  symbol,
  name,
  icon: Icon,
  useCandleIcon = false,
  status,
  description,
  stack,
  href,
}: ProjectCardProps) {
  const content = (
    <>
      <div>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-muted">{symbol}</p>

            <h3 className="font-display text-xl font-medium text-paper">
              {name}
            </h3>
          </div>

          {useCandleIcon ? (
            <CandleGlyph />
          ) : Icon ? (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-panel2 bg-panel2 text-lime transition-colors group-hover:border-lime/40">
              <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
            </div>
          ) : null}
        </div>

        <span
          className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-wide ${statusStyles[status]}`}
        >
          {status}
        </span>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-panel2 px-2 py-1 font-mono text-[11px] text-lavender"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-h-[390px] flex-col justify-between rounded-2xl border border-panel2 bg-panel p-6 transition-all hover:-translate-y-1 hover:border-lime/50"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group flex min-h-[390px] flex-col justify-between rounded-2xl border border-panel2 bg-panel p-6 transition-all hover:-translate-y-1 hover:border-lime/50">
      {content}
    </div>
  );
}