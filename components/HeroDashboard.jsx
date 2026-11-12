"use client";

import { useState } from "react";
import Link from "next/link";
import OkizaLogo from "./OkizaLogo";
import {
  LayoutDashboard,
  Eye,
  Globe,
  Key,
  Swords,
  ArrowUpRight,
  Sparkles,
  Bot,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Search,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Zap,
  Code2,
  User,
  LogOut,
  Settings,
} from "lucide-react";

export default function HeroDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const tabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "ai-visibility", label: "AI/Visibility", icon: Eye },
    { id: "seo-geo", label: "SEO & GEO", icon: Globe },
    { id: "keywords", label: "Keywords", icon: Key },
    { id: "competition", label: "Competition", icon: Swords },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 md:mt-16 text-left">
      {/* Outer Glow & Dashboard Container */}
      <div className="relative rounded-2xl border border-[#27272a] bg-[#09090b] shadow-[0_20px_70px_rgba(0,0,0,0.95)] overflow-hidden transition-all">
        {/* Subtle Top Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#52525b] to-transparent"></div>

        {/* Browser / Mac Window Chrome Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#262626] bg-[#0f0e0d]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#22c55e]/80 inline-block"></span>
          </div>

          {/* Central URL pill */}
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-[#18181b] border border-[#27272a] text-[11px] font-mono text-[#a1a1aa]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>https://app.okiza.ai/{activeTab}</span>
          </div>

          {/* Live Status indicator */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[10px] font-mono font-semibold text-[#4ade80]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-ping"></span>
              9 Agents Active 24/7
            </span>
          </div>
        </div>

        {/* Main Dashboard Grid: Sidebar + Active Tab Content */}
        <div className="flex flex-col md:flex-row min-h-[580px]">
          {/* ================= SIDEBAR ================= */}
          <aside className="w-full md:w-60 border-b md:border-b-0 md:border-r border-[#262626] bg-[#0c0a09] p-3 sm:p-4 flex flex-col justify-between shrink-0">
            <div>
              {/* Workspace Brand / Profile */}
              <div className="flex items-center gap-2.5 px-3 py-2.5 mb-3 rounded-xl bg-[#141211] border border-[#27272a]">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <OkizaLogo size={18} variant="white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-white truncate">Okiza CMO</p>
                  <p className="text-[10px] font-mono text-[#a1a1aa] truncate">Enterprise Growth Engine</p>
                </div>
              </div>

              {/* Navigation items requested by user: overview, AI/Visibility, SEO&GEO, keyword, compeition */}
              <p className="px-3 text-[10px] font-mono uppercase tracking-widest text-[#71717a] font-semibold mb-2">
                Intelligence Views
              </p>
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left ${
                        isActive
                          ? "bg-white text-black shadow-md"
                          : "text-[#a1a1aa] hover:text-white hover:bg-[#18181b]"
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-black" : "text-[#71717a]"}`} />
                      <span>{tab.label}</span>
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-black"></span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* User Profile & Account Section */}
            <div className="mt-4 pt-3 border-t border-[#262626] relative">
              <div
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center justify-between p-2 rounded-xl bg-[#141211] hover:bg-[#1a1817] border border-[#27272a] transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-xs shadow-inner">
                      SN
                    </div>
                    <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border-2 border-[#141211]"></span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-white truncate group-hover:text-white">
                      Shaik Nazeer
                    </p>
                    <p className="text-[10px] font-mono text-[#a1a1aa] truncate">
                      shaik@okiza.ai
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[#71717a] group-hover:text-white">
                  <LogOut className="w-3.5 h-3.5 hover:text-red-400 transition-colors" title="Log out" />
                </div>
              </div>

              {/* Profile Menu Dropdown */}
              {profileMenuOpen && (
                <div className="absolute bottom-full left-0 right-0 mb-2 p-2 rounded-xl border border-[#27272a] bg-[#141211] shadow-2xl space-y-1 text-xs animate-fadeIn z-30">
                  <div className="px-2.5 py-1.5 border-b border-[#262626] mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#a1a1aa] block">Current Plan</span>
                    <span className="text-xs font-bold text-emerald-400">CMO Plan (Active)</span>
                  </div>
                  <div className="w-full text-left px-2.5 py-1.5 rounded-lg text-[#e4e4e7] hover:bg-[#27272a] flex items-center justify-between cursor-pointer">
                    <span>Account Settings</span>
                    <Settings className="w-3 h-3 text-[#71717a]" />
                  </div>
                  <div className="w-full text-left px-2.5 py-1.5 rounded-lg text-[#e4e4e7] hover:bg-[#27272a] flex items-center justify-between cursor-pointer">
                    <span>Audit & Profile Logs</span>
                    <span className="text-[10px] font-mono text-emerald-400">Live Sync</span>
                  </div>
                  <div
                    onClick={() => setProfileMenuOpen(false)}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg text-red-400 hover:bg-red-500/10 flex items-center justify-between border-t border-[#262626] mt-1 pt-1.5 cursor-pointer"
                  >
                    <span>Log Out</span>
                    <LogOut className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* ================= MAIN CONTENT VIEW ================= */}
          <main className="flex-1 bg-[#09090b] p-4 sm:p-6 overflow-x-hidden">
            {/* 1. OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="space-y-5">
                {/* Greeting & Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#262626]">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-white">
                      AI CMO Growth Overview
                    </h2>
                    <p className="text-xs text-[#a1a1aa]">
                      Real-time cross-channel marketing signals and autonomous agent activity.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#18181b] border border-[#27272a] text-[11px] font-mono text-[#e4e4e7]">
                      Last synchronized: 2m ago
                    </span>
                  </div>
                </div>

                {/* 4 Core High-Level Metric Tiles */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl border border-[#27272a] bg-[#121110]">
                    <span className="text-[11px] text-[#a1a1aa] block mb-1">AI Engine Visibility</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-white">84%</span>
                      <span className="text-[10px] font-mono text-emerald-400">+6.4%</span>
                    </div>
                    <span className="text-[10px] text-[#71717a] mt-1 block">Top 3 across LLMs</span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[#27272a] bg-[#121110]">
                    <span className="text-[11px] text-[#a1a1aa] block mb-1">GEO Answers Won</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-white">142</span>
                      <span className="text-[10px] font-mono text-emerald-400">+19 this wk</span>
                    </div>
                    <span className="text-[10px] text-[#71717a] mt-1 block">ChatGPT & Perplexity</span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[#27272a] bg-[#121110]">
                    <span className="text-[11px] text-[#a1a1aa] block mb-1">Organic Keywords</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-white">1,280</span>
                      <span className="text-[10px] font-mono text-emerald-400">384 on Page 1</span>
                    </div>
                    <span className="text-[10px] text-[#71717a] mt-1 block">High buyer intent</span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[#27272a] bg-[#121110]">
                    <span className="text-[11px] text-[#a1a1aa] block mb-1">Active Agents</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-white">9 / 9</span>
                      <span className="text-[10px] font-mono text-blue-400">24/7 Run</span>
                    </div>
                    <span className="text-[10px] text-[#71717a] mt-1 block">SEO, GEO, Reddit, X, UGC</span>
                  </div>
                </div>

                {/* Split Row: Ready-to-Ship Fixes + Realtime Agent Stream */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Left Column: 2 Ready-to-Ship Fixes */}
                  <div className="lg:col-span-7 p-4 rounded-xl border border-[#27272a] bg-[#121110] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          Today&apos;s Autonomous Actions
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Ready to Apply
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-[#27272a] bg-[#18181b] flex items-center justify-between">
                        <div className="min-w-0 pr-2">
                          <span className="text-[10px] font-mono text-[#f87171] font-semibold block">
                            CRITICAL • SCHEMA
                          </span>
                          <span className="text-xs font-semibold text-white truncate block">
                            SoftwareApplication JSON-LD deployed to /pricing
                          </span>
                          <span className="text-[11px] text-[#a1a1aa]">Coding Agent created PR #52 with Next.js metadata</span>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400 shrink-0">+18% citation</span>
                      </div>

                      <div className="p-3 rounded-lg border border-[#27272a] bg-[#18181b] flex items-center justify-between">
                        <div className="min-w-0 pr-2">
                          <span className="text-[10px] font-mono text-[#fbbf24] font-semibold block">
                            CONTENT • BLOG
                          </span>
                          <span className="text-xs font-semibold text-white truncate block">
                            Published 1,800-word competitor breakdown to Webflow
                          </span>
                          <span className="text-[11px] text-[#a1a1aa]">Writer Agent matched brand tone and voice</span>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400 shrink-0">Live CMS</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Model Citation Share */}
                  <div className="lg:col-span-5 p-4 rounded-xl border border-[#27272a] bg-[#121110] space-y-3">
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-mono block">
                      AI Engine Citations
                    </span>
                    <div className="space-y-2.5">
                      {[
                        { engine: "ChatGPT (GPT-4o)", pct: 91, color: "bg-emerald-400" },
                        { engine: "Perplexity AI", pct: 86, color: "bg-blue-400" },
                        { engine: "Claude (Anthropic)", pct: 82, color: "bg-orange-400" },
                        { engine: "Google Gemini", pct: 79, color: "bg-purple-400" },
                      ].map((item) => (
                        <div key={item.engine} className="space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-[#e4e4e7] font-medium">{item.engine}</span>
                            <span className="font-mono text-white font-bold">{item.pct}%</span>
                          </div>
                          <div className="w-full bg-[#27272a] rounded-full h-1.5 overflow-hidden">
                            <div className={`${item.color} h-1.5 rounded-full`} style={{ width: `${item.pct}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. AI/VISIBILITY TAB */}
            {activeTab === "ai-visibility" && (
              <div className="space-y-5">
                <div className="pb-4 border-b border-[#262626]">
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    Generative Engine Optimization (GEO) & AI Answer Visibility
                  </h2>
                  <p className="text-xs text-[#a1a1aa]">
                    Tracking how AI models cite, recommend, and mention your brand across high-intent queries.
                  </p>
                </div>

                {/* Score Summary Banner */}
                <div className="p-4 rounded-xl border border-[#27272a] bg-gradient-to-r from-[#141211] to-[#18181b] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa]">
                      Overall GEO Visibility Score
                    </span>
                    <h3 className="text-2xl font-black text-white mt-0.5">88.4 / 100</h3>
                    <p className="text-xs text-emerald-400 font-mono mt-0.5">
                      ✓ Ranked #1 or #2 in 84% of high-intent competitor comparison queries
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-[#27272a] text-xs font-mono text-white">
                      Avg Citation Sentiment: 96% Positive
                    </span>
                  </div>
                </div>

                {/* Prompts Citation Audit Table */}
                <div className="p-4 rounded-xl border border-[#27272a] bg-[#121110] space-y-3">
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono block">
                    High-Intent AI Queries Tested Daily
                  </span>
                  <div className="space-y-2">
                    {[
                      {
                        query: "Best AI CMO tool for modern SaaS growth in 2025",
                        status: "Cited as #1 Recommendation",
                        engines: "ChatGPT, Perplexity",
                        score: "98%",
                      },
                      {
                        query: "How to automate Reddit and organic SEO marketing without agencies",
                        status: "Primary Source Attribution",
                        engines: "Claude, Perplexity",
                        score: "94%",
                      },
                      {
                        query: "Top autonomous marketing agent platforms compared",
                        status: "Featured in Comparison Table",
                        engines: "Gemini, ChatGPT",
                        score: "91%",
                      },
                      {
                        query: "How to fix SoftwareApplication schema for LLM search engines",
                        status: "Cited with Code Snippet",
                        engines: "ChatGPT, Claude",
                        score: "96%",
                      },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg border border-[#27272a] bg-[#18181b] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white font-mono">&ldquo;{row.query}&rdquo;</p>
                          <p className="text-[11px] text-emerald-400 mt-0.5">{row.status} • <span className="text-[#a1a1aa]">{row.engines}</span></p>
                        </div>
                        <span className="text-xs font-mono font-bold text-white bg-[#27272a] px-2.5 py-1 rounded shrink-0">
                          {row.score} Match
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 3. SEO & GEO TAB */}
            {activeTab === "seo-geo" && (
              <div className="space-y-5">
                <div className="pb-4 border-b border-[#262626]">
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    SEO & GEO Technical Health Audit
                  </h2>
                  <p className="text-xs text-[#a1a1aa]">
                    Unifying traditional Google Search performance with Answer Engine optimization.
                  </p>
                </div>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl border border-[#27272a] bg-[#121110]">
                    <span className="text-[11px] text-[#a1a1aa] block mb-1">Technical Health Score</span>
                    <span className="text-2xl font-black text-white">99 / 100</span>
                    <span className="text-[10px] text-emerald-400 font-mono mt-1 block">0 Broken Links • 100% Core Web Vitals</span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[#27272a] bg-[#121110]">
                    <span className="text-[11px] text-[#a1a1aa] block mb-1">GEO Structured Data</span>
                    <span className="text-2xl font-black text-white">100% Valid</span>
                    <span className="text-[10px] text-blue-400 font-mono mt-1 block">SoftwareApplication & FAQ JSON-LD</span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[#27272a] bg-[#121110]">
                    <span className="text-[11px] text-[#a1a1aa] block mb-1">LLM Crawl Permissions</span>
                    <span className="text-2xl font-black text-emerald-400">All Permitted</span>
                    <span className="text-[10px] text-[#a1a1aa] font-mono mt-1 block">GPTBot, ClaudeBot, PerplexityBot</span>
                  </div>
                </div>

                {/* Automated Git Fixes & Pipeline */}
                <div className="p-4 rounded-xl border border-[#27272a] bg-[#121110] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                      Automated Code & Content Patches
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Coding Agent Active</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 rounded-lg border border-[#27272a] bg-[#18181b] flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-white">PR #52: Canonical tags & OpenGraph metadata generator</span>
                        <p className="text-[11px] text-[#a1a1aa] mt-0.5">Applied to 34 routes in Next.js App Router</p>
                      </div>
                      <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Merged</span>
                    </div>

                    <div className="p-3 rounded-lg border border-[#27272a] bg-[#18181b] flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-white">PR #53: Structured Author & Organization schema on blog posts</span>
                        <p className="text-[11px] text-[#a1a1aa] mt-0.5">Boosts entity resolution for Perplexity and Google SGE</p>
                      </div>
                      <span className="text-[10px] font-mono bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">Ready for Review</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. KEYWORDS TAB */}
            {activeTab === "keywords" && (
              <div className="space-y-5">
                <div className="pb-4 border-b border-[#262626]">
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    Keyword & AI Prompt Intelligence
                  </h2>
                  <p className="text-xs text-[#a1a1aa]">
                    High-converting organic search queries and conversational AI prompts tracked in real time.
                  </p>
                </div>

                {/* Keywords Table */}
                <div className="rounded-xl border border-[#262626] bg-[#121110] overflow-hidden">
                  <div className="grid grid-cols-12 gap-2 px-4 py-2.5 border-b border-[#262626] bg-[#18181b] text-[10px] font-mono uppercase tracking-wider text-[#71717a] font-bold">
                    <div className="col-span-5">Keyword / Query</div>
                    <div className="col-span-2 text-center">Volume</div>
                    <div className="col-span-2 text-center">Google Rank</div>
                    <div className="col-span-2 text-center">AI Citation</div>
                    <div className="col-span-1 text-right">Trend</div>
                  </div>

                  <div className="divide-y divide-[#262626] text-xs">
                    {[
                      { kw: "AI CMO for SaaS", vol: "14.8k", google: "#2", ai: "#1", trend: "+3", type: "Commercial" },
                      { kw: "automated reddit marketing", vol: "8.2k", google: "#1", ai: "#1", trend: "+5", type: "High Intent" },
                      { kw: "generative engine optimization tools", vol: "19.5k", google: "#3", ai: "#2", trend: "+7", type: "Comparison" },
                      { kw: "autonomous marketing agents", vol: "12.1k", google: "#2", ai: "#1", trend: "+4", type: "Commercial" },
                      { kw: "replace marketing agency with ai", vol: "6.4k", google: "#1", ai: "#1", trend: "+2", type: "High Intent" },
                      { kw: "GEO answer optimization service", vol: "9.3k", google: "#4", ai: "#2", trend: "+8", type: "Emerging" },
                    ].map((k, idx) => (
                      <div key={idx} className="grid grid-cols-12 gap-2 px-4 py-3 items-center hover:bg-[#18181b]/50 transition-colors">
                        <div className="col-span-5 min-w-0">
                          <span className="font-semibold text-white block truncate">{k.kw}</span>
                          <span className="text-[10px] font-mono text-[#a1a1aa]">{k.type}</span>
                        </div>
                        <div className="col-span-2 text-center font-mono text-[#e4e4e7]">{k.vol}</div>
                        <div className="col-span-2 text-center font-mono font-bold text-white">{k.google}</div>
                        <div className="col-span-2 text-center font-mono font-bold text-emerald-400">{k.ai}</div>
                        <div className="col-span-1 text-right font-mono text-emerald-400 font-bold">{k.trend}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 5. COMPETITION TAB */}
            {activeTab === "competition" && (
              <div className="space-y-5">
                <div className="pb-4 border-b border-[#262626]">
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    Competitor Intelligence & War Room
                  </h2>
                  <p className="text-xs text-[#a1a1aa]">
                    Monitoring 4 key rivals across organic search, ad spend, and generative engine recommendations.
                  </p>
                </div>

                {/* Competitors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      name: "Jira / Atlassian",
                      domain: "atlassian.com/jira",
                      overlap: "84% Search Overlap",
                      winRate: "72% Win Rate",
                      status: "Vulnerable on speed & AI agent agility",
                      color: "border-[#38bdf8]/30",
                    },
                    {
                      name: "Asana",
                      domain: "asana.com",
                      overlap: "76% Search Overlap",
                      winRate: "68% Win Rate",
                      status: "Capturing comparison queries on Google",
                      color: "border-[#f43f5e]/30",
                    },
                    {
                      name: "Linear",
                      domain: "linear.app",
                      overlap: "71% Search Overlap",
                      winRate: "65% Win Rate",
                      status: "Strong engineering affinity, zero marketing agents",
                      color: "border-[#a855f7]/30",
                    },
                    {
                      name: "Jasper / Copy.ai",
                      domain: "jasper.ai",
                      overlap: "58% Search Overlap",
                      winRate: "84% Win Rate",
                      status: "Manual copy only, no autonomous execution",
                      color: "border-[#22c55e]/30",
                    },
                  ].map((comp) => (
                    <div key={comp.name} className={`p-4 rounded-xl border ${comp.color} bg-[#121110] space-y-2`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">{comp.name}</span>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold">{comp.winRate}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#a1a1aa] block">{comp.domain} • {comp.overlap}</span>
                      <p className="text-xs text-[#d4d4d8] leading-snug">{comp.status}</p>
                    </div>
                  ))}
                </div>

                {/* Actionable Counter Moves */}
                <div className="p-4 rounded-xl border border-[#27272a] bg-[#121110] space-y-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono block">
                    Recommended Counter-Moves (1-Click Action)
                  </span>
                  <div className="p-3 rounded-lg border border-[#27272a] bg-[#18181b] flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white">Target Jira comparison queries in ChatGPT</span>
                      <p className="text-[11px] text-[#a1a1aa]">Writer Agent prepared a high-converting &apos;Okiza vs Jira&apos; comparison landing page</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-white bg-white/10 px-3 py-1.5 rounded cursor-pointer hover:bg-white/20 transition-colors">
                      Deploy Page
                    </span>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

