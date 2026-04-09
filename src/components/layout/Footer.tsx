"use client";

import { Mail, Download, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personal, navItems } from "@/lib/data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a12]">
      {/* Gradient line */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold gradient-text mb-2">Rahul Ankit</p>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Full Stack Technical Lead building scalable systems and AI-driven
              product experiences.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/40 text-zinc-500 hover:text-zinc-200 hover:border-indigo-500/30 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/40 text-zinc-500 hover:text-zinc-200 hover:border-indigo-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/40 text-zinc-500 hover:text-zinc-200 hover:border-indigo-500/30 transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors block mb-2"
            >
              {personal.email}
            </a>
            <p className="text-sm text-zinc-600">{personal.location}</p>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-sm font-medium border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 transition-all"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Rahul Ankit. Built with Next.js &
            Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={12} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
