"use client";

import { useState } from "react";

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote:
                "Advanced Virtual Staff has been a game-changer for my business. My VA handles all my admin tasks flawlessly, giving me back 20+ hours every week to focus on growth.",
            author: "Michael Chen",
            role: "CEO, TechStart Solutions",
            avatar: "MC",
            rating: 5,
        },
        {
            quote:
                "I was skeptical about hiring a virtual assistant, but AVSPH made the process seamless. The quality of talent and ongoing support exceeded my expectations.",
            author: "Sarah Johnson",
            role: "Founder, Digital Marketing Pro",
            avatar: "SJ",
            rating: 5,
        },
        {
            quote:
                "The daily reports and hourly monitoring give me complete peace of mind. I know exactly what's being done and the ROI is incredible.",
            author: "David Martinez",
            role: "Operations Manager, E-Commerce Plus",
            avatar: "DM",
            rating: 5,
        },
        {
            quote:
                "We've been working with AVSPH for over 2 years now. Their team has become an integral part of our operations. Highly recommended!",
            author: "Emily Watson",
            role: "Director, Consulting Group Inc",
            avatar: "EW",
            rating: 5,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="testimonials" className="section" style={{ background: "var(--background)" }}>
            <div className="container">
                <div className="text-center mb-16">
                    <span
                        className="text-sm font-semibold uppercase tracking-wider mb-4 block"
                        style={{ color: "var(--secondary)" }}
                    >
                        Testimonials
                    </span>
                    <h2 className="section-title">
                        Don&apos;t Take Our Word, <span className="gradient-text">Take Theirs</span>
                    </h2>
                    <p className="section-subtitle">
                        See what our clients have to say about their experience working with
                        Advanced Virtual Staff.
                    </p>
                </div>

                {/* Featured Testimonial */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div
                        className="relative p-8 md:p-12 rounded-2xl"
                        style={{
                            background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                        }}
                    >
                        {/* Quote Icon */}
                        <svg
                            className="absolute top-8 left-8 w-12 h-12 opacity-20"
                            viewBox="0 0 24 24"
                            fill="white"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        <div className="relative z-10">
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="#F5A623"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                            </div>

                            <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                                &ldquo;{testimonials[activeIndex].quote}&rdquo;
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold"
                                    style={{
                                        background: "var(--secondary)",
                                        color: "var(--primary)",
                                    }}
                                >
                                    {testimonials[activeIndex].avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-white">
                                        {testimonials[activeIndex].author}
                                    </p>
                                    <p className="text-white/70 text-sm">
                                        {testimonials[activeIndex].role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Navigation */}
                <div className="flex justify-center gap-4 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${activeIndex === index ? "scale-110" : "opacity-60 hover:opacity-100"
                                }`}
                            style={{
                                background:
                                    activeIndex === index ? "var(--secondary)" : "var(--border)",
                                color: activeIndex === index ? "var(--primary)" : "var(--muted)",
                            }}
                        >
                            {testimonial.avatar}
                        </button>
                    ))}
                </div>

                {/* Client Logos */}
                <div className="text-center">
                    <p
                        className="text-sm font-medium uppercase tracking-wider mb-8"
                        style={{ color: "var(--muted)" }}
                    >
                        Trusted by companies worldwide
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
                        {["TechStart", "Digital Pro", "E-Commerce+", "Consulting Co", "Growth Labs"].map(
                            (company, index) => (
                                <div
                                    key={index}
                                    className="text-xl md:text-2xl font-bold"
                                    style={{ color: "var(--primary)" }}
                                >
                                    {company}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
