import { CheckCircle, Users, Briefcase } from "lucide-react";

export default function ComparisonSection() {
  const vaFeatures = [
    "More cost-effective, typically hired on a contract basis",
    "Can work on flexible hours",
    "Wide range of services",
    "Lower level of commitment",
    "Less supervision",
    "Reduced employee turnover",
  ];

  const employeeFeatures = [
    "Involves a range of expenses such as salaries, benefits, taxes, etc.",
    "Limited availability",
    "Fixed set of tasks",
    "Long-term commitment",
    "Requires constant supervision",
    "Higher chance of turnover",
  ];

  return (
    <section
      className="section"
      style={{ background: "var(--background-alt)" }}
    >
      <div className="container">
        <div className="text-center mb-16 mt-16">
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
            style={{ color: "var(--secondary)" }}
          >
            Make an Informed Decision
          </span>
          <h2 className="section-title">
            Difference Between{" "}
            <span className="gradient-text">Virtual Assistant</span> and
            Traditional Employee
          </h2>
          <p className="section-subtitle">
            Understanding the key differences can help you make the right choice
            for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Virtual Assistant */}
          <div
            className="group relative p-8 md:p-10 rounded-2xl transition-all duration-300 hover:shadow-2xl animate-slide-up"
            style={{
              background: "var(--card)",
              border: "2px solid var(--secondary)",
            }}
          >
            {/* Highlight Badge */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
              style={{ background: "var(--secondary)" }}
            >
              RECOMMENDED
            </div>

            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform group-hover:scale-110 shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%)",
              }}
            >
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold text-center mb-8"
              style={{ color: "var(--primary)" }}
            >
              Virtual Assistant
            </h3>
            <ul className="space-y-5">
              {vaFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 group/item">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover/item:scale-110"
                    style={{ background: "rgba(0, 180, 216, 0.1)" }}
                  >
                    <CheckCircle
                      className="w-4 h-4"
                      style={{ color: "var(--secondary)" }}
                    />
                  </div>
                  <span
                    className="text-base leading-relaxed"
                    style={{ color: "var(--foreground-light)" }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full-Time Employee */}
          <div
            className="group p-8 md:p-10 rounded-2xl transition-all duration-300 hover:shadow-lg animate-slide-up"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform group-hover:scale-110"
              style={{
                background: "var(--background-alt)",
                border: "2px solid var(--border)",
              }}
            >
              <Briefcase
                className="w-10 h-10"
                style={{ color: "var(--primary)" }}
              />
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold text-center mb-8"
              style={{ color: "var(--primary)" }}
            >
              Traditional Employee
            </h3>
            <ul className="space-y-5">
              {employeeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "var(--background-alt)" }}
                  >
                    <CheckCircle
                      className="w-4 h-4"
                      style={{ color: "var(--muted)" }}
                    />
                  </div>
                  <span
                    className="text-base leading-relaxed"
                    style={{ color: "var(--foreground-light)" }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
