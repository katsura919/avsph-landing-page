import {
  Clock,
  XCircle,
  CreditCard,
  Search,
  Lock,
  Timer,
  FileText,
  DollarSign,
  Users,
  BookOpen,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "SOP-Trained Virtual Assistants",
      description:
        "All VAs are trained under our internal SOP system for consistent, reliable, and high-quality results.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Client Support",
      description:
        "Round-the-clock assistance whenever you need it. Our support team is always available.",
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Cancel Anytime",
      description:
        "No long-term contracts or commitments. You're in control of your experience.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "No Credit Card Required",
      description:
        "Sign up and explore our services without any financial commitment upfront.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Unlimited VA Scouting",
      description:
        "We'll search until we find the ideal virtual assistant for your unique needs.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Strict Non-Disclosure",
      description:
        "Your sensitive information remains confidential with our ironclad NDA policy.",
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Hourly Monitoring",
      description:
        "Transparent tracking ensures you only pay for actual time spent on tasks.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Daily End of Day Reports",
      description:
        "Stay informed with detailed daily summaries of completed tasks and progress.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Affordable Hourly Rates",
      description:
        "Premium assistance that fits your budget. Save up to 70% vs local hires.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Work Directly With Staff",
      description:
        "Seamless communication with your assigned VA for flawless collaboration.",
    },
  ];

  return (
    <section
      id="why-us"
      className="section"
      style={{ background: "var(--background-alt)" }}
    >
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
            We go beyond just matching you with talent. Our comprehensive
            approach ensures your success at every step.
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
                  background:
                    "linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%)",
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
