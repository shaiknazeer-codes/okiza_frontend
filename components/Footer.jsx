"use client";

import Link from "next/link";
import OkizaLogo from "./OkizaLogo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#262626] bg-[#000000] text-[#a1a1aa] px-6 sm:px-12 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand info */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <OkizaLogo size={26} variant="white" />
              <span className="font-semibold text-lg text-[#ffffff] tracking-tight">
                okiza
              </span>
            </div>
            <p className="text-xs text-[#a1a1aa] max-w-sm leading-relaxed">
              The AI Growth Operating System. Empowering brands with continuous market
              intelligence, competitor analysis, and automated execution.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-[#ffffff] animate-pulse" />
              <span className="text-[11px] font-mono text-[#ffffff]">
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#ffffff] uppercase tracking-wider">
              Platform
            </span>
            <Link href="/agents/seo" className="text-xs hover:text-[#ffffff] transition-colors">
              SEO Agent
            </Link>
            <Link href="/agents/geo" className="text-xs hover:text-[#ffffff] transition-colors">
              GEO Agent
            </Link>
            <Link href="/agents/coding" className="text-xs hover:text-[#ffffff] transition-colors">
              Coding Agent
            </Link>
            <Link href="/agents/writer" className="text-xs hover:text-[#ffffff] transition-colors">
              Writer Agent
            </Link>
            <Link href="/integrations" className="text-xs hover:text-[#ffffff] transition-colors">
              Integrations
            </Link>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#ffffff] uppercase tracking-wider">
              Resources
            </span>
            <Link href="/growth-methodology" className="text-xs hover:text-[#ffffff] transition-colors">
              Growth Methodology
            </Link>
            <Link href="/stories" className="text-xs hover:text-[#ffffff] transition-colors">
              Customer Stories
            </Link>
            <Link href="/docs" className="text-xs hover:text-[#ffffff] transition-colors">
              API & Webhooks
            </Link>
            <Link href="/faq" className="text-xs hover:text-[#ffffff] transition-colors">
              Help Center & FAQ
            </Link>
            <Link href="/pricing" className="text-xs hover:text-[#ffffff] transition-colors">
              Pricing Plans
            </Link>
          </div>

          {/* Links Column 3 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#ffffff] uppercase tracking-wider">
              Company
            </span>
            <Link href="#" className="text-xs hover:text-[#ffffff] transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-xs hover:text-[#ffffff] transition-colors">
              Careers
            </Link>
            <Link href="#" className="text-xs hover:text-[#ffffff] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs hover:text-[#ffffff] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:text-[#ffffff] transition-colors">
              Security & Trust
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>© 2025 Okiza Inc. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#ffffff] transition-colors">
              Twitter / X
            </a>
            <a href="#" className="hover:text-[#ffffff] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
