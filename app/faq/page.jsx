"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Search,
  ChevronDown,
  HelpCircle,
  Zap,
  Shield,
  Layers,
  Sparkles,
  Bot,
  CreditCard,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "Getting Started" },
  { id: "agents", label: "AI Agents" },
  { id: "geo-seo", label: "GEO & SEO" },
  { id: "integrations", label: "Integrations & CMS" },
  { id: "safety", label: "Safety & Ban Protection" },
  { id: "pricing", label: "Pricing & Billing" },
];

const faqs = [
  {
    category: "general",
    question: "What is Okiza and how does it replace a traditional marketing agency?",
    answer:
      "Okiza is an autonomous AI Chief Marketing Officer (CMO) that coordinates specialized agents — SEO, GEO, Technical Coding, Content Writing, UGC Video, LinkedIn, X, and Reddit. Instead of providing passive dashboards and long to-do lists, Okiza continuously audits your brand, produces finished assets (articles, code PRs, social threads, video briefs), and deploys them directly to your CMS or social accounts with your approval.",
  },
  {
    category: "general",
    question: "How long does it take to set up Okiza?",
    answer:
      "Initial onboarding takes under 3 minutes. Enter your domain, connect your Google Search Console or CMS (WordPress, Webflow, Framer, etc.), and Okiza immediately initiates its 6-step growth audit. You'll receive your first 2 ready-to-ship fixes and AI answer visibility score on day one.",
  },
  {
    category: "general",
    question: "Do I have to approve actions or does Okiza act completely autonomously?",
    answer:
      "You stay in full control. By default, Okiza operates in 'Human-in-the-Loop' mode: recommendations, articles, code PRs, and social posts are prepared and queued for your 1-click approval via dashboard, Telegram, or WhatsApp. You can also configure trusted agents to auto-publish on preset schedules once you verify their brand voice alignment.",
  },
  {
    category: "agents",
    question: "Which AI agents are included in Okiza?",
    answer:
      "Okiza includes 9 specialized agents: SEO Agent (audits, keyword research, on-page fixes), Coding Agent (GitHub PRs for schema, robots.txt, performance), GEO Agent (visibility in ChatGPT, Claude, Perplexity, Gemini), Writer Agent (long-form articles and guides), UGC Video Agent (video ad scripts and creator briefs), LinkedIn Agent (thought leadership posts and PDF carousels), X/Twitter Agent (viral threads and commentary), Reddit Agent (relevant thread discovery and value-first replies), and Influencer Agent (creator matching and outreach).",
  },
  {
    category: "agents",
    question: "How does the Coding Agent submit technical fixes safely?",
    answer:
      "The Coding Agent connects securely to your GitHub repository with scoped permissions. Rather than modifying production code directly, it creates isolated branches and submits clean, documented Pull Requests (PRs) complete with before/after benchmarks. Your engineering team can review, test, and merge the code exactly like any standard pull request.",
  },
  {
    category: "geo-seo",
    question: "What is Generative Engine Optimization (GEO) and why does it matter?",
    answer:
      "Buyers are increasingly asking LLMs like ChatGPT, Perplexity, Claude, and Google Gemini for software recommendations instead of traditional search results. GEO tracks how often and in what context your product is recommended by AI engines, reverse-engineers the citation sources, and generates targeted content to win high-intent AI answer real estate.",
  },
  {
    category: "geo-seo",
    question: "How does the daily '2 Ready-to-Ship Fixes' workflow work?",
    answer:
      "Traditional SEO audits dump 300+ technical warnings that overwhelm teams and get ignored. Okiza uses predictive revenue modeling to prioritize the top 2 highest-ROI fixes each morning, accompanied by complete copy-paste code snippets or pre-written copy. This creates a compounding flywheel without requiring a full-time SEO specialist.",
  },
  {
    category: "integrations",
    question: "Which content management systems (CMS) and platforms are supported?",
    answer:
      "Okiza natively connects with WordPress, Webflow, Framer, Wix, HubSpot, Sanity, Shopify, GitHub, Google Search Console, Google Analytics 4, LinkedIn, X (Twitter), TikTok, Facebook, WhatsApp, and Telegram. We also provide full REST APIs and Webhook endpoints for custom stacks.",
  },
  {
    category: "safety",
    question: "Will social accounts or SEO rankings get penalized for using AI?",
    answer:
      "No. Okiza adheres strictly to Google's Search Essentials guidelines, which reward high-value, helpful content regardless of production method. On social platforms (LinkedIn, X, Reddit), Okiza employs randomized distribution cadences, human-like typing simulation, and brand voice grounding that prevents spam detection and account flagging.",
  },
  {
    category: "pricing",
    question: "Can I try Okiza before committing to a paid plan?",
    answer:
      "Yes, all plans come with a full 7-day free trial. You also get a free instant website SEO & GEO audit without needing a credit card to evaluate where your brand currently stands.",
  },
  {
    category: "pricing",
    question: "Can I change or cancel my subscription at any time?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your subscription directly from your billing dashboard with one click. If you cancel, your access continues through the end of your current billing period.",
  },
  {
    category: "pricing",
    question: "Do you offer custom Enterprise or agency white-label plans?",
    answer:
      "Yes. Our Enterprise tier includes multi-tenant account management, custom LLM fine-tuning on your proprietary brand collateral, dedicated Slack channels, and custom SLA agreements. Contact enterprise@okiza.com for tailored onboarding.",
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState({ 0: true, 1: true });

  const toggleItem = (idx) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#000000] text-[#ededed] font-sans antialiased selection:bg-[#262626] selection:text-white">
      <NavBar />

      <main className="relative pt-12 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
        {/* Top Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c1917] border border-[#383332] shadow-sm">
            <span className="text-[11px] font-mono tracking-widest text-[#a8a29e] uppercase font-bold">
              OKIZA AI CMO
            </span>
            <span className="text-[#57534e]">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white font-medium">
              <HelpCircle className="w-3.5 h-3.5 text-[#38bdf8]" />
              Help Center & FAQ
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-[#a1a1aa] leading-relaxed">
            Everything you need to know about Okiza&apos;s autonomous AI marketing
            agents, GEO search visibility, integrations, and enterprise security.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-[#71717a] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search answers (e.g. GEO, GitHub, pricing, safety)..."
              className="w-full bg-[#141414] border border-[#262626] rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-[#71717a] focus:outline-none focus:border-[#52525b] transition-all"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "bg-[#141414] border border-[#262626] text-[#a1a1aa] hover:text-white hover:border-[#3f3f46]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center border border-[#262626] rounded-2xl bg-[#141414]/50">
              <HelpCircle className="w-8 h-8 text-[#71717a] mx-auto mb-3" />
              <p className="text-white font-medium mb-1">No matching questions found</p>
              <p className="text-xs text-[#71717a]">
                Try adjusting your search terms or browse all categories above.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = !!openItems[idx];
              return (
                <div
                  key={idx}
                  className="border border-[#262626] bg-[#141414] rounded-2xl overflow-hidden transition-all hover:border-[#383332]"
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-[15px] md:text-base font-semibold text-white tracking-tight leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#a1a1aa] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-white" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 pt-0 border-t border-[#262626]/50">
                      <p className="text-sm text-[#a1a1aa] leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-8 md:p-10 rounded-2xl border border-[#262626] bg-gradient-to-b from-[#141414] to-[#0a0a0a] text-center max-w-3xl mx-auto shadow-2xl">
          <div className="w-12 h-12 rounded-xl bg-[#262626] border border-[#3f3f46] flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Have a custom question or specific stack requirement?
          </h3>
          <p className="text-sm text-[#a1a1aa] mb-6 max-w-lg mx-auto">
            Our engineering and growth team is available 24/7 to assist with
            custom CMS integrations, security evaluations, and tailored pilot programs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all"
            >
              Start 7-Day Free Trial
            </Link>
            <Link
              href="/docs"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#18181b] border border-[#262626] text-white font-medium text-sm hover:border-[#383332] transition-all flex items-center justify-center gap-1.5"
            >
              <span>Explore Developer Docs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

