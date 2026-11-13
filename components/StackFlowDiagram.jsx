"use client";

import { useState, useRef, useEffect } from "react";
import {
  Globe,
  Search,
  PenTool,
  Clapperboard,
  Megaphone,
  CodeXml,
  Share2,
} from "lucide-react";
import OkizaLogo from "./OkizaLogo";

export default function StackFlowDiagram({ activeIntegration = null }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const availableWidth = containerRef.current.clientWidth;
        if (availableWidth > 0) {
          // Dynamically expands horizontally to fill the parent container width
          const calculated = availableWidth / 1152;
          setScale(Math.max(0.45, Math.min(1.35, calculated)));
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Left side input items
  const leftItems = [
    {
      id: "website",
      name: "Your website",
      yCenter: 204,
      top: 184,
      icon: <Globe className="w-4 h-4 text-[#a1a1aa] shrink-0" strokeWidth={1.75} />,
    },
    {
      id: "search-console",
      name: "Google Search Console",
      yCenter: 262,
      top: 242,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
          <path d="M4 17.5a1.5 1.5 0 0 0 1.5 1.5H8v-5H4v3.5z" fill="#00832d" />
          <path d="M9.5 19H12v-8H9.5v8z" fill="#ffba00" />
          <path d="M13.5 19H16a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-2.5V19z" fill="#0066da" />
          <path d="M4 12.5V8a2 2 0 0 1 2-2h4l-6 6.5z" fill="#2684fc" />
        </svg>
      ),
    },
    {
      id: "analytics",
      name: "Google Analytics",
      yCenter: 320,
      top: 300,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
          <path d="M19.5 4h-2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" fill="#F9AB00" />
          <path d="M12.5 10h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" fill="#E37400" />
          <circle cx="5.5" cy="17.5" r="2.5" fill="#E37400" />
        </svg>
      ),
    },
  ];

  // Right side output items
  const rightItems = [
    {
      id: "geo",
      name: "GEO fixes",
      yCenter: 62,
      top: 44,
      icon: <Globe className="w-4 h-4 text-[#38bdf8] shrink-0" strokeWidth={1.75} />,
    },
    {
      id: "seo",
      name: "SEO fixes",
      yCenter: 112,
      top: 94,
      icon: <Search className="w-4 h-4 text-[#c084fc] shrink-0" strokeWidth={1.75} />,
    },
    {
      id: "articles",
      name: "Articles",
      yCenter: 162,
      top: 144,
      icon: <PenTool className="w-4 h-4 text-[#c084fc] shrink-0" strokeWidth={1.75} />,
    },
    {
      id: "ugc",
      name: "UGC videos",
      yCenter: 212,
      top: 194,
      icon: <Clapperboard className="w-4 h-4 text-[#fb923c] shrink-0" strokeWidth={1.75} />,
    },
    {
      id: "x-posts",
      name: "Ready X posts",
      yCenter: 262,
      top: 244,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white shrink-0" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      id: "social-posts",
      name: "Social media posts",
      yCenter: 312,
      top: 294,
      icon: (
        <div className="w-4 h-4 rounded-[3px] bg-[#6366f1] flex items-center justify-center shrink-0">
          <Share2 className="w-2.5 h-2.5 text-white" />
        </div>
      ),
    },
    {
      id: "reddit-replies",
      name: "Reddit replies",
      yCenter: 362,
      top: 344,
      icon: (
        <div className="w-4 h-4 rounded-full bg-[#FF4500] flex items-center justify-center shrink-0 p-0.5">
          <svg viewBox="0 0 24 24" fill="white" className="w-2.5 h-2.5" aria-hidden="true">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.56 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.197-2.512-.73a.326.326 0 0 0-.232-.095z"/>
          </svg>
        </div>
      ),
    },
    {
      id: "influencer",
      name: "Influencer campaigns",
      yCenter: 412,
      top: 394,
      icon: <Megaphone className="w-4 h-4 text-[#4ade80] shrink-0" strokeWidth={1.75} />,
    },
    {
      id: "code-fixes",
      name: "Code fixes as PRs",
      yCenter: 462,
      top: 444,
      icon: <CodeXml className="w-4 h-4 text-[#22d3ee] shrink-0" strokeWidth={1.75} />,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center items-center overflow-hidden"
      style={{
        height: `${Math.round(524 * scale)}px`,
      }}
    >
      {/* Exact coordinate canvas matching user's SVG 1152 x 524 */}
      <div
        style={{
          width: 1152,
          height: 524,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
        className="relative shrink-0 select-none transition-transform duration-75 ease-out"
      >
        {/* SVG Connectors & Animations Layer */}
        <svg
          viewBox="0 0 1152 524"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Static track lines */}
          <g>
            <path
              d="M232,204 C402,204 392,248 562,248"
              className="fill-none stroke-[hsl(30_9%_22%)] stroke-1"
            />
            <path
              d="M232,262 C402,262 392,262 562,262"
              className="fill-none stroke-[hsl(30_9%_22%)] stroke-1"
            />
            <path
              d="M232,320 C402,320 392,276 562,276"
              className="fill-none stroke-[hsl(30_9%_22%)] stroke-1"
            />
            <path
              d="M654,230 C824,230 750,62 920,62"
              className="fill-none stroke-[hsl(30_9%_22%)] stroke-1"
            />
            <path
              d="M654,236.5 C824,236.5 750,112 920,112"
              className="fill-none stroke-[hsl(30_9%_22%)] stroke-1"
            />
            <path
              d="M654,243 C824,243 750,162 920,162"
              className="fill-none stroke-[hsl(30_9%_22%)] stroke-1"
            />
            <path
              d="M654,249.5 C824,249.5 750,212 920,212"
              className="fill-none stroke-[hsl(30_9%_22%)] stroke-1"
            />
            <path
              d="M654,256 C824,256 750,262 920,262"
              className="fill-none stroke-[hsl(30_9%_22%)] stroke-1"
            />
            <path
              d="M654,262.5 C824,262.5 750,312 920,312"
              className="fill-none stroke-[hsl(30_9%_22%)] stroke-1"
            />
            <path
              d="M654,269 C824,269 750,362 920,362"
              className="fill-none stroke-[hsl(30_9%_22%)] stroke-1"
            />
            <path
              d="M654,275.5 C824,275.5 750,412 920,412"
              className="fill-none stroke-[hsl(30_9%_22%)] stroke-1"
            />
            <path
              d="M654,282 C824,282 750,462 920,462"
              className="fill-none stroke-[hsl(30_9%_22%)] stroke-1"
            />
          </g>

          {/* Animated pulsing light flow lines */}
          <g>
            <path
              d="M232,204 C402,204 392,248 562,248"
              strokeDasharray="3 160"
              strokeLinecap="round"
              className="fill-none stroke-[#e9e9eb] stroke-[1.2] opacity-90 [stroke-linecap:round] motion-reduce:hidden motion-reduce:animate-none [stroke-dasharray:3_160] animate-[landing-flow_4.5s_linear_infinite]"
              style={{ animationDelay: "0s" }}
            />
            <path
              d="M232,262 C402,262 392,262 562,262"
              strokeDasharray="3 160"
              strokeLinecap="round"
              className="fill-none stroke-[#e9e9eb] stroke-[1.2] opacity-90 [stroke-linecap:round] motion-reduce:hidden motion-reduce:animate-none [stroke-dasharray:3_160] animate-[landing-flow_4.5s_linear_infinite]"
              style={{ animationDelay: "-1.3s" }}
            />
            <path
              d="M232,320 C402,320 392,276 562,276"
              strokeDasharray="3 160"
              strokeLinecap="round"
              className="fill-none stroke-[#e9e9eb] stroke-[1.2] opacity-90 [stroke-linecap:round] motion-reduce:hidden motion-reduce:animate-none [stroke-dasharray:3_160] animate-[landing-flow_4.5s_linear_infinite]"
              style={{ animationDelay: "-2.6s" }}
            />
            <path
              d="M654,230 C824,230 750,62 920,62"
              strokeDasharray="3 160"
              strokeLinecap="round"
              className="fill-none stroke-[#e9e9eb] stroke-[1.2] opacity-90 [stroke-linecap:round] motion-reduce:hidden motion-reduce:animate-none [stroke-dasharray:3_160] animate-[landing-flow_4.5s_linear_infinite]"
              style={{ animationDelay: "0s" }}
            />
            <path
              d="M654,236.5 C824,236.5 750,112 920,112"
              strokeDasharray="3 160"
              strokeLinecap="round"
              className="fill-none stroke-[#e9e9eb] stroke-[1.2] opacity-90 [stroke-linecap:round] motion-reduce:hidden motion-reduce:animate-none [stroke-dasharray:3_160] animate-[landing-flow_4.5s_linear_infinite]"
              style={{ animationDelay: "-0.45s" }}
            />
            <path
              d="M654,243 C824,243 750,162 920,162"
              strokeDasharray="3 160"
              strokeLinecap="round"
              className="fill-none stroke-[#e9e9eb] stroke-[1.2] opacity-90 [stroke-linecap:round] motion-reduce:hidden motion-reduce:animate-none [stroke-dasharray:3_160] animate-[landing-flow_4.5s_linear_infinite]"
              style={{ animationDelay: "-0.9s" }}
            />
            <path
              d="M654,249.5 C824,249.5 750,212 920,212"
              strokeDasharray="3 160"
              strokeLinecap="round"
              className="fill-none stroke-[#e9e9eb] stroke-[1.2] opacity-90 [stroke-linecap:round] motion-reduce:hidden motion-reduce:animate-none [stroke-dasharray:3_160] animate-[landing-flow_4.5s_linear_infinite]"
              style={{ animationDelay: "-1.35s" }}
            />
            <path
              d="M654,256 C824,256 750,262 920,262"
              strokeDasharray="3 160"
              strokeLinecap="round"
              className="fill-none stroke-[#e9e9eb] stroke-[1.2] opacity-90 [stroke-linecap:round] motion-reduce:hidden motion-reduce:animate-none [stroke-dasharray:3_160] animate-[landing-flow_4.5s_linear_infinite]"
              style={{ animationDelay: "-1.8s" }}
            />
            <path
              d="M654,262.5 C824,262.5 750,312 920,312"
              strokeDasharray="3 160"
              strokeLinecap="round"
              className="fill-none stroke-[#e9e9eb] stroke-[1.2] opacity-90 [stroke-linecap:round] motion-reduce:hidden motion-reduce:animate-none [stroke-dasharray:3_160] animate-[landing-flow_4.5s_linear_infinite]"
              style={{ animationDelay: "-2.25s" }}
            />
            <path
              d="M654,269 C824,269 750,362 920,362"
              strokeDasharray="3 160"
              strokeLinecap="round"
              className="fill-none stroke-[#e9e9eb] stroke-[1.2] opacity-90 [stroke-linecap:round] motion-reduce:hidden motion-reduce:animate-none [stroke-dasharray:3_160] animate-[landing-flow_4.5s_linear_infinite]"
              style={{ animationDelay: "-2.7s" }}
            />
            <path
              d="M654,275.5 C824,275.5 750,412 920,412"
              strokeDasharray="3 160"
              strokeLinecap="round"
              className="fill-none stroke-[#e9e9eb] stroke-[1.2] opacity-90 [stroke-linecap:round] motion-reduce:hidden motion-reduce:animate-none [stroke-dasharray:3_160] animate-[landing-flow_4.5s_linear_infinite]"
              style={{ animationDelay: "-3.15s" }}
            />
            <path
              d="M654,282 C824,282 750,462 920,462"
              strokeDasharray="3 160"
              strokeLinecap="round"
              className="fill-none stroke-[#e9e9eb] stroke-[1.2] opacity-90 [stroke-linecap:round] motion-reduce:hidden motion-reduce:animate-none [stroke-dasharray:3_160] animate-[landing-flow_4.5s_linear_infinite]"
              style={{ animationDelay: "-3.6s" }}
            />
          </g>
        </svg>

        {/* LEFT COLUMN: Takes Data From */}
        <div className="absolute left-[32px] top-[148px] text-[10px] font-mono tracking-[0.2em] text-[#71717a] uppercase font-semibold">
          Takes data from
        </div>

        {leftItems.map((item) => {
          const isHovered = hoveredCard === item.id;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ top: `${item.top}px` }}
              className={`absolute left-[32px] w-[200px] h-[40px] px-3.5 rounded-xl border flex items-center gap-3 transition-all duration-200 cursor-default ${
                isHovered
                  ? "bg-[#1c1917] border-[#52525b] shadow-lg shadow-black/50 scale-[1.02]"
                  : "bg-[#141414] border-[#262626] hover:border-[#383332]"
              }`}
            >
              {item.icon}
              <span className="text-xs sm:text-[13px] font-medium text-[#f4f4f5] truncate">
                {item.name}
              </span>
            </div>
          );
        })}

        {/* CENTER NODE: Okiza AI CMO */}
        <div
          className="absolute left-[562px] top-[216px] w-[92px] h-[92px] rounded-[22px] bg-[#f4f4f5] border border-[#e4e4e7] flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-transform duration-300 hover:scale-105 cursor-pointer group"
          onMouseEnter={() => setHoveredCard("okiza-center")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Okiza black octopus logo */}
          <OkizaLogo size={48} variant="black" className="transition-transform group-hover:scale-110" />
        </div>

        {/* Text underneath the center node matching user screenshots */}
        <div className="absolute left-[512px] top-[320px] w-[192px] text-center flex flex-col items-center">
          <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#a1a1aa] uppercase">
            Okiza
          </span>
          <span className="text-[9px] font-mono tracking-[0.25em] text-[#71717a] uppercase mt-0.5">
            Approved by you
          </span>
        </div>

        {/* RIGHT COLUMN: You Get */}
        <div className="absolute left-[920px] top-[14px] text-[10px] font-mono tracking-[0.2em] text-[#71717a] uppercase font-semibold">
          You get
        </div>

        {rightItems.map((item) => {
          const isHovered = hoveredCard === item.id;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ top: `${item.top}px` }}
              className={`absolute left-[920px] w-[210px] h-[36px] px-3.5 rounded-xl border flex items-center gap-2.5 transition-all duration-200 cursor-default ${
                isHovered
                  ? "bg-[#1c1917] border-[#52525b] shadow-lg shadow-black/50 scale-[1.02]"
                  : "bg-[#141414] border-[#262626] hover:border-[#383332]"
              }`}
            >
              {item.icon}
              <span className="text-xs sm:text-[13px] font-medium text-[#f4f4f5] truncate">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

