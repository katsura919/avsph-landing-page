import Link from "next/link";
import { Phone, Mail, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: "About Us", href: "/about" },
            { label: "How We Work", href: "#how-it-works" },
            { label: "Careers", href: "/careers" },
            { label: "Blog", href: "/blog" },
        ],
        services: [
            { label: "Admin Support", href: "#services" },
            { label: "Customer Service", href: "#services" },
            { label: "Bookkeeping", href: "#services" },
            { label: "Web Development", href: "#services" },
        ],
        resources: [
            { label: "FAQs", href: "/faqs" },
            { label: "Savings Calculator", href: "/savings-calculator" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Contact Us", href: "#contact" },
        ],
    };

    const socialLinks = [
        { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
        { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
        { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
        { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    ];

    return (
        <footer
            style={{
                background: "var(--primary)",
                color: "rgba(255, 255, 255, 0.8)",
            }}
        >
            <div className="container py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="40" height="40" rx="8" fill="#1E3A5F" />
                                <path
                                    d="M12 28L20 12L28 28"
                                    stroke="#00B4D8"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <circle cx="20" cy="22" r="3" fill="#F5A623" />
                            </svg>
                            <div>
                                <span className="text-xl font-bold text-white block leading-tight">
                                    Advanced
                                </span>
                                <span
                                    className="text-sm font-medium leading-tight"
                                    style={{ color: "var(--secondary-light)" }}
                                >
                                    Virtual Staff
                                </span>
                            </div>
                        </Link>
                        <p className="mb-6 max-w-sm">
                            Your trusted partner for premium virtual staffing solutions.
                            We connect businesses with exceptional talent from our top 1% pool.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                                    style={{ background: "rgba(255, 255, 255, 0.05)" }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div
                    className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
                    style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                >
                    <div className="flex flex-wrap justify-center md:justify-start gap-6">
                        <a
                            href="tel:+13183929582"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            +1 (318) 392-9582
                        </a>
                        <a
                            href="mailto:info@advancedvirtualstaff.com"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            info@advancedvirtualstaff.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div
                className="py-4"
                style={{ background: "rgba(0, 0, 0, 0.2)" }}
            >
                <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© {currentYear} Advanced Virtual Staff. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
