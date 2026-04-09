"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowDown, Download, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { personal } from "@/lib/data";

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  },
};

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle animated particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; vx: number; vy: number; r: number; a: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Spawn particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.a})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-gradient"
    >
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Orbs */}
      <div
        className="hero-orb w-[600px] h-[600px] top-[-100px] left-[-200px] opacity-20"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="hero-orb w-[400px] h-[400px] bottom-[-50px] right-[-100px] opacity-15"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="hero-orb w-[300px] h-[300px] top-[30%] right-[10%] opacity-10"
        style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6"
        variants={stagger.container}
        initial="hidden"
        animate="show"
      >
        {/* Avatar */}
        <motion.div variants={stagger.item} className="flex justify-center mb-6">
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-md opacity-60"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)" }}
            />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-indigo-500/50 overflow-hidden">
              <Image
                src="/avatar.png"
                alt="Rahul Ankit"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Available dot */}
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-[#08080f] animate-pulse" />
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div variants={stagger.item} className="flex justify-center mb-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
            <Sparkles size={14} />
            <span>Available for exciting opportunities</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={stagger.item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-zinc-100">Rahul </span>
          <span className="gradient-text">Ankit</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={stagger.item}
          className="text-xl sm:text-2xl md:text-3xl text-zinc-400 font-light mb-6 tracking-wide"
        >
          {personal.title}
        </motion.p>

        {/* Summary */}
        <motion.p
          variants={stagger.item}
          className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          8+ years building{" "}
          <span className="text-zinc-300">scalable distributed systems</span>,
          leading engineering teams, and shipping{" "}
          <span className="text-zinc-300">AI-powered product innovations</span>{" "}
          that serve millions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={stagger.item}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <Button variant="primary" size="lg" onClick={scrollToProjects}>
            View Projects
          </Button>
          <Button variant="secondary" size="lg" onClick={scrollToContact}>
            Contact Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            href={personal.resumeUrl}
            download
          >
            <Download size={16} />
            Resume
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={stagger.item}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: GithubIcon, href: personal.github, label: "GitHub" },
            { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="group flex items-center gap-2 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-zinc-500 hover:text-zinc-200 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-200"
            >
              <Icon size={18} />
              <span className="text-sm hidden sm:block">{label}</span>
            </a>
          ))}
          <div className="w-px h-6 bg-zinc-800" />
          <span className="text-sm text-zinc-600 hidden sm:block">
            {personal.location}
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
