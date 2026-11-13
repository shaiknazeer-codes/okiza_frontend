"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Building2,
  Lock,
  Bot,
} from "lucide-react";

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  const plans = [
    {
      id: "intern",
      name: "Intern Plan",
      subtitle: "AI Marketing Intern",
      badge: "Entry-level",
      price: annualBilling ? "$39" : "$49",
      period: annualBilling ? "per month, billed annually" : "per month, billed monthly",
      annualNote: annualBilling ? "$468 / year (Save 20%)" : null,
      desc: "An AI agent that handles the foundational SEO, GEO, and AEO work for your business.",
      highlight: false,
      ctaText: "Start with Intern Plan",
      ctaHref: "/#analyze",
      features: [
        "Complete Website SEO Audit & analysis",
        "Technical SEO: identify issues & provide fixes",
        "Keyword Tracking & performance monitoring",
        "Competitor Analysis & live market tracking",
        "GEO (Generative Engine Optimization) in AI search",
        "AEO (Answer Engine Optimization) brand mentions",
        "Downloadable SEO, GEO & AEO audit reports",
        "GitHub PR integration for SEO fixes (Branch & PRs)",
        "WordPress integration & website crawling",
        "Apply Changes workflow for implementing fixes",
      ],
    },
    {
      id: "manager",
      name: "Manager Plan",
      subtitle: "AI Marketing Manager",
      badge: "MOST POPULAR • MID-TIER",
      price: annualBilling ? "$119" : "$149",
      period: annualBilling ? "per month, billed annually" : "per month, billed monthly",
      annualNote: annualBilling ? "$1,428 / year (Save 20%)" : null,
      desc: "Everything in Intern, plus content creation and external brand visibility across platforms.",
      highlight: true,
      ctaText: "Start 7-Day Free Trial",
      ctaHref: "/#pricing",
      features: [
        "Everything in the Intern Plan (SEO, GEO, AEO, Keywords, Competitors, Technical SEO)",
        "Blog Management: blog creation & publishing capabilities",
        "Third-party Posting: brand visibility on external platforms",
        "Reddit Integration: discover relevant discussions & threads",
        "Quora Integration: external discussion & brand visibility",
        "Medium & External Publishing: content distribution",
        "Backlinking: third-party posting & backlinking strategy",
        "Executive Content: authority distribution & thought leadership",
        "Brand visibility beyond your own website",
        "Priority analytics refresh & ranking alerts",
      ],
    },
    {
      id: "cmo",
      name: "CMO Plan",
      subtitle: "AI Chief Marketing Officer",
      badge: "PREMIUM • FULL AUTONOMY",
      price: annualBilling ? "$239" : "$299",
      period: annualBilling ? "per month, billed annually" : "per month, billed monthly",
      annualNote: annualBilling ? "$2,868 / year (Save 20%)" : null,
      desc: "Everything in Manager, plus strategic marketing planning, creative execution, and video generation.",
      highlight: false,
      ctaText: "Deploy Your AI CMO",
      ctaHref: "/#pricing",
      features: [
        "Everything in the Manager Plan",
        "Marketing Strategies: generate comprehensive business strategies",
        "Social Media Posts: create promotional & thought leadership posts",
        "Video Generation: generate marketing videos & UGC ad clips",
        "Campaign Management: plan, create & launch marketing campaigns",
        "Brand Growth Strategy: AI-driven recommendations for scaling",
        "Autonomous AI Marketing Agent for strategic & creative tasks",
        "Dedicated Growth Strategist review",
        "Private Slack channel & 99.9% Uptime SLA",
      ],
    },
  ];

  const comparisonFeatures = [
    {
      category: "Foundations: SEO, GEO & AEO",
      items: [
        { name: "Complete Website SEO Audit", intern: true, manager: true, cmo: true },
        { name: "Technical SEO Fixes & Diagnostics", intern: true, manager: true, cmo: true },
        { name: "Keyword Tracking & Performance", intern: true, manager: true, cmo: true },
        { name: "Competitor Analysis & Monitoring", intern: true, manager: true, cmo: true },
        { name: "GEO (AI Search Visibility: ChatGPT, Perplexity)", intern: true, manager: true, cmo: true },
        { name: "AEO (Answer Engine Optimization Mentions)", intern: true, manager: true, cmo: true },
        { name: "Downloadable Audit Reports", intern: true, manager: true, cmo: true },
        { name: "GitHub Integration (Branches & PRs)", intern: true, manager: true, cmo: true },
        { name: "WordPress & CMS Crawling", intern: true, manager: true, cmo: true },
      ],
    },
    {
      category: "Content & External Brand Visibility",
      items: [
        { name: "Blog Management & Publishing", intern: false, manager: true, cmo: true },
        { name: "Third-party Posting & Syndication", intern: false, manager: true, cmo: true },
        { name: "Reddit Integration (Thread Discovery & Drafts)", intern: false, manager: true, cmo: true },
        { name: "Quora Discussions & Brand Answers", intern: false, manager: true, cmo: true },
        { name: "Medium & External Distribution", intern: false, manager: true, cmo: true },
        { name: "Backlinking & Authority Building Strategy", intern: false, manager: true, cmo: true },
        { name: "Executive Content Distribution", intern: false, manager: true, cmo: true },
      ],
    },
    {
      category: "Executive Strategy & Creative Execution",
      items: [
        { name: "Comprehensive Marketing Strategies", intern: false, manager: false, cmo: true },
        { name: "Social Media Campaign Creative", intern: false, manager: false, cmo: true },
        { name: "Video Generation (UGC & Ad Clips)", intern: false, manager: false, cmo: true },
        { name: "Full Campaign Management", intern: false, manager: false, cmo: true },
        { name: "AI Brand Growth Recommendations", intern: false, manager: false, cmo: true },
        { name: "Autonomous AI Marketing Agent", intern: false, manager: false, cmo: true },
      ],
    },
  ];

  const faqs = [
    {
      q: "What is the difference between the Intern, Manager, and CMO plans?",
      a: "The Intern Plan provides foundational organic growth (technical SEO, GEO, AEO, and automated GitHub PR fixes). The Manager Plan adds external visibility beyond your site — blog creation, Reddit, Quora, Medium, and backlinking. The CMO Plan is our premier tier that acts as a full executive, handling quarterly marketing strategies, social media campaigns, video generation, and autonomous creative execution.",
    },
    {
      q: "How does the GitHub integration work in the Intern Plan?",
      a: "Okiza connects securely to your GitHub repository to create isolated branches and submit clean, documented Pull Requests (PRs) with schema markups, robots.txt updates, and technical SEO optimizations without touching production directly.",
    },
    {
      q: "How does the 7-day free trial work?",
      a: "All plans include a full 7-day free trial. You can connect your domain, run complete audits, and receive ready-to-ship fixes immediately. You can cancel at any time with zero penalty.",
    },
    {
      q: "Can I upgrade or downgrade between plans at any time?",
      a: "Yes. You can switch between Intern, Manager, and CMO tiers at any point from your billing dashboard. Upgrades take effect immediately with prorated billing.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#ededed] font-sans antialiased selection:bg-[#262626] selection:text-white">
      <NavBar />

      <main className="relative pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Top Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c1917] border border-[#383332] shadow-sm">
            <span className="text-[11px] font-mono tracking-widest text-[#a8a29e] uppercase font-bold">
              OKIZA AI CMO
            </span>
            <span className="text-[#57534e]">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white font-medium">
              <Bot className="w-3.5 h-3.5 text-[#38bdf8]" />
              Subscription Plans
            </span>
          </div>
        </div>

        {/* Title & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Predictable Plans for Every Stage of Growth
          </h1>
          <p className="text-base text-[#a1a1aa] leading-relaxed">
            From foundational SEO, GEO & AEO execution to a full autonomous Chief
            Marketing Officer that plans, creates, and executes your marketing.
          </p>
        </div>

        {/* Billing Switcher (Monthly / Annual) */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center gap-2 bg-[#141414] border border-[#262626] rounded-full p-1.5 shadow-lg">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                !annualBilling
                  ? "bg-[#262626] text-white font-semibold"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                annualBilling
                  ? "bg-white text-black font-bold shadow-sm"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              <span>Annual billing</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/15 font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (3 Plans: Intern, Manager, CMO) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl border p-6 md:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#141414] border-white shadow-[0_0_40px_rgba(255,255,255,0.12)] md:-translate-y-2 z-10"
                  : "bg-[#111111]/80 border-[#262626] hover:border-[#404040]"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-widest uppercase flex items-center gap-1 shadow-md ${
                    plan.highlight
                      ? "bg-white text-black"
                      : "bg-[#262626] text-[#a1a1aa] border border-[#3f3f46]"
                  }`}
                >
                  {plan.highlight && <Sparkles className="w-3 h-3 fill-black" />}
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <span className="text-xs text-[#38bdf8] font-mono font-medium block mt-0.5">
                    {plan.subtitle}
                  </span>
                </div>

                <p className="text-xs text-[#a1a1aa] mb-6 leading-relaxed">
                  {plan.desc}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-[#262626]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-mono">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#a1a1aa]">/ month</span>
                  </div>
                  <span className="text-[11px] text-[#71717a] block mt-1">
                    {plan.period}
                  </span>
                  {plan.annualNote && (
                    <span className="text-[11px] text-green-400 font-mono block mt-0.5">
                      {plan.annualNote}
                    </span>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider block font-mono">
                    Features Included:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                      </div>
                      <span className="text-xs text-[#d4d4d8] leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action CTA */}
              <div>
                <Link
                  href={plan.ctaHref}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                    plan.highlight
                      ? "bg-white hover:bg-[#e4e4e7] text-black shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                      : "bg-[#262626] hover:bg-[#333333] text-white"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] text-center text-[#71717a] block mt-2">
                  7-day free trial · Cancel anytime
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Matrix */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Full Plan Feature Comparison
            </h2>
            <p className="text-sm text-[#a1a1aa]">
              Compare capabilities across the Intern, Manager, and CMO tiers.
            </p>
          </div>

          <div className="border border-[#262626] rounded-2xl overflow-hidden bg-[#111111]/80 backdrop-blur-md shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-[#262626] bg-[#141414]">
                    <th className="p-4 md:p-5 font-semibold text-white w-2/5">
                      Features & Capabilities
                    </th>
                    <th className="p-4 md:p-5 font-semibold text-white text-center w-1/5">
                      Intern Plan
                    </th>
                    <th className="p-4 md:p-5 font-semibold text-white text-center w-1/5 bg-white/[0.03]">
                      Manager Plan
                    </th>
                    <th className="p-4 md:p-5 font-semibold text-white text-center w-1/5">
                      CMO Plan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/70">
                  {comparisonFeatures.map((cat, catIdx) => (
                    <tbody key={catIdx} className="divide-y divide-[#262626]/40">
                      <tr className="bg-[#18181b]/50">
                        <td
                          colSpan={4}
                          className="px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#a1a1aa]"
                        >
                          {cat.category}
                        </td>
                      </tr>
                      {cat.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="hover:bg-white/[0.02]">
                          <td className="p-4 text-[#d4d4d8] font-medium">
                            {item.name}
                          </td>
                          <td className="p-4 text-center">
                            {typeof item.intern === "boolean" ? (
                              item.intern ? (
                                <Check className="w-4 h-4 text-green-400 mx-auto" />
                              ) : (
                                <span className="text-[#52525b]">—</span>
                              )
                            ) : (
                              <span className="text-xs text-white font-mono">
                                {item.intern}
                              </span>
                            )}
                          </td>
                          <td className="p-4 text-center bg-white/[0.03]">
                            {typeof item.manager === "boolean" ? (
                              item.manager ? (
                                <Check className="w-4 h-4 text-green-400 mx-auto" />
                              ) : (
                                <span className="text-[#52525b]">—</span>
                              )
                            ) : (
                              <span className="text-xs text-white font-mono">
                                {item.manager}
                              </span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof item.cmo === "boolean" ? (
                              item.cmo ? (
                                <Check className="w-4 h-4 text-green-400 mx-auto" />
                              ) : (
                                <span className="text-[#52525b]">—</span>
                              )
                            ) : (
                              <span className="text-xs text-white font-mono">
                                {item.cmo}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing FAQs Accordion */}
        <section className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Frequently Asked Questions About Billing
            </h2>
            <p className="text-xs text-[#a1a1aa]">
              Everything you need to know about our subscription tiers and free trials.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#262626] bg-[#141414] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#a1a1aa] shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-white" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 md:px-5 pb-5 pt-0 border-t border-[#262626]/50">
                      <p className="text-xs text-[#a1a1aa] leading-relaxed mt-3">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="p-8 md:p-12 rounded-2xl border border-[#262626] bg-gradient-to-b from-[#141414] to-[#0a0a0a] text-center max-w-2xl mx-auto shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Ready to test Okiza?
          </h2>
          <p className="text-sm text-[#a1a1aa] mb-6">
            Get your instant SEO & GEO audit and start with your 7-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#analyze"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#e4e4e7] transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
              Analyze Your Website Free
            </Link>
            <Link
              href="/faq"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#18181b] border border-[#262626] text-white font-medium text-xs hover:border-[#383332] transition-all"
            >
              Help Center & FAQ
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
