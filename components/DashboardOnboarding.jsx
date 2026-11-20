"use client";

import { useState, useEffect, useRef } from "react";
import OkizaLogo from "@/components/OkizaLogo";
import {
  Globe,
  ArrowRight,
  Check,
  Search,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  Layers,
  Code2,
  Building2,
  Activity,
  Zap,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  ChevronLeft,
  X,
} from "lucide-react";

/* =========================================================================
   AGENT MASCOT AVATAR (SVG matching visual reference)
   Round silver agent with red circular spectacles, green pupils, and warm smile
   ========================================================================= */
function AgentMascot({ size = 44, isThinking = false }) {
  return (
    <div
      className={`relative rounded-full bg-gradient-to-b from-[#2d2926] to-[#1c1917] border border-[#57534e] flex items-center justify-center shrink-0 shadow-lg overflow-hidden ${
        isThinking ? "ring-2 ring-purple-500/50" : ""
      }`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 36 36" className="w-[82%] h-[82%]">
        {/* Face contour */}
        <circle cx="18" cy="18" r="16" fill="#e7e5e4" />
        {/* Ear nubs */}
        <rect x="0" y="15" width="2" height="6" rx="1" fill="#a8a29e" />
        <rect x="34" y="15" width="2" height="6" rx="1" fill="#a8a29e" />
        {/* Red glasses frame */}
        <circle cx="12" cy="16.5" r="5.5" fill="#1c1917" stroke="#ef4444" strokeWidth="2.2" />
        <circle cx="24" cy="16.5" r="5.5" fill="#1c1917" stroke="#ef4444" strokeWidth="2.2" />
        <path d="M17.5 16.5 L18.5 16.5" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
        {/* Expressive glowing green pupils */}
        <circle cx="13" cy="15.8" r="2.2" fill="#22c55e" />
        <circle cx="25" cy="15.8" r="2.2" fill="#22c55e" />
        {/* Catchlight reflections */}
        <circle cx="14" cy="15" r="0.9" fill="#ffffff" />
        <circle cx="26" cy="15" r="0.9" fill="#ffffff" />
        {/* Cheerful smile */}
        <path d="M14 25.5 Q18 29.5 22 25.5" stroke="#44403c" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
      {isThinking && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
      )}
    </div>
  );
}

/* =========================================================================
   CAROUSEL SLIDES (1 OF 7) - RIGHT PANEL
   ========================================================================= */

