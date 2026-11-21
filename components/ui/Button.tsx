
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
  target?: "_blank" | "_self";
};

export default function Button({
  href,
  children,
  variant = "primary",
  download,
  target,
}: ButtonProps) {

  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-mono text-xs uppercase tracking-wide transition-all duration-300";

  const variants = {
    primary:
      "bg-lime text-ink hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(198,255,61,0.25)]",

    secondary:
      "border border-panel2 text-paper hover:border-lavender hover:text-lavender",
  };

  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
