"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Plus,
} from "lucide-react";

export function SocialPostsScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("calendar");

  const posts = [
    { content: "How AI changes local SEO", platform: "LinkedIn", status: "Scheduled", date: "Nov 23", action: "Edit →" },
    { content: "New customer success story", platform: "Instagram", status: "Draft", date: "Nov 24", action: "Review →" },
    { content: "5 ways to earn AI citations", platform: "LinkedIn + X", status: "Approval", date: "Nov 25", action: "Approve →" },
    { content: "Business update — Bengaluru", platform: "Google", status: "Scheduled", date: "Nov 26", action: "Edit →" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            CREATE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Social Media Posts
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Plan, produce and distribute content from one workspace.
          </p>
        </div>

        <button
          onClick={() => onNavigate("create-social-post")}
          className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0"
        >
          + New post
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["Calendar", "Drafts", "Scheduled", "Published", "Performance"].map((tab) => {
          const tabKey = tab.toLowerCase();
          const isActive = activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tabKey)}
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
            SCHEDULED POSTS
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              18
            </span>
            <span className="text-xs font-mono text-[#a1a1aa]">This month</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            AWAITING APPROVAL
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              04
            </span>
            <span className="text-xs font-mono text-amber-400">Action</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            PUBLISHED
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              42
            </span>
            <span className="text-xs font-mono text-emerald-400">+12</span>
          </div>
        </div>
      </div>

      {/* Publishing queue table */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Publishing queue</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5 font-mono">
            Manage LinkedIn, Instagram, Facebook, X and Google posts
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">CONTENT</th>
                <th className="py-2.5">PLATFORM</th>
                <th className="py-2.5">STATUS</th>
                <th className="py-2.5">PUBLISH DATE</th>
                <th className="py-2.5 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {posts.map((p, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className="py-3 font-medium text-white">{p.content}</td>
                  <td className="py-3 font-mono text-[#a1a1aa]">{p.platform}</td>
                  <td className="py-3 font-mono text-white">{p.status}</td>
                  <td className="py-3 font-mono text-[#71717a]">{p.date}</td>
                  <td className="py-3 text-right">
                    <button
                      onClick={() => onNavigate("create-social-post")}
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
      </div>
    </div>
  );
}

export function CreateSocialPostScreen({ onNavigate }) {
  const [activePlatform, setActivePlatform] = useState("LinkedIn");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            CREATE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Create a social post
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Use AI to draft, adapt and preview channel-ready content.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0">
          Save draft
        </button>
      </div>

      {/* 2 Column Layout: Post Editor + Live Post Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Editor (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Post editor</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Campaign: Build visibility everywhere
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#1f1f23] bg-[#141417] text-xs text-[#d4d4d8] leading-relaxed">
            <p>
              Your next customer might discover your brand through a search result, a Google Map listing, or an AI answer.
            </p>
            <p className="mt-3">
              Build an online presence that makes it easy to understand, trust and choose your business.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <span className="text-xs text-[#8e8e93] block">Publish to</span>
            <div className="flex flex-wrap gap-2">
              {["LinkedIn", "Instagram", "Google", "X"].map((plat) => (
                <button
                  key={plat}
                  onClick={() => setActivePlatform(plat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                    activePlatform === plat
                      ? "bg-white text-black border-white"
                      : "bg-[#141417] text-[#a1a1aa] border-[#27272a] hover:text-white"
                  }`}
                >
                  {plat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3">
            <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
              Polish with Okiza ✦
            </button>
            <button className="px-4 py-2 rounded-xl border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
              Request approval
            </button>
          </div>
        </div>

        {/* Live post preview (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Live post preview</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Preview layout per selected platform
            </p>
          </div>

          {/* Social Mockup Card */}
          <div className="p-4 rounded-xl border border-[#1f1f23] bg-[#141417] space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border border-white flex items-center justify-center text-[10px] text-white">
                ◉
              </span>
              <span className="text-xs font-bold text-white">okiza</span>
            </div>

            <div className="p-6 rounded-lg bg-white text-black text-center font-bold text-sm tracking-tight">
              <p>GROW</p>
              <p>EVERYWHERE</p>
            </div>

            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              Your next customer is searching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogStudioScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("all");

  const articles = [
    { title: "What is generative engine optimization?", kw: "GEO meaning", stage: "Published", score: "92", action: "Analytics →", screen: "growth-analytics" },
    { title: "SEO vs AEO vs GEO explained", kw: "SEO AEO GEO", stage: "Draft", score: "78", action: "Edit →", screen: "article-editor" },
    { title: "Best AI marketing tools for SMBs", kw: "AI CMO platforms", stage: "Review", score: "86", action: "Approve →", screen: "article-editor" },
    { title: "Local SEO checklist for 2027", kw: "local SEO checklist", stage: "Idea", score: "—", action: "Build brief →", screen: "ai-content-brief" },
    { title: "Guide to earning AI citations", kw: "AI citations", stage: "Brief", score: "—", action: "Generate →", screen: "article-editor" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            CREATE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Blog Studio
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Create useful search-friendly articles that earn attention and trust.
          </p>
        </div>

        <button
          onClick={() => onNavigate("ai-content-brief")}
          className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0"
        >
          + New article
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["All content", "Ideas", "Briefs", "Drafts", "Approved", "Published"].map((tab) => {
          const tabKey = tab.toLowerCase().replace(" ", "-");
          const isActive = (activeTab === "all" && tab === "All content") || activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "All content" ? "all" : tabKey)}
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

      {/* Editorial workspace table */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Editorial workspace</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5 font-mono">
            Filter by stage, author, topic and content type
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">ARTICLE</th>
                <th className="py-2.5">TARGET KEYWORD</th>
                <th className="py-2.5">STAGE</th>
                <th className="py-2.5">SEO SCORE</th>
                <th className="py-2.5 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {articles.map((art, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className="py-3.5 font-medium text-white">{art.title}</td>
                  <td className="py-3.5 font-mono text-[#a1a1aa]">{art.kw}</td>
                  <td className="py-3.5 font-mono text-white">{art.stage}</td>
                  <td className="py-3.5 font-mono font-bold text-white">{art.score}</td>
                  <td className="py-3.5 text-right">
                    <button
                      onClick={() => onNavigate(art.screen)}
                      className="text-xs font-semibold text-white hover:underline cursor-pointer"
                    >
                      {art.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-4 border-t border-[#1f1f23] flex justify-end">
          <button
            onClick={() => onNavigate("ai-content-brief")}
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm"
          >
            Generate content brief
          </button>
        </div>
      </div>
    </div>
  );
}

export function AiContentBriefScreen({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            CREATE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            AI content brief
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Turn competitor research and search intent into an actionable outline.
          </p>
        </div>

        <button
          onClick={() => onNavigate("article-editor")}
          className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0"
        >
          Generate draft
        </button>
      </div>

      {/* 2 Column Layout: Article Brief + Research Evidence */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Article brief (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-5">
          <div>
            <h2 className="text-base font-bold text-white">Article brief</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              SEO vs AEO vs GEO: the complete comparison
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a] block mb-1">
              PRIMARY KEYWORD
            </span>
            <span className="text-lg font-bold text-white font-mono">
              SEO vs AEO vs GEO
            </span>
          </div>

          <div className="space-y-3 pt-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a] block">
              RECOMMENDED STRUCTURE
            </span>

            {[
              { num: "01", text: "What the three concepts mean" },
              { num: "02", text: "Where users discover brands" },
              { num: "03", text: "How to measure each channel" },
              { num: "04", text: "Practical examples and checklists" },
              { num: "05", text: "Frequently asked questions" },
            ].map((s) => (
              <div
                key={s.num}
                className="p-3 rounded-xl border border-[#1f1f23] bg-[#141417] flex items-center gap-3 text-xs"
              >
                <span className="font-mono text-[#71717a] font-bold">{s.num}</span>
                <span className="text-white font-medium">{s.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Research evidence (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h2 className="text-base font-bold text-white">Research evidence</h2>
              <p className="text-xs text-[#8e8e93] mt-0.5">
                Traceability before publishing
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
                <span className="text-[#8e8e93]">Search intent</span>
                <span className="font-mono font-bold text-white">Informational</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
                <span className="text-[#8e8e93]">Relevant competitors</span>
                <span className="font-mono font-bold text-white">5</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
                <span className="text-[#8e8e93]">Source documents</span>
                <span className="font-mono font-bold text-white">14</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
                <span className="text-[#8e8e93]">Content gaps</span>
                <span className="font-mono font-bold text-white">3</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
                <span className="text-[#8e8e93]">Suggested length</span>
                <span className="font-mono font-bold text-white">1,800 words</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#1f1f23] mt-6">
            <button className="w-full py-2.5 rounded-xl border border-[#27272a] hover:bg-[#1a1a1e] text-xs font-semibold text-white transition-colors cursor-pointer text-center">
              Add sources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ArticleEditorScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("editor");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            CREATE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Article editor
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Write, optimize and approve before publishing.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0">
          Send for review
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["Editor", "Research", "Revisions", "Preview"].map((tab) => {
          const tabKey = tab.toLowerCase();
          const isActive = activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tabKey)}
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

      {/* 2 Column Layout: Editor + Optimization Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Editor Body (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-xs font-bold font-mono text-[#a1a1aa] uppercase tracking-wider">
              SEO vs AEO vs GEO
            </h2>
            <p className="text-[11px] font-mono text-[#71717a] mt-0.5">
              Draft • 1,462 words • Last edited just now
            </p>
          </div>

          <h3 className="text-xl font-bold text-white tracking-tight pt-2">
            The future of business discovery
          </h3>

          <div className="space-y-4 text-xs text-[#d4d4d8] leading-relaxed">
            <p>
              Search behavior is changing. People still use traditional search engines, but they also ask AI assistants to compare products and recommend services. That makes visibility across different discovery experiences increasingly important.
            </p>

            <h4 className="text-sm font-bold text-white pt-2">
              1. Search engine optimization (SEO)
            </h4>

            <p>
              SEO improves how discoverable and useful a website is in traditional search results...
            </p>
          </div>
        </div>

        {/* Optimization checklist (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Optimization checklist</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Evidence and readiness
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Search intent</span>
              <span className="font-mono text-emerald-400 font-semibold">Matched</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Keyword use</span>
              <span className="font-mono text-emerald-400 font-semibold">Good</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Internal links</span>
              <span className="font-mono text-amber-400 font-semibold">3 missing</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Claim citations</span>
              <span className="font-mono text-white font-semibold">Review</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Readability</span>
              <span className="font-mono text-emerald-400 font-semibold">Good</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GooglePostsScreen({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            CREATE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Google Business Profile post
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Publish one update across multiple selected locations.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0">
          Publish update
        </button>
      </div>

      {/* 2 Column Layout: Create update + Google Search preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Create update (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Create update</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Select locations, write the update, and review before publishing
            </p>
          </div>

          <div className="space-y-3.5 pt-2 text-xs">
            <div>
              <label className="text-[#71717a] font-mono text-[10px] uppercase block mb-1">
                POST SUMMARY
              </label>
              <input
                type="text"
                defaultValue="A fresh approach to growing your business"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-[#71717a] font-mono text-[10px] uppercase block mb-1">
                POST CONTENT
              </label>
              <textarea
                rows={4}
                defaultValue="Get found by the right people through search, maps, and AI-powered discovery. Explore our latest services and book a discovery call."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141417] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer">
                <span>All 10 locations</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-[#141417] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer">
                + Add image
              </button>
            </div>

            <div className="pt-2">
              <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
                Polish with Okiza ✦
              </button>
            </div>
          </div>
        </div>

        {/* Google Search preview (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Google Search preview</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              How your update may appear on mobile
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#1f1f23] bg-[#141417] space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center text-[9px] text-white">
                ◉
              </span>
              <span className="text-xs font-bold text-white">Okiza Growth Studio</span>
            </div>

            <span className="text-[11px] font-mono text-[#71717a] block">Updates</span>

            <div className="p-4 rounded-lg bg-[#1a1a1e] border border-[#27272a] text-xs text-white font-medium">
              A fresh approach to growing your business
            </div>

            <button className="text-xs font-semibold text-white hover:underline cursor-pointer">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NewsroomScreen({ onNavigate }) {
  const news = [
    { title: "Okiza launches new AI visibility product", type: "Product news", stage: "Draft", date: "Nov 20", action: "Edit →" },
    { title: "Local businesses adopt AI discoverability", type: "Industry note", stage: "Approved", date: "Nov 15", action: "Preview →" },
    { title: "New partner integration announced", type: "Partnership", stage: "Published", date: "Nov 11", action: "Results →" },
    { title: "Research: Small-business search trends", type: "Research", stage: "Researching", date: "Nov 06", action: "Open brief →" },
    { title: "New feature: Reviews assistant", type: "Product news", stage: "Published", date: "Nov 01", action: "Results →" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            CREATE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Newsroom
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Build announcements and distribute stories to relevant audiences.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0">
          + New release
        </button>
      </div>

      {/* Press and announcements table */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Press and announcements</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5 font-mono">
            Editorial status, distribution and citations
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">ANNOUNCEMENT</th>
                <th className="py-2.5">TYPE</th>
                <th className="py-2.5">STAGE</th>
                <th className="py-2.5">DATE</th>
                <th className="py-2.5 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {news.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className="py-3.5 font-medium text-white">{item.title}</td>
                  <td className="py-3.5 font-mono text-[#a1a1aa]">{item.type}</td>
                  <td className="py-3.5 font-mono text-white">{item.stage}</td>
                  <td className="py-3.5 font-mono text-[#71717a]">{item.date}</td>
                  <td className="py-3.5 text-right">
                    <button className="text-xs font-semibold text-white hover:underline cursor-pointer">
                      {item.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-4 border-t border-[#1f1f23]">
          <p className="text-[11px] text-[#71717a]">
            Proposed Okiza extension beyond what is directly confirmed by the demo.
          </p>
        </div>
      </div>
    </div>
  );
}
