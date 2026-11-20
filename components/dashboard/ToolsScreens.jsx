"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";

export function ReportsScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("saved");

  const reports = [
    { name: "Executive growth summary", inc: "SEO, AI, leads", cad: "Weekly", last: "Today", action: "Open →", screen: "overview" },
    { name: "Local performance by store", inc: "GBP, reviews, maps", cad: "Monthly", last: "Nov 18", action: "Open →", screen: "locations" },
    { name: "AI visibility competitor report", inc: "Prompts, citations", cad: "Weekly", last: "Nov 17", action: "Open →", screen: "ai-visibility" },
    { name: "Content performance report", inc: "Articles, social", cad: "Monthly", last: "Nov 15", action: "Open →", screen: "blog-studio" },
    { name: "Technical SEO health", inc: "Crawl, indexing", cad: "Weekly", last: "Nov 16", action: "Open →", screen: "technical-seo-audit" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            WORKSPACE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Reports
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Explain what changed and share business outcomes.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0">
          + New report
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["Saved reports", "Templates", "Scheduled delivery"].map((tab) => {
          const tabKey = tab.toLowerCase().replace(" ", "-");
          const isActive = (activeTab === "saved" && tab === "Saved reports") || activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "Saved reports" ? "saved" : tabKey)}
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

      {/* Saved Reports Table */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Saved reports</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5 font-mono">
            Build reports from connected sources
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">REPORT</th>
                <th className="py-2.5">INCLUDES</th>
                <th className="py-2.5">CADENCE</th>
                <th className="py-2.5">LAST UPDATED</th>
                <th className="py-2.5 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {reports.map((r, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className="py-3.5 font-medium text-white">{r.name}</td>
                  <td className="py-3.5 font-mono text-[#a1a1aa]">{r.inc}</td>
                  <td className="py-3.5 font-mono text-white">{r.cad}</td>
                  <td className="py-3.5 font-mono text-[#71717a]">{r.last}</td>
                  <td className="py-3.5 text-right">
                    <button
                      onClick={() => onNavigate(r.screen)}
                      className="text-xs font-semibold text-white hover:underline cursor-pointer"
                    >
                      {r.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-4 border-t border-[#1f1f23] flex justify-end">
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            Schedule delivery
          </button>
        </div>
      </div>
    </div>
  );
}

export function IntegrationsScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("connected");

  const sources = [
    { title: "Google Search Console", sub: "SEO clicks and indexing", status: "Connected", isConnected: true },
    { title: "Google Analytics 4", sub: "Sessions and conversions", status: "Connected", isConnected: true },
    { title: "Google Business Profile", sub: "Locations and reviews", status: "Connected", isConnected: true },
    { title: "Meta Business", sub: "Social performance and ads", status: "Not connected", isConnected: false },
    { title: "Google Ads", sub: "Campaign and conversion data", status: "Not connected", isConnected: false },
    { title: "LinkedIn Pages", sub: "Post publishing and analytics", status: "Not connected", isConnected: false },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            SETTINGS
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Integrations
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Connect platforms to make your growth data reliable.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0">
          Request connector
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["Connected", "Available", "API keys", "Activity"].map((tab) => {
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

      {/* Connected sources grid */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Connected sources</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5">
            Access and sync details should be visible at all times
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {sources.map((s, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-[#1f1f23] bg-[#141417] flex flex-col justify-between h-36"
            >
              <div>
                <h3 className="text-xs font-bold text-white">{s.title}</h3>
                <p className="text-[11px] text-[#8e8e93] mt-1">{s.sub}</p>
              </div>

              <div>
                <button
                  onClick={() => onNavigate("setup-workspace")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    s.isConnected
                      ? "bg-white text-black"
                      : "bg-[#27272a] text-[#a1a1aa] hover:bg-[#323238]"
                  }`}
                >
                  {s.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SetupWorkspaceScreen({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            ONBOARDING
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Set up your workspace
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Get your first actionable insight in five steps.
          </p>
        </div>

        <button
          onClick={() => onNavigate("overview")}
          className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0"
        >
          Continue
        </button>
      </div>

      {/* Stepper Card */}
      <div className="p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-6">
        <div>
          <h2 className="text-base font-bold text-white">Connect your business</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5 font-mono">
            Step 2 of 5 • Estimated completion: 3 minutes
          </p>
        </div>

        {/* Stepper Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {["1 Business profile", "2 Connect accounts", "3 Select competitors", "4 Define growth goals", "5 First AI scan"].map((step, idx) => (
            <div
              key={idx}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium border ${
                idx === 1
                  ? "bg-white text-black border-white font-bold"
                  : "bg-[#141417] text-[#8e8e93] border-[#27272a]"
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[#1f1f23] space-y-4">
          <h3 className="text-lg font-bold text-white">
            Choose the data sources you want to connect
          </h3>

          <div className="space-y-3">
            {[
              { name: "Google Search Console", desc: "Understand organic search" },
              { name: "Google Analytics", desc: "Track customer journeys" },
              { name: "Google Business Profile", desc: "Manage locations and reviews" },
            ].map((d, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-[#1f1f23] bg-[#141417] flex items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-xs font-bold text-white">{d.name}</h4>
                  <p className="text-[11px] text-[#8e8e93]">{d.desc}</p>
                </div>
                <button className="px-4 py-1.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkspaceSettingsScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            SETTINGS
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Workspace settings
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Control brand information, roles, approvals and notifications.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0">
          Save changes
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["General", "Team & roles", "Brand voice", "Approvals", "Billing"].map((tab) => {
          const tabKey = tab.toLowerCase().replace(" & ", "-");
          const isActive = (activeTab === "general" && tab === "General") || activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "General" ? "general" : tabKey)}
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

      {/* 2 Column Layout: Workspace profile + Access & security */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Workspace profile (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Workspace profile</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Update basic company information
            </p>
          </div>

          <div className="space-y-3.5 pt-2 text-xs">
            <div>
              <label className="text-[#8e8e93] block mb-1">Workspace name</label>
              <input
                type="text"
                defaultValue="Okiza Demo"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-[#8e8e93] block mb-1">Website</label>
              <input
                type="text"
                defaultValue="https://yourbusiness.example"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-[#8e8e93] block mb-1">Industry</label>
              <input
                type="text"
                defaultValue="Marketing services"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-[#8e8e93] block mb-1">Primary market</label>
              <input
                type="text"
                defaultValue="India"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Access & security (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Access &amp; security</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Protect brand actions
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Approval requirement</span>
              <span className="font-mono text-emerald-400 font-semibold">Enabled</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Two-factor auth</span>
              <span className="font-mono text-white font-semibold">Required</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Publishing permissions</span>
              <span className="font-mono text-white font-semibold">Admin only</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Activity audit log</span>
              <span className="font-mono text-emerald-400 font-semibold">Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OkizaAssistantScreen({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            ASSISTANT
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Okiza Assistant
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            An assistant that can act with context from the screen you are viewing.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0">
          New chat
        </button>
      </div>

      {/* 2 Column Layout: Growth signals + Interactive Ask Okiza */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Card 1: Growth signals */}
          <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
            <div>
              <h2 className="text-base font-bold text-white">Your latest growth signals</h2>
              <p className="text-xs text-[#8e8e93] mt-0.5">
                Example context: SEO overview, the past 30 days
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417]">
                <span className="text-[10px] font-mono uppercase text-[#71717a] block">
                  ORGANIC CLICKS
                </span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl font-bold font-mono text-white">18.6k</span>
                  <span className="text-xs font-mono text-emerald-400">+9%</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417]">
                <span className="text-[10px] font-mono uppercase text-[#71717a] block">
                  TECHNICAL ISSUES
                </span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl font-bold font-mono text-white">06</span>
                  <span className="text-xs font-mono text-rose-400">Critical</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Priority insight */}
          <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-2">
            <h3 className="text-sm font-bold text-white">Priority insight</h3>
            <p className="text-xs text-[#d4d4d8] leading-relaxed">
              Three of your highest-traffic pages have slow mobile loading. Fixing them is a stronger first move than publishing more articles.
            </p>
          </div>
        </div>

        {/* Right Column (5 cols): Ask Okiza */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-1.5">
                <span>Ask Okiza</span>
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </h2>
              <p className="text-xs text-[#8e8e93] mt-0.5">
                Screen-aware, with sources and approvals
              </p>
            </div>

            {/* User Bubble */}
            <div className="p-3.5 rounded-xl bg-[#1c1c20] text-xs text-white font-medium">
              What should I prioritize this week?
            </div>

            {/* Assistant Bubble */}
            <div className="p-3.5 rounded-xl bg-[#141417] border border-[#1f1f23] text-xs text-[#d4d4d8] leading-relaxed">
              Start with the 3 slow pages, then the 6 canonical issues. I can create tasks and draft fixes for review.
            </div>

            {/* Input field */}
            <div className="pt-2">
              <input
                type="text"
                placeholder="Ask about this page…"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-xs text-white placeholder-[#71717a] focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-[#1f1f23] mt-6">
            <button
              onClick={() => onNavigate("opportunities")}
              className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm text-center"
            >
              Create 2 tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScreenIndexScreen({ onNavigate }) {
  const sections = [
    {
      title: "Growth & discovery",
      screens: [
        { id: "overview", label: "Growth overview" },
        { id: "growth-analytics", label: "Growth analytics" },
        { id: "opportunities", label: "Growth opportunities" },
        { id: "ai-visibility", label: "AI Visibility" },
        { id: "prompt-tracking", label: "Prompt tracking" },
        { id: "ai-answer-inspector", label: "AI answer inspector" },
        { id: "citation-intelligence", label: "Citation intelligence" },
        { id: "ai-competitor-benchmarking", label: "AI competitor benchmarking" },
        { id: "seo-intelligence", label: "SEO Intelligence" },
        { id: "technical-seo-audit", label: "Technical SEO audit" },
        { id: "keyword-rankings", label: "Keyword rankings" },
        { id: "content-opportunities", label: "Content opportunities" },
      ],
    },
    {
      title: "Local & content",
      screens: [
        { id: "locations", label: "Locations" },
        { id: "location-detail", label: "Indiranagar, Bengaluru" },
        { id: "local-seo", label: "Local ranking grid" },
        { id: "local-competitors", label: "Local competitors" },
        { id: "google-business-profile", label: "Google Business Profile" },
        { id: "google-reviews", label: "Google reviews" },
        { id: "review-reply-automation", label: "Review reply automation" },
        { id: "social-posts", label: "Social Media Posts" },
        { id: "create-social-post", label: "Create a social post" },
        { id: "blog-studio", label: "Blog Studio" },
        { id: "ai-content-brief", label: "AI content brief" },
        { id: "article-editor", label: "Article editor" },
      ],
    },
    {
      title: "Operations & tools",
      screens: [
        { id: "google-posts", label: "Google Business Profile post" },
        { id: "newsroom", label: "Newsroom" },
        { id: "competitors", label: "Competitor Intelligence" },
        { id: "competitor-detail", label: "Competitor detail" },
        { id: "leads-crm", label: "Leads & CRM" },
        { id: "automations", label: "Automations" },
        { id: "automation-builder", label: "Automation builder" },
        { id: "reports", label: "Reports" },
        { id: "integrations", label: "Integrations" },
        { id: "setup-workspace", label: "Set up your workspace" },
        { id: "settings", label: "Workspace settings" },
        { id: "assistant", label: "Okiza Assistant" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header matching Page 38 */}
      <div className="pb-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Screen index
        </h1>
        <p className="text-[11px] font-mono tracking-widest text-[#71717a] uppercase mt-2">
          SELECT A SCREEN TO OPEN IT IN SLIDE SHOW
        </p>
      </div>

      {/* 3 Columns matching Page 38 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((sec) => (
          <div
            key={sec.title}
            className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-3"
          >
            <h2 className="text-base font-bold text-white pb-2 border-b border-[#1f1f23]">
              {sec.title}
            </h2>
            <div className="space-y-1">
              {sec.screens.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="w-full flex items-center justify-between py-2 px-2.5 rounded-lg text-xs text-[#a1a1aa] hover:text-white hover:bg-[#161619] transition-colors text-left cursor-pointer group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {item.label}
                  </span>
                  <span className="font-mono text-zinc-500 group-hover:text-white">→</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
