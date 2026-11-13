"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, Bot, ShieldCheck } from "lucide-react";

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      id: "intern",
      name: "Intern Plan",
      subtitle: "AI Marketing Intern",
      badge: "Entry-level",
      price: annual ? 49 : 59,
      annualSavings: "Save $120 / year",
      desc: "An AI agent that handles foundational SEO, GEO, and AEO work for your business.",
      features: [
        "Complete Website SEO Audit & health snapshot",
        "Technical SEO: issue detection & recommended fixes",
        "Keyword Tracking & performance analytics",
        "Competitor Analysis & live monitoring",
        "GEO (Generative Engine Optimization) in AI engines",
        "AEO (Answer Engine Optimization) query mentions",
        "Downloadable SEO, GEO & AEO audit reports",
        "WordPress & GitHub PR integration",
        "Automated Apply Changes workflow",
      ],
      isPopular: false,
      ctaText: "Start Free with Intern Plan",
    },
    {
      id: "manager",
      name: "Manager Plan",
      subtitle: "AI Marketing Manager",
      badge: "Most Popular • Mid-tier",
      price: annual ? 149 : 179,
      annualSavings: "Save $360 / year",
      desc: "Everything in Intern, plus content creation, multi-platform publishing, and external brand visibility.",
      features: [
        "Everything in the Intern Plan (SEO, GEO, AEO, Keywords, Competitors)",
        "Blog Management: automated draft creation & publishing",
        "Reddit Integration: find buyer threads & draft replies",
        "Quora Integration: high-intent question brand answers",
        "Medium & External Publishing distribution",
        "Third-party Posting & Backlinking strategy",
        "Social & Thought Leadership: B2B authority content",
        "Cross-platform distribution beyond your own website",
        "Priority analytics refresh & ranking alerts",
      ],
      isPopular: true,
      ctaText: "Start 7-Day Free Trial",
    },
    {
      id: "cmo",
      name: "CMO Plan",
      subtitle: "AI Chief Marketing Officer",
      badge: "Premium • Full Fleet",
      price: annual ? 299 : 349,
      annualSavings: "Save $600 / year",
      desc: "Everything in Manager, plus strategic marketing planning, creative execution, and video generation.",
      features: [
        "Everything in the Manager Plan",
        "End-to-End Marketing Strategies & quarterly playbooks",
        "Multi-channel Social Media Posts (X, Meta, Reddit)",
        "Video Generation: UGC scripts, hooks & ad clips",
        "Campaign Management: plan, create & launch campaigns",
        "AI-Driven Brand Growth Strategy & market positioning",
        "Fully Autonomous Marketing Agent for strategy & creative execution",
        "Dedicated Growth Strategist & Slack channel",
        "99.9% Uptime SLA & custom integration support",
      ],
      isPopular: false,
      ctaText: "Deploy Your AI CMO",
    },
  ];

  return (
    <section id="pricing" className="w-full px-6 sm:px-12 md:px-20 py-24 bg-[#000000]">
      <div className="border-t border-[#262626] pt-20">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#383332] bg-[#1a1716] mb-4">
            <span className="text-[11px] font-mono tracking-widest text-[#a8a29e] uppercase font-bold">
              OKIZA AI CMO
            </span>
            <span className="text-[#57534e]">•</span>
            <span className="text-xs text-white font-medium">Subscription Plans</span>
          </div>

          <h2 className="font-semibold text-[#ffffff] mb-4 tracking-tight text-3xl sm:text-4xl md:text-[44px] leading-[1.1]">
            Predictable pricing for exponential growth.
          </h2>
          <p className="text-base text-[#a1a1aa] max-w-[560px] leading-relaxed mb-8">
            Choose the AI tier that fits your growth ambitions — from foundational SEO & GEO execution to a full autonomous Chief Marketing Officer.
          </p>

          {/* Billing Switch */}
          <div className="flex items-center gap-2 bg-[#111111] p-1.5 rounded-full border border-[#262626]">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                !annual ? "bg-[#262626] text-[#ffffff] font-bold" : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                annual ? "bg-[#ffffff] text-[#000000] font-semibold" : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              <span>Annual billing</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#000000]/15 font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between border relative transition-all duration-300 ${
                p.isPopular
                  ? "bg-[#141414] border-[#ffffff] shadow-[0_0_35px_rgba(255,255,255,0.12)] scale-[1.02] z-10"
                  : "bg-[#111111]/80 border-[#262626] hover:border-[#404040]"
              }`}
            >
              {p.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#ffffff] text-[#000000] text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 fill-[#000000]" />
                  <span>{p.badge}</span>
                </div>
              )}

              <div>
                {!p.isPopular && (
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#71717a] font-semibold block mb-2">
                    {p.badge}
                  </span>
                )}
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-xl font-bold text-[#ffffff]">{p.name}</h3>
                </div>
                <span className="text-xs text-[#38bdf8] font-mono font-medium block mb-3">
                  {p.subtitle}
                </span>

                <p className="text-xs text-[#a1a1aa] mb-6 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-[#ffffff] font-mono">
                    ${p.price}
                  </span>
                  <span className="text-xs text-[#a1a1aa]">/ month</span>
                </div>
                <span className="text-[11px] text-[#71717a] block mb-6">
                  {annual ? p.annualSavings : "Billed monthly"}
                </span>

                <div className="flex flex-col gap-3 pt-5 border-t border-[#262626]">
                  <span className="text-[11px] font-semibold text-[#ffffff] uppercase tracking-wider mb-1">
                    Features included:
                  </span>
                  {p.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#ffffff]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#ffffff]" strokeWidth={3} />
                      </div>
                      <span className="text-xs text-[#d4d4d8] leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/#analyze"
                  className={`w-full py-3.5 rounded-xl font-semibold text-xs text-center flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    p.isPopular
                      ? "bg-[#ffffff] hover:bg-[#e4e4e7] text-[#000000] shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                      : "bg-[#262626] hover:bg-[#333333] text-[#ffffff]"
                  }`}
                >
                  <span>{p.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] text-center text-[#71717a] block mt-2">
                  7-day free trial · Cancel anytime
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
