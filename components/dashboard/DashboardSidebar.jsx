"use client";

import Link from "next/link";
import OkizaLogo from "@/components/OkizaLogo";
import {
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function DashboardSidebar({ activeScreen, onSelectScreen }) {
  // Map sub-screens to their parent menu item so the sidebar stays highlighted correctly
  const getActiveMenu = () => {
    switch (activeScreen) {
      case "overview":
        return "overview";
      case "growth-analytics":
        return "growth-analytics";
      case "opportunities":
        return "opportunities";
      case "ai-visibility":
      case "prompt-tracking":
      case "ai-answer-inspector":
      case "citation-intelligence":
      case "ai-competitor-benchmarking":
        return "ai-visibility";
      case "seo-intelligence":
      case "technical-seo-audit":
      case "keyword-rankings":
      case "content-opportunities":
        return "seo-intelligence";
      case "local-seo":
      case "local-competitors":
        return "local-seo";
      case "competitors":
      case "competitor-detail":
        return "competitors";
      case "blog-studio":
      case "ai-content-brief":
      case "article-editor":
        return "blog-studio";
      case "social-posts":
      case "create-social-post":
        return "social-posts";
      case "google-posts":
        return "google-posts";
      case "newsroom":
        return "newsroom";
      case "locations":
      case "location-detail":
      case "google-business-profile":
        return "locations";
      case "google-reviews":
      case "review-reply-automation":
        return "google-reviews";
      case "leads-crm":
        return "leads-crm";
      case "automations":
      case "automation-builder":
        return "automations";
      case "reports":
        return "reports";
      case "settings":
      case "integrations":
      case "setup-workspace":
        return "settings";
      case "assistant":
        return "assistant";
      default:
        return activeScreen;
    }
  };

  const activeMenu = getActiveMenu();

  const navGroups = [
    {
      group: "WORKSPACE",
      items: [
        { id: "overview", label: "Overview" },
        { id: "growth-analytics", label: "Growth analytics" },
        { id: "opportunities", label: "Opportunities" },
      ],
    },
    {
      group: "DISCOVER",
      items: [
        { id: "ai-visibility", label: "AI Visibility" },
        { id: "seo-intelligence", label: "SEO Intelligence" },
        { id: "local-seo", label: "Local SEO" },
        { id: "competitors", label: "Competitors" },
      ],
    },
    {
      group: "CREATE",
      items: [
        { id: "blog-studio", label: "Blog Studio" },
        { id: "social-posts", label: "Social Posts" },
        { id: "google-posts", label: "Google Posts" },
        { id: "newsroom", label: "Newsroom" },
      ],
    },
    {
      group: "MANAGE",
      items: [
        { id: "locations", label: "Locations" },
        { id: "google-reviews", label: "Google Reviews" },
        { id: "leads-crm", label: "Leads & CRM" },
        { id: "automations", label: "Automations" },
      ],
    },
    {
      group: "WORKSPACE TOOLS",
      items: [
        { id: "reports", label: "Reports" },
        { id: "settings", label: "Settings" },
        { id: "assistant", label: "Okiza Assistant" },
      ],
    },
  ];

  return (
    <aside className="w-56 sm:w-60 bg-[#09090b] border-r border-[#1f1f23] flex flex-col justify-between shrink-0 min-h-screen text-xs select-none">
      <div className="p-4 space-y-4">
        {/* Brand Header */}
        <div className="flex items-center gap-2 px-1">
          <OkizaLogo size={20} variant="white" />
          <span className="font-bold text-white text-base tracking-tight font-sans">
            okiza
          </span>
        </div>

        {/* Navigation Groups */}
        <nav className="space-y-4 pt-1">
          {navGroups.map((grp) => (
            <div key={grp.group} className="space-y-1">
              <span className="block text-[10px] font-mono font-bold tracking-widest text-[#52525b] uppercase px-3 py-1">
                {grp.group}
              </span>
              <div className="space-y-0.5">
                {grp.items.map((item) => {
                  const isActive = activeMenu === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSelectScreen(item.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-[#1c1c20] text-white font-medium border-l-2 border-white pl-2.5 shadow-sm"
                          : "text-[#8e8e93] hover:text-white hover:bg-[#141416]"
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Screen Index Link */}
      <div className="p-4 border-t border-[#1f1f23]">
        <button
          onClick={() => onSelectScreen("screen-index")}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all cursor-pointer ${
            activeScreen === "screen-index"
              ? "bg-[#1c1c20] text-white font-medium border-l-2 border-white pl-2.5"
              : "text-[#8e8e93] hover:text-white hover:bg-[#141416]"
          }`}
        >
          <span>Screen index</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
