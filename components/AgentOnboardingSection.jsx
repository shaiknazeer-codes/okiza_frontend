"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Layers,
  Code2,
  TrendingUp,
  ShieldCheck,
  Search,
  ExternalLink,
  ChevronRight,
  RefreshCw,
  Sliders,
  Check,
} from "lucide-react";

export default function AgentOnboardingSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [website, setWebsite] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [selectedCompetitors, setSelectedCompetitors] = useState({
    comp1: true,
    comp2: true,
    comp3: true,
    comp4: true,
  });

  const domain = website.trim()
    ? website.replace(/^https?:\/\//, "").replace(/\/.*$/, "").toLowerCase()
    : "acme.ai";

  const handleStartAnalysis = (e) => {
    if (e) e.preventDefault();
    if (!website.trim()) {
      setWebsite("acme.ai");
    }
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setCurrentStep(2);
    }, 900);
  };

  const competitorsData = [
    {
      id: "comp1",
      name: "Jira Software",
      domain: "atlassian.com/jira",
      tag: "Legacy Incumbent",
      overlap: "84% Search Overlap",
      desc: "Dominates enterprise keywords, but vulnerable to fast modern workflows.",
    },
    {
      id: "comp2",
      name: "Asana",
      domain: "asana.com",
      tag: "Direct Competitor",
      overlap: "76% Search Overlap",
      desc: "Capturing high-intent comparison queries across Google and ChatGPT.",
    },
    {
      id: "comp3",
      name: "Linear",
      domain: "linear.app",
      tag: "Product Challenger",
      overlap: "71% Search Overlap",
      desc: "High brand loyalty among engineering leaders with fast dev tooling.",
    },
    {
      id: "comp4",
      name: "Monday.com",
      domain: "monday.com",
      tag: "Broad Workflow",
      overlap: "62% Search Overlap",
      desc: "Aggressive paid search campaigns on generic productivity queries.",
    },
  ];

  const toggleCompetitor = (id) => {
    setSelectedCompetitors((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-[#121110] text-[#ededed] font-sans border-b border-[#262626]">
      <div className="max-w-3xl mx-auto">
        {/* Top Header Row with Mascot Avatar */}
        <div className="flex items-start gap-4 mb-10">
          {/* Mascot Icon matching reference */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#292524] to-[#1c1917] border-2 border-[#57534e] flex items-center justify-center shrink-0 shadow-lg relative overflow-hidden">
            {/* Cute robot / agent face with round glasses and eyes */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-8 h-8">
                {/* Round silvery face */}
                <circle cx="18" cy="18" r="16" fill="#d6d3d1" />
                {/* Red glasses frame */}
                <circle cx="12" cy="17" r="6" fill="#1c1917" stroke="#ef4444" strokeWidth="2.5" />
                <circle cx="24" cy="17" r="6" fill="#1c1917" stroke="#ef4444" strokeWidth="2.5" />
                <path d="M17 17 L19 17" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                {/* Friendly expressive green/white eyes inside glasses */}
                <circle cx="13" cy="16" r="2.5" fill="#22c55e" />
                <circle cx="25" cy="16" r="2.5" fill="#22c55e" />
                <circle cx="14" cy="15" r="1" fill="#ffffff" />
                <circle cx="26" cy="15" r="1" fill="#ffffff" />
                {/* Cute smile */}
                <path d="M14 26 Q18 30 22 26" stroke="#44403c" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
              Hi, I&apos;m your Okiza agent
            </h2>
            <p className="text-sm text-[#a8a29e] mt-1.5 leading-relaxed">
              Give me{" "}
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border border-dashed border-[#78716c] bg-[#1c1917] text-white text-xs font-mono font-medium align-middle">
                <Globe className="w-3.5 h-3.5 text-[#38bdf8]" />
                your website
              </span>{" "}
              and I&apos;ll learn your business, so your workspace opens already knowing your brand and who you compete with.
            </p>
          </div>
        </div>

        {/* Stepper Tree with Vertical Connecting Line */}
        <div className="relative pl-6 sm:pl-8 space-y-8">
          {/* Vertical continuous line */}
          <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-[1.5px] bg-[#292524] pointer-events-none" />

          {/* ================= STEP 1 ================= */}
          <div className="relative">
            {/* Step indicator circle */}
            <div
              className={`absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full border flex items-center justify-center text-xs transition-all ${
                currentStep > 1
                  ? "bg-emerald-500 border-emerald-400 text-black font-bold"
                  : currentStep === 1
                  ? "bg-[#1c1917] border-white text-white"
                  : "bg-[#1c1917] border-[#44403c] text-[#78716c]"
              }`}
            >
              {currentStep > 1 ? (
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>

            {/* Step Header */}
            <button
              onClick={() => setCurrentStep(1)}
              className="text-left font-semibold text-sm md:text-base text-white tracking-tight hover:text-white flex items-center gap-2 cursor-pointer"
            >
              <span>Enter your website</span>
              {currentStep > 1 && (
                <span className="text-xs text-[#a8a29e] font-mono">
                  ({domain})
                </span>
              )}
            </button>

            {/* Step 1 Content Box */}
            {currentStep === 1 && (
              <div className="mt-4 pl-4 border-l-2 border-[#383332] space-y-3">
                <form onSubmit={handleStartAnalysis} className="space-y-3">
                  <div className="relative max-w-md">
                    <Globe className="w-4 h-4 text-[#78716c] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="example.com"
                      className="w-full rounded-xl bg-[#1c1917] border border-[#292524] pl-10 pr-4 py-3 text-sm text-white placeholder-[#78716c] focus:outline-none focus:border-[#78716c] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={analyzing}
                    className="px-5 py-2.5 rounded-xl bg-[#292524] hover:bg-[#383332] border border-[#44403c] text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {analyzing ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
                        <span>Analyzing Your Site...</span>
                      </>
                    ) : (
                      <>
                        <span>Analyze My Website</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* ================= STEP 2 ================= */}
          <div className="relative">
            <div
              className={`absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full border flex items-center justify-center text-xs transition-all ${
                currentStep > 2
                  ? "bg-emerald-500 border-emerald-400 text-black font-bold"
                  : currentStep === 2
                  ? "bg-[#1c1917] border-white text-white"
                  : "bg-[#1c1917] border-[#44403c] text-[#78716c]"
              }`}
            >
              {currentStep > 2 ? (
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              ) : currentStep === 2 ? (
                <span className="w-2 h-2 rounded-full bg-white" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-[#57534e]" />
              )}
            </div>

            <button
              onClick={() => currentStep >= 2 && setCurrentStep(2)}
              className={`text-left font-semibold text-sm md:text-base tracking-tight transition-colors flex items-center gap-2 ${
                currentStep >= 2
                  ? "text-white cursor-pointer hover:text-white"
                  : "text-[#78716c] cursor-not-allowed"
              }`}
            >
              <span>Showing competitors</span>
              {currentStep > 2 && (
                <span className="text-xs text-[#a8a29e] font-mono">
                  (4 matched)
                </span>
              )}
            </button>

            {/* Step 2 Content Box */}
            {currentStep === 2 && (
              <div className="mt-4 pl-4 border-l-2 border-[#383332] space-y-4">
                <p className="text-xs text-[#a8a29e]">
                  Okiza scanned your domain niche and identified 4 key rivals competing for your organic and AI search queries. Select the ones you want to track:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                  {competitorsData.map((comp) => {
                    const isSelected = !!selectedCompetitors[comp.id];
                    return (
                      <div
                        key={comp.id}
                        onClick={() => toggleCompetitor(comp.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#1c1917] border-[#57534e] text-white"
                            : "bg-[#141211] border-[#292524] text-[#78716c] opacity-60"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-white">
                            {comp.name}
                          </span>
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                              isSelected
                                ? "bg-white text-black border-white"
                                : "border-[#57534e]"
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-[#38bdf8] block mb-1">
                          {comp.overlap}
                        </span>
                        <p className="text-[11px] text-[#a8a29e] leading-snug">
                          {comp.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-5 py-2.5 rounded-xl bg-white text-black text-xs font-semibold flex items-center gap-2 hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-sm"
                >
                  <span>Confirm & Inspect Website</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* ================= STEP 3 ================= */}
          <div className="relative">
            <div
              className={`absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full border flex items-center justify-center text-xs transition-all ${
                currentStep > 3
                  ? "bg-emerald-500 border-emerald-400 text-black font-bold"
                  : currentStep === 3
                  ? "bg-[#1c1917] border-white text-white"
                  : "bg-[#1c1917] border-[#44403c] text-[#78716c]"
              }`}
            >
              {currentStep > 3 ? (
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              ) : currentStep === 3 ? (
                <span className="w-2 h-2 rounded-full bg-white" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-[#57534e]" />
              )}
            </div>

            <button
              onClick={() => currentStep >= 3 && setCurrentStep(3)}
              className={`text-left font-semibold text-sm md:text-base tracking-tight transition-colors flex items-center gap-2 ${
                currentStep >= 3
                  ? "text-white cursor-pointer hover:text-white"
                  : "text-[#78716c] cursor-not-allowed"
              }`}
            >
              <span>Reading your site & live inspection</span>
              {currentStep > 3 && (
                <span className="text-xs text-[#a8a29e] font-mono">
                  (200 OK • 24 pages)
                </span>
              )}
            </button>

            {/* Step 3 Content Box (Mockup Browser & Site View) */}
            {currentStep === 3 && (
              <div className="mt-4 pl-4 border-l-2 border-[#383332] space-y-4">
                <p className="text-xs text-[#a8a29e]">
                  Visual snapshot and technical telemetry captured from{" "}
                  <code className="text-white font-mono bg-[#1c1917] px-1.5 py-0.5 rounded">
                    https://{domain}
                  </code>
                  :
                </p>

                {/* Simulated Browser Frame */}
                <div className="rounded-2xl border border-[#292524] bg-[#0c0a09] overflow-hidden max-w-xl shadow-2xl">
                  {/* Browser Chrome Header */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-[#292524] bg-[#171413]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/80"></span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0c0a09] text-[11px] font-mono text-[#a8a29e] border border-[#292524]">
                      <span>🔒</span>
                      <span>https://{domain}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-[10px] font-mono text-green-400">200 OK</span>
                    </div>
                  </div>

                  {/* Browser Content Canvas */}
                  <div className="p-5 space-y-3 bg-gradient-to-b from-[#141211] to-[#0c0a09]">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716c]">
                        DOM Title & Head Meta
                      </span>
                      <span className="text-[10px] font-mono text-[#a8a29e]">
                        Loaded in 340ms
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#1c1917] border border-[#292524]">
                      <h4 className="text-sm font-bold text-white mb-1">
                        {domain.toUpperCase()} • Modern Software & High-Speed Solutions
                      </h4>
                      <p className="text-xs text-[#a8a29e] line-clamp-2 leading-relaxed">
                        The ultimate modern platform built for high-performance teams. Automated workflows, seamless integrations, and real-time collaboration.
                      </p>
                    </div>

                    {/* Detected Tech Stack Tags */}
                    <div>
                      <span className="text-[10px] text-[#78716c] font-mono uppercase block mb-1.5">
                        Detected Technologies & Frameworks
                      </span>
                      <div className="flex items-center flex-wrap gap-1.5">
                        {["Next.js", "React 19", "Tailwind CSS", "Vercel", "Google Analytics 4"].map(
                          (tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#292524] text-[#d6d3d1] border border-[#44403c]"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-5 py-2.5 rounded-xl bg-white text-black text-xs font-semibold flex items-center gap-2 hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-sm"
                >
                  <span>Continue to Product Offering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* ================= STEP 4 ================= */}
          <div className="relative">
            <div
              className={`absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full border flex items-center justify-center text-xs transition-all ${
                currentStep > 4
                  ? "bg-emerald-500 border-emerald-400 text-black font-bold"
                  : currentStep === 4
                  ? "bg-[#1c1917] border-white text-white"
                  : "bg-[#1c1917] border-[#44403c] text-[#78716c]"
              }`}
            >
              {currentStep > 4 ? (
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              ) : currentStep === 4 ? (
                <span className="w-2 h-2 rounded-full bg-white" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-[#57534e]" />
              )}
            </div>

            <button
              onClick={() => currentStep >= 4 && setCurrentStep(4)}
              className={`text-left font-semibold text-sm md:text-base tracking-tight transition-colors flex items-center gap-2 ${
                currentStep >= 4
                  ? "text-white cursor-pointer hover:text-white"
                  : "text-[#78716c] cursor-not-allowed"
              }`}
            >
              <span>What is your product & brand profile</span>
              {currentStep > 4 && (
                <span className="text-xs text-[#a8a29e] font-mono">
                  (Positioning synthesized)
                </span>
              )}
            </button>

            {/* Step 4 Content Box */}
            {currentStep === 4 && (
              <div className="mt-4 pl-4 border-l-2 border-[#383332] space-y-4">
                <p className="text-xs text-[#a8a29e]">
                  Okiza extracted your core brand identity and value proposition. Review or customize below:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                  <div className="p-3.5 rounded-xl bg-[#1c1917] border border-[#292524]">
                    <span className="text-[10px] font-mono text-[#78716c] uppercase block mb-1">
                      Core Product Category
                    </span>
                    <p className="text-xs font-semibold text-white">
                      B2B SaaS • Workflow Automation & Growth
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1c1917] border border-[#292524]">
                    <span className="text-[10px] font-mono text-[#78716c] uppercase block mb-1">
                      Target Audience / ICP
                    </span>
                    <p className="text-xs font-semibold text-white">
                      Founders, Engineering & Growth Teams
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1c1917] border border-[#292524] sm:col-span-2">
                    <span className="text-[10px] font-mono text-[#78716c] uppercase block mb-1">
                      Primary Value Proposition
                    </span>
                    <p className="text-xs font-semibold text-white leading-relaxed">
                      Replaces manual marketing chores with autonomous agents that deliver 2 ready-to-ship fixes daily directly into your codebase and CMS.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(5)}
                  className="px-5 py-2.5 rounded-xl bg-white text-black text-xs font-semibold flex items-center gap-2 hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-sm"
                >
                  <span>Generate Growth & AI Score</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* ================= STEP 5 ================= */}
          <div className="relative">
            <div
              className={`absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full border flex items-center justify-center text-xs transition-all ${
                currentStep === 5
                  ? "bg-white border-white text-black font-bold"
                  : "bg-[#1c1917] border-[#44403c] text-[#78716c]"
              }`}
            >
              {currentStep === 5 ? (
                <Sparkles className="w-3.5 h-3.5 text-black" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-[#57534e]" />
              )}
            </div>

            <button
              onClick={() => currentStep >= 5 && setCurrentStep(5)}
              className={`text-left font-semibold text-sm md:text-base tracking-tight transition-colors flex items-center gap-2 ${
                currentStep === 5
                  ? "text-white cursor-pointer"
                  : "text-[#78716c] cursor-not-allowed"
              }`}
            >
              <span>Growth & AI Search Score</span>
              {currentStep === 5 && (
                <span className="text-xs text-green-400 font-mono font-bold">
                  (Score Ready: 85/100)
                </span>
              )}
            </button>

            {/* Step 5 Content Box (Final Score Card & Teaser Fixes) */}
            {currentStep === 5 && (
              <div className="mt-4 pl-4 border-l-2 border-[#383332] space-y-5">
                <div className="p-6 rounded-2xl border border-[#383332] bg-gradient-to-br from-[#1c1917] to-[#141211] max-w-xl shadow-2xl space-y-6">
                  {/* Overall Score Row */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#292524]">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#a8a29e] uppercase font-bold block mb-1">
                        OVERALL OKIZA SCORE
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        Strong Growth Foundation
                      </h3>
                      <p className="text-xs text-[#a8a29e] mt-1">
                        3 critical gaps preventing top 3 placement in AI answer engines.
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-[#292524] border border-[#57534e] text-white">
                      <span className="text-3xl font-black tracking-tight">85</span>
                      <span className="text-[10px] font-mono text-[#a8a29e]">of 100</span>
                    </div>
                  </div>

                  {/* Sub-Scores Matrix */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#141211] border border-[#292524]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-white">
                          GEO (AI Search)
                        </span>
                        <span className="text-xs font-bold text-[#38bdf8]">78%</span>
                      </div>
                      <span className="text-[10px] text-[#78716c]">
                        ChatGPT: 92 • Perplexity: 75
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141211] border border-[#292524]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-white">
                          Technical SEO
                        </span>
                        <span className="text-xs font-bold text-[#4ade80]">88%</span>
                      </div>
                      <span className="text-[10px] text-[#78716c]">
                        0 Broken Links • 3 Warnings
                      </span>
                    </div>
                  </div>

                  {/* 2 Ready-to-Ship Fixes Teaser */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                        2 Ready-to-Ship Fixes for Today
                      </span>
                      <span className="text-[10px] text-green-400 font-mono">
                        Ready to deploy
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-[#141211] border border-[#292524] flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-[#f87171] font-semibold block">
                            CRITICAL • SCHEMA
                          </span>
                          <span className="text-xs font-semibold text-white">
                            Fix SoftwareApplication Schema on Pricing
                          </span>
                        </div>
                        <span className="text-[11px] text-[#38bdf8] font-mono">
                          +14% LLM citation
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#141211] border border-[#292524] flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-[#fbbf24] font-semibold block">
                            HIGH • KEYWORD GAP
                          </span>
                          <span className="text-xs font-semibold text-white">
                            Missing competitor comparison page
                          </span>
                        </div>
                        <span className="text-[11px] text-[#38bdf8] font-mono">
                          Draft ready
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2">
                    <Link
                      href="/pricing"
                      className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#e4e4e7] transition-all shadow-lg cursor-pointer"
                    >
                      <span>Start 7-Day Free Trial to Apply Fixes</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <p className="text-center text-[11px] text-[#78716c] mt-2">
                      7-day free trial · No credit card required · Instant setup
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setWebsite("");
                  }}
                  className="text-xs text-[#a8a29e] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Analyze another website</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

