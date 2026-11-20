"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroDashboard from "./HeroDashboard";
import { useTheme } from "@/context/ThemeContext";

export default function OkizaHeroSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [website, setWebsite] = useState("");
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -2000, y: -2000 });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -2000, y: -2000 })}
      className="relative w-full pt-10 md:pt-12 pb-4 md:pb-6 px-6 md:px-12 bg-transparent text-center overflow-hidden"
    >
      {/* Dark mode only ambient visual effects */}
      {!isLight && (
        <>
          {/* 1. Interactive Cursor Tracking Spotlight */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.04), transparent 70%)`,
            }}
          />

          {/* 2. Volumetric Celestial Beacon */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] rounded-full blur-[150px] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.04)_45%,transparent_70%)] animate-ambient opacity-80" />

          {/* 3. Deep Cinematic Edge Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_90%_90%_at_50%_50%,transparent_35%,#000000_98%)]" />

          {/* Decorative side glow bars */}
          <div className="absolute left-0 top-10 bottom-20 w-[3px] bg-gradient-to-b from-transparent via-[#3a3530] to-transparent opacity-50 z-10"></div>
          <div className="absolute right-0 top-10 bottom-20 w-[3px] bg-gradient-to-b from-transparent via-[#3a3530] to-transparent opacity-50 z-10"></div>
        </>
      )}

      <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Top Pill Badge: NEW — OKIZA MCP | Run marketing from any chat → */}
        <Link
          href="/integrations"
          className={`inline-flex items-center rounded-full p-0.5 shadow-sm mb-10 transition-colors group border ${isLight
            ? "border-zinc-200 bg-white hover:border-zinc-300"
            : "border-[#383332] bg-[#1a1716] hover:border-[#57534e]"
            }`}
        >
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase ${isLight
              ? "bg-zinc-100 text-black border border-zinc-200"
              : "bg-[#f5f5f4] text-[#1c1917]"
              }`}
          >
            NEW — OKIZA MCP
          </span>
          <span
            className={`px-3 py-1 text-[13px] font-medium flex items-center gap-1.5 ${isLight ? "text-black" : "text-[#a8a29e]"
              }`}
          >
            Run marketing from any chat
            <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform ${isLight ? "text-black" : ""}`} />
          </span>
        </Link>

        {/* Big Bold Headline */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-[-0.03em] leading-[1.05] mb-6 max-w-3xl ${isLight ? "text-[#000000]" : "text-white"
            }`}
        >
          Meet Okiza,
          <br />
          the AI CMO.
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-lg mb-10 ${isLight ? "text-[#6b7280]" : "text-[#a1a1aa]"
            }`}
        >
          The only AI CMO you need for growth and marketing.
        </p>

        {/* Input + CTA Button */}
        <div className="w-full max-w-lg mx-auto mb-3">
          <div
            className={`flex items-center rounded-2xl p-1.5 pl-4 transition-all border ${isLight
              ? "border-[#e5e7eb] bg-[#ffffff] shadow-[0_4px_20px_rgba(0,0,0,0.05)] focus-within:border-[#9ca3af]"
              : "border-[#27272a] bg-[#141414] shadow-[0_10px_30px_rgba(0,0,0,0.8)] focus-within:border-[#52525b]"
              }`}
          >
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="yourcompany.com"
              className={`flex-1 bg-transparent text-sm py-2.5 min-w-0 focus:outline-none ${isLight
                ? "text-[#111827] placeholder-[#9ca3af]"
                : "text-white placeholder-[#71717a]"
                }`}
            />
            <Link
              href={website.trim() ? `/dashboard?domain=${encodeURIComponent(website.trim())}` : "/dashboard"}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shrink-0 flex items-center gap-1.5 shadow-sm ${isLight
                ? "bg-[#18181b] text-[#ffffff] hover:bg-black"
                : "bg-white text-black hover:bg-[#e4e4e7]"
                }`}
            >
              <span>Start Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Helper text */}
        <p className={`text-xs mb-16 ${isLight ? "text-[#9ca3af]" : "text-[#71717a]"}`}>
          Free to start · No credit card required
        </p>

        {/* Agent showcase bar */}
        <div className="flex flex-col items-center gap-5">
          <p
            className={`text-[11px] font-mono tracking-[0.2em] uppercase font-semibold ${isLight ? "text-[#9ca3af]" : "text-[#71717a]"
              }`}
          >
            CMO has 18+ marketing agents running 24/7
          </p>

          <div className="flex items-center flex-wrap justify-center gap-2">
            {[
              {
                name: "Influencer",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-blue-400">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
              {
                name: "Reddit",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-orange-500">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 0-.463.33.33 0 0 0-.462 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.216-.094z" />
                  </svg>
                ),
              },
              {
                name: "SEO",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-green-500">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                ),
              },
              {
                name: "Writer",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-teal-400">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                  </svg>
                ),
              },
              {
                name: "GEO",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-emerald-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                ),
              },
              {
                name: "Coding",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-yellow-400">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                ),
              },
              {
                name: "UGC",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-pink-400">
                    <path d="m22 8-6 4 6 4V8Z"></path>
                    <rect x="2" y="6" width="14" height="12" rx="2" ry="2"></rect>
                  </svg>
                ),
              },
              {
                name: "X",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className={`w-3.5 h-3.5 ${isLight ? "text-zinc-950" : "text-white"}`}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                name: "LinkedIn",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#0a66c2]">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                  </svg>
                ),
              },
            ].map((agent) => (
              <Link
                key={agent.name}
                href={
                  agent.name === "Influencer"
                    ? "/agents/influencer"
                    : agent.name === "Reddit"
                      ? "/agents/reddit"
                      : agent.name === "SEO"
                        ? "/agents/seo"
                        : agent.name === "Writer"
                          ? "/agents/writer"
                          : agent.name === "GEO"
                            ? "/agents/geo"
                            : agent.name === "Coding"
                              ? "/agents/coding"
                              : agent.name === "UGC"
                                ? "/agents/ugc-videos"
                                : agent.name === "X"
                                  ? "/agents/x-twitter"
                                  : agent.name === "LinkedIn"
                                    ? "/agents/linkedin"
                                    : "#"
                }
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-medium transition-all ${isLight
                  ? "border-[#e5e7eb] bg-[#ffffff] text-[#374151] hover:bg-[#f9fafb] hover:border-[#d1d5db] shadow-sm"
                  : "border-[#27272a] bg-[#141414] text-[#e4e4e7] hover:border-[#52525b] hover:bg-[#1c1c1c]"
                  }`}
              >
                {agent.icon}
                <span>{agent.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Hero Dashboard with sidebar: Overview, AI/Visibility, SEO&GEO, Keywords, Competition */}
      <HeroDashboard />
    </section>
  );
}

