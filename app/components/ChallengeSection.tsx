export default function ChallengeSection() {
    const challenges = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            title: "Spending too much time on repetitive tasks?",
            description: "Free up 20+ hours per week by delegating admin work, data entry, and routine operations.",
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
            title: "Struggling to find reliable talent?",
            description: "Access our pre-vetted pool of exceptional virtual assistants—only the top 1% make the cut.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            title: "Worried about the cost of hiring?",
            description: "Save up to 70% compared to local hires with our affordable hourly rates and zero overhead costs.",
        },
    ];

    return (
        <section className="section" style={{ background: "var(--background-alt)" }}>
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span
                            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
                            style={{ color: "var(--secondary)" }}
                        >
                            The Challenge
                        </span>
                        <h2 className="mb-6">
                            Running a Business is{" "}
                            <span className="gradient-text">Hard Enough</span>
                        </h2>
                        <p className="text-lg mb-8" style={{ color: "var(--foreground-light)" }}>
                            As a business owner, you wear too many hats. Your time is valuable,
                            and spending it on tasks that could be delegated is costing you growth opportunities.
                        </p>

                        <div className="space-y-6">
                            {challenges.map((challenge, index) => (
                                <div key={index} className="flex gap-4">
                                    <div
                                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: "rgba(0, 180, 216, 0.1)",
                                            color: "var(--secondary)",
                                        }}
                                    >
                                        {challenge.icon}
                                    </div>
                                    <div>
                                        <h4
                                            className="font-semibold mb-1 text-base"
                                            style={{ color: "var(--primary)" }}
                                        >
                                            {challenge.title}
                                        </h4>
                                        <p className="text-sm" style={{ color: "var(--muted)" }}>
                                            {challenge.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Solution Card */}
                    <div className="relative">
                        <div
                            className="card p-8"
                            style={{
                                background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                                border: "none",
                            }}
                        >
                            <div className="text-white">
                                <div
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                                    style={{ background: "rgba(255, 255, 255, 0.15)" }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    The Solution
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                                    Let Us Handle the Hiring
                                </h3>
                                <p className="text-white/80 mb-6">
                                    We take the burden off your shoulders. From talent sourcing to
                                    performance monitoring, we provide end-to-end staffing solutions
                                    so you can focus on what matters—growing your business.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Rigorous vetting process",
                                        "Perfect talent matching",
                                        "Ongoing support & monitoring",
                                        "Flexible, no-contract arrangements",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-white/90">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="flex-shrink-0"
                                            >
                                                <circle cx="12" cy="12" r="10" fill="#F5A623" />
                                                <polyline
                                                    points="8 12 11 15 16 9"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    fill="none"
                                                />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact" className="btn-primary">
                                    Get Started Today
                                </a>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div
                            className="absolute -z-10 top-8 left-8 w-full h-full rounded-2xl"
                            style={{ background: "var(--secondary)", opacity: 0.2 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
