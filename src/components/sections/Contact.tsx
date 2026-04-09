"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, XCircle, Copy, Check, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { personal } from "@/lib/data";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.message.trim() || data.message.trim().length < 20)
    errors.message = "Message must be at least 20 characters.";
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<FormState>("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setState("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setState("error");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#0a0a14]">
      {/* bg glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none opacity-10"
        style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's Work Together"
          description="Have an interesting project, an open role, or just want to connect? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — contact info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <div>
              <p className="text-zinc-300 leading-relaxed mb-6">
                I&apos;m always open to discussing interesting engineering
                challenges, staff/senior engineering roles, consulting
                opportunities, or open-source collaboration.
              </p>
              <p className="text-zinc-500 text-sm">
                Based in {personal.location}. Available for remote and hybrid
                roles globally.
              </p>
            </div>

            {/* Email with copy */}
            <div className="card-glass rounded-2xl p-5">
              <p className="text-xs text-zinc-600 uppercase tracking-widest mb-2">
                Email
              </p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors truncate"
                >
                  {personal.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="flex-shrink-0 p-1.5 rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/60 transition-all"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check size={14} className="text-green-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="card-glass rounded-2xl p-5">
              <p className="text-xs text-zinc-600 uppercase tracking-widest mb-2">
                Phone
              </p>
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <Phone size={14} />
                {personal.phone}
              </a>
            </div>

            {/* Social links */}
            <div className="card-glass rounded-2xl p-5">
              <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">
                Social
              </p>
              <div className="space-y-3">
                {[
                  { icon: GithubIcon, label: "GitHub", href: personal.github, sub: "rahulankit30" },
                  { icon: LinkedinIcon, label: "LinkedIn", href: personal.linkedin, sub: "rahul-ankit-304454152" },
                  { icon: Mail, label: "Email", href: `mailto:${personal.email}`, sub: personal.email },
                ].map(({ icon: Icon, label, href, sub }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/40 group-hover:border-indigo-500/30 transition-colors">
                      <Icon size={14} />
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none">{label}</p>
                      <p className="text-xs text-zinc-600 mt-0.5 truncate max-w-[160px]">
                        {sub}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
          >
            {state === "success" ? (
              <div className="card-glass rounded-2xl p-10 flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-green-400/10 border border-green-400/20 mb-5">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                  Message sent!
                </h3>
                <p className="text-zinc-400 text-sm max-w-sm mb-6">
                  Thanks for reaching out. I typically reply within 24–48 hours.
                </p>
                <Button variant="secondary" onClick={() => setState("idle")}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-glass rounded-2xl p-6 sm:p-8 space-y-5"
                noValidate
              >
                {state === "error" && (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <XCircle size={16} className="flex-shrink-0" />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-zinc-400 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="form-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-zinc-400 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="form-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-zinc-400 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, role, or idea..."
                    className="form-input w-full rounded-xl px-4 py-3 text-sm resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  loading={state === "loading"}
                  disabled={state === "loading"}
                >
                  <Send size={15} />
                  {state === "loading" ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-zinc-600 text-center">
                  I usually respond within 24–48 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
