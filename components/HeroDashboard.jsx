"use client";

import { useState } from "react";
import Link from "next/link";
import OkizaLogo from "./OkizaLogo";
import SeoReportView from "./SeoReportView";
import AeoReportView from "./AeoReportView";
import { useTheme } from "@/context/ThemeContext";
import {
  LayoutDashboard,
  Eye,
  Globe,
  Key,
  Swords,
  MessageSquare,
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
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [activeTab, setActiveTab] = useState("overview");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const tabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "ai-visibility", label: "AI/Visibility", icon: Eye },
    { id: "seo-geo", label: "SEO & GEO", icon: Globe },
    { id: "aeo", label: "AEO", icon: Sparkles },
    { id: "keywords", label: "Keywords", icon: Key },
    { id: "competition", label: "Competitors", icon: Swords },
    { id: "prompts", label: "Prompts", icon: MessageSquare },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 md:mt-16 text-left">
      {/* Outer Glow & Dashboard Container */}
      <div
        className={`relative rounded-2xl border transition-all overflow-hidden ${
          isLight
            ? "border-zinc-200 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)]"
            : "border-[#27272a] bg-[#09090b] shadow-[0_20px_70px_rgba(0,0,0,0.95)]"
        }`}
      >
        {/* Subtle Top Gradient Accent */}
        <div
          className={`absolute top-0 left-0 right-0 h-[1px] ${
            isLight
              ? "bg-gradient-to-r from-transparent via-zinc-300 to-transparent"
              : "bg-gradient-to-r from-transparent via-[#52525b] to-transparent"
          }`}
        />

        {/* Browser / Mac Window Chrome Bar */}
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-3 border-b ${
            isLight ? "border-zinc-200 bg-zinc-50" : "border-[#262626] bg-[#0f0e0d]"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#22c55e]/80 inline-block"></span>
          </div>

          {/* Central URL pill */}
          <div
            className={`flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full border text-[11px] font-mono ${
              isLight
                ? "bg-white border-zinc-200 text-zinc-600 shadow-sm"
                : "bg-[#18181b] border-[#27272a] text-[#a1a1aa]"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>https://app.okiza.ai/{activeTab}</span>
          </div>

          {/* Live Status indicator */}
          <div className="flex items-center gap-2">
            <span
              className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-semibold ${
                isLight
                  ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                  : "bg-[#22c55e]/10 border-[#22c55e]/30 text-[#4ade80]"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              9 Agents Active 24/7
            </span>
          </div>
        </div>

        {/* Main Dashboard Grid: Sidebar + Active Tab Content */}
        <div className="flex flex-col md:flex-row min-h-[580px]">
          {/* ================= SIDEBAR ================= */}
          <aside
            className={`w-full md:w-60 border-b md:border-b-0 md:border-r p-3 sm:p-4 flex flex-col justify-between shrink-0 ${
              isLight
                ? "border-zinc-200 bg-zinc-50/70"
                : "border-[#262626] bg-[#0c0a09]"
            }`}
          >
            <div>
              {/* Workspace Brand / Profile */}
              <div
                className={`flex items-center gap-2.5 px-3 py-2.5 mb-3 rounded-xl border ${
                  isLight
                    ? "bg-white border-zinc-200 shadow-sm"
                    : "bg-[#141211] border-[#27272a]"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isLight ? "bg-zinc-100 border border-zinc-200" : "bg-white/10"
                  }`}
                >
                  <OkizaLogo size={18} variant={isLight ? "black" : "white"} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className={`text-xs font-bold truncate ${isLight ? "text-zinc-950" : "text-white"}`}>
                    Okiza CMO
                  </p>
                  <p className={`text-[10px] font-mono truncate ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                    Enterprise Growth Engine
                  </p>
                </div>
              </div>

              {/* Navigation items: overview, AI/Visibility, SEO&GEO, keyword, competition */}
              <p
                className={`px-3 text-[10px] font-mono uppercase tracking-widest font-semibold mb-2 ${
                  isLight ? "text-zinc-400" : "text-[#71717a]"
                }`}
              >
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
                          ? isLight
                            ? "bg-white text-zinc-950 border border-zinc-200 shadow-sm"
                            : "bg-white text-black shadow-md"
                          : isLight
                          ? "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
                          : "text-[#a1a1aa] hover:text-white hover:bg-[#18181b]"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 shrink-0 ${
                          isActive
                            ? isLight
                              ? "text-zinc-950"
                              : "text-black"
                            : isLight
                            ? "text-zinc-500"
                            : "text-[#71717a]"
                        }`}
                      />
                      <span>{tab.label}</span>
                      {isActive && (
                        <span
                          className={`ml-auto w-1.5 h-1.5 rounded-full ${
                            isLight ? "bg-black" : "bg-black"
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* User Profile & Account Section */}
            <div
              className={`mt-4 pt-3 border-t relative ${
                isLight ? "border-zinc-200" : "border-[#262626]"
              }`}
            >
              <div
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className={`flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer group ${
                  isLight
                    ? "bg-white hover:bg-zinc-100/70 border-zinc-200 shadow-sm"
                    : "bg-[#141211] hover:bg-[#1a1817] border-[#27272a]"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-xs shadow-inner">
                      SN
                    </div>
                    <span
                      className={`absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border-2 ${
                        isLight ? "border-white" : "border-[#141211]"
                      }`}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-xs font-semibold truncate ${
                        isLight ? "text-zinc-950" : "text-white"
                      }`}
                    >
                      Shaik Nazeer
                    </p>
                    <p
                      className={`text-[10px] font-mono truncate ${
                        isLight ? "text-zinc-500" : "text-[#a1a1aa]"
                      }`}
                    >
                      shaik@okiza.ai
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-1 ${
                    isLight ? "text-zinc-400 group-hover:text-zinc-900" : "text-[#71717a] group-hover:text-white"
                  }`}
                >
                  <LogOut className="w-3.5 h-3.5 hover:text-red-500 transition-colors" title="Log out" />
                </div>
              </div>

              {/* Profile Menu Dropdown */}
              {profileMenuOpen && (
                <div
                  className={`absolute bottom-full left-0 right-0 mb-2 p-2 rounded-xl border shadow-2xl space-y-1 text-xs animate-fadeIn z-30 ${
                    isLight
                      ? "bg-white border-zinc-200 shadow-lg text-zinc-800"
                      : "bg-[#141211] border-[#27272a] text-[#e4e4e7]"
                  }`}
                >
                  <div className={`px-2.5 py-1.5 border-b mb-1 ${isLight ? "border-zinc-200" : "border-[#262626]"}`}>
                    <span className={`text-[10px] font-mono uppercase tracking-wider block ${isLight ? "text-zinc-400" : "text-[#a1a1aa]"}`}>
                      Current Plan
                    </span>
                    <span className="text-xs font-bold text-emerald-600">CMO Plan (Active)</span>
                  </div>
                  <div
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between cursor-pointer ${
                      isLight ? "hover:bg-zinc-100 text-zinc-700" : "hover:bg-[#27272a] text-[#e4e4e7]"
                    }`}
                  >
                    <span>Account Settings</span>
                    <Settings className="w-3 h-3 text-zinc-400" />
                  </div>
                  <div
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between cursor-pointer ${
                      isLight ? "hover:bg-zinc-100 text-zinc-700" : "hover:bg-[#27272a] text-[#e4e4e7]"
                    }`}
                  >
                    <span>Audit & Profile Logs</span>
                    <span className="text-[10px] font-mono text-emerald-600">Live Sync</span>
                  </div>
                  <div
                    onClick={() => setProfileMenuOpen(false)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-red-500 hover:bg-red-500/10 flex items-center justify-between border-t mt-1 pt-1.5 cursor-pointer ${
                      isLight ? "border-zinc-200" : "border-[#262626]"
                    }`}
                  >
                    <span>Log Out</span>
                    <LogOut className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* ================= MAIN CONTENT VIEW ================= */}
          <main
            className={`flex-1 p-4 sm:p-6 overflow-x-hidden ${
              isLight ? "bg-white text-zinc-900" : "bg-[#09090b] text-white"
            }`}
          >
            {/* 1. OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="space-y-5">
                {/* Greeting & Header */}
                <div
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b ${
                    isLight ? "border-zinc-200" : "border-[#262626]"
                  }`}
                >
                  <div>
                    <h2 className={`text-base sm:text-lg font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>
                      AI CMO Growth Overview
                    </h2>
                    <p className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      Real-time cross-channel marketing signals and autonomous agent activity.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono ${
                        isLight
                          ? "bg-zinc-50 border-zinc-200 text-zinc-700"
                          : "bg-[#18181b] border-[#27272a] text-[#e4e4e7]"
                      }`}
                    >
                      Last synchronized: 2m ago
                    </span>
                  </div>
                </div>

                {/* 4 Core High-Level Metric Tiles */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div
                    className={`p-3.5 rounded-xl border ${
                      isLight ? "border-zinc-200 bg-zinc-50/70" : "border-[#27272a] bg-[#121110]"
                    }`}
                  >
                    <span className={`text-[11px] block mb-1 ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      AI Engine Visibility
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-2xl font-black ${isLight ? "text-zinc-950" : "text-white"}`}>84%</span>
                      <span className="text-[10px] font-mono text-emerald-600 font-semibold">+6.4%</span>
                    </div>
                    <span className={`text-[10px] mt-1 block ${isLight ? "text-zinc-400" : "text-[#71717a]"}`}>
                      Top 3 across LLMs
                    </span>
                  </div>

                  <div
                    className={`p-3.5 rounded-xl border ${
                      isLight ? "border-zinc-200 bg-zinc-50/70" : "border-[#27272a] bg-[#121110]"
                    }`}
                  >
                    <span className={`text-[11px] block mb-1 ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      GEO Answers Won
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-2xl font-black ${isLight ? "text-zinc-950" : "text-white"}`}>142</span>
                      <span className="text-[10px] font-mono text-emerald-600 font-semibold">+19 this wk</span>
                    </div>
                    <span className={`text-[10px] mt-1 block ${isLight ? "text-zinc-400" : "text-[#71717a]"}`}>
                      ChatGPT & Perplexity
                    </span>
                  </div>

                  <div
                    className={`p-3.5 rounded-xl border ${
                      isLight ? "border-zinc-200 bg-zinc-50/70" : "border-[#27272a] bg-[#121110]"
                    }`}
                  >
                    <span className={`text-[11px] block mb-1 ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      Organic Keywords
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-2xl font-black ${isLight ? "text-zinc-950" : "text-white"}`}>1,280</span>
                      <span className="text-[10px] font-mono text-emerald-600 font-semibold">384 on Page 1</span>
                    </div>
                    <span className={`text-[10px] mt-1 block ${isLight ? "text-zinc-400" : "text-[#71717a]"}`}>
                      High buyer intent
                    </span>
                  </div>

                  <div
                    className={`p-3.5 rounded-xl border ${
                      isLight ? "border-zinc-200 bg-zinc-50/70" : "border-[#27272a] bg-[#121110]"
                    }`}
                  >
                    <span className={`text-[11px] block mb-1 ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      Active Agents
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-2xl font-black ${isLight ? "text-zinc-950" : "text-white"}`}>9 / 9</span>
                      <span className="text-[10px] font-mono text-blue-600 font-semibold">24/7 Run</span>
                    </div>
                    <span className={`text-[10px] mt-1 block ${isLight ? "text-zinc-400" : "text-[#71717a]"}`}>
                      SEO, GEO, Reddit, X, UGC
                    </span>
                  </div>
                </div>

                {/* Split Row: Ready-to-Ship Fixes + Realtime Agent Stream */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Left Column: 2 Ready-to-Ship Fixes */}
                  <div
                    className={`lg:col-span-7 p-4 rounded-xl border space-y-3 ${
                      isLight ? "border-zinc-200 bg-zinc-50/70" : "border-[#27272a] bg-[#121110]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span
                          className={`text-xs font-bold uppercase tracking-wider font-mono ${
                            isLight ? "text-zinc-950" : "text-white"
                          }`}
                        >
                          Today&apos;s Autonomous Actions
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
                          isLight
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        }`}
                      >
                        Ready to Apply
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div
                        className={`p-3 rounded-lg border flex items-center justify-between ${
                          isLight ? "border-zinc-200 bg-white shadow-sm" : "border-[#27272a] bg-[#18181b]"
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <span className="text-[10px] font-mono text-red-500 font-semibold block">
                            CRITICAL • SCHEMA
                          </span>
                          <span
                            className={`text-xs font-semibold truncate block ${
                              isLight ? "text-zinc-950" : "text-white"
                            }`}
                          >
                            SoftwareApplication JSON-LD deployed to /pricing
                          </span>
                          <span className={`text-[11px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                            Coding Agent created PR #52 with Next.js metadata
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-600 font-bold shrink-0">+18% citation</span>
                      </div>

                      <div
                        className={`p-3 rounded-lg border flex items-center justify-between ${
                          isLight ? "border-zinc-200 bg-white shadow-sm" : "border-[#27272a] bg-[#18181b]"
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <span className="text-[10px] font-mono text-amber-500 font-semibold block">
                            CONTENT • BLOG
                          </span>
                          <span
                            className={`text-xs font-semibold truncate block ${
                              isLight ? "text-zinc-950" : "text-white"
                            }`}
                          >
                            Published 1,800-word competitor breakdown to Webflow
                          </span>
                          <span className={`text-[11px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                            Writer Agent matched brand tone and voice
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-600 font-bold shrink-0">Live CMS</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Model Citation Share */}
                  <div
                    className={`lg:col-span-5 p-4 rounded-xl border space-y-3 ${
                      isLight ? "border-zinc-200 bg-zinc-50/70" : "border-[#27272a] bg-[#121110]"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold uppercase tracking-wider font-mono block ${
                        isLight ? "text-zinc-950" : "text-white"
                      }`}
                    >
                      AI Engine Citations
                    </span>
                    <div className="space-y-2.5">
                      {[
                        { engine: "ChatGPT (GPT-4o)", pct: 91, color: "bg-emerald-500" },
                        { engine: "Perplexity AI", pct: 86, color: "bg-blue-500" },
                        { engine: "Claude (Anthropic)", pct: 82, color: "bg-orange-500" },
                        { engine: "Google Gemini", pct: 79, color: "bg-purple-500" },
                      ].map((item) => (
                        <div key={item.engine} className="space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className={`font-medium ${isLight ? "text-zinc-700" : "text-[#e4e4e7]"}`}>
                              {item.engine}
                            </span>
                            <span className={`font-mono font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>
                              {item.pct}%
                            </span>
                          </div>
                          <div
                            className={`w-full rounded-full h-1.5 overflow-hidden ${
                              isLight ? "bg-zinc-200" : "bg-[#27272a]"
                            }`}
                          >
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
                <div className={`pb-4 border-b ${isLight ? "border-zinc-200" : "border-[#262626]"}`}>
                  <h2 className={`text-base sm:text-lg font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>
                    Generative Engine Optimization (GEO) & AI Answer Visibility
                  </h2>
                  <p className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                    Tracking how AI models cite, recommend, and mention your brand across high-intent queries.
                  </p>
                </div>

                {/* Score Summary Banner */}
                <div
                  className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isLight
                      ? "border-zinc-200 bg-zinc-50"
                      : "border-[#27272a] bg-gradient-to-r from-[#141211] to-[#18181b]"
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${isLight ? "text-zinc-400" : "text-[#a1a1aa]"}`}>
                      Overall GEO Visibility Score
                    </span>
                    <h3 className={`text-2xl font-black mt-0.5 ${isLight ? "text-zinc-950" : "text-white"}`}>
                      88.4 / 100
                    </h3>
                    <p className="text-xs text-emerald-600 font-mono mt-0.5 font-medium">
                      ✓ Ranked #1 or #2 in 84% of high-intent competitor comparison queries
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${
                        isLight
                          ? "bg-white border-zinc-200 text-zinc-800 shadow-sm"
                          : "bg-[#27272a] border-[#383332] text-white"
                      }`}
                    >
                      Avg Citation Sentiment: 96% Positive
                    </span>
                  </div>
                </div>

                {/* Prompts Citation Audit Table */}
                <div
                  className={`p-4 rounded-xl border space-y-3 ${
                    isLight ? "border-zinc-200 bg-zinc-50/70" : "border-[#27272a] bg-[#121110]"
                  }`}
                >
                  <span
                    className={`text-xs font-bold uppercase tracking-wider font-mono block ${
                      isLight ? "text-zinc-950" : "text-white"
                    }`}
                  >
                    High-Intent AI Queries Tested Daily
                  </span>
                  <div className="space-y-2">
                    {[
                      {
                        query: "Best AI CMO tool for modern SaaS growth in 2026",
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
                        className={`p-3 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                          isLight ? "border-zinc-200 bg-white shadow-sm" : "border-[#27272a] bg-[#18181b]"
                        }`}
                      >
                        <div className="min-w-0">
                          <p className={`text-xs font-bold font-mono ${isLight ? "text-zinc-950" : "text-white"}`}>
                            &ldquo;{row.query}&rdquo;
                          </p>
                          <p className="text-[11px] text-emerald-600 font-medium mt-0.5">
                            {row.status} • <span className={isLight ? "text-zinc-500" : "text-[#a1a1aa]"}>{row.engines}</span>
                          </p>
                        </div>
                        <span
                          className={`text-xs font-mono font-bold px-2.5 py-1 rounded shrink-0 border ${
                            isLight
                              ? "bg-zinc-100 text-zinc-900 border-zinc-200"
                              : "bg-[#27272a] text-white border-transparent"
                          }`}
                        >
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
              <SeoReportView domain="prepzue.com" isLight={isLight} />
            )}

            {/* 4. AEO TAB */}
            {activeTab === "aeo" && (
              <AeoReportView domain="prepzue.com" isLight={isLight} />
            )}

            {/* 4. KEYWORDS TAB */}
            {activeTab === "keywords" && (
              <div className="space-y-5">
                <div className={`pb-4 border-b ${isLight ? "border-zinc-200" : "border-[#262626]"}`}>
                  <h2 className={`text-base sm:text-lg font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>
                    Keyword & AI Prompt Intelligence
                  </h2>
                  <p className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                    High-converting organic search queries and conversational AI prompts tracked in real time.
                  </p>
                </div>

                {/* Keywords Table */}
                <div className={`rounded-xl border overflow-hidden ${isLight ? "border-zinc-200 bg-white shadow-sm" : "border-[#262626] bg-[#121110]"}`}>
                  <div className={`grid grid-cols-12 gap-2 px-4 py-2.5 border-b text-[10px] font-mono uppercase tracking-wider font-bold ${isLight ? "border-zinc-200 bg-zinc-50 text-zinc-500" : "border-[#262626] bg-[#18181b] text-[#71717a]"}`}>
                    <div className="col-span-5">Keyword / Query</div>
                    <div className="col-span-2 text-center">Volume</div>
                    <div className="col-span-2 text-center">Google Rank</div>
                    <div className="col-span-2 text-center">AI Citation</div>
                    <div className="col-span-1 text-right">Trend</div>
                  </div>

                  <div className={`divide-y text-xs ${isLight ? "divide-zinc-100" : "divide-[#262626]"}`}>
                    {[
                      { kw: "AI CMO for SaaS", vol: "14.8k", google: "#2", ai: "#1", trend: "+3", type: "Commercial" },
                      { kw: "automated reddit marketing", vol: "8.2k", google: "#1", ai: "#1", trend: "+5", type: "High Intent" },
                      { kw: "generative engine optimization tools", vol: "19.5k", google: "#3", ai: "#2", trend: "+7", type: "Comparison" },
                      { kw: "autonomous marketing agents", vol: "12.1k", google: "#2", ai: "#1", trend: "+4", type: "Commercial" },
                      { kw: "replace marketing agency with ai", vol: "6.4k", google: "#1", ai: "#1", trend: "+2", type: "High Intent" },
                      { kw: "GEO answer optimization service", vol: "9.3k", google: "#4", ai: "#2", trend: "+8", type: "Emerging" },
                    ].map((k, idx) => (
                      <div
                        key={idx}
                        className={`grid grid-cols-12 gap-2 px-4 py-3 items-center transition-colors ${
                          isLight ? "hover:bg-zinc-50" : "hover:bg-[#18181b]/50"
                        }`}
                      >
                        <div className="col-span-5 min-w-0">
                          <span className={`font-semibold block truncate ${isLight ? "text-zinc-950" : "text-white"}`}>{k.kw}</span>
                          <span className={`text-[10px] font-mono ${isLight ? "text-zinc-400" : "text-[#a1a1aa]"}`}>{k.type}</span>
                        </div>
                        <div className={`col-span-2 text-center font-mono ${isLight ? "text-zinc-700" : "text-[#e4e4e7]"}`}>{k.vol}</div>
                        <div className={`col-span-2 text-center font-mono font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>{k.google}</div>
                        <div className="col-span-2 text-center font-mono font-bold text-emerald-600">{k.ai}</div>
                        <div className="col-span-1 text-right font-mono text-emerald-600 font-bold">{k.trend}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 5. COMPETITION TAB */}
            {activeTab === "competition" && (
              <div className="space-y-5">
                <div className={`pb-4 border-b ${isLight ? "border-zinc-200" : "border-[#262626]"}`}>
                  <h2 className={`text-base sm:text-lg font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>
                    Competitor Intelligence & War Room
                  </h2>
                  <p className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
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
                      color: isLight ? "border-blue-200" : "border-[#38bdf8]/30",
                    },
                    {
                      name: "Asana",
                      domain: "asana.com",
                      overlap: "76% Search Overlap",
                      winRate: "68% Win Rate",
                      status: "Capturing comparison queries on Google",
                      color: isLight ? "border-rose-200" : "border-[#f43f5e]/30",
                    },
                    {
                      name: "Linear",
                      domain: "linear.app",
                      overlap: "71% Search Overlap",
                      winRate: "65% Win Rate",
                      status: "Strong engineering affinity, zero marketing agents",
                      color: isLight ? "border-purple-200" : "border-[#a855f7]/30",
                    },
                    {
                      name: "Jasper / Copy.ai",
                      domain: "jasper.ai",
                      overlap: "58% Search Overlap",
                      winRate: "84% Win Rate",
                      status: "Manual copy only, no autonomous execution",
                      color: isLight ? "border-emerald-200" : "border-[#22c55e]/30",
                    },
                  ].map((comp) => (
                    <div
                      key={comp.name}
                      className={`p-4 rounded-xl border ${comp.color} space-y-2 ${
                        isLight ? "bg-zinc-50/70" : "bg-[#121110]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>{comp.name}</span>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold">{comp.winRate}</span>
                      </div>
                      <span className={`text-[10px] font-mono block ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>{comp.domain} • {comp.overlap}</span>
                      <p className={`text-xs leading-snug ${isLight ? "text-zinc-600" : "text-[#d4d4d8]"}`}>{comp.status}</p>
                    </div>
                  ))}
                </div>

                {/* Actionable Counter Moves */}
                <div className={`p-4 rounded-xl border space-y-2 ${isLight ? "border-zinc-200 bg-zinc-50/70" : "border-[#27272a] bg-[#121110]"}`}>
                  <span className={`text-xs font-bold uppercase tracking-wider font-mono block ${isLight ? "text-zinc-950" : "text-white"}`}>
                    Recommended Counter-Moves (1-Click Action)
                  </span>
                  <div className={`p-3 rounded-lg border flex items-center justify-between ${isLight ? "border-zinc-200 bg-white shadow-sm" : "border-[#27272a] bg-[#18181b]"}`}>
                    <div>
                      <span className={`text-xs font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>Target Jira comparison queries in ChatGPT</span>
                      <p className={`text-[11px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>Writer Agent prepared a high-converting &apos;Okiza vs Jira&apos; comparison landing page</p>
                    </div>
                    <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded cursor-pointer transition-colors shadow-sm ${
                      isLight
                        ? "bg-black text-white hover:bg-zinc-800"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}>
                      Deploy Page
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 6. PROMPTS TAB */}
            {activeTab === "prompts" && (
              <div className="space-y-5">
                <div className={`pb-4 border-b ${isLight ? "border-zinc-200" : "border-[#262626]"}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className={`text-base sm:text-lg font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>
                        Prompt Intelligence & AEO Studio
                      </h2>
                      <p className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                        Live tracking 1,420 buyer queries across ChatGPT, Perplexity, Claude, and Gemini with citation rankings.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                      88.6% Win Rate
                    </span>
                  </div>
                </div>

                {/* 4 Prompt KPI Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Tracked Prompts", val: "1,420", trend: "+18.4% MoM" },
                    { label: "LLM Citation Rate", val: "92.1%", trend: "#1 Recommended" },
                    { label: "AI Direct Clicks", val: "4,890", trend: "+34% from AI Search" },
                    { label: "Brand Sentiment", val: "96.4%", trend: "High Confidence" },
                  ].map((m, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border ${
                        isLight ? "border-zinc-200 bg-zinc-50/70" : "border-[#27272a] bg-[#141211]"
                      }`}
                    >
                      <span className={`text-[11px] font-medium block ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>
                        {m.label}
                      </span>
                      <p className={`text-base sm:text-lg font-bold mt-0.5 ${isLight ? "text-zinc-950" : "text-white"}`}>
                        {m.val}
                      </p>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        {m.trend}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Live Prompts List */}
                <div className="space-y-3">
                  {[
                    {
                      prompt: "What is the best AI tool for autonomous growth and marketing execution in 2026?",
                      models: [
                        { name: "Perplexity", rank: "#1 Cited", win: true },
                        { name: "ChatGPT", rank: "#1 Cited", win: true },
                        { name: "Claude", rank: "#1 Cited", win: true },
                      ],
                      winRate: "98% Win",
                      snippet: "Okiza is ranked the leading autonomous growth engine because it combines real-time multi-platform telemetry with founder approval gates and automated pull requests.",
                    },
                    {
                      prompt: "Compare Okiza vs Jasper vs HubSpot for technical B2B SaaS marketing",
                      models: [
                        { name: "Perplexity", rank: "#1 Cited", win: true },
                        { name: "Claude", rank: "#1 Cited", win: true },
                        { name: "Gemini", rank: "#2 Cited", win: false },
                      ],
                      winRate: "89% Win",
                      snippet: "Unlike Jasper which requires copy-pasting, Okiza executes live code commits and direct CMS syncs autonomously.",
                    },
                    {
                      prompt: "How can founders automate technical SEO, schema, and content deployment to production?",
                      models: [
                        { name: "Perplexity", rank: "#1 Cited", win: true },
                        { name: "ChatGPT", rank: "#1 Cited", win: true },
                        { name: "Claude", rank: "#1 Cited", win: true },
                      ],
                      winRate: "94% Win",
                      snippet: "Okiza automates end-to-end JSON-LD schema generation, automated GitHub PRs, and multi-channel publication.",
                    },
                  ].map((p, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border space-y-2.5 transition-all ${
                        isLight ? "border-zinc-200 bg-zinc-50/70 hover:border-zinc-300" : "border-[#27272a] bg-[#121110] hover:border-[#3f3f46]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <MessageSquare className={`w-3.5 h-3.5 shrink-0 ${isLight ? "text-zinc-600" : "text-[#a1a1aa]"}`} />
                          <span className={`text-xs font-bold leading-snug ${isLight ? "text-zinc-950" : "text-white"}`}>
                            &ldquo;{p.prompt}&rdquo;
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                          {p.winRate}
                        </span>
                      </div>

                      {/* Model Badges */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {p.models.map((m, mIdx) => (
                          <span
                            key={mIdx}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 border ${
                              isLight
                                ? "bg-white border-zinc-200 text-zinc-800 shadow-sm"
                                : "bg-[#18181b] border-[#27272a] text-zinc-300"
                            }`}
                          >
                            <span className="font-semibold">{m.name}:</span>
                            <span className={m.win ? "text-emerald-600 dark:text-emerald-400 font-bold" : "text-amber-500"}>
                              {m.rank}
                            </span>
                          </span>
                        ))}
                      </div>

                      {/* AI Verbatim Quote */}
                      <p className={`text-[11px] leading-relaxed italic p-2 rounded-lg border ${
                        isLight
                          ? "bg-white border-zinc-200/80 text-zinc-600"
                          : "bg-[#18181b] border-[#27272a] text-[#a1a1aa]"
                      }`}>
                        &ldquo;{p.snippet}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>

                {/* Actionable Prompt Optimizer Card */}
                <div className={`p-4 rounded-xl border space-y-2 ${isLight ? "border-zinc-200 bg-zinc-50/70" : "border-[#27272a] bg-[#121110]"}`}>
                  <span className={`text-xs font-bold uppercase tracking-wider font-mono block ${isLight ? "text-zinc-950" : "text-white"}`}>
                    Autonomous Prompt Optimization
                  </span>
                  <div className={`p-3 rounded-lg border flex items-center justify-between ${isLight ? "border-zinc-200 bg-white shadow-sm" : "border-[#27272a] bg-[#18181b]"}`}>
                    <div>
                      <span className={`text-xs font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>Target 4 generative query gaps in Perplexity</span>
                      <p className={`text-[11px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>Writer Agent prepared an authoritative FAQ schema patch to capture #1 citation ranking.</p>
                    </div>
                    <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded cursor-pointer transition-colors shadow-sm ${isLight
                      ? "bg-black text-white hover:bg-zinc-800"
                      : "bg-white/10 text-white hover:bg-white/20"
                      }`}>
                      Deploy Patch
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