function SlideSiteAudit() {
  const auditIssues = [
    { id: 1, title: "Pages AI can't read", count: "4 of 48 pages", severity: "High", badgeColor: "bg-[#451a1a] text-[#f87171] border-[#7f1d1d]/60" },
    { id: 2, title: "Missing meta descriptions", count: "12 of 48 pages", severity: "Medium", badgeColor: "bg-[#3f2b18] text-[#fb923c] border-[#7c2d12]/60" },
    { id: 3, title: "Thin pages", count: "7 of 48 pages", severity: "Medium", badgeColor: "bg-[#3f2b18] text-[#fb923c] border-[#7c2d12]/60" },
    { id: 4, title: "Broken internal links", count: "3 of 48 pages", severity: "Low", badgeColor: "bg-[#262626] text-[#a1a1aa] border-[#404040]/60" },
    { id: 5, title: "Images without alt text", count: "9 of 48 pages", severity: "Low", badgeColor: "bg-[#262626] text-[#a1a1aa] border-[#404040]/60" },
    { id: 6, title: "Duplicate titles", count: "2 of 48 pages", severity: "Low", badgeColor: "bg-[#262626] text-[#a1a1aa] border-[#404040]/60" },
    { id: 7, title: "Redirect chains", count: "5 of 48 pages", severity: "Low", badgeColor: "bg-[#262626] text-[#a1a1aa] border-[#404040]/60" },
    { id: 8, title: "Missing H1 headings", count: "3 of 48 pages", severity: "Low", badgeColor: "bg-[#262626] text-[#a1a1aa] border-[#404040]/60" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl border border-[#2e2a36] bg-[#14121a]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Decorative stacked page tabs at top */}
      <div className="flex items-center px-4 pt-2.5 pb-1 gap-1.5 border-b border-[#25212e] bg-[#181522]/80">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60"></div>
        <span className="ml-2 text-[10px] font-mono text-[#a1a1aa]">Site Audit Report • Active Scan</span>
      </div>

      {/* Main Card Content */}
      <div className="p-6">
        <div className="flex items-start gap-5 mb-5 pb-5 border-b border-[#24202e]">
          {/* Circular Health Dial */}
          <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#2a2536"
                strokeWidth="3.2"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#eab308"
                strokeDasharray="64, 100"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-xl font-bold font-mono text-white leading-none">64</span>
              <span className="text-[9px] text-[#a1a1aa] font-mono mt-0.5">Site health</span>
              <span className="text-[8px] text-[#71717a] font-mono">48 pages</span>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono uppercase text-[#c084fc] font-semibold tracking-wider">
                Audit Summary
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                12 Priority Fixes
              </span>
            </div>
            <p className="text-xs text-[#d4d4d8] leading-relaxed">
              4 critical pages are blocked or malformed for LLM crawler bots (ChatGPT, Perplexity). Resolving these lifts generative citation potential by +38%.
            </p>
          </div>
        </div>

        {/* Audit Issues Checklist */}
        <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
          {auditIssues.map((issue) => (
            <div
              key={issue.id}
              className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-[#191624] hover:bg-[#1f1b2d] border border-[#2b2638] text-xs transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-[#71717a] font-mono text-[11px] w-4 text-right">
                  {issue.id}
                </span>
                <span className="text-[#ededed] font-medium truncate">{issue.title}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[11px] font-mono text-[#a1a1aa]">{issue.count}</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${issue.badgeColor}`}
                >
                  {issue.severity}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Card Footer Banner */}
        <div className="mt-5 pt-4 border-t border-[#24202e] flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-white">Run a site audit to see what to fix first</h4>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#3b1747] text-[#c084fc] border border-[#581c87]">
              Popular
            </span>
          </div>
          <p className="text-xs text-[#a1a1aa] leading-relaxed">
            I read every page and rank the fixes by how much they&apos;ll lift your traffic and AI citations.
          </p>
          <div className="flex items-center gap-1.5 text-[11px] text-[#c4b5fd] font-medium pt-1">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Nearly 6 in 10 new teams run an audit on their first day.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideAiVisibility() {
  const models = [
    { name: "ChatGPT", result: "Names you 2nd", status: "success", rank: "2nd" },
    { name: "Google AI", result: "Names you 1st", status: "success", rank: "1st" },
    { name: "Gemini", result: "Names Rival Co.", status: "missed", rank: null },
    { name: "Perplexity", result: "Names you 3rd", status: "success", rank: "3rd" },
    { name: "Claude", result: "Names Rival Co.", status: "missed", rank: null },
    { name: "Copilot", result: "Names you 1st", status: "success", rank: "1st" },
    { name: "Grok", result: "Names Rival Co.", status: "missed", rank: null },
    { name: "DeepSeek", result: "Names you 4th", status: "success", rank: "4th" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl border border-[#2e2a36] bg-[#14121a]/90 backdrop-blur-xl shadow-2xl overflow-hidden p-6">
      {/* Evaluated Query Pill */}
      <div className="mb-4">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#a1a1aa] block mb-1.5">
          Evaluated Prompt
        </span>
        <div className="px-3.5 py-2 rounded-xl bg-[#1d1929] border border-[#352e46] text-sm text-[#f5f3ff] font-medium flex items-center justify-between">
          <span>&quot;Best project tool for small agencies?&quot;</span>
          <span className="text-[10px] font-mono text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
            5 of 8 Won
          </span>
        </div>
      </div>

      {/* Model Grid */}
      <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
        {models.map((m, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-2 px-3 rounded-lg bg-[#191624] hover:bg-[#1f1b2d] border border-[#2b2638] text-xs transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span className="font-medium text-[#ededed]">{m.name}</span>
            </div>
            <div className="flex items-center gap-2">
              {m.status === "success" ? (
                <span className="flex items-center gap-1 text-emerald-400 font-mono font-medium text-[11px]">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  {m.result}
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[#f87171] font-mono text-[11px]">
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  {m.result}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Card Footer Banner */}
      <div className="mt-5 pt-4 border-t border-[#24202e] flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-white">Track AI visibility to see when AI names you</h4>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#3b1747] text-[#c084fc] border border-[#581c87]">
            Popular
          </span>
        </div>
        <p className="text-xs text-[#a1a1aa] leading-relaxed">
          I check which AI answers name you for the questions your customers ask, and who they name instead.
        </p>
        <div className="flex items-center gap-1.5 text-[11px] text-[#c4b5fd] font-medium pt-1">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>2 in 3 new teams track AI visibility from their first day.</span>
        </div>
      </div>
    </div>
  );
}

function SlideAiBriefs() {
  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl border border-[#2e2a36] bg-[#14121a]/90 backdrop-blur-xl shadow-2xl overflow-hidden p-6">
      {/* Target brief trigger */}
      <div className="mb-4 flex items-center justify-end">
        <div className="px-3 py-1.5 rounded-full bg-[#272236] border border-[#3c3452] text-xs text-[#f5f3ff] font-medium flex items-center gap-1.5">
          <span>Write a brief on</span>
          <span className="font-semibold text-purple-300">&quot;client onboarding checklist&quot;</span>
        </div>
      </div>

      {/* Generated Brief Card */}
      <div className="p-4 rounded-xl bg-[#191624] border border-[#2e283d] space-y-3">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-[#292336]">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-mono text-xs font-semibold">Used Okiza to create a brief</span>
          </div>
          <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
            <Check className="w-3.5 h-3.5" /> Saved
          </span>
        </div>

        <div className="text-sm font-semibold text-white flex items-center gap-2">
          <span>Client onboarding checklist</span>
        </div>

        <div className="space-y-1.5 text-xs text-[#d4d4d8]">
          {[
            "What to collect before kickoff",
            "Your first-week checklist",
            "Setting expectations with the client",
            "Handing over to the account team",
            "Your 30-day check-in",
            "Templates to copy",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 py-1">
              <span className="font-mono text-[#a1a1aa] text-[11px] w-3">{idx + 1}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer Banner */}
      <div className="mt-5 pt-4 border-t border-[#24202e] flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-white">Connect Okiza to the AI tools you already use</h4>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#3b1747] text-[#c084fc] border border-[#581c87]">
            Popular
          </span>
        </div>
        <p className="text-xs text-[#a1a1aa] leading-relaxed">
          Ask Claude, ChatGPT, or Cursor for a brief or an audit. I do it from your Okiza data and save the result directly.
        </p>
      </div>
    </div>
  );
}

function SlideSearchConsole() {
  const pages = [
    { path: "/pricing", clicks: "1,240", change: "↑ 12%", changeType: "up" },
    { path: "/blog/onboarding-guide", clicks: "860", change: "↓ 18%", changeType: "down" },
    { path: "/features", clicks: "610", change: "↑ 4%", changeType: "up" },
    { path: "/blog/client-reporting", clicks: "540", change: "↓ 9%", changeType: "down" },
    { path: "/integrations", clicks: "420", change: "↑ 6%", changeType: "up" },
    { path: "/blog/agency-pricing", clicks: "310", change: "↑ 2%", changeType: "up" },
    { path: "/case-studies", clicks: "260", change: "↓ 3%", changeType: "down" },
    { path: "/blog/time-tracking", clicks: "190", change: "↑ 8%", changeType: "up" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl border border-[#2e2a36] bg-[#14121a]/90 backdrop-blur-xl shadow-2xl overflow-hidden p-6">
      <div className="flex items-center justify-between text-xs font-mono text-[#a1a1aa] pb-2 border-b border-[#25212e] mb-2 px-1">
        <span>Page URL</span>
        <span>Clicks • 28 days</span>
      </div>

      <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
        {pages.map((p, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between py-1.5 px-3 rounded-lg text-xs font-mono transition-colors ${
              p.changeType === "down"
                ? "bg-[#291717]/60 border border-[#4a1b1b]/50 text-[#fca5a5]"
                : "bg-[#191624] border border-[#2b2638] text-[#e4e4e7]"
            }`}
          >
            <span className="truncate max-w-[240px]">{p.path}</span>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-semibold text-white">{p.clicks}</span>
              <span
                className={`text-[11px] font-semibold ${
                  p.changeType === "up" ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {p.changeType === "up" ? (
                  <span className="flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> {p.change}
                  </span>
                ) : (
                  <span className="flex items-center gap-0.5">
                    <TrendingDown className="w-3 h-3" /> {p.change}
                  </span>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Card Footer Banner */}
      <div className="mt-5 pt-4 border-t border-[#24202e] flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-white">Connect Search Console to catch pages losing traffic</h4>
        <p className="text-xs text-[#a1a1aa] leading-relaxed">
          I&apos;ll watch the clicks every page earns from Google, and flag the ones starting to slip before it damages your pipeline.
        </p>
      </div>
    </div>
  );
}

function SlideAeoReadiness() {
  const schemas = [
    { type: "SoftwareApplication", status: "Valid", issues: 0, impact: "High" },
    { type: "FAQPage (5 Q&As)", status: "Valid", issues: 0, impact: "High" },
    { type: "Organization", status: "Valid", issues: 0, impact: "Medium" },
    { type: "BreadcrumbList", status: "Valid", issues: 0, impact: "Low" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl border border-[#2e2a36] bg-[#14121a]/90 backdrop-blur-xl shadow-2xl overflow-hidden p-6">
      <div className="flex items-center justify-between pb-4 border-b border-[#24202e] mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300">
            AEO Readiness Score
          </span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-2xl font-bold font-mono text-white">91.8</span>
            <span className="text-xs font-mono text-emerald-400">/ 100 • Tier-1 LLM Extractable</span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
          Schema Verified
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {schemas.map((s, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-2.5 rounded-lg bg-[#191624] border border-[#2b2638] text-xs"
          >
            <div className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-purple-400" />
              <span className="font-mono text-white">{s.type}</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3 h-3" /> {s.status}
              </span>
              <span className="text-[#a1a1aa]">Impact: {s.impact}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-[#24202e] flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-white">Validate Schema & Answer Engine Structure</h4>
        <p className="text-xs text-[#a1a1aa] leading-relaxed">
          Ensure OpenAI, Perplexity, and Google extract your data directly into high-converting zero-click citations.
        </p>
      </div>
    </div>
  );
}

function SlideCompetitorShare() {
  const comps = [
    { name: "Okiza", share: "46.2%", growth: "+14.2%", isTarget: true },
    { name: "Atlassian Jira", share: "24.1%", growth: "-3.1%", isTarget: false },
    { name: "Asana", share: "16.5%", growth: "+1.0%", isTarget: false },
    { name: "Jasper AI", share: "13.2%", growth: "-4.5%", isTarget: false },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl border border-[#2e2a36] bg-[#14121a]/90 backdrop-blur-xl shadow-2xl overflow-hidden p-6">
      <div className="mb-4">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#a1a1aa] block mb-1">
          AI Share of Voice
        </span>
        <h3 className="text-base font-semibold text-white">Head-to-Head LLM Citation Share</h3>
      </div>

      <div className="space-y-2 mb-4">
        {comps.map((c, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-xl border text-xs ${
              c.isTarget
                ? "bg-purple-950/20 border-purple-500/40 text-white"
                : "bg-[#191624] border-[#2b2638] text-[#a1a1aa]"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`font-semibold ${c.isTarget ? "text-purple-300 text-sm" : "text-white"}`}>
                {c.name}
              </span>
              <div className="flex items-center gap-2 font-mono">
                <span className="font-bold text-white">{c.share}</span>
                <span className={c.growth.startsWith("+") ? "text-emerald-400" : "text-rose-400"}>
                  {c.growth}
                </span>
              </div>
            </div>
            {/* Progress bar */}
            <div className="w-full h-1.5 rounded-full bg-[#262133] overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  c.isTarget ? "bg-gradient-to-r from-purple-500 to-indigo-400" : "bg-[#524a66]"
                }`}
                style={{ width: c.share }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-[#24202e] flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-white">Monitor AI Share of Voice in real time</h4>
        <p className="text-xs text-[#a1a1aa] leading-relaxed">
          Track how often generative engines recommend your solution over your top competitors across all customer queries.
        </p>
      </div>
    </div>
  );
}

function SlideRoadmap() {
  const recommendations = [
    { title: "Inject JSON-LD SoftwareApplication Schema", lift: "+18% Citation Lift", priority: "High" },
    { title: "Rewrite pricing comparison table for ChatGPT parser", lift: "+14% Citation Lift", priority: "High" },
    { title: "Publish AEO FAQ entity node for LLM RAG pipelines", lift: "+9% Citation Lift", priority: "Medium" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl border border-[#2e2a36] bg-[#14121a]/90 backdrop-blur-xl shadow-2xl overflow-hidden p-6">
      <div className="mb-4">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#a1a1aa] block mb-1">
          Optimization Engine
        </span>
        <h3 className="text-base font-semibold text-white">Prioritized High-Impact Fixes</h3>
      </div>

      <div className="space-y-2 mb-4">
        {recommendations.map((rec, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl bg-[#191624] border border-[#2b2638] text-xs flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-mono text-[11px] shrink-0 font-bold">
                {idx + 1}
              </span>
              <span className="text-white font-medium truncate">{rec.title}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0 font-mono text-[11px]">
              <span className="text-emerald-400 font-semibold">{rec.lift}</span>
              <span className="px-2 py-0.5 rounded bg-[#451a1a] text-[#f87171] border border-[#7f1d1d]/60 font-semibold">
                {rec.priority}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-[#24202e] flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-white">Prioritized recommendations ranked by impact</h4>
        <p className="text-xs text-[#a1a1aa] leading-relaxed">
          Actionable technical and semantic fixes that directly influence LLM training and RAG retrieval pipelines.
        </p>
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN ONBOARDING MODAL COMPONENT
   ========================================================================= */

export default function DashboardOnboarding({
  initialDomain = "prepzue.com",
  onComplete,
  onCancel,
}) {
  // Navigation & Stepper States
  // 1: Enter Website, 2: Reading Site, 3: Criteria & Competitors, 4: Review
  const [step, setStep] = useState(1);
  const [websiteInput, setWebsiteInput] = useState(initialDomain || "");
  const [activeDomain, setActiveDomain] = useState(initialDomain || "prepzue.com");

  // Live scan animation progress for Step 2
  const [scanStepIndex, setScanStepIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  // Carousel slide state (1 through 7)
  const [slideIndex, setSlideIndex] = useState(1);
  const totalSlides = 7;

  // Selected Competitors
  const [competitors, setCompetitors] = useState({
    comp1: true,
    comp2: true,
    comp3: true,
    comp4: true,
  });

  // Criteria badges (matching Screenshot 5)
  const [criteriaList] = useState([
    { id: 1, label: "Documentation-specific placeholder utility", color: "bg-[#1e293b] text-[#38bdf8] border-[#0284c7]/40" },
    { id: 2, label: "Non-commercial service model", color: "bg-[#2e1d0f] text-[#fb923c] border-[#b45309]/40" },
    { id: 3, label: "Permissionless usage rights", color: "bg-[#0f2d2e] text-[#2dd4bf] border-[#0f766e]/40" },
    { id: 4, label: "Multilingual informational content", color: "bg-[#14291e] text-[#4ade80] border-[#15803d]/40" },
    { id: 5, label: "Autonomous generative citation engine", color: "bg-[#281b3d] text-[#c084fc] border-[#6b21a8]/40" },
  ]);

  // Handle Domain Submission
  const handleStartAnalysis = (e) => {
    if (e) e.preventDefault();
    const clean = (websiteInput.trim() || activeDomain)
      .replace(/^https?:\/\//, "")
      .replace(/\/.*$/, "")
      .toLowerCase();
    setActiveDomain(clean);
    setWebsiteInput(clean);
    setStep(2);
    setIsScanning(true);
    setScanStepIndex(0);
  };

  // Automated scanning simulation for Step 2
  useEffect(() => {
    if (step !== 2 || !isScanning) return;

    const timer1 = setTimeout(() => setScanStepIndex(1), 1200);
    const timer2 = setTimeout(() => {
      setScanStepIndex(2);
      setSlideIndex(2); // advance preview slide to AI visibility
    }, 2800);
    const timer3 = setTimeout(() => {
      setScanStepIndex(3);
    }, 4200);
    const timer4 = setTimeout(() => {
      setIsScanning(false);
      setStep(3); // transition to Competitors & Criteria
      setSlideIndex(3); // advance preview slide to Briefs
    }, 5600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [step, isScanning]);

  // Handle Final Continue to Dashboard
  // CRITICAL: Must scroll window directly to top 0 without any scroll offset!
  const handleContinue = () => {
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("okiza_onboarding_completed", "true");
      } catch (err) {}
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    if (onComplete) {
      onComplete(activeDomain);
    }
  };

  const handleSkip = () => {
    handleContinue();
  };

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev > 1 ? prev - 1 : totalSlides));
  };

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev < totalSlides ? prev + 1 : 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0d0c0b] text-[#ededed] font-sans flex flex-col overflow-y-auto">
      {/* Top Global Navigation Bar */}
      <header className="w-full h-16 border-b border-[#262422] bg-[#121110]/95 backdrop-blur-md px-6 md:px-12 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <OkizaLogo size={26} variant="white" />
          <span className="font-bold text-white text-base tracking-tight">Okiza</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/30">
            Agent Setup
          </span>
        </div>

        {/* Center Domain Badge */}
        <div className="flex items-center gap-2">
          {activeDomain ? (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1917] border border-[#2d2926] text-xs font-mono text-[#d6d3d1]">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              <span>{activeDomain}</span>
            </div>
          ) : (
            <span className="text-xs text-[#78716c] font-mono flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> No website added yet
            </span>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleSkip}
            className="text-xs text-[#a8a29e] hover:text-white transition-colors cursor-pointer font-medium"
          >
            Skip to Dashboard
          </button>
        </div>
      </header>

      {/* Main Split Layout Container */}
      <div className="flex-1 flex flex-col lg:flex-row w-full min-h-[calc(100vh-4rem)]">
        {/* ==============================================================
            LEFT COLUMN: AGENT SETUP & STEP TREE (~42% WIDTH)
            ============================================================== */}
        <div className="w-full lg:w-[42%] border-r border-[#262422] bg-[#121110] p-6 sm:p-10 md:p-12 flex flex-col justify-between">
          <div className="max-w-md mx-auto w-full space-y-8">
            {/* Mascot Avatar & Dynamic Headline */}
            <div className="flex items-start gap-4">
              <AgentMascot size={46} isThinking={isScanning} />

              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {step === 1 && "Hi, I'm your Okiza agent"}
                  {step === 2 && "First, I'm reading your site"}
                  {step === 3 && "Now, who you're up against"}
                  {step === 4 && "Here's everything I found"}
                </h1>
                <p className="text-xs sm:text-sm text-[#a8a29e] mt-1.5 leading-relaxed">
                  {step === 1 && (
                    <>
                      Give me{" "}
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-dashed border-[#78716c] bg-[#1c1917] text-white text-xs font-mono">
                        <Globe className="w-3 h-3 text-[#38bdf8]" /> your website
                      </span>{" "}
                      and I&apos;ll learn your business, so your workspace opens already knowing your brand and who you compete with.
                    </>
                  )}
                  {step === 2 && (
                    <>
                      Your own pages tell me what you sell and who you sell to, so the briefs and AI visibility optimizations I generate start from your real business. It takes 1-2 minutes.
                    </>
                  )}
                  {step === 3 && (
                    <>
                      The competitors you keep are the ones I track in AI answers and check for content gaps. Keep the ones your customers compare you with.
                    </>
                  )}
                  {step === 4 && (
                    <>
                      Check it over. Once you&apos;re in, I start right away with an AEO site audit and a continuous scan for high-intent AI citation ideas.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Continuous Vertical Stepper Tree */}
            <div className="relative pl-7 space-y-6">
              {/* Vertical connecting line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-[1.5px] bg-[#292524] pointer-events-none" />

              {/* ---------------- STEP 1: ENTER WEBSITE ---------------- */}
              <div className="relative">
                <div
                  className={`absolute -left-7 top-1 w-5 h-5 rounded-full border flex items-center justify-center text-xs transition-all ${
                    step > 1
                      ? "bg-purple-600 border-purple-400 text-white font-bold"
                      : "bg-[#1c1917] border-white text-white"
                  }`}
                >
                  {step > 1 ? (
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-white">
                    {step > 1 ? (
                      <span className="flex items-center gap-1.5 text-xs text-[#d6d3d1]">
                        <span className="text-[#a8a29e]">Your website</span>
                        <code className="text-purple-300 font-mono">{activeDomain}</code>
                      </span>
                    ) : (
                      "Enter your website"
                    )}
                  </span>
                  {step > 1 && (
                    <button
                      onClick={() => setStep(1)}
                      className="text-[11px] text-[#78716c] hover:text-[#d6d3d1] font-mono cursor-pointer"
                    >
                      Edit
                    </button>
                  )}
                </div>

                {step === 1 && (
                  <form onSubmit={handleStartAnalysis} className="mt-3 space-y-3">
                    <div className="relative">
                      <Globe className="w-4 h-4 text-[#78716c] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={websiteInput}
                        onChange={(e) => setWebsiteInput(e.target.value)}
                        placeholder="example.com"
                        className="w-full rounded-xl bg-[#1c1917] border border-[#2d2926] pl-10 pr-4 py-2.5 text-sm text-white placeholder-[#78716c] focus:outline-none focus:border-purple-500 transition-all font-mono"
                      />
                    </div>

                    {/* Quick sample pills */}
                    <div className="flex items-center gap-1.5 text-[11px] text-[#78716c] flex-wrap">
                      <span>Try:</span>
                      {["prepzue.com", "linear.app", "jasper.ai", "asana.com"].map((sample) => (
                        <button
                          key={sample}
                          type="button"
                          onClick={() => {
                            setWebsiteInput(sample);
                            setActiveDomain(sample);
                          }}
                          className="px-2 py-0.5 rounded bg-[#1c1917] hover:bg-[#262422] border border-[#2d2926] text-[#a8a29e] hover:text-white transition-colors font-mono cursor-pointer"
                        >
                          {sample}
                        </button>
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-purple-900/30"
                    >
                      <span>Analyze My Website</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>

              {/* ---------------- STEP 2: READING YOUR SITE ---------------- */}
              <div className="relative">
                <div
                  className={`absolute -left-7 top-1 w-5 h-5 rounded-full border flex items-center justify-center text-xs transition-all ${
                    step > 2
                      ? "bg-purple-600 border-purple-400 text-white font-bold"
                      : step === 2
                      ? "bg-purple-900/40 border-purple-400 text-white ring-2 ring-purple-500/20"
                      : "bg-[#1c1917] border-[#44403c] text-[#78716c]"
                  }`}
                >
                  {step > 2 ? (
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  ) : step === 2 ? (
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#57534e]" />
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`font-semibold text-sm ${
                      step >= 2 ? "text-white" : "text-[#78716c]"
                    }`}
                  >
                    Reading your site
                  </span>
                  {step > 2 && (
                    <span className="text-[11px] font-mono text-purple-300">
                      Standard read complete
                    </span>
                  )}
                </div>

                {step === 2 && (
                  <div className="mt-3 p-3.5 rounded-xl bg-[#171514] border border-[#2d2926] space-y-3 font-mono text-xs">
                    {/* Sub-item 1: Mapping */}
                    <div className="flex items-center justify-between text-[#d6d3d1]">
                      <span className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Mapping your site</span>
                      </span>
                      <span className="text-[10px] text-[#a8a29e]">Mapped 24 pages &gt;</span>
                    </div>

                    {/* Sub-item 2: Market research live log */}
                    <div className="space-y-1.5 pl-5 border-l border-[#2d2926]">
                      <div className="flex items-center gap-2 text-purple-300 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                        <span>Researching your market</span>
                      </div>

                      {scanStepIndex >= 1 && (
                        <div className="text-[11px] text-[#a8a29e] space-y-1 pt-1">
                          <p className="flex items-center gap-1.5 truncate">
                            <Search className="w-3 h-3 text-[#78716c] shrink-0" />
                            <span>Searching &quot;generative engine optimization tools...&quot;</span>
                          </p>
                          <p className="flex items-center gap-1.5 truncate">
                            <Search className="w-3 h-3 text-[#78716c] shrink-0" />
                            <span>Searching &quot;AI citation tracking {activeDomain}...&quot;</span>
                          </p>
                        </div>
                      )}

                      {scanStepIndex >= 2 && (
                        <div className="text-[11px] text-[#78716c] space-y-0.5 pt-1">
                          <p className="flex items-center gap-1.5">
                            <Globe className="w-3 h-3 text-emerald-500" /> Checking schema.org/SoftwareApplication
                          </p>
                          <p className="flex items-center gap-1.5">
                            <Globe className="w-3 h-3 text-emerald-500" /> Checking robots.txt &amp; llms.txt
                          </p>
                          <p className="flex items-center gap-1.5 text-purple-400">
                            <span>⚖</span> Weighing crawl signals &amp; answerability
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Sub-item 3: Topics */}
                    <div className="flex items-center gap-2 text-[#a8a29e]">
                      {scanStepIndex >= 3 ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <span className="w-3 h-3 rounded-full border border-[#44403c] inline-block" />
                      )}
                      <span>Finding your high-intent topics</span>
                    </div>

                    {/* Sub-item 4: Business reading */}
                    <div className="flex items-center gap-2 text-[#a8a29e]">
                      {scanStepIndex >= 3 ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <span className="w-3 h-3 rounded-full border border-[#44403c] inline-block" />
                      )}
                      <span>Reading your business model</span>
                    </div>
                  </div>
                )}
              </div>

              {/* ---------------- STEP 3: BRAND PROFILE & CRITERIA ---------------- */}
              <div className="relative">
                <div
                  className={`absolute -left-7 top-1 w-5 h-5 rounded-full border flex items-center justify-center text-xs transition-all ${
                    step > 3
                      ? "bg-purple-600 border-purple-400 text-white font-bold"
                      : step === 3
                      ? "bg-purple-900/40 border-purple-400 text-white"
                      : "bg-[#1c1917] border-[#44403c] text-[#78716c]"
                  }`}
                >
                  {step > 3 ? (
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  ) : step === 3 ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#57534e]" />
                  )}
                </div>

                <span
                  className={`font-semibold text-sm ${
                    step >= 3 ? "text-white" : "text-[#78716c]"
                  }`}
                >
                  Your brand profile &amp; matching criteria
                </span>

                {step === 3 && (
                  <div className="mt-3 space-y-3">
                    <p className="text-xs text-[#a8a29e]">
                      Okiza tagged your business positioning to match the criteria used by LLM evaluators:
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {criteriaList.map((crit) => (
                        <span
                          key={crit.id}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-medium border flex items-center gap-1.5 ${crit.color}`}
                        >
                          <span>{crit.label}</span>
                        </span>
                      ))}
                    </div>

                    {/* Competitor Picker Box */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-[#a8a29e] uppercase tracking-wider block mb-2">
                        Select competitors to track
                      </span>
                      <div className="space-y-1.5">
                        {[
                          { id: "comp1", name: "Jira Software (Atlassian)", overlap: "84% overlap" },
                          { id: "comp2", name: "Asana", overlap: "76% overlap" },
                          { id: "comp3", name: "Linear", overlap: "71% overlap" },
                          { id: "comp4", name: "Jasper AI", overlap: "65% overlap" },
                        ].map((c) => (
                          <div
                            key={c.id}
                            onClick={() =>
                              setCompetitors((prev) => ({
                                ...prev,
                                [c.id]: !prev[c.id],
                              }))
                            }
                            className={`flex items-center justify-between p-2 rounded-lg border text-xs cursor-pointer transition-all ${
                              competitors[c.id]
                                ? "bg-[#1c1917] border-[#44403c] text-white"
                                : "bg-[#141211] border-[#262422] text-[#78716c] opacity-60"
                            }`}
                          >
                            <span className="font-medium">{c.name}</span>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[10px] text-purple-400">
                                {c.overlap}
                              </span>
                              <div
                                className={`w-3.5 h-3.5 rounded border flex items-center justify-center text-[9px] ${
                                  competitors[c.id]
                                    ? "bg-purple-600 border-purple-500 text-white"
                                    : "border-[#57534e]"
                                }`}
                              >
                                {competitors[c.id] && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setStep(4)}
                      className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-purple-900/30"
                    >
                      <span>Confirm &amp; Review Everything</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* ---------------- STEP 4: REVIEW & LAUNCH ---------------- */}
              <div className="relative">
                <div
                  className={`absolute -left-7 top-1 w-5 h-5 rounded-full border flex items-center justify-center text-xs transition-all ${
                    step === 4
                      ? "bg-purple-600 border-purple-400 text-white font-bold"
                      : "bg-[#1c1917] border-[#44403c] text-[#78716c]"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                <span
                  className={`font-semibold text-sm ${
                    step === 4 ? "text-white" : "text-[#78716c]"
                  }`}
                >
                  Review &amp; Workspace Launch
                </span>

                {step === 4 && (
                  <div className="mt-3 space-y-4">
                    {/* Brand Profile Summary Box */}
                    <div className="p-3.5 rounded-xl bg-[#1c1917] border border-[#2d2926] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#a8a29e] uppercase tracking-wider">
                          Brand Profile
                        </span>
                        <span className="text-[10px] font-mono text-purple-400">Ready</span>
                      </div>
                      <h4 className="text-sm font-bold text-white capitalize">{activeDomain}</h4>
                      <p className="text-xs text-[#a8a29e] leading-relaxed">
                        Autonomous generative engine optimization platform engineered for multi-model LLM citation tracking, schema validation, and real-time competitor intelligence.
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 pt-2">
                      <button
                        onClick={handleSkip}
                        className="px-4 py-2.5 rounded-xl text-xs text-[#a8a29e] hover:text-white transition-colors cursor-pointer"
                      >
                        Skip
                      </button>
                      <button
                        onClick={handleContinue}
                        className="flex-1 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl shadow-purple-900/40"
                      >
                        <span>Continue to Dashboard</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Running Status Indicator */}
          <div className="mt-8 pt-4 border-t border-[#262422] flex items-center justify-between text-xs text-[#78716c] font-mono">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              {isScanning ? "Researching your market in the background" : "Autonomous agent ready"}
            </span>
            <span>Step {step} of 4</span>
          </div>
        </div>

        {/* ==============================================================
            RIGHT COLUMN: "HERE'S WHAT OKIZA DOES FOR YOU" (~58% WIDTH)
            ATMOSPHERIC GRADIENT WITH 7-SLIDE FEATURE TOUR
            ============================================================== */}
        <div className="w-full lg:w-[58%] bg-gradient-to-br from-[#1c142b] via-[#120f1c] to-[#0c0914] p-6 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto w-full relative z-10 space-y-6">
            {/* Header Titles matching Screenshot 2-7 */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
                {slideIndex <= 3 ? "Here's what Okiza does for you" : "Here's where to start"}
              </h2>
              <p className="text-sm text-[#c4b5fd] mt-2 leading-relaxed">
                {slideIndex <= 3
                  ? "While I work in the background, here's what you can do once you're in."
                  : "Pick up any of these once you're inside your workspace."}
              </p>
            </div>

            {/* Pagination Controls Bar */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider">
                Things to try first
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#c4b5fd]">
                  {slideIndex} of {totalSlides}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrevSlide}
                    className="p-1 rounded-md bg-[#251e33] hover:bg-[#322845] border border-[#3e3256] text-white transition-colors cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="p-1 rounded-md bg-[#251e33] hover:bg-[#322845] border border-[#3e3256] text-white transition-colors cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Slide Switcher Render */}
            <div className="transition-all duration-300">
              {slideIndex === 1 && <SlideSiteAudit />}
              {slideIndex === 2 && <SlideAiVisibility />}
              {slideIndex === 3 && <SlideAiBriefs />}
              {slideIndex === 4 && <SlideSearchConsole />}
              {slideIndex === 5 && <SlideAeoReadiness />}
              {slideIndex === 6 && <SlideCompetitorShare />}
              {slideIndex === 7 && <SlideRoadmap />}
            </div>
          </div>

          {/* Quick Slide Navigation Dots */}
          <div className="mt-8 pt-4 flex items-center justify-center gap-2 relative z-10">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx + 1)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  slideIndex === idx + 1
                    ? "w-6 bg-purple-400"
                    : "w-2 bg-[#3c3452] hover:bg-[#584d78]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
