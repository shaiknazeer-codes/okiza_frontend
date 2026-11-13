"use client";

import CapabilityCard from "./CapabilityCard";
import OkizaLogo from "./OkizaLogo";
import {
  Fingerprint,
  Swords,
  Search,
  Palette,
  Users,
  Map,
  BarChart2,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Zap,
  Globe,
  Check,
  Star,
} from "lucide-react";

export default function CapabilitiesSection({ onSelectCapability }) {
  return (
    <section
      id="capabilities"
      className="w-full px-6 sm:px-12 md:px-20 py-24 bg-[#000000]"
      data-component="@components/CapabilitiesSection.jsx"
    >
      <div className="w-full border-t border-[#262626] pt-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#ffffff] uppercase mb-4">
            The Platform
          </p>
          <h2
            className="font-semibold text-[#ffffff] mb-5 tracking-tight text-3xl sm:text-4xl md:text-[44px] leading-[1.1] max-w-[640px]"
          >
            One platform. Every growth opportunity.
          </h2>
          <p
            className="text-base text-[#a1a1aa] max-w-[520px] leading-[1.7]"
          >
            Stop switching between disconnected tools. Bring your business
            intelligence, marketing strategy and execution into one connected
            workspace.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-4">
          {/* Row 1: 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Brand Intelligence (with official Okiza owl logo and brand profile) */}
            <CapabilityCard
              title="Brand Intelligence"
              description="Give AI a complete understanding of your business, products, positioning and customers."
              icon={<Fingerprint className="w-4 h-4 text-[#ffffff]" />}
              previewContent={
                <div className="w-full h-full p-3 flex flex-col justify-between bg-[#0e0e11]">
                  {/* Top Bar with Okiza Logo */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#262626]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-[#1f1f23] border border-[#2e2e32] flex items-center justify-center p-0.5">
                        <OkizaLogo size={16} variant="white" />
                      </div>
                      <span className="text-xs font-semibold text-[#ffffff]">
                        okiza.ai
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[#ffffff]/10 text-[#ffffff] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff] animate-pulse" />
                      99% Match
                    </span>
                  </div>

                  {/* Positioning metadata */}
                  <div className="flex flex-col gap-1.5 my-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#a1a1aa]">Voice</span>
                      <span className="text-[#ffffff] font-medium">Visionary & Direct</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#a1a1aa]">ICP Target</span>
                      <span className="text-[#ffffff] font-medium">B2B Growth Leaders</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#1f1f23] text-[#ffffff] border border-[#2e2e32]">
                      AI Growth OS
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#1f1f23] text-[#a1a1aa] border border-[#2e2e32]">
                      142 Key Attributes
                    </span>
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("brand")}
            />

            {/* 2. Competitive Intelligence (competitor radar and market share gaps) */}
            <CapabilityCard
              title="Competitive Intelligence"
              description="Know who you're competing with, how they position themselves and where you can win."
              icon={<Swords className="w-4 h-4 text-[#ffffff]" />}
              previewContent={
                <div className="w-full h-full p-3 flex flex-col justify-between bg-[#0e0e11]">
                  {/* Top Bar with Alert badge */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#262626]">
                    <span className="text-[10px] font-semibold text-[#ffffff] flex items-center gap-1 uppercase tracking-wider">
                      <Zap className="w-3 h-3 text-[#ffffff]" />
                      Rival Radar
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#ffffff]/10 text-[#ffffff] font-semibold">
                      3 Gaps Detected
                    </span>
                  </div>

                  {/* Competitor comparison bars */}
                  <div className="flex flex-col gap-1.5 my-1">
                    <div>
                      <div className="flex justify-between text-[10px] mb-0.5">
                        <span className="text-[#ffffff] font-semibold">You (Okiza)</span>
                        <span className="text-[#ffffff] font-mono">61% AI Share</span>
                      </div>
                      <div className="w-full bg-[#262626] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#ffffff] h-full rounded-full w-[61%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] mb-0.5">
                        <span className="text-[#a1a1aa]">Rival Co</span>
                        <span className="text-[#a1a1aa] font-mono">45%</span>
                      </div>
                      <div className="w-full bg-[#262626] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#52525b] h-full rounded-full w-[45%]" />
                      </div>
                    </div>
                  </div>

                  {/* Stat */}
                  <span className="text-[10px] text-[#a1a1aa] truncate block">
                    Advantage: <strong className="text-[#ffffff]">+16% higher win rate</strong>
                  </span>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("competitors")}
            />

            {/* 3. SEO & AI Search (AI Answer engine citation & ranking mockup) */}
            <CapabilityCard
              title="SEO & AI Search"
              description="Get discovered across traditional search engines and AI-powered answer platforms."
              icon={<Search className="w-4 h-4 text-[#ffffff]" />}
              previewContent={
                <div className="w-full h-full p-3 flex flex-col justify-between bg-[#0e0e11]">
                  {/* Search query bar */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#18181b] border border-[#2e2e32] text-[10px]">
                    <Search className="w-3 h-3 text-[#a1a1aa] shrink-0" />
                    <span className="text-[#ffffff] truncate font-mono">
                      &quot;best ai growth system&quot;
                    </span>
                  </div>

                  {/* AI Citation Box */}
                  <div className="p-2 rounded bg-[#161619] border border-[#2e2e32] my-1">
                    <div className="flex items-center justify-between text-[10px] mb-1">
                      <span className="font-semibold text-[#ffffff] flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-[#ffffff]" />
                        Perplexity & ChatGPT
                      </span>
                      <span className="text-[#ffffff] font-bold">#1 Cited</span>
                    </div>
                    <p className="text-[10px] text-[#a1a1aa] leading-tight truncate">
                      &quot;Okiza leads autonomous B2B marketing intelligence...&quot;
                    </p>
                  </div>

                  {/* Footer Stats */}
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[#a1a1aa]">Query Volume</span>
                    <span className="text-[#ffffff] font-mono font-semibold">14,200/mo</span>
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("seo")}
            />

            {/* 4. Creative Studio (campaign generator card preview) */}
            <CapabilityCard
              title="Creative Studio"
              description="Create campaigns and content that actually sound like your brand, not generic AI output."
              icon={<Palette className="w-4 h-4 text-[#ffffff]" />}
              previewContent={
                <div className="w-full h-full p-3 flex flex-col justify-between bg-[#0e0e11]">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#262626]">
                    <span className="text-[10px] font-semibold text-[#ffffff] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#ffffff]" />
                      Campaign Generator
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#ffffff] text-[#000000] font-bold">
                      Ready
                    </span>
                  </div>

                  {/* Generated Card Preview */}
                  <div className="p-2 rounded bg-[#1a1a1d] border border-[#2e2e32] my-1">
                    <span className="text-[11px] font-semibold text-[#ffffff] block leading-tight truncate">
                      How we turned seed news into a viral story
                    </span>
                    <span className="text-[10px] text-[#a1a1aa] block mt-0.5 truncate">
                      Multi-format: X Thread • Newsletter • Blog
                    </span>
                  </div>

                  {/* Projected Performance */}
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[#a1a1aa]">Predicted CTR</span>
                    <span className="text-[#ffffff] font-semibold font-mono">4.8% (High)</span>
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("creative")}
            />
          </div>

          {/* Row 2: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 5. Influencer Studio (creator discovery cards with verified avatars) */}
            <CapabilityCard
              title="Influencer Studio"
              description="Find the right creators to reach the right audience for your growth objectives."
              icon={<Users className="w-4 h-4 text-[#ffffff]" />}
              previewContent={
                <div className="w-full h-full p-3 flex flex-col justify-between bg-[#0e0e11]">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#262626]">
                    <span className="text-[10px] font-semibold text-[#ffffff] uppercase tracking-wider">
                      Creator Directory
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ffffff]/10 text-[#ffffff]">
                      12,000+ Verified
                    </span>
                  </div>

                  {/* 2 Creator Row Previews */}
                  <div className="flex flex-col gap-1.5 my-1">
                    <div className="flex items-center justify-between p-1.5 rounded bg-[#161619] border border-[#262626]">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#27272a] border border-[#3f3f46] flex items-center justify-center font-bold text-[9px] text-[#ffffff]">
                          SK
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-medium text-[#ffffff] leading-tight">
                            Sarah K.
                          </span>
                          <span className="text-[9px] text-[#a1a1aa]">SaaS & Growth</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#ffffff] font-semibold">
                        98% Match
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-1.5 rounded bg-[#161619] border border-[#262626]">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#27272a] border border-[#3f3f46] flex items-center justify-center font-bold text-[9px] text-[#ffffff]">
                          AR
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-medium text-[#ffffff] leading-tight">
                            Alex R.
                          </span>
                          <span className="text-[9px] text-[#a1a1aa]">Tech Creator</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#ffffff] font-semibold">
                        95% Match
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] text-[#a1a1aa]">
                    Avg Engagement: <strong className="text-[#ffffff]">6.4%</strong> • Instant Outreach
                  </span>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("influencers")}
            />

            {/* 6. Growth Strategy (action roadmap milestone timeline) */}
            <CapabilityCard
              title="Growth Strategy"
              description="Turn market insights into a prioritised, actionable growth roadmap for your business."
              icon={<Map className="w-4 h-4 text-[#ffffff]" />}
              previewContent={
                <div className="w-full h-full p-3 flex flex-col justify-between bg-[#0e0e11]">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#262626]">
                    <span className="text-[10px] font-semibold text-[#ffffff] uppercase tracking-wider">
                      Sprint Roadmap
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#ffffff]/10 text-[#ffffff] font-mono">
                      Q1 Priority
                    </span>
                  </div>

                  {/* 3 Step Milestones */}
                  <div className="flex flex-col gap-1.5 my-1">
                    <div className="flex items-center gap-2 text-[10px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ffffff] shrink-0" />
                      <span className="text-[#ffffff] truncate font-medium">
                        Target 3 high-intent competitor query gaps
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <div className="w-3.5 h-3.5 rounded-full border border-[#ffffff] flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffffff] animate-ping" />
                      </div>
                      <span className="text-[#ffffff] truncate font-medium">
                        Deploy AI-optimized category landing pages
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <div className="w-3.5 h-3.5 rounded-full border border-[#52525b] shrink-0" />
                      <span className="text-[#a1a1aa] truncate">
                        Activate retargeting sequence on price drops
                      </span>
                    </div>
                  </div>

                  {/* Projected Gain */}
                  <span className="text-[10px] text-[#a1a1aa]">
                    Projected Impact: <strong className="text-[#ffffff]">+38% Qualified Pipeline</strong>
                  </span>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("strategy")}
            />

            {/* 7. Performance Studio (telemetry bar chart and ROI stats) */}
            <CapabilityCard
              title="Performance Studio"
              description="Understand what's working, identify weak points and improve your next marketing actions."
              icon={<BarChart2 className="w-4 h-4 text-[#ffffff]" />}
              previewContent={
                <div className="w-full h-full p-3 flex flex-col justify-between bg-[#0e0e11]">
                  {/* Top ROI Header */}
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#262626]">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-[#ffffff] font-mono">4.2x</span>
                      <span className="text-[10px] text-[#a1a1aa]">Avg ROI</span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#ffffff] flex items-center gap-0.5">
                      <TrendingUp className="w-3 h-3 text-[#ffffff]" />
                      +142% Traffic
                    </span>
                  </div>

                  {/* Sleek 7-Column Histogram */}
                  <div className="flex items-end gap-1.5 h-12 my-1 px-1">
                    <div className="flex-1 rounded-sm bg-[#262626]" style={{ height: "35%" }} />
                    <div className="flex-1 rounded-sm bg-[#333333]" style={{ height: "45%" }} />
                    <div className="flex-1 rounded-sm bg-[#3f3f46]" style={{ height: "40%" }} />
                    <div className="flex-1 rounded-sm bg-[#52525b]" style={{ height: "65%" }} />
                    <div className="flex-1 rounded-sm bg-[#71717a]" style={{ height: "55%" }} />
                    <div className="flex-1 rounded-sm bg-[#ffffff] shadow-[0_0_12px_rgba(255,255,255,0.4)]" style={{ height: "95%" }} />
                    <div className="flex-1 rounded-sm bg-[#a1a1aa]" style={{ height: "75%" }} />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[#a1a1aa]">CAC Reduction</span>
                    <span className="text-[#ffffff] font-mono font-bold">-48%</span>
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("performance")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
