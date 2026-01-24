import { Globe, Heart, Lightbulb, Shield } from "lucide-react";

export default function OurStorySection() {
  const values = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Expertise",
      description: "Connecting businesses worldwide with top Filipino talent",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "People-First Approach",
      description: "We care about both our clients and our virtual assistants",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Constantly improving our processes and technology",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Transparency",
      description:
        "Building lasting relationships through honesty and reliability",
    },
  ];

  return (
    <section
      className="section"
      style={{ background: "var(--background-alt)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <span
              className="text-sm font-semibold uppercase tracking-wider mb-4 block"
              style={{ color: "var(--secondary)" }}
            >
              Our Story
            </span>
            <h2 className="section-title mb-6">
              Empowering Businesses Through{" "}
              <span className="gradient-text">Filipino Talent</span>
            </h2>

            <div className="space-y-4" style={{ color: "var(--muted)" }}>
              <p className="text-lg leading-relaxed">
                Advanced Virtual Staff Philippines (AVSPH) was founded with a
                simple yet powerful mission: to bridge the gap between
                businesses seeking exceptional talent and skilled Filipino
                professionals looking for meaningful remote work opportunities.
              </p>

              <p className="text-lg leading-relaxed">
                Over the years, we've helped hundreds of businesses scale their
                operations by providing access to a pool of highly trained,
                dedicated, and professional virtual assistants. Our
                comprehensive approach goes beyond simple staffing – we handle
                recruitment, training, onboarding, and ongoing support to ensure
                your success.
              </p>

              <p className="text-lg leading-relaxed">
                What sets us apart is our commitment to quality and our deep
                understanding of both Western business culture and Filipino work
                ethic. We don't just match skills – we match values, work
                styles, and long-term goals.
              </p>
            </div>
          </div>

          {/* Right Side - Values Grid */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: "var(--secondary-light)15",
                      color: "var(--secondary)",
                    }}
                  >
                    {value.icon}
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--primary)" }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ color: "var(--muted)" }}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
