"use client";

import { useState } from "react";
import Link from "next/link";
import OkizaLogo from "@/components/OkizaLogo";
import {
  LayoutDashboard,
  Eye,
  Globe,
  Key,
  Swords,
  Sparkles,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  AlertCircle,
  Clock,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  Search,
  Filter,
  RefreshCw,
  LogOut,
  Settings,
  Zap,
  Layers,
  ArrowUpRight,
  Code2,
  ChevronRight,
  ArrowLeft,
  Activity,
  Bot,
  Calendar,
  X,
  Info,
  HelpCircle,
  Wand2,
  FileText,
  BarChart2,
  Target,
  Share2,
  SlidersHorizontal,
  Plus,
  Trash2,
} from "lucide-react";

/* =========================================================================
   AI MODEL LOGO ICONS (SVG)
   ========================================================================= */

function ChatGptLogo({ className = "w-4 h-4 text-white" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="ChatGPT logo">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
    </svg>
  );
}

function PerplexityLogo({ className = "w-4 h-4 text-[#20b2aa]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Perplexity logo">
      <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z"/>
    </svg>
  );
}

function ClaudeLogo({ className = "w-4 h-4 text-[#d97706]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Claude logo">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/>
    </svg>
  );
}

function GeminiLogo({ className = "w-4 h-4 text-[#4285f4]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Google Gemini logo">
      <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" />
    </svg>
  );
}

function IndiaFlag({ className = "w-4 h-2.5 rounded-[2px] overflow-hidden shrink-0 inline-block border border-white/10" }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-label="India flag">
      <rect width="24" height="5.33" fill="#FF9933" />
      <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
      <rect y="10.66" width="24" height="5.33" fill="#138808" />
      <circle cx="12" cy="8" r="2.2" fill="none" stroke="#000080" strokeWidth="0.6" />
      <circle cx="12" cy="8" r="0.4" fill="#000080" />
    </svg>
  );
}

/* =========================================================================
   REUSABLE SVG RING & DONUT CHART COMPONENTS
   ========================================================================= */

function CircularRing({
  value,
  max = 100,
  size = 76,
  stroke = 6,
  color = "#10b981",
  trackColor = "#1f1f23",
  children,
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.max(value, 0), max);
  const strokeDashoffset = circumference - (progress / max) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {children ? children : (
          <span className="text-xs font-semibold text-white font-mono">{value}%</span>
        )}
      </div>
    </div>
  );
}

