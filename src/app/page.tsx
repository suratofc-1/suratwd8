import Navbar from "@/components/Navbar";
import BannerSwiper from "@/components/BannerSwiper";
import TrustBar from "@/components/TrustBar";
import ProviderSection from "@/components/ProviderSection";
import KeunggulanSection from "@/components/KeunggulanSection";
import SeoContent from "@/components/SeoContent";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <BannerSwiper />
      <TrustBar />
      <ProviderSection />
      <KeunggulanSection />
      <SeoContent />
      <FaqSection />
      <Footer />
    </main>
  );
}
