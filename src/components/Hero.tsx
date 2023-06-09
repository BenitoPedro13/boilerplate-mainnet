import heroMobileImage from "@/../public/hero-mobile-image-512w.png";
import playCircle from "@/../public/PlayCircle.svg";
import heroDesktopImage from "@/../public/hero-desktop-image.png";
import arrowRight from "@/../public/arrow-right-1.svg";
import style from "@/style/hero.module.css";
import Image from "next/image";

import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="flex flex-col items-center p-0 isolate w-full h-fit bg-white">
      <div className="flex flex-col items-start py-16 gap-16 w-full lg:items-center lg:pt-24 lg:pb-0">
        <div className="hidden lg:flex flex-col items-center px-8 gap-8 max-w-7xl w-full h-fit">
          <div className="flex flex-col items-center gap-12 w-fit h-fit max-w-[1216px]">
            <div className="flex flex-col items-center gap-6 w-full max-w-[1024px] h-fit">
              <div className="flex flex-col items-center gap-4 w-full h-fit">
                <div className="flex items-center p-1 gap-3 w-fit h-8 bg-primary-50 bg-blend-multiply rounded-2xl">
                  <div className="flex items-center py-[2px] px-[10px] w-fit h-fit bg-white bg-blend-normal rounded-2xl">
                    <button>
                      <p className="text-primary-700 text-center text-sm font-medium">
                        New feature
                      </p>
                    </button>
                  </div>
                  <button className="flex items-center gap-1 w-fit h-fit">
                      <p className="text-primary-700 text-sm font-medium">
                        Check out the team dashboard
                      </p>
                      <Image
                        src={arrowRight}
                        width={16}
                        height={16}
                        alt="Arrow Right Icon"
                      />
                  </button>
                </div>
                <h1 className="font-['Balgin'] font-bold text-6xl leading-[72px] text-center text-gray-900">
                  Beautiful analytics to grow smarter
                </h1>
              </div>
              <p className="text-xl leading-[30px] text-center text-gray-600 w-full max-w-3xl">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </p>
            </div>
            <div className="flex items-start gap-3 w-fit h-fit">
              <button className="box-border flex flex-row justify-center items-center py-4 px-7 gap-3 w-[145px] h-[60px] bg-white border border-gray-300 rounded-lg shadow-xs">
                <div className="h-6 w-6">
                  <Image
                    src={playCircle}
                    width={24}
                    height={24}
                    alt="Play Icon"
                  />
                </div>
                <p
                  className={`__Plus_Jakarta_Sans_fd0c7c h-6 font-semibold text-lg text-gray-700`}
                >
                  Demo
                </p>
              </button>
              <button className="box-border flex flex-row justify-center items-center py-4 px-7 gap-3 w-[145px] h-[60px] bg-primary-600 border border-primary-600 rounded-lg shadow-xs">
                <p
                  className={`__Plus_Jakarta_Sans_fd0c7c h-6 font-semibold text-lg text-white`}
                >
                  Sign up
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-center px-8 gap-8 max-w-7xl w-full h-fit">
          <div className="flex flex-col items-center gap-12 w-fit h-fit max-w-[1216px]">
            <Image
              src={heroDesktopImage}
              sizes="100vw"
              alt="Application Screen Mockup"
            />
          </div>
        </div>
        <div className="flex flex-row items-start pl-4 pr-4 w-full h-fit lg:hidden">
          <div className="flex flex-col items-start p-0 gap-8 w-full h-full">
            <div className="flex flex-col items-start p-0 gap-4 w-full h-fit">
              <div className="w-full h-fit">
                <h1 className="h-full font-medium text-4xl leading-[44px] text-gray-900 tracking-[-0.02em]">
                  We design digital{" "}
                  <span className={style.underlineBg}>experiences</span> that
                  create more happy in the world
                </h1>
              </div>
              <p className="w-full h-fit font-normal text-lg text-gray-600">
                — We’re a full-service design and development agency who
                specialise in simple, useful and beautiful solutions.
              </p>
            </div>
            <div className="flex flex-col items-start p-0 gap-3 w-full h-fit">
              <button className="box-border flex flex-row justify-center items-center py-3 px-5 gap-2 w-full h-fit bg-primary-600 border border-primary-600 rounded-lg shadow-xs">
                <p className="h-6 font-semibold text-base text-white">
                  Get in touch
                </p>
              </button>
              <button className="box-border flex flex-row justify-center items-center py-3 px-5 gap-2 w-full h-fit bg-white border border-gray-300 rounded-lg shadow-xs">
                <div className="h-5 w-5">
                  <Image
                    src={playCircle}
                    width={20}
                    height={20}
                    alt="Play Icon"
                  />
                </div>
                <p className="h-6 font-semibold text-base text-gray-700">
                  Showreel
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center pl-4 pr-4 w-full h-fit lg:hidden">
          <div className="w-fit h-fit">
            <Image
              src={heroMobileImage}
              sizes="100vw"
              alt="Hero Ilustrative Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
