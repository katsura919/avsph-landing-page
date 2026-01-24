"use client";

import { useState } from "react";
import { Phone, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const faqs: FAQ[] = [
    {
      question: "What is Advanced Virtual Staff?",
      answer:
        "Advanced Virtual Staff is a Philippine-based company that provides virtual assistant services to businesses and individuals.",
    },
    {
      question: "What services does Advanced Virtual Staff provide?",
      answer:
        "Advanced Virtual Staff offers a range of virtual assistant services such as administrative support, social media management, digital marketing, and more.",
    },
    {
      question:
        "How do I hire a virtual assistant from Advanced Virtual Staff?",
      answer:
        "To hire a virtual assistant from Advanced Virtual Staff, you can Book a Call with us and fill out a contact form to get in touch with their team.",
    },
    {
      question:
        "What are the qualifications of Advanced Virtual Staff's virtual assistants?",
      answer:
        "Advanced Virtual Staff's virtual assistants have a minimum of three years of experience and possess excellent communication and problem-solving skills.",
    },
    {
      question:
        "How much does it cost to hire a virtual assistant from Advanced Virtual Staff?",
      answer:
        "The cost of hiring a virtual assistant from Advanced Virtual Staff varies based on the type of services required and the level of expertise of the virtual assistant.",
    },
    {
      question:
        "How does Advanced Virtual Staff ensure the security of my data?",
      answer:
        "Advanced Virtual Staff uses various security measures, including data encryption and secure servers, to ensure the safety of our clients' data.",
    },
    {
      question:
        "What are the working hours of Advanced Virtual Staff's virtual assistants?",
      answer:
        "Advanced Virtual Staff's virtual assistants work in different time zones and can be available for clients based on their requirements.",
    },
    {
      question: "Can I hire a virtual assistant for a short-term project?",
      answer:
        "Yes, Advanced Virtual Staff offers virtual assistant services for short-term projects.",
    },
    {
      question:
        "What happens if I am not satisfied with the work of my virtual assistant?",
      answer:
        "Advanced Virtual Staff has a satisfaction guarantee policy, and clients can discuss their concerns with their account manager to resolve any issues.",
    },
    {
      question:
        "How can I contact Advanced Virtual Staff's customer support team?",
      answer: "You can contact our customer support team via email or phone.",
    },
    {
      question: "Is the placement fee per VA or lifetime?",
      answer:
        "The placement fee charged by Advanced Virtual Staff is per virtual assistant hired, and it is not a lifetime fee.",
    },
    {
      question: "What is virtual staffing?",
      answer:
        "Virtual staffing refers to hiring remote employees or contractors to perform specific tasks or roles for your company. These individuals work from their own location, rather than coming into a physical office.",
    },
    {
      question: "What are the benefits of virtual staffing?",
      answer:
        "Virtual staffing offers a range of benefits including cost savings, access to a wider talent pool, increased flexibility, and improved productivity.",
    },
    {
      question: "What kind of services can I get through virtual staffing?",
      answer:
        "You can get a wide range of services through virtual staffing, including administrative tasks, customer service, sales and marketing, IT support, and more.",
    },
    {
      question:
        "How do I select the right virtual staffing service for my business?",
      answer:
        "To select the right virtual staffing service, you should consider factors like their experience, pricing, customer service, and the quality of their virtual staff.",
    },
    {
      question: "How are virtual staff managed?",
      answer:
        "Virtual staff can be managed through communication tools like email, instant messaging, and video conferencing. Project management tools can also be used to track progress and ensure that work is completed on time.",
    },
    {
      question: "How do I get started with virtual staffing services?",
      answer:
        "To get started with virtual staffing services, you must identify first what tasks you'll need a virtual staff for and select one that meets your needs. You can then work with them to identify the services you need and begin the process of hiring virtual staff.",
    },
  ];

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqs;

  return (
    <section className="section" style={{ background: "var(--background)" }}>
      <div className="container">
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
            style={{ color: "var(--secondary)" }}
          >
            Got Questions?
          </span>
          <h2 className="section-title">
            Common <span className="gradient-text">Questions</span> Answered
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our virtual assistant services
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
              style={{ color: "var(--muted)" }}
            />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all focus:outline-none focus:border-[var(--secondary)]"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto pb-5">
          {filteredFAQs.length === 0 ? (
            <div
              className="text-center py-16 px-6 rounded-2xl "
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
                No results found
              </h3>
              <p style={{ color: "var(--foreground-light)" }}>
                Try adjusting your search query
              </p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-2xl overflow-hidden border-2 transition-all"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <AccordionTrigger
                    className="px-6 py-5 hover:no-underline"
                    style={{ color: "var(--primary)" }}
                  >
                    <span className="font-semibold text-base md:text-lg text-left">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent
                    className="px-6 pb-5"
                    style={{ color: "var(--foreground-light)" }}
                  >
                    <p className="text-base leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        {/* CTA at bottom */}
        <div
          className="mt-20 p-10 md:p-12 rounded-3xl text-center relative overflow-hidden max-w-6xl mx-auto"
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
              Still have questions?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our friendly team is
              ready to help you get started.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                <Phone className="w-5 h-5" />
                Book a Free Call
              </a>
              <a
                href="mailto:info@advancedvirtualstaff.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold transition-all hover:bg-white hover:text-[var(--primary)]"
              >
                Send us an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
