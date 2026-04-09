"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats, personal } from "@/lib/data";
import { Zap, Users, Server, TrendingUp } from "lucide-react";

const statIcons = [TrendingUp, Server, Users, Zap];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      {/* Subtle bg glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none opacity-5"
        style={{
          background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="About Me"
          title="Architect. Builder. Leader."
          description="I turn complex engineering challenges into elegant, scalable solutions — and I do it with a team-first mindset."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="space-y-5"
          >
            {/* Avatar + name row */}
            <div className="flex items-center gap-4 mb-2">
              <div className="relative flex-shrink-0">
                <div
                  className="absolute inset-0 rounded-full blur-sm opacity-50"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                />
                <div className="relative w-16 h-16 rounded-full border border-indigo-500/40 overflow-hidden">
                  <Image
                    src="/avatar.png"
                    alt="Rahul Ankit"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <p className="text-zinc-100 font-semibold text-lg leading-tight">Rahul Ankit</p>
                <p className="text-indigo-400 text-sm">{personal.title}</p>
                <p className="text-zinc-600 text-xs mt-0.5">{personal.location}</p>
              </div>
            </div>

            <p className="text-zinc-300 text-lg leading-relaxed">
              I&apos;m a{" "}
              <span className="text-indigo-400 font-semibold">
                Full Stack Technical Lead
              </span>{" "}
              with 8+ years of experience designing and delivering distributed
              systems at scale. Currently at{" "}
              <span className="text-zinc-100 font-medium">ABC Fitness</span>,
              where I own architecture and end-to-end delivery for the Ignite
              product — a platform serving 200K+ active members.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My career spans high-growth product companies and enterprise
              clients — from building{" "}
              <span className="text-zinc-300">
                100M+ event/month notification infrastructure
              </span>{" "}
              at Skillsoft, to delivering digital banking applications for global
              financial institutions at Temenos/Kony, to helping pharmaceutical
              giants like Bayer and Sanofi at Cognizant.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              What sets me apart is the combination of{" "}
              <span className="text-zinc-300">deep backend expertise</span>{" "}
              (Java, Spring Boot, Kafka, Kubernetes) with a strong product
              instinct and growing fluency in{" "}
              <span className="text-zinc-300">AI/ML integration</span> — RAG,
              LLMs, vector search, and GenAI tooling. I don&apos;t just write
              code; I architect systems that hold up at scale, lead teams with
              clarity, and ship things that matter.
            </p>

            {/* Strengths */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              {[
                "Distributed Systems",
                "Technical Leadership",
                "AI/ML Integration",
                "Performance Engineering",
                "System Architecture",
                "Cross-functional Teams",
              ].map((strength) => (
                <div
                  key={strength}
                  className="flex items-center gap-2 text-sm text-zinc-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  {strength}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick facts + location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
            className="space-y-5"
          >
            <div className="card-glass rounded-2xl p-6">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-5">
                Quick Facts
              </p>
              <dl className="space-y-4">
                {[
                  { label: "Current Role", value: "Senior Software Engineer (TL)" },
                  { label: "Current Company", value: "ABC Fitness" },
                  { label: "Location", value: personal.location },
                  { label: "Experience", value: "8+ years" },
                  { label: "Email", value: personal.email },
                  { label: "Focus Areas", value: "Java · React · AI/ML · Distributed Systems" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-4">
                    <dt className="text-sm text-zinc-500 flex-shrink-0">{label}</dt>
                    <dd className="text-sm text-zinc-300 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Currently exploring */}
            <div className="card-glass rounded-2xl p-6 border-l-2 border-l-indigo-500">
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                Currently Exploring
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Deepening expertise in production-grade RAG architectures,
                fine-tuning LLMs for domain-specific use cases, and exploring
                agentic AI workflows with tool-use patterns.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <motion.div
                key={stat.label}
                className="card-glass rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    <Icon size={18} className="text-indigo-400" />
                  </div>
                </div>
                <p className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </p>
                <p className="text-xs text-zinc-500 leading-snug">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
