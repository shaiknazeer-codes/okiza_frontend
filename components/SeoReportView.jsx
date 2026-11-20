"use client";

import { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Activity,
  Globe,
  Sparkles,
  ArrowUpRight,
  Target,
  Zap,
  Layers,
  Search,
  Code2,
  GitPullRequest,
  Check,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Clock,
  Award,
  ListFilter,
  Hash,
  HelpCircle,
  FileText,
  Info,
  Share2,
} from "lucide-react";

/* =========================================================================
   CIRCULAR RING COMPONENT (MATCHING DASHBOARD OVERVIEW)
   ========================================================================= */
function CircularRing({
  value,
  max = 100,
  size = 56,
  stroke = 5,
  color = "#10b981",
  trackColor = "#1f1f23",
  children,
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.max(value, 0), max);
  const strokeDashoffset = circumference - (progress / max) * circumference;

  return (
    <div
      className="relative inline-flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="rotate-[-90deg]"
      >
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
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {children ? (
          children
        ) : (
          <span className="text-[10px] font-semibold text-white font-mono">{value}%</span>
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   OVERVIEW KPI CARD (1:1 VISUAL REPLICA OF DASHBOARD OVERVIEW CARDS)
   ========================================================================= */
function OverviewKpiCard({
  icon: Icon,
  label,
  infoTitle,
  val,
  unit,
  statusText,
  statusColor = "text-emerald-400",
  ringValue,
  ringCenterText,
  ringColor = "#10b981",
  footerText,
  isLight = false,
}) {
  return (
    <div
      className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
        isLight
          ? "border-zinc-200 bg-white hover:border-zinc-300 shadow-sm"
          : "border-[#27272a] bg-[#0c0c0e] hover:border-[#3f3f46]"
      }`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between text-xs text-[#a1a1aa] mb-3">
        <div className="flex items-center gap-1.5 min-w-0">
          {Icon && <Icon className="w-3.5 h-3.5 text-[#71717a] shrink-0" />}
          <span className={`truncate ${isLight ? "text-zinc-700 font-medium" : "text-[#a1a1aa]"}`}>
            {label}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[#71717a] shrink-0">
          <Info
            className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors"
            title={infoTitle || label}
          />
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Middle Value + Ring Dial */}
      <div className="flex items-center justify-between gap-2 my-1">
        <div>
          <div className="flex items-baseline gap-1">
            <span
              className={`text-2xl font-semibold font-mono ${
                isLight ? "text-zinc-950" : "text-white"
              }`}
            >
              {val}
            </span>
            {unit && (
              <span className={`text-xs font-mono ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>
                {unit}
              </span>
            )}
          </div>
          <div className="mt-1">
            <span className={`text-[10px] font-mono ${statusColor}`}>{statusText}</span>
          </div>
        </div>

        <CircularRing
          value={ringValue}
          size={56}
          stroke={5}
          color={ringColor}
          trackColor={isLight ? "#e4e4e7" : "#1f1f23"}
        >
          <span
            className={`text-[10px] font-semibold font-mono ${
              isLight ? "text-zinc-900" : "text-white"
            }`}
          >
            {ringCenterText}
          </span>
        </CircularRing>
      </div>

      {/* Bottom Footer Note */}
      <p
        className={`text-[11px] mt-3 pt-2 border-t ${
          isLight ? "text-zinc-500 border-zinc-100" : "text-[#71717a] border-[#1f1f23]"
        }`}
      >
        {footerText}
      </p>
    </div>
  );
}

export default function SeoReportView({ domain = "yourcompany.com", isLight = false }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const headings = [
    { id: "exec-summary", num: 1, title: "Executive Summary" },
    { id: "score-explanation", num: 2, title: "Overall SEO Health and Score Explanation" },
    { id: "crawl-coverage", num: 3, title: "Crawl Coverage, Business Context and Limitations" },
    { id: "technical-seo", num: 4, title: "Technical SEO" },
    { id: "on-page-seo", num: 5, title: "On-Page SEO" },
    { id: "aeo-readiness", num: 6, title: "AEO Readiness and Signals" },
    { id: "prioritized-recommendations", num: 7, title: "Prioritized Findings and Recommendations" },
    { id: "performance-measurements", num: 8, title: "Performance Measurements" },
    { id: "competitor-comparison", num: 9, title: "Competitor Comparison" },
    { id: "evidence-methodology", num: 10, title: "Evidence and Methodology" },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className={`p-6 rounded-2xl border ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#0c0c0e] border-[#262626]"}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">
                Official Report
              </span>
              <span className={`text-xs font-mono ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>
                Audit Run #SEO-2026-8420
              </span>
            </div>
            <h1 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
              SEO &amp; GEO Deep Audit Report
            </h1>
            <p className={`text-xs mt-1 ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
              Comprehensive technical crawl, on-page diagnostics, and generative retrieval signals for <span className="font-mono font-semibold">{domain}</span>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl border text-right ${isLight ? "bg-white border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className={`text-[10px] font-mono block ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>
                OVERALL HEALTH
              </span>
              <span className="text-2xl font-bold font-mono text-emerald-500">88 / 100</span>
            </div>
          </div>
        </div>

        {/* Quick Jump Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-5 mt-5 border-t border-zinc-800/40 pb-1 scrollbar-none">
          <button
            onClick={() => setActiveFilter("all")}
            className={`text-[11px] font-mono px-3 py-1 rounded-lg border whitespace-nowrap transition-colors cursor-pointer ${
              activeFilter === "all"
                ? isLight ? "bg-black text-white border-black" : "bg-white text-black border-white font-semibold"
                : isLight ? "bg-white text-zinc-600 border-zinc-200 hover:text-black" : "bg-[#141416] text-[#a1a1aa] border-[#27272a] hover:text-white"
            }`}
          >
            All 10 Sections
          </button>
          {headings.map((h) => (
            <button
              key={h.id}
              onClick={() => setActiveFilter(h.id)}
              className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === h.id
                  ? isLight ? "bg-black text-white border-black" : "bg-white text-black border-white font-semibold"
                  : isLight ? "bg-white text-zinc-600 border-zinc-200 hover:text-black" : "bg-[#141416] text-[#a1a1aa] border-[#27272a] hover:text-white"
              }`}
            >
              {h.num}. {h.title}
            </button>
          ))}
        </div>
      </div>

      {/* ================= 1. EXECUTIVE SUMMARY ================= */}
      {(activeFilter === "all" || activeFilter === "exec-summary") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs flex items-center justify-center font-bold">1</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Executive Summary
              </h2>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
              Grade A · Enterprise Ready
            </span>
          </div>

          <p className={`text-xs leading-relaxed ${isLight ? "text-zinc-600" : "text-[#a1a1aa]"}`}>
            {domain} demonstrates strong technical fundamentals with zero indexation blockers, robust Core Web Vitals metrics, and full generative engine accessibility. The domain exhibits a clean HTML5 semantic hierarchy and comprehensive JSON-LD structured data coverage across commercial conversion routes.
          </p>

          {/* Overview-Style Metric Cards - Executive Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3">
            <OverviewKpiCard
              icon={Globe}
              label="Crawl Coverage"
              infoTitle="Total discovered and parsed pages during live engine crawl"
              val="148"
              unit="Pages"
              statusText="100% Parsed"
              statusColor="text-emerald-400"
              ringValue={100}
              ringCenterText="100%"
              ringColor="#10b981"
              footerText="Based on 148 discovered internal URLs."
              isLight={isLight}
            />
            <OverviewKpiCard
              icon={Activity}
              label="Core Web Vitals"
              infoTitle="Real-user field performance and Google Core Web Vitals assessment"
              val="Passed"
              statusText="LCP 1.1s · FID 8ms"
              statusColor="text-emerald-400"
              ringValue={100}
              ringCenterText="Pass"
              ringColor="#10b981"
              footerText="All 3 Core Web Vitals thresholds met."
              isLight={isLight}
            />
            <OverviewKpiCard
              icon={ShieldCheck}
              label="Critical Blockers"
              infoTitle="Crawl loops, 5xx server exceptions, or fatal meta tag anomalies"
              val="0"
              unit="Detected"
              statusText="Zero 5xx/404s"
              statusColor="text-emerald-400"
              ringValue={100}
              ringCenterText="0"
              ringColor="#10b981"
              footerText="Zero crawl or HTTP status anomalies."
              isLight={isLight}
            />
            <OverviewKpiCard
              icon={Sparkles}
              label="Generative Readiness"
              infoTitle="LLM extraction feasibility, answerability, and entity resolution signals"
              val="87"
              unit="/100"
              statusText="AEO Signals Active"
              statusColor="text-emerald-400"
              ringValue={87}
              ringCenterText="87%"
              ringColor="#10b981"
              footerText="Optimized across major LLM engines."
              isLight={isLight}
            />
          </div>
        </section>
      )}

      {/* ================= 2. OVERALL SEO HEALTH AND SCORE EXPLANATION ================= */}
      {(activeFilter === "all" || activeFilter === "score-explanation") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs flex items-center justify-center font-bold">2</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Overall SEO Health and Score Explanation
              </h2>
            </div>
          </div>

          {/* Overview-Style Metric Cards - Health Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            <OverviewKpiCard
              icon={Code2}
              label="Technical Architecture"
              infoTitle="HTTPS security, canonical tag structure, and redirect loop resolution"
              val="96"
              unit="/100"
              statusText="SSL, canonicals, zero loop chains"
              statusColor="text-emerald-400"
              ringValue={96}
              ringCenterText="96%"
              ringColor="#10b981"
              footerText="0 critical canonical or protocol issues."
              isLight={isLight}
            />
            <OverviewKpiCard
              icon={FileText}
              label="On-Page Semantic Quality"
              infoTitle="H1-H6 heading hierarchy, metadata density, and semantic keyword distribution"
              val="91"
              unit="/100"
              statusText="H1/H2 hierarchy, metadata density"
              statusColor="text-emerald-400"
              ringValue={91}
              ringCenterText="91%"
              ringColor="#10b981"
              footerText="Validated title and heading structures."
              isLight={isLight}
            />
            <OverviewKpiCard
              icon={Globe}
              label="Crawl & Indexability"
              infoTitle="Robots.txt crawl permissions, sitemap freshness, and indexing directives"
              val="98"
              unit="/100"
              statusText="Robots.txt, XML sitemap sync"
              statusColor="text-emerald-400"
              ringValue={98}
              ringCenterText="98%"
              ringColor="#10b981"
              footerText="Robots.txt permits GPTBot & Perplexity."
              isLight={isLight}
            />
            <OverviewKpiCard
              icon={Sparkles}
              label="AEO Retrieval Density"
              infoTitle="Structured schema markup, factuality density, and entity link graphs"
              val="87"
              unit="/100"
              statusText="Answer extractability, entity links"
              statusColor="text-emerald-400"
              ringValue={87}
              ringCenterText="87%"
              ringColor="#10b981"
              footerText="Clean JSON-LD SoftwareApp schema."
              isLight={isLight}
            />
          </div>

          <div className={`p-3.5 rounded-xl border text-xs leading-relaxed ${isLight ? "bg-zinc-50 border-zinc-200 text-zinc-600" : "bg-[#111015] border-[#27272a] text-[#a1a1aa]"}`}>
            <span className="font-semibold text-white block mb-1">Score Methodology Formulation:</span>
            The composite health score of 88/100 is computed via an empirical, multi-factor weighting model aligned with Google Search Central Quality Rater Guidelines: 35% Technical Performance &amp; Core Web Vitals, 25% On-Page Semantic Integrity, 20% Crawl Stability &amp; Server Latency, and 20% Generative Engine Extractability.
          </div>
        </section>
      )}

      {/* ================= 3. CRAWL COVERAGE, BUSINESS CONTEXT AND LIMITATIONS ================= */}
      {(activeFilter === "all" || activeFilter === "crawl-coverage") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs flex items-center justify-center font-bold">3</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Crawl Coverage, Business Context and Limitations
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className={`p-4 rounded-xl border space-y-2 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className={`font-mono text-[11px] font-bold uppercase tracking-wider block ${isLight ? "text-zinc-900" : "text-white"}`}>
                Crawl Inventory
              </span>
              <ul className={`space-y-1.5 ${isLight ? "text-zinc-600" : "text-[#a1a1aa]"}`}>
                <li className="flex justify-between"><span>Discovered URLs:</span> <span className="font-mono font-bold text-white">148</span></li>
                <li className="flex justify-between"><span>Indexed Pages:</span> <span className="font-mono text-emerald-400">142</span></li>
                <li className="flex justify-between"><span>Excluded / Noindexed:</span> <span className="font-mono text-zinc-400">6 (Admin/API)</span></li>
                <li className="flex justify-between"><span>Canonical Compliance:</span> <span className="font-mono text-emerald-400">100%</span></li>
              </ul>
            </div>

            <div className={`p-4 rounded-xl border space-y-2 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className={`font-mono text-[11px] font-bold uppercase tracking-wider block ${isLight ? "text-zinc-900" : "text-white"}`}>
                Business Context
              </span>
              <p className={`leading-relaxed ${isLight ? "text-zinc-600" : "text-[#a1a1aa]"}`}>
                Target audience comprises technical B2B founders, CMOs, and growth teams. Content prioritizes commercial comparison queries, developer guides, and high-intent SaaS keywords.
              </p>
            </div>

            <div className={`p-4 rounded-xl border space-y-2 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className={`font-mono text-[11px] font-bold uppercase tracking-wider block ${isLight ? "text-zinc-900" : "text-white"}`}>
                Audit Limitations
              </span>
              <p className={`leading-relaxed ${isLight ? "text-zinc-600" : "text-[#a1a1aa]"}`}>
                Crawl reflects public unauthenticated routes. Dynamically populated user dashboard screens and authenticated customer areas are omitted from public search engine indexes.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ================= 4. TECHNICAL SEO ================= */}
      {(activeFilter === "all" || activeFilter === "technical-seo") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs flex items-center justify-center font-bold">4</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Technical SEO
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold">Passed All Core Checks</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {[
              { check: "HTTPS & TLS 1.3 Encryption", status: "Valid Grade A+", pass: true, detail: "Strict HSTS enabled with zero mixed-content warnings" },
              { check: "Robots.txt Directives", status: "Optimized", pass: true, detail: "GPTBot, ClaudeBot, and Googlebot explicitly permitted" },
              { check: "Canonicalization Graph", status: "100% Valid", pass: true, detail: "Zero duplicate self-referencing canonical discrepancies" },
              { check: "HTTP Response Status", status: "0 Errors", pass: true, detail: "142 pages return 200 OK; zero 5xx or redirect chains" },
              { check: "Mobile-First Responsiveness", status: "Passed", pass: true, detail: "Dynamic viewport meta tag verified on mobile viewports" },
              { check: "XML Sitemap Synchronization", status: "Synced 24h", pass: true, detail: "Clean sitemap.xml with accurate lastmod timestamps" },
            ].map((item, idx) => (
              <div key={idx} className={`p-3.5 rounded-xl border space-y-1 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
                <div className="flex items-center justify-between">
                  <span className={`font-semibold ${isLight ? "text-zinc-950" : "text-white"}`}>{item.check}</span>
                  <span className="font-mono text-emerald-500 font-bold text-[11px]">{item.status}</span>
                </div>
                <p className={`text-[11px] ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= 5. ON-PAGE SEO ================= */}
      {(activeFilter === "all" || activeFilter === "on-page-seo") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs flex items-center justify-center font-bold">5</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                On-Page SEO
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">Semantic DOM Score: 91%</span>
          </div>

          <div className="space-y-2.5 text-xs">
            {[
              { elem: "Title Tags", score: "100% Unique", desc: "Mean length 54 chars; primary keywords front-loaded in title element." },
              { elem: "Meta Descriptions", score: "96% Coverage", desc: "Action-oriented CTAs with target query terms embedded." },
              { elem: "Heading Structure", score: "Single H1 per page", desc: "Sequential H1 -> H2 -> H3 hierarchy with zero skipped levels." },
              { elem: "Image Alt Attributes", score: "94% Descriptive", desc: "Contextual alt tags applied; zero decorative image keyword stuffing." },
              { elem: "Internal Linking Graph", score: "Balanced PageRank", desc: "Key conversion endpoints receive high inlink weight." },
            ].map((op, idx) => (
              <div key={idx} className={`p-3 rounded-xl border flex items-center justify-between gap-4 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
                <div className="min-w-0">
                  <span className={`font-semibold ${isLight ? "text-zinc-950" : "text-white"}`}>{op.elem}</span>
                  <p className={`text-[11px] mt-0.5 ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>{op.desc}</p>
                </div>
                <span className="font-mono font-bold text-emerald-500 text-xs shrink-0">{op.score}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= 6. AEO READINESS AND SIGNALS ================= */}
      {(activeFilter === "all" || activeFilter === "aeo-readiness") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs flex items-center justify-center font-bold">6</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                AEO Readiness and Signals
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold">87 / 100 AEO Density</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className={`p-4 rounded-xl border space-y-1.5 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className={`font-semibold block ${isLight ? "text-zinc-950" : "text-white"}`}>Direct Answer Proximity</span>
              <p className={`text-[11px] leading-relaxed ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                92% of target questions contain a concise 45-word definition paragraph positioned immediately beneath the H2 element.
              </p>
              <span className="text-[10px] font-mono text-emerald-500 block">High Extraction Rate</span>
            </div>

            <div className={`p-4 rounded-xl border space-y-1.5 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className={`font-semibold block ${isLight ? "text-zinc-950" : "text-white"}`}>FAQ JSON-LD Schema</span>
              <p className={`text-[11px] leading-relaxed ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                Validated structured data markup embedded on key product comparison articles for Google AI Overviews and Perplexity.
              </p>
              <span className="text-[10px] font-mono text-emerald-500 block">Schema.org v26 Compliant</span>
            </div>

            <div className={`p-4 rounded-xl border space-y-1.5 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className={`font-semibold block ${isLight ? "text-zinc-950" : "text-white"}`}>Entity Disambiguation</span>
              <p className={`text-[11px] leading-relaxed ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                Brand entity recognized as an &quot;Autonomous Growth Engine&quot; with verified sameAs Wikidata linkages.
              </p>
              <span className="text-[10px] font-mono text-emerald-500 block">Knowledge Graph Active</span>
            </div>
          </div>
        </section>
      )}

      {/* ================= 7. PRIORITIZED FINDINGS AND RECOMMENDATIONS ================= */}
      {(activeFilter === "all" || activeFilter === "prioritized-recommendations") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs flex items-center justify-center font-bold">7</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Prioritized Findings and Recommendations
              </h2>
            </div>
            <span className="text-xs font-mono text-violet-400 font-bold">3 Action Items</span>
          </div>

          <div className="space-y-3">
            {[
              {
                priority: "P1",
                badge: "bg-rose-500/20 text-rose-400 border-rose-500/30",
                title: "Deploy SoftwareApplication & FAQPage JSON-LD on /pricing and /compare routes",
                impact: "+24% AI Citation Probability",
                effort: "Automated PR Ready",
                action: "Deploy PR #54",
              },
              {
                priority: "P2",
                badge: "bg-amber-500/20 text-amber-400 border-amber-500/30",
                title: "Optimize 6 static WebP graphic assets to shave 120ms off Largest Contentful Paint",
                impact: "+14% Mobile Core Web Vitals Score",
                effort: "Low Effort",
                action: "Auto-Optimize",
              },
              {
                priority: "P3",
                badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",
                title: "Insert breadcrumb microdata schema on dynamic /agents/[slug] template",
                impact: "+8% Rich Snippet SERP CTR",
                effort: "Medium Effort",
                action: "Generate Patch",
              },
            ].map((rec, idx) => (
              <div key={idx} className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-bold ${rec.badge}`}>
                      {rec.priority} High Impact
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-medium">{rec.impact}</span>
                  </div>
                  <h3 className={`text-xs font-semibold ${isLight ? "text-zinc-950" : "text-white"}`}>{rec.title}</h3>
                  <span className={`text-[10px] font-mono ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>Effort: {rec.effort}</span>
                </div>

                <button className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold shrink-0 cursor-pointer transition-all shadow-sm ${
                  isLight ? "bg-black text-white hover:bg-zinc-800" : "bg-white text-black hover:bg-zinc-200"
                }`}>
                  {rec.action} →
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= 8. PERFORMANCE MEASUREMENTS ================= */}
      {(activeFilter === "all" || activeFilter === "performance-measurements") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs flex items-center justify-center font-bold">8</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Performance Measurements
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold">Core Web Vitals: 100% Pass</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className={`border-b font-mono uppercase text-[10px] ${isLight ? "border-zinc-200 text-zinc-500" : "border-[#262626] text-[#71717a]"}`}>
                  <th className="py-2.5 px-3">Metric</th>
                  <th className="py-2.5 px-3">Observed Value</th>
                  <th className="py-2.5 px-3">Google Threshold</th>
                  <th className="py-2.5 px-3">Evaluation</th>
                </tr>
              </thead>
              <tbody className={`divide-y font-mono ${isLight ? "divide-zinc-200" : "divide-[#262626]"}`}>
                {[
                  { name: "Largest Contentful Paint (LCP)", val: "1.1s", thresh: "≤ 2.5s", status: "Good (Optimal)" },
                  { name: "Interaction to Next Paint (INP)", val: "42ms", thresh: "≤ 200ms", status: "Good (Fast)" },
                  { name: "Cumulative Layout Shift (CLS)", val: "0.02", thresh: "≤ 0.1", status: "Good (Stable)" },
                  { name: "First Contentful Paint (FCP)", val: "0.8s", thresh: "≤ 1.8s", status: "Good (Optimal)" },
                  { name: "Time to First Byte (TTFB)", val: "110ms", thresh: "≤ 800ms", status: "Good (Fast Edge)" },
                  { name: "Total Blocking Time (TBT)", val: "25ms", thresh: "≤ 200ms", status: "Good (Responsive)" },
                ].map((row, i) => (
                  <tr key={i} className={isLight ? "hover:bg-zinc-50" : "hover:bg-[#141416]"}>
                    <td className={`py-2.5 px-3 font-sans font-medium ${isLight ? "text-zinc-950" : "text-white"}`}>{row.name}</td>
                    <td className="py-2.5 px-3 font-bold text-emerald-500">{row.val}</td>
                    <td className={`py-2.5 px-3 ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>{row.thresh}</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ================= 9. COMPETITOR COMPARISON ================= */}
      {(activeFilter === "all" || activeFilter === "competitor-comparison") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs flex items-center justify-center font-bold">9</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Competitor Comparison
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold">Leading in 4 of 5 Pillars</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className={`border-b font-mono uppercase text-[10px] ${isLight ? "border-zinc-200 text-zinc-500" : "border-[#262626] text-[#71717a]"}`}>
                  <th className="py-2.5 px-3">Platform</th>
                  <th className="py-2.5 px-3">Organic Share</th>
                  <th className="py-2.5 px-3">CWV Pass Rate</th>
                  <th className="py-2.5 px-3">AEO Win Rate</th>
                  <th className="py-2.5 px-3">Schema Quality</th>
                  <th className="py-2.5 px-3">Autonomy Level</th>
                </tr>
              </thead>
              <tbody className={`divide-y font-mono ${isLight ? "divide-zinc-200" : "divide-[#262626]"}`}>
                {[
                  { name: `${domain} (Okiza)`, share: "46.2%", cwv: "100%", aeo: "92.4%", schema: "Valid 100%", auto: "1-Click PRs", highlight: true },
                  { name: "Jira / Atlassian", share: "24.5%", cwv: "78%", aeo: "64.1%", schema: "Partial", auto: "Manual Only", highlight: false },
                  { name: "Asana", share: "16.8%", cwv: "82%", aeo: "58.4%", schema: "Partial", auto: "Manual Only", highlight: false },
                  { name: "Jasper / Copy.ai", share: "12.5%", cwv: "74%", aeo: "49.0%", schema: "Basic", auto: "Copy-paste", highlight: false },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={
                      row.highlight
                        ? isLight ? "bg-emerald-500/10 font-bold text-zinc-950" : "bg-emerald-500/10 font-bold text-white"
                        : isLight ? "hover:bg-zinc-50 text-zinc-600" : "hover:bg-[#141416] text-[#a1a1aa]"
                    }
                  >
                    <td className="py-2.5 px-3 font-sans font-semibold">{row.name}</td>
                    <td className="py-2.5 px-3">{row.share}</td>
                    <td className="py-2.5 px-3">{row.cwv}</td>
                    <td className="py-2.5 px-3">{row.aeo}</td>
                    <td className="py-2.5 px-3">{row.schema}</td>
                    <td className="py-2.5 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        row.highlight ? "bg-emerald-500 text-black" : "bg-zinc-800 text-zinc-400"
                      }`}>
                        {row.auto}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ================= 10. EVIDENCE AND METHODOLOGY ================= */}
      {(activeFilter === "all" || activeFilter === "evidence-methodology") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs flex items-center justify-center font-bold">10</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Evidence and Methodology
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">Audit Protocol v4.2</span>
          </div>

          <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-2 ${isLight ? "bg-zinc-50 border-zinc-200 text-zinc-600" : "bg-[#141416] border-[#27272a] text-[#a1a1aa]"}`}>
            <p>
              <strong className={isLight ? "text-zinc-950" : "text-white"}>Crawler Specs:</strong> Headless Chromium v130 instance configured with dynamic DOM hydration, JavaScript execution timeout of 10,000ms, and viewport resolution of 1440x900.
            </p>
            <p>
              <strong className={isLight ? "text-zinc-950" : "text-white"}>Validation Engine:</strong> Structured markup verified against Schema.org v26.0 specification and Google Search Central Rich Results Test API.
            </p>
            <div className="pt-2 border-t border-zinc-800/40 flex items-center justify-between font-mono text-[10px] text-zinc-500">
              <span>Cryptographic Signature: 0x9f4a...83c1</span>
              <span>Audit Run Timestamp: {new Date().toISOString()}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
