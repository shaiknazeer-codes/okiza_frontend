"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Star,
  MapPin,
  Check,
} from "lucide-react";

export function LocationsScreen({ onNavigate }) {
  const locations = [
    { name: "Bengaluru – Indiranagar", rating: "4.9", views: "4,610", calls: "221", status: "Healthy", screen: "location-detail" },
    { name: "Mumbai – Bandra", rating: "4.8", views: "3,912", calls: "194", status: "Healthy", screen: "location-detail" },
    { name: "Delhi – CP", rating: "4.6", views: "3,104", calls: "168", status: "Needs review", screen: "location-detail" },
    { name: "Pune – Koregaon Park", rating: "4.8", views: "2,893", calls: "147", status: "Healthy", screen: "location-detail" },
    { name: "Hyderabad – Jubilee Hills", rating: "4.7", views: "1,552", calls: "103", status: "Needs review", screen: "location-detail" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            MANAGE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Locations
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Manage visibility and reputation across all business locations.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            + Add location
          </button>
        </div>
      </div>

      {/* Row 1: 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {[
          { label: "TOTAL LOCATIONS", val: "10", change: "Active" },
          { label: "AVG. RATING", val: "4.8 ★", change: "+0.1" },
          { label: "MAP IMPRESSIONS", val: "16,071", change: "+12%" },
          { label: "ACTIONS", val: "1,033", change: "+9%" },
        ].map((kpi, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-[#232326] bg-[#101012] flex flex-col justify-between"
          >
            <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
              {kpi.label}
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
                {kpi.val}
              </span>
              <span className="text-xs font-mono font-medium text-emerald-400">
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Location performance table */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Location performance</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5 font-mono">
            All business profiles connected via Google Business Profile
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">LOCATION</th>
                <th className="py-2.5">RATING</th>
                <th className="py-2.5">VIEWS</th>
                <th className="py-2.5">CALLS</th>
                <th className="py-2.5 text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {locations.map((loc, idx) => (
                <tr
                  key={idx}
                  onClick={() => onNavigate(loc.screen)}
                  className="hover:bg-[#141416] transition-colors cursor-pointer"
                >
                  <td className="py-3.5 font-medium text-white flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#71717a]" />
                    <span>{loc.name}</span>
                  </td>
                  <td className="py-3.5 font-mono font-bold text-white">{loc.rating}</td>
                  <td className="py-3.5 font-mono text-[#a1a1aa]">{loc.views}</td>
                  <td className="py-3.5 font-mono text-white">{loc.calls}</td>
                  <td className="py-3.5 text-right">
                    <span
                      className={`font-mono text-xs ${
                        loc.status === "Healthy" ? "text-emerald-400" : "text-amber-400"
                      }`}
                    >
                      {loc.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function LocationDetailScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            MANAGE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Indiranagar, Bengaluru
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Your performance in local Google Search and Maps.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button
            onClick={() => onNavigate("google-business-profile")}
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm"
          >
            Edit profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["Overview", "Local rankings", "Reviews", "Posts", "Profile health"].map((tab) => {
          const tabKey = tab.toLowerCase().replace(" ", "-");
          const isActive = (activeTab === "overview" && tab === "Overview") || activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "Overview" ? "overview" : tabKey)}
              className={`pb-3 font-medium transition-colors cursor-pointer border-b-2 ${
                isActive
                  ? "border-white text-white font-semibold"
                  : "border-transparent text-[#8e8e93] hover:text-white"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Row 1: 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            PROFILE VIEWS
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              6,071
            </span>
            <span className="text-xs font-mono text-emerald-400">+8.9%</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            INTERACTIONS
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              1,033
            </span>
            <span className="text-xs font-mono text-emerald-400">+12%</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            CONVERSION RATE
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              6.9%
            </span>
            <span className="text-xs font-mono text-emerald-400">+0.3pt</span>
          </div>
        </div>
      </div>

      {/* Row 2: Discovery and actions + Profile completeness */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Discovery and actions (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Discovery and actions</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Calls, website clicks, requests for directions
            </p>
          </div>

          <div className="relative w-full h-48 flex items-end pt-4 pb-2">
            <svg viewBox="0 0 500 160" preserveAspectRatio="none" className="w-full h-36 overflow-visible">
              <path
                d="M 10 130 L 80 110 L 150 120 L 220 100 L 290 80 L 360 90 L 430 70 L 485 90"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="130" r="3" fill="#ffffff" />
              <circle cx="485" cy="90" r="3" fill="#ffffff" />
            </svg>
          </div>

          <div className="pt-3 border-t border-[#1f1f23] flex justify-between text-[11px] font-mono text-[#71717a]">
            <span>Day 1</span>
            <span>Day 10</span>
            <span>Day 20</span>
            <span>Day 30</span>
          </div>
        </div>

        {/* Profile completeness (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Profile completeness</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Important missing fields
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Primary category</span>
              <span className="font-mono text-emerald-400 font-semibold">Complete</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Opening hours</span>
              <span className="font-mono text-emerald-400 font-semibold">Complete</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Service attributes</span>
              <span className="font-mono text-amber-400 font-semibold">2 missing</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f23] text-xs">
              <span className="text-[#8e8e93]">Business photos</span>
              <span className="font-mono text-white font-semibold">Add 4 more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LocalRankingGridScreen({ onNavigate }) {
  // 5 rows x 7 cols grid matching exact specification
  const gridRanks = [
    [5, 4, 3, 2, 4, 6, 7],
    [7, 5, 3, 1, 2, 5, 8],
    [9, 6, 4, 2, 3, 5, 7],
    [11, 8, 5, 3, 4, 6, 10],
    [14, 9, 7, 5, 6, 8, 13],
  ];

  const getRankBadgeStyle = (rank) => {
    if (rank <= 3) {
      return {
        border: "border-[#10b981]",
        text: "text-white",
        bg: "bg-[#06241b]/80 shadow-[0_0_12px_rgba(16,185,129,0.25)]",
      };
    }
    if (rank <= 10) {
      return {
        border: "border-[#f59e0b]",
        text: "text-white",
        bg: "bg-[#251907]/80 shadow-[0_0_12px_rgba(245,158,11,0.2)]",
      };
    }
    return {
      border: "border-[#f43f5e]",
      text: "text-white",
      bg: "bg-[#290d16]/80 shadow-[0_0_12px_rgba(244,63,94,0.25)]",
    };
  };

  return (
    <div className="space-y-6">
      {/* Header matching Page 16 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            DISCOVER
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Local ranking grid
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            See where you rank on Maps across a geographic grid.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            Run grid scan
          </button>
        </div>
      </div>

      {/* Filter / Search Bar Pills */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="px-4 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white font-medium hover:border-[#3f3f46] transition-colors cursor-pointer">
          coffee shop near me
        </button>
        <button className="px-4 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white font-medium hover:border-[#3f3f46] transition-colors cursor-pointer">
          5 km radius
        </button>
        <span className="text-sm font-semibold text-white pl-1">
          Indiranagar, Bengaluru
        </span>
      </div>

      {/* 2 Column Layout: Geographic Map Grid (8 cols) + Scan Summary (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Map Grid Canvas (8 cols) */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border border-[#232326] bg-[#0c0d10] relative overflow-hidden flex flex-col justify-between min-h-[500px]">
          {/* Authentic Dark Vector Street Map Graphic Overlay */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <svg
              viewBox="0 0 800 550"
              preserveAspectRatio="none"
              className="w-full h-full opacity-60"
            >
              {/* Secondary Grid Streets */}
              <defs>
                <pattern
                  id="localRoadGrid"
                  width="70"
                  height="70"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 70 L 70 70 M 70 0 L 70 70"
                    stroke="#1d1e24"
                    strokeWidth="1.2"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#localRoadGrid)" />

              {/* Park & Greenery Polygon Patches */}
              <polygon
                points="240,40 330,35 340,95 245,100"
                fill="#162c20"
                opacity="0.8"
              />
              <polygon
                points="560,70 650,60 660,130 570,140"
                fill="#162c20"
                opacity="0.7"
              />
              <polygon
                points="340,240 430,230 440,320 350,330"
                fill="#162c20"
                opacity="0.85"
              />
              <polygon
                points="180,410 260,400 270,480 190,490"
                fill="#162c20"
                opacity="0.75"
              />
              <polygon
                points="470,410 560,395 570,470 480,485"
                fill="#162c20"
                opacity="0.8"
              />

              {/* Major Diagonal Arterial Highways & Roads */}
              {/* Road 1: Diagonal Northwest to Southeast */}
              <path
                d="M 120 -20 L 450 580"
                stroke="#2a2c35"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M 120 -20 L 450 580"
                stroke="#1f2128"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Road 2: Diagonal Southwest to Northeast */}
              <path
                d="M -30 420 L 830 180"
                stroke="#2a2c35"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M -30 420 L 830 180"
                stroke="#1f2128"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Road 3: Secondary Slicing Avenue */}
              <path
                d="M 440 -20 L 400 580"
                stroke="#282a32"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Road 4: East-West Arterial */}
              <path
                d="M -20 280 L 820 230"
                stroke="#2a2c35"
                strokeWidth="5.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Compass Indicator at Top Right */}
          <div className="flex justify-end items-center relative z-10">
            <span className="text-xs font-mono font-semibold text-[#8e8e93] tracking-widest">
              N ↑
            </span>
          </div>

          {/* 5 Rows x 7 Columns Ranking Node Grid */}
          <div className="relative z-10 py-6 my-auto max-w-2xl mx-auto w-full space-y-6 sm:space-y-8">
            {gridRanks.map((row, rIdx) => (
              <div
                key={rIdx}
                className="flex justify-between items-center px-2 sm:px-4"
              >
                {row.map((rank, cIdx) => {
                  const style = getRankBadgeStyle(rank);
                  const isUserLocationTarget = rIdx === 2 && cIdx === 3; // Center node [2]
                  return (
                    <div
                      key={cIdx}
                      className="relative flex items-center justify-center"
                    >
                      {/* Circular Ranking Node */}
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs sm:text-sm transition-transform hover:scale-110 cursor-pointer ${style.border} ${style.bg} ${style.text}`}
                      >
                        {rank}
                      </div>

                      {/* 'Your location' Floating Badge pinned to center node */}
                      {isUserLocationTarget && (
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#09090b]/95 border border-[#3f3f46] text-[10px] font-medium text-white shadow-xl whitespace-nowrap pointer-events-none z-20">
                          <span className="w-2 h-2 rounded-full bg-[#3b82f6] border border-white shrink-0 animate-pulse" />
                          <span>Your location</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Map Attribution at Bottom Left */}
          <div className="flex justify-start items-center relative z-10 pt-2">
            <span className="text-[11px] font-mono text-[#71717a]">
              Illustrative street map
            </span>
          </div>
        </div>

        {/* Scan Summary (4 cols) */}
        <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between min-h-[500px]">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Scan summary
              </h2>
              <p className="text-xs text-[#8e8e93] mt-1 font-mono">
                35 search locations
              </p>
            </div>

            {/* Huge Average Map Rank */}
            <div>
              <span className="text-5xl sm:text-6xl font-bold font-mono text-white tracking-tight block">
                5.9
              </span>
              <span className="text-xs text-[#8e8e93] block mt-1.5">
                Average map rank
              </span>
            </div>

            {/* Breakdown Ring List matching exact image */}
            <div className="space-y-4 pt-4 border-t border-[#1f1f23]">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full border-2 border-emerald-400 shrink-0" />
                  <span className="text-[#d4d4d8] font-medium">Top 3</span>
                </div>
                <span className="font-mono font-bold text-white text-sm">8</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full border-2 border-amber-400 shrink-0" />
                  <span className="text-[#d4d4d8] font-medium">Ranks 4–10</span>
                </div>
                <span className="font-mono font-bold text-white text-sm">24</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full border-2 border-rose-400 shrink-0" />
                  <span className="text-[#d4d4d8] font-medium">Rank 11+</span>
                </div>
                <span className="font-mono font-bold text-white text-sm">3</span>
              </div>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="pt-6 border-t border-[#1f1f23] mt-6">
            <button
              onClick={() => onNavigate("local-competitors")}
              className="w-full py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all cursor-pointer shadow-sm text-center"
            >
              View local competitors →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LocalCompetitorsScreen({ onNavigate }) {
  const comps = [
    { name: "Your business", rank: "5.9", rev: 297, rating: "4.8", win: 12, isUser: true },
    { name: "SearchCraft Agency", rank: "2.4", rev: 628, rating: "4.9", win: 38, isUser: false },
    { name: "MetricHub", rank: "3.6", rev: 412, rating: "4.6", win: 26, isUser: false },
    { name: "Northstar Media", rank: "4.9", rev: 351, rating: "4.8", win: 19, isUser: false },
    { name: "Digital Loop", rank: "6.7", rev: 201, rating: "4.7", win: 9, isUser: false },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            DISCOVER
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Local competitors
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Discover who outranks your business around each store.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm">
            Compare
          </button>
        </div>
      </div>

      {/* Competitor Scoreboard */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
        <div>
          <h2 className="text-base font-bold text-white">Local competitor scoreboard</h2>
          <p className="text-xs text-[#8e8e93] mt-0.5 font-mono">
            Indiranagar, Bengaluru • Keyword: marketing agency near me
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#71717a] font-mono text-[10px] uppercase">
                <th className="py-2.5">BUSINESS</th>
                <th className="py-2.5">AVG. MAP RANK</th>
                <th className="py-2.5">REVIEWS</th>
                <th className="py-2.5">RATING</th>
                <th className="py-2.5 text-right">WINNING QUERIES</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18181b]">
              {comps.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#141416] transition-colors">
                  <td className={`py-3.5 ${row.isUser ? "text-white font-bold" : "text-[#d4d4d8] font-medium"}`}>
                    {row.name}
                  </td>
                  <td className="py-3.5 font-mono font-bold text-white">{row.rank}</td>
                  <td className="py-3.5 font-mono text-[#a1a1aa]">{row.rev}</td>
                  <td className="py-3.5 font-mono text-white">{row.rating}</td>
                  <td className="py-3.5 font-mono text-white text-right">{row.win}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Suggested Action Banner */}
      <div className="p-5 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-white">Suggested action</h3>
          <p className="text-xs text-[#8e8e93] mt-0.5">
            Competitors cover 7 service categories missing from your Google Business Profile.
          </p>
        </div>
        <button
          onClick={() => onNavigate("google-business-profile")}
          className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0"
        >
          Create improvement plan
        </button>
      </div>
    </div>
  );
}

export function GoogleBusinessProfileScreen({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            MANAGE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Google Business Profile
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Update business information, categories, assets and opening hours.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0">
          Save changes
        </button>
      </div>

      {/* 2 Columns: Profile Information + Profile Health */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Profile info (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Profile information</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Location: Bengaluru / Indiranagar
            </p>
          </div>

          <div className="space-y-3.5 pt-2 text-xs">
            <div>
              <label className="text-[#8e8e93] block mb-1">Business name</label>
              <input
                type="text"
                defaultValue="Okiza Growth Studio"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-[#8e8e93] block mb-1">Primary category</label>
              <input
                type="text"
                defaultValue="Marketing consultant"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-[#8e8e93] block mb-1">Website</label>
              <input
                type="text"
                defaultValue="https://okiza.example"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-[#8e8e93] block mb-1">Phone</label>
              <input
                type="text"
                defaultValue="+91 ••••• ••248"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-[#8e8e93] block mb-1">Opening hours</label>
              <input
                type="text"
                defaultValue="Mon–Sat 10:00–19:00"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Profile health (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h2 className="text-base font-bold text-white">Profile health</h2>
              <p className="text-xs text-[#8e8e93] mt-0.5">
                4 recommendations to improve
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                { title: "Add service photos", status: "Not done" },
                { title: "Update descriptions", status: "Review" },
                { title: "Verify products", status: "Done" },
                { title: "Enable messaging", status: "Suggested" },
              ].map((rec, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border border-[#1f1f23] bg-[#141417] flex justify-between items-center text-xs"
                >
                  <span className="text-white font-medium">{rec.title}</span>
                  <span
                    className={`font-mono text-[11px] ${
                      rec.status === "Done" ? "text-emerald-400" : "text-[#8e8e93]"
                    }`}
                  >
                    {rec.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#1f1f23] mt-6">
            <button className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm text-center">
              Request verification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GoogleReviewsScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("all");

  const reviews = [
    { name: "Ananya R.", stars: "★★★★★", text: "Excellent service and support", city: "Bengaluru" },
    { name: "Rohan M.", stars: "★★☆☆☆", text: "Delivery took longer than expected", city: "Mumbai" },
    { name: "Priya S.", stars: "★★★★☆", text: "Friendly team, helpful experience", city: "Delhi" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            MANAGE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Google reviews
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Every review, every location, one inbox.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-[#27272a] text-xs text-white hover:bg-[#1a1a1e] transition-colors cursor-pointer font-medium">
            <span>Last 30 days</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
          </button>
          <button
            onClick={() => onNavigate("review-reply-automation")}
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm"
          >
            Review settings
          </button>
        </div>
      </div>

      {/* Row 1: 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            AVERAGE RATING
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              4.8 ★
            </span>
            <span className="text-xs font-mono text-emerald-400">+0.1</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            TOTAL REVIEWS
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              297
            </span>
            <span className="text-xs font-mono text-emerald-400">+31</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#232326] bg-[#101012]">
          <span className="text-[11px] font-mono text-[#8e8e93] font-medium tracking-wider uppercase block">
            AWAITING RESPONSE
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              13
            </span>
            <span className="text-xs font-mono text-amber-400">Needs action</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1f1f23] text-xs">
        {["All reviews", "Unanswered", "AI drafts", "Published"].map((tab) => {
          const tabKey = tab.toLowerCase().replace(" ", "-");
          const isActive = (activeTab === "all" && tab === "All reviews") || activeTab === tabKey;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "All reviews" ? "all" : tabKey)}
              className={`pb-3 font-medium transition-colors cursor-pointer border-b-2 ${
                isActive
                  ? "border-white text-white font-semibold"
                  : "border-transparent text-[#8e8e93] hover:text-white"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Row 2: Incoming reviews + Response workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Incoming reviews (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Incoming reviews</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Choose a review to respond
            </p>
          </div>

          <div className="space-y-3">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-[#1f1f23] bg-[#141417] space-y-1.5 hover:border-[#3f3f46] transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white font-semibold">
                    <span className="text-amber-400 mr-2">{r.stars}</span>
                    {r.name} — {r.text}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#71717a] block">
                  {r.city}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Response workspace (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl border border-[#232326] bg-[#101012] flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h2 className="text-base font-bold text-white">Response workspace</h2>
              <p className="text-xs text-[#8e8e93] mt-0.5">
                AI drafts stay editable until approval
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#1f1f23] bg-[#141417] text-xs text-[#d4d4d8] leading-relaxed">
              Thank you for sharing your feedback. We appreciate the chance to make this right and will follow up directly.
            </div>
          </div>

          <div className="pt-5 border-t border-[#1f1f23] mt-6">
            <button className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm text-center">
              Approve &amp; post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReviewReplyAutomationScreen({ onNavigate }) {
  const [draftsOn, setDraftsOn] = useState(true);
  const [approvalOn, setApprovalOn] = useState(true);
  const [autoPostOn, setAutoPostOn] = useState(false);
  const [flagUrgentOn, setFlagUrgentOn] = useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
            MANAGE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Review reply automation
          </h1>
          <p className="text-xs sm:text-sm text-[#8e8e93] mt-1">
            Set rules for AI drafting, approval and publishing.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm shrink-0">
          Save rules
        </button>
      </div>

      {/* 2 Column Layout: Response Policy + Voice and Safeguards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Response policy (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Response policy</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Control what Okiza may do automatically
            </p>
          </div>

          <div className="space-y-3 pt-2 text-xs">
            <div className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] flex justify-between items-center">
              <span className="text-white font-medium">Automatically draft replies</span>
              <button
                onClick={() => setDraftsOn(!draftsOn)}
                className={`px-3 py-1 rounded-md font-mono text-[11px] font-semibold transition-colors cursor-pointer ${
                  draftsOn ? "bg-white text-black" : "bg-[#27272a] text-[#8e8e93]"
                }`}
              >
                {draftsOn ? "On" : "Off"}
              </button>
            </div>

            <div className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] flex justify-between items-center">
              <span className="text-white font-medium">Require approval below 4 stars</span>
              <button
                onClick={() => setApprovalOn(!approvalOn)}
                className={`px-3 py-1 rounded-md font-mono text-[11px] font-semibold transition-colors cursor-pointer ${
                  approvalOn ? "bg-white text-black" : "bg-[#27272a] text-[#8e8e93]"
                }`}
              >
                {approvalOn ? "On" : "Off"}
              </button>
            </div>

            <div className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] flex justify-between items-center">
              <span className="text-white font-medium">Auto-post approved templates</span>
              <button
                onClick={() => setAutoPostOn(!autoPostOn)}
                className={`px-3 py-1 rounded-md font-mono text-[11px] font-semibold transition-colors cursor-pointer ${
                  autoPostOn ? "bg-white text-black" : "bg-[#27272a] text-[#8e8e93]"
                }`}
              >
                {autoPostOn ? "On" : "Off"}
              </button>
            </div>

            <div className="p-3.5 rounded-xl border border-[#1f1f23] bg-[#141417] flex justify-between items-center">
              <span className="text-white font-medium">Flag urgent service complaints</span>
              <button
                onClick={() => setFlagUrgentOn(!flagUrgentOn)}
                className={`px-3 py-1 rounded-md font-mono text-[11px] font-semibold transition-colors cursor-pointer ${
                  flagUrgentOn ? "bg-white text-black" : "bg-[#27272a] text-[#8e8e93]"
                }`}
              >
                {flagUrgentOn ? "On" : "Off"}
              </button>
            </div>
          </div>
        </div>

        {/* Voice and safeguards (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-[#232326] bg-[#101012] space-y-4">
          <div>
            <h2 className="text-base font-bold text-white">Voice and safeguards</h2>
            <p className="text-xs text-[#8e8e93] mt-0.5">
              Keep replies accurate and human
            </p>
          </div>

          <div className="space-y-4 pt-2 text-xs">
            <div>
              <label className="text-[#8e8e93] block mb-1.5 font-medium">Tone</label>
              <div className="px-3.5 py-2.5 rounded-xl bg-[#141417] border border-[#27272a] text-white flex justify-between items-center cursor-pointer">
                <span>Warm &amp; professional</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8e8e93]" />
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[#8e8e93] block mb-2 font-medium">Never auto-publish</span>
              <ul className="space-y-1.5 text-[#d4d4d8]">
                <li>• Refund requests</li>
                <li>• Legal threats</li>
                <li>• Personal information</li>
                <li>• Safety concerns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
