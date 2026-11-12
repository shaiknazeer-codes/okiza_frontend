"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StackFlowDiagram from "@/components/StackFlowDiagram";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Layers,
  Sparkles,
  ExternalLink,
  Search,
  Filter,
  Check,
} from "lucide-react";

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [connectedPlatforms, setConnectedPlatforms] = useState({
    wordpress: true,
    "search-console": true,
    analytics: true,
    github: true,
  });

  const toggleConnect = (id) => {
    setConnectedPlatforms((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const integrations = useMemo(
    () => [
    {
      id: "wordpress",
      title: "WordPress",
      category: "cms",
      desc: "Auto-publish SEO articles, landing pages, and metadata updates directly to your WordPress REST API without leaving Okiza.",
      tags: ["CMS", "Auto-Publish", "REST API"],
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#3880a6" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.2a10.8 10.8 0 0 1 10.8 10.8c0 5.09-3.52 9.35-8.25 10.51l-4.75-13.8c.8-.04 1.54-.12 1.54-.12.56-.07.5-.9-.06-.86 0 0-1.68.14-2.78.14-1.03 0-2.78-.14-2.78-.14-.56-.04-.62.8-.06.86 0 0 .72.08 1.45.12l2.22 6.13-3.13 9.36A10.77 10.77 0 0 1 1.2 12C1.2 6.035 6.035 1.2 12 1.2zm6.27 4.96c.55.77.86 1.7.86 2.7 0 1.83-1.05 3.92-2.13 6.09l-3.35 10.02c4.15-1.37 7.15-5.3 7.15-9.97 0-3.47-1.64-6.55-4.17-8.52l1.64-.32zM3.44 7.6c-.66 1.27-1.04 2.73-1.04 4.4 0 3.42 1.6 6.47 4.07 8.44L2.83 9.4c.3-.03.58-.06.61-.06.56-.07.5-.9-.06-.86l.06-.88zm8.68 7.37l2.84 8.28c.41.05.83.08 1.25.08.37 0 .73-.02 1.09-.06l-5.18-15.02z"/>
        </svg>
      ),
    },
    {
      id: "webflow",
      title: "Webflow",
      category: "cms",
      desc: "Synchronize CMS items, publish programmatic blog collections, and update localized landing pages automatically.",
      tags: ["CMS", "Collection Sync", "Webhook"],
      icon: (
        <svg viewBox="0 0 24 24" fill="#146EF5" className="w-6 h-6" aria-hidden="true">
          <path d="M17.842 5.437l-3.325 9.773-2.715-9.773H7.49l-3.09 13.126h4.59l1.657-6.536 2.457 6.536h3.879l4.499-13.126h-3.64z"/>
        </svg>
      ),
    },
    {
      id: "framer",
      title: "Framer",
      category: "cms",
      desc: "Push drafted articles and new customer story pages directly into your Framer CMS with pre-styled typography and components.",
      tags: ["CMS", "Design Sync", "Fast Setup"],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white" aria-hidden="true">
          <path d="M4 2h16v7h-8l8 7H4v-7h8L4 2zm0 14h8l-8 7v-7z" />
        </svg>
      ),
    },
    {
      id: "wix",
      title: "Wix",
      category: "cms",
      desc: "Connect your Wix Studio or Wix Blog. Scheduled releases, structured data, and image alt-tag fixes deployed with 1 click.",
      tags: ["CMS", "Auto-Draft", "SEO Tagging"],
      icon: (
        <span className="text-sm font-black tracking-tight text-white font-sans select-none">
          wix
        </span>
      ),
    },
    {
      id: "hubspot",
      title: "HubSpot",
      category: "cms",
      desc: "Sync blog drafts, landing page variants, and lead capture workflows straight into your HubSpot Marketing Hub.",
      tags: ["CMS", "CRM", "Marketing Hub"],
      icon: (
        <svg viewBox="0 0 24 24" fill="#FF7A59" className="w-6 h-6" aria-hidden="true">
          <path d="M18.8 9.4c0-.9-.7-1.6-1.6-1.6-.2 0-.4 0-.6.1V5.7c.6-.4 1-.9 1-1.7 0-1.1-.9-2-2-2s-2 .9-2 2c0 .7.4 1.3 1 1.7v2.2c-.2-.1-.4-.1-.6-.1-.9 0-1.6.7-1.6 1.6 0 .6.4 1.2 1 1.5v3.4l-2.4 1.4c-.4-.5-1-.8-1.7-.8-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2c1 0 1.9-.7 2.1-1.7l2.5-1.4c.4.4.9.6 1.5.6.9 0 1.6-.7 1.6-1.6 0-.6-.3-1.1-.8-1.4v-3.5c.6-.3.9-.9.9-1.5zm-3.2-6c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-5.7 17.5c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm6.3-8.8c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/>
        </svg>
      ),
    },
    {
      id: "sanity",
      title: "Sanity",
      category: "cms",
      desc: "Structured content management for headless stacks. Post schema documents, rich text blocks, and localized copy in real-time.",
      tags: ["Headless CMS", "JSON-LD", "GraphQL"],
      icon: (
        <svg viewBox="0 0 24 24" fill="#F03E2F" className="w-6 h-6" aria-hidden="true">
          <path d="M19.8 7.3l-1.9-1.2-12.7 8.2 1.9 1.2L19.8 7.3zm-3.3-2.1l-1.9-1.2-8.5 5.5 1.9 1.2 8.5-5.5zm-2.8 11.2l-1.9-1.2-4.5 2.9 1.9 1.2 4.5-2.9z"/>
        </svg>
      ),
    },
    {
      id: "search-console",
      title: "Google Search Console",
      category: "analytics",
      desc: "Okiza pulls daily click, impression, and average position telemetry to spot emerging keyword gaps and ranking opportunities.",
      tags: ["Search Data", "Rankings", "Telemetry"],
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
          <path d="M4 17.5a1.5 1.5 0 0 0 1.5 1.5H8v-5H4v3.5z" fill="#00832d" />
          <path d="M9.5 19H12v-8H9.5v8z" fill="#ffba00" />
          <path d="M13.5 19H16a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-2.5V19z" fill="#0066da" />
          <path d="M4 12.5V8a2 2 0 0 1 2-2h4l-6 6.5z" fill="#2684fc" />
        </svg>
      ),
    },
    {
      id: "analytics",
      title: "Google Analytics 4",
      category: "analytics",
      desc: "Track full-funnel conversion attribution from organic search, LLM answer engines, Reddit leads, and creator campaigns.",
      tags: ["Traffic", "Conversions", "Attribution"],
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
          <path d="M19.5 4h-2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" fill="#F9AB00" />
          <path d="M12.5 10h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" fill="#E37400" />
          <circle cx="5.5" cy="17.5" r="2.5" fill="#E37400" />
        </svg>
      ),
    },
    {
      id: "github",
      title: "GitHub",
      category: "developer",
      desc: "The Coding Agent opens pull requests with technical SEO fixes, schema markups, robots.txt, and metadata additions in your repo.",
      tags: ["Pull Requests", "Code Automation", "CI/CD"],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      category: "social",
      desc: "Post B2B thought leadership, PDF carousel documents, and founder stories. Direct personal profile and company page support.",
      tags: ["Social", "Carousels", "B2B Organic"],
      icon: (
        <div className="w-[24px] h-[24px] rounded-[5px] bg-[#0A66C2] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
          </svg>
        </div>
      ),
    },
    {
      id: "x-twitter",
      title: "X (Twitter)",
      category: "social",
      desc: "Publish viral breakdown threads, real-time product releases, and automated industry commentary with smart scheduling.",
      tags: ["Social", "Threads", "Viral Growth"],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-white shrink-0" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      id: "tiktok",
      title: "TikTok",
      category: "social",
      desc: "Distribute UGC creator clips, product demo videos, and trending short-form ad creatives directly to your TikTok account.",
      tags: ["Short-form Video", "UGC", "Creator Ads"],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.882 2.87 2.896 2.896 0 0 1-2.882-2.87 2.896 2.896 0 0 1 2.882-2.87c.277 0 .543.04.796.115V9.45a6.34 6.34 0 0 0-.796-.051A6.335 6.335 0 0 0 3 15.735a6.335 6.335 0 0 0 6.336 6.337 6.335 6.335 0 0 0 6.336-6.337V8.65a8.21 8.21 0 0 0 4.887 1.585V6.787a4.838 4.838 0 0 1-.97-.101z"/>
        </svg>
      ),
    },
    {
      id: "instagram",
      title: "Instagram",
      category: "social",
      desc: "Deploy Reels, carousel graphics, and community story updates. Sync captions with relevant hashtags automatically generated.",
      tags: ["Social", "Reels", "Visual Feed"],
      icon: (
        <div className="w-[24px] h-[24px] rounded-[6px] bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
      ),
    },
    {
      id: "facebook",
      title: "Facebook",
      category: "social",
      desc: "Syndicate product updates and video assets across your brand pages and groups to drive continuous social discovery.",
      tags: ["Social", "Pages", "Video Sync"],
      icon: (
        <div className="w-[24px] h-[24px] rounded-full bg-[#1877F2] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 translate-y-[0.5px]" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
      ),
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      category: "chat",
      desc: "Receive daily marketing summaries, approve pending article drafts, and review live rankings via direct WhatsApp messaging.",
      tags: ["Chat", "Mobile Alerts", "1-Click Approvals"],
      icon: (
        <div className="w-[24px] h-[24px] rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.13 8.13 0 0 1-1.25-4.29c0-4.51 3.67-8.18 8.19-8.18 2.19 0 4.24.85 5.79 2.4a8.14 8.14 0 0 1 2.4 5.79c0 4.51-3.67 8.18-8.19 8.18zm4.49-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.3z"/>
          </svg>
        </div>
      ),
    },
    {
      id: "telegram",
      title: "Telegram",
      category: "chat",
      desc: "Get instant telemetry pings, high-priority competitor alerts, and approve AI-generated PR drafts directly on Telegram.",
      tags: ["Chat", "Real-Time Bots", "Instant Alerts"],
      icon: (
        <div className="w-[24px] h-[24px] rounded-full bg-[#2AABEE] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 translate-x-[-0.5px]" aria-hidden="true">
            <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.674c.458 0 .66-.21.916-.457l2.199-2.138 4.574 3.379c.843.465 1.45.226 1.66-.782l3.003-14.156c.307-1.23-.469-1.787-1.215-1.467z"/>
          </svg>
        </div>
      ),
    },
  ], []);

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, integrations]);

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      {/* Top sticky navigation bar */}
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION MATCHING SCREENSHOT */}
        <section className="w-full pt-16 pb-12 md:pt-24 md:pb-16 px-4 sm:px-8 lg:px-12 max-w-[1560px] mx-auto flex flex-col">
          {/* Top Row: Two-Column Header matching the user screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
            {/* Left Header */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#a1a1aa] uppercase mb-4">
                <span className="w-2 h-2 bg-[#ffffff] inline-block" />
                STEP 3 — PUBLISH
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[54px] font-semibold text-white tracking-tight leading-[1.08]">
                Connect your stack.
                <br />
                Publish without leaving it.
              </h1>
            </div>

            {/* Right Paragraph */}
            <div className="lg:pt-8">
              <p className="text-base sm:text-lg text-[#a1a1aa] leading-[1.7]">
                Okiza reads your site, Search Console and Analytics, then hands back ready work — GEO and SEO fixes, articles, UGC videos, X and LinkedIn posts. Approve it, and it publishes to WordPress, Webflow, Framer, Wix, HubSpot, Sanity, GitHub, LinkedIn, X (Twitter), TikTok, Instagram, Facebook.
              </p>
            </div>
          </div>

          {/* Interactive Stack Flow Visualizer with SVG lines and animated flow pulses */}
          <div className="w-full bg-[#0a0a0a] border border-[#262626] rounded-[28px] p-2 sm:p-4 lg:p-6 relative overflow-hidden shadow-2xl">
            {/* Subtle background mesh */}
            <div
              className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"
              aria-hidden="true"
            />

            {/* Visualizer component containing exact SVG path and animation lines */}
            <StackFlowDiagram />
          </div>
        </section>

        {/* FULL INTEGRATIONS DIRECTORY SECTION */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1560px] mx-auto border-t border-[#262626]">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1917] border border-[#383332] text-xs font-medium text-[#d4d4d8] mb-3">
                <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
                16 Supported Native Platforms
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Integrations Directory
              </h2>
              <p className="text-sm text-[#a1a1aa] mt-1">
                Zero-code setup. Connect your accounts via secure OAuth or API keys.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#71717a] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter tools..."
                className="w-full pl-9 pr-4 py-2 bg-[#141414] border border-[#262626] rounded-xl text-sm text-white placeholder-[#71717a] focus:outline-none focus:border-[#52525b] transition-colors"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {[
              { id: "all", label: "All Integrations (16)" },
              { id: "cms", label: "CMS & Blogs (6)" },
              { id: "social", label: "Social Media (5)" },
              { id: "analytics", label: "Search & Analytics (2)" },
              { id: "developer", label: "Developer & Code (1)" },
              { id: "chat", label: "Direct Messaging (2)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "bg-[#141414] border border-[#262626] text-[#a1a1aa] hover:text-white hover:border-[#383332]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredIntegrations.map((tool) => {
              const isConnected = connectedPlatforms[tool.id];
              return (
                <div
                  key={tool.id}
                  className="bg-[#141414] border border-[#262626] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#383332] transition-all duration-200 group relative"
                >
                  <div>
                    {/* Header: Icon + Title + Status */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1c1917] border border-[#2e2a28] flex items-center justify-center shrink-0 shadow-inner">
                        {tool.icon}
                      </div>

                      <button
                        onClick={() => toggleConnect(tool.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          isConnected
                            ? "bg-[#14532d]/30 border border-[#22c55e]/40 text-[#4ade80]"
                            : "bg-[#27272a] border border-[#3f3f46] text-[#d4d4d8] hover:bg-[#3f3f46]"
                        }`}
                      >
                        {isConnected ? (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                            Connected
                          </>
                        ) : (
                          <>
                            <Zap className="w-3 h-3 text-[#fbbf24]" />
                            Connect
                          </>
                        )}
                      </button>
                    </div>

                    <h3 className="text-lg font-semibold text-white tracking-tight mb-2 flex items-center gap-2">
                      {tool.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed mb-4">
                      {tool.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[#262626]">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1f1f23] text-[#71717a] border border-[#2e2e33]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3-STEP INTEGRATION ARCHITECTURE */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1560px] mx-auto border-t border-[#262626]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
              How Okiza Connects & Publishes
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
              Closed-loop marketing execution with zero context-switching and 100% human-in-the-loop oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#1f1f23] border border-[#2e2e33] flex items-center justify-center font-mono text-sm font-semibold text-white mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                1-Click Authorisation
              </h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Connect your CMS, code repositories, and social channels in seconds. Okiza uses standard OAuth 2.0 with granular, read/draft scopes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#1f1f23] border border-[#2e2e33] flex items-center justify-center font-mono text-sm font-semibold text-white mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Autonomous Draft Engine
              </h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Okiza continuously detects ranking gaps, crafts brand-voice articles, opens technical PRs, and prepares ready-to-refine social threads.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#1f1f23] border border-[#2e2e33] flex items-center justify-center font-mono text-sm font-semibold text-white mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Instant Publish On Approval
              </h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Review work directly in Okiza or via WhatsApp/Telegram. When you hit approve, the content goes live across your entire stack instantly.
              </p>
            </div>
          </div>
        </section>

        {/* SECURITY & BAN SAFETY ASSURANCE */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1560px] mx-auto border-t border-[#262626]">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#18181b] to-[#0f0f10] border border-[#2e2e33] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#27272a] border border-[#3f3f46] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#4ade80]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                  Enterprise-Grade Security & 100% Ban-Safe
                </h3>
                <p className="text-sm text-[#a1a1aa] max-w-xl leading-relaxed">
                  Okiza never acts without your explicit sign-off. All publishing connects through official platform APIs or authenticated personal profiles with strict rate limits, zero spam bots, and complete audit logging.
                </p>
              </div>
            </div>

            <Link
              href="/#pricing"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-colors shrink-0 flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
