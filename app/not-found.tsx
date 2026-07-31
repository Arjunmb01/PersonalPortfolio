"use client";

import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 grid-bg relative overflow-hidden">
      {/* Glow spots */}
      <div className="glow-spot top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="glow-spot bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 bg-accent opacity-30" />

      <div className="max-w-md w-full text-center z-10 card-glass p-8 md:p-12 rounded-3xl flex flex-col items-center gap-6">
        <div className="p-4 rounded-full bg-primary/10 border border-primary/20 text-primary animate-pulse">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="font-display font-black text-6xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
            404
          </h1>
          <h2 className="font-display font-bold text-xl text-foreground">
            Page Not Found
          </h2>
          <p className="text-sm text-foreground/60 leading-relaxed font-sans">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-primary/20 duration-300"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
