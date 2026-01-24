import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

export default function BlogPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--background)" }}>
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 50%, var(--secondary-dark) 100%)",
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-10"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <circle cx="100" cy="100" r="80" fill="currentColor" />
            <circle cx="900" cy="200" r="120" fill="currentColor" />
            <circle cx="500" cy="800" r="100" fill="currentColor" />
            <circle cx="200" cy="600" r="60" fill="currentColor" />
            <circle cx="800" cy="700" r="90" fill="currentColor" />
          </svg>
          <div
            className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{ background: "var(--secondary)" }}
          />
          <div
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: "var(--accent)" }}
          />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                background: "rgba(0, 180, 216, 0.2)",
                color: "var(--secondary)",
              }}
            >
              📚 Insights & Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span style={{ color: "var(--secondary)" }}>Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Discover tips, insights, and best practices for working with
              virtual assistants and scaling your business
            </p>
          </div>
        </div>
      </section>

      <BlogSection />
      <Footer />
    </main>
  );
}
