"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Tag, ArrowRight, Clock } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  readTime: string;
};

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Business",
    "Virtual Assistants",
    "Management",
    "Marketing",
  ];

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title:
        "The Strategic Advantage of Hiring Virtual Assistants for Your Business",
      excerpt:
        "Virtual assistants (VAs) have long been known for handling administrative tasks such as email management, scheduling, and data entry. However, their role has evolved significantly...",
      date: "Apr 25, 2025",
      category: "Business",
      image: "/assets/blog/strategic-advantage.png",
      slug: "strategic-advantage-hiring-virtual-assistants",
      readTime: "5 min read",
    },
    {
      id: "2",
      title: "Scale Faster with Virtual Assistants",
      excerpt:
        "Growing a business is an exciting yet challenging journey. Entrepreneurs and business owners often find themselves stretched thin, managing daily operations while trying to expand...",
      date: "Mar 25, 2025",
      category: "Virtual Assistants",
      image: "/assets/blog/scale-faster.png",
      slug: "scaling-made-simple-virtual-assistants",
      readTime: "4 min read",
    },
    {
      id: "3",
      title:
        "The Strategic Advantage of Using Virtual Assistants in Your Business",
      excerpt:
        "For many business owners, virtual assistants (VAs) are often associated with administrative tasks like email management and scheduling. However, their potential extends far beyond...",
      date: "Feb 25, 2025",
      category: "Business",
      image: "/assets/blog/strategic-va.png",
      slug: "beyond-admin-tasks-virtual-assistants",
      readTime: "6 min read",
    },
    {
      id: "4",
      title: "How Virtual Assistants Drive Entrepreneurial Growth",
      excerpt:
        "Time is the most valuable asset for entrepreneurs. While scaling a business, many smart entrepreneurs quickly realize they can't do everything themselves...",
      date: "Jan 25, 2025",
      category: "Business",
      image: "/assets/blog/entrepreneurial-growth.jpg",
      slug: "virtual-assistants-entrepreneurial-growth",
      readTime: "5 min read",
    },
    {
      id: "5",
      title:
        "Virtual Assistants for Entrepreneurs: Unlock Your Time, Maximize Your Results",
      excerpt:
        "In the entrepreneurial world, time is one of the most valuable resources. Every minute spent on mundane tasks is a minute taken away from strategic thinking...",
      date: "Dec 20, 2024",
      category: "Virtual Assistants",
      image: "/assets/blog/unlock-time.png",
      slug: "virtual-assistants-entrepreneurs-unlock-time",
      readTime: "4 min read",
    },
    {
      id: "6",
      title:
        "Driving Success: The Role of Virtual Assistants in Efficiency and Innovation",
      excerpt:
        "In today's fast-paced business world, staying ahead of the competition requires more than just hard work—it demands innovation, agility, and strategic delegation...",
      date: "Dec 19, 2024",
      category: "Virtual Assistants",
      image: "/assets/blog/driving-success.jpg",
      slug: "virtual-assistants-efficiency-innovation",
      readTime: "5 min read",
    },
    {
      id: "7",
      title: "How Virtual Assistants Boost Efficiency and Innovation",
      excerpt:
        "In today's fast-paced business environment, staying ahead requires more than just hard work—it demands strategic delegation and efficient workflows...",
      date: "Dec 17, 2024",
      category: "Virtual Assistants",
      image: "/assets/blog/boost-efficiency.png",
      slug: "virtual-assistants-boost-efficiency",
      readTime: "4 min read",
    },
    {
      id: "8",
      title: "The Secret to Business Growth: Virtual Assistants",
      excerpt:
        "In the ever-evolving world of business, scalability is the cornerstone of success. Whether you're an entrepreneur managing a startup or a seasoned executive...",
      date: "Dec 16, 2024",
      category: "Business",
      image: "/assets/blog/business-growth.jpg",
      slug: "secret-business-growth-virtual-assistants",
      readTime: "5 min read",
    },
    {
      id: "9",
      title: "Virtual Assistants: Your Partner in Business Growth",
      excerpt:
        "In the fast-paced world of entrepreneurship and business management, time is one of your most valuable assets. Every moment spent on routine tasks...",
      date: "Dec 11, 2024",
      category: "Business",
      image: "/assets/blog/partner-growth.jpg",
      slug: "virtual-assistants-partner-business-growth",
      readTime: "4 min read",
    },
    {
      id: "10",
      title: "Work-Life Balance with a Virtual Assistant",
      excerpt:
        "In today's fast-paced world, managing both professional and personal responsibilities can feel like walking a tightrope. For entrepreneurs and business owners...",
      date: "Dec 10, 2024",
      category: "Management",
      image: "/assets/blog/work-life-balance.jpg",
      slug: "work-life-balance-virtual-assistant",
      readTime: "5 min read",
    },
    {
      id: "11",
      title: "Elevate Your Business with Virtual Assistant Expertise",
      excerpt:
        "Discover how leveraging virtual assistant expertise can transform your business operations and drive unprecedented growth in today's competitive market...",
      date: "Dec 28, 2023",
      category: "Business",
      image: "/assets/blog/elevate-business.jpg",
      slug: "elevate-business-virtual-assistant",
      readTime: "5 min read",
    },
    {
      id: "12",
      title: "Hiring a Virtual Staff: Top Skills to Look for Your VA",
      excerpt:
        "Finding the right virtual assistant requires knowing what skills to prioritize. Learn the essential qualities that make a VA invaluable to your team...",
      date: "Jul 7, 2023",
      category: "Virtual Assistants",
      image: "/assets/blog/hiring-skills.jpg",
      slug: "hiring-virtual-staff-top-skills",
      readTime: "6 min read",
    },
  ];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="section" style={{ background: "var(--background)" }}>
      <div className="container">
        {/* Search and Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                style={{ color: "var(--muted)" }}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-[var(--secondary)]"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                  style={{
                    background:
                      selectedCategory === category
                        ? "var(--secondary)"
                        : "var(--card)",
                    color:
                      selectedCategory === category
                        ? "white"
                        : "var(--foreground-light)",
                    border: `1px solid ${
                      selectedCategory === category
                        ? "var(--secondary)"
                        : "var(--border)"
                    }`,
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p
            className="text-center"
            style={{ color: "var(--foreground-light)" }}
          >
            Showing {filteredPosts.length} article
            {filteredPosts.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div
            className="text-center py-16 px-6 rounded-2xl max-w-2xl mx-auto"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <Search
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: "var(--muted)" }}
            />
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--primary)" }}
            >
              No articles found
            </h3>
            <p style={{ color: "var(--foreground-light)" }}>
              Try adjusting your search or category filter
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--primary) 0%, var(--secondary-dark) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/50 text-sm">Blog Image</span>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: "var(--secondary)",
                        color: "white",
                      }}
                    >
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        color: "var(--primary)",
                      }}
                    >
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className="flex items-center gap-2 text-xs mb-3"
                    style={{ color: "var(--muted)" }}
                  >
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3
                    className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-[var(--secondary)] transition-colors"
                    style={{ color: "var(--primary)" }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="text-sm mb-4 line-clamp-3"
                    style={{ color: "var(--foreground-light)" }}
                  >
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-all group-hover:gap-3"
                    style={{ color: "var(--secondary)" }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div
          className="mt-20 p-10 md:p-12 rounded-3xl text-center relative overflow-hidden max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 50%, var(--secondary-dark) 100%)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ background: "var(--secondary)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
            style={{ background: "var(--accent)" }}
          />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get started with a skilled virtual assistant today and see the
              difference it makes for your productivity and growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#contact" className="btn-primary">
                Book a Free Call
              </Link>
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold transition-all hover:bg-white hover:text-[var(--primary)]"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
