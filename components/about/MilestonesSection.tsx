"use client";

import { Rocket, Users, FileCheck, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function MilestonesSection() {
  const milestones = [
    {
      month: "July 2022",
      icon: <Rocket className="w-6 h-6" />,
      title: "AVS Started",
      description:
        "In July 2022, AVS (Advanced Virtual Staff) was established as a new business venture.",
      color: "#00B4D8",
      position: "left",
    },
    {
      month: "August 2022",
      icon: <Users className="w-6 h-6" />,
      title: "Gained 3 Clients",
      description:
        "It quickly gained momentum and acquired three clients within a month, in August 2022.",
      color: "#F5A623",
      position: "right",
    },
    {
      month: "March 2023",
      icon: <FileCheck className="w-6 h-6" />,
      title: "Local Company Registration",
      description:
        "Recognizing the need for formal establishment, AVS completed its company registration process, solidifying its legal status.",
      color: "#10B981",
      position: "left",
    },
    {
      month: "May 2023",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Hired 30+ VAs",
      description:
        "As the business expanded further, AVS hired over 30 virtual assistants (VAs) on the 10th month with purely organic marketing, bolstering its workforce and positioning the company for continued growth and success.",
      color: "#8B5CF6",
      position: "right",
    },
    {
      month: "July 2023",
      icon: <Award className="w-6 h-6" />,
      title: "One Year Anniversary",
      description:
        "70+ Virtual Assistants, more than 30+ clients in different fields: US, CA and Australian partnership sealed, and working on NZ, EU.",
      color: "#EC4899",
      position: "left",
    },
  ];

  return (
    <section className="section" style={{ background: "var(--background)" }}>
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
            style={{ color: "var(--secondary)" }}
          >
            Our Journey
          </span>
          <h2 className="section-title">
            Key <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            From our humble beginnings to becoming a trusted staffing partner -
            here's how we've grown together with our clients.
          </p>
        </motion.div>

        {/* Vertical Alternating Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Vertical Line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 hidden md:block"
            style={{ background: "var(--border)" }}
          />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{
                  opacity: 0,
                  x: milestone.position === "left" ? -50 : 50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Mobile Layout */}
                <div className="md:hidden flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg"
                      style={{ background: milestone.color }}
                    >
                      {milestone.month.split(" ")[1]}
                    </div>
                    <div
                      className="w-0.5 flex-1 mt-2"
                      style={{ background: "var(--border)" }}
                    />
                  </div>
                  <div className="flex-1 pb-4">
                    <div
                      className="p-6 rounded-xl"
                      style={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderLeft: `4px solid ${milestone.color}`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{
                            background: `${milestone.color}15`,
                            color: milestone.color,
                          }}
                        >
                          {milestone.icon}
                        </div>
                        <div className="flex flex-col">
                          <span
                            className="text-xs"
                            style={{ color: "var(--muted)" }}
                          >
                            {milestone.month}
                          </span>
                        </div>
                      </div>
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: "var(--primary)" }}
                      >
                        {milestone.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--muted)" }}
                      >
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Alternating Layout */}
                <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                  {/* Left Side */}
                  {milestone.position === "left" ? (
                    <>
                      <motion.div
                        className="text-right pr-12"
                        whileHover={{ x: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div
                          className="p-6 rounded-xl inline-block w-full"
                          style={{
                            background: "var(--card)",
                            border: "1px solid var(--border)",
                            borderRight: `4px solid ${milestone.color}`,
                          }}
                        >
                          <div className="flex items-center justify-end gap-3 mb-4">
                            <div className="flex flex-col items-end">
                              <span
                                className="text-xs"
                                style={{ color: "var(--muted)" }}
                              >
                                {milestone.month}
                              </span>
                            </div>
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center"
                              style={{
                                background: `${milestone.color}15`,
                                color: milestone.color,
                              }}
                            >
                              {milestone.icon}
                            </div>
                          </div>
                          <h3
                            className="text-xl font-bold mb-3 text-right"
                            style={{ color: "var(--primary)" }}
                          >
                            {milestone.title}
                          </h3>
                          <p
                            className="text-sm leading-relaxed text-right"
                            style={{ color: "var(--muted)" }}
                          >
                            {milestone.description}
                          </p>
                        </div>
                      </motion.div>
                      <div className="flex justify-start pl-12">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-base shadow-xl absolute left-1/2 transform -translate-x-1/2"
                          style={{ background: milestone.color }}
                        >
                          {milestone.month.split(" ")[1]}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-end pr-12">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-base shadow-xl absolute left-1/2 transform -translate-x-1/2"
                          style={{ background: milestone.color }}
                        >
                          {milestone.month.split(" ")[1]}
                        </div>
                      </div>
                      <motion.div
                        className="pl-12"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div
                          className="p-6 rounded-xl"
                          style={{
                            background: "var(--card)",
                            border: "1px solid var(--border)",
                            borderLeft: `4px solid ${milestone.color}`,
                          }}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center"
                              style={{
                                background: `${milestone.color}15`,
                                color: milestone.color,
                              }}
                            >
                              {milestone.icon}
                            </div>
                            <div className="flex flex-col">
                              <span
                                className="text-xs"
                                style={{ color: "var(--muted)" }}
                              >
                                {milestone.month}
                              </span>
                            </div>
                          </div>
                          <h3
                            className="text-xl font-bold mb-3"
                            style={{ color: "var(--primary)" }}
                          >
                            {milestone.title}
                          </h3>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--muted)" }}
                          >
                            {milestone.description}
                          </p>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
