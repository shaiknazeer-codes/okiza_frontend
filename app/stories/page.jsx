"use client";

import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  TrendingUp,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  CheckCircle2,
  Users,
} from "lucide-react";

export default function StoriesPage() {
  const stories = [
    {
      slug: "foremark",
      tag: "SEED STAGE • LEGALTECH",
      company: "Foremark Legal",
      initials: "FL",
      domain: "foremarklegal.com",
      headline:
        "How Foremark Legal turned their seed announcement into a viral X story with Okiza",
      metrics: [
        { label: "Viral Impressions", value: "1.2M+" },
        { label: "Inbound Pipeline", value: "$420K" },
        { label: "Agency Retainers Saved", value: "$36K" },
      ],
      desc: "Foremark used Okiza's X and Writer agents to transform their $2M seed round into a viral educational teardown that attracted Fortune 500 in-house counsel.",
      quote:
        "Okiza's agents turned what could have been a forgotten funding post into an industry-defining breakdown. Our inbound inbox exploded within 4 hours.",
      author: "Alexander Vance, Founder & CEO",
    },
    {
      slug: "novaflow",
      tag: "GROWTH • ENTERPRISE AI",
      company: "Novaflow AI",
      initials: "NF",
      domain: "novaflow.io",
      headline:
        "How Novaflow captured 64% AI search share against incumbent enterprise rivals",
      metrics: [
        { label: "AI Search Share", value: "64%" },
        { label: "Organic Signups", value: "+380%" },
        { label: "Target Keywords Ranked", value: "42" },
      ],
      desc: "By combining GEO reverse-engineering with the Coding Agent's automated GitHub schema pull requests, Novaflow dominated ChatGPT and Perplexity recommendations.",
      quote:
        "Okiza literally fixed the schema in GitHub and fed the citation engine until Perplexity began citing us as the default recommendation.",
      author: "Elena Rostova, VP of Growth",
    },
    {
      slug: "artisan",
      tag: "DIRECT-TO-CONSUMER • ECOMMERCE",
      company: "Artisan Goods",
      initials: "AG",
      domain: "artisangoods.co",
      headline:
        "How Artisan Goods scaled creator campaigns to $2.4M ARR with zero agency headcount",
      metrics: [
        { label: "Annual Revenue Runrate", value: "$2.4M" },
        { label: "Active Creators", value: "180+" },
        { label: "Blended ROAS", value: "4.2x" },
      ],
      desc: "The Influencer and UGC Video agents discovered high-affinity TikTok and Instagram creators, delivered video briefs, and negotiated licensing automatically.",
      quote:
        "Our marketing was bottlenecked by agencies charging $15k retainers. Okiza's Influencer and UGC agents now coordinate the entire campaign autonomously.",
      author: "Marcus Sterling, Co-Founder",
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#ededed] font-sans antialiased selection:bg-[#262626] selection:text-white">
      <NavBar />

      <main className="relative pt-12 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        {/* Top Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c1917] border border-[#383332] shadow-sm">
            <span className="text-[11px] font-mono tracking-widest text-[#a8a29e] uppercase font-bold">
              OKIZA AI CMO
            </span>
            <span className="text-[#57534e]">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white font-medium">
              <Users className="w-3.5 h-3.5 text-[#4ade80]" />
              Customer Stories
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            How High-Growth Teams Scale with Okiza
          </h1>
          <p className="text-base text-[#a1a1aa] leading-relaxed">
            Discover how founders and growth leaders replace bloated agency retainers
            with autonomous AI marketing agents that deliver measurable pipeline daily.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="rounded-2xl border border-[#262626] bg-[#141414] p-6 flex flex-col justify-between hover:border-[#3f3f46] transition-all group shadow-xl"
            >
              <div>
                {/* Tag & Company */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase font-semibold">
                    {story.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#242120] border border-[#383332] flex items-center justify-center font-bold text-xs text-white">
                    {story.initials}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors leading-snug">
                  {story.headline}
                </h3>

                <p className="text-xs text-[#a1a1aa] leading-relaxed mb-6">
                  {story.desc}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-[#262626] mb-6">
                  {story.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-base font-bold text-white tracking-tight">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-[#71717a] leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote & Link */}
              <div>
                <blockquote className="text-xs italic text-[#d4d4d8] mb-4 pl-3 border-l-2 border-[#3f3f46]">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-[#71717a] truncate max-w-[180px]">
                    {story.author}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:translate-x-1 transition-transform">
                    <span>Read case study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 md:p-12 rounded-2xl border border-[#262626] bg-gradient-to-b from-[#141414] to-[#0a0a0a] text-center max-w-3xl mx-auto shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to build your autonomous marketing flywheel?
          </h2>
          <p className="text-sm text-[#a1a1aa] mb-8 max-w-lg mx-auto">
            Get your instant SEO & GEO audit, 2 ready-to-ship daily fixes, and full
            access to all 9 agents with a 7-day free trial.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
              Start 7-Day Free Trial
            </Link>
            <Link
              href="/growth-methodology"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#18181b] border border-[#262626] text-white font-medium text-sm hover:border-[#383332] transition-all"
            >
              See Growth Methodology
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

