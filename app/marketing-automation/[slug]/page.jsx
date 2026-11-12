"use client";

import { useState, use } from "react";
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
  Bot,
  Users,
  Target,
  BarChart3,
  DollarSign,
  Rocket,
  Store,
  Building2,
  HeartPulse,
  UserPlus,
  Utensils,
  Scale,
  Briefcase,
  ShoppingBag,
} from "lucide-react";

const verticalData = {
  startups: {
    title: "Marketing Automation for Startups",
    tag: "STARTUPS",
    icon: Rocket,
    iconColor: "text-[#fbbf24]",
    h1: "Marketing That Runs While You Build",
    subhead:
      "Connect your site. Okiza reads it, builds a custom strategy, and executes across every channel that matters for startups — SEO, content, Reddit, and AI search — without burning your seed round on agencies.",
    metrics: [
      { value: "10x", label: "ROI vs Paid Search & Ads" },
      { value: "+210%", label: "Early User Discovery Lift" },
      { value: "2 / day", label: "Fixes & Content Shipped" },
      { value: "$0", label: "Agency Retainers Burned" },
    ],
    features: [
      {
        title: "Seed Stage ICP & Competitor Radar",
        desc: "Analyzes early customer signals, spots competitor weaknesses, and prioritizes low-hanging organic keywords you can win immediately.",
      },
      {
        title: "High-Intent Reddit & Community Ingestion",
        desc: "Finds prospective users asking for tool recommendations on Reddit and Hacker News, drafting nuanced founder replies that drive trial signups.",
      },
      {
        title: "Generative Engine Optimization (GEO)",
        desc: "Ensures your startup is cited by ChatGPT, Perplexity, and Claude when early adopters ask for recommendations in your product category.",
      },
    ],
  },
  ecommerce: {
    title: "Marketing Automation for Ecommerce",
    tag: "ECOMMERCE",
    icon: ShoppingBag,
    iconColor: "text-[#f472b6]",
    h1: "Your Whole Store's Marketing, on Autopilot",
    subhead:
      "Stop burning all your margins on Meta and Google Ads. Okiza automates product comparison guides, gifting articles, long-tail search rank, and social creator briefs directly from your product catalog.",
    metrics: [
      { value: "3.4x", label: "Lower Customer Acquisition Cost" },
      { value: "+168%", label: "Organic Store Traffic" },
      { value: "100%", label: "Automated Catalog SEO" },
      { value: "24/7", label: "Autonomous Creator Matching" },
    ],
    features: [
      {
        title: "Catalog-Wide Long-Tail SEO",
        desc: "Generates high-converting collection descriptions, gift guides, and buyer comparison pages that rank on Google search.",
      },
      {
        title: "UGC Video Briefs & Creator Matching",
        desc: "Identifies trending TikTok and Reels product angles, drafting storyboard briefs and matching verified creators to produce ad clips.",
      },
      {
        title: "AI Product Recommendation Citations",
        desc: "Structures product schema and reviews so generative AI shopping engines cite your store when shoppers ask for gifts and alternatives.",
      },
    ],
  },
  agencies: {
    title: "Marketing Automation for Digital Agencies",
    tag: "DIGITAL AGENCIES",
    icon: Users,
    iconColor: "text-[#60a5fa]",
    h1: "Grow Without Growing Your Headcount",
    subhead:
      "Give every client a complete autonomous marketing team without hiring more people. Automate your agency's internal case studies, SEO, and LinkedIn thought-leadership — or scale client deliverables white-label.",
    metrics: [
      { value: "5x", label: "More Client Accounts per Team" },
      { value: "-72%", label: "Production Overhead" },
      { value: "100%", label: "White-Label Ready" },
      { value: "$77.40", label: "Per-Site Volume Scaling" },
    ],
    features: [
      {
        title: "The Cobbler's Shoes Solved",
        desc: "Never let your agency's own marketing slide during client crunch weeks. Okiza keeps your agency blog, case studies, and LinkedIn buzzing.",
      },
      {
        title: "White-Label Client Account Management",
        desc: "Deploy autonomous SEO, content, and social fleets across multiple client workspaces with centralized multi-tenant controls.",
      },
      {
        title: "Instant Case Study Synthesis",
        desc: "Converts client campaign milestones and analytics screenshots into polished thought-leadership articles and viral case studies.",
      },
    ],
  },
  services: {
    title: "Marketing Automation for Professional Services",
    tag: "PROFESSIONAL SERVICES",
    icon: Briefcase,
    iconColor: "text-[#a78bfa]",
    h1: "Turn Expertise Into Inbound Demand",
    subhead:
      "Stop relying on unpredictable word-of-mouth. Okiza captures high-intent searches, drafts authoritative long-form insights in your brand voice, and positions your firm as the obvious market leader.",
    metrics: [
      { value: "8.2x", label: "More High-Ticket Inquiries" },
      { value: "+145%", label: "Authority Search Impressions" },
      { value: "0 hrs", label: "Wasted Writing Time" },
      { value: "100%", label: "Brand Voice Alignment" },
    ],
    features: [
      {
        title: "Thought Leadership on Autopilot",
        desc: "Transforms your firm's core methodologies and case outcomes into weekly LinkedIn carousels and industry whitepapers.",
      },
      {
        title: "Niche Service Area Dominance",
        desc: "Captures buyers searching for specialized consultants, tax strategists, or advisory experts at the exact moment of need.",
      },
      {
        title: "Closed-Loop Lead Attribution",
        desc: "Tracks inbound consultations from organic search, AI engine citations, and executive LinkedIn connections.",
      },
    ],
  },
  "small-business": {
    title: "Marketing Automation for Small Business",
    tag: "SMALL BUSINESS",
    icon: Store,
    iconColor: "text-[#34d399]",
    h1: "Marketing Without the Payroll Headcount",
    subhead:
      "Run the same enterprise-grade organic marketing playbook as funded competitors for a fraction of the cost. Full-funnel SEO, Google Maps authority, and social updates on autopilot.",
    metrics: [
      { value: "12x", label: "Cheaper Than Agency Retainers" },
      { value: "+175%", label: "Local & Organic Discovery" },
      { value: "2 / day", label: "Managed Growth Actions" },
      { value: "100%", label: "Zero-Code Setup" },
    ],
    features: [
      {
        title: "Local & Regional Search Domination",
        desc: "Ranks your business for high-intent customer searches without needing an in-house digital marketer or expensive consultant.",
      },
      {
        title: "Customer Review & Social Sync",
        desc: "Drafts and schedules weekly social posts and Google Business updates that keep your company visible and trusted.",
      },
      {
        title: "1-Click Approvals via WhatsApp",
        desc: "Review daily recommendations and publish articles or updates directly from your phone in under 30 seconds.",
      },
    ],
  },
  "real-estate": {
    title: "Marketing Automation for Real Estate",
    tag: "REAL ESTATE",
    icon: Building2,
    iconColor: "text-[#38bdf8]",
    h1: "Listings and Buyer Demand on Autopilot",
    subhead:
      "Dominate local neighborhood search, publish automated property buyer guides, and syndicate video walkthrough clips across social channels while you close deals.",
    metrics: [
      { value: "4.8x", label: "More Listing Inquiries" },
      { value: "#1", label: "Neighborhood Search Rank" },
      { value: "24h", label: "Turnaround per Listing" },
      { value: "$0", label: "Wasted Agency Spend" },
    ],
    features: [
      {
        title: "Hyper-Local Neighborhood Guides",
        desc: "Autonomously drafts school guides, neighborhood market trends, and relocation articles that capture active home buyers.",
      },
      {
        title: "Short-Form Video & Social Scripts",
        desc: "Converts property specs into TikTok, Reels, and YouTube Shorts scripts that showcase your listings with viral pacing.",
      },
      {
        title: "AI Search Recommendation Authority",
        desc: "Ensures your agency is the top cited real estate brand when buyers ask ChatGPT or Perplexity for local realtors.",
      },
    ],
  },
  "financial-advisors": {
    title: "Marketing Automation for Financial Advisors",
    tag: "FINANCIAL ADVISORS",
    icon: TrendingUp,
    iconColor: "text-[#4ade80]",
    h1: "Compliant Content, More Inbound Referrals",
    subhead:
      "Build trust with high-net-worth clients without spending hours writing. Strict compliance-aware SEO articles, retirement guides, and LinkedIn authority posts on autopilot.",
    metrics: [
      { value: "9.2x", label: "Higher Qualified Inbound Leads" },
      { value: "100%", label: "Compliance & Tone Verification" },
      { value: "+230%", label: "LinkedIn Authority Reach" },
      { value: "0 hrs", label: "Burned on Manual Drafting" },
    ],
    features: [
      {
        title: "Compliance-First Drafting",
        desc: "Built-in regulatory safety filters verify disclaimers and tone for SEC and FINRA alignment before presenting drafts for review.",
      },
      {
        title: "High-Net-Worth Persona Targeting",
        desc: "Drafts comprehensive wealth preservation, equity compensation, and tax-efficiency guides that resonate with affluent buyers.",
      },
      {
        title: "Executive LinkedIn Storytelling",
        desc: "Shares market commentary and financial advisory lessons that convert corporate executives and business owners into clients.",
      },
    ],
  },
  healthcare: {
    title: "Marketing Automation for Healthcare",
    tag: "HEALTHCARE",
    icon: HeartPulse,
    iconColor: "text-[#f87171]",
    h1: "Fill the Calendar with High-Value Patients",
    subhead:
      "Own local clinical search, medical condition FAQs, and practice visibility across Google and modern AI answer engines without taking clinicians away from patients.",
    metrics: [
      { value: "6.5x", label: "More Consultations Booked" },
      { value: "#1", label: "Local Clinical Search Share" },
      { value: "99.8%", label: "Medical Accuracy Alignment" },
      { value: "24/7", label: "Patient FAQ Coverage" },
    ],
    features: [
      {
        title: "Condition & Treatment FAQ Hubs",
        desc: "Answers common patient queries with clear, empathetic, medically verified information that ranks on Google and AI engines.",
      },
      {
        title: "Local Medical Practice Dominance",
        desc: "Optimizes clinic locations, doctor credentials, and service pages to ensure nearby patients choose your practice first.",
      },
      {
        title: "Patient Trust & Privacy First",
        desc: "Zero patient data exposure. Marketing automation strictly focuses on educational outreach, clinic awareness, and discovery.",
      },
    ],
  },
  recruiters: {
    title: "Marketing Automation for Recruiters",
    tag: "RECRUITERS",
    icon: UserPlus,
    iconColor: "text-[#c084fc]",
    h1: "Build a Talent Brand Candidates Trust",
    subhead:
      "Attract passive top-tier candidates and enterprise hiring managers with automated industry salary guides, hiring market reports, and executive LinkedIn posts.",
    metrics: [
      { value: "7.4x", label: "More Passive Candidate Inbound" },
      { value: "+320%", label: "Recruiter Brand Reach" },
      { value: "15+", label: "Viral Market Reports / Mo" },
      { value: "100%", label: "Ban-Safe Native Delivery" },
    ],
    features: [
      {
        title: "Salary & Hiring Benchmark Reports",
        desc: "Autonomously drafts industry compensation breakdowns and hiring trends that position your agency as the premier staffing authority.",
      },
      {
        title: "LinkedIn Ghostwriting for Recruiters",
        desc: "Generates daily founder stories, interview tips, and job opportunity highlights tailored to senior candidates.",
      },
      {
        title: "Client Acquisition Inbound Funnel",
        desc: "Captures enterprise HR leaders and founders searching for specialized staffing agencies across technical and executive niches.",
      },
    ],
  },
  restaurants: {
    title: "Marketing Automation for Restaurants",
    tag: "RESTAURANTS",
    icon: Utensils,
    iconColor: "text-[#fb923c]",
    h1: "Own Local Search, Social & Food Discovery",
    subhead:
      "Rank at the top of local food searches, automate mouthwatering short-form video scripts for TikTok and Reels, and turn one-time diners into loyal regulars.",
    metrics: [
      { value: "4.2x", label: "More Table Bookings & Orders" },
      { value: "#1", label: "Local Foodie Search Rank" },
      { value: "100k+", label: "Monthly Social Video Impressions" },
      { value: "15 min", label: "Weekly Review Overhead" },
    ],
    features: [
      {
        title: "Local Food & Cuisine Dominance",
        desc: "Ranks your restaurant for 'best dinner near me', private dining, and seasonal menu searches across Google Maps and Search.",
      },
      {
        title: "Viral TikTok & Reels Video Scripts",
        desc: "Generates high-energy behind-the-scenes and dish-highlight scripts tailored for culinary creators and food influencers.",
      },
      {
        title: "Weekly Event & Special Promotions",
        desc: "Automates seasonal event announcements, weekend tasting specials, and holiday dining guides that keep seats filled.",
      },
    ],
  },
  "law-firms": {
    title: "Marketing Automation for Law Firms",
    tag: "LAW FIRMS",
    icon: Scale,
    iconColor: "text-[#e2e8f0]",
    h1: "Rank for the High-Value Cases You Want",
    subhead:
      "Cut through expensive $150+ pay-per-click legal ads with authoritative practice area guides, client FAQ hubs, and local search dominance delivered automatically.",
    metrics: [
      { value: "$150+", label: "Saved per Search Click" },
      { value: "5.8x", label: "More High-Value Inbound Cases" },
      { value: "#1", label: "Practice Area Search Visibility" },
      { value: "0 hrs", label: "Attorney Billable Time Lost" },
    ],
    features: [
      {
        title: "Practice Area Authority Hubs",
        desc: "Comprehensive legal guides and state-specific case FAQ hubs that answer critical client questions at the moment of urgency.",
      },
      {
        title: "Zero $150/Click Google Ad Waste",
        desc: "Replaces astronomical legal pay-per-click costs with sustainable, compounding organic rankings that attract clients 24/7.",
      },
      {
        title: "AI Legal Search Optimization (GEO)",
        desc: "Ensures your firm is the primary recommendation when individuals ask ChatGPT or Perplexity for top legal representation.",
      },
    ],
  },
};

