import { Target, Eye, Rocket } from "lucide-react";

export default function MissionVisionSection() {
  const items = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description:
        "To empower businesses worldwide by connecting them with exceptional Filipino virtual assistants, enabling growth, efficiency, and success through reliable and professional remote staffing solutions.",
      color: "#00B4D8",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description:
        "To become the most trusted and preferred virtual staffing partner globally, recognized for our commitment to quality, integrity, and creating meaningful opportunities for Filipino professionals.",
      color: "#F5A623",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Our Promise",
      description:
        "We promise to deliver more than just staff – we deliver peace of mind. Every VA is thoroughly vetted, trained, and supported to ensure they exceed your expectations and become a valuable extension of your team.",
      color: "#10B981",
    },
  ];

  return (
    <section className="section" style={{ background: "var(--background)" }}>
      <div className="container">
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
            style={{ color: "var(--secondary)" }}
          >
            Mission & Vision
          </span>
          <h2 className="section-title">
            Driven by <span className="gradient-text">Purpose & Passion</span>
          </h2>
          <p className="section-subtitle">
            Our core values guide everything we do, from how we select talent to
            how we serve our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="relative group">
              <div
                className="card h-full p-8 transition-all duration-300 hover:shadow-xl"
                style={{
                  borderTop: `4px solid ${item.color}`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
