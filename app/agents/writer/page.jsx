"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  PenTool,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Sparkles,
  Zap,
  TrendingUp,
  Share2,
  FileText,
  Copy,
  Check,
} from "lucide-react";

export default function WriterAgentPage() {
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (website.trim()) {
      setSubmitted(true);
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard?.writeText(text);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const sampleArticles = [
    {
      title: "How to Build an Autonomous AI Growth Loop in 2026",
      category: "Growth Engineering",
      readTime: "7 min read",
      targetKeyword: "autonomous AI growth OS",
      serpPotential: "#1 - #3 rank",
      status: "Ready to Publish",
      cms: "Webflow & WordPress",
      excerpt:
        "Modern marketing teams no longer win by hiring agencies or writing manual weekly posts. Instead, the highest-converting brands deploy autonomous agents that continuously audit gaps, write in authentic founder tone, and auto-sync to their CMS.",
    },
    {
      title: "Generative Engine Optimization (GEO): The Definitive Playbook",
      category: "AI Search",
      readTime: "11 min read",
      targetKeyword: "GEO optimization guide",
      serpPotential: "#1 rank target",
      status: "Ready to Publish",
      cms: "Framer & Webflow",
      excerpt:
        "When buyers ask Perplexity or ChatGPT for the best software in your category, why are legacy rivals cited first? Here is the exact data structure, entity schema, and authority signal loop needed to dominate LLM citations.",
    },
    {
      title: "Why Traditional Influencer Retainers Are Obsolete",
      category: "Creator Strategy",
      readTime: "5 min read",
      targetKeyword: "influencer marketing automation",
      serpPotential: "#2 rank target",
      status: "Ready to Publish",
      cms: "Wix & Medium",
      excerpt:
        "Agency retainers cost $60k/year before a single post goes live. By switching to algorithmic creator matching with escrowed payouts on X and LinkedIn, B2B brands are scaling creator revenue 4.8x faster.",
    },
  ];

  const cmsIntegrations = ["WordPress", "Webflow", "Framer", "Wix"];

  const statItems = [
    { label: "Content Speedup", value: "10x" },
    { label: "Reader Retention", value: "74%" },
    { label: "Articles Pushed / Mo", value: "12+" },
    { label: "CMS 1-Click Sync", value: "4 Platforms" },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION */}
        <section className="w-full pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-[#c084fc]/5 blur-[130px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase font-sans">
              OKIZA AI CMO
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#e4e4e7] font-medium">
              <PenTool className="w-3.5 h-3.5 text-[#c084fc]" strokeWidth={2} />
              <span>Writer Agent</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl">
            AI Writer Agent
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
            Publish SEO-optimized articles in your authentic brand voice every week.
            The agent researches topics, outlines arguments, drafts full-length posts, and
            pushes directly to your CMS.
          </p>

          {/* Interactive Input Bar */}
          <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
            <div className="p-1.5 rounded-2xl bg-[#242120] border border-[#383332] shadow-2xl flex items-center justify-between gap-2 focus-within:border-[#524b48] transition-all">
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter your website or blog URL"
                className="bg-transparent text-white placeholder-[#71717a] px-4 py-2.5 text-sm sm:text-base outline-none flex-1 min-w-0"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#d4d4d8] hover:bg-white text-black font-semibold text-sm transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Generate First Article</span>
                <span className="text-base font-bold">→</span>
              </button>
            </div>
            <p className="text-xs text-[#71717a] mt-4">
              7-day free trial · Cancel anytime
            </p>
          </form>

          {submitted && (
            <div className="mt-8 p-5 rounded-2xl bg-[#1c1a19] border border-[#383332] max-w-lg text-left shadow-2xl animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-[#2e2a28] mb-3">
                <span className="text-xs font-semibold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                  Brand Voice Calibrated for {website}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#c084fc]/10 text-[#c084fc]">
                  Voice: Visionary & Direct
                </span>
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
                Found 14 high-volume keyword opportunities with low competition. Drafted article outline ready for your review below.
              </p>
              <a
                href="#articles"
                className="inline-flex items-center gap-1 text-xs text-[#c084fc] font-semibold hover:underline"
              >
                <span>Review article drafts & CMS sync</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          )}
        </section>

        {/* DEFINITION SECTION */}
        <section className="w-full border-t border-[#262423] py-24 px-6 bg-[#0a0908]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
              <div className="md:w-5/12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c084fc] block mb-3 font-mono">
                  Definition
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                  What an AI Writer agent actually does
                </h2>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cmsIntegrations.map((cms, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#1c1a19] border border-[#2e2a28] text-[#a1a1aa]"
                    >
                      ✓ {cms}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:w-7/12 space-y-6 text-[#a1a1aa] text-base leading-relaxed">
                <p>
                  Okiza’s AI Writer Agent runs your entire organic editorial calendar autonomously. It doesn&apos;t just spit out generic ChatGPT paragraphs—it calibrates against your ICP, positioning documents, and style guides to produce publication-ready long-form articles.
                </p>
                <p>
                  Every article includes keyword-targeted headings, technical schema, structured tables, and conversion callouts. Once approved, the agent pushes directly to WordPress, Webflow, Framer, or Wix with one click.
                </p>
                <div className="p-5 rounded-2xl bg-[#141211] border border-[#2e2a28] text-white">
                  <p className="text-sm font-medium leading-relaxed flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-[#c084fc] shrink-0 mt-0.5" />
                    <span>
                      The result: <strong>Consistent, compounding authority content</strong> without spending $8,000/month on freelance content agencies.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE ARTICLE SHOWCASE */}
        <section id="articles" className="w-full border-t border-[#262423] py-24 px-6 bg-[#000000]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c084fc] block mb-2 font-mono">
                Live Article Queue
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Articles Ready to Publish
              </h2>
              <p className="text-base text-[#a1a1aa]">
                Every post is cited, formatted, and optimized for both Google SERPs and AI search engines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sampleArticles.map((article, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#2e2a28] bg-[#141211] p-6 flex flex-col justify-between hover:border-[#4a4441] transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-[#c084fc] font-semibold bg-[#c084fc]/10 px-2.5 py-0.5 rounded-full border border-[#c084fc]/20 font-mono">
                        {article.category}
                      </span>
                      <span className="text-[#71717a]">{article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#c084fc] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-[#a1a1aa] leading-relaxed mb-4">
                      {article.excerpt}
                    </p>

                    <div className="p-3 rounded-xl bg-[#1c1a19] border border-[#262423] space-y-1.5 text-xs mb-4">
                      <div className="flex justify-between">
                        <span className="text-[#71717a]">Target Keyword:</span>
                        <span className="text-white font-mono">{article.targetKeyword}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#71717a]">Rank Potential:</span>
                        <span className="text-[#4ade80] font-semibold">{article.serpPotential}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#71717a]">Syncs to:</span>
                        <span className="text-white">{article.cms}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-2.5 rounded-xl bg-[#242120] hover:bg-[#2c2826] border border-[#383332] text-xs font-semibold text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <span>Push to CMS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="w-full border-t border-[#262423] py-24 px-6 bg-[#0a0908]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c084fc] block mb-2 font-mono">
                Performance Proof
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Organic Traffic That Compounds
              </h2>
              <p className="text-base text-[#a1a1aa]">
                Rank for high-intent comparison terms, how-to searches, and category keywords.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statItems.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[#2e2a28] bg-[#141211] p-6 text-center flex flex-col justify-center items-center"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white block mb-2 font-mono tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#a1a1aa] font-medium leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="w-full border-t border-[#262423] py-20 px-6 text-center bg-[#000000]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Publish Your Next Article in 5 Minutes
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mb-8 leading-relaxed">
              Connect your domain, calibrate your voice, and let Okiza’s Writer Agent populate your blog with ranking content.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-lg"
              >
                Generate First Article →
              </a>
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1c1a19] border border-[#383332] text-sm font-semibold text-white hover:bg-[#242120] transition-all"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

