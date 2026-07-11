"use client";

import Link from "next/link";
import { useState } from "react";
import CommingSoonIcon from "../svgIcon/commingSoonIcon";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Online Radio", href: "/" },
    { label: "Rythm Connect", href: "/" },
    { label: "Marketplace", href: "/" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Home");

    return (
        <header className="mt-4 px-4 sm:px-6 lg:px-10">
            <div className="relative mx-auto max-w-[1650px]">
                {/* Navbar */}
                <div className="rounded-full bg-[#DA80801A] backdrop-blur-[91px]">
                    <nav className="flex items-center justify-between px-6 md:px-12 py-5">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 shrink-0">
                            <img src="/logo.svg" alt="" className="h-12 w-12 md:h-16 md:w-16" />
                        </Link>

                        {/* Desktop Nav */}
                        <ul className="hidden lg:flex items-center gap-10 font-inter text-lg font-bold">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={() => setActive(link.label)}
                                        className={
                                            active === link.label
                                                ? "text-[#BB483D]"
                                                : "text-white hover:text-[#C1543D]"
                                        }
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop Button */}
                        <div className="relative hidden lg:flex items-center">
                            <button className="rounded-full py-3 px-5 bg-gradient-to-r from-[#BB483D] to-[#BB483DCC] text-white">
                                Get the App
                            </button>

                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                                <div className="swing-tag">
                                    <CommingSoonIcon />
                                </div>
                            </div>
                        </div>

                        {/* Mobile Button */}
                        <button
                            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9"
                            onClick={() => setOpen(!open)}
                        >
                            <span
                                className={`h-0.5 w-6 bg-white transition-all ${open ? "translate-y-2 rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`h-0.5 w-6 bg-white transition-all ${open ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`h-0.5 w-6 bg-white transition-all ${open ? "-translate-y-2 -rotate-45" : ""
                                    }`}
                            />
                        </button>
                    </nav>
                </div>

                {/* Mobile Dropdown */}
                <div
                    className={`absolute top-full left-0 right-0 mt-3 z-50 lg:hidden transition-all duration-300 ${open
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                >
                    <div className="rounded-2xl bg-[#2A2033]/95 backdrop-blur-xl shadow-2xl border border-white/10 overflow-hidden">
                        <ul className="flex flex-col py-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={() => {
                                            setActive(link.label);
                                            setOpen(false);
                                        }}
                                        className={`block px-6 py-4 transition-colors ${active === link.label
                                                ? "text-[#BB483D] font-semibold"
                                                : "text-white hover:text-[#BB483D]"
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}

                            <div className="px-6 pt-3 pb-4">
                                <button className="w-full rounded-full py-3 bg-gradient-to-r from-[#BB483D] to-[#BB483DCC] text-white font-semibold">
                                    Get the App
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}