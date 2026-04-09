"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  external?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  download,
  external,
  disabled,
  type = "button",
  loading,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080f] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-900/40 hover:shadow-indigo-800/50 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-[#141422] text-zinc-100 border border-white/10 hover:border-indigo-500/40 hover:bg-[#1a1a2e] hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "text-zinc-400 hover:text-white hover:bg-white/5 active:bg-white/10",
    outline:
      "border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400 hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = loading ? (
    <>
      <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      {children}
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileTap={{ scale: 0.97 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileTap={{ scale: 0.97 }}
    >
      {inner}
    </motion.button>
  );
}