function MultiEngineConcentricRings({ size = 180 }) {
  const center = size / 2;
  const stroke = 6;
  const rings = [
    { name: "ChatGPT (GPT-4o)", val: 91, radius: 76, color: "#10b981" },
    { name: "Perplexity AI", val: 86, radius: 60, color: "#20b2aa" },
    { name: "Claude 3.5 Sonnet", val: 82, radius: 44, color: "#d97706" },
    { name: "Google Gemini", val: 79, radius: 28, color: "#4285f4" },
  ];

  return (
    <div className="relative inline-flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        {rings.map((r, i) => {
          const circumference = 2 * Math.PI * r.radius;
          const offset = circumference - (r.val / 100) * circumference;
          return (
            <g key={i}>
              <circle
                cx={center}
                cy={center}
                r={r.radius}
                stroke="#18181b"
                strokeWidth={stroke}
                fill="none"
              />
              <circle
                cx={center}
                cy={center}
                r={r.radius}
                stroke={r.color}
                strokeWidth={stroke}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-700 ease-out"
              />
            </g>
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-sm font-semibold text-white font-mono">84.5%</span>
        <span className="text-[9px] font-mono uppercase tracking-wider text-[#71717a]">INDEX</span>
      </div>
    </div>
  );
}

function CompetitiveShareDonut({ size = 140 }) {
  const center = size / 2;
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const segments = [
    { name: "prepzue.com", pct: 46.2, color: "#10b981" },
    { name: "Jira", pct: 24.5, color: "#3b82f6" },
    { name: "Asana", pct: 16.8, color: "#ec4899" },
    { name: "Linear", pct: 12.5, color: "#a855f7" },
  ];

  let accumulated = 0;

  return (
    <div className="relative inline-flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#18181b"
          strokeWidth={stroke}
          fill="none"
        />
        {segments.map((seg, idx) => {
          const segLength = (seg.pct / 100) * circumference;
          const currentOffset = accumulated;
          accumulated += segLength;
          return (
            <circle
              key={idx}
              cx={center}
              cy={center}
              r={radius}
              stroke={seg.color}
              strokeWidth={stroke}
              strokeDasharray={`${segLength} ${circumference}`}
              strokeDashoffset={-currentOffset}
              fill="none"
              className="transition-all duration-700 ease-out"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-base font-semibold text-white font-mono">46.2%</span>
        <span className="text-[9px] font-mono text-[#a1a1aa] uppercase tracking-wider">SHARE</span>
      </div>
    </div>
  );
}

function AreaTrendGraph() {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-white font-medium flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          90-Day AI Citation Trajectory
        </span>
        <span className="text-[11px] font-mono text-emerald-400">+14.2% Growth</span>
      </div>

      <div className="relative w-full h-32 bg-[#09090b] rounded-xl border border-[#27272a] p-3 overflow-hidden">
        <div className="absolute inset-x-3 top-6 border-b border-[#262626]/40 pointer-events-none"></div>
        <div className="absolute inset-x-3 top-14 border-b border-[#262626]/40 pointer-events-none"></div>
        <div className="absolute inset-x-3 top-22 border-b border-[#262626]/40 pointer-events-none"></div>

        <svg viewBox="0 0 500 110" preserveAspectRatio="none" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#71717a" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>

          <path
            d="M 0 100 L 0 78 C 60 75, 110 65, 160 58 C 220 50, 270 44, 330 32 C 390 20, 440 16, 500 10 L 500 110 L 0 110 Z"
            fill="url(#areaGradient)"
          />

          <path
            d="M 0 78 C 60 75, 110 65, 160 58 C 220 50, 270 44, 330 32 C 390 20, 440 16, 500 10"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <circle cx="0" cy="78" r="3" fill="#71717a" stroke="#000" strokeWidth="1" />
          <circle cx="160" cy="58" r="3" fill="#10b981" stroke="#000" strokeWidth="1" />
          <circle cx="330" cy="32" r="3" fill="#10b981" stroke="#000" strokeWidth="1" />
          <circle cx="500" cy="10" r="3.5" fill="#34d399" stroke="#000" strokeWidth="1" />
        </svg>

        <div className="absolute inset-x-4 bottom-1.5 flex justify-between text-[10px] font-mono text-[#71717a]">
          <span>W1 (42%)</span>
          <span>W4: PR #52 (58%)</span>
          <span>W8: Reddit (72%)</span>
          <span className="text-emerald-400">W12 (84.5%)</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN DASHBOARD COMPONENT
   ========================================================================= */

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [domain, setDomain] = useState("prepzue.com");
  const [isSwitchingDomain, setIsSwitchingDomain] = useState(false);
  const [tempDomain, setTempDomain] = useState("prepzue.com");
  const [selectedModel, setSelectedModel] = useState("All AI models");
  const [selectedRegion, setSelectedRegion] = useState("India");
  const [selectedRun, setSelectedRun] = useState("Latest run");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);

  const [newKeywordInput, setNewKeywordInput] = useState("");
  const [keywordsList, setKeywordsList] = useState([
    { id: "kw-1", kw: "AI CMO for SaaS", vol: "14.8k", google: "#2", ai: "#1", trend: "+3", type: "Commercial" },
    { id: "kw-2", kw: "automated reddit marketing", vol: "8.2k", google: "#1", ai: "#1", trend: "+5", type: "High Intent" },
    { id: "kw-3", kw: "generative engine optimization tools", vol: "19.5k", google: "#3", ai: "#2", trend: "+7", type: "Comparison" },
    { id: "kw-4", kw: "autonomous marketing agents", vol: "12.1k", google: "#2", ai: "#1", trend: "+4", type: "Commercial" },
    { id: "kw-5", kw: "replace marketing agency with ai", vol: "6.4k", google: "#1", ai: "#1", trend: "+2", type: "High Intent" },
    { id: "kw-6", kw: "GEO answer optimization service", vol: "9.3k", google: "#4", ai: "#2", trend: "+8", type: "Emerging" },
  ]);

  const handleAddKeyword = (e) => {
    e.preventDefault();
    const trimmed = newKeywordInput.trim();
    if (!trimmed) return;
    const newEntry = {
      id: `kw-${Date.now()}`,
      kw: trimmed,
      vol: "6.2k",
      google: "#3",
      ai: "#1",
      trend: "+2",
      type: "Tracked",
    };
    setKeywordsList((prev) => [newEntry, ...prev]);
    setNewKeywordInput("");
  };

  const handleRemoveKeyword = (id) => {
    setKeywordsList((prev) => prev.filter((item) => item.id !== id));
  };

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "ai-visibility", label: "AI/Visibility", icon: Eye },
    { id: "seo-geo", label: "SEO & GEO", icon: Globe },
    { id: "keywords", label: "Keywords", icon: Key },
    { id: "competition", label: "Competition", icon: Swords },
  ];

  const handleDomainSubmit = (e) => {
    e.preventDefault();
    if (tempDomain.trim()) {
      setDomain(tempDomain.trim().toLowerCase().replace(/^https?:\/\//, ""));
      setIsSwitchingDomain(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff] font-sans flex flex-col selection:bg-[#ffffff] selection:text-[#000000]">
      {/* Top Application Bar */}
      <header className="w-full border-b border-[#262626] bg-[#0c0c0e] px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 text-xs sticky top-0 z-40">
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" title="Back to Homepage">
            <OkizaLogo size={22} variant="white" />
            <span className="font-semibold text-sm tracking-tight text-white hidden sm:inline">okiza</span>
          </Link>

          <span className="text-[#3f3f46]">/</span>

          <div className="flex items-center gap-1 text-[#a1a1aa]">
            <span className="text-white capitalize font-medium">
              {navItems.find((n) => n.id === activeTab)?.label}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            className="text-xs text-[#a1a1aa] hover:text-white hidden md:flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-[#18181b] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to site</span>
          </Link>

          <button
            onClick={() => setReportModalOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#141416] text-xs text-[#e4e4e7] hover:bg-[#1e1e24] transition-all cursor-pointer"
          >
            <span>View Insight Report</span>
            <Sparkles className="w-3 h-3 text-[#71717a]" />
          </button>

          <Link
            href="/pricing"
            className="px-3 py-1.5 rounded-lg bg-white text-black font-medium text-xs hover:bg-[#e4e4e7] transition-all"
          >
            Unlock full access
          </Link>

          <div
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="w-7 h-7 rounded-full bg-[#18181b] border border-[#3f3f46] flex items-center justify-center text-white font-medium text-xs cursor-pointer hover:border-white transition-all relative shrink-0"
            title="Account Menu"
          >
            <span>K</span>
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-[#0c0c0e]"></span>
          </div>
        </div>
      </header>

      {/* Main Body Layout */}
      <div className="flex-1 flex flex-col md:flex-row w-full min-h-[calc(100vh-48px)]">
        {/* ================= SIDEBAR ================= */}
        <aside className="w-full md:w-60 border-b md:border-b-0 md:border-r border-[#262626] bg-[#09090b] flex flex-col justify-between shrink-0">
          <div className="p-3 sm:p-4 space-y-4">
            {/* Domain Switcher */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase font-medium">Domain</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Active
                </span>
              </div>

              {isSwitchingDomain ? (
                <form onSubmit={handleDomainSubmit} className="flex items-center gap-1.5 bg-[#141416] border border-[#3f3f46] rounded-xl p-1.5">
                  <input
                    type="text"
                    autoFocus
                    value={tempDomain}
                    onChange={(e) => setTempDomain(e.target.value)}
                    placeholder="domain.com"
                    className="bg-transparent text-white text-xs font-mono outline-none px-1.5 flex-1 min-w-0"
                  />
                  <button type="submit" className="text-[10px] bg-white text-black font-medium px-2 py-1 rounded-lg cursor-pointer hover:bg-neutral-200 transition-colors shrink-0">
                    Save
                  </button>
                  <button type="button" onClick={() => setIsSwitchingDomain(false)} className="text-[10px] text-[#71717a] hover:text-white p-1 cursor-pointer shrink-0">
                    <X className="w-3 h-3" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => {
                    setTempDomain(domain);
                    setIsSwitchingDomain(true);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl border border-[#27272a] bg-[#141416] hover:bg-[#18181c] hover:border-[#3f3f46] transition-all font-mono text-xs cursor-pointer group text-left"
                  title="Click to switch domain"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Globe className="w-3.5 h-3.5 text-[#71717a] group-hover:text-white transition-colors shrink-0" />
                    <span className="font-medium text-white truncate">{domain}</span>
                  </div>
                  <span className="text-[#71717a] group-hover:text-white text-[10px] font-sans px-1.5 py-0.5 rounded bg-[#202024] border border-[#2d2d32] shrink-0 transition-colors">
                    Switch
                  </span>
                </button>
              )}
            </div>

            <div className="space-y-1.5 pt-2 border-t border-[#1f1f23]">
              <p className="px-2.5 text-[10px] font-mono tracking-widest text-[#71717a] uppercase font-medium">
                NAVIGATION
              </p>

              <nav className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer text-left ${
                      isActive
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "text-[#a1a1aa] hover:text-white hover:bg-[#141416]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-black" : "text-[#71717a]"}`} />
                    <span>{item.label}</span>
                    {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-black"></span>}
                  </button>
                );
              })}
            </nav>
            </div>
          </div>

          <div className="p-3 sm:p-4 border-t border-[#262626] bg-[#0c0c0e] relative">
            <div
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              className="flex items-center justify-between p-2 rounded-xl bg-[#141416] hover:bg-[#1c1c1f] border border-[#27272a] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative">
                  <div className="w-7 h-7 rounded-full bg-[#27272a] flex items-center justify-center text-white font-medium text-xs">
                    K
                  </div>
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-[#141416]"></span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-white truncate">Shaik Nazeer</p>
                  <p className="text-[10px] font-mono text-[#71717a] truncate">shaik@okiza.ai</p>
                </div>
              </div>
              <LogOut className="w-3.5 h-3.5 text-[#71717a] group-hover:text-white transition-colors" title="Log out" />
            </div>

            {profileMenuOpen && (
              <div className="absolute bottom-full left-3 right-3 mb-2 p-2 rounded-xl border border-[#27272a] bg-[#141416] shadow-xl space-y-1 text-xs animate-fadeIn z-30">
                <div className="px-2.5 py-1.5 border-b border-[#262626] mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a] block">Current Plan</span>
                  <span className="text-xs font-medium text-emerald-400">CMO Plan (Active)</span>
                </div>
                <Link href="/pricing" className="w-full text-left px-2.5 py-1.5 rounded-lg text-[#e4e4e7] hover:bg-[#27272a] flex items-center justify-between block">
                  <span>Manage Plan</span>
                  <ExternalLink className="w-3 h-3 text-[#71717a]" />
                </Link>
                <div
                  onClick={() => setProfileMenuOpen(false)}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg text-[#a1a1aa] hover:text-white hover:bg-[#27272a] flex items-center justify-between border-t border-[#262626] mt-1 pt-1.5 cursor-pointer"
                >
                  <span>Close</span>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* ================= MAIN CONTENT AREA ================= */}
        <main className="flex-1 bg-[#050505] p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          {/* ================= 1. OVERVIEW SECTION ================= */}
          {activeTab === "overview" && (
            <div className="space-y-7">
              {/* Header Title + Filter Bar */}
              <div className="space-y-2 pb-4 border-b border-[#262626]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    AI visibility overview
                  </h1>

                  <div className="flex items-center flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#0f0f12] text-xs text-[#a1a1aa] cursor-pointer hover:border-[#3f3f46]">
                      <Calendar className="w-3.5 h-3.5 text-[#71717a]" />
                      <span className="text-white">{selectedRun}</span>
                      <ChevronDown className="w-3 h-3 text-[#71717a]" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#0f0f12] text-xs text-[#a1a1aa] cursor-pointer hover:border-[#3f3f46]">
                      <span>Compare: Previous run</span>
                      <ChevronDown className="w-3 h-3 text-[#71717a]" />
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#0f0f12] text-xs text-[#a1a1aa] cursor-pointer hover:border-[#3f3f46]">
                      <IndiaFlag />
                      <span className="text-white">{selectedRegion}</span>
                      <ChevronDown className="w-3 h-3 text-[#71717a]" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#0f0f12] text-xs text-[#a1a1aa] cursor-pointer hover:border-[#3f3f46]">
                      <span className="text-white">{selectedModel}</span>
                      <ChevronDown className="w-3 h-3 text-[#71717a]" />
                    </div>

                    <button
                      onClick={() => setReportModalOpen(true)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black text-white border border-[#3f3f46] font-medium text-xs hover:bg-[#18181b] hover:border-white transition-all cursor-pointer ml-auto sm:ml-0"
                    >
                      <Wand2 className="w-3.5 h-3.5 text-[#e4e4e7]" />
                      <span>View Insight Report</span>
                      <Sparkles className="w-3 h-3 text-[#e4e4e7]" />
                    </button>
                  </div>
                </div>

                <p className="text-xs text-[#71717a]">
                  No answers in the last 30 days. Showing last 90 days in the trend for the same filters.
                </p>
              </div>

              {/* Performance snapshot */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#71717a]">
                  <span className="font-medium text-white">Performance snapshot</span>
                  <div className="flex items-center gap-3 text-[11px] font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Run: 25 Sep 2026 (UTC)
                    </span>
                    <span>All AI models</span>
                    <span>Last answer Sep 25, 2026, 04:34 AM UTC</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {/* Card 1: AI Visibility Score */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between hover:border-[#3f3f46] transition-all">
                    <div className="flex items-center justify-between text-xs text-[#a1a1aa] mb-3">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Activity className="w-3.5 h-3.5 text-[#71717a] shrink-0" />
                        <span className="truncate">AI Visibility Score</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#71717a] shrink-0">
                        <Info className="w-3.5 h-3.5 hover:text-white cursor-pointer" title="AI Visibility Score reflects prompt ranking and citation frequency" />
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 my-1">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-semibold text-white font-mono">84.5</span>
                          <span className="text-xs text-[#71717a] font-mono">/100</span>
                        </div>
                        <div className="mt-1">
                          <span className="text-[10px] font-mono text-emerald-400">
                            +12.4% vs prev run
                          </span>
                        </div>
                      </div>
                      <CircularRing value={84.5} size={56} stroke={5} color="#10b981">
                        <span className="text-[10px] font-semibold text-white font-mono">84.5</span>
                      </CircularRing>
                    </div>

                    <p className="text-[11px] text-[#71717a] mt-3 pt-2 border-t border-[#1f1f23]">
                      Based on 40 AI answers.
                    </p>
                  </div>

                  {/* Card 2: Share of Voice */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between hover:border-[#3f3f46] transition-all">
                    <div className="flex items-center justify-between text-xs text-[#a1a1aa] mb-3">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Share2 className="w-3.5 h-3.5 text-[#71717a] shrink-0" />
                        <span className="truncate">Share of Voice</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#71717a] shrink-0">
                        <Info className="w-3.5 h-3.5 hover:text-white cursor-pointer" title="Percentage of AI answers mentioning your brand vs competitors" />
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 my-1">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-semibold text-white font-mono">46.2%</span>
                        </div>
                        <div className="mt-1">
                          <span className="text-[10px] font-mono text-emerald-400">
                            +8.5% market gain
                          </span>
                        </div>
                      </div>
                      <CircularRing value={46.2} size={56} stroke={5} color="#34d399">
                        <span className="text-[10px] font-semibold text-white font-mono">46%</span>
                      </CircularRing>
                    </div>

                    <p className="text-[11px] text-[#71717a] mt-3 pt-2 border-t border-[#1f1f23]">
                      0/48 tracked entity mentions.
                    </p>
                  </div>

                  {/* Card 3: Brand Mention Rate */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between hover:border-[#3f3f46] transition-all">
                    <div className="flex items-center justify-between text-xs text-[#a1a1aa] mb-3">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Target className="w-3.5 h-3.5 text-[#71717a] shrink-0" />
                        <span className="truncate">Brand Mention Rate</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#71717a] shrink-0">
                        <Info className="w-3.5 h-3.5 hover:text-white cursor-pointer" title="Frequency of explicit brand mentions across all evaluated answers" />
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 my-1">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-semibold text-white font-mono">78.0%</span>
                        </div>
                        <div className="mt-1">
                          <span className="text-[10px] font-mono text-[#a1a1aa]">
                            31 / 40 answers
                          </span>
                        </div>
                      </div>
                      <CircularRing value={78} size={56} stroke={5} color="#e4e4e7">
                        <span className="text-[10px] font-semibold text-white font-mono">78%</span>
                      </CircularRing>
                    </div>

                    <p className="text-[11px] text-[#71717a] mt-3 pt-2 border-t border-[#1f1f23]">
                      0/40 answers.
                    </p>
                  </div>

                  {/* Card 4: Citation Rate */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between hover:border-[#3f3f46] transition-all">
                    <div className="flex items-center justify-between text-xs text-[#a1a1aa] mb-3">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <FileText className="w-3.5 h-3.5 text-[#71717a] shrink-0" />
                        <span className="truncate">Citation Rate</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#71717a] shrink-0">
                        <Info className="w-3.5 h-3.5 hover:text-white cursor-pointer" title="Answers that explicitly link to your domain as a cited source" />
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 my-1">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-semibold text-white font-mono">35.0%</span>
                        </div>
                        <div className="mt-1">
                          <span className="text-[10px] font-mono text-emerald-400">
                            14/40 verified links
                          </span>
                        </div>
                      </div>
                      <CircularRing value={35} size={56} stroke={5} color="#10b981">
                        <span className="text-[10px] font-semibold text-white font-mono">35%</span>
                      </CircularRing>
                    </div>

                    <p className="text-[11px] text-[#71717a] mt-3 pt-2 border-t border-[#1f1f23]">
                      14/40 collected answers.
                    </p>
                  </div>

                  {/* Card 5: Prompt Coverage */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between hover:border-[#3f3f46] transition-all">
                    <div className="flex items-center justify-between text-xs text-[#a1a1aa] mb-3">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#71717a] shrink-0" />
                        <span className="truncate">Prompt Coverage</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#71717a] shrink-0">
                        <Info className="w-3.5 h-3.5 hover:text-white cursor-pointer" title="Evaluated high-intent prompts tracked by autonomous agents" />
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 my-1">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-semibold text-white font-mono">92.0%</span>
                        </div>
                        <div className="mt-1">
                          <span className="text-[10px] font-mono text-[#a1a1aa]">
                            46/50 evaluated
                          </span>
                        </div>
                      </div>
                      <CircularRing value={92} size={56} stroke={5} color="#e4e4e7">
                        <span className="text-[10px] font-semibold text-white font-mono">92%</span>
                      </CircularRing>
                    </div>

                    <p className="text-[11px] text-[#71717a] mt-3 pt-2 border-t border-[#1f1f23]">
                      0/5 evaluated prompts.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Models Breakdown with Official Logos */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Left: AI Models with Logos */}
                <div className="lg:col-span-7 p-5 rounded-2xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#262626]">
                    <div>
                      <span className="text-xs font-semibold text-white uppercase tracking-wider font-mono block">
                        AI Model Performance
                      </span>
                      <p className="text-[11px] text-[#71717a] mt-0.5">
                        Citation coverage and answers won across primary AI models.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-[#a1a1aa] bg-[#18181b] border border-[#27272a] px-2 py-0.5 rounded">
                      4 Models Tracked
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-2">
                    <MultiEngineConcentricRings size={170} />

                    {/* AI Model list with Official Logos */}
                    <div className="space-y-2.5 w-full sm:w-auto">
                      {[
                        {
                          name: "ChatGPT (GPT-4o)",
                          pct: 91,
                          count: "36/40 answers",
                          logo: <ChatGptLogo className="w-4 h-4 text-white" />,
                        },
                        {
                          name: "Perplexity AI",
                          pct: 86,
                          count: "34/40 answers",
                          logo: <PerplexityLogo className="w-4 h-4 text-[#20b2aa]" />,
                        },
                        {
                          name: "Claude 3.5 Sonnet",
                          pct: 82,
                          count: "32/40 answers",
                          logo: <ClaudeLogo className="w-4 h-4 text-[#d97706]" />,
                        },
                        {
                          name: "Google Gemini",
                          pct: 79,
                          count: "31/40 answers",
                          logo: <GeminiLogo className="w-4 h-4 text-[#4285f4]" />,
                        },
                      ].map((eng, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between gap-4 p-2.5 rounded-lg bg-[#141416] border border-[#27272a] text-xs min-w-[220px]"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 rounded bg-[#1c1c1f] flex items-center justify-center shrink-0">
                              {eng.logo}
                            </div>
                            <span className="font-medium text-white">{eng.name}</span>
                          </div>
                          <div className="text-right">
                            <span className="font-mono font-semibold text-white">{eng.pct}%</span>
                            <span className="text-[10px] font-mono text-[#71717a] block">{eng.count}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Competitive Share Donut */}
                <div className="lg:col-span-5 p-5 rounded-2xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#262626]">
                    <div>
                      <span className="text-xs font-semibold text-white uppercase tracking-wider font-mono block">
                        Share of Voice Distribution
                      </span>
                      <p className="text-[11px] text-[#71717a] mt-0.5">
                        Brand vs competitor citations in AI answers.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      Market Lead
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-around gap-4 py-2">
                    <CompetitiveShareDonut size={140} />

                    <div className="space-y-2.5 w-full sm:w-auto">
                      {[
                        { brand: `${domain}`, pct: 46.2, dot: "bg-[#10b981]" },
                        { brand: "Jira / Atlassian", pct: 24.5, dot: "bg-[#3b82f6]" },
                        { brand: "Asana", pct: 16.8, dot: "bg-[#ec4899]" },
                        { brand: "Linear / Others", pct: 12.5, dot: "bg-[#a855f7]" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${item.dot}`}></span>
                            <span className="text-[#a1a1aa]">{item.brand}</span>
                          </div>
                          <span className="font-mono text-white">{item.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Area Growth Graph */}
              <div className="p-5 rounded-2xl border border-[#27272a] bg-[#0c0c0e]">
                <AreaTrendGraph />
              </div>

              {/* Key Insights & Recommendations */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-white">
                  <Sparkles className="w-3.5 h-3.5 text-[#71717a]" />
                  <span>Key insights &amp; recommended actions</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* Card 1: What changed */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between hover:border-[#3f3f46] transition-all">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-white mb-2">
                        <Activity className="w-3.5 h-3.5 text-[#71717a]" />
                        <span>What changed</span>
                      </div>
                      <p className="text-xs text-[#a1a1aa] leading-relaxed mb-2">
                        No previous run available.
                      </p>
                      <button
                        onClick={() => setActiveTab("ai-visibility")}
                        className="text-[11px] text-[#71717a] hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        <span>▸ About this comparison</span>
                      </button>
                    </div>
                    <button
                      onClick={() => setActiveTab("ai-visibility")}
                      className="text-[11px] text-white hover:text-[#d4d4d8] font-mono flex items-center justify-between pt-3 border-t border-[#1f1f23] mt-3 cursor-pointer"
                    >
                      <span>Read brand mention answers</span>
                      <ArrowUpRight className="w-3 h-3 text-[#71717a]" />
                    </button>
                  </div>

                  {/* Card 2: Needs attention */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between hover:border-[#3f3f46] transition-all">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-rose-400 mb-2">
                        <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                        <span>Needs attention</span>
                      </div>
                      <p className="text-xs text-[#a1a1aa] leading-relaxed mb-1.5">
                        40/40 evaluated answers did not mention your brand.
                      </p>
                      <button
                        onClick={() => setActiveTab("seo-geo")}
                        className="text-[11px] text-[#71717a] hover:text-white underline decoration-[#3f3f46] text-left cursor-pointer"
                      >
                        26/40 collected answers returned no citations.
                      </button>
                    </div>
                    <button
                      onClick={() => setActiveTab("seo-geo")}
                      className="text-[11px] text-white hover:text-[#d4d4d8] font-mono flex items-center justify-between pt-3 border-t border-[#1f1f23] mt-3 cursor-pointer"
                    >
                      <span>Review prompt gaps</span>
                      <ArrowUpRight className="w-3 h-3 text-[#71717a]" />
                    </button>
                  </div>

                  {/* Card 3: Top opportunity */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between hover:border-[#3f3f46] transition-all">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-white mb-2">
                        <Target className="w-3.5 h-3.5 text-[#71717a]" />
                        <span>Top opportunity</span>
                      </div>
                      <p className="text-xs font-medium text-white mb-1">
                        Close competitor gaps
                      </p>
                      <p className="text-xs text-[#a1a1aa] leading-relaxed">
                        24 of 40 evaluated answers name a competitor but not your brand.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveTab("competition")}
                      className="text-[11px] text-white hover:text-[#d4d4d8] font-mono flex items-center justify-between pt-3 border-t border-[#1f1f23] mt-3 cursor-pointer"
                    >
                      <span>Open matching prompts</span>
                      <ArrowUpRight className="w-3 h-3 text-[#71717a]" />
                    </button>
                  </div>

                  {/* Card 4: Recommended next steps */}
                  <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e] flex flex-col justify-between hover:border-[#3f3f46] transition-all">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-white mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#71717a]" />
                        <span>Recommended next steps</span>
                      </div>
                      <p className="text-xs text-[#a1a1aa] leading-relaxed">
                        Review competitors&apos; cited pages and improve the matching page on your site.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveTab("ai-visibility")}
                      className="text-[11px] text-white hover:text-[#d4d4d8] font-mono flex items-center justify-between pt-3 border-t border-[#1f1f23] mt-3 cursor-pointer"
                    >
                      <span>Open action workspace</span>
                      <ArrowUpRight className="w-3 h-3 text-[#71717a]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Live Answer Engine Evaluations */}
              <div className="p-5 rounded-xl border border-[#27272a] bg-[#0c0c0e] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider font-mono text-white">
                    Live Answer Engine Evaluations
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">Verified Citations</span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      model: "ChatGPT (GPT-4o)",
                      logo: <ChatGptLogo className="w-3.5 h-3.5 text-white" />,
                      query: `What is ${domain} and how does it compare to competitors?`,
                      status: "Ranked #1 • Direct source link",
                    },
                    {
                      model: "Perplexity AI",
                      logo: <PerplexityLogo className="w-3.5 h-3.5 text-[#20b2aa]" />,
                      query: `Best marketing automation and SEO tools in 2025`,
                      status: "Featured Answer • Source #1",
                    },
                    {
                      model: "Claude 3.5 Sonnet",
                      logo: <ClaudeLogo className="w-3.5 h-3.5 text-[#d97706]" />,
                      query: `Top platforms for automated Reddit & SEO content`,
                      status: "Recommended alternative",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg border border-[#27272a] bg-[#141416] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {item.logo}
                          <span className="text-xs font-medium text-white">{item.model}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#27272a] bg-[#1c1c1f] text-[#a1a1aa]">
                            {item.status}
                          </span>
                        </div>
                        <p className="text-xs font-mono text-[#71717a]">&ldquo;{item.query}&rdquo;</p>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 shrink-0 font-medium">98% Match</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= 2. AI/VISIBILITY SECTION ================= */}
          {activeTab === "ai-visibility" && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#262626]">
                <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  AI Visibility & LLM Model Analytics
                </h1>
                <p className="text-xs text-[#71717a] mt-0.5">
                  Breakdown of brand presence across conversational search engines and AI models.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  {
                    name: "ChatGPT (GPT-4o)",
                    score: "91%",
                    citations: "36/40 answers",
                    sentiment: "98% Positive",
                    logo: <ChatGptLogo className="w-5 h-5 text-white" />,
                  },
                  {
                    name: "Perplexity AI",
                    score: "86%",
                    citations: "34/40 answers",
                    sentiment: "95% Positive",
                    logo: <PerplexityLogo className="w-5 h-5 text-[#20b2aa]" />,
                  },
                  {
                    name: "Claude 3.5 Sonnet",
                    score: "82%",
                    citations: "32/40 answers",
                    sentiment: "94% Positive",
                    logo: <ClaudeLogo className="w-5 h-5 text-[#d97706]" />,
                  },
                  {
                    name: "Google Gemini",
                    score: "79%",
                    citations: "31/40 answers",
                    sentiment: "92% Positive",
                    logo: <GeminiLogo className="w-5 h-5 text-[#4285f4]" />,
                  },
                ].map((m) => (
                  <div key={m.name} className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-white">{m.name}</span>
                      <div className="w-6 h-6 rounded bg-[#18181b] flex items-center justify-center">
                        {m.logo}
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-semibold text-white font-mono">{m.score}</span>
                      <span className="text-[11px] font-mono text-[#71717a]">visibility</span>
                    </div>
                    <div className="text-[11px] text-[#71717a] font-mono space-y-0.5 pt-2 border-t border-[#262626]">
                      <p>Citations: <span className="text-white">{m.citations}</span></p>
                      <p>Sentiment: <span className="text-emerald-400">{m.sentiment}</span></p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl border border-[#27272a] bg-[#0c0c0e] space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono text-white block">
                  Evaluated High-Intent Prompts
                </span>
                <div className="space-y-2">
                  {[
                    { prompt: "Best AI CMO tool for modern SaaS in 2025", rank: "#1 Cited Source", models: "ChatGPT, Perplexity, Claude", confidence: "98%" },
                    { prompt: "How to automate marketing without an agency", rank: "Top Recommendation", models: "Perplexity, Gemini", confidence: "94%" },
                    { prompt: "Best GEO and Answer Engine optimization software", rank: "#1 Featured Snippet", models: "ChatGPT, Claude", confidence: "96%" },
                    { prompt: "Autonomous marketing agents vs traditional marketers", rank: "Cited Case Study", models: "Claude, Perplexity", confidence: "91%" },
                  ].map((row, i) => (
                    <div key={i} className="p-3.5 rounded-lg border border-[#27272a] bg-[#141416] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-xs text-white font-mono">&ldquo;{row.prompt}&rdquo;</p>
                        <p className="text-[11px] text-[#71717a] mt-0.5">
                          <span className="text-emerald-400">{row.rank}</span> • Tested on {row.models}
                        </p>
                      </div>
                      <span className="text-xs font-mono font-medium text-white bg-[#27272a] px-3 py-1 rounded shrink-0">
                        {row.confidence} Match
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= 3. SEO & GEO SECTION ================= */}
          {activeTab === "seo-geo" && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#262626]">
                <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  SEO & Generative Engine Optimization (GEO)
                </h1>
                <p className="text-xs text-[#71717a] mt-0.5">
                  Unified technical SEO health and entity optimization for AI search crawlers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e]">
                  <span className="text-xs text-[#a1a1aa] block mb-1">Technical SEO Score</span>
                  <span className="text-2xl font-semibold text-white font-mono">99 / 100</span>
                  <span className="text-[10px] text-emerald-400 font-mono mt-1 block">0 Broken Links • Core Web Vitals Pass</span>
                </div>

                <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e]">
                  <span className="text-xs text-[#a1a1aa] block mb-1">GEO Structured Data</span>
                  <span className="text-2xl font-semibold text-white font-mono">100% Valid</span>
                  <span className="text-[10px] text-[#71717a] font-mono mt-1 block">SoftwareApplication & FAQ JSON-LD</span>
                </div>

                <div className="p-4 rounded-xl border border-[#27272a] bg-[#0c0c0e]">
                  <span className="text-xs text-[#a1a1aa] block mb-1">AI Crawler Permissions</span>
                  <span className="text-2xl font-semibold text-emerald-400 font-mono">Allowed</span>
                  <span className="text-[10px] text-[#71717a] font-mono mt-1 block">GPTBot, ClaudeBot, PerplexityBot</span>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-[#27272a] bg-[#0c0c0e] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider font-mono text-white">
                    Automated Code & Schema Pull Requests
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Coding Agent Connected</span>
                </div>

                <div className="space-y-2">
                  <div className="p-3.5 rounded-lg border border-[#27272a] bg-[#141416] flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium text-white">PR #54: SoftwareApplication schema on /pricing</span>
                      <p className="text-[11px] text-[#71717a] mt-0.5">Improves AI price citation accuracy by 24%</p>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded">Merged</span>
                  </div>

                  <div className="p-3.5 rounded-lg border border-[#27272a] bg-[#141416] flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium text-white">PR #55: Dynamic Next.js metadata & OpenGraph generator</span>
                      <p className="text-[11px] text-[#71717a] mt-0.5">Applied to all 32 dynamic marketing routes</p>
                    </div>
                    <span className="text-[10px] font-mono bg-[#27272a] text-[#e4e4e7] px-2.5 py-1 rounded">Ready to Deploy</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= 4. KEYWORDS SECTION ================= */}
          {activeTab === "keywords" && (
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#262626]">
                <div>
                  <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    Keywords & AI Prompt Intelligence
                  </h1>
                  <p className="text-xs text-[#71717a] mt-0.5">
                    Tracked high-converting search keywords and conversational AI queries.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="flex items-center gap-2 bg-[#141416] border border-[#27272a] px-3 py-1.5 rounded-xl w-full sm:w-56">
                    <Search className="w-3.5 h-3.5 text-[#71717a] shrink-0" />
                    <input
                      type="text"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      placeholder="Search keywords..."
                      className="bg-transparent text-xs text-white placeholder-[#71717a] outline-none w-full"
                    />
                  </div>

                  <form onSubmit={handleAddKeyword} className="flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-[#141416] border border-[#27272a] px-3 py-1.5 rounded-xl focus-within:border-[#52525b] transition-colors flex-1 sm:w-52">
                      <Key className="w-3.5 h-3.5 text-[#71717a] shrink-0" />
                      <input
                        type="text"
                        value={newKeywordInput}
                        onChange={(e) => setNewKeywordInput(e.target.value)}
                        placeholder="Add new keyword..."
                        className="bg-transparent text-xs text-white placeholder-[#71717a] outline-none w-full"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!newKeywordInput.trim()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </form>
                </div>
              </div>

              <div className="rounded-xl border border-[#262626] bg-[#0c0c0e] overflow-hidden">
                <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[#262626] bg-[#141416] text-[10px] font-mono uppercase tracking-wider text-[#71717a] font-medium">
                  <div className="col-span-4">Keyword / Query</div>
                  <div className="col-span-2 text-center">Volume</div>
                  <div className="col-span-2 text-center">Google Rank</div>
                  <div className="col-span-2 text-center">AI Citation</div>
                  <div className="col-span-1 text-right">Trend</div>
                  <div className="col-span-1 text-right">Action</div>
                </div>

                <div className="divide-y divide-[#262626] text-xs">
                  {keywordsList
                    .filter((k) => k.kw.toLowerCase().includes(searchKeyword.toLowerCase()))
                    .map((k) => (
                      <div key={k.id} className="grid grid-cols-12 gap-2 px-4 py-3 items-center hover:bg-[#141416]/60 transition-colors group">
                        <div className="col-span-4 min-w-0">
                          <span className="font-medium text-white block truncate">{k.kw}</span>
                          <span className="text-[10px] font-mono text-[#71717a]">{k.type}</span>
                        </div>
                        <div className="col-span-2 text-center font-mono text-[#a1a1aa]">{k.vol}</div>
                        <div className="col-span-2 text-center font-mono text-white">{k.google}</div>
                        <div className="col-span-2 text-center font-mono text-emerald-400 font-medium">{k.ai}</div>
                        <div className="col-span-1 text-right font-mono text-emerald-400 font-medium">{k.trend}</div>
                        <div className="col-span-1 flex justify-end">
                          <button
                            type="button"
                            onClick={() => handleRemoveKeyword(k.id)}
                            className="p-1 rounded text-[#71717a] hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            title={`Remove "${k.kw}"`}
                            aria-label={`Remove keyword ${k.kw}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}

                  {keywordsList.filter((k) => k.kw.toLowerCase().includes(searchKeyword.toLowerCase())).length === 0 && (
                    <div className="py-12 text-center text-xs text-[#71717a]">
                      {searchKeyword ? "No keywords match your search." : "No keywords tracked yet. Add a keyword above to get started."}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ================= 5. COMPETITION SECTION ================= */}
          {activeTab === "competition" && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#262626]">
                <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  Competition & Rival Intelligence
                </h1>
                <p className="text-xs text-[#71717a] mt-0.5">
                  Track rivals competing for your organic rankings and generative AI recommendations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Jira / Atlassian",
                    domain: "atlassian.com/jira",
                    overlap: "84% Search Overlap",
                    winRate: "72% Win Rate",
                    weakness: "Complex enterprise workflows, no autonomous agent execution",
                  },
                  {
                    name: "Asana",
                    domain: "asana.com",
                    overlap: "76% Search Overlap",
                    winRate: "68% Win Rate",
                    weakness: "Capturing high-intent Google comparison keywords",
                  },
                  {
                    name: "Linear",
                    domain: "linear.app",
                    overlap: "71% Search Overlap",
                    winRate: "65% Win Rate",
                    weakness: "Developer focused, zero marketing agents",
                  },
                  {
                    name: "Jasper / Copy.ai",
                    domain: "jasper.ai",
                    overlap: "58% Search Overlap",
                    winRate: "84% Win Rate",
                    weakness: "Manual copy generation only, no code/PR deployment",
                  },
                ].map((c) => (
                  <div key={c.name} className="p-5 rounded-xl border border-[#27272a] bg-[#0c0c0e] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">{c.name}</span>
                      <span className="text-xs font-mono text-emerald-400 font-medium">{c.winRate}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#71717a] block">{c.domain} • {c.overlap}</span>
                    <p className="text-xs text-[#a1a1aa] leading-relaxed">{c.weakness}</p>
                    <div className="pt-2 border-t border-[#262626] flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#71717a]">Action Ready</span>
                      <button className="text-xs font-medium text-white bg-[#18181b] hover:bg-[#27272a] border border-[#27272a] px-3 py-1 rounded-lg transition-colors cursor-pointer">
                        Deploy Counter Page →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Insight Report Modal */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#141416] border border-[#27272a] rounded-2xl max-w-lg w-full p-6 text-left shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#262626]">
              <div>
                <h3 className="text-base font-semibold text-white">
                  AI Visibility Insight Report
                </h3>
                <p className="text-xs text-[#71717a] mt-0.5">Generated for {domain}</p>
              </div>
              <button
                onClick={() => setReportModalOpen(false)}
                className="text-[#71717a] hover:text-white p-1 rounded cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-[#a1a1aa] leading-relaxed mb-6">
              <div className="p-3 rounded-xl bg-[#09090b] border border-[#27272a]">
                <p className="font-medium text-white mb-1">Executive Summary</p>
                <p className="text-[#a1a1aa]">
                  {domain} holds an 84.5/100 AI Visibility Score across major generative search engines. Brand mention rate stands at 78%, and citation rate at 85%.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#09090b] border border-[#27272a]">
                <p className="font-medium text-white mb-1">Key Growth Recommendation</p>
                <p className="text-[#a1a1aa]">
                  Deploy structured comparison schema on high-intent buyer landing pages to capture 6 additional queries where rivals are cited.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/pricing"
                className="flex-1 py-2.5 rounded-xl bg-white text-black font-medium text-xs text-center hover:bg-[#e4e4e7] transition-all"
              >
                Unlock Full Report & Audit Logs
              </Link>
              <button
                onClick={() => setReportModalOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-[#27272a] text-xs text-[#a1a1aa] hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
