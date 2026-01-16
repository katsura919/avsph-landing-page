import Link from "next/link";

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
                            {/* Social Links */}
                            {[
                                {
                                    name: "Facebook",
                                    icon: (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    ),
                                },
                                {
                                    name: "LinkedIn",
                                    icon: (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                            <rect x="2" y="9" width="4" height="12" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    ),
                                },
                                {
                                    name: "Twitter",
                                    icon: (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                        </svg>
                                    ),
                                },
                                {
                                    name: "Instagram",
                                    icon: (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </svg>
                                    ),
                                },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
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
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            +1 (318) 392-9582
                        </a>
                        <a
                            href="mailto:info@advancedvirtualstaff.com"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
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
