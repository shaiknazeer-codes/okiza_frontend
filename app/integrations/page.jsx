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
                Okiza reads your site, Search Console and Analytics, then hands back ready work — GEO and SEO fixes, articles, UGC videos, and X posts. Approve it, and it publishes to WordPress, Webflow, Framer, Wix, HubSpot, GitHub, and X (Twitter).
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

        {/* SUPPORTED NATIVE INTEGRATIONS IN SEQUENCE (9 PLATFORMS) */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1560px] mx-auto border-t border-[#262626]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#a1a1aa] uppercase mb-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block" />
                VERIFIED PLATFORMS
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                9 Supported Native Integrations
              </h2>
              <p className="text-xs sm:text-sm text-[#71717a] mt-1">
                Zero-code setup. Connect your verified accounts via OAuth 2.0 or secure API keys.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 rounded-full self-start sm:self-auto">
              9 Active Platforms
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                id: "wordpress",
                name: "WordPress",
                category: "CMS & Blog",
                badge: "Auto-Publish",
                desc: "Auto-publish SEO articles, landing pages, and metadata updates directly to your WordPress REST API without leaving Okiza.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#3880a6">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.2a10.8 10.8 0 0 1 10.8 10.8c0 5.09-3.52 9.35-8.25 10.51l-4.75-13.8c.8-.04 1.54-.12 1.54-.12.56-.07.5-.9-.06-.86 0 0-1.68.14-2.78.14-1.03 0-2.78-.14-2.78-.14-.56-.04-.62.8-.06.86 0 0 .72.08 1.45.12l2.22 6.13-3.13 9.36A10.77 10.77 0 0 1 1.2 12C1.2 6.035 6.035 1.2 12 1.2zm6.27 4.96c.55.77.86 1.7.86 2.7 0 1.83-1.05 3.92-2.13 6.09l-3.35 10.02c4.15-1.37 7.15-5.3 7.15-9.97 0-3.47-1.64-6.55-4.17-8.52l1.64-.32zM3.44 7.6c-.66 1.27-1.04 2.73-1.04 4.4 0 3.42 1.6 6.47 4.07 8.44L2.83 9.4c.3-.03.58-.06.61-.06.56-.07.5-.9-.06-.86l.06-.88zm8.68 7.37l2.84 8.28c.41.05.83.08 1.25.08.37 0 .73-.02 1.09-.06l-5.18-15.02z"/>
                  </svg>
                ),
              },
              {
                id: "webflow",
                name: "Webflow",
                category: "Visual CMS",
                badge: "Collection Sync",
                desc: "Synchronize CMS items, publish programmatic blog collections, and update localized landing pages automatically.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="#146EF5" className="w-5 h-5">
                    <path d="M17.842 5.437l-3.325 9.773-2.715-9.773H7.49l-3.09 13.126h4.59l1.657-6.536 2.457 6.536h3.879l4.499-13.126h-3.64z"/>
                  </svg>
                ),
              },
              {
                id: "framer",
                name: "Framer",
                category: "Design CMS",
                badge: "Design Sync",
                desc: "Push drafted articles and new customer story pages directly into your Framer CMS with pre-styled typography and components.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 text-white">
                    <path d="M4 2h16v7h-8l8 7H4v-7h8L4 2zm0 14h8l-8 7v-7z" />
                  </svg>
                ),
              },
              {
                id: "wix",
                name: "Wix",
                category: "Website & Blog",
                badge: "Auto-Draft",
                desc: "Connect your Wix Studio or Wix Blog. Scheduled releases, structured data, and image alt-tag fixes deployed with 1 click.",
                icon: (
                  <span className="text-xs font-black tracking-tight text-white font-sans select-none">
                    wix
                  </span>
                ),
              },
              {
                id: "hubspot",
                name: "HubSpot",
                category: "CRM & Inbound",
                badge: "Marketing Hub",
                desc: "Sync blog drafts, landing page variants, and lead capture workflows straight into your HubSpot Marketing Hub.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="#FF7A59" className="w-5 h-5">
                    <path d="M18.8 9.4c0-.9-.7-1.6-1.6-1.6-.2 0-.4 0-.6.1V5.7c.6-.4 1-.9 1-1.7 0-1.1-.9-2-2-2s-2 .9-2 2c0 .7.4 1.3 1 1.7v2.2c-.2-.1-.4-.1-.6-.1-.9 0-1.6.7-1.6 1.6 0 .6.4 1.2 1 1.5v3.4l-2.4 1.4c-.4-.5-1-.8-1.7-.8-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2c1 0 1.9-.7 2.1-1.7l2.5-1.4c.4.4.9.6 1.5.6.9 0 1.6-.7 1.6-1.6 0-.6-.3-1.1-.8-1.4v-3.5c.6-.3.9-.9.9-1.5zm-3.2-6c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-5.7 17.5c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm6.3-8.8c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/>
                  </svg>
                ),
              },
              {
                id: "github",
                name: "GitHub",
                category: "Code & CI/CD",
                badge: "Pull Requests",
                desc: "The Coding Agent opens pull requests with technical SEO fixes, schema markups, robots.txt, and metadata additions in your repo.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                ),
              },
              {
                id: "google-search-console",
                name: "Google Search Console",
                category: "Search Telemetry",
                badge: "Rankings",
                desc: "Okiza pulls daily click, impression, and average position telemetry to spot emerging keyword gaps and ranking opportunities.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M4 17.5a1.5 1.5 0 0 0 1.5 1.5H8v-5H4v3.5z" fill="#00832d" />
                    <path d="M9.5 19H12v-8H9.5v8z" fill="#ffba00" />
                    <path d="M13.5 19H16a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-2.5V19z" fill="#0066da" />
                    <path d="M4 12.5V8a2 2 0 0 1 2-2h4l-6 6.5z" fill="#2684fc" />
                  </svg>
                ),
              },
              {
                id: "google-analytics",
                name: "Google Analytics 4",
                category: "Traffic Attribution",
                badge: "Attribution",
                desc: "Track full-funnel conversion attribution from organic search, LLM answer engines, Reddit leads, and creator campaigns.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M19.5 4h-2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" fill="#F9AB00" />
                    <path d="M12.5 10h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" fill="#E37400" />
                    <circle cx="5.5" cy="17.5" r="2.5" fill="#E37400" />
                  </svg>
                ),
              },
              {
                id: "x-twitter",
                name: "X (Twitter)",
                category: "Social Reach",
                badge: "Viral Threads",
                desc: "Publish viral breakdown threads, real-time product releases, and automated industry commentary with smart scheduling.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 text-white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-[#0c0c0e] border border-[#27272a] hover:border-[#3f3f46] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#18181b] border border-[#27272a] flex items-center justify-center shrink-0 group-hover:border-white/20 transition-all">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a] bg-[#141416] border border-[#27272a] px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {item.name}
                  </h3>
                  <span className="text-[11px] font-mono text-[#a1a1aa] block mb-2">
                    {item.category}
                  </span>
                  <p className="text-xs text-[#71717a] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#1f1f23] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Ready to Connect
                  </span>
                  <span className="text-xs text-[#a1a1aa] group-hover:text-white transition-colors flex items-center gap-1">
                    Connect
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
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
                Review work directly in Okiza. When you hit approve, the content goes live across your entire stack instantly.
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
