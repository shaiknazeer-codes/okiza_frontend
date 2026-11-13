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
  PieChart,
  Activity,
  Compass,
} from "lucide-react";

/* =========================================================================
   REUSABLE SVG RING & DONUT CHART COMPONENTS
   ========================================================================= */

// Single Circular Progress Ring
function CircularRing({
  value,
  max = 100,
  size = 80,
  stroke = 7,
  color = "#10b981",
  trackColor = "#1f1f23",
  children,
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.max(value, 0), max);
  const strokeDashoffset = circumference - (progress / max) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {children ? children : (
          <span className="text-xs font-black text-white font-mono">{value}%</span>
        )}
      </div>
    </div>
  );
}

// Concentric Multi-Ring Radial Gauge for AI Engines
function MultiEngineConcentricRings({ size = 200 }) {
  const center = size / 2;
  const stroke = 7;
  const rings = [
    { name: "ChatGPT (GPT-4o)", val: 91, radius: 82, color: "#10b981" },
    { name: "Perplexity AI", val: 86, radius: 66, color: "#06b6d4" },
    { name: "Claude 3.5 Sonnet", val: 82, radius: 50, color: "#f59e0b" },
    { name: "Google Gemini", val: 79, radius: 34, color: "#a855f7" },
  ];

  return (
    <div className="relative inline-flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        {rings.map((r, i) => {
          const circumference = 2 * Math.PI * r.radius;
          const offset = circumference - (r.val / 100) * circumference;
          return (
            <g key={i}>
              <circle
                cx={center}
                cy={center}
                r={r.radius}
                stroke="#18181b"
                strokeWidth={stroke}
                fill="none"
              />
              <circle
                cx={center}
                cy={center}
                r={r.radius}
                stroke={r.color}
                strokeWidth={stroke}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-1000 ease-out"
              />
            </g>
          );
        })}
      </svg>
      {/* Central Badge */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <Sparkles className="w-4 h-4 text-emerald-400 mb-0.5 animate-pulse" />
        <span className="text-base font-black text-white font-mono">84.5%</span>
        <span className="text-[9px] font-mono uppercase tracking-wider text-[#71717a]">INDEX</span>
      </div>
    </div>
  );
}

