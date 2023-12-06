import AboutUsHeroSection from "@/components/About/Hero";
import React from "react";

export const metadata = {
  title: 'Boilerplate | About Us',
  description: 'Boilerplate Pagina Sobre nós',
}

const AboutPage = () => {
  return (
    <main>
      <div className="flex flex-col items-center w-full h-fit bg-white">
        <AboutUsHeroSection />
      </div>
    </main>
  );
};

export default AboutPage;
