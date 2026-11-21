
import { socialLinks } from "@/data/socials";

export default function HeroSocials() {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs text-muted">
        Also find me on
      </span>

      <div className="flex items-center gap-3">
        {socialLinks.map(({ id, label, href, Icon, external }) => (
          <a
            key={id}
            href={href}
            aria-label={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="text-muted transition-colors hover:text-lime"
          >
            <Icon size={17} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
