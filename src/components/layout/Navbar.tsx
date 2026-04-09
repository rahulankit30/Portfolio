"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Command } from "lucide-react";
import { navItems, personal } from "@/lib/data";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Detect scroll for bg opacity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = navItems.map((n) => n.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Cmd+K shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setPaletteOpen((p) => !p);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-[#08080f]/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="font-bold text-zinc-100 text-lg tracking-tight hover:text-indigo-400 transition-colors"
          >
            <span className="gradient-text">RA</span>
            <span className="text-zinc-400">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.filter((n) => n.label !== "Home").map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "text-indigo-400"
                      : "text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      layoutId="navIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setPaletteOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-zinc-500 bg-zinc-800/40 border border-zinc-700/40 hover:border-indigo-500/30 hover:text-zinc-300 transition-all font-mono"
            >
              <Command size={12} />
              <span>K</span>
            </button>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/40"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-[#08080f]/98 backdrop-blur-lg flex flex-col pt-20 px-6 pb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-2 mb-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  className={cn(
                    "text-left px-4 py-3 rounded-xl text-lg font-medium transition-colors",
                    activeSection === item.href.replace("#", "")
                      ? "text-indigo-400 bg-indigo-500/10 border border-indigo-500/20"
                      : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
                  )}
                  onClick={() => scrollTo(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition-all"
              onClick={() => setMobileOpen(false)}
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
