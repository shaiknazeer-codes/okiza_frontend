"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export function GrowthOverviewScreen({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            COMMAND CENTER
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Growth overview
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Track how customers find you and review work proposed by your agents.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button
            onClick={() => onNavigate("opportunities")}
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm"
          >
            View opportunities
          </button>
        </div>
      </div>

      {/* Row 1: 4 Metric KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {[
          { label: "Search impressions", val: "284,509", change: "+14.6%", up: true },
          { label: "Organic clicks", val: "31,485", change: "+9.2%", up: true },
          { label: "AI visibility", val: "47%", change: "+6.4%", up: true },
          { label: "New leads", val: "1,034", change: "+18%", up: true },
        ].map((kpi, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-[#232326] bg-[#101012] flex flex-col justify-between"
          >
            <span className="text-xs text-[#8e8e93] font-medium block">
              {kpi.label}
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
                {kpi.val}
              </span>
              <span className="text-xs font-mono font-medium text-emerald-400">
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: 2 Column Layout (Organic Clicks Chart + Agent Action Queue) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Organic Clicks Line Chart Card (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div className="mb-4">
            <h2 className="text-base font-bold text-white">Organic clicks</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Daily clicks from organic search
            </p>
          </div>

          {/* Line Chart */}
          <div className="relative w-full h-52 flex items-end pt-4 pb-2">
            {/* Y Axis Gridlines & Labels */}
            <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between pointer-events-none text-[10px] font-mono text-[#52525b]">
              <div className="border-b border-[#1f1f23] w-full flex justify-between pr-2">
                <span>1,500</span>
              </div>
              <div className="border-b border-[#1f1f23] w-full flex justify-between pr-2">
                <span>1,000</span>
              </div>
              <div className="border-b border-[#1f1f23] w-full flex justify-between pr-2">
                <span>500</span>
              </div>
              <div className="border-b border-[#1f1f23] w-full flex justify-between pr-2">
                <span>0</span>
              </div>
            </div>

            {/* SVG Polyline */}
            <svg
              viewBox="0 0 500 160"
              preserveAspectRatio="none"
              className="w-full h-36 relative z-10 overflow-visible"
            >
              <defs>
                <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 10 110 L 60 102 L 110 108 L 150 90 L 190 74 L 230 85 L 270 72 L 310 88 L 350 78 L 390 74 L 440 62 L 485 52"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 10 110 L 60 102 L 110 108 L 150 90 L 190 74 L 230 85 L 270 72 L 310 88 L 350 78 L 390 74 L 440 62 L 485 52 L 485 160 L 10 160 Z"
                fill="url(#lineFill)"
              />
            </svg>
          </div>

          {/* X Axis Dates */}
          <div className="flex justify-between text-[11px] font-mono text-[#71717a] pt-3 border-t border-[#1f1f23]">
            <span>Oct 22</span>
            <span>Nov 01</span>
            <span>Nov 10</span>
            <span>Nov 20</span>
          </div>
        </div>

        {/* Agent Action Queue Card (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Agent action queue</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Review proposed work before it goes live.
            </p>

            <div className="space-y-3 mt-4">
              {/* Item 1 */}
              <div className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-white truncate">
                    Fix 4 broken canonical URLs
                  </h3>
                  <span className="text-[11px] text-[#71717a] font-mono">
                    SEO agent
                  </span>
                </div>
                <button
                  onClick={() => onNavigate("technical-seo-audit")}
                  className="px-3 py-1.5 rounded-lg border border-[#3f3f46] text-xs font-medium text-white hover:bg-white hover:text-black transition-all shrink-0 cursor-pointer"
                >
                  Review →
                </button>
              </div>

              {/* Item 2 */}
              <div className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-white truncate">
                    Review the SEO vs AEO vs GEO draft
                  </h3>
                  <span className="text-[11px] text-[#71717a] font-mono">
                    Content agent
                  </span>
                </div>
                <button
                  onClick={() => onNavigate("article-editor")}
                  className="px-3 py-1.5 rounded-lg border border-[#3f3f46] text-xs font-medium text-white hover:bg-white hover:text-black transition-all shrink-0 cursor-pointer"
                >
                  Review →
                </button>
              </div>

              {/* Item 3 */}
              <div className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-white truncate">
                    Track 6 missing AI prompts
                  </h3>
                  <span className="text-[11px] text-[#71717a] font-mono">
                    GEO agent
                  </span>
                </div>
                <button
                  onClick={() => onNavigate("prompt-tracking")}
                  className="px-3 py-1.5 rounded-lg border border-[#3f3f46] text-xs font-medium text-white hover:bg-white hover:text-black transition-all shrink-0 cursor-pointer"
                >
                  Inspect →
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1f1f23] mt-3">
            <button
              onClick={() => onNavigate("opportunities")}
              className="text-xs text-white hover:underline font-medium cursor-pointer flex items-center gap-1"
            >
              <span>See all opportunities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-4 rounded-xl border border-[#232326] bg-[#101012] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-white font-mono text-[11px] font-semibold">
            This week
          </span>
          <span className="text-[#d4d4d8]">
            14 new ranking keywords and 8 more AI citations.
          </span>
        </div>
        <button
          onClick={() => onNavigate("assistant")}
          className="text-xs font-semibold text-white hover:underline flex items-center gap-1 cursor-pointer shrink-0"
        >
          <span>Ask Okiza</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export function GrowthAnalyticsScreen({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            COMMAND CENTER
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Growth analytics
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Connect visibility to traffic, inquiries, and revenue.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            Download
          </button>
        </div>
      </div>

      {/* Row 1: 4 Metric KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {[
          { label: "SESSIONS", val: "69,201", change: "+11.8%", up: true },
          { label: "CONVERSIONS", val: "2,861", change: "+8.4%", up: true },
          { label: "CONVERSION RATE", val: "4.13%", change: "−0.2pt", up: false },
          { label: "EST. VALUE", val: "₹8.4L", change: "+23%", up: true },
        ].map((kpi, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-[#232326] bg-[#101012] flex flex-col justify-between"
          >
            <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
              {kpi.label}
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
                {kpi.val}
              </span>
              <span
                className={`text-xs font-mono font-medium ${
                  kpi.up ? "text-emerald-400" : "text-[#71717a]"
                }`}
              >
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: Full-funnel performance + Top sources */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Full-funnel performance bar chart (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Full-funnel performance</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Source → sessions → leads → qualified leads → customers
            </p>
          </div>

          {/* Bar Chart Visualization */}
          <div className="h-56 flex items-end justify-between gap-3 pt-8 pb-2 px-4">
            {[45, 62, 50, 58, 75, 70, 85, 80, 92, 100].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div
                  className={`w-full rounded-t-sm transition-all ${
                    i === 9 ? "bg-white" : "bg-[#3f3f46]"
                  }`}
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1f1f23] flex justify-between text-[11px] font-mono text-[#71717a]">
            <span>Awareness</span>
            <span>Interest</span>
            <span>Consideration</span>
            <span className="text-white font-semibold">Conversion</span>
          </div>
        </div>

        {/* Top sources (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Top sources</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Attributed lead sources
            </p>

            <div className="space-y-4 mt-5">
              {[
                { source: "Organic search", pct: 46 },
                { source: "AI referrals", pct: 22 },
                { source: "Google Maps", pct: 18 },
                { source: "Social", pct: 14 },
              ].map((s, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium text-white">
                    <span>{s.source}</span>
                    <span className="font-mono">{s.pct}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#1f1f23] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-white transition-all"
                      style={{ width: `${s.pct * 2}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#1f1f23] mt-6">
            <button className="w-full py-2 rounded-xl border border-[#27272a] hover:bg-[#1a1a1e] text-xs font-semibold text-white transition-colors cursor-pointer text-center">
              Compare periods
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GrowthOpportunitiesScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("all");

  const opportunities = [
    {
      id: 1,
      title: "Add FAQ schema to service pages",
      desc: "Could improve rich results across 18 pages",
      priority: "HIGH",
      action: "Create task",
      target: "opportunities",
    },
    {
      id: 2,
      title: "Publish “best alternatives” article",
      desc: "3 competitors cited for purchase-intent prompts",
      priority: "HIGH",
      action: "Open brief",
      target: "ai-content-brief",
    },
    {
      id: 3,
      title: "Fix slow-loading landing page",
      desc: "Mobile LCP above threshold for core offer",
      priority: "HIGH",
      action: "Open audit",
      target: "technical-seo-audit",
    },
    {
      id: 4,
      title: "Improve 8 underperforming location profiles",
      desc: "Missing categories and inconsistent descriptions",
      priority: "MEDIUM",
      action: "Review",
      target: "locations",
    },
    {
      id: 5,
      title: "Respond to 13 unanswered reviews",
      desc: "Average response time is increasing",
      priority: "MEDIUM",
      action: "Manage",
      target: "google-reviews",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            DISCOVER
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Growth opportunities
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            A prioritized to-do list with evidence and estimated effort.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            New analysis
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["All opportunities", "Quick wins", "SEO", "AI visibility", "Content"].map((tab) => {
          const tabKey = tab.toLowerCase().replace(" ", "-");
          const isActive = (activeTab === "all" && tab === "All opportunities") || activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "All opportunities" ? "all" : tabKey)}
              className={`pb-3 font-medium transition-colors cursor-pointer border-b-2 ${
                isActive
                  ? "border-white text-white font-semibold"
                  : "border-transparent text-[#8e8e93] hover:text-white"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Row 1: 3 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            OPPORTUNITIES FOUND
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              28
            </span>
            <span className="text-xs font-mono text-[#71717a]">9 new</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            HIGH PRIORITY
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              07
            </span>
            <span className="text-xs font-mono text-[#71717a]">Review</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            READY TO EXECUTE
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              12
            </span>
            <span className="text-xs font-mono text-[#71717a]">4 approvals</span>
          </div>
        </div>
      </div>

      {/* Opportunity Items List */}
      <div className="space-y-3">
        {opportunities.map((opp) => (
          <div
            key={opp.id}
            className="p-4 rounded-xl border border-[#232326] bg-[#101012] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">{opp.title}</h3>
              <p className="text-xs text-[#8e8e93]">{opp.desc}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#1c1c20] text-[#a1a1aa] border border-[#27272a]">
                {opp.priority}
              </span>
              <button
                onClick={() => onNavigate(opp.target)}
                className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm"
              >
                {opp.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
