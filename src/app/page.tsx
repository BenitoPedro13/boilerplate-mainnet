import Divider from "@/components/Divider";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
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
      <Features/>
    </main>
  )
}
