"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { navItems } from "@/lib/data";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = navItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelected(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      }
      if (e.key === "Enter" && filtered[selected]) {
        navigate(filtered[selected].href);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, filtered, selected, onClose]);

  const navigate = (href: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] command-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="fixed inset-0 z-[61] flex items-start justify-center pt-[20vh] px-4 pointer-events-none">
            <motion.div
              className="w-full max-w-md pointer-events-auto"
              initial={{ opacity: 0, scale: 0.93, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -5 }}
              transition={{ duration: 0.2, ease: "easeOut" as const }}
            >
              <div className="card-glass rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/5">
                  <Search size={16} className="text-zinc-500 flex-shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Navigate to..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setSelected(0);
                    }}
                    className="flex-1 bg-transparent text-zinc-100 placeholder-zinc-600 text-sm outline-none"
                  />
                  <button
                    onClick={onClose}
                    className="text-zinc-600 hover:text-zinc-400 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Results */}
                <div className="py-1.5">
                  {filtered.length === 0 ? (
                    <p className="text-zinc-600 text-sm px-4 py-3">No results</p>
                  ) : (
                    filtered.map((item, i) => (
                      <button
                        key={item.href}
                        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                          i === selected
                            ? "bg-indigo-500/15 text-indigo-300"
                            : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                        }`}
                        onClick={() => navigate(item.href)}
                        onMouseEnter={() => setSelected(i)}
                      >
                        <span>{item.label}</span>
                        <kbd className="text-xs text-zinc-600 bg-zinc-800/80 border border-zinc-700/50 px-1.5 py-0.5 rounded font-mono">
                          ↵
                        </kbd>
                      </button>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center gap-4 px-4 py-2.5 border-t border-white/5 text-xs text-zinc-700 font-mono">
                  <span>↑↓ navigate</span>
                  <span>↵ select</span>
                  <span>esc close</span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
