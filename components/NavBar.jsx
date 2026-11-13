"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import OkizaLogo from "./OkizaLogo";
import {
  ChevronDown,
  Menu,
  X,
  Layers,
  Rocket,
  ShoppingBag,
  Users,
  Briefcase,
  Store,
  Building2,
  TrendingUp,
  HeartPulse,
  UserPlus,
  Utensils,
  Scale,
  ArrowRight,
  Bot,
  Search,
  Sparkles,
  FileText,
  Share2,
  Workflow,
  ExternalLink,
  BookOpen,
  HelpCircle,
  FileCode,
  BarChart3,
  CreditCard,
  Megaphone,
  Globe,
  CodeXml,
  Clapperboard,
  PenTool,
  Mail,
  Check,
} from "lucide-react";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // "usecases" | "agents" | "integrations" | "resources"
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [trialEmailOpen, setTrialEmailOpen] = useState(false);
  const [navEmail, setNavEmail] = useState("");
  const [navSubmitted, setNavSubmitted] = useState(false);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  const customerStories = [
    {
      id: "foremark",
      tag: "CUSTOMER STORY",
      headline:
        "How Foremark Legal turned their seed announcement into a viral X story with Okiza",
      link: "/stories/foremark",
      company: "Foremark Legal",
      domain: "foremarklegal.com",
      initials: "FL",
    },
    {
      id: "novaflow",
      tag: "CUSTOMER STORY",
      headline:
        "How Novaflow captured 64% AI search share against incumbent enterprise rivals",
      link: "/stories/novaflow",
      company: "Novaflow AI",
      domain: "novaflow.io",
      initials: "NF",
    },
    {
      id: "artisan",
      tag: "CUSTOMER STORY",
      headline:
        "How Artisan Goods scaled creator campaigns to $2.4M ARR with zero agency headcount",
      link: "/stories/artisan",
      company: "Artisan Goods",
      domain: "artisangoods.co",
      initials: "AG",
    },
  ];

  const useCasesList = [
    {
      title: "B2B SaaS",
      desc: "Pipeline from SEO and content.",
      icon: Layers,
      href: "/marketing-automation/saas",
    },
    {
      title: "Startups",
      desc: "Zero to your first users.",
      icon: Rocket,
      href: "/marketing-automation/startups",
    },
    {
      title: "Ecommerce",
      desc: "Creators, content and ads.",
      icon: ShoppingBag,
      href: "/marketing-automation/ecommerce",
    },
    {
      title: "Digital Agencies",
      desc: "Run more accounts, one team.",
      icon: Users,
      href: "/marketing-automation/agencies",
    },
    {
      title: "Professional Services",
      desc: "Turn expertise into demand.",
      icon: Briefcase,
      href: "/marketing-automation/services",
    },
    {
      title: "Small Business",
      desc: "Marketing without the headcount.",
      icon: Store,
      href: "/marketing-automation/small-business",
    },
    {
      title: "Real Estate",
      desc: "Listings and demand on autopilot.",
      icon: Building2,
      href: "/marketing-automation/real-estate",
    },
    {
      title: "Financial Advisors",
      desc: "Compliant content, more referrals.",
      icon: TrendingUp,
      href: "/marketing-automation/financial-advisors",
    },
    {
      title: "Healthcare",
      desc: "Fill the calendar with patients.",
      icon: HeartPulse,
      href: "/marketing-automation/healthcare",
    },
    {
      title: "Recruiters",
      desc: "Build a brand candidates trust.",
      icon: UserPlus,
      href: "/marketing-automation/recruiters",
    },
    {
      title: "Restaurants",
      desc: "Own local search and social.",
      icon: Utensils,
      href: "/marketing-automation/restaurants",
    },
    {
      title: "Law Firms",
      desc: "Rank for the cases you want.",
      icon: Scale,
      href: "/marketing-automation/law-firms",
    },
  ];

  const agentsListCol1 = [
    {
      title: "Influencer Agent",
      desc: "Find creators for your brand.",
      href: "/agents/influencer",
      icon: <Megaphone className="w-5 h-5 text-[#4ade80]" strokeWidth={1.75} />,
    },
    {
      title: "SEO Agent",
      desc: "Find gaps, draft pages.",
      href: "/agents/seo",
      icon: <Globe className="w-5 h-5 text-[#38bdf8]" strokeWidth={1.75} />,
    },
    {
      title: "Coding Agent",
      desc: "Automate technical SEO.",
      href: "/agents/coding",
      icon: <CodeXml className="w-5 h-5 text-[#22d3ee]" strokeWidth={1.75} />,
    },
    {
      title: "UGC Videos Agent",
      desc: "Briefs and ad clips.",
      href: "/agents/ugc-videos",
      icon: <Clapperboard className="w-5 h-5 text-[#fb923c]" strokeWidth={1.75} />,
    },
    {
      title: "LinkedIn Agent",
      desc: "Draft posts and ideas.",
      href: "/agents/linkedin",
      icon: (
        <div className="w-[22px] h-[22px] rounded-[5px] bg-[#0A66C2] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
          </svg>
        </div>
      ),
    },
  ];

  const agentsListCol2 = [
    {
      title: "Reddit Agent",
      desc: "Find threads, draft replies.",
      href: "/agents/reddit",
      icon: (
        <div className="w-[22px] h-[22px] rounded-full bg-[#FF4500] flex items-center justify-center shrink-0 p-0.5">
          <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5" aria-hidden="true">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.56 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.197-2.512-.73a.326.326 0 0 0-.232-.095z"/>
          </svg>
        </div>
      ),
    },
    {
      title: "Writer Agent",
      desc: "Draft in your brand voice.",
      href: "/agents/writer",
      icon: <PenTool className="w-5 h-5 text-[#c084fc]" strokeWidth={1.75} />,
    },
    {
      title: "GEO Agent",
      desc: "Get cited in AI search.",
      href: "/agents/geo",
      icon: <Globe className="w-5 h-5 text-[#60a5fa]" strokeWidth={1.75} />,
    },
    {
      title: "X (Twitter) Agent",
      desc: "X posts ready to refine.",
      href: "/agents/x-twitter",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-white shrink-0" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ];

  const integrationsListCol1 = [
    {
      title: "WordPress",
      desc: "Auto-publish posts.",
      href: "/integrations/wordpress",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#3880a6">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.2a10.8 10.8 0 0 1 10.8 10.8c0 5.09-3.52 9.35-8.25 10.51l-4.75-13.8c.8-.04 1.54-.12 1.54-.12.56-.07.5-.9-.06-.86 0 0-1.68.14-2.78.14-1.03 0-2.78-.14-2.78-.14-.56-.04-.62.8-.06.86 0 0 .72.08 1.45.12l2.22 6.13-3.13 9.36A10.77 10.77 0 0 1 1.2 12C1.2 6.035 6.035 1.2 12 1.2zm6.27 4.96c.55.77.86 1.7.86 2.7 0 1.83-1.05 3.92-2.13 6.09l-3.35 10.02c4.15-1.37 7.15-5.3 7.15-9.97 0-3.47-1.64-6.55-4.17-8.52l1.64-.32zM3.44 7.6c-.66 1.27-1.04 2.73-1.04 4.4 0 3.42 1.6 6.47 4.07 8.44L2.83 9.4c.3-.03.58-.06.61-.06.56-.07.5-.9-.06-.86l.06-.88zm8.68 7.37l2.84 8.28c.41.05.83.08 1.25.08.37 0 .73-.02 1.09-.06l-5.18-15.02z"/>
        </svg>
      ),
    },
    {
      title: "Wix",
      desc: "Publish to Wix blog.",
      href: "/integrations/wix",
      icon: (
        <span className="text-xs font-black tracking-tight text-white font-sans select-none">
          wix
        </span>
      ),
    },
    {
      title: "Google Search Con...",
      desc: "Track rankings.",
      href: "/integrations/google-search-console",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M4 17.5a1.5 1.5 0 0 0 1.5 1.5H8v-5H4v3.5z" fill="#00832d" />
          <path d="M9.5 19H12v-8H9.5v8z" fill="#ffba00" />
          <path d="M13.5 19H16a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-2.5V19z" fill="#0066da" />
          <path d="M4 12.5V8a2 2 0 0 1 2-2h4l-6 6.5z" fill="#2684fc" />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      desc: "Publish posts.",
      href: "/integrations/linkedin",
      icon: (
        <div className="w-[22px] h-[22px] rounded-[5px] bg-[#0A66C2] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
          </svg>
        </div>
      ),
    },
    {
      title: "Telegram",
      desc: "Updates in chat.",
      href: "/integrations/telegram",
      icon: (
        <div className="w-[22px] h-[22px] rounded-full bg-[#2AABEE] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5 translate-x-[-0.5px]">
            <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.674c.458 0 .66-.21.916-.457l2.199-2.138 4.574 3.379c.843.465 1.45.226 1.66-.782l3.003-14.156c.307-1.23-.469-1.787-1.215-1.467z"/>
          </svg>
        </div>
      ),
    },
    {
      title: "Facebook",
      desc: "Publish posts & videos.",
      href: "/integrations/facebook",
      icon: (
        <div className="w-[22px] h-[22px] rounded-full bg-[#1877F2] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5 translate-y-[0.5px]">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
      ),
    },
  ];

  const integrationsListCol2 = [
    {
      title: "Webflow",
      desc: "Publish to Webflow.",
      href: "/integrations/webflow",
      icon: (
        <svg viewBox="0 0 24 24" fill="#146EF5" className="w-5 h-5">
          <path d="M17.842 5.437l-3.325 9.773-2.715-9.773H7.49l-3.09 13.126h4.59l1.657-6.536 2.457 6.536h3.879l4.499-13.126h-3.64z"/>
        </svg>
      ),
    },
    {
      title: "HubSpot",
      desc: "Publish to HubSpot blog.",
      href: "/integrations/hubspot",
      icon: (
        <svg viewBox="0 0 24 24" fill="#FF7A59" className="w-5 h-5">
          <path d="M18.8 9.4c0-.9-.7-1.6-1.6-1.6-.2 0-.4 0-.6.1V5.7c.6-.4 1-.9 1-1.7 0-1.1-.9-2-2-2s-2 .9-2 2c0 .7.4 1.3 1 1.7v2.2c-.2-.1-.4-.1-.6-.1-.9 0-1.6.7-1.6 1.6 0 .6.4 1.2 1 1.5v3.4l-2.4 1.4c-.4-.5-1-.8-1.7-.8-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2c1 0 1.9-.7 2.1-1.7l2.5-1.4c.4.4.9.6 1.5.6.9 0 1.6-.7 1.6-1.6 0-.6-.3-1.1-.8-1.4v-3.5c.6-.3.9-.9.9-1.5zm-3.2-6c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm-5.7 17.5c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm6.3-8.8c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/>
        </svg>
      ),
    },
    {
      title: "Google Analytics",
      desc: "Track traffic.",
      href: "/integrations/google-analytics",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M19.5 4h-2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" fill="#F9AB00" />
          <path d="M12.5 10h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" fill="#E37400" />
          <circle cx="5.5" cy="17.5" r="2.5" fill="#E37400" />
        </svg>
      ),
    },
    {
      title: "X (Twitter)",
      desc: "Publish threads.",
      href: "/integrations/x-twitter",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-white shrink-0" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      title: "TikTok",
      desc: "Publish clips.",
      href: "/integrations/tiktok",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.882 2.87 2.896 2.896 0 0 1-2.882-2.87 2.896 2.896 0 0 1 2.882-2.87c.277 0 .543.04.796.115V9.45a6.34 6.34 0 0 0-.796-.051A6.335 6.335 0 0 0 3 15.735a6.335 6.335 0 0 0 6.336 6.337 6.335 6.335 0 0 0 6.336-6.337V8.65a8.21 8.21 0 0 0 4.887 1.585V6.787a4.838 4.838 0 0 1-.97-.101z"/>
        </svg>
      ),
    },
  ];

  const integrationsListCol3 = [
    {
      title: "Framer",
      desc: "Sync Framer content.",
      href: "/integrations/framer",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 text-white">
          <path d="M4 2h16v7h-8l8 7H4v-7h8L4 2zm0 14h8l-8 7v-7z" />
        </svg>
      ),
    },
    {
      title: "Sanity",
      desc: "Publish content.",
      href: "/integrations/sanity",
      icon: (
        <svg viewBox="0 0 24 24" fill="#F03E2F" className="w-5 h-5">
          <path d="M19.8 7.3l-1.9-1.2-12.7 8.2 1.9 1.2L19.8 7.3zm-3.3-2.1l-1.9-1.2-8.5 5.5 1.9 1.2 8.5-5.5zm-2.8 11.2l-1.9-1.2-4.5 2.9 1.9 1.2 4.5-2.9z"/>
        </svg>
      ),
    },
    {
      title: "GitHub",
      desc: "Open SEO PRs.",
      href: "/integrations/github",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
    {
      title: "WhatsApp",
      desc: "Drafts in chat.",
      href: "/integrations/whatsapp",
      icon: (
        <div className="w-[22px] h-[22px] rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.13 8.13 0 0 1-1.25-4.29c0-4.51 3.67-8.18 8.19-8.18 2.19 0 4.24.85 5.79 2.4a8.14 8.14 0 0 1 2.4 5.79c0 4.51-3.67 8.18-8.19 8.18zm4.49-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.3z"/>
          </svg>
        </div>
      ),
    },
    {
      title: "Instagram",
      desc: "Publish clips.",
      href: "/integrations/instagram",
      icon: (
        <div className="w-[22px] h-[22px] rounded-[6px] bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
      ),
    },
  ];

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const story = customerStories[activeStoryIdx];

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full border-b border-[#262626] bg-[#000000]/95 backdrop-blur-md transition-all"
      style={{ borderColor: "rgba(38, 38, 38, 0.9)" }}
      data-component="@components/NavBar.jsx"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3.5">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="transition-transform group-hover:scale-105">
            <OkizaLogo size={32} variant="white" />
          </div>
          <span className="font-semibold tracking-tight text-[#ffffff] text-xl font-sans">
            okiza
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {/* Agents */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("agents")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleMenu("agents")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeMenu === "agents"
                  ? "bg-[#18181b] border border-[#262626] text-[#ffffff]"
                  : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              <span>Agents</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "agents" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Agents dropdown */}
            {activeMenu === "agents" && (
              <div className="absolute top-full -left-6 sm:-left-12 lg:-left-16 mt-3 w-[640px] lg:w-[680px] rounded-[22px] border border-[#383332] bg-[#292524] backdrop-blur-2xl p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] animate-fadeIn z-50 text-left">
                <div className="grid grid-cols-2 gap-x-10 lg:gap-x-12">
                  {/* Left Column (5 items) */}
                  <div className="flex flex-col gap-5">
                    {agentsListCol1.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-3.5 p-1 rounded-xl hover:bg-white/[0.04] transition-all group cursor-pointer"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#242120] border border-[#383332] flex items-center justify-center shrink-0 group-hover:border-white/20 group-hover:bg-[#2c2826] transition-all">
                          {item.icon}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[15px] font-semibold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[13px] text-[#a1a1aa] leading-snug mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Right Column (4 items) */}
                  <div className="flex flex-col gap-5">
                    {agentsListCol2.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-3.5 p-1 rounded-xl hover:bg-white/[0.04] transition-all group cursor-pointer"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#242120] border border-[#383332] flex items-center justify-center shrink-0 group-hover:border-white/20 group-hover:bg-[#2c2826] transition-all">
                          {item.icon}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[15px] font-semibold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[13px] text-[#a1a1aa] leading-snug mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Integrations */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("integrations")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleMenu("integrations")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeMenu === "integrations"
                  ? "bg-[#18181b] border border-[#262626] text-[#ffffff]"
                  : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              <span>Integrations</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "integrations" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Integrations dropdown */}
            {activeMenu === "integrations" && (
              <div className="absolute top-full -left-28 sm:-left-36 lg:-left-44 mt-3 w-[780px] lg:w-[860px] rounded-[22px] border border-[#383332] bg-[#292524] backdrop-blur-2xl p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] animate-fadeIn z-50 text-left">
                <div className="grid grid-cols-3 gap-x-8 lg:gap-x-10">
                  {/* Column 1 (6 items) */}
                  <div className="flex flex-col gap-5">
                    {integrationsListCol1.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-3.5 p-1 rounded-xl hover:bg-white/[0.04] transition-all group cursor-pointer"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#242120] border border-[#383332] flex items-center justify-center shrink-0 group-hover:border-white/20 group-hover:bg-[#2c2826] transition-all">
                          {item.icon}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[15px] font-semibold text-white tracking-tight leading-snug group-hover:text-white transition-colors truncate">
                            {item.title}
                          </span>
                          <span className="text-[13px] text-[#a1a1aa] leading-snug mt-0.5 truncate">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Column 2 (5 items) */}
                  <div className="flex flex-col gap-5">
                    {integrationsListCol2.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-3.5 p-1 rounded-xl hover:bg-white/[0.04] transition-all group cursor-pointer"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#242120] border border-[#383332] flex items-center justify-center shrink-0 group-hover:border-white/20 group-hover:bg-[#2c2826] transition-all">
                          {item.icon}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[15px] font-semibold text-white tracking-tight leading-snug group-hover:text-white transition-colors truncate">
                            {item.title}
                          </span>
                          <span className="text-[13px] text-[#a1a1aa] leading-snug mt-0.5 truncate">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Column 3 (5 items) */}
                  <div className="flex flex-col gap-5">
                    {integrationsListCol3.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-3.5 p-1 rounded-xl hover:bg-white/[0.04] transition-all group cursor-pointer"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#242120] border border-[#383332] flex items-center justify-center shrink-0 group-hover:border-white/20 group-hover:bg-[#2c2826] transition-all">
                          {item.icon}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[15px] font-semibold text-white tracking-tight leading-snug group-hover:text-white transition-colors truncate">
                            {item.title}
                          </span>
                          <span className="text-[13px] text-[#a1a1aa] leading-snug mt-0.5 truncate">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Use Cases (THE MEGA DROPDOWN from reference image) */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("usecases")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleMenu("usecases")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeMenu === "usecases"
                  ? "bg-[#18181b] border border-[#262626] text-[#ffffff] shadow-sm"
                  : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              <span>Use Cases</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "usecases" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mega Dropdown Panel */}
            {activeMenu === "usecases" && (
              <div
                className="absolute top-full -left-48 lg:-left-36 mt-3 w-[920px] lg:w-[980px] rounded-2xl border border-[#262626] bg-[#121212]/98 backdrop-blur-2xl p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] animate-fadeIn z-50 text-left"
              >
                <div className="grid grid-cols-12 gap-6">
                  {/* Left: 3 Columns Grid of 12 Use Cases */}
                  <div className="col-span-8 flex flex-col justify-between">
                    <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                      {useCasesList.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#1a1a1c] transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center shrink-0 group-hover:border-[#ffffff]/30 group-hover:bg-[#27272a] transition-all">
                              <Icon className="w-4 h-4 text-[#ffffff] transition-transform group-hover:scale-110" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-[#ffffff] group-hover:text-[#ffffff] transition-colors leading-tight">
                                {item.title}
                              </span>
                              <span className="text-xs text-[#a1a1aa] mt-0.5 leading-snug">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom Link: See more use cases → */}
                    <div className="pt-6 mt-4 border-t border-[#262626]/70 flex items-center justify-start">
                      <Link
                        href="/marketing-automation/saas"
                        onClick={() => setActiveMenu(null)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffffff] hover:text-[#e4e4e7] transition-colors group cursor-pointer"
                      >
                        <span>See more use cases</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Featured Customer Story Card */}
                  <div className="col-span-4 flex flex-col">
                    <div className="h-full rounded-xl border border-[#2a2a2d] bg-[#18181b] p-6 flex flex-col justify-between shadow-lg relative overflow-hidden group">
                      {/* Top Content */}
                      <div>
                        <span className="text-[10px] font-semibold tracking-widest text-[#71717a] uppercase block mb-3">
                          {story.tag}
                        </span>

                        <h4 className="text-base font-semibold text-[#ffffff] leading-snug mb-3 tracking-tight">
                          {story.headline}
                        </h4>

                        <Link
                          href={story.link || `/stories/${story.id}`}
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center gap-1 text-xs text-[#a1a1aa] hover:text-[#ffffff] transition-colors"
                        >
                          <span>Read full story</span>
                          <span>→</span>
                        </Link>
                      </div>

                      {/* Bottom Company Info & Carousel Dots */}
                      <div className="pt-6 mt-6 border-t border-[#262626]/80 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#242427] border border-[#333336] flex items-center justify-center font-bold text-xs text-[#ffffff] shrink-0">
                            {story.initials}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-[#ffffff] leading-tight">
                              {story.company}
                            </span>
                            <span className="text-xs text-[#71717a]">
                              {story.domain}
                            </span>
                          </div>
                        </div>

                        {/* Interactive Pagination Dots matching the image */}
                        <div className="flex items-center gap-1.5 pt-1">
                          {customerStories.map((s, dotIdx) => (
                            <button
                              key={s.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveStoryIdx(dotIdx);
                              }}
                              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                activeStoryIdx === dotIdx
                                  ? "w-5 bg-[#ffffff]"
                                  : "w-1.5 bg-[#3f3f46] hover:bg-[#71717a]"
                              }`}
                              aria-label={`Go to story ${dotIdx + 1}`}
                            />
                          ))}
                          {/* filler decorative dots matching reference */}
                          {[1, 2, 3, 4, 5].map((d) => (
                            <span
                              key={d}
                              className="w-1.5 h-1.5 rounded-full bg-[#27272a] inline-block"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pricing */}
          <Link
            href="/pricing"
            className="px-3 py-1.5 text-sm text-[#a1a1aa] hover:text-[#ffffff] font-medium transition-colors"
          >
            Pricing
          </Link>

          {/* Dashboard */}
          <Link
            href="/dashboard"
            className="px-3 py-1.5 text-sm text-[#a1a1aa] hover:text-[#ffffff] font-medium transition-colors"
          >
            Dashboard
          </Link>

          {/* Resources */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleMenu("resources")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeMenu === "resources"
                  ? "bg-[#18181b] border border-[#262626] text-[#ffffff]"
                  : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "resources" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Resources dropdown */}
            {activeMenu === "resources" && (
              <div className="absolute top-full right-0 mt-3 w-80 rounded-[22px] border border-[#383332] bg-[#292524] backdrop-blur-2xl p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] animate-fadeIn z-50 text-left">
                <div className="flex flex-col gap-4">
                  <Link
                    href="/growth-methodology"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-center gap-3.5 p-1 rounded-xl hover:bg-white/[0.04] transition-all group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#242120] border border-[#383332] flex items-center justify-center shrink-0 group-hover:border-white/20 group-hover:bg-[#2c2826] transition-all">
                      <BookOpen className="w-5 h-5 text-[#60a5fa]" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[15px] font-semibold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                        Growth Methodology
                      </span>
                      <span className="text-[13px] text-[#a1a1aa] leading-snug mt-0.5">
                        The 6-step loop
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/faq"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-center gap-3.5 p-1 rounded-xl hover:bg-white/[0.04] transition-all group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#242120] border border-[#383332] flex items-center justify-center shrink-0 group-hover:border-white/20 group-hover:bg-[#2c2826] transition-all">
                      <HelpCircle className="w-5 h-5 text-[#4ade80]" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[15px] font-semibold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                        Help Center & FAQ
                      </span>
                      <span className="text-[13px] text-[#a1a1aa] leading-snug mt-0.5">
                        Answers and tutorials
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/docs"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-center gap-3.5 p-1 rounded-xl hover:bg-white/[0.04] transition-all group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#242120] border border-[#383332] flex items-center justify-center shrink-0 group-hover:border-white/20 group-hover:bg-[#2c2826] transition-all">
                      <FileCode className="w-5 h-5 text-[#c084fc]" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[15px] font-semibold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                        API Documentation
                      </span>
                      <span className="text-[13px] text-[#a1a1aa] leading-snug mt-0.5">
                        Webhooks & endpoints
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right CTA Button with Email Input on Click */}
        <div className="hidden md:flex items-center gap-3">
          {!trialEmailOpen ? (
            <button
              onClick={() => setTrialEmailOpen(true)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full bg-[#ffffff] text-[#000000] hover:bg-[#e4e4e7] transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] cursor-pointer"
            >
              <span>Start free trial</span>
            </button>
          ) : navSubmitted ? (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold animate-fadeIn">
              <Check className="w-3.5 h-3.5" />
              <span>Trial link sent to {navEmail || "your inbox"}!</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (navEmail.trim()) {
                  setNavSubmitted(true);
                  setTimeout(() => {
                    setNavSubmitted(false);
                    setTrialEmailOpen(false);
                    setNavEmail("");
                  }, 3500);
                }
              }}
              className="flex items-center rounded-full border border-[#3f3f46] bg-[#141416] p-1 pl-3 shadow-[0_0_20px_rgba(0,0,0,0.6)] focus-within:border-[#ffffff] transition-all animate-fadeIn"
            >
              <Mail className="w-3.5 h-3.5 text-[#a1a1aa] shrink-0 mr-1.5" />
              <input
                type="email"
                autoFocus
                required
                value={navEmail}
                onChange={(e) => setNavEmail(e.target.value)}
                placeholder="Enter your email id"
                className="bg-transparent text-xs text-white placeholder-[#71717a] focus:outline-none w-44 sm:w-48 py-1"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#e4e4e7] transition-all shrink-0 flex items-center gap-1 cursor-pointer"
              >
                <span>Start</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setTrialEmailOpen(false);
                  setNavEmail("");
                }}
                className="p-1 text-[#71717a] hover:text-white rounded-full transition-colors ml-0.5 cursor-pointer"
                title="Cancel"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#a1a1aa] hover:text-[#ffffff] p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-[#000000] border-b border-[#262626] px-6 py-6 flex flex-col gap-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          <span className="text-xs font-semibold text-[#71717a] uppercase tracking-wider">
            Agents
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[...agentsListCol1, ...agentsListCol2].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-[#1a1716] border border-[#383332]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#242120] border border-[#383332] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#ffffff] truncate">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-[#a1a1aa] truncate">
                    {item.desc}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <span className="text-xs font-semibold text-[#71717a] uppercase tracking-wider mt-2">
            Integrations
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[...integrationsListCol1, ...integrationsListCol2, ...integrationsListCol3].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-[#1a1716] border border-[#383332]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#242120] border border-[#383332] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#ffffff] truncate">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-[#a1a1aa] truncate">
                    {item.desc}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <span className="text-xs font-semibold text-[#71717a] uppercase tracking-wider mt-2">
            Use Cases
          </span>
          <div className="grid grid-cols-2 gap-2">
            {useCasesList.slice(0, 6).map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-[#ffffff] py-1.5 px-2 rounded bg-[#111111] border border-[#262626]"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <Link
            href="/integrations"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-[#ffffff] py-2 border-b border-[#262626]/50"
          >
            Integrations Directory
          </Link>
          <Link
            href="/growth-methodology"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-[#ffffff] py-2 border-b border-[#262626]/50"
          >
            Growth Methodology
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-[#ffffff] py-2 border-b border-[#262626]/50"
          >
            Pricing Plans
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-[#ffffff] py-2 border-b border-[#262626]/50 flex items-center justify-between"
          >
            <span>Live Dashboard</span>
            <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">NEW</span>
          </Link>
          <Link
            href="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-[#ffffff] py-2 border-b border-[#262626]/50"
          >
            Help Center & FAQ
          </Link>
          <Link
            href="/docs"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-[#ffffff] py-2 border-b border-[#262626]/50"
          >
            API & Webhooks
          </Link>

          <div className="pt-2">
            {!trialEmailOpen ? (
              <button
                onClick={() => setTrialEmailOpen(true)}
                className="w-full text-center py-2.5 text-sm font-semibold rounded-full bg-[#ffffff] text-[#000000] block cursor-pointer"
              >
                Start free trial →
              </button>
            ) : navSubmitted ? (
              <div className="w-full py-2.5 text-center text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ✓ Free trial link sent to {navEmail || "your inbox"}!
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (navEmail.trim()) {
                    setNavSubmitted(true);
                    setTimeout(() => {
                      setNavSubmitted(false);
                      setTrialEmailOpen(false);
                      setNavEmail("");
                    }, 3500);
                  }
                }}
                className="flex flex-col gap-2 p-2 rounded-2xl bg-[#141416] border border-[#27272a]"
              >
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#09090b] border border-[#27272a]">
                  <Mail className="w-4 h-4 text-[#a1a1aa]" />
                  <input
                    type="email"
                    autoFocus
                    required
                    value={navEmail}
                    onChange={(e) => setNavEmail(e.target.value)}
                    placeholder="Enter your email id"
                    className="w-full bg-transparent text-xs text-white placeholder-[#71717a] focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 text-xs font-bold rounded-xl bg-white text-black hover:bg-[#e4e4e7] cursor-pointer"
                  >
                    Activate Free Trial →
                  </button>
                  <button
                    type="button"
                    onClick={() => setTrialEmailOpen(false)}
                    className="px-3 py-2 text-xs text-[#a1a1aa] hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
