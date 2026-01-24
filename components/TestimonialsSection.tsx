"use client";

import { useState } from "react";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);

  // First row testimonials
  const testimonialsRow1 = [
    {
      quote:
        "Advanced Virtual Staff has been a game changer for my business. My VA handles all my admin tasks flawlessly, giving me back 20+ hours every week.",
      author: "Michael Chen",
      role: "CEO & Co Founder at TechStart",
      avatar: "MC",
    },
    {
      quote:
        "I was skeptical about hiring a virtual assistant, but AVSPH made the process seamless. The quality of talent exceeded my expectations.",
      author: "Sarah Johnson",
      role: "Founder at Digital Marketing Pro",
      avatar: "SJ",
    },
    {
      quote:
        "The daily reports and hourly monitoring give me complete peace of mind. I know exactly what's being done and the ROI is incredible.",
      author: "David Martinez",
      role: "Operations Manager at E-Commerce Plus",
      avatar: "DM",
    },
    {
      quote:
        "Top-notch quality easy to set up and performs as promised. The support team was incredibly responsive and attentive to our needs.",
      author: "Emily Watson",
      role: "Director at Consulting Group Inc",
      avatar: "EW",
    },
  ];

  // Second row testimonials
  const testimonialsRow2 = [
    {
      quote:
        "Outstanding service, well crafted, user-friendly, and exactly what I expected. The team went above and beyond to help us succeed.",
      author: "James Wilson",
      role: "CEO & Co Founder at Growth Labs",
      avatar: "JW",
    },
    {
      quote:
        "Impressive product high quality, simple to use, and exactly as promised. Customer service was superb and very responsive.",
      author: "Anika Patel",
      role: "CEO & Co Founder at Zendesk",
      avatar: "AP",
    },
    {
      quote:
        "We've been working with AVSPH for over 2 years now. Their team has become an integral part of our operations. Highly recommended!",
      author: "Robert Kim",
      role: "Product Manager at Orbit",
      avatar: "RK",
    },
    {
      quote:
        "Great service! reliable, easy to set up, just as described. Service was excellent and ensured a smooth experience from day one.",
      author: "Lisa Thompson",
      role: "CEO & Co Founder at ABC Corp",
      avatar: "LT",
    },
  ];

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: (typeof testimonialsRow1)[0];
  }) => (
    <div
      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] p-4 sm:p-5 md:p-6 rounded-xl mx-2 sm:mx-3"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
      }}
    >
      <Quote
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-3 sm:mb-4"
        style={{ color: "var(--border)" }}
        fill="var(--border)"
      />
      <p
        className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-none"
        style={{ color: "var(--foreground-light)" }}
      >
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-2 sm:gap-3">
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0"
          style={{
            background: "var(--secondary)",
            color: "var(--primary)",
          }}
        >
          {testimonial.avatar}
        </div>
        <div className="min-w-0">
          <p
            className="font-semibold text-xs sm:text-sm truncate"
            style={{ color: "var(--primary)" }}
          >
            {testimonial.author}
          </p>
          <p
            className="text-[10px] sm:text-xs truncate"
            style={{ color: "var(--muted)" }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );

  // Duplicate items for seamless loop
  const row1Items = [...testimonialsRow1, ...testimonialsRow1];
  const row2Items = [...testimonialsRow2, ...testimonialsRow2];

  return (
    <section
      id="testimonials"
      className="section overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .marquee-left {
          animation: scroll-left 35s linear infinite;
        }
        .marquee-right {
          animation: scroll-right 35s linear infinite;
        }
      `}</style>

      <div className="container">
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
            style={{ color: "var(--secondary)" }}
          >
            Testimonials
          </span>
          <h2 className="section-title">
            Words of Praise From{" "}
            <span className="gradient-text">Our Clients</span>
          </h2>
          <p className="section-subtitle">
            See what our clients have to say about their experience working with
            Advanced Virtual Staff.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="space-y-6">
        {/* Row 1 - Scrolls Left */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
          onMouseEnter={() => setIsPausedRow1(true)}
          onMouseLeave={() => setIsPausedRow1(false)}
        >
          <div
            className="flex marquee-left"
            style={{
              animationPlayState: isPausedRow1 ? "paused" : "running",
            }}
          >
            {row1Items.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Right */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
          onMouseEnter={() => setIsPausedRow2(true)}
          onMouseLeave={() => setIsPausedRow2(false)}
        >
          <div
            className="flex marquee-right"
            style={{
              animationPlayState: isPausedRow2 ? "paused" : "running",
            }}
          >
            {row2Items.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="container mt-16">
        <div className="text-center">
          <p
            className="text-sm font-medium uppercase tracking-wider mb-8"
            style={{ color: "var(--muted)" }}
          >
            Trusted by companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {[
              "TechStart",
              "Digital Pro",
              "E-Commerce+",
              "Consulting Co",
              "Growth Labs",
            ].map((company, index) => (
              <div
                key={index}
                className="text-xl md:text-2xl font-bold"
                style={{ color: "var(--primary)" }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
