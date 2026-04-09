"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Star, Trophy } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { education, awards } from "@/lib/data";

const awardIcons: Record<string, React.ElementType> = {
  star: Star,
  trophy: Trophy,
  award: Award,
};

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Education & Recognition"
          title="Foundation & Achievements"
          description="Academic background and recognition received throughout my career."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              className="flex items-center gap-2 text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap size={16} className="text-indigo-400" />
              Education
            </motion.h3>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  className="card-glass rounded-2xl p-6 hover:border-indigo-500/20 transition-colors duration-300"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex-shrink-0">
                      <GraduationCap size={16} className="text-indigo-400" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-zinc-100 mb-1 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-indigo-400 text-sm font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-zinc-500 text-xs mb-3">{edu.location}</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-xs font-semibold">
                    <Star size={11} />
                    {edu.scoreLabel}: {edu.score}
                  </div>
                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {edu.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-xs text-zinc-500">
                          <span className="text-indigo-500 mt-0.5">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <motion.h3
              className="flex items-center gap-2 text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Trophy size={16} className="text-amber-400" />
              Awards & Recognition
            </motion.h3>

            <div className="space-y-4">
              {awards.map((award, i) => {
                const Icon = awardIcons[award.icon] ?? Award;
                return (
                  <motion.div
                    key={award.id}
                    className="card-glass rounded-2xl p-6 hover:border-amber-500/20 transition-colors duration-300"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/20 flex-shrink-0">
                        <Icon size={18} className="text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-zinc-100 mb-0.5">
                          {award.title}
                        </h4>
                        <p className="text-xs text-amber-500/80 font-medium mb-2">
                          @ {award.company}
                        </p>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Certifications placeholder — easy to add later */}
            <motion.div
              className="mt-4 card-glass rounded-2xl p-6 border-dashed border-zinc-700/40"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-1">
                Certifications
              </p>
              <p className="text-sm text-zinc-600">
                {/* Add your certifications here in src/lib/data.ts */}
                Cloud and AI certifications coming soon.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
