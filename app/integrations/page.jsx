"use client";

import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StackFlowDiagram from "@/components/StackFlowDiagram";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function IntegrationsPage() {
  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      {/* Top sticky navigation bar */}
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION MATCHING SCREENSHOT */}
        <section className="w-full pt-16 pb-12 md:pt-24 md:pb-16 px-4 sm:px-8 lg:px-12 max-w-[1560px] mx-auto flex flex-col">
          {/* Top Row: Two-Column Header matching the user screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
            {/* Left Header */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#a1a1aa] uppercase mb-4">
                <span className="w-2 h-2 bg-[#ffffff] inline-block" />
                STEP 3 — PUBLISH
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[54px] font-semibold text-white tracking-tight leading-[1.08]">
                Connect your stack.
                <br />
                Publish without leaving it.
              </h1>
            </div>

            {/* Right Paragraph */}
            <div className="lg:pt-8">
              <p className="text-base sm:text-lg text-[#a1a1aa] leading-[1.7]">
                Okiza reads your site, Search Console and Analytics, then hands back ready work — GEO and SEO fixes, articles, UGC videos, and X posts. Approve it, and it publishes to WordPress, Webflow, Framer, Wix, HubSpot, Sanity, GitHub, X (Twitter), Instagram, Facebook.
              </p>
            </div>
          </div>

          {/* Interactive Stack Flow Visualizer with SVG lines and animated flow pulses */}
          <div className="w-full bg-[#0a0a0a] border border-[#262626] rounded-[28px] p-2 sm:p-4 lg:p-6 relative overflow-hidden shadow-2xl">
            {/* Subtle background mesh */}
            <div
              className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"
              aria-hidden="true"
            />

            {/* Visualizer component containing exact SVG path and animation lines */}
            <StackFlowDiagram />
          </div>
        </section>

        {/* 3-STEP INTEGRATION ARCHITECTURE */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1560px] mx-auto border-t border-[#262626]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
              How Okiza Connects & Publishes
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
              Closed-loop marketing execution with zero context-switching and 100% human-in-the-loop oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#1f1f23] border border-[#2e2e33] flex items-center justify-center font-mono text-sm font-semibold text-white mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                1-Click Authorisation
              </h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Connect your CMS, code repositories, and social channels in seconds. Okiza uses standard OAuth 2.0 with granular, read/draft scopes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#1f1f23] border border-[#2e2e33] flex items-center justify-center font-mono text-sm font-semibold text-white mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Autonomous Draft Engine
              </h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Okiza continuously detects ranking gaps, crafts brand-voice articles, opens technical PRs, and prepares ready-to-refine social threads.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#1f1f23] border border-[#2e2e33] flex items-center justify-center font-mono text-sm font-semibold text-white mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Instant Publish On Approval
              </h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Review work directly in Okiza or via WhatsApp/Telegram. When you hit approve, the content goes live across your entire stack instantly.
              </p>
            </div>
          </div>
        </section>

        {/* SECURITY & BAN SAFETY ASSURANCE */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1560px] mx-auto border-t border-[#262626]">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#18181b] to-[#0f0f10] border border-[#2e2e33] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#27272a] border border-[#3f3f46] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#4ade80]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                  Enterprise-Grade Security & 100% Ban-Safe
                </h3>
                <p className="text-sm text-[#a1a1aa] max-w-xl leading-relaxed">
                  Okiza never acts without your explicit sign-off. All publishing connects through official platform APIs or authenticated personal profiles with strict rate limits, zero spam bots, and complete audit logging.
                </p>
              </div>
            </div>

            <Link
              href="/#pricing"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-colors shrink-0 flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
