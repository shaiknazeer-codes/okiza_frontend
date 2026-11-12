"use client";

import { use } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  Quote,
  ShieldCheck,
  Zap,
  Globe,
  Bot,
} from "lucide-react";

export default function StoryDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  const storiesData = {
    foremark: {
      tag: "SEED STAGE • LEGALTECH",
      company: "Foremark Legal",
      initials: "FL",
      domain: "foremarklegal.com",
      headline:
        "How Foremark Legal turned their seed announcement into a viral X story with Okiza",
      stats: [
        { label: "Viral Impressions", value: "1.2M+" },
        { label: "Pipeline Value", value: "$420,000" },
        { label: "Agency Fees Saved", value: "$36,000" },
        { label: "Enterprise Inbounds", value: "24 Leads" },
      ],
      agentsUsed: ["X (Twitter) Agent", "Writer Agent", "LinkedIn Agent"],
      challenge:
        "Foremark Legal had just closed a $2M seed round. Traditional PR agencies quoted $12k/month with no guarantee of media coverage beyond a standard paywalled wire release. They needed to turn technical legal automation into an engaging story that founders and corporate counsel would actually share.",
      solution:
        "Using Okiza, Foremark configured the X Agent and Writer Agent to transform their raw product release notes into a 9-part visual breakdown thread. The thread detailed how modern startups lose $140k on outdated boilerplate contracts, embedding interactive comparison snippets and copy-paste checklists.",
      results:
        "Within 4 hours of posting, the thread crossed 1.2M impressions, received 2,400+ retweets from top tier VCs and tech founders, and directly originated 24 qualified inbound demos representing $420k in pipeline.",
      quote:
        "Okiza's agents turned what could have been a forgotten funding post into an industry-defining breakdown. Our inbound inbox exploded within 4 hours without spending a single dollar on a PR agency.",
      author: "Alexander Vance",
      title: "Founder & CEO, Foremark Legal",
    },
    novaflow: {
      tag: "GROWTH • ENTERPRISE AI",
      company: "Novaflow AI",
      initials: "NF",
      domain: "novaflow.io",
      headline:
        "How Novaflow captured 64% AI search share against incumbent enterprise rivals",
      stats: [
        { label: "AI Search Share", value: "64%" },
        { label: "Organic Signups", value: "+380%" },
        { label: "Keywords Ranked #1", value: "42" },
        { label: "Automated PRs Merged", value: "31 Fixes" },
      ],
      agentsUsed: ["GEO Agent", "Coding Agent", "SEO Agent"],
      challenge:
        "Novaflow was competing against billion-dollar incumbents with massive marketing war chests. When prospective enterprise customers asked ChatGPT and Perplexity for vendor recommendations, competitors dominated the answer citations while Novaflow was completely omitted.",
      solution:
        "Novaflow deployed Okiza's GEO Agent and Coding Agent. The GEO Agent identified the authoritative third-party source documents cited by LLMs, while the Coding Agent automatically generated and submitted GitHub pull requests adding SoftwareApplication JSON-LD schema, live comparison tables, and FAQ microdata.",
      results:
        "In 60 days, Novaflow's GEO citation frequency surged to 64% across Perplexity and ChatGPT Pro queries. Organic free tier signups increased by 380%, and Novaflow now ranks #1 for 42 enterprise search queries.",
      quote:
        "Every other SEO tool gave us endless checklists that our engineers ignored. Okiza literally opened pull requests in our repo and fed the citation engines until Perplexity began recommending Novaflow by default.",
      author: "Elena Rostova",
      title: "VP of Growth, Novaflow AI",
    },
    artisan: {
      tag: "DIRECT-TO-CONSUMER • ECOMMERCE",
      company: "Artisan Goods",
      initials: "AG",
      domain: "artisangoods.co",
      headline:
        "How Artisan Goods scaled creator campaigns to $2.4M ARR with zero agency headcount",
      stats: [
        { label: "Annual Revenue Runrate", value: "$2.4M" },
        { label: "Active Creators", value: "180+" },
        { label: "Blended ROAS", value: "4.2x" },
        { label: "Video Briefs Produced", value: "240 Clips" },
      ],
      agentsUsed: ["Influencer Agent", "UGC Video Agent", "SEO Agent"],
      challenge:
        "Scaling short-form TikTok and Instagram video creative required managing dozens of influencer relationships, vetting content quality, and writing scripts manually. Traditional influencer marketing agencies demanded $15k retainers plus 20% commission on creator spend.",
      solution:
        "Artisan Goods automated their creator pipeline using Okiza's Influencer Agent and UGC Video Agent. Okiza scored thousands of niche creators for high audience engagement, auto-generated tailored hooks and video storyboards, and coordinated asset handoffs automatically.",
      results:
        "Artisan scaled from 12 to 180+ active creator partnerships in 4 months, maintaining a 4.2x return on ad spend (ROAS) and driving $2.4M in annualized revenue — all managed by a single non-technical founder.",
      quote:
        "Our marketing was bottlenecked by agencies charging huge retainers. Okiza's Influencer and UGC agents now coordinate the entire campaign autonomously, letting us test 40+ fresh creatives every single week.",
      author: "Marcus Sterling",
      title: "Co-Founder, Artisan Goods",
    },
  };

  const story = storiesData[slug] || storiesData.foremark;

  return (
    <div className="min-h-screen bg-[#000000] text-[#ededed] font-sans antialiased selection:bg-[#262626] selection:text-white">
      <NavBar />

      <main className="relative pt-12 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/stories"
          className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Customer Stories</span>
        </Link>

        {/* Top Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase font-bold">
            {story.tag}
          </span>
          <span className="text-[#3f3f46]">•</span>
          <span className="text-xs text-[#a1a1aa] font-mono">{story.domain}</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
          {story.headline}
        </h1>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl border border-[#262626] bg-[#141414] mb-12 shadow-xl">
          {story.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-[#71717a] mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Agents Used Badge */}
        <div className="flex items-center flex-wrap gap-2 mb-12">
          <span className="text-xs text-[#71717a] font-medium mr-1">Agents Deployed:</span>
          {story.agentsUsed.map((agent, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-mono bg-[#1c1917] border border-[#383332] text-white"
            >
              {agent}
            </span>
          ))}
        </div>

        {/* Story Body Sections */}
        <div className="space-y-10 text-sm md:text-base leading-relaxed text-[#d4d4d8] mb-16">
          <section className="p-6 md:p-8 rounded-2xl border border-[#262626] bg-[#111111]">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">
              The Challenge
            </h2>
            <p className="text-[#a1a1aa] leading-relaxed">{story.challenge}</p>
          </section>

          <section className="p-6 md:p-8 rounded-2xl border border-[#262626] bg-[#111111]">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">
              The Okiza Solution
            </h2>
            <p className="text-[#a1a1aa] leading-relaxed">{story.solution}</p>
          </section>

          <section className="p-6 md:p-8 rounded-2xl border border-[#262626] bg-[#111111]">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">
              The Measurable Impact
            </h2>
            <p className="text-[#a1a1aa] leading-relaxed">{story.results}</p>
          </section>
        </div>

        {/* Founder Quote Card */}
        <div className="p-8 rounded-2xl border border-[#383332] bg-gradient-to-br from-[#1c1917] to-[#141414] mb-16 shadow-2xl relative overflow-hidden">
          <Quote className="w-10 h-10 text-white/10 absolute right-6 top-6 pointer-events-none" />
          <blockquote className="text-base md:text-lg italic text-white mb-6 leading-relaxed relative z-10">
            &ldquo;{story.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#292524] border border-[#44403c] flex items-center justify-center font-bold text-sm text-white">
              {story.initials}
            </div>
            <div>
              <p className="text-sm font-bold text-white">{story.author}</p>
              <p className="text-xs text-[#a1a1aa]">{story.title}</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 md:p-10 rounded-2xl border border-[#262626] bg-[#141414] text-center max-w-2xl mx-auto shadow-xl">
          <h3 className="text-xl font-bold text-white mb-2">
            Achieve similar results with Okiza
          </h3>
          <p className="text-sm text-[#a1a1aa] mb-6">
            Get your instant website audit and start testing autonomous marketing agents today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all"
            >
              Start 7-Day Free Trial
            </Link>
            <Link
              href="/stories"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#18181b] border border-[#262626] text-white font-medium text-sm hover:border-[#383332] transition-all"
            >
              Read More Stories
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

