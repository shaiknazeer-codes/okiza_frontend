"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export function SeoIntelligenceScreen({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            DISCOVER
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            SEO Intelligence
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Audit technical health, keyword movement and organic search opportunities.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button
            onClick={() => onNavigate("technical-seo-audit")}
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm"
          >
            Run SEO audit
          </button>
        </div>
      </div>

      {/* Row 1: 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {[
          { label: "SITE HEALTH", val: "87 / 100", change: "+4", note: "" },
          { label: "CLICKS", val: "18.6k", change: "+9%", note: "" },
          { label: "TRACKED TERMS", val: "1,298", change: "+42", note: "" },
          { label: "CRITICAL ISSUES", val: "6", change: "Fix now", note: "" },
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
              <span className="text-xs font-mono font-medium text-emerald-400">
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: 2 Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Organic performance (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Organic performance</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Google Search Console • 30 days
            </p>
          </div>

          <div className="relative w-full h-52 flex items-end pt-4 pb-2">
            <svg viewBox="0 0 500 160" preserveAspectRatio="none" className="w-full h-36 overflow-visible">
              <path
                d="M 10 130 L 70 120 L 130 110 L 180 125 L 240 95 L 300 100 L 360 70 L 420 50 L 485 55"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="130" r="3" fill="#ffffff" />
              <circle cx="485" cy="55" r="3" fill="#ffffff" />
            </svg>
          </div>

          <div className="pt-3 border-t border-[#1f1f23] flex justify-between text-[11px] font-mono text-[#71717a]">
            <span>Day 1</span>
            <span>Day 10</span>
            <span>Day 20</span>
            <span>Day 30</span>
          </div>
        </div>

        {/* SEO priorities (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">SEO priorities</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Automated audit recommendations
            </p>
          </div>

          <div className="space-y-3">
            {[
              { title: "Canonical conflicts", sub: "6 affected URLs" },
              { title: "Missing title tags", sub: "21 affected URLs" },
              { title: "Duplicate content", sub: "12 clusters" },
              { title: "Slow mobile pages", sub: "8 affected URLs" },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] space-y-1"
              >
                <h3 className="text-xs font-semibold text-white">{p.title}</h3>
                <p className="text-[11px] text-[#8e8e93] font-mono">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TechnicalSeoAuditScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("issues");

  const issues = [
    { name: "Duplicate canonical targets", severity: "Critical", urls: 6, detected: "Today", action: "Inspect →", badge: "text-rose-400" },
    { name: "Missing meta descriptions", severity: "Medium", urls: 23, detected: "Today", action: "Generate →", badge: "text-amber-400" },
    { name: "Broken internal links", severity: "Critical", urls: 7, detected: "Yesterday", action: "Fix →", badge: "text-rose-400" },
    { name: "Slow mobile LCP", severity: "High", urls: 12, detected: "Yesterday", action: "Inspect →", badge: "text-orange-400" },
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
            Technical SEO audit
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Find crawl, indexability, metadata and speed issues.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            Crawl again
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["Issues", "Crawled pages", "Indexing", "Core Web Vitals", "Schema"].map((tab) => {
          const tabKey = tab.toLowerCase().replace(" ", "-");
          const isActive = (activeTab === "issues" && tab === "Issues") || activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "Issues" ? "issues" : tabKey)}
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

      {/* Row 1: 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            CRITICAL
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              06
            </span>
            <span className="text-xs font-mono text-rose-400">Urgent</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            WARNINGS
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              48
            </span>
            <span className="text-xs font-mono text-[#a1a1aa]">Needs review</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            HEALTHY PAGES
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              1,284
            </span>
            <span className="text-xs font-mono text-emerald-400">82%</span>
          </div>
        </div>
      </div>

      {/* Issues by severity table */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Issues by severity</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5">
            Click to inspect affected URLs and proposed fix
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">ISSUE</th>
                <th className="py-2.5">SEVERITY</th>
                <th className="py-2.5">URLS</th>
                <th className="py-2.5">DETECTED</th>
                <th className="py-2.5 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {issues.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className="py-3 font-medium text-white">{row.name}</td>
                  <td className={`py-3 font-mono font-semibold ${row.badge}`}>
                    {row.severity}
                  </td>
                  <td className="py-3 font-mono text-white">{row.urls}</td>
                  <td className="py-3 font-mono text-[#a1a1aa]">{row.detected}</td>
                  <td className="py-3 text-right">
                    <button className="text-xs font-semibold text-white hover:underline cursor-pointer">
                      {row.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function KeywordRankingsScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("all");

  const keywords = [
    { kw: "AI marketing platform", vol: "5.4k", current: "#8", change: "↑ 3", opp: "Improve page", screen: "content-opportunities" },
    { kw: "best GEO software", vol: "2.1k", current: "#16", change: "↑ 5", opp: "Optimize", screen: "content-opportunities" },
    { kw: "local SEO services", vol: "9.8k", current: "#11", change: "↓ 2", opp: "Fix intent", screen: "content-opportunities" },
    { kw: "AI CMO for startups", vol: "1.7k", current: "#3", change: "↑ 4", opp: "Defend", screen: "content-opportunities" },
    { kw: "marketing automation AI", vol: "4.2k", current: "#19", change: "↑ 1", opp: "Create content", screen: "ai-content-brief" },
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
            Keyword rankings
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Track movement by intent, location and device.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            + Add keywords
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["All keywords", "Top 3", "Top 10", "Striking distance", "Lost"].map((tab) => {
          const tabKey = tab.toLowerCase().replace(" ", "-");
          const isActive = (activeTab === "all" && tab === "All keywords") || activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "All keywords" ? "all" : tabKey)}
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

      {/* Row 1: 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            TOP 3
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              72
            </span>
            <span className="text-xs font-mono text-emerald-400">+11</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            TOP 10
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              184
            </span>
            <span className="text-xs font-mono text-emerald-400">+21</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            AVG. RANK
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              14.6
            </span>
            <span className="text-xs font-mono text-emerald-400">+2.1</span>
          </div>
        </div>
      </div>

      {/* Tracked Keywords Table */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Tracked keywords</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5 font-mono">
            Filters: Search engine / Device / Market / Intent
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">KEYWORD</th>
                <th className="py-2.5">VOLUME</th>
                <th className="py-2.5">CURRENT</th>
                <th className="py-2.5">CHANGE</th>
                <th className="py-2.5 text-right">OPPORTUNITY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {keywords.map((k, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className="py-3 font-medium text-white">{k.kw}</td>
                  <td className="py-3 font-mono text-white">{k.vol}</td>
                  <td className="py-3 font-mono font-bold text-white">{k.current}</td>
                  <td className="py-3 font-mono text-emerald-400">{k.change}</td>
                  <td className="py-3 text-right">
                    <button
                      onClick={() => onNavigate(k.screen)}
                      className="text-xs font-semibold text-white hover:underline cursor-pointer"
                    >
                      {k.opp}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function ContentOpportunitiesScreen({ onNavigate }) {
  const topics = [
    { title: "AI marketing strategy template", intent: "Informational", demand: "High", cov: "Missing", action: "Brief →" },
    { title: "Local SEO for restaurants", intent: "Commercial", demand: "High", cov: "Weak", action: "Improve →" },
    { title: "ChatGPT brand visibility checklist", intent: "Informational", demand: "Medium", cov: "Missing", action: "Brief →" },
    { title: "Alternatives to agencies", intent: "Commercial", demand: "High", cov: "Missing", action: "Brief →" },
    { title: "Google Business Profile optimization", intent: "Commercial", demand: "Medium", cov: "Partial", action: "Update →" },
    { title: "GEO measurement guide", intent: "Informational", demand: "Medium", cov: "Missing", action: "Brief →" },
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
            Content opportunities
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Find topics competitors cover and your site does not.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button
            onClick={() => onNavigate("ai-content-brief")}
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm"
          >
            Create brief
          </button>
        </div>
      </div>

      {/* Suggested Topic Clusters Table */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Suggested topic clusters</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5">
            Competitor coverage and search-demand signals
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">TOPIC / CLUSTER</th>
                <th className="py-2.5">SEARCH INTENT</th>
                <th className="py-2.5">DEMAND</th>
                <th className="py-2.5">COVERAGE</th>
                <th className="py-2.5 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {topics.map((t, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className="py-3 font-medium text-white">{t.title}</td>
                  <td className="py-3 font-mono text-[#a1a1aa]">{t.intent}</td>
                  <td className="py-3 font-mono text-white">{t.demand}</td>
                  <td className="py-3 font-mono text-[#71717a]">{t.cov}</td>
                  <td className="py-3 text-right">
                    <button
                      onClick={() => onNavigate("ai-content-brief")}
                      className="text-xs font-semibold text-white hover:underline cursor-pointer"
                    >
                      {t.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-4 border-t border-[#1f1f23]">
          <p className="text-[11px] text-[#71717a]">
            Evidence should include source URLs, confidence, freshness, and the specific search intent served.
          </p>
        </div>
      </div>
    </div>
  );
}
