"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export function AiVisibilityScreen({ onNavigate }) {
  const [modelTab, setModelTab] = useState("all");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            DISCOVER
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            AI Visibility
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            See how often AI assistants discover, cite and recommend you.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            Run scan
          </button>
        </div>
      </div>

      {/* Row 1: 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {[
          { label: "BRAND MENTION RATE", val: "47%", change: "↑ 7pt" },
          { label: "AVG. AI POSITION", val: "2.8", change: "↑ 0.4" },
          { label: "TRACKED PROMPTS", val: "120", change: "+12" },
          { label: "CITED SOURCES", val: "38", change: "+6" },
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
        {/* AI visibility by assistant (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white">AI visibility by assistant</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Track prompt responses across supported models
            </p>

            <div className="flex items-center gap-4 border-b border-[#1f1f23] text-xs pt-3">
              {["All models", "ChatGPT", "Gemini", "Perplexity"].map((m) => {
                const key = m.toLowerCase().replace(" ", "-");
                const isActive = (modelTab === "all" && m === "All models") || modelTab === key;
                return (
                  <button
                    key={m}
                    onClick={() => setModelTab(m === "All models" ? "all" : key)}
                    className={`pb-2 font-medium transition-colors cursor-pointer border-b-2 ${
                      isActive
                        ? "border-white text-white font-semibold"
                        : "border-transparent text-[#8e8e93] hover:text-white"
                    }`}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Line Chart */}
          <div className="relative w-full h-48 flex items-end pt-4 pb-2">
            <svg viewBox="0 0 500 160" preserveAspectRatio="none" className="w-full h-36 overflow-visible">
              <path
                d="M 10 120 L 70 115 L 140 100 L 200 110 L 260 90 L 320 85 L 380 70 L 440 50 L 485 55"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="120" r="3" fill="#ffffff" />
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

        {/* Visibility breakdown (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Visibility breakdown</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Presence across buying stages
            </p>

            <div className="space-y-4 mt-5">
              {[
                { stage: "Awareness", pct: 78 },
                { stage: "Consideration", pct: 60 },
                { stage: "Comparison", pct: 35 },
                { stage: "Purchase intent", pct: 24 },
              ].map((b, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium text-white">
                    <span>{b.stage}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#1f1f23] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-white transition-all"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#1f1f23] mt-6 flex justify-end">
            <button
              onClick={() => onNavigate("prompt-tracking")}
              className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
            >
              <span>Explore prompts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PromptTrackingScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("all");

  const prompts = [
    { q: "Best AI marketing tools for startups", mention: "Yes", rank: "2", source: "ChatGPT", action: "Inspect →", screen: "ai-answer-inspector" },
    { q: "How can a cafe rank on Google Maps?", mention: "Yes", rank: "4", source: "Gemini", action: "Inspect →", screen: "ai-answer-inspector" },
    { q: "Who offers affordable local SEO?", mention: "No", rank: "—", source: "ChatGPT", action: "Fix gap →", screen: "content-opportunities" },
    { q: "Top alternatives to marketing agencies", mention: "No", rank: "—", source: "Perplexity", action: "Fix gap →", screen: "content-opportunities" },
    { q: "How do I improve AI search visibility?", mention: "Yes", rank: "1", source: "Gemini", action: "Inspect →", screen: "ai-answer-inspector" },
    { q: "Best marketing automation software", mention: "No", rank: "—", source: "ChatGPT", action: "Fix gap →", screen: "content-opportunities" },
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
            Prompt tracking
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Find what AI says when buyers ask questions about your category.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            + Add prompts
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["All prompts", "Brand", "Non-brand", "High intent", "Unanswered"].map((tab) => {
          const tabKey = tab.toLowerCase().replace(" ", "-");
          const isActive = (activeTab === "all" && tab === "All prompts") || activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "All prompts" ? "all" : tabKey)}
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

      {/* Tracked Questions Table */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Tracked questions</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5 font-mono">
            Filter: All assistants • Geography: India • Last scan: Today
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">PROMPT</th>
                <th className="py-2.5">MENTION</th>
                <th className="py-2.5">RANK</th>
                <th className="py-2.5">SOURCE</th>
                <th className="py-2.5 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {prompts.map((p, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className="py-3 font-medium text-white">{p.q}</td>
                  <td className="py-3 font-mono">
                    <span className={p.mention === "Yes" ? "text-white" : "text-[#71717a]"}>
                      {p.mention}
                    </span>
                  </td>
                  <td className="py-3 font-mono font-bold text-white">{p.rank}</td>
                  <td className="py-3 font-mono text-[#a1a1aa]">{p.source}</td>
                  <td className="py-3 text-right">
                    <button
                      onClick={() => onNavigate(p.screen)}
                      className="text-xs font-semibold text-white hover:underline cursor-pointer"
                    >
                      {p.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-4 border-t border-[#1f1f23] flex justify-end">
          <button
            onClick={() => onNavigate("ai-answer-inspector")}
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm"
          >
            Analyze prompt
          </button>
        </div>
      </div>
    </div>
  );
}

export function AiAnswerInspectorScreen({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            DISCOVER
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            AI answer inspector
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Understand exactly why you are mentioned—or missing.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            Rescan answer
          </button>
        </div>
      </div>

      <button
        onClick={() => onNavigate("prompt-tracking")}
        className="flex items-center gap-1.5 text-xs text-white hover:underline font-medium cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to prompts</span>
      </button>

      {/* Main 2 Column Inspection Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Answer Box (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-lg font-bold text-white">
              What are the best AI CMO platforms?
            </h2>
            <p className="text-xs font-mono text-[#71717a] mt-1">
              ChatGPT • English • India • Scan: today
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#1f1f23] bg-[#141417] space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a] font-bold block">
              AI RESPONSE
            </span>
            <p className="text-xs text-[#d4d4d8] leading-relaxed">
              Several platforms help automate marketing workflows. Solutions typically differ in how they cover SEO, AI search visibility, content production, and multi-channel reporting. Teams should compare integration support, approval controls, and reporting transparency.
            </p>
          </div>
        </div>

        {/* Right Evidence Panel (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h2 className="text-base font-bold text-white">Evidence panel</h2>
              <p className="text-xs text-[#8e8e93] mt-0.5">
                Show why results were selected
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
                <span className="text-[#8e8e93]">Brand included</span>
                <span className="font-mono font-bold text-white">No</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
                <span className="text-[#8e8e93]">Competitors included</span>
                <span className="font-mono font-bold text-white">3</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
                <span className="text-[#8e8e93]">Sources linked</span>
                <span className="font-mono font-bold text-white">8</span>
              </div>
              <div className="pt-2">
                <span className="text-xs text-[#8e8e93] block mb-1">
                  Recommended action
                </span>
                <span className="text-sm font-bold text-white block">
                  Publish comparison page
                </span>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-[#1f1f23] mt-6">
            <button
              onClick={() => onNavigate("ai-content-brief")}
              className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm text-center"
            >
              Create content brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CitationIntelligenceScreen({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            DISCOVER
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Citation intelligence
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Which websites are shaping AI answers in your market?
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            Export sources
          </button>
        </div>
      </div>

      {/* Row 1: 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {[
          { label: "TOTAL CITATIONS", val: "1,248", change: "+104" },
          { label: "YOUR CITED URLS", val: "38", change: "+6" },
          { label: "SOURCE SHARE", val: "12.9%", change: "+2.6pt" },
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

      {/* Row 2: Top cited domains + Earned citation gaps */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Top cited domains (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Top cited domains</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              See the most influential publishers in buyer questions
            </p>
          </div>

          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">DOMAIN</th>
                <th className="py-2.5">CITATIONS</th>
                <th className="py-2.5">SHARE</th>
                <th className="py-2.5">TYPE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {[
                { domain: "industryweekly.com", c: 184, s: "18%", t: "Editorial" },
                { domain: "yourbrand.com", c: 128, s: "13%", t: "Owned" },
                { domain: "softwarecompare.io", c: 103, s: "10%", t: "Directory" },
                { domain: "reddit.com", c: 87, s: "9%", t: "Community" },
                { domain: "marketinsights.org", c: 69, s: "7%", t: "Research" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className="py-3 font-medium text-white">{row.domain}</td>
                  <td className="py-3 font-mono text-white font-semibold">{row.c}</td>
                  <td className="py-3 font-mono text-[#a1a1aa]">{row.s}</td>
                  <td className="py-3 font-mono text-[#71717a]">{row.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Earned citation gaps (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Earned citation gaps</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Pages to create or pitch
            </p>
          </div>

          <div className="space-y-3">
            {[
              { title: "Buyer comparisons", note: "Missing from 9 answers", priority: "HIGH" },
              { title: "Industry research", note: "Referenced 21 times", priority: "HIGH" },
              { title: "Customer case studies", note: "Missing 7 citations", priority: "MEDIUM" },
            ].map((gap, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] flex items-center justify-between gap-3"
              >
                <div>
                  <h3 className="text-xs font-semibold text-white">{gap.title}</h3>
                  <p className="text-[11px] text-[#8e8e93] mt-0.5">{gap.note}</p>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#1c1c20] text-[#a1a1aa] border border-[#27272a]">
                  {gap.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AiCompetitorBenchmarkingScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            DISCOVER
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            AI competitor benchmarking
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            See who is mentioned beside you in AI answers.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            + Competitor
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["Overview", "Share of voice", "Overlap", "Recommendations"].map((tab) => {
          const tabKey = tab.toLowerCase().replace(" ", "-");
          const isActive = (activeTab === "overview" && tab === "Overview") || activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "Overview" ? "overview" : tabKey)}
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

      {/* Row 2: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Brand mention share (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Brand mention share</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Tracked across 120 prompts
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {[
              { brand: "Your brand", pct: 52, isUser: true },
              { brand: "RankMesh", pct: 78, isUser: false },
              { brand: "GrowthPilot", pct: 60, isUser: false },
              { brand: "AgencyWorks", pct: 38, isUser: false },
              { brand: "SearchStack", pct: 28, isUser: false },
            ].map((b, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className={b.isUser ? "text-white font-bold" : "text-[#a1a1aa]"}>
                    {b.brand}
                  </span>
                  <span className="font-mono text-white">{b.pct}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#1f1f23] overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      b.isUser ? "bg-white" : "bg-[#52525b]"
                    }`}
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prompts to win (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Prompts to win</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              High-value unanswered questions
            </p>
          </div>

          <div className="space-y-3">
            {[
              { title: "AI CMO for SMBs", action: "Create comparison" },
              { title: "Marketing without agency", action: "Answer intent" },
              { title: "Best AEO platform", action: "Earn citations" },
              { title: "Local ranking alternatives", action: "Build topic cluster" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] space-y-1"
              >
                <h3 className="text-xs font-semibold text-white">{item.title}</h3>
                <p className="text-[11px] text-[#8e8e93]">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
