import {
  UserPlus,
  GraduationCap,
  Briefcase,
  HeadphonesIcon,
  FileCheck,
  TrendingUp,
} from "lucide-react";

export default function WhatWeDoSection() {
  const services = [
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Talent Sourcing",
      description:
        "We leverage our extensive network and rigorous screening process to find candidates that match your specific requirements.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Training & Development",
      description:
        "Every VA goes through comprehensive SOP training to ensure they understand your industry and work standards.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Onboarding Support",
      description:
        "We handle all the administrative work, from contracts to payroll, so you can focus on your business.",
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "24/7 Client Support",
      description:
        "Our dedicated support team is always available to address your concerns and ensure smooth operations.",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Quality Assurance",
      description:
        "Regular performance monitoring, daily reports, and continuous feedback loops ensure consistent quality.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability Solutions",
      description:
        "As your business grows, we help you scale your team quickly and efficiently without compromising quality.",
    },
  ];

  return (
    <section
      className="section"
      style={{ background: "var(--background-alt)" }}
    >
      <div className="container">
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
            style={{ color: "var(--secondary)" }}
          >
            What We Do
          </span>
          <h2 className="section-title">
            Complete <span className="gradient-text">Staffing Solutions</span>
          </h2>
          <p className="section-subtitle">
            From initial recruitment to ongoing support, we handle every aspect
            of building and managing your remote team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{
                  background: "var(--secondary-light)15",
                  color: "var(--secondary)",
                }}
              >
                {service.icon}
              </div>

              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--primary)" }}
              >
                {service.title}
              </h3>

              <p style={{ color: "var(--muted)" }}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Box */}
        <div
          className="mt-12 p-8 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
            color: "white",
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Philippine-Based Virtual Assistants?
            </h3>
            <p className="text-lg leading-relaxed opacity-90">
              The Philippines is home to some of the world's most skilled,
              educated, and English-proficient professionals. With a strong work
              ethic, cultural alignment with Western businesses, and a genuine
              commitment to service, Filipino VAs have become the preferred
              choice for companies worldwide. Plus, with competitive rates, you
              can access premium talent while significantly reducing your
              operational costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
