"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#how-it-works", label: "How We Work" },
        { href: "#why-us", label: "Why Choose Us" },
        { href: "#testimonials", label: "Testimonials" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "glass shadow-md py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="40" height="40" rx="8" fill="#0F2A4A" />
                        <path
                            d="M12 28L20 12L28 28"
                            stroke="#00B4D8"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <circle cx="20" cy="22" r="3" fill="#F5A623" />
                    </svg>
                    <div className="flex flex-col">
                        <span
                            className="text-lg font-bold leading-tight"
                            style={{ color: "var(--primary)" }}
                        >
                            Advanced
                        </span>
                        <span
                            className="text-sm font-medium leading-tight"
                            style={{ color: "var(--secondary)" }}
                        >
                            Virtual Staff
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium transition-colors hover:text-[var(--secondary)]"
                            style={{ color: "var(--foreground)" }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="tel:+13183929582" className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--muted)" }}>
                        <Phone className="w-4 h-4" />
                        +1 (318) 392-9582
                    </Link>
                    <Link href="#contact" className="btn-primary">
                        Book a Call
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden glass mt-2 mx-4 rounded-xl p-4">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium py-2 transition-colors hover:text-[var(--secondary)]"
                                style={{ color: "var(--foreground)" }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="btn-primary text-center mt-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book a Call
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
