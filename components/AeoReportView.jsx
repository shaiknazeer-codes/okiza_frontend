"use client";

import { useState } from "react";
import {
  Sparkles,
  Bot,
  CheckCircle2,
  AlertCircle,
  Activity,
  Globe,
  Check,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  Clock,
  Layers,
  Zap,
  Target,
  FileText,
  Search,
  Code2,
  GitPullRequest,
  SlidersHorizontal,
  Bookmark,
  Award,
  Hash,
  HelpCircle,
  Cpu,
} from "lucide-react";

export default function AeoReportView({ domain = "yourcompany.com", isLight = false }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const aeoHeadings = [
    { id: "metadata", num: 1, title: "Report Metadata" },
    { id: "readiness-score", num: 2, title: "Overall AEO Readiness Score and Coverage" },
    { id: "answerability", num: 3, title: "Answerability" },
    { id: "structure", num: 4, title: "Structure and Extractability" },
    { id: "entity-clarity", num: 5, title: "Entity Clarity" },
    { id: "trust-factual", num: 6, title: "Trust and Factual Support" },
    { id: "structured-data", num: 7, title: "Structured Data" },
    { id: "prioritized-recs", num: 8, title: "Prioritized Recommendations" },
    { id: "findings", num: 9, title: "Findings" },
    { id: "detailed-checks", num: 10, title: "Detailed Checks" },
    { id: "evidence-index", num: 11, title: "Evidence Index" },
    { id: "scoring-methodology", num: 12, title: "Scoring Methodology and Source Provenance" },
    { id: "limitations", num: 13, title: "Limitations" },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className={`p-6 rounded-2xl border ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#0c0c0e] border-[#262626]"}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-400 font-bold border border-violet-500/20">
                Frontier AEO Engine
              </span>
              <span className={`text-xs font-mono ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>
                Answer Engine Optimization Audit
              </span>
            </div>
            <h1 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
              AEO (Answer Engine Optimization) Report
            </h1>
            <p className={`text-xs mt-1 ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
              LLM retrieval readiness, citation extraction probability, and entity disambiguation for <span className="font-mono font-semibold">{domain}</span> across Perplexity, ChatGPT, Claude, and Gemini.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl border text-right ${isLight ? "bg-white border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className={`text-[10px] font-mono block ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>
                AEO READINESS
              </span>
              <span className="text-2xl font-bold font-mono text-violet-400">91.8 / 100</span>
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
            All 13 Sections
          </button>
          {aeoHeadings.map((h) => (
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

      {/* ================= 1. REPORT METADATA ================= */}
      {(activeFilter === "all" || activeFilter === "metadata") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">1</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Report Metadata
              </h2>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
              Autonomous Verification
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className={`p-3 rounded-xl border ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className={`text-[10px] font-mono block ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>TARGET DOMAIN</span>
              <span className="font-mono font-bold mt-1 block truncate text-white">{domain}</span>
            </div>
            <div className={`p-3 rounded-xl border ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className={`text-[10px] font-mono block ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>AUDIT ID</span>
              <span className="font-mono font-bold mt-1 block text-violet-400">AEO-2026-9842</span>
            </div>
            <div className={`p-3 rounded-xl border ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className={`text-[10px] font-mono block ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>EVAL ENGINES</span>
              <span className="font-mono font-semibold mt-1 block truncate text-emerald-400">5 Frontier Models</span>
            </div>
            <div className={`p-3 rounded-xl border ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className={`text-[10px] font-mono block ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>AGENT RUNNER</span>
              <span className="font-mono font-semibold mt-1 block text-white">Okiza AEO v4.2</span>
            </div>
          </div>
        </section>
      )}

      {/* ================= 2. OVERALL AEO READINESS SCORE AND COVERAGE ================= */}
      {(activeFilter === "all" || activeFilter === "readiness-score") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">2</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Overall AEO Readiness Score and Coverage
              </h2>
            </div>
            <span className="text-xs font-mono text-violet-400 font-bold">Tier 1 Elite Placement</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Evaluated Buyer Queries", val: "240 Prompts", sub: "Commercial intent clusters" },
              { label: "Model Recommendation Rate", val: "88.4%", sub: "Named #1 or #2 choice" },
              { label: "Direct Source Citation Rate", val: "92.1%", sub: "Perplexity & ChatGPT cited" },
              { label: "Zero Hallucination Score", val: "99.4%", sub: "Accurate price & specs" },
            ].map((item, idx) => (
              <div key={idx} className={`p-4 rounded-xl border ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
                <span className={`text-[10px] font-mono block ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>{item.label}</span>
                <span className="text-xl font-bold font-mono text-violet-400 mt-1 block">{item.val}</span>
                <span className={`text-[10px] block mt-1 ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>{item.sub}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= 3. ANSWERABILITY ================= */}
      {(activeFilter === "all" || activeFilter === "answerability") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">3</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Answerability
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold">94% Extractability</span>
          </div>

          <p className={`text-xs leading-relaxed ${isLight ? "text-zinc-600" : "text-[#a1a1aa]"}`}>
            Answerability measures how effectively generative models can lift direct, unambiguous answers from your pages without losing contextual nuance or misrepresenting technical capabilities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className={`p-3.5 rounded-xl border ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className="font-semibold text-white block">Concise Answer Blocks</span>
              <span className="text-lg font-bold font-mono text-emerald-400 mt-1 block">94%</span>
              <p className={`text-[11px] mt-1 ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>Key definitions positioned within first 50 tokens of headings.</p>
            </div>
            <div className={`p-3.5 rounded-xl border ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className="font-semibold text-white block">Table Synthesizability</span>
              <span className="text-lg font-bold font-mono text-emerald-400 mt-1 block">96%</span>
              <p className={`text-[11px] mt-1 ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>Clean comparative tabular markup easily parsed by Perplexity.</p>
            </div>
            <div className={`p-3.5 rounded-xl border ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className="font-semibold text-white block">Intent Alignment</span>
              <span className="text-lg font-bold font-mono text-emerald-400 mt-1 block">91%</span>
              <p className={`text-[11px] mt-1 ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>High fidelity answering across multi-turn evaluation prompts.</p>
            </div>
          </div>
        </section>
      )}

      {/* ================= 4. STRUCTURE AND EXTRACTABILITY ================= */}
      {(activeFilter === "all" || activeFilter === "structure") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">4</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Structure and Extractability
              </h2>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            {[
              { label: "Semantic HTML5 Density", val: "32% Content-to-Code Ratio", desc: "Minimal nested div wrapper overhead; clean article and section primitives." },
              { label: "Token Context Window Placement", val: "< 300 Tokens to Answer", desc: "Core product specifications placed above the fold within the primary token window." },
              { label: "Unordered List Cleanliness", val: "100% Extractable", desc: "Bullet points structured with parallel grammatical voice for frictionless LLM quoting." },
            ].map((row, idx) => (
              <div key={idx} className={`p-3 rounded-xl border flex items-center justify-between gap-4 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
                <div>
                  <span className={`font-semibold ${isLight ? "text-zinc-950" : "text-white"}`}>{row.label}</span>
                  <p className={`text-[11px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>{row.desc}</p>
                </div>
                <span className="font-mono font-bold text-violet-400 shrink-0 text-xs">{row.val}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= 5. ENTITY CLARITY ================= */}
      {(activeFilter === "all" || activeFilter === "entity-clarity") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">5</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Entity Clarity
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold">94.6% Confidence</span>
          </div>

          <div className={`p-4 rounded-xl border text-xs space-y-2 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
            <div className="flex justify-between border-b border-zinc-800/40 pb-2">
              <span className="text-zinc-400">Recognized Entity:</span>
              <span className="font-mono font-bold text-white">Okiza Autonomous Growth Engine</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/40 pb-2">
              <span className="text-zinc-400">Primary Industry Classification:</span>
              <span className="font-mono text-emerald-400">Artificial Intelligence CMO &amp; GEO Software</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/40 pb-2">
              <span className="text-zinc-400">Knowledge Graph Disambiguation:</span>
              <span className="font-mono text-zinc-300">Distinct entity separated from legacy agency concepts</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Associated sameAs References:</span>
              <span className="font-mono text-violet-400">Wikidata, Crunchbase, GitHub, LinkedIn</span>
            </div>
          </div>
        </section>
      )}

      {/* ================= 6. TRUST AND FACTUAL SUPPORT ================= */}
      {(activeFilter === "all" || activeFilter === "trust-factual") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">6</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Trust and Factual Support
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold">E-E-A-T Verified</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className={`p-4 rounded-xl border space-y-1 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className="font-semibold text-white block">Verified Benchmark Proof</span>
              <p className={`text-[11px] ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>Telemetry backed with live 90-day case study graphs and real customer metrics.</p>
              <span className="text-[10px] font-mono text-emerald-500">100% Documented</span>
            </div>
            <div className={`p-4 rounded-xl border space-y-1 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className="font-semibold text-white block">Author &amp; Founder Bylines</span>
              <p className={`text-[11px] ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>Clear author credentials with cryptographically logged governance approvals.</p>
              <span className="text-[10px] font-mono text-emerald-500">Cryptographically Signed</span>
            </div>
            <div className={`p-4 rounded-xl border space-y-1 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className="font-semibold text-white block">Zero Unsubstantiated Claims</span>
              <p className={`text-[11px] ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>Rigorous fact-checking removes vague marketing hyperbole, boosting citation safety.</p>
              <span className="text-[10px] font-mono text-emerald-500">Passed Model Safety</span>
            </div>
          </div>
        </section>
      )}

      {/* ================= 7. STRUCTURED DATA ================= */}
      {(activeFilter === "all" || activeFilter === "structured-data") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">7</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Structured Data
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold">100% Schema Validation</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {[
              { type: "SoftwareApplication", status: "100% Valid", desc: "Pricing, features & rating" },
              { type: "FAQPage", status: "100% Valid", desc: "Q&A direct extraction" },
              { type: "Organization", status: "100% Valid", desc: "Logo & sameAs links" },
              { type: "BreadcrumbList", status: "100% Valid", desc: "Hierarchical path indexing" },
            ].map((sch, idx) => (
              <div key={idx} className={`p-3 rounded-xl border ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
                <span className={`font-mono text-xs font-bold block ${isLight ? "text-zinc-900" : "text-white"}`}>{sch.type}</span>
                <span className="text-[10px] font-mono text-emerald-500 font-bold mt-1 block">{sch.status}</span>
                <span className={`text-[10px] mt-0.5 block ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>{sch.desc}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= 8. PRIORITIZED RECOMMENDATIONS ================= */}
      {(activeFilter === "all" || activeFilter === "prioritized-recs") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">8</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Prioritized Recommendations
              </h2>
            </div>
            <span className="text-xs font-mono text-violet-400 font-bold">Immediate Lift</span>
          </div>

          <div className="space-y-3">
            {[
              {
                rec: "Embed SpeakableSpecification JSON-LD for generative voice and voice-search answers",
                impact: "+18% Voice Retrieval",
                effort: "1-Click Schema Patch",
              },
              {
                rec: "Add dedicated definition cards for 3 emerging competitor query comparison topics",
                impact: "+14% Citation Win Rate",
                effort: "Writer Agent Task",
              },
              {
                rec: "Include structured comparison tables with explicit feature checkmarks across all landing pages",
                impact: "+22% Perplexity Recommendation",
                effort: "Auto-Deploy",
              },
            ].map((item, idx) => (
              <div key={idx} className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
                <div className="space-y-0.5">
                  <span className="text-xs font-semibold text-white">{item.rec}</span>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-400">
                    <span className="text-emerald-400">{item.impact}</span>
                    <span>•</span>
                    <span>{item.effort}</span>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shrink-0">
                  Execute →
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= 9. FINDINGS ================= */}
      {(activeFilter === "all" || activeFilter === "findings") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">9</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Findings
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className={`p-4 rounded-xl border space-y-1.5 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className="font-semibold text-white block">Perplexity Pro Search</span>
              <p className={`text-[11px] leading-relaxed ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                Strongest affinity for pricing and comparison tables. Cites {domain} directly in 92% of evaluated queries.
              </p>
            </div>
            <div className={`p-4 rounded-xl border space-y-1.5 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className="font-semibold text-white block">ChatGPT Search (GPT-4o)</span>
              <p className={`text-[11px] leading-relaxed ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                Extracts concise answers from the top 300 tokens. Prefers FAQ schema markup for definitive feature explanations.
              </p>
            </div>
            <div className={`p-4 rounded-xl border space-y-1.5 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
              <span className="font-semibold text-white block">Claude 3.5 Sonnet</span>
              <p className={`text-[11px] leading-relaxed ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                Rewards technical depth and architectural clarity. Names Okiza as the primary autonomous solution in multi-turn dialogues.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ================= 10. DETAILED CHECKS ================= */}
      {(activeFilter === "all" || activeFilter === "detailed-checks") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">10</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Detailed Checks
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold">7 of 7 Passed</span>
          </div>

          <div className="space-y-2 text-xs">
            {[
              { title: "Direct Prompt-to-Answer Proximity (< 50 tokens)", status: "PASS", detail: "Answers appear immediately under section questions" },
              { title: "Clean Semantic HTML5 Layout Primitives", status: "PASS", detail: "Zero excessive nested div wrappers" },
              { title: "Explicit Unrestricted AI Crawler Access", status: "PASS", detail: "GPTBot, ClaudeBot, PerplexityBot explicitly permitted in robots.txt" },
              { title: "Structured FAQ JSON-LD Schema", status: "PASS", detail: "Schema.org compliant with valid questions and acceptedAnswers" },
              { title: "Clear Entity sameAs Knowledge Links", status: "PASS", detail: "Disambiguated to official corporate profiles" },
              { title: "Verifiable Benchmark Evidence Density", status: "PASS", detail: "Backed with telemetry metrics and audit data" },
              { title: "Author Credentials & E-E-A-T Signals", status: "PASS", detail: "Verified author bios and cryptographic publish trail" },
            ].map((check, idx) => (
              <div key={idx} className={`p-3 rounded-xl border flex items-center justify-between gap-4 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">{check.title}</span>
                    <p className={`text-[11px] ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>{check.detail}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  {check.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= 11. EVIDENCE INDEX ================= */}
      {(activeFilter === "all" || activeFilter === "evidence-index") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">11</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Evidence Index
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">Verbatim Citation Logs</span>
          </div>

          <div className="space-y-2.5 text-xs">
            {[
              { query: "What is the best AI tool for autonomous growth in 2026?", engine: "Perplexity Pro", cited: "okiza.ai/autonomous-growth-engine", rank: "Rank #1 Cited" },
              { query: "Compare Okiza vs Jasper vs HubSpot for technical B2B SaaS", engine: "ChatGPT (GPT-4o)", cited: "okiza.ai/compare/hubspot-jasper", rank: "Rank #1 Recommended" },
              { query: "How to automate technical SEO and schema to GitHub production", engine: "Claude 3.5 Sonnet", cited: "okiza.ai/blog/answer-engine-optimization-2026", rank: "Rank #1 Cited" },
            ].map((ev, idx) => (
              <div key={idx} className={`p-3.5 rounded-xl border space-y-1.5 ${isLight ? "bg-zinc-50 border-zinc-200" : "bg-[#141416] border-[#27272a]"}`}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">&ldquo;{ev.query}&rdquo;</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">{ev.rank}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-mono">
                  <span>Engine: {ev.engine}</span>
                  <span>•</span>
                  <span>Citation Source: <code className="text-violet-300">{ev.cited}</code></span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= 12. SCORING METHODOLOGY AND SOURCE PROVENANCE ================= */}
      {(activeFilter === "all" || activeFilter === "scoring-methodology") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">12</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Scoring Methodology and Source Provenance
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">Algorithmic Formulation</span>
          </div>

          <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-2.5 ${isLight ? "bg-zinc-50 border-zinc-200 text-zinc-600" : "bg-[#141416] border-[#27272a] text-[#a1a1aa]"}`}>
            <p>
              The Okiza Answer Engine Optimization (AEO) Readiness Index evaluates pages using a weighted vector model:
            </p>
            <ul className="list-disc pl-5 space-y-1 font-mono text-[11px] text-zinc-300">
              <li><strong>35% Retrieval Frequency:</strong> Rate at which the brand appears in generated top answers across top 4 frontier models.</li>
              <li><strong>25% Factual Citation &amp; Placement:</strong> Verification of live link anchor attribution and source citation order.</li>
              <li><strong>20% Entity Clarity:</strong> Disambiguation confidence score across Wikipedia/Wikidata entity graphs.</li>
              <li><strong>20% Semantic Structure:</strong> Proximity of question headings to direct 40-word extractive answer blocks.</li>
            </ul>
          </div>
        </section>
      )}

      {/* ================= 13. LIMITATIONS ================= */}
      {(activeFilter === "all" || activeFilter === "limitations") && (
        <section className={`p-6 rounded-2xl border space-y-4 ${isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-[#0c0c0e] border-[#262626]"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 font-mono text-xs flex items-center justify-center font-bold">13</span>
              <h2 className={`text-base font-bold tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                Limitations
              </h2>
            </div>
            <span className="text-xs font-mono text-amber-400">Model Scope Notice</span>
          </div>

          <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-2 ${isLight ? "bg-zinc-50 border-zinc-200 text-zinc-600" : "bg-[#141416] border-[#27272a] text-[#a1a1aa]"}`}>
            <p>
              <strong className={isLight ? "text-zinc-950" : "text-white"}>Stochastic Model Variance:</strong> Generative models utilize non-deterministic sampling temperatures. Evaluated responses represent controlled runs executed at temperature=0.2 across high-frequency buyer prompt clusters.
            </p>
            <p>
              <strong className={isLight ? "text-zinc-950" : "text-white"}>Geographic IP Routing:</strong> Citation orders may vary slightly across international search endpoints due to localized index partitioning in regional clusters.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
