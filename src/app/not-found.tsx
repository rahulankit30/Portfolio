"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#08080f] flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
      >
        {/* 404 */}
        <motion.p
          className="text-8xl sm:text-9xl font-bold gradient-text mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
        >
          404
        </motion.p>

        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3">
          Page not found
        </h1>
        <p className="text-zinc-500 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/40"
          >
            <Home size={16} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 text-sm font-medium hover:text-white hover:border-zinc-600 transition-all"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
