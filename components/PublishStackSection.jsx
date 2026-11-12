"use client";

import Link from "next/link";
import StackFlowDiagram from "./StackFlowDiagram";
import { ArrowRight, Layers } from "lucide-react";

export default function PublishStackSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#000000] border-b border-[#262626] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Two-Column Header matching the user's screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left Column: STEP 3 - PUBLISH & Title */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-white inline-block"></span>
              <span className="text-xs font-mono tracking-widest text-[#a1a1aa] uppercase font-bold">
                STEP 3 — PUBLISH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Connect your stack.
              <br />
              Publish without leaving it.
            </h2>
          </div>

          {/* Right Column: Explanatory Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
              Okiza reads your site, Search Console and Analytics, then hands back
              ready work — GEO and SEO fixes, articles, UGC videos, X and LinkedIn
              posts. Approve it, and it publishes to WordPress, Webflow, Framer,
              Wix, HubSpot, Sanity, GitHub, LinkedIn, X (Twitter), TikTok,
              Instagram, Facebook.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="/integrations"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#d4d4d8] transition-colors"
              >
                <span>View all 16+ native integrations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stack Flow Diagram with Custom Glow Light Line Animations */}
        <div className="w-full">
          <StackFlowDiagram />
        </div>
      </div>
    </section>
  );
}

