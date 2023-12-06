import React from "react";

const AboutUsHeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-16 py-16 px-0 self-stretch bg-white">
      <div className="flex items-start py-0 px-4 self-stretch">
        <div className="flex flex-1 flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 self-stretch">
            <div className="flex flex-col items-center gap-3 self-stretch">
              <p className="self-stretch text-primary-700 text-center text-sm font-semibold">
                About us
              </p>
              <h1 className="text-gray-900 text-center text-4xl leading-[44px] font-semibold tracking-[-0.72px] self-stretch">
                About the company
              </h1>
            </div>
            <p className="text-gray-600 text-center text-lg self-stretch">
              Learn more about the company and the team behind it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
