import Link from "next/link";

export default function HeroSection() {
    const trustBadges = [
        { value: "5+", label: "Years Experience" },
        { value: "500+", label: "Happy Clients" },
        { value: "1%", label: "Top Talent Only" },
        { value: "24/7", label: "Support Available" },
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{ background: "var(--background)" }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Overlay */}
                <div
                    className="absolute top-0 right-0 w-1/2 h-full opacity-10"
                    style={{
                        background:
                            "radial-gradient(circle at 70% 30%, var(--secondary) 0%, transparent 50%)",
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-5"
                    style={{
                        background:
                            "radial-gradient(circle at 30% 70%, var(--accent) 0%, transparent 50%)",
                    }}
                />
                {/* Decorative Shapes */}
                <svg
                    className="absolute top-20 right-10 w-64 h-64 opacity-5 animate-float"
                    viewBox="0 0 200 200"
                >
                    <circle cx="100" cy="100" r="80" stroke="#00B4D8" strokeWidth="2" fill="none" />
                    <circle cx="100" cy="100" r="60" stroke="#0F2A4A" strokeWidth="2" fill="none" />
                    <circle cx="100" cy="100" r="40" stroke="#F5A623" strokeWidth="2" fill="none" />
                </svg>
                <svg
                    className="absolute bottom-40 left-20 w-48 h-48 opacity-5"
                    viewBox="0 0 200 200"
                >
                    <polygon
                        points="100,20 180,180 20,180"
                        stroke="#0F2A4A"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            </div>

            <div className="container relative z-10 py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="animate-fade-in">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                            style={{
                                background: "rgba(0, 180, 216, 0.1)",
                                color: "var(--secondary-dark)",
                            }}
                        >
                            <span className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
                            Premium Virtual Staffing Solutions
                        </div>

                        <h1 className="mb-6">
                            Your Growth.{" "}
                            <span className="gradient-text">Our Mission.</span>
                        </h1>

                        <p className="text-lg md:text-xl mb-8 max-w-xl" style={{ color: "var(--foreground-light)" }}>
                            Partner with exceptional virtual assistants handpicked from our{" "}
                            <strong style={{ color: "var(--primary)" }}>top 1% talent pool</strong>.
                            We handle the hiring, you focus on scaling your business.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link href="#contact" className="btn-primary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                Book a Free Call
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                Explore Services
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {trustBadges.map((badge, index) => (
                                <div key={index} className="trust-badge">
                                    <span className="trust-badge-value">{badge.value}</span>
                                    <span className="trust-badge-label">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Hero Image/Illustration */}
                    <div className="relative animate-slide-up hidden lg:block">
                        <div
                            className="relative rounded-2xl overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                                padding: "3rem",
                            }}
                        >
                            {/* Placeholder for team illustration */}
                            <div className="aspect-square flex items-center justify-center">
                                <div className="text-center text-white">
                                    <svg
                                        className="w-32 h-32 mx-auto mb-6 opacity-80"
                                        viewBox="0 0 100 100"
                                        fill="none"
                                    >
                                        {/* Team Icon */}
                                        <circle cx="50" cy="30" r="15" fill="#48CAE4" />
                                        <circle cx="25" cy="50" r="12" fill="#00B4D8" />
                                        <circle cx="75" cy="50" r="12" fill="#00B4D8" />
                                        <path
                                            d="M20 80 C20 65, 35 55, 50 55 C65 55, 80 65, 80 80"
                                            stroke="#F5A623"
                                            strokeWidth="4"
                                            fill="none"
                                        />
                                        <circle cx="50" cy="70" r="8" fill="#F5A623" />
                                    </svg>
                                    <p className="text-xl font-semibold">Your Dedicated Team</p>
                                    <p className="text-white/70 text-sm mt-2">
                                        Ready to support your business 24/7
                                    </p>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div
                                className="absolute top-4 right-4 glass rounded-lg px-4 py-2 animate-float"
                                style={{ animationDelay: "0.5s" }}
                            >
                                <span className="text-sm font-medium" style={{ color: "var(--primary)" }}>
                                    ✓ No Contracts
                                </span>
                            </div>
                            <div
                                className="absolute bottom-4 left-4 glass rounded-lg px-4 py-2 animate-float"
                                style={{ animationDelay: "1s" }}
                            >
                                <span className="text-sm font-medium" style={{ color: "var(--primary)" }}>
                                    ✓ Cancel Anytime
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
