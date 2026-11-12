"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  FileCode,
  Copy,
  Check,
  Terminal,
  Zap,
  Lock,
  ArrowRight,
  ExternalLink,
  Code2,
  BookOpen,
} from "lucide-react";

export default function DocsPage() {
  const [copiedId, setCopiedId] = useState(null);
  const [activeLang, setActiveLang] = useState("bash");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const curlAuditExample = `curl -X POST https://api.okiza.com/v1/audit/trigger \\
  -H "Authorization: Bearer okz_live_948f92bd84729" \\
  -H "Content-Type: application/json" \\
  -d '{
    "domain": "yourcompany.com",
    "include_geo": true,
    "engines": ["chatgpt", "perplexity", "claude", "gemini"]
  }'`;

  const nodeAuditExample = `import { OkizaClient } from '@okiza/sdk';

const okiza = new OkizaClient({
  apiKey: process.env.OKIZA_API_KEY,
});

const audit = await okiza.audits.trigger({
  domain: 'yourcompany.com',
  includeGeo: true,
  engines: ['chatgpt', 'perplexity', 'claude', 'gemini'],
});

console.log('Audit initiated. ID:', audit.id);`;

  const pythonAuditExample = `from okiza import Okiza

client = Okiza(api_key="okz_live_948f92bd84729")

audit = client.audits.trigger(
    domain="yourcompany.com",
    include_geo=True,
    engines=["chatgpt", "perplexity", "claude", "gemini"]
)

print(f"Audit initiated: {audit.id}")`;

  const responseExample = `{
  "status": "success",
  "audit_id": "aud_88319f0a2",
  "domain": "yourcompany.com",
  "health_score": 86,
  "geo_visibility_score": 79,
  "daily_fixes": [
    {
      "id": "fix_01",
      "type": "technical_schema",
      "priority": "critical",
      "title": "Add JSON-LD SoftwareApplication schema to pricing page",
      "impact": "+14% expected LLM citation boost",
      "ready_patch": "<script type=\\"application/ld+json\\">...</script>"
    },
    {
      "id": "fix_02",
      "type": "geo_keyword_gap",
      "priority": "high",
      "title": "Missing Perplexity citation query for 'AI CMO automation'",
      "impact": "Top 3 answer placement opportunity",
      "ready_patch": "Recommended draft article ready for approval"
    }
  ]
}`;

  const webhookExample = `{
  "event": "audit.completed",
  "timestamp": 1731302400,
  "data": {
    "domain": "yourcompany.com",
    "score": 88,
    "critical_count": 0,
    "fixes_generated": 2,
    "pr_url": "https://github.com/your-org/web/pull/142"
  }
}`;

  return (
    <div className="min-h-screen bg-[#000000] text-[#ededed] font-sans antialiased selection:bg-[#262626] selection:text-white">
      <NavBar />

      <main className="relative pt-12 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        {/* Top Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c1917] border border-[#383332] shadow-sm">
            <span className="text-[11px] font-mono tracking-widest text-[#a8a29e] uppercase font-bold">
              OKIZA AI CMO
            </span>
            <span className="text-[#57534e]">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white font-medium">
              <FileCode className="w-3.5 h-3.5 text-[#c084fc]" />
              API Documentation & Webhooks
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Build on Okiza API
          </h1>
          <p className="text-base text-[#a1a1aa] leading-relaxed">
            Trigger autonomous audits, pull ready-to-ship fixes, and subscribe to
            real-time marketing pipeline webhooks directly from your terminal or CI/CD.
          </p>
        </div>

        {/* Quick Nav Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <div className="p-5 rounded-xl border border-[#262626] bg-[#141414] hover:border-[#383332] transition-all">
            <div className="w-9 h-9 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center text-[#38bdf8] mb-3">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">Authentication</h3>
            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              Authenticate all requests using standard Bearer API tokens generated in your workspace settings.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[#262626] bg-[#141414] hover:border-[#383332] transition-all">
            <div className="w-9 h-9 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center text-[#4ade80] mb-3">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">Trigger Audits</h3>
            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              Initiate on-demand crawls of technical SEO, backlinks, and AI search visibility (GEO).
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[#262626] bg-[#141414] hover:border-[#383332] transition-all">
            <div className="w-9 h-9 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center text-[#c084fc] mb-3">
              <Terminal className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">Webhooks & PRs</h3>
            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              Listen for daily ready-to-ship fixes or automated GitHub pull request generation events.
            </p>
          </div>
        </div>

        {/* API Endpoint Section: Trigger Audit */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#14532d] text-[#86efac] border border-[#166534]">
                  POST
                </span>
                <span className="font-mono text-sm text-white font-semibold">
                  /v1/audit/trigger
                </span>
              </div>
              <p className="text-sm text-[#a1a1aa]">
                Launches an asynchronous audit of your domain&apos;s technical health and AI engine citation footprint.
              </p>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-[#141414] border border-[#262626] rounded-lg p-1 self-start md:self-auto">
              {["bash", "node", "python"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase transition-all cursor-pointer ${
                    activeLang === lang
                      ? "bg-white text-black font-bold"
                      : "text-[#a1a1aa] hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Request Snippet */}
          <div className="rounded-2xl border border-[#262626] bg-[#0d0d0d] overflow-hidden mb-6 shadow-xl">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#262626] bg-[#141414]">
              <span className="text-xs font-mono text-[#a1a1aa]">
                Request Example ({activeLang})
              </span>
              <button
                onClick={() =>
                  copyToClipboard(
                    activeLang === "bash"
                      ? curlAuditExample
                      : activeLang === "node"
                      ? nodeAuditExample
                      : pythonAuditExample,
                    "req"
                  )
                }
                className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
              >
                {copiedId === "req" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-5 font-mono text-xs md:text-sm text-[#e4e4e7] overflow-x-auto leading-relaxed">
              <code>
                {activeLang === "bash" && curlAuditExample}
                {activeLang === "node" && nodeAuditExample}
                {activeLang === "python" && pythonAuditExample}
              </code>
            </pre>
          </div>

          {/* Response Snippet */}
          <div className="rounded-2xl border border-[#262626] bg-[#0d0d0d] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#262626] bg-[#141414]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-mono text-[#a1a1aa]">
                  200 OK • Response Payload
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(responseExample, "res")}
                className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
              >
                {copiedId === "res" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-5 font-mono text-xs md:text-sm text-[#38bdf8] overflow-x-auto leading-relaxed">
              <code>{responseExample}</code>
            </pre>
          </div>
        </section>

        {/* Webhooks Section */}
        <section className="mb-16">
          <div className="mb-4">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#3b0764] text-[#d8b4fe] border border-[#581c87]">
                WEBHOOK
              </span>
              <span className="font-mono text-sm text-white font-semibold">
                audit.completed
              </span>
            </div>
            <p className="text-sm text-[#a1a1aa]">
              Dispatched automatically when daily technical crawls finish and new code patches or articles are ready for review.
            </p>
          </div>

          <div className="rounded-2xl border border-[#262626] bg-[#0d0d0d] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#262626] bg-[#141414]">
              <span className="text-xs font-mono text-[#a1a1aa]">
                Webhook JSON Payload
              </span>
              <button
                onClick={() => copyToClipboard(webhookExample, "webhook")}
                className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
              >
                {copiedId === "webhook" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-5 font-mono text-xs md:text-sm text-[#f472b6] overflow-x-auto leading-relaxed">
              <code>{webhookExample}</code>
            </pre>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="p-8 md:p-10 rounded-2xl border border-[#262626] bg-gradient-to-b from-[#141414] to-[#0a0a0a] text-center max-w-2xl mx-auto shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-2">
            Need an API token or sandbox environment?
          </h3>
          <p className="text-sm text-[#a1a1aa] mb-6">
            Get your live and test keys directly from the Okiza dashboard during your 7-day free trial.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all"
            >
              Get Free API Key
            </Link>
            <Link
              href="/growth-methodology"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#18181b] border border-[#262626] text-white font-medium text-sm hover:border-[#383332] transition-all flex items-center justify-center gap-1.5"
            >
              <span>Read Growth Flywheel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

