"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#0a0a14]">
      {/* bg accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, #8b5cf608 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Career Journey"
          title="8 Years of Building"
          description="From pharmaceutical software to AI-driven fitness platforms — a journey of continuous growth and impact."
        />

        {/* Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
