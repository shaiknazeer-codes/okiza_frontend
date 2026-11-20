"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export function CompetitorIntelligenceScreen({ onNavigate }) {
  const comps = [
    { name: "Your brand", sc: "42%", ai: "47%", kw: 184, view: "Dashboard", screen: "overview" },
    { name: "RankMesh", sc: "63%", ai: "68%", kw: 302, view: "Inspect →", screen: "competitor-detail" },
    { name: "GrowthPilot", sc: "54%", ai: "61%", kw: 241, view: "Inspect →", screen: "competitor-detail" },
    { name: "AgencyWorks", sc: "39%", ai: "42%", kw: 156, view: "Inspect →", screen: "competitor-detail" },
    { name: "SearchStack", sc: "34%", ai: "37%", kw: 127, view: "Inspect →", screen: "competitor-detail" },
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
            Competitor Intelligence
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Monitor visibility, content coverage and market positioning.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            + Add competitor
          </button>
        </div>
      </div>

      {/* Row 1: 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            COMPETITORS TRACKED
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              05
            </span>
            <span className="text-xs font-mono text-emerald-400">Active</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            SHARED KEYWORDS
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              1,042
            </span>
            <span className="text-xs font-mono text-emerald-400">+62</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            GAPS IDENTIFIED
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              38
            </span>
            <span className="text-xs font-mono text-[#a1a1aa]">11 high</span>
          </div>
        </div>
      </div>

      {/* Competitor Overview Table */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Competitor overview</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5 font-mono">
            Compare both traditional search and AI discovery
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">COMPETITOR</th>
                <th className="py-2.5">SEARCH COVERAGE</th>
                <th className="py-2.5">AI MENTION</th>
                <th className="py-2.5">TOP KEYWORDS</th>
                <th className="py-2.5 text-right">VIEW</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {comps.map((c, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className="py-3.5 font-medium text-white">{c.name}</td>
                  <td className="py-3.5 font-mono text-[#a1a1aa]">{c.sc}</td>
                  <td className="py-3.5 font-mono text-white">{c.ai}</td>
                  <td className="py-3.5 font-mono text-white font-bold">{c.kw}</td>
                  <td className="py-3.5 text-right">
                    <button
                      onClick={() => onNavigate(c.screen)}
                      className="text-xs font-semibold text-white hover:underline cursor-pointer"
                    >
                      {c.view}
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

export function CompetitorDetailScreen({ onNavigate }) {
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
            Competitor detail
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            RankMesh — visibility, cited pages and content strategy.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            Track changes
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["Overview", "Search keywords", "AI prompts", "Top content", "Gaps"].map((tab) => {
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

      {/* Row 1: 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            ORGANIC KEYWORDS
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              302
            </span>
            <span className="text-xs font-mono text-emerald-400">+18</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            AI MENTION RATE
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              68%
            </span>
            <span className="text-xs font-mono text-emerald-400">+4pt</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            CONTENT OVERLAP
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              42%
            </span>
            <span className="text-xs font-mono text-emerald-400">+3pt</span>
          </div>
        </div>
      </div>

      {/* Row 2: Competitor strengths + Actions for Okiza */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Competitor strengths (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Competitor strengths</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Topics currently winning attention
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {[
              { topic: "SEO audit templates", width: "80%" },
              { topic: "AI answer monitoring", width: "68%" },
              { topic: "Review automation", width: "62%" },
              { topic: "Local SEO tracking", width: "72%" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <span className="text-xs font-medium text-white block">
                  {item.topic}
                </span>
                <div className="w-full h-2 rounded-full bg-[#1f1f23] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-white transition-all"
                    style={{ width: item.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions for Okiza (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Actions for Okiza</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Research-led recommendations
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] space-y-1">
              <h3 className="text-xs font-semibold text-white">Build 2 comparison pages</h3>
              <button
                onClick={() => onNavigate("ai-content-brief")}
                className="text-xs font-semibold text-white hover:underline cursor-pointer block"
              >
                Create brief →
              </button>
            </div>

            <div className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] space-y-1">
              <h3 className="text-xs font-semibold text-white">Add 7 service FAQs</h3>
              <button
                onClick={() => onNavigate("opportunities")}
                className="text-xs font-semibold text-white hover:underline cursor-pointer block"
              >
                Open plan →
              </button>
            </div>

            <div className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] space-y-1">
              <h3 className="text-xs font-semibold text-white">Find new citation sources</h3>
              <button
                onClick={() => onNavigate("citation-intelligence")}
                className="text-xs font-semibold text-white hover:underline cursor-pointer block"
              >
                Inspect →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeadsCrmScreen({ onNavigate }) {
  const leads = [
    { company: "Acme Retail", source: "Google organic", owner: "Neha", stage: "New", action: "Qualify" },
    { company: "Bright Labs", source: "ChatGPT referral", owner: "Amit", stage: "Qualified", action: "Schedule demo" },
    { company: "Northstar Foods", source: "Google Maps", owner: "Riya", stage: "Demo set", action: "Follow up" },
    { company: "Mono Studio", source: "Organic search", owner: "Neha", stage: "Negotiation", action: "Send proposal" },
    { company: "Zenith Works", source: "Referral", owner: "Amit", stage: "New", action: "Contact" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            MANAGE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Leads &amp; CRM
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Track the customers your marketing brings in.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            + Add lead
          </button>
        </div>
      </div>

      {/* Row 1: 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            NEW LEADS
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              184
            </span>
            <span className="text-xs font-mono text-emerald-400">+15%</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            QUALIFIED
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              62
            </span>
            <span className="text-xs font-mono text-emerald-400">+8%</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            ESTIMATED PIPELINE
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              ₹12.4L
            </span>
            <span className="text-xs font-mono text-emerald-400">+19%</span>
          </div>
        </div>
      </div>

      {/* Lead Inbox Table */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Lead inbox</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5 font-mono">
            Search leads, assign owners and track next actions
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">COMPANY</th>
                <th className="py-2.5">SOURCE</th>
                <th className="py-2.5">OWNER</th>
                <th className="py-2.5">STAGE</th>
                <th className="py-2.5 text-right">NEXT ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {leads.map((l, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className="py-3.5 font-medium text-white">{l.company}</td>
                  <td className="py-3.5 font-mono text-[#a1a1aa]">{l.source}</td>
                  <td className="py-3.5 font-mono text-white">{l.owner}</td>
                  <td className="py-3.5 font-mono text-[#71717a]">{l.stage}</td>
                  <td className="py-3.5 text-right font-medium text-white">
                    {l.action}
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

export function AutomationsScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("all");

  const auts = [
    { name: "Draft reply to new 1–3★ review", trigger: "New review", last: "Today 9:40", status: "Active", action: "Edit →" },
    { name: "Weekly SEO audit digest", trigger: "Every Monday", last: "Nov 16", status: "Active", action: "Edit →" },
    { name: "Flag competitor AI wins", trigger: "Daily AI scan", last: "Today 8:10", status: "Active", action: "Edit →" },
    { name: "Create brief for lost ranking", trigger: "Position drops", last: "Nov 18", status: "Paused", action: "Resume" },
    { name: "Publish approved social posts", trigger: "Approved content", last: "Nov 19", status: "Active", action: "Inspect →" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            MANAGE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Automations
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Make repeatable marketing tasks run with review and oversight.
          </p>
        </div>

        <button
          onClick={() => onNavigate("automation-builder")}
          className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0"
        >
          + New automation
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["All workflows", "Active", "Paused", "Approval queue", "Run history"].map((tab) => {
          const tabKey = tab.toLowerCase().replace(" ", "-");
          const isActive = (activeTab === "all" && tab === "All workflows") || activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "All workflows" ? "all" : tabKey)}
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

      {/* Your automations table */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Your automations</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5 font-mono">
            Keep external actions reviewable and auditable
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">AUTOMATION</th>
                <th className="py-2.5">TRIGGER</th>
                <th className="py-2.5">LAST RUN</th>
                <th className="py-2.5">STATUS</th>
                <th className="py-2.5 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {auts.map((a, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className="py-3.5 font-medium text-white">{a.name}</td>
                  <td className="py-3.5 font-mono text-[#a1a1aa]">{a.trigger}</td>
                  <td className="py-3.5 font-mono text-[#71717a]">{a.last}</td>
                  <td className="py-3.5 font-mono text-emerald-400 font-semibold">{a.status}</td>
                  <td className="py-3.5 text-right">
                    <button
                      onClick={() => onNavigate("automation-builder")}
                      className="text-xs font-semibold text-white hover:underline cursor-pointer"
                    >
                      {a.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-4 border-t border-[#1f1f23] flex justify-end">
          <button className="px-4 py-2 rounded-xl border border-[#27272a] hover:bg-[#1a1a1e] text-xs font-semibold text-white transition-colors cursor-pointer text-center">
            Open run log
          </button>
        </div>
      </div>
    </div>
  );
}

export function AutomationBuilderScreen({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            MANAGE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Automation builder
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Set triggers, AI tasks, approvals and delivery steps.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0">
          Save workflow
        </button>
      </div>

      {/* Pipeline Container */}
      <div className="p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-8">
        <div>
          <h2 className="text-base font-bold text-white">Low-rating review response</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5">
            Trigger → conditions → AI draft → approval → publish
          </p>
        </div>

        {/* 5 Connected Pipeline Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 overflow-x-auto py-4">
          {/* Node 1: Trigger */}
          <div className="w-full lg:w-44 p-4 rounded-xl bg-white text-black shrink-0">
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider block text-zinc-600">
              TRIGGER
            </span>
            <p className="text-sm font-bold mt-2 leading-tight">
              New Google review
            </p>
          </div>

          <span className="text-zinc-600 font-mono text-lg shrink-0">→</span>

          {/* Node 2: Condition */}
          <div className="w-full lg:w-44 p-4 rounded-xl bg-[#141417] border border-[#27272a] text-white shrink-0">
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider block text-[#71717a]">
              CONDITION
            </span>
            <p className="text-sm font-semibold mt-2 leading-tight">
              Rating below 4
            </p>
          </div>

          <span className="text-zinc-600 font-mono text-lg shrink-0">→</span>

          {/* Node 3: AI Draft */}
          <div className="w-full lg:w-44 p-4 rounded-xl bg-[#141417] border border-[#27272a] text-white shrink-0">
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider block text-[#71717a]">
              AI DRAFT
            </span>
            <p className="text-sm font-semibold mt-2 leading-tight">
              Write reply
            </p>
          </div>

          <span className="text-zinc-600 font-mono text-lg shrink-0">→</span>

          {/* Node 4: Approval */}
          <div className="w-full lg:w-44 p-4 rounded-xl bg-[#141417] border border-[#27272a] text-white shrink-0">
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider block text-[#71717a]">
              APPROVAL
            </span>
            <p className="text-sm font-semibold mt-2 leading-tight">
              Manager reviews
            </p>
          </div>

          <span className="text-zinc-600 font-mono text-lg shrink-0">→</span>

          {/* Node 5: Action */}
          <div className="w-full lg:w-44 p-4 rounded-xl bg-[#141417] border border-[#27272a] text-white shrink-0">
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider block text-[#71717a]">
              ACTION
            </span>
            <p className="text-sm font-semibold mt-2 leading-tight">
              Publish reply
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-[#1f1f23] text-xs font-mono">
          <span className="text-white font-bold">12 successful runs</span>
          <span className="text-[#a1a1aa]">2 awaiting approval</span>
          <span className="text-emerald-400 font-bold">0 failures</span>
        </div>

        {/* Bottom Banner */}
        <div className="p-3.5 rounded-xl bg-[#141417] border border-[#1f1f23] text-xs text-[#a1a1aa]">
          No external publishing without permission. All actions are logged with an editable preview.
        </div>
      </div>
    </div>
  );
}
