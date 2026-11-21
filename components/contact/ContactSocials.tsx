
import { socialLinks } from "@/data/socials";

export default function ContactSocials() {
  return (
    <div className="flex items-center gap-4">

      <div className="flex items-center gap-10">
        {socialLinks.map(({ id, label, href, Icon, external }) => (
          <a
            key={id}
            href={href}
            aria-label={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="
              flex items-center gap-2
              text-muted
              transition-colors
              hover:text-lime
            "
          >
            <Icon size={17} aria-hidden="true" />

            <span className="font-mono text-xs">
              {label}
            </span>
          </a>
        ))}
      </div>

    </div>
  );
}
