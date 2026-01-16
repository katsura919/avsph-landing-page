export default function WhyChooseUsSection() {
    const features = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 10" />
                </svg>
            ),
            title: "24/7 Client Support",
            description: "Round-the-clock assistance whenever you need it. Our support team is always available.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            ),
            title: "Cancel Anytime",
            description: "No long-term contracts or commitments. You're in control of your experience.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
            ),
            title: "No Credit Card Required",
            description: "Sign up and explore our services without any financial commitment upfront.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
            ),
            title: "Unlimited VA Scouting",
            description: "We'll search until we find the ideal virtual assistant for your unique needs.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            ),
            title: "Strict Non-Disclosure",
            description: "Your sensitive information remains confidential with our ironclad NDA policy.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            title: "Hourly Monitoring",
            description: "Transparent tracking ensures you only pay for actual time spent on tasks.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            ),
            title: "Daily End of Day Reports",
            description: "Stay informed with detailed daily summaries of completed tasks and progress.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            title: "Affordable Hourly Rates",
            description: "Premium assistance that fits your budget. Save up to 70% vs local hires.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: "Work Directly With Staff",
            description: "Seamless communication with your assigned VA for flawless collaboration.",
        },
    ];

    return (
        <section id="why-us" className="section" style={{ background: "var(--background-alt)" }}>
            <div className="container">
                <div className="text-center mb-16">
                    <span
                        className="text-sm font-semibold uppercase tracking-wider mb-4 block"
                        style={{ color: "var(--secondary)" }}
                    >
                        Why Choose Us
                    </span>
                    <h2 className="section-title">
                        What Makes Us <span className="gradient-text">Different</span>
                    </h2>
                    <p className="section-subtitle">
                        We go beyond just matching you with talent. Our comprehensive approach
                        ensures your success at every step.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                            style={{
                                background: "var(--card)",
                                border: "1px solid var(--border)",
                            }}
                        >
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                                style={{
                                    background: "linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%)",
                                    color: "white",
                                }}
                            >
                                {feature.icon}
                            </div>
                            <h3
                                className="font-semibold mb-2 text-lg"
                                style={{ color: "var(--primary)" }}
                            >
                                {feature.title}
                            </h3>
                            <p className="text-sm" style={{ color: "var(--muted)" }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
