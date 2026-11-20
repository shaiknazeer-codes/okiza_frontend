
"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import OkizaLogo from "@/components/OkizaLogo";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

// Growth Screens (Pages 2-4)
import {
  GrowthOverviewScreen,
  GrowthAnalyticsScreen,
  GrowthOpportunitiesScreen,
} from "@/components/dashboard/GrowthScreens";

// AI Discovery Screens (Pages 5-9)
import {
  AiVisibilityScreen,
  PromptTrackingScreen,
  AiAnswerInspectorScreen,
  CitationIntelligenceScreen,
  AiCompetitorBenchmarkingScreen,
} from "@/components/dashboard/AiScreens";

// SEO Intelligence Screens (Pages 10-13)
import {
  SeoIntelligenceScreen,
  TechnicalSeoAuditScreen,
  KeywordRankingsScreen,
  ContentOpportunitiesScreen,
} from "@/components/dashboard/SeoScreens";

// Local SEO & Reviews Screens (Pages 14-20)
import {
  LocationsScreen,
  LocationDetailScreen,
  LocalRankingGridScreen,
  LocalCompetitorsScreen,
  GoogleBusinessProfileScreen,
  GoogleReviewsScreen,
  ReviewReplyAutomationScreen,
} from "@/components/dashboard/LocalScreens";

// Content & Studio Screens (Pages 21-27)
import {
  SocialPostsScreen,
  CreateSocialPostScreen,
  BlogStudioScreen,
  AiContentBriefScreen,
  ArticleEditorScreen,
  GooglePostsScreen,
  NewsroomScreen,
} from "@/components/dashboard/ContentScreens";

// Manage & CRM Screens (Pages 28-32)
import {
  CompetitorIntelligenceScreen,
  CompetitorDetailScreen,
  LeadsCrmScreen,
  AutomationsScreen,
  AutomationBuilderScreen,
} from "@/components/dashboard/ManageScreens";

// Tools, Settings & Index Screens (Pages 33-38)
import {
  ReportsScreen,
  IntegrationsScreen,
  SetupWorkspaceScreen,
  WorkspaceSettingsScreen,
  OkizaAssistantScreen,
  ScreenIndexScreen,
} from "@/components/dashboard/ToolsScreens";

// Deep SEO and AEO Comprehensive Reports
import SeoReportView from "@/components/SeoReportView";
import AeoReportView from "@/components/AeoReportView";

import {
  Search,
  Bell,
  Menu,
  X,
} from "lucide-react";

