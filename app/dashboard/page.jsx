"use client";

import { useState } from "react";
import Link from "next/link";
import OkizaLogo from "@/components/OkizaLogo";
import {
  LayoutDashboard,
  Eye,
  Globe,
  Key,
  Swords,
  Sparkles,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  AlertCircle,
  Clock,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  Search,
  Filter,
  RefreshCw,
  LogOut,
  Settings,
  Zap,
  Layers,
  ArrowUpRight,
  Code2,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "ai-visibility" | "seo-geo" | "keywords" | "competition"
  const [domain, setDomain] = useState("prepzue.com");
  const [isSwitchingDomain, setIsSwitchingDomain] = useState(false);
  const [tempDomain, setTempDomain] = useState("prepzue.com");
  const [selectedModel, setSelectedModel] = useState("All AI models");
  const [selectedRegion, setSelectedRegion] = useState("India");
  const [selectedRun, setSelectedRun] = useState("Latest run");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "ai-visibility", label: "AI/Visibility", icon: Eye },
    { id: "seo-geo", label: "SEO & GEO", icon: Globe },
    { id: "keywords", label: "Keywords", icon: Key },
    { id: "competition", label: "Competition", icon: Swords },
  ];

  const handleDomainSubmit = (e) => {
    e.preventDefault();
    if (tempDomain.trim()) {
      setDomain(tempDomain.trim().toLowerCase().replace(/^https?:\/\//, ""));
      setIsSwitchingDomain(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff] font-sans flex flex-col selection:bg-[#ffffff] selection:text-[#000000]">
      {/* Top Application Bar */}
      <header className="w-full border-b border-[#262626] bg-[#0c0c0e] px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 text-xs sticky top-0 z-40">
        {/* Left: Brand + Domain Switcher + Breadcrumb */}
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" title="Back to Homepage">
            <OkizaLogo size={22} variant="white" />
            <span className="font-bold text-sm tracking-tight text-white hidden sm:inline">okiza</span>
          </Link>

          <span className="text-[#3f3f46]">/</span>

          {/* Domain Switcher */}
          <div className="relative">
            {isSwitchingDomain ? (
              <form onSubmit={handleDomainSubmit} className="flex items-center gap-1.5 bg-[#18181b] border border-[#3f3f46] rounded-lg px-2 py-1">
                <input
                  type="text"
                  autoFocus
                  value={tempDomain}
                  onChange={(e) => setTempDomain(e.target.value)}
                  placeholder="domain.com"
                  className="bg-transparent text-white text-xs font-mono outline-none w-32 sm:w-40"
                />
                <button type="submit" className="text-[10px] bg-white text-black font-semibold px-2 py-0.5 rounded cursor-pointer">
                  Save
                </button>
                <button type="button" onClick={() => setIsSwitchingDomain(false)} className="text-[10px] text-[#71717a] hover:text-white px-1 cursor-pointer">
                  ✕
                </button>
              </form>
            ) : (
              <button
                onClick={() => {
                  setTempDomain(domain);
                  setIsSwitchingDomain(true);
                }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-[#27272a] bg-[#141416] text-[#e4e4e7] hover:border-[#52525b] transition-all font-mono text-xs cursor-pointer"
                title="Click to switch domain"
              >
                <span className="font-semibold text-white">{domain}</span>
                <span className="text-[#a1a1aa] text-[10px]">⇄ Switch</span>
              </button>
            )}
          </div>

          <span className="text-[#3f3f46] hidden sm:inline">/</span>

          {/* Active Tab Breadcrumb */}
          <div className="hidden sm:flex items-center gap-1 text-[#a1a1aa]">
            <span className="font-medium text-white capitalize">
              {navItems.find((n) => n.id === activeTab)?.label}
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            className="text-xs text-[#a1a1aa] hover:text-white hidden md:flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-[#18181b] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to site</span>
          </Link>

          <button
            onClick={() => setReportModalOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#141416] text-xs font-medium text-white hover:bg-[#1e1e24] transition-all cursor-pointer"
          >
            <span>View Insight Report</span>
            <Sparkles className="w-3 h-3 text-[#f59e0b]" />
          </button>

          <Link
            href="/pricing"
            className="px-3 py-1.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-[#e4e4e7] transition-all shadow-sm"
          >
            Unlock full access
          </Link>

          {/* User Avatar */}
          <div
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-xs cursor-pointer ring-1 ring-[#3f3f46] hover:ring-white transition-all relative shrink-0"
            title="Account Menu"
          >
            <span>K</span>
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-[#0c0c0e]"></span>
          </div>
        </div>
      </header>

      {/* Main Body Layout: Left Sidebar + Content */}
      <div className="flex-1 flex flex-col md:flex-row w-full min-h-[calc(100vh-48px)]">
        {/* ================= SIDEBAR ================= */}
        <aside className="w-full md:w-60 border-b md:border-b-0 md:border-r border-[#262626] bg-[#09090b] flex flex-col justify-between shrink-0">
          <div className="p-3 sm:p-4 space-y-5">
            {/* Navigation label */}
            <p className="px-2 text-[10px] font-mono tracking-widest text-[#71717a] uppercase font-semibold">
              SECTIONS
            </p>

            {/* The 5 Required Options */}
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left ${
                      isActive
                        ? "bg-white text-black shadow-md font-bold"
                        : "text-[#a1a1aa] hover:text-white hover:bg-[#141416]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-black" : "text-[#71717a]"}`} />
                    <span>{item.label}</span>
                    {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-black"></span>}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Profile Log */}
          <div className="p-3 sm:p-4 border-t border-[#262626] bg-[#0c0c0e] relative">
            <div
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              className="flex items-center justify-between p-2 rounded-xl bg-[#141416] hover:bg-[#1c1c1f] border border-[#27272a] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-xs shadow-inner">
                    K
                  </div>
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-[#141416]"></span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-white truncate">Shaik Nazeer</p>
                  <p className="text-[10px] font-mono text-[#a1a1aa] truncate">shaik@okiza.ai</p>
                </div>
              </div>
              <LogOut className="w-3.5 h-3.5 text-[#71717a] group-hover:text-red-400 transition-colors" title="Log out" />
            </div>

            {/* Profile Dropdown */}
            {profileMenuOpen && (
              <div className="absolute bottom-full left-3 right-3 mb-2 p-2 rounded-xl border border-[#27272a] bg-[#141416] shadow-2xl space-y-1 text-xs animate-fadeIn z-30">
                <div className="px-2.5 py-1.5 border-b border-[#262626] mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#a1a1aa] block">Current Plan</span>
                  <span className="text-xs font-bold text-emerald-400">CMO Plan (Active 24/7)</span>
                </div>
                <Link href="/pricing" className="w-full text-left px-2.5 py-1.5 rounded-lg text-[#e4e4e7] hover:bg-[#27272a] flex items-center justify-between block">
                  <span>Manage Plan</span>
                  <ExternalLink className="w-3 h-3 text-[#71717a]" />
                </Link>
                <div
                  onClick={() => setProfileMenuOpen(false)}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg text-red-400 hover:bg-red-500/10 flex items-center justify-between border-t border-[#262626] mt-1 pt-1.5 cursor-pointer"
                >
                  <span>Close</span>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* ================= MAIN CONTENT AREA ================= */}
        <main className="flex-1 bg-[#050505] p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          {/* Top Notice Banner */}
          <div className="mb-6 p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <p className="text-xs sm:text-sm text-[#d4d4d8]">
                Your dashboard overview is available. Choose a plan to unlock competitor analysis, automated PR fixes, and full evidence.
              </p>
            </div>
            <Link
              href="/pricing"
              className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-[#e4e4e7] transition-all shrink-0 text-center shadow-sm"
            >
              Unlock full access
            </Link>
          </div>

          {/* ================= 1. OVERVIEW SECTION ================= */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Header Title + Filter Bar matching screenshot */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#262626]">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    AI visibility overview
                  </h1>
                  <p className="text-xs text-[#a1a1aa] mt-0.5">
                    Continuous monitoring of your brand across ChatGPT, Claude, Perplexity, and Gemini.
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#0f0f12] text-xs text-[#e4e4e7] font-medium">
                    <span>📅</span>
                    <span>{selectedRun}</span>
                    <ChevronDown className="w-3 h-3 text-[#71717a]" />
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#0f0f12] text-xs text-[#e4e4e7] font-medium">
                    <span>⇄ Compare: Previous run</span>
                    <ChevronDown className="w-3 h-3 text-[#71717a]" />
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#0f0f12] text-xs text-[#e4e4e7] font-medium">
                    <span>🇮🇳 {selectedRegion}</span>
                    <ChevronDown className="w-3 h-3 text-[#71717a]" />
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#0f0f12] text-xs text-[#e4e4e7] font-medium">
                    <span>🤖 {selectedModel}</span>
                    <ChevronDown className="w-3 h-3 text-[#71717a]" />
                  </div>

                  <button
                    onClick={() => setReportModalOpen(true)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-sm ml-auto sm:ml-0"
                  >
                    <span>View Insight Report</span>
                    <Sparkles className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Performance snapshot section (The 5 cards matching screenshot) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#a1a1aa]">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">Performance snapshot</span>
                    <span className="text-[11px] font-mono text-[#71717a]">
                      • Run: 25 Sep 2026 (UTC) • All AI models • Last answer 04:34 AM UTC
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {/* 1. AI Visibility Score */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0d0d10] hover:border-[#3f3f46] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#a1a1aa] font-medium flex items-center gap-1">
                        📈 AI Visibility Score
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a]" />
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-black text-white">84.5</span>
                      <span className="text-xs font-mono text-[#71717a]">/100</span>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold ml-auto">+12.4%</span>
                    </div>
                    <p className="text-[11px] text-[#71717a] leading-tight">
                      Based on 40 AI conversational answers.
                    </p>
                  </div>

                  {/* 2. Share of Voice */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0d0d10] hover:border-[#3f3f46] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#a1a1aa] font-medium flex items-center gap-1">
                        📢 Share of Voice
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a]" />
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-black text-white">46.2%</span>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold ml-auto">+8.5%</span>
                    </div>
                    <p className="text-[11px] text-[#71717a] leading-tight">
                      32/48 tracked entity mentions.
                    </p>
                  </div>

                  {/* 3. Brand Mention Rate */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0d0d10] hover:border-[#3f3f46] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#a1a1aa] font-medium flex items-center gap-1">
                        🏷️ Brand Mention Rate
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a]" />
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-black text-white">78.0%</span>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold ml-auto">31/40</span>
                    </div>
                    <p className="text-[11px] text-[#71717a] leading-tight">
                      Mentioned in 31 of 40 evaluated queries.
                    </p>
                  </div>

                  {/* 4. Citation Rate */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0d0d10] hover:border-[#3f3f46] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#a1a1aa] font-medium flex items-center gap-1">
                        🔗 Citation Rate
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a]" />
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-black text-white">85.0%</span>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold ml-auto">34/40</span>
                    </div>
                    <p className="text-[11px] text-[#71717a] leading-tight">
                      34/40 answers returned direct citations.
                    </p>
                  </div>

                  {/* 5. Prompt Coverage */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0d0d10] hover:border-[#3f3f46] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#a1a1aa] font-medium flex items-center gap-1">
                        🎯 Prompt Coverage
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a]" />
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-black text-white">92.0%</span>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold ml-auto">46/50</span>
                    </div>
                    <p className="text-[11px] text-[#71717a] leading-tight">
                      46/50 evaluated prompts covered.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key insights & recommended actions (4 Cards matching screenshot) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <span>💡</span>
                  <span>Key insights & recommended actions</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* Card 1: What changed */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0d0d10] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-2">
                        <span>📈</span>
                        <span>What changed</span>
                      </div>
                      <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
                        +14.2% AI citation gain this week. ChatGPT and Perplexity now cite {domain} as top source for 8 comparison prompts.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveTab("ai-visibility")}
                      className="text-[11px] text-[#e4e4e7] hover:text-white font-mono flex items-center gap-1 text-left mt-2 cursor-pointer"
                    >
                      <span>▶ View breakdown</span>
                    </button>
                  </div>

                  {/* Card 2: Needs attention */}
                  <div className="p-4 rounded-xl border border-[#ef4444]/30 bg-[#160b0b] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#f87171] mb-2">
                        <span>⚠️</span>
                        <span>Needs attention</span>
                      </div>
                      <p className="text-xs text-[#d4d4d8] leading-relaxed mb-3">
                        3 comparison queries did not cite your brand on Claude. Missing SoftwareApplication schema on /pricing.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveTab("seo-geo")}
                      className="text-[11px] text-red-400 hover:text-red-300 font-mono flex items-center gap-1 text-left mt-2 cursor-pointer"
                    >
                      <span>Review prompt gaps ↗</span>
                    </button>
                  </div>

                  {/* Card 3: Top opportunity */}
                  <div className="p-4 rounded-xl border border-[#38bdf8]/30 bg-[#0b1318] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#38bdf8] mb-2">
                        <span>🎯</span>
                        <span>Top opportunity</span>
                      </div>
                      <p className="text-xs text-[#d4d4d8] leading-relaxed mb-3">
                        Close competitor gaps: 6 evaluated answers name competitors but not your brand. Ready-to-deploy comparison draft available.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveTab("competition")}
                      className="text-[11px] text-[#38bdf8] hover:text-white font-mono flex items-center gap-1 text-left mt-2 cursor-pointer"
                    >
                      <span>Open matching prompts ↗</span>
                    </button>
                  </div>

                  {/* Card 4: Recommended next steps */}
                  <div className="p-4 rounded-xl border border-emerald-500/30 bg-[#0b1610] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
                        <span>🚀</span>
                        <span>Recommended next steps</span>
                      </div>
                      <p className="text-xs text-[#d4d4d8] leading-relaxed mb-3">
                        Review competitors&apos; cited pages and merge the automated GitHub PR with structured FAQ schema.
                      </p>
                    </div>
                    <Link
                      href="/pricing"
                      className="text-[11px] text-emerald-400 hover:text-emerald-300 font-mono flex items-center gap-1 text-left mt-2"
                    >
                      <span>Open action workspace ↗</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Live Answer Engine Feed */}
              <div className="p-5 rounded-xl border border-[#27272a] bg-[#0c0c0e] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider font-mono text-white">
                    Live Answer Engine Evaluations (4 Models)
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">● 100% Verified Citations</span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      model: "ChatGPT (GPT-4o)",
                      query: `What is ${domain} and how does it compare to competitors?`,
                      status: "Ranked #1 • Cited with direct link",
                      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                    },
                    {
                      model: "Perplexity AI",
                      query: `Best marketing automation and SEO tools in 2025`,
                      status: "Featured Answer • Source #1",
                      badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                    },
                    {
                      model: "Claude 3.5 Sonnet",
                      query: `Top platforms for automated Reddit & SEO content`,
                      status: "Recommended as modern alternative",
                      badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg border border-[#27272a] bg-[#141416] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-white">{item.model}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${item.badge}`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-xs font-mono text-[#a1a1aa]">&ldquo;{item.query}&rdquo;</p>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 shrink-0 font-bold">98% Match</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= 2. AI/VISIBILITY SECTION ================= */}
          {activeTab === "ai-visibility" && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#262626]">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  AI Visibility & LLM Model Analytics
                </h1>
                <p className="text-xs text-[#a1a1aa] mt-0.5">
                  Breakdown of your brand presence across conversational search engines and AI models.
                </p>
              </div>

              {/* Model Citation Share Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { name: "ChatGPT (GPT-4o)", score: "91%", citations: "36/40 answers", sentiment: "98% Positive", color: "text-emerald-400" },
                  { name: "Perplexity AI", score: "86%", citations: "34/40 answers", sentiment: "95% Positive", color: "text-blue-400" },
                  { name: "Claude 3.5", score: "82%", citations: "32/40 answers", sentiment: "94% Positive", color: "text-orange-400" },
                  { name: "Google Gemini", score: "79%", citations: "31/40 answers", sentiment: "92% Positive", color: "text-purple-400" },
                ].map((m) => (
                  <div key={m.name} className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e] space-y-2">
                    <span className="text-xs font-bold text-white block">{m.name}</span>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-2xl font-black ${m.color}`}>{m.score}</span>
                      <span className="text-[11px] font-mono text-[#a1a1aa]">visibility</span>
                    </div>
                    <div className="text-[11px] text-[#71717a] font-mono space-y-0.5 pt-1 border-t border-[#262626]">
                      <p>Citations: <span className="text-white">{m.citations}</span></p>
                      <p>Sentiment: <span className="text-emerald-400">{m.sentiment}</span></p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tested Prompts Matrix */}
              <div className="p-5 rounded-xl border border-[#27272a] bg-[#0c0c0e] space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider font-mono text-white block">
                  Evaluated High-Intent Prompts
                </span>
                <div className="space-y-2">
                  {[
                    { prompt: "Best AI CMO tool for modern SaaS in 2025", rank: "#1 Cited Source", models: "ChatGPT, Perplexity, Claude", confidence: "98%" },
                    { prompt: "How to automate marketing without an agency", rank: "Top Recommendation", models: "Perplexity, Gemini", confidence: "94%" },
                    { prompt: "Best GEO and Answer Engine optimization software", rank: "#1 Featured Snippet", models: "ChatGPT, Claude", confidence: "96%" },
                    { prompt: "Autonomous marketing agents vs traditional marketers", rank: "Cited Case Study", models: "Claude, Perplexity", confidence: "91%" },
                  ].map((row, i) => (
                    <div key={i} className="p-3.5 rounded-lg border border-[#27272a] bg-[#141416] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white font-mono">&ldquo;{row.prompt}&rdquo;</p>
                        <p className="text-[11px] text-[#a1a1aa] mt-0.5">
                          <span className="text-emerald-400 font-semibold">{row.rank}</span> • Tested on {row.models}
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold text-white bg-[#27272a] px-3 py-1 rounded shrink-0">
                        {row.confidence} Match
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= 3. SEO & GEO SECTION ================= */}
          {activeTab === "seo-geo" && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#262626]">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  SEO & Generative Engine Optimization (GEO)
                </h1>
                <p className="text-xs text-[#a1a1aa] mt-0.5">
                  Unified technical SEO health and entity optimization for AI search crawlers.
                </p>
              </div>

              {/* SEO Score Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e]">
                  <span className="text-xs text-[#a1a1aa] block mb-1">Technical SEO Score</span>
                  <span className="text-3xl font-black text-white">99 / 100</span>
                  <span className="text-[10px] text-emerald-400 font-mono mt-1 block">0 Broken Links • 100% Core Web Vitals</span>
                </div>

                <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e]">
                  <span className="text-xs text-[#a1a1aa] block mb-1">GEO Structured Data</span>
                  <span className="text-3xl font-black text-white">100% Valid</span>
                  <span className="text-[10px] text-blue-400 font-mono mt-1 block">SoftwareApplication & FAQ JSON-LD</span>
                </div>

                <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e]">
                  <span className="text-xs text-[#a1a1aa] block mb-1">AI Crawler Permissions</span>
                  <span className="text-3xl font-black text-emerald-400">All Allowed</span>
                  <span className="text-[10px] text-[#a1a1aa] font-mono mt-1 block">GPTBot, ClaudeBot, PerplexityBot</span>
                </div>
              </div>

              {/* Automated GitHub Fixes */}
              <div className="p-5 rounded-xl border border-[#27272a] bg-[#0c0c0e] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider font-mono text-white">
                    Automated Code & Schema Pull Requests
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Coding Agent Connected</span>
                </div>

                <div className="space-y-2">
                  <div className="p-3.5 rounded-lg border border-[#27272a] bg-[#141416] flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white">PR #54: SoftwareApplication schema on /pricing</span>
                      <p className="text-[11px] text-[#a1a1aa] mt-0.5">Improves AI price citation accuracy by 24%</p>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded">Merged</span>
                  </div>

                  <div className="p-3.5 rounded-lg border border-[#27272a] bg-[#141416] flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white">PR #55: Dynamic Next.js metadata & OpenGraph generator</span>
                      <p className="text-[11px] text-[#a1a1aa] mt-0.5">Applied to all 32 dynamic marketing routes</p>
                    </div>
                    <span className="text-[10px] font-mono bg-blue-500/20 text-blue-400 px-2.5 py-1 rounded">Ready to Deploy</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= 4. KEYWORDS SECTION ================= */}
          {activeTab === "keywords" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#262626]">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Keywords & AI Prompt Intelligence
                  </h1>
                  <p className="text-xs text-[#a1a1aa] mt-0.5">
                    Tracked high-converting search keywords and conversational AI queries.
                  </p>
                </div>

                {/* Search Bar */}
                <div className="flex items-center gap-2 bg-[#141416] border border-[#27272a] px-3 py-1.5 rounded-xl max-w-xs w-full">
                  <Search className="w-3.5 h-3.5 text-[#71717a]" />
                  <input
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="Search keywords..."
                    className="bg-transparent text-xs text-white placeholder-[#71717a] outline-none w-full"
                  />
                </div>
              </div>

              {/* Keywords Table */}
              <div className="rounded-xl border border-[#262626] bg-[#0c0c0e] overflow-hidden">
                <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[#262626] bg-[#141416] text-[10px] font-mono uppercase tracking-wider text-[#71717a] font-bold">
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
                  ]
                    .filter((k) => k.kw.toLowerCase().includes(searchKeyword.toLowerCase()))
                    .map((k, idx) => (
                      <div key={idx} className="grid grid-cols-12 gap-2 px-4 py-3.5 items-center hover:bg-[#141416]/60 transition-colors">
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

          {/* ================= 5. COMPETITION SECTION ================= */}
          {activeTab === "competition" && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#262626]">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Competition & Rival Intelligence
                </h1>
                <p className="text-xs text-[#a1a1aa] mt-0.5">
                  Track rivals competing for your organic rankings and generative AI recommendations.
                </p>
              </div>

              {/* Competitor Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Jira / Atlassian",
                    domain: "atlassian.com/jira",
                    overlap: "84% Search Overlap",
                    winRate: "72% Win Rate",
                    weakness: "Heavy enterprise bloat, no autonomous agent workflows",
                    border: "border-blue-500/30",
                  },
                  {
                    name: "Asana",
                    domain: "asana.com",
                    overlap: "76% Search Overlap",
                    winRate: "68% Win Rate",
                    weakness: "Capturing high-intent Google comparison keywords",
                    border: "border-pink-500/30",
                  },
                  {
                    name: "Linear",
                    domain: "linear.app",
                    overlap: "71% Search Overlap",
                    winRate: "65% Win Rate",
                    weakness: "Developer focused, zero marketing agents",
                    border: "border-purple-500/30",
                  },
                  {
                    name: "Jasper / Copy.ai",
                    domain: "jasper.ai",
                    overlap: "58% Search Overlap",
                    winRate: "84% Win Rate",
                    weakness: "Manual copy generation only, no code/PR deployment",
                    border: "border-emerald-500/30",
                  },
                ].map((c) => (
                  <div key={c.name} className={`p-5 rounded-xl border ${c.border} bg-[#0c0c0e] space-y-3`}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">{c.name}</span>
                      <span className="text-xs font-mono text-emerald-400 font-bold">{c.winRate}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#a1a1aa] block">{c.domain} • {c.overlap}</span>
                    <p className="text-xs text-[#d4d4d8] leading-relaxed">{c.weakness}</p>
                    <div className="pt-2 border-t border-[#262626] flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#71717a]">1-Click Action Ready</span>
                      <button className="text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg transition-colors cursor-pointer">
                        Deploy Counter Page →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Insight Report Modal */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#141416] border border-[#27272a] rounded-2xl max-w-lg w-full p-6 text-left shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#262626]">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>🪄</span> AI Visibility Insight Report
                </h3>
                <p className="text-xs text-[#a1a1aa] mt-0.5">Generated for {domain}</p>
              </div>
              <button
                onClick={() => setReportModalOpen(false)}
                className="text-[#71717a] hover:text-white p-1 rounded cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3 text-xs text-[#d4d4d8] leading-relaxed mb-6">
              <div className="p-3 rounded-xl bg-[#09090b] border border-[#27272a]">
                <p className="font-semibold text-white mb-1">Executive Summary</p>
                <p className="text-[#a1a1aa]">
                  {domain} holds an 84.5/100 AI Visibility Score across major generative search engines. Brand mention rate stands at 78%, and citation rate at 85%.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#09090b] border border-[#27272a]">
                <p className="font-semibold text-white mb-1">Key Growth Recommendation</p>
                <p className="text-[#a1a1aa]">
                  Deploy structured comparison schema on high-intent buyer landing pages to capture 6 additional queries where rivals are cited.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/pricing"
                className="flex-1 py-2.5 rounded-xl bg-white text-black font-bold text-xs text-center hover:bg-[#e4e4e7] transition-all"
              >
                Unlock Full Report & Audit Logs
              </Link>
              <button
                onClick={() => setReportModalOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-[#27272a] text-xs text-[#a1a1aa] hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

