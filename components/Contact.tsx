"use client";

import React, { useState } from "react";
import { Mail, Send, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { portfolioContent } from "@/lib/content";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const { email } = portfolioContent.personalInfo;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    const tempErrors: typeof errors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: portfolioContent.web3FormsAccessKey.trim(),
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: `Portfolio Submission from ${formData.name.trim()}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setErrorMsg(result.message || "Failed to submit message. Please check your access key.");
      }
    } catch (err) {
      setErrorMsg("Failed to connect to the form service. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-zinc-200/20 dark:border-zinc-800/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left side copy */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-primary">
                Reach Out
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
                Let&apos;s Connect
              </h2>
            </div>
            <p className="text-foreground/70 leading-relaxed font-sans">
              Have a project in mind, want to discuss a frontend/full-stack role, or just want to say hi? Fill out the form or reach out directly via email.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs text-foreground/45 font-bold uppercase tracking-wider">Email</p>
                <a href={`mailto:${email}`} className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="card-glass p-6 md:p-8 rounded-3xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all"
                placeholder="John Doe"
              />
              {errors.name && <span className="text-xs text-red-500 font-semibold">{errors.name}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all"
                placeholder="john@example.com"
              />
              {errors.email && <span className="text-xs text-red-500 font-semibold">{errors.email}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all resize-none"
                placeholder="Hi Arjun, I'd like to talk about..."
              />
              {errors.message && <span className="text-xs text-red-500 font-semibold">{errors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold shadow-md shadow-primary/10 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  Submitting... <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {submitted && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-500 text-xs font-semibold text-center flex items-center justify-center gap-2 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Thank you! Your message was sent successfully.
              </div>
            )}

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-500 text-xs font-semibold text-center flex items-center justify-center gap-2 animate-fade-in">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {errorMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
