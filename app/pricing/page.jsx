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
} from "lucide-react";

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "Everything you need to research and build your initial 30-day marketing strategy.",
      badge: null,
      highlight: false,
      ctaText: "Analyze Website Free",
      ctaHref: "/#analyze",
      features: [
        "Full website crawl & brand graph synthesis",
        "Product information document",
        "Positioning & ICP messaging analysis",
        "Competitor keyword gap overview",
        "Standard community access",
        "1 Workspace & 1 User seat",
      ],
    },
    {
      name: "AI CMO Lite",
      price: annualBilling ? "$108" : "$129",
      period: annualBilling ? "per month, billed annually" : "per month, billed monthly",
      annualNote: annualBilling ? "$1,290 / year (Save 2 months)" : null,
      desc: "For early-stage startups and lean teams building foundational organic traction.",
      badge: null,
      highlight: false,
      ctaText: "Start 7-Day Free Trial",
      ctaHref: "/#pricing",
      features: [
        "Everything in Free, plus:",
        "SEO Agent (Daily audits & 2 ready fixes)",
        "GEO Agent (ChatGPT & Perplexity citations)",
        "X (Twitter) Agent (Viral threads & news radar)",
        "Influencer Agent (Creator matching & briefs)",
        "Coding Agent (Automated GitHub pull requests)",
        "7-Day free trial with full agent access",
        "Standard email & chat support",
      ],
    },
    {
      name: "AI CMO Pro",
      price: annualBilling ? "$208" : "$249",
      period: annualBilling ? "per month, billed annually" : "per month, billed monthly",
      annualNote: annualBilling ? "$2,490 / year (Save 2 months)" : null,
      desc: "Full autonomous marketing fleet for scaling SaaS, ecommerce, and fast-moving teams.",
      badge: "MOST POPULAR",
      highlight: true,
      ctaText: "Start 7-Day Free Trial",
      ctaHref: "/#pricing",
      features: [
        "Everything in AI CMO Lite, plus:",
        "Reddit Agent (Buyer threads & ban-safe replies)",
        "LinkedIn Agent (B2B carousels & founder stories)",
        "AI Content Writer Agent (SEO articles & CMS auto-publish)",
        "UGC Videos Agent (TikTok & Reels scripts & creator briefs)",
        "CMS 1-Click Publishing (Webflow, WordPress, Framer, Wix, HubSpot, Sanity)",
        "Priority 6-hour analytics & ranking refresh",
        "Priority dedicated support channel",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored volume",
      desc: "For scaling multi-brand organizations, agencies, and high-volume operations.",
      badge: "CUSTOM FLEET",
      highlight: false,
      ctaText: "Talk to Sales",
      ctaHref: "/#analyze",
      features: [
        "Everything in AI CMO Pro, plus:",
        "Multi-domain & agency client workspaces",
        "Custom agent output volume & frequency",
        "SSO (SAML/Okta) & Role-Based Access Control",
        "Custom Webhook & API endpoints",
        "Private Slack & Teams shared channel",
        "Dedicated Growth Strategist & onboarding",
        "99.9% Uptime Service Level Agreement (SLA)",
      ],
    },
  ];

  const comparisonFeatures = [
    {
      category: "Strategy & Foundations",
      items: [
        { name: "Website & Brand Voice Ingestion", free: true, lite: true, pro: true, ent: true },
        { name: "Competitor Market Gap Radar", free: "Basic", lite: true, pro: true, ent: true },
        { name: "Daily Deliverable Recommendations", free: false, lite: "2 / day", pro: "Unlimited", ent: "Custom" },
      ],
    },
    {
      category: "Specialized AI Agents",
      items: [
        { name: "SEO Agent (On-page & Technical Audits)", free: false, lite: true, pro: true, ent: true },
        { name: "GEO Agent (AI Search Citations: ChatGPT, Perplexity)", free: false, lite: true, pro: true, ent: true },
        { name: "Coding Agent (Automated GitHub PRs)", free: false, lite: true, pro: true, ent: true },
        { name: "X (Twitter) Agent (Threads & Commentary)", free: false, lite: true, pro: true, ent: true },
        { name: "Influencer Agent (Creator Matching)", free: false, lite: true, pro: true, ent: true },
        { name: "Reddit Agent (Buyer Threads & Native Voice)", free: false, lite: false, pro: true, ent: true },
        { name: "LinkedIn Agent (PDF Carousels & B2B Posts)", free: false, lite: false, pro: true, ent: true },
        { name: "AI Content Writer (Full Articles & Guides)", free: false, lite: false, pro: true, ent: true },
        { name: "UGC Videos Agent (Ad Scripts & Storyboards)", free: false, lite: false, pro: true, ent: true },
      ],
    },
    {
      category: "Integrations & Publishing",
      items: [
        { name: "Direct CMS Auto-Publishing (WordPress, Webflow, Framer)", free: false, lite: false, pro: true, ent: true },
        { name: "GitHub Pull Request Automation", free: false, lite: true, pro: true, ent: true },
        { name: "Google Search Console & GA4 Sync", free: false, lite: true, pro: true, ent: true },
        { name: "WhatsApp & Telegram Draft Approvals", free: false, lite: true, pro: true, ent: true },
      ],
    },
  ];

  const faqs = [
    {
      q: "Are there any per-agent fees or hidden usage credits?",
      a: "No. Okiza charges flat, predictable monthly or annual pricing with zero per-agent surcharges or hidden token counters. Every plan includes full access to its listed agent fleet.",
    },
    {
      q: "How does the 7-day free trial work?",
      a: "Both the Lite and Pro plans include a 7-day free trial. You get full access to the agents, can connect your site, and receive live recommendations. You can cancel anytime before the 7 days are up with zero penalty.",
    },
    {
      q: "Can I upgrade, downgrade, or cancel at any time?",
      a: "Yes. You can switch between Lite and Pro, change billing cadence, or cancel your subscription directly from your account settings at any point.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit and debit cards (Visa, Mastercard, American Express) through secure Stripe billing. For annual Enterprise plans, we also support ACH wire transfers and custom invoicing.",
    },
    {
      q: "Do you offer discounts for agencies managing multiple client sites?",
      a: "Yes! Our Agency Plan scales down the per-site cost as you add client domains (down to $77.40/mo per site). Contact our team for multi-workspace agency volume pricing.",
    },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      {/* Top sticky navigation bar */}
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION */}
        <section className="w-full pt-20 pb-16 md:pt-28 md:pb-20 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle background ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[#38bdf8]/5 blur-[140px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-sans">
              OKIZA AI CMO
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#d4d4d8] font-medium pr-1">
              <Zap className="w-3.5 h-3.5 text-[#fbbf24]" strokeWidth={2} />
              <span>Transparent Pricing</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight max-w-4xl leading-[1.08] mb-6">
            Simple, Predictable Pricing.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl font-normal leading-relaxed mb-10">
            No per-agent fees. No hidden token counters. Deploy your entire autonomous marketing fleet starting at $129/mo with a 7-day free trial.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="flex items-center gap-4 p-1.5 rounded-full bg-[#141414] border border-[#262626] mb-12 shadow-lg">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                !annualBilling
                  ? "bg-white text-black shadow-md"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                annualBilling
                  ? "bg-white text-black shadow-md"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/40">
                SAVE 2 MONTHS
              </span>
            </button>
          </div>
        </section>

        {/* 4 PRICING CARDS */}
        <section className="w-full pb-20 px-4 sm:px-8 lg:px-12 max-w-[1560px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlight
                    ? "bg-[#18181b] border-2 border-white shadow-[0_0_50px_-10px_rgba(255,255,255,0.15)] scale-[1.02]"
                    : "bg-[#141414] border border-[#262626] hover:border-[#383332]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold tracking-wider font-mono uppercase shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#a1a1aa] min-h-[36px] leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  <div className="mb-6 pb-6 border-b border-[#262626]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-bold text-white font-mono tracking-tight">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-xs text-[#71717a] font-mono">/mo</span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#71717a] font-mono block mt-1">
                      {plan.period}
                    </span>
                    {plan.annualNote && (
                      <span className="text-[11px] text-[#4ade80] font-mono font-medium block mt-0.5">
                        {plan.annualNote}
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#d4d4d8]">
                        <Check className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={plan.ctaHref}
                  className={`w-full py-3 rounded-full font-semibold text-xs sm:text-sm tracking-tight text-center transition-all flex items-center justify-center gap-1.5 ${
                    plan.highlight
                      ? "bg-white text-black hover:bg-[#e4e4e7] shadow-lg"
                      : "bg-[#27272a] text-white hover:bg-[#3f3f46] border border-[#3f3f46]"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FULL FEATURE COMPARISON MATRIX TABLE */}
        <section className="w-full py-20 px-4 sm:px-8 lg:px-12 max-w-[1560px] mx-auto border-t border-[#262626]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
              Full Feature Comparison
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa]">
              Everything each tier includes, with zero hidden limitations.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#262626] bg-[#1c1917] text-white font-mono text-xs uppercase">
                    <th className="py-5 px-6">Capability</th>
                    <th className="py-5 px-6 text-center">Free</th>
                    <th className="py-5 px-6 text-center">Lite ($108/mo)</th>
                    <th className="py-5 px-6 text-center font-bold text-[#38bdf8]">Pro ($208/mo)</th>
                    <th className="py-5 px-6 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]">
                  {comparisonFeatures.map((cat, cIdx) => (
                    <>
                      <tr key={`cat-${cIdx}`} className="bg-[#18181b]/70 font-semibold text-xs font-mono text-[#a1a1aa] uppercase tracking-wider">
                        <td colSpan={5} className="py-3 px-6">
                          {cat.category}
                        </td>
                      </tr>
                      {cat.items.map((row, rIdx) => (
                        <tr key={`row-${rIdx}`} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 px-6 text-white font-medium text-xs sm:text-sm">
                            {row.name}
                          </td>
                          <td className="py-4 px-6 text-center text-xs">
                            {typeof row.free === "boolean" ? (
                              row.free ? (
                                <Check className="w-4 h-4 text-[#4ade80] mx-auto" />
                              ) : (
                                <span className="text-[#52525b]">—</span>
                              )
                            ) : (
                              <span className="text-[#a1a1aa] font-mono">{row.free}</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center text-xs">
                            {typeof row.lite === "boolean" ? (
                              row.lite ? (
                                <Check className="w-4 h-4 text-[#4ade80] mx-auto" />
                              ) : (
                                <span className="text-[#52525b]">—</span>
                              )
                            ) : (
                              <span className="text-white font-mono">{row.lite}</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center text-xs bg-[#18181b]/40 font-semibold">
                            {typeof row.pro === "boolean" ? (
                              row.pro ? (
                                <Check className="w-4 h-4 text-[#38bdf8] mx-auto" />
                              ) : (
                                <span className="text-[#52525b]">—</span>
                              )
                            ) : (
                              <span className="text-[#38bdf8] font-mono">{row.pro}</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center text-xs">
                            {typeof row.ent === "boolean" ? (
                              row.ent ? (
                                <Check className="w-4 h-4 text-[#4ade80] mx-auto" />
                              ) : (
                                <span className="text-[#52525b]">—</span>
                              )
                            ) : (
                              <span className="text-white font-mono">{row.ent}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="w-full py-20 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[#262626]">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#a1a1aa] mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Pricing &amp; Account Questions
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

