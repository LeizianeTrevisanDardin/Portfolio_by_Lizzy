"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
      {
        label: "01. Projects",
        href: "#projects",
    },
    {
        label: "02. About",
        href: "#about",
    },
    {
        label: "03. Contact",
        href: "#contact",
    }
] as const;

export default function Header () {
const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative px-6 py-5 sm:px-10">
            <div className="mx-auto grid grid-cols-[1fr_auto_1fr] max-w-[1440px] items-center">

                {/* Logo */}
               <a
                href="#home"
                aria-label="LZ Dev - Home"
                className="flex items-center"
            >
            <Image
                src="/images/lz-logo.png"
                alt="LZ Dev logo"
                width={48}
                height={48}
                priority
                className="
                h-10 w-10
                object-contain
                transition-transform duration-300
                hover:scale-105
                sm:h-12 sm:w-12
                "
            />
            </a>

                {/* Navigation */}
                <nav aria-label="Main navigation"
                    className="hidden md:block"
                >
                    
                    <ul className="flex items-center gap-6">

                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="font-body text-sm text-paper transition-colors hover:text-lavender"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}

                    </ul>
                </nav>

                {/* Mobile Menu Btn */}
                <button
                    type="button"
                    onClick={() => setIsOpen((current) => !current)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    className="col-start-3 justify-self-end text-paper transition-colors hover:text-lavender md:hidden"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

            </div>

                {/* Mobile Menu Navigation */}
                {isOpen && (
                    <nav
                        id="mobile-navigation"
                        aria-label="Mobile Navigation"
                        className="absolute left-6 right-6 top-full z-50 rounded-xl border border-panel2 bg-panel p-5 shadow-xl md:hidden"
                >
                    <ul className="flex flex-col gap-5">
                        {navLinks.map((link) =>(
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block font-body text-sm text-paper transition-colors hover:text-lavender"
                                    >
                                        {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                )}
        </header>
    );
}