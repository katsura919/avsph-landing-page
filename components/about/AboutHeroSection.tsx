import Image from "next/image";
import { Users, Target, Award } from "lucide-react";

export default function AboutHeroSection() {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "4+",
      label: "Years Experience",
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: "126+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "95%",
      label: "Client Retention",
    },
  ];

  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden pt-24"
      style={{ background: "var(--background)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
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
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 px-4 py-2 rounded-full"
            style={{
              background: "var(--secondary-light)15",
              color: "var(--secondary)",
            }}
          >
            About AVSPH
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Your Dream Team{" "}
            <span className="gradient-text">in the Philippines</span>
          </h1>

          <p
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            We assist you in establishing a full-time, committed team in the
            Philippines, taking care of everything there while you maintain
            complete control over your operations.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-xl"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-lg mx-auto mb-3"
                  style={{
                    background: "var(--secondary-light)15",
                    color: "var(--secondary)",
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "var(--primary)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
