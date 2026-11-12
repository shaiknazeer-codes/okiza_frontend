"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Bot,
  Send,
  Terminal,
  Globe,
  Share2,
} from "lucide-react";

export default function McpHeroSection() {
  const [copied, setCopied] = useState(false);
  const [activePlatform, setActivePlatform] = useState("chatgpt");
  const [showHowModal, setShowHowModal] = useState(false);

  const mcpUrl = "https://okiza.ai/api/mcp";

  const handleCopy = () => {
    navigator.clipboard.writeText(mcpUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const platforms = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-400">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3428 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3428 7.8956zm16.0993 3.8558L12.5907 8.3829 14.6108 7.22a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6726a.79.79 0 0 0-.3935-.6915zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6617zM13.006 12.02l-2.8812-1.6625 2.8812-1.6626 2.8812 1.6626z"/>
        </svg>
      ),
    },
    {
      id: "claude",
      name: "Claude",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#d97706]">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/>
        </svg>
      ),
    },
    {
      id: "grok",
      name: "Grok",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      id: "muse",
      name: "Muse",
      icon: (
        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-400 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
        </div>
      ),
    },
    {
      id: "codex",
      name: "Codex",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-cyan-400">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      id: "cursor",
      name: "Cursor",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
          <path d="M4 3l16 9-8 2-2 8z"/>
        </svg>
      ),
    },
  ];

  const chatPreviews = {
    chatgpt: {
      prompt: "Okiza, check our GEO answer visibility on ChatGPT and draft today's 2 ready-to-ship fixes.",
      response:
        "Analyzing your domain across ChatGPT, Perplexity, Claude, and Gemini... Your GEO Visibility is 78%. Competitors currently win 4 comparison queries. Here are your 2 ready-to-ship fixes with code patches ready to deploy:",
      fixes: [
        {
          tag: "CRITICAL • SCHEMA",
          title: "Add SoftwareApplication JSON-LD to /pricing",
          action: "Deploying code patch via Coding Agent...",
        },
        {
          tag: "HIGH • CONTENT",
          title: "Missing comparison query for 'Best AI CMO Tool'",
          action: "Drafted 1,400-word authoritative guide for approval...",
        },
      ],
    },
    claude: {
      prompt: "Okiza, write an in-depth breakdown comparing our product against Jira and publish to Webflow.",
      response:
        "Drafted a high-converting comparison article in your exact brand voice. Outlines 4 critical speed benchmarks and embeds interactive workflow GIF snippets. Ready for your 1-click approval to publish to Webflow CMS.",
      fixes: [
        {
          tag: "CONTENT DRAFT",
          title: "Why Modern Teams Are Migrating From Jira in 2025",
          action: "Pending approval in Webflow queue...",
        },
      ],
    },
    grok: {
      prompt: "Find active discussions about AI marketing automation on X and draft an authoritative founder reply.",
      response:
        "Discovered 3 viral threads with 180k+ combined impressions discussing automated SEO. Drafted a high-signal value-first reply ready to send:",
      fixes: [
        {
          tag: "VIRAL X THREAD",
          title: "Reply to @paulg on autonomous agents vs marketing agencies",
          action: "Ready in your X Agent queue...",
        },
      ],
    },
    muse: {
      prompt: "Okiza, generate UGC video script briefs for our new product launch on TikTok and Instagram Reels.",
      response:
        "Generated 3 high-converting hook variants and creator storyboard briefs optimized for sub-30s ad retention. Influencer Agent has matched 8 pre-vetted creators ready for outreach.",
      fixes: [
        {
          tag: "UGC VIDEO BRIEF",
          title: "Hook: 'Stop paying $15k agency retainers for marketing'",
          action: "Delivered to creator portal...",
        },
      ],
    },
    codex: {
      prompt: "Audit our repository technical SEO and open a Pull Request with fixes.",
      response:
        "Connected to GitHub repo `main` branch. Audited 32 routes. Generated Pull Request #48 containing structured FAQ schema, canonical redirects, and dynamic sitemap generation.",
      fixes: [
        {
          tag: "GITHUB PULL REQUEST",
          title: "PR #48: Technical SEO & OpenGraph metadata optimizations",
          action: "Branch `okiza/seo-fixes-2025` open for review...",
        },
      ],
    },
    cursor: {
      prompt: "@okiza optimize all meta descriptions and robots.txt in our workspace.",
      response:
        "Scanning local codebase... Found 14 pages without dynamic meta descriptions. Generated optimized TypeScript utility with Next.js Metadata API drop-in replacement.",
      fixes: [
        {
          tag: "CODEPATCH",
          title: "app/layout.js: Updated dynamic metadata generator",
          action: "Applied directly to local workspace...",
        },
      ],
    },
  };

  const preview = chatPreviews[activePlatform] || chatPreviews.chatgpt;

  return (
    <section className="relative w-full pt-16 md:pt-24 pb-20 px-6 md:px-12 bg-[#000000] text-center overflow-hidden border-b border-[#262626]">
      {/* Subtle Background Pattern matching reference */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Top Dual Badge: OKIZA AI CMO | MCP */}
        <div className="inline-flex items-center rounded-full border border-[#383332] bg-[#1a1716] p-0.5 shadow-sm mb-8">
          <span className="px-3 py-1 rounded-full bg-[#f5f5f4] text-[#1c1917] text-[11px] font-mono font-bold tracking-wider uppercase">
            OKIZA AI CMO
          </span>
          <span className="px-2.5 py-1 text-[11px] font-mono text-[#a8a29e] font-semibold tracking-wider uppercase">
            MCP
          </span>
        </div>

        {/* Big Bold Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-[-0.03em] leading-[1.08] mb-6 max-w-3xl">
          Your AI CMO, inside
          <br className="hidden sm:inline" /> the chat you already use
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl mb-10">
          Connect Okiza to ChatGPT, Claude, Grok or Muse in a minute. Then just
          ask: write posts, check your SEO, find Reddit threads, without leaving
          the chat.
        </p>

        {/* MCP Connection Box */}
        <div className="w-full max-w-xl mx-auto mb-3">
          <div className="flex items-center justify-between rounded-2xl border border-[#27272a] bg-[#141414] p-1.5 pl-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] focus-within:border-[#52525b] transition-all">
            <div className="flex items-center gap-2.5 min-w-0 flex-1 mr-2">
              <span className="text-[#71717a] text-sm shrink-0 font-mono">🔗</span>
              <span className="font-mono text-xs sm:text-sm text-[#e4e4e7] truncate select-all">
                {mcpUrl}
              </span>
              <button
                onClick={handleCopy}
                title="Copy MCP endpoint"
                className="text-[#71717a] hover:text-white transition-colors p-1 rounded shrink-0 cursor-pointer"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-[#e4e4e7] transition-all shrink-0 flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>{copied ? "Copied Link!" : "Connect Okiza"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Helper Note */}
        <p className="text-xs text-[#71717a] mb-10">
          Paste the link into ChatGPT, Claude, Grok, Muse or Cursor.{" "}
          <button
            onClick={() => setShowHowModal(true)}
            className="text-[#a1a1aa] hover:text-white underline underline-offset-4 cursor-pointer"
          >
            See how
          </button>
        </p>

        {/* Platform Selector Pill Bar */}
        <div className="inline-flex items-center flex-wrap justify-center gap-1 p-1.5 rounded-full border border-[#27272a] bg-[#141414]/90 backdrop-blur-md shadow-lg mb-8">
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlatform(p.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activePlatform === p.id
                  ? "bg-[#27272a] text-white shadow-sm font-semibold"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              {p.icon}
              <span>{p.name}</span>
            </button>
          ))}
        </div>

        {/* Live Chat Mockup preview of Okiza inside the selected chat platform */}
        <div className="w-full max-w-2xl mx-auto rounded-2xl border border-[#27272a] bg-[#0f0e0d] p-5 md:p-6 text-left shadow-2xl transition-all">
          {/* Chat header */}
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#262626]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-white capitalize">
                {activePlatform} • Okiza MCP Connected
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#71717a]">
              Model Context Protocol (Active)
            </span>
          </div>

          {/* User message */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-6 h-6 rounded-full bg-[#27272a] flex items-center justify-center text-[10px] text-white font-bold shrink-0">
              U
            </div>
            <div className="p-3 rounded-xl bg-[#1c1a19] text-xs text-[#ededed] leading-relaxed max-w-md">
              {preview.prompt}
            </div>
          </div>

          {/* Okiza agent response */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-black shrink-0">
              O
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
                {preview.response}
              </p>

              <div className="space-y-2">
                {preview.fixes.map((fix, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-[#27272a] bg-[#161514] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#4ade80] font-semibold block mb-0.5">
                        {fix.tag}
                      </span>
                      <span className="text-xs font-semibold text-white">
                        {fix.title}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#71717a] shrink-0 font-mono">
                      {fix.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "See How" Modal */}
      {showHowModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#141414] border border-[#27272a] rounded-2xl max-w-md w-full p-6 text-left shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white">
                How to Connect Okiza via MCP
              </h3>
              <button
                onClick={() => setShowHowModal(false)}
                className="text-[#71717a] hover:text-white p-1 rounded cursor-pointer"
              >
                ✕
              </button>
            </div>
            <ol className="space-y-3 text-xs text-[#a1a1aa] mb-6 list-decimal list-inside leading-relaxed">
              <li>Copy your Okiza MCP URL: <code className="text-white bg-[#262626] px-1.5 py-0.5 rounded font-mono">https://okiza.ai/api/mcp</code></li>
              <li>Open your favorite chat client (ChatGPT desktop, Claude desktop, Grok, or Cursor).</li>
              <li>Navigate to Settings &rarr; Developer &rarr; Model Context Protocol (MCP).</li>
              <li>Click &ldquo;Add New Server&rdquo; and paste your URL.</li>
              <li>Start typing your marketing requests directly in the chat!</li>
            </ol>
            <button
              onClick={() => {
                handleCopy();
                setShowHowModal(false);
              }}
              className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-[#e4e4e7] transition-all cursor-pointer"
            >
              Copy MCP Link & Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

