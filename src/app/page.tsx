import Divider from "@/components/Divider";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
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
      <Features2/>
    </main>
  )
}
