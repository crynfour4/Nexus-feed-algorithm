"use client";
import CTASection from "@/components/ui/landing_page/CTASection";
import Footer from "@/components/ui/landing_page/Footer";
import Header from "@/components/ui/landing_page/Header";
import HeroSection from "@/components/ui/landing_page/HeroSection";
import ProductValue from "@/components/ui/landing_page/ProductValue";
// import ".globals.css";

export default function Home() {
  return (
    <div className="relative select-none dark">
      <Header />
      <HeroSection />
      <ProductValue />
      <CTASection />
      <Footer />
    </div>
  );
}
