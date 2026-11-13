"use client";

import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Eye,
  Telescope,
  Map,
  Palette,
  Send,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
} from "lucide-react";

export default function GrowthMethodologyPage() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      subtitle: "Brand Graph Synthesis",
      icon: Eye,
      desc: "Okiza inspects your business, brand voice, target ICP personas, and core value proposition. It indexes 140+ brand attributes to maintain a 0.0% voice drift margin across all channels.",
    },
    {
      num: "02",
      title: "Discover",
      subtitle: "Market Gap Radar",
      icon: Telescope,
      desc: "Identifies competitors, market gaps, low-hanging organic keywords, and AI answer engine blindspots across ChatGPT, Perplexity, and Claude that you can capitalize on immediately.",
    },
    {
      num: "03",
      title: "Strategise",
      subtitle: "Sprint Growth Roadmap",
      icon: Map,
      desc: "Builds a prioritized, actionable growth sprint roadmap aligned with your revenue goals. Delivers 2 high-impact ready-to-execute items every morning instead of an overwhelming 200-item task backlog.",
    },
    {
      num: "04",
      title: "Create",
      subtitle: "Tone-Perfect Studio",
      icon: Palette,
      desc: "Generates high-converting comparison pages, technical schema fixes, viral X threads, and B2B LinkedIn carousels drafted in your authentic founder brand voice with 1-click approvals.",
    },
    {
      num: "05",
      title: "Distribute",
      subtitle: "Omnichannel Syndication",
      icon: Send,
      desc: "Deploys verified content straight to your CMS (WordPress, Webflow, Framer, Wix, HubSpot), opens pull requests on GitHub, and syndicates social updates without leaving your workflow.",
    },
    {
      num: "06",
      title: "Optimise",
      subtitle: "Closed-Loop Telemetry",
      icon: TrendingUp,
      desc: "Continuously monitors organic rankings, traffic attribution, and AI answer engine citations, feeding fresh data back into Step 01 to compound your growth automatically.",
    },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO */}
        <section className="w-full pt-20 pb-16 md:pt-28 md:pb-20 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-sans">
              OKIZA AI CMO
            </span>
            <span className="text-xs text-[#d4d4d8] font-medium pr-1">Growth Methodology</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight max-w-4xl leading-[1.08] mb-6">
            The 6-Step Closed-Loop Flywheel
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl font-normal leading-relaxed mb-10">
            Traditional marketing relies on sporadic human bursts and agency retainers. Okiza operates on a continuous, autonomous flywheel that compounds every single day.
          </p>

          <Link
            href="/#analyze"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all flex items-center gap-2 shadow-lg"
          >
            <span>Analyze Your Brand Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* 6 STEPS GRID */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[#262626]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-[#141414] border border-[#262626] flex flex-col justify-between hover:border-[#383332] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#242120] border border-[#383332] flex items-center justify-center text-[#38bdf8]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#71717a]">
                        STEP {st.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white tracking-tight mb-1">
                      {st.title}
                    </h3>
                    <p className="text-xs font-mono text-[#38bdf8] mb-3">
                      {st.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

