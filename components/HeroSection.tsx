import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const trustBadges = [
    { value: "4+", label: "Years Experience" },
    { value: "126+", label: "Happy Clients" },
    { value: "8+", label: "Months Avg. Retention" },
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
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="#00B4D8"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            stroke="#0F2A4A"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            stroke="#F5A623"
            strokeWidth="2"
            fill="none"
          />
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
              <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
              Virtual Staffing Solution
            </div>

            <h1 className="mb-6">
              Hire Once. <span className="gradient-text">Scale Fast.</span>
              Cancel Anytime.
            </h1>

            <p
              className="text-lg md:text-xl mb-8 max-w-xl"
              style={{ color: "var(--foreground-light)" }}
            >
              We help service-based businesses reclaim 20+ hours a week by
              building and managing a reliable offshore team for them without
              hiring headaches, long contracts, or HR stress.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Link href="#contact" className="btn-primary">
                <Phone className="w-5 h-5" />
                Book a Free Call
              </Link>
              <Link href="#services" className="btn-secondary">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Social Proof */}
            <div
              className="flex items-center gap-2 mb-8 text-sm"
              style={{ color: "var(--foreground-light)" }}
            >

              <span className="ml-1">
                Trusted by founders across <strong>US, AU & UK</strong>
              </span>
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

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up hidden lg:block">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
              }}
            >
              {/* Team Photo */}
              <div className="relative">
                <Image
                  src="/assets/hero-team.png"
                  alt="Advanced Virtual Staff Team - Professional virtual assistants ready to support your business"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Gradient Overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{
                    background:
                      "linear-gradient(to top, var(--primary) 0%, transparent 100%)",
                  }}
                />
                {/* Text overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-white text-lg font-semibold">
                    Your Dedicated Team
                  </p>
                  <p className="text-white/80 text-sm">
                    Ready to support your business 24/7
                  </p>
                </div>
              </div>
            </div>
            
                                        {/* Floating Elements */}
                            <div
                                className="absolute top-4 right-4 glass rounded-lg px-4 py-2 animate-float"
                                style={{ animationDelay: "0.5s" }}
                            >
                                <span className="text-sm font-medium" style={{ color: "var(--primary)" }}>
                                    ✓ 24/7 Support
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

            {/* Decorative background element */}
            <div
              className="absolute -z-10 top-6 left-6 w-full h-full rounded-2xl"
              style={{ background: "var(--secondary)", opacity: 0.15 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
