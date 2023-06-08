import Divider from "@/components/Divider";
import FaqSection from "@/components/FaqSection";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MetricsSection from "@/components/MetricsSection";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <SocialProof/>
      <Divider/>
      <Features/>
      <Testimonials/>
      <Features2/>
      <Divider/>
      <FaqSection/>
      <Divider/>
      <MetricsSection />
      <Footer />
    </main>
  )
}
