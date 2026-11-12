import NavBar from "@/components/NavBar";
import OkizaHeroSection from "@/components/OkizaHeroSection";
import PublishStackSection from "@/components/PublishStackSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProductShowcaseSection from "@/components/ProductShowcaseSection";
import CompetitiveSection from "@/components/CompetitiveSection";
import WorkflowSection from "@/components/WorkflowSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] relative"
      data-component="@screens/OkizaLanding.jsx"
    >
      {/* Top sticky navigation bar */}
      <NavBar />

      <main className="flex flex-col w-full">
        {/* Hero Section: Meet Okiza, the AI CMO */}
        <OkizaHeroSection />

        {/* Step 3: Publish & Stack Flow Architecture */}
        <PublishStackSection />

        {/* Quantifiable ROI and Signal Metrics */}
        <ImpactMetrics />

        {/* The 7 Core Studios / Capabilities (Brand, Competitors, SEO, Creative, Influencer, Strategy, Performance) */}
        <CapabilitiesSection />

        {/* Live Product Dashboard Showcase (app.okiza.ai/overview) */}
        <ProductShowcaseSection />

        {/* In-depth Competitive Intelligence Matrix */}
        <CompetitiveSection />

        {/* Complete 6-Step Closed-Loop Growth Workflow */}
        <WorkflowSection />

        {/* Pricing & ROI Tiering */}
        <PricingSection />

        {/* FAQ Knowledge Base */}
        <FAQSection />

        {/* Final Conversion Call To Action */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
