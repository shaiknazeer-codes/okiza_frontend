"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Globe,
  Search,
  PenTool,
  CodeXml,
  MessageSquare,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Check,
  X,
  Bot,
  Users,
  Target,
  BarChart3,
  DollarSign,
  Rocket,
} from "lucide-react";

export default function SaasMarketingAutomationPage() {
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("comparison");
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (website.trim()) {
      setSubmitted(true);
    }
  };

  const sampleWorkflows = {
    comparison: {
      title: "Comparison & Alternative Pages",
      badge: "High-Intent SEO",
      desc: "Autonomously drafts and updates programmatic competitor comparison pages that capture buyers in their final decision phase.",
      items: [
        {
          title: "YourSaaS vs Competitor X: The 2026 Feature Breakdown",
          type: "Comparison Page",
          intent: "96% High-Intent",
          slug: "/compare/yoursaas-vs-competitor-x",
          status: "Ready to Publish",
        },
        {
          title: "Top 7 Alternatives to Legacy Enterprise Tools for Seed Startups",
          type: "Alternatives Guide",
          intent: "92% Buyer Intent",
          slug: "/alternatives/legacy-tools",
          status: "Published to Webflow",
        },
        {
          title: "Why Modern Dev Teams Are Migrating Away from Traditional APMs",
          type: "Migration Playbook",
          intent: "89% Consideration",
          slug: "/migration/modern-devops",
          status: "Draft Approved",
        },
      ],
    },
    geo: {
      title: "Generative Engine Optimization (GEO)",
      badge: "AI Search Radar",
      desc: "Structures site content and schema so your SaaS is recommended when buyers ask ChatGPT, Perplexity, and Claude for software suggestions.",
      items: [
        {
          title: "ChatGPT Citation Check: 'Best marketing automation for B2B SaaS'",
          type: "ChatGPT-4o",
          intent: "#1 Cited Tool",
          slug: "Position 1 · Positive Sentiment",
          status: "92 / 100 Score",
        },
        {
          title: "Perplexity AI Answer: 'Top AI CMO platforms for bootstrapped founders'",
          type: "Perplexity Pro",
          intent: "Direct Source Link",
          slug: "Cited in 4 Follow-up Prompts",
          status: "88 / 100 Score",
        },
        {
          title: "Claude 3.5 Sonnet: 'How to automate early-stage startup organic growth'",
          type: "Claude Sonnet",
          intent: "Primary Recommendation",
          slug: "Source: Product Features & Case Studies",
          status: "84 / 100 Score",
        },
      ],
    },
    community: {
      title: "Community & Intent Radar",
      badge: "Reddit & Social",
      desc: "Finds high-intent discussions on r/SaaS, r/startups, and X where users are actively asking for tool recommendations, drafting authentic replies.",
      items: [
        {
          title: "r/SaaS: 'How do solo founders handle marketing without hiring an agency?'",
          type: "Reddit Reply",
          intent: "142 Active Readers",
          slug: "1-Click Ban-Safe Submission",
          status: "High Priority",
        },
        {
          title: "X (Twitter) Thread: Lessons learned scaling to $50k MRR with 0 ad spend",
          type: "Viral B2B Thread",
          intent: "Founder Brand Voice",
          slug: "Scheduled for Tomorrow 9:00 AM",
          status: "Ready to Refine",
        },
        {
          title: "LinkedIn Carousel: The 4 growth flywheels every Series A SaaS needs",
          type: "PDF Carousel",
          intent: "B2B Decision Makers",
          slug: "Auto-synced with Company Page",
          status: "Approved",
        },
      ],
    },
    technical: {
      title: "Technical SEO & Schema PRs",
      badge: "Coding Agent",
      desc: "Audits your Next.js/React codebase and automatically opens clean GitHub pull requests with structured JSON-LD schemas and metadata.",
      items: [
        {
          title: "feat(seo): inject SoftwareApplication JSON-LD schema across docs",
          type: "GitHub PR #42",
          intent: "Zero Breaking Changes",
          slug: "Branch: okiza/software-schema",
          status: "Passes CI Tests",
        },
        {
          title: "fix(meta): resolve missing dynamic OpenGraph tags on pricing pages",
          type: "GitHub PR #43",
          intent: "Core Web Vitals +12%",
          slug: "Branch: okiza/og-image-fix",
          status: "Ready to Merge",
        },
        {
          title: "perf(crawl): auto-generate updated sitemap.xml with changelog slugs",
          type: "GitHub PR #44",
          intent: "Indexation Boost",
          slug: "Branch: okiza/sitemap-refresh",
          status: "Verified",
        },
      ],
    },
  };

  const costComparison = [
    {
      role: "Demand Generation Lead",
      agencyCost: "$8,500 / mo",
      timeToValue: "3-4 months ramp-up",
      okizaIncludes: true,
    },
    {
      role: "Dedicated SEO Agency",
      agencyCost: "$3,500 / mo",
      timeToValue: "Monthly 50-page PDF audit",
      okizaIncludes: true,
    },
    {
      role: "Technical Content Writer",
      agencyCost: "$2,500 / mo",
      timeToValue: "4 articles / month max",
      okizaIncludes: true,
    },
    {
      role: "Social & Community Manager",
      agencyCost: "$2,000 / mo",
      timeToValue: "Manual scheduling & posting",
      okizaIncludes: true,
    },
  ];

  const faqs = [
    {
      q: "What is marketing automation for SaaS?",
      a: "Marketing automation for SaaS means running your core growth engines — SEO, comparison pages, AI search visibility (GEO), and high-intent community distribution — on autopilot. Instead of marketing stalling whenever your team is in a product sprint, specialized AI agents research, draft, and optimize campaigns continuously in the background.",
    },
    {
      q: "How is Okiza different from traditional tools like HubSpot or Marketo for SaaS?",
      a: "Traditional tools are rule-based systems built around email drip sequences and lead scoring forms. They still require you to write the content, execute technical SEO, and manually find prospects. Okiza is an autonomous AI CMO: it inspects your live website URL, crafts an end-to-end marketing blueprint, and deploys 7 specialized agents to draft comparison pages, open GitHub PRs, and find active buyers on Reddit.",
    },
    {
      q: "Can a non-marketer or solo SaaS founder use Okiza without prior experience?",
      a: "Yes. Okiza is specifically architected for technical founders, product managers, and lean startup teams who don't have marketing backgrounds. You simply enter your website URL; the agent handles keyword gap analysis, competitor audits, and tone ingestion, then hands you 2 ready-to-approve high-impact fixes every day.",
    },
    {
      q: "How does Okiza handle Generative Engine Optimization (GEO)?",
      a: "Modern B2B buyers now research tools on ChatGPT, Perplexity, and Claude before clicking Google links. Okiza's GEO Agent monitors how your product is cited across AI engines, flags competitor visibility gaps, and structures your documentation with clear takeaway summaries and JSON-LD schema so LLMs cite and recommend your SaaS.",
    },
    {
      q: "How quickly do SaaS teams start seeing results?",
      a: "Setup takes under 2 minutes. On Day 1, Okiza runs a complete site audit, maps keyword opportunities against funded competitors, and identifies active Reddit discussions. Daily recommendations compound rapidly — delivering steady organic pipeline while your team stays 100% focused on product engineering.",
    },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      {/* Top sticky navigation bar */}
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION MATCHING B2B SAAS DESIGN */}
        <section className="w-full pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle background ambient radial glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[#38bdf8]/5 blur-[130px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-sans">
              OKIZA AI CMO
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#d4d4d8] font-medium pr-1">
              <Layers className="w-3.5 h-3.5 text-[#38bdf8]" strokeWidth={2} />
              <span>B2B SaaS</span>
            </div>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight max-w-4xl leading-[1.08] mb-6">
            Marketing Automation for SaaS
          </h1>

          {/* Subtitle / Core Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl font-normal leading-relaxed mb-10">
            Marketing always loses to product work. As a SaaS founder you are the CEO, the PM, and the entire marketing department. Every sprint, marketing gets deprioritized — and rankings, followers, and pipeline quietly flatline. Okiza runs your marketing so you can run your product.
          </p>

          {/* Interactive URL Input Box */}
          <div className="w-full max-w-lg mb-4">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <div className="w-full p-1.5 rounded-2xl bg-[#242120] border border-[#383332] flex items-center shadow-2xl focus-within:border-[#52525b] transition-all">
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Enter your SaaS website (e.g. yourproduct.com)"
                  className="w-full bg-transparent px-4 py-2.5 text-sm sm:text-base text-white placeholder-[#71717a] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#d4d4d8] text-black hover:bg-white font-semibold text-xs sm:text-sm tracking-tight transition-all shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          <p className="text-xs text-[#71717a] font-normal">
            7-day free trial · Cancel anytime · Zero credit card required
          </p>

          {submitted && (
            <div className="mt-4 px-4 py-2 rounded-xl bg-[#14532d]/40 border border-[#22c55e]/40 text-[#4ade80] text-xs font-medium flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4" />
              <span>Analyzing SaaS growth vectors for <strong>{website}</strong>... Initial audit report prepared.</span>
            </div>
          )}
        </section>

        {/* INTERACTIVE PRODUCT DEMO & FLYWHEEL SHOWCASE */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[#262626]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#a1a1aa] mb-3">
              Autonomous Growth Engine
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              One URL In. Continuous SaaS Pipeline Out.
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mt-2">
              Okiza reads your product positioning, compares you against funded competitors, and executes across all key channels.
            </p>
          </div>

          {/* Workflow Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: "comparison", label: "Comparison Pages", icon: Search },
              { id: "geo", label: "AI Search (GEO)", icon: Globe },
              { id: "community", label: "Reddit & Community", icon: MessageSquare },
              { id: "technical", label: "Code & Schema PRs", icon: CodeXml },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white text-black font-semibold shadow-md"
                      : "bg-[#141414] border border-[#262626] text-[#a1a1aa] hover:text-white hover:border-[#383332]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Preview Card */}
          <div className="bg-[#141414] border border-[#262626] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#262626]">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#1c1917] border border-[#383332] text-[11px] font-mono text-[#38bdf8] mb-2">
                  <Sparkles className="w-3 h-3" />
                  {sampleWorkflows[activeTab].badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  {sampleWorkflows[activeTab].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1 max-w-2xl leading-relaxed">
                  {sampleWorkflows[activeTab].desc}
                </p>
              </div>

              <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-[#1c1917] text-[#a1a1aa] border border-[#2e2a28] shrink-0">
                Refreshed Every 6 Hours
              </span>
            </div>

            {/* List of deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {sampleWorkflows[activeTab].items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1917] border border-[#2e2a28] rounded-2xl p-5 flex flex-col justify-between hover:border-[#52525b] transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#71717a] font-mono mb-3">
                      <span>{item.type}</span>
                      <span className="text-[#4ade80] font-semibold">{item.intent}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight mb-2 group-hover:text-[#38bdf8] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#a1a1aa] font-mono truncate mb-4">
                      {item.slug}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#262626] text-xs">
                    <span className="text-[#a1a1aa]">{item.status}</span>
                    <span className="text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium">
                      Inspect <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SAAS MARKETING FAILS WITHOUT AUTOMATION */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[#262626]">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#a1a1aa] mb-3">
              The Founder Dilemma
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Why SaaS Marketing Always Loses to Product Work
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mt-2">
              Building a world-class product takes 100% of your focus. Marketing becomes an afterthought until pipeline dries up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#141414] border border-[#262626] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#242120] border border-[#383332] flex items-center justify-center text-[#fb7185] mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                  The Deprioritization Trap
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  As a founder, you are the CEO, head engineer, and customer support. Whenever sprint deadlines hit, marketing tasks get moved to the next week. Rankings and organic pipeline quietly flatline.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#262626] text-xs font-mono text-[#71717a]">
                Result: Sporadic, non-compounding growth
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#141414] border border-[#262626] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#242120] border border-[#383332] flex items-center justify-center text-[#fbbf24] mb-5">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                  The Endless Content Treadmill
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  Modern SaaS SEO requires constant production: comparison pages, alternative breakdowns, integration docs, and changelogs. Doing this manually burns hours you don&apos;t have.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#262626] text-xs font-mono text-[#71717a]">
                Result: Funded competitors out-publish you 10 to 1
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#141414] border border-[#262626] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#242120] border border-[#383332] flex items-center justify-center text-[#38bdf8] mb-5">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                  The AI Search (GEO) Blindspot
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  B2B software buyers increasingly start their evaluations inside ChatGPT, Perplexity, and Claude. If your SaaS isn&apos;t structured for AI citations, you are invisible to high-intent buyers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#262626] text-xs font-mono text-[#71717a]">
                Result: Missing 50%+ of new software buyer queries
              </div>
            </div>
          </div>
        </section>

        {/* HEADCOUNT COST COMPARISON TABLE */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[#262626]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#a1a1aa] mb-3">
              Cost & Resource Comparison
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Hiring Does Not Scale at Your Stage
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mt-2 leading-relaxed">
              Assembling an in-house demand-gen department costs $16,500+ per month before seeing a single dollar in pipeline. Okiza runs the same playbook with AI agents for $129/mo.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#262626] bg-[#1c1917]/80 text-[#71717a] font-mono text-xs uppercase">
                    <th className="py-4 px-6">Marketing Function</th>
                    <th className="py-4 px-6">Traditional Agency / Hire</th>
                    <th className="py-4 px-6">Time-to-Value</th>
                    <th className="py-4 px-6 text-right">With Okiza AI CMO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]">
                  {costComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-white">
                        {row.role}
                      </td>
                      <td className="py-4 px-6 text-[#fb7185] font-mono">
                        {row.agencyCost}
                      </td>
                      <td className="py-4 px-6 text-[#a1a1aa]">
                        {row.timeToValue}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14532d]/40 text-[#4ade80] text-xs font-medium border border-[#22c55e]/30">
                          <Check className="w-3.5 h-3.5" />
                          Included in Okiza
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#18181b]/90 font-semibold text-base">
                    <td className="py-5 px-6 text-white font-mono uppercase text-xs">
                      Total Monthly Spend
                    </td>
                    <td className="py-5 px-6 text-[#fb7185] font-mono text-lg font-bold">
                      $16,500+ / mo
                    </td>
                    <td className="py-5 px-6 text-xs text-[#71717a]">
                      Recruiting delays &amp; agency lock-in
                    </td>
                    <td className="py-5 px-6 text-right text-[#4ade80] font-mono text-xl font-bold">
                      $129 / mo
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* THE 3-STEP AUTONOMOUS SAAS FLYWHEEL */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[#262626]">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#a1a1aa] mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Set It Up Once. The Flywheel Runs 24/7.
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mt-2">
              From URL ingestion to daily fixes and auto-publishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#141414] border border-[#262626] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#242120] text-[#38bdf8] border border-[#383332] mb-4 inline-block">
                  STEP 01
                </span>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                  Connect Your SaaS URL
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  Okiza scans your product features, documentation, pricing tiers, and ideal customer profile (ICP). It constructs your unique brand graph and growth roadmap in under 2 minutes.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#141414] border border-[#262626] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#242120] text-[#c084fc] border border-[#383332] mb-4 inline-block">
                  STEP 02
                </span>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                  Competitor &amp; Gap Radar
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  The agents audit your domain against rivals, identify low-hanging organic keywords, detect AI answer engine gaps on ChatGPT and Perplexity, and flag active buyer threads on Reddit.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#141414] border border-[#262626] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#242120] text-[#4ade80] border border-[#383332] mb-4 inline-block">
                  STEP 03
                </span>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                  Daily Autonomous Execution
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  Every morning, Okiza delivers 2 high-impact ready-to-merge actions: comparison articles published to Webflow, technical schema PRs on GitHub, or authentic replies on buyer threads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS & PROVEN SAAS IMPACT */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[#262626]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] text-center">
              <span className="text-3xl sm:text-5xl font-bold text-white font-mono">10x</span>
              <p className="text-xs sm:text-sm text-[#a1a1aa] mt-2">ROI vs Paid Search &amp; Meta Ads</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] text-center">
              <span className="text-3xl sm:text-5xl font-bold text-white font-mono">+184%</span>
              <p className="text-xs sm:text-sm text-[#a1a1aa] mt-2">Organic Pipeline Growth in 90 Days</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] text-center">
              <span className="text-3xl sm:text-5xl font-bold text-white font-mono">2 / day</span>
              <p className="text-xs sm:text-sm text-[#a1a1aa] mt-2">Ready-to-Ship Content &amp; PR Fixes</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] text-center">
              <span className="text-3xl sm:text-5xl font-bold text-white font-mono">$0</span>
              <p className="text-xs sm:text-sm text-[#a1a1aa] mt-2">Agency Retainers or Headcount</p>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[#262626]">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#a1a1aa] mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-[#262626] border-y border-[#262626]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-lg sm:text-xl font-medium text-white group-hover:text-[#38bdf8] transition-colors pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#a1a1aa] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-white" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-sm sm:text-base text-[#a1a1aa] leading-relaxed pr-8 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL CONVERSION CALL TO ACTION */}
        <section className="w-full py-20 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[#262626]">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#1c1917] to-[#121110] border border-[#383332] text-center flex flex-col items-center relative overflow-hidden shadow-2xl">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#38bdf8]/10 blur-[100px] rounded-full pointer-events-none"
              aria-hidden="true"
            />

            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl leading-tight mb-4">
              Stop Letting Marketing Lose to Product Work.
            </h2>
            <p className="text-base sm:text-lg text-[#a1a1aa] max-w-xl leading-relaxed mb-8">
              Put your SaaS pipeline on autopilot. 7 specialized AI agents running daily SEO, comparison pages, and AI engine citations for $129/mo.
            </p>

            <Link
              href="/#pricing"
              className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all flex items-center gap-2 shadow-xl hover:scale-105"
            >
              <span>Start 7-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="text-xs text-[#71717a] mt-4 font-mono">
              Setup takes 2 minutes · No agency lock-in · 100% human-in-the-loop
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