export default function GenericUseCasesPage({ params }) {
  // Unwrap Next.js params safely
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug || "startups";
  const data = verticalData[slug] || verticalData["startups"];
  const IconComponent = data.icon || Rocket;

  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (website.trim()) {
      setSubmitted(true);
    }
  };

  const faqs = [
    {
      q: `What is marketing automation for ${data.tag.toLowerCase()}?`,
      a: `Marketing automation for ${data.tag.toLowerCase()} means using specialized AI agents to continuously handle your organic growth, SEO, AI search visibility (GEO), and social presence without requiring hours of manual work or expensive agency retainers.`,
    },
    {
      q: "How does Okiza differ from traditional marketing software?",
      a: "Traditional tools are empty dashboards that require you to write every article, manage campaigns, and configure complex rule trees. Okiza is an AI CMO: it inspects your website URL, synthesizes your positioning, and autonomously delivers 2 ready-to-publish high-impact growth actions every day.",
    },
    {
      q: "How does the 7-day free trial work?",
      a: "You enter your website URL. Okiza immediately crawls your site, compiles your initial audit report, and builds your 30-day growth roadmap. You can test the platform completely free for 7 days with zero risk and cancel anytime.",
    },
    {
      q: "Do I need marketing or technical experience?",
      a: "None. Okiza is built specifically for busy founders, operators, and professionals. Every action includes a 1-click preview and approval workflow so you maintain 100% control with zero technical effort.",
    },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      {/* Top sticky navigation bar */}
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION */}
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
              <IconComponent className={`w-3.5 h-3.5 ${data.iconColor}`} strokeWidth={2} />
              <span>{data.tag}</span>
            </div>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight max-w-4xl leading-[1.08] mb-6">
            {data.h1}
          </h1>

          {/* Subtitle / Core Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl font-normal leading-relaxed mb-10">
            {data.subhead}
          </p>

          {/* Interactive URL Input Box */}
          <div className="w-full max-w-lg mb-4">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <div className="w-full p-1.5 rounded-2xl bg-[#242120] border border-[#383332] flex items-center shadow-2xl focus-within:border-[#52525b] transition-all">
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Enter your website URL (e.g. yourbrand.com)"
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
              <span>Analyzing growth vectors for <strong>{website}</strong>... Initial audit report prepared.</span>
            </div>
          )}
        </section>

        {/* METRICS & PROVEN IMPACT */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[#262626]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {data.metrics.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#141414] border border-[#262626] text-center">
                <span className="text-3xl sm:text-5xl font-bold text-white font-mono">{m.value}</span>
                <p className="text-xs sm:text-sm text-[#a1a1aa] mt-2">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CORE INDUSTRY CAPABILITIES */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[#262626]">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#a1a1aa] mb-3">
              Industry Playbook
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Built Specifically for {data.tag}
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mt-2">
              Autonomous execution tailored to your exact industry workflows, audience queries, and competitive dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.features.map((f, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#141414] border border-[#262626] flex flex-col justify-between hover:border-[#383332] transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#242120] border border-[#383332] flex items-center justify-center text-[#38bdf8] mb-5">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#262626] text-xs font-mono text-[#71717a]">
                  Continuous daily execution
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3-STEP AUTONOMOUS FLYWHEEL */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[#262626]">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#a1a1aa] mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Set It Up Once. The Flywheel Runs 24/7.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#141414] border border-[#262626]">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#242120] text-[#38bdf8] border border-[#383332] mb-4 inline-block">
                STEP 01
              </span>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Connect Your URL
              </h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Okiza crawls your product offerings, customer segments, and brand tone. In 2 minutes, your tailored strategy document is generated.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#141414] border border-[#262626]">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#242120] text-[#c084fc] border border-[#383332] mb-4 inline-block">
                STEP 02
              </span>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Autonomous Gap Radar
              </h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                The agent scans competitor search ranks, LLM answer citations (ChatGPT &amp; Perplexity), and high-intent buyer discussions across social communities.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#141414] border border-[#262626]">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#242120] text-[#4ade80] border border-[#383332] mb-4 inline-block">
                STEP 03
              </span>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Daily Ready Deliverables
              </h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Receive 2 ready-to-ship fixes every single morning: SEO articles, technical schema pull requests, or authentic buyer replies ready for 1-click publishing.
              </p>
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
              Put Your {data.tag} Growth on Autopilot.
            </h2>
            <p className="text-base sm:text-lg text-[#a1a1aa] max-w-xl leading-relaxed mb-8">
              7 specialized AI marketing agents executing daily SEO, content, and AI search citations for $129/mo.
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

