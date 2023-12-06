"use client";
import React, { useState } from "react";

const AboutUsHeroSection = () => {
  const [color, setColor] = useState("#7a2323");

  return (
    <section className="flex flex-col items-center gap-16 py-16 px-0 self-stretch bg-white">
      <div className="flex items-start py-0 px-4 self-stretch">
        <div className="flex flex-1 flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 self-stretch">
            <div className="flex flex-col items-center gap-3 self-stretch">
              <p className="self-stretch text-primary-700 text-center text-sm font-semibold">
                About us
              </p>
              <h1
                onMouseEnter={() => {
                  if (color === "#7a2323") {
                    return setColor("#ff0067");
                  }
                  return setColor("#7a2323");
                }}
                className={`${
                  color === "#7a2323" ? "scale-125" : "scale-100"
                } transition-all duration-300 text-center text-[${color}] text-4xl leading-[44px] font-semibold tracking-[-0.72px] self-stretch`}
              >
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