function DashboardContent() {
  const searchParams = useSearchParams();
  const screenParam = searchParams?.get("screen") || searchParams?.get("tab") || "overview";
  const domainParam = searchParams?.get("domain") || "prepzue.com";

  const [activeScreenState, setActiveScreenState] = useState(null);
  const activeScreen = activeScreenState || screenParam;

  const [domainState, setDomainState] = useState(null);
  const domain = (domainState || domainParam).replace(/^https?:\/\//, "").trim();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleNavigate = (screenId) => {
    setActiveScreenState(screenId);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("screen", screenId);
      window.history.pushState({}, "", url.toString());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Quick navigation search results
  const searchableScreens = [
    { id: "overview", label: "Growth overview", category: "WORKSPACE" },
    { id: "growth-analytics", label: "Growth analytics", category: "WORKSPACE" },
    { id: "opportunities", label: "Growth opportunities", category: "WORKSPACE" },
    { id: "ai-visibility", label: "AI Visibility", category: "DISCOVER" },
    { id: "prompt-tracking", label: "Prompt tracking", category: "DISCOVER" },
    { id: "ai-answer-inspector", label: "AI answer inspector", category: "DISCOVER" },
    { id: "citation-intelligence", label: "Citation intelligence", category: "DISCOVER" },
    { id: "ai-competitor-benchmarking", label: "AI competitor benchmarking", category: "DISCOVER" },
    { id: "seo-intelligence", label: "SEO Intelligence", category: "DISCOVER" },
    { id: "technical-seo-audit", label: "Technical SEO audit", category: "DISCOVER" },
    { id: "keyword-rankings", label: "Keyword rankings", category: "DISCOVER" },
    { id: "content-opportunities", label: "Content opportunities", category: "DISCOVER" },
    { id: "local-seo", label: "Local ranking grid", category: "DISCOVER" },
    { id: "local-competitors", label: "Local competitors", category: "DISCOVER" },
    { id: "competitors", label: "Competitor Intelligence", category: "MANAGE" },
    { id: "competitor-detail", label: "Competitor detail", category: "MANAGE" },
    { id: "blog-studio", label: "Blog Studio", category: "CREATE" },
    { id: "ai-content-brief", label: "AI content brief", category: "CREATE" },
    { id: "article-editor", label: "Article editor", category: "CREATE" },
    { id: "social-posts", label: "Social Media Posts", category: "CREATE" },
    { id: "create-social-post", label: "Create a social post", category: "CREATE" },
    { id: "google-posts", label: "Google Business Profile post", category: "CREATE" },
    { id: "newsroom", label: "Newsroom", category: "CREATE" },
    { id: "locations", label: "Locations", category: "MANAGE" },
    { id: "location-detail", label: "Location Detail (Indiranagar)", category: "MANAGE" },
    { id: "google-business-profile", label: "Google Business Profile", category: "MANAGE" },
    { id: "google-reviews", label: "Google reviews", category: "MANAGE" },
    { id: "review-reply-automation", label: "Review reply automation", category: "MANAGE" },
    { id: "leads-crm", label: "Leads & CRM", category: "MANAGE" },
    { id: "automations", label: "Automations", category: "MANAGE" },
    { id: "automation-builder", label: "Automation builder", category: "MANAGE" },
    { id: "reports", label: "Reports", category: "TOOLS" },
    { id: "integrations", label: "Integrations", category: "TOOLS" },
    { id: "setup-workspace", label: "Set up your workspace", category: "TOOLS" },
    { id: "settings", label: "Workspace settings", category: "TOOLS" },
    { id: "assistant", label: "Okiza Assistant", category: "TOOLS" },
    { id: "screen-index", label: "Screen index (All 36 Screens)", category: "NAVIGATION" },
    { id: "seo-report", label: "Full 10-Heading SEO Report", category: "REPORTS" },
    { id: "aeo-report", label: "Full 13-Heading AEO Report", category: "REPORTS" },
  ];

  const filteredScreens = searchQuery.trim()
    ? searchableScreens.filter((s) =>
        s.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Render the selected screen
  const renderScreen = () => {
    switch (activeScreen) {
      // Growth (Pages 2-4)
      case "overview":
        return <GrowthOverviewScreen onNavigate={handleNavigate} />;
      case "growth-analytics":
        return <GrowthAnalyticsScreen onNavigate={handleNavigate} />;
      case "opportunities":
        return <GrowthOpportunitiesScreen onNavigate={handleNavigate} />;

      // AI Visibility (Pages 5-9)
      case "ai-visibility":
        return <AiVisibilityScreen onNavigate={handleNavigate} />;
      case "prompt-tracking":
        return <PromptTrackingScreen onNavigate={handleNavigate} />;
      case "ai-answer-inspector":
        return <AiAnswerInspectorScreen onNavigate={handleNavigate} />;
      case "citation-intelligence":
        return <CitationIntelligenceScreen onNavigate={handleNavigate} />;
      case "ai-competitor-benchmarking":
        return <AiCompetitorBenchmarkingScreen onNavigate={handleNavigate} />;

      // SEO Intelligence (Pages 10-13)
      case "seo-intelligence":
        return <SeoIntelligenceScreen onNavigate={handleNavigate} />;
      case "technical-seo-audit":
        return <TechnicalSeoAuditScreen onNavigate={handleNavigate} />;
      case "keyword-rankings":
        return <KeywordRankingsScreen onNavigate={handleNavigate} />;
      case "content-opportunities":
        return <ContentOpportunitiesScreen onNavigate={handleNavigate} />;

      // Local SEO & Reviews (Pages 14-20)
      case "locations":
        return <LocationsScreen onNavigate={handleNavigate} />;
      case "location-detail":
        return <LocationDetailScreen onNavigate={handleNavigate} />;
      case "local-seo":
        return <LocalRankingGridScreen onNavigate={handleNavigate} />;
      case "local-competitors":
        return <LocalCompetitorsScreen onNavigate={handleNavigate} />;
      case "google-business-profile":
        return <GoogleBusinessProfileScreen onNavigate={handleNavigate} />;
      case "google-reviews":
        return <GoogleReviewsScreen onNavigate={handleNavigate} />;
      case "review-reply-automation":
        return <ReviewReplyAutomationScreen onNavigate={handleNavigate} />;

      // Content & Studio (Pages 21-27)
      case "social-posts":
        return <SocialPostsScreen onNavigate={handleNavigate} />;
      case "create-social-post":
        return <CreateSocialPostScreen onNavigate={handleNavigate} />;
      case "blog-studio":
        return <BlogStudioScreen onNavigate={handleNavigate} />;
      case "ai-content-brief":
        return <AiContentBriefScreen onNavigate={handleNavigate} />;
      case "article-editor":
        return <ArticleEditorScreen onNavigate={handleNavigate} />;
      case "google-posts":
        return <GooglePostsScreen onNavigate={handleNavigate} />;
      case "newsroom":
        return <NewsroomScreen onNavigate={handleNavigate} />;

      // Manage & CRM (Pages 28-32)
      case "competitors":
        return <CompetitorIntelligenceScreen onNavigate={handleNavigate} />;
      case "competitor-detail":
        return <CompetitorDetailScreen onNavigate={handleNavigate} />;
      case "leads-crm":
        return <LeadsCrmScreen onNavigate={handleNavigate} />;
      case "automations":
        return <AutomationsScreen onNavigate={handleNavigate} />;
      case "automation-builder":
        return <AutomationBuilderScreen onNavigate={handleNavigate} />;

      // Tools & Settings (Pages 33-38)
      case "reports":
        return <ReportsScreen onNavigate={handleNavigate} />;
      case "integrations":
        return <IntegrationsScreen onNavigate={handleNavigate} />;
      case "setup-workspace":
        return <SetupWorkspaceScreen onNavigate={handleNavigate} />;
      case "settings":
        return <WorkspaceSettingsScreen onNavigate={handleNavigate} />;
      case "assistant":
        return <OkizaAssistantScreen onNavigate={handleNavigate} />;
      case "screen-index":
        return <ScreenIndexScreen onNavigate={handleNavigate} />;

      // Full SEO & AEO Deep Reports
      case "seo-report":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#1f1f23]">
              <button
                onClick={() => handleNavigate("seo-intelligence")}
                className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                ← Back to SEO Intelligence
              </button>
              <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase">
                COMPLETE 10-HEADING SEO AUDIT REPORT
              </span>
            </div>
            <SeoReportView domain={domain} />
          </div>
        );
      case "aeo-report":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#1f1f23]">
              <button
                onClick={() => handleNavigate("ai-visibility")}
                className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                ← Back to AI Visibility
              </button>
              <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase">
                COMPLETE 13-HEADING AEO & LLM BENCHMARK REPORT
              </span>
            </div>
            <AeoReportView domain={domain} />
          </div>
        );

      // Default fallback
      default:
        return <GrowthOverviewScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#ededed] flex flex-col md:flex-row antialiased selection:bg-white selection:text-black">
      {/* Desktop Fixed Left Sidebar */}
      <div className="hidden md:block shrink-0 sticky top-0 h-screen overflow-y-auto border-r border-[#1f1f23] z-30">
        <DashboardSidebar
          activeScreen={activeScreen}
          onSelectScreen={handleNavigate}
        />
      </div>

      {/* Mobile Header Bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#0c0c0e] border-b border-[#1f1f23] sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <OkizaLogo size={20} variant="white" />
          <span className="font-bold text-white text-sm tracking-tight">okiza</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNavigate("screen-index")}
            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-[#a1a1aa]"
          >
            Index
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-[#18181b] border border-[#27272a] text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex">
          <div className="w-64 max-w-[80vw] h-full bg-[#09090b] border-r border-[#1f1f23] overflow-y-auto">
            <div className="p-3 border-b border-[#1f1f23] flex items-center justify-between">
              <span className="text-xs font-mono text-[#71717a] uppercase tracking-wider">
                NAVIGATION
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#71717a] hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <DashboardSidebar
              activeScreen={activeScreen}
              onSelectScreen={handleNavigate}
            />
          </div>
          <div
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#09090b]">
        {/* Top Header Bar */}
        <header className="h-14 border-b border-[#1f1f23] bg-[#0c0c0e]/80 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between gap-4 sticky top-0 z-20">
          {/* Quick Search / Command Bar */}
          <div className="relative flex-1 max-w-md">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#71717a] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search screens, metrics, keywords... (36 screens)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full pl-9 pr-16 py-1.5 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white placeholder-[#71717a] focus:outline-none focus:border-zinc-500 transition-colors"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#52525b] border border-[#27272a] px-1.5 py-0.5 rounded">
                Ctrl K
              </span>
            </div>

            {/* Live Search Popup */}
            {isSearchFocused && searchQuery.trim() && (
              <div
                className="absolute left-0 right-0 top-full mt-2 bg-[#141416] border border-[#27272a] rounded-xl shadow-2xl p-2 z-50 space-y-1 max-h-72 overflow-y-auto"
                onMouseDown={(e) => e.preventDefault()}
              >
                {filteredScreens.length > 0 ? (
                  filteredScreens.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleNavigate(item.id);
                        setSearchQuery("");
                        setIsSearchFocused(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#1f1f23] flex items-center justify-between text-white transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] font-mono text-[#71717a] uppercase">
                        {item.category}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="p-3 text-center text-xs text-[#71717a]">
                    No screens matching &ldquo;{searchQuery}&rdquo;
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">

            {/* Current Domain Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141416] border border-[#27272a] text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[#ededed] font-medium">{domain}</span>
            </div>

            {/* Notifications */}
            <button
              onClick={() => handleNavigate("automations")}
              className="p-2 rounded-lg bg-[#141416] border border-[#27272a] text-[#8e8e93] hover:text-white transition-colors relative cursor-pointer"
              title="Notifications & Agent Activity"
            >
              <Bell className="w-3.5 h-3.5" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 absolute top-1.5 right-1.5" />
            </button>

            {/* User Avatar */}
            <button
              onClick={() => handleNavigate("settings")}
              className="w-7 h-7 rounded-full bg-[#1c1c20] border border-[#27272a] flex items-center justify-center text-xs font-medium text-white hover:border-[#3f3f46] transition-colors cursor-pointer"
              title="Workspace Settings"
            >
              O
            </button>
          </div>
        </header>

        {/* Main Viewport Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {renderScreen()}
        </main>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-xs font-mono text-[#71717a]">
          Loading Okiza Workspace...
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