// Competitive Share of Voice Segmented Donut Ring Chart
function CompetitiveShareDonut({ size = 150 }) {
  const center = size / 2;
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius; // ~433.5 for size 150

  const segments = [
    { name: "prepzue.com (You)", pct: 46.2, color: "#10b981" },
    { name: "Jira / Atlassian", pct: 24.5, color: "#3b82f6" },
    { name: "Asana", pct: 16.8, color: "#f43f5e" },
    { name: "Linear / Others", pct: 12.5, color: "#a855f7" },
  ];

  // Calculate accumulated offsets
  let accumulated = 0;

  return (
    <div className="relative inline-flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#18181b"
          strokeWidth={stroke}
          fill="none"
        />
        {segments.map((seg, idx) => {
          const segLength = (seg.pct / 100) * circumference;
          const currentOffset = accumulated;
          accumulated += segLength;
          return (
            <circle
              key={idx}
              cx={center}
              cy={center}
              r={radius}
              stroke={seg.color}
              strokeWidth={stroke}
              strokeDasharray={`${segLength} ${circumference}`}
              strokeDashoffset={-currentOffset}
              fill="none"
              className="transition-all duration-700 ease-out"
            />
          );
        })}
      </svg>
      {/* Center Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-lg font-black text-white font-mono">46.2%</span>
        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">#1 SHARE</span>
      </div>
    </div>
  );
}

// 90-Day Area Growth Trend Chart
function AreaTrendGraph() {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-white font-semibold flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          90-Day AI Citation & Visibility Trajectory
        </span>
        <span className="text-[11px] font-mono text-emerald-400 font-bold">+14.2% Growth This Cycle</span>
      </div>

      <div className="relative w-full h-36 bg-[#09090b] rounded-xl border border-[#27272a] p-3 overflow-hidden">
        {/* Subtle grid lines */}
        <div className="absolute inset-x-3 top-6 border-b border-[#262626]/40 pointer-events-none"></div>
        <div className="absolute inset-x-3 top-16 border-b border-[#262626]/40 pointer-events-none"></div>
        <div className="absolute inset-x-3 top-24 border-b border-[#262626]/40 pointer-events-none"></div>

        <svg viewBox="0 0 500 120" preserveAspectRatio="none" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
          </defs>

          {/* Area fill */}
          <path
            d="M 0 110 L 0 85 C 60 82, 110 70, 160 62 C 220 54, 270 48, 330 35 C 390 22, 440 18, 500 12 L 500 120 L 0 120 Z"
            fill="url(#areaGradient)"
          />

          {/* Stroke Line */}
          <path
            d="M 0 85 C 60 82, 110 70, 160 62 C 220 54, 270 48, 330 35 C 390 22, 440 18, 500 12"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Data Points / Milestone Dots */}
          <circle cx="0" cy="85" r="3.5" fill="#06b6d4" stroke="#000" strokeWidth="1.5" />
          <circle cx="160" cy="62" r="3.5" fill="#10b981" stroke="#000" strokeWidth="1.5" />
          <circle cx="330" cy="35" r="3.5" fill="#10b981" stroke="#000" strokeWidth="1.5" />
          <circle cx="500" cy="12" r="4.5" fill="#4ade80" stroke="#000" strokeWidth="1.5" className="animate-pulse" />
        </svg>

        {/* Milestone labels at the bottom */}
        <div className="absolute inset-x-4 bottom-1.5 flex justify-between text-[10px] font-mono text-[#71717a]">
          <span>W1 (42%)</span>
          <span>W4: PR #52 Merged (58%)</span>
          <span>W8: Reddit Agent (72%)</span>
          <span className="text-emerald-400 font-bold">W12: Peak 84.5%</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN DASHBOARD PAGE COMPONENT
   ========================================================================= */

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
                Your visual dashboard overview is available for <span className="font-mono font-semibold text-white">{domain}</span>. 9 autonomous marketing agents monitoring 24/7.
              </p>
            </div>
            <Link
              href="/pricing"
              className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-[#e4e4e7] transition-all shrink-0 text-center shadow-sm"
            >
              Unlock full access
            </Link>
          </div>

          {/* ================= 1. OVERVIEW SECTION (VISUAL RING CHARTS DOMINANT) ================= */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Header Title + Filter Bar matching screenshot */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#262626]">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>AI visibility overview</span>
                    <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      Live Visual Telemetry
                    </span>
                  </h1>
                  <p className="text-xs text-[#a1a1aa] mt-0.5">
                    Real-time circular progress rings, engine benchmarks, and competitive share metrics.
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

              {/* 1. TOP 5 RING CHARTS SNAPSHOT ROW */}
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
                  {/* Ring 1: AI Visibility Score */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0d0d10] hover:border-[#10b981]/40 transition-all flex flex-col items-center text-center">
                    <span className="text-xs text-[#a1a1aa] font-medium mb-3 flex items-center gap-1">
                      📈 AI Visibility Score
                    </span>
                    <CircularRing value={84.5} size={90} stroke={7} color="#10b981">
                      <span className="text-sm font-black text-white font-mono">84.5</span>
                      <span className="text-[9px] text-[#71717a] font-mono">/100</span>
                    </CircularRing>
                    <div className="mt-3 flex items-center justify-center gap-1.5">
                      <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                        +12.4%
                      </span>
                    </div>
                    <p className="text-[11px] text-[#71717a] mt-1">
                      Based on 40 AI conversational answers.
                    </p>
                  </div>

                  {/* Ring 2: Share of Voice */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0d0d10] hover:border-[#06b6d4]/40 transition-all flex flex-col items-center text-center">
                    <span className="text-xs text-[#a1a1aa] font-medium mb-3 flex items-center gap-1">
                      📢 Share of Voice
                    </span>
                    <CircularRing value={46.2} size={90} stroke={7} color="#06b6d4">
                      <span className="text-sm font-black text-white font-mono">46.2%</span>
                    </CircularRing>
                    <div className="mt-3 flex items-center justify-center gap-1.5">
                      <span className="text-[11px] font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded">
                        +8.5%
                      </span>
                    </div>
                    <p className="text-[11px] text-[#71717a] mt-1">
                      32/48 tracked entity mentions.
                    </p>
                  </div>

                  {/* Ring 3: Brand Mention Rate */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0d0d10] hover:border-[#6366f1]/40 transition-all flex flex-col items-center text-center">
                    <span className="text-xs text-[#a1a1aa] font-medium mb-3 flex items-center gap-1">
                      🏷️ Brand Mention Rate
                    </span>
                    <CircularRing value={78.0} size={90} stroke={7} color="#6366f1">
                      <span className="text-sm font-black text-white font-mono">78%</span>
                    </CircularRing>
                    <div className="mt-3 flex items-center justify-center gap-1.5">
                      <span className="text-[11px] font-mono text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded">
                        31 / 40
                      </span>
                    </div>
                    <p className="text-[11px] text-[#71717a] mt-1">
                      Mentioned in 31 of 40 evaluated queries.
                    </p>
                  </div>

                  {/* Ring 4: Citation Rate */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0d0d10] hover:border-[#f59e0b]/40 transition-all flex flex-col items-center text-center">
                    <span className="text-xs text-[#a1a1aa] font-medium mb-3 flex items-center gap-1">
                      🔗 Citation Rate
                    </span>
                    <CircularRing value={85.0} size={90} stroke={7} color="#f59e0b">
                      <span className="text-sm font-black text-white font-mono">85%</span>
                    </CircularRing>
                    <div className="mt-3 flex items-center justify-center gap-1.5">
                      <span className="text-[11px] font-mono text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded">
                        34 / 40
                      </span>
                    </div>
                    <p className="text-[11px] text-[#71717a] mt-1">
                      34/40 answers returned direct citations.
                    </p>
                  </div>

                  {/* Ring 5: Prompt Coverage */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0d0d10] hover:border-[#ec4899]/40 transition-all flex flex-col items-center text-center">
                    <span className="text-xs text-[#a1a1aa] font-medium mb-3 flex items-center gap-1">
                      🎯 Prompt Coverage
                    </span>
                    <CircularRing value={92.0} size={90} stroke={7} color="#ec4899">
                      <span className="text-sm font-black text-white font-mono">92%</span>
                    </CircularRing>
                    <div className="mt-3 flex items-center justify-center gap-1.5">
                      <span className="text-[11px] font-mono text-pink-400 font-bold bg-pink-500/10 px-2 py-0.5 rounded">
                        46 / 50
                      </span>
                    </div>
                    <p className="text-[11px] text-[#71717a] mt-1">
                      46/50 evaluated prompts covered.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. DUAL VISUAL CHARTS: CONCENTRIC RINGS + COMPETITIVE DONUT */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Left: Concentric Ring Multi-Engine Chart */}
                <div className="lg:col-span-7 p-5 rounded-2xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#262626]">
                    <div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                        <span>🤖</span> Multi-Engine Visibility Radial Rings
                      </span>
                      <p className="text-[11px] text-[#a1a1aa] mt-0.5">
                        Concentric ring layers benchmark citation coverage per AI platform.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      4 Models Active
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-2">
                    {/* The Concentric Rings SVG */}
                    <MultiEngineConcentricRings size={190} />

                    {/* Ring Legends and Citations */}
                    <div className="space-y-2.5 w-full sm:w-auto">
                      {[
                        { name: "ChatGPT (GPT-4o)", pct: 91, count: "36/40 answers", color: "bg-[#10b981]", text: "text-emerald-400" },
                        { name: "Perplexity AI", pct: 86, count: "34/40 answers", color: "bg-[#06b6d4]", text: "text-cyan-400" },
                        { name: "Claude 3.5 Sonnet", pct: 82, count: "32/40 answers", color: "bg-[#f59e0b]", text: "text-amber-400" },
                        { name: "Google Gemini", pct: 79, count: "31/40 answers", color: "bg-[#a855f7]", text: "text-purple-400" },
                      ].map((eng, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-4 p-2 rounded-lg bg-[#141416] border border-[#27272a] text-xs min-w-[200px]">
                          <div className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${eng.color}`}></span>
                            <span className="font-semibold text-white">{eng.name}</span>
                          </div>
                          <div className="text-right">
                            <span className={`font-mono font-bold ${eng.text}`}>{eng.pct}%</span>
                            <span className="text-[10px] font-mono text-[#71717a] block">{eng.count}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Competitive Share of Voice Donut Chart */}
                <div className="lg:col-span-5 p-5 rounded-2xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#262626]">
                    <div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                        <span>⚔️</span> Share of Voice Donut Ring
                      </span>
                      <p className="text-[11px] text-[#a1a1aa] mt-0.5">
                        Brand vs competitor citations in AI answers.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                      Market Dominance
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-around gap-4 py-2">
                    <CompetitiveShareDonut size={150} />

                    <div className="space-y-2 w-full sm:w-auto">
                      {[
                        { brand: `${domain} (You)`, pct: 46.2, color: "bg-[#10b981]", tag: "Leader" },
                        { brand: "Jira / Atlassian", pct: 24.5, color: "bg-[#3b82f6]", tag: "Incumbent" },
                        { brand: "Asana", pct: 16.8, color: "bg-[#f43f5e]", tag: "Direct" },
                        { brand: "Linear / Others", pct: 12.5, color: "bg-[#a855f7]", tag: "Niche" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
                            <span className="text-[#e4e4e7] font-medium">{item.brand}</span>
                          </div>
                          <span className="font-mono font-bold text-white">{item.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. 90-DAY GROWTH AREA TREND GRAPH */}
              <div className="p-5 rounded-2xl border border-[#27272a] bg-[#0c0c0e]">
                <AreaTrendGraph />
              </div>

              {/* 4. KEY INSIGHTS & RECOMMENDED ACTIONS */}
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

              {/* 5. LIVE ANSWER ENGINE EVALUATIONS FEED */}
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
