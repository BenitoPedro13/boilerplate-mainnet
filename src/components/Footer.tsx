import Image from "next/image";
import Link from "next/link";

import logo from '@/../public/logo.svg';
import { jakarta } from "./Features";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full h-fit">
      <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-12 py-12 bg-white">
        <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 px-4">
          <div className="box-border flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
            <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-4">
              <p className={`${jakarta.className} whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-sm leading-5 font-semibold text-left text-[#667085]`}>
                Product
              </p>
              <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Overview
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Features
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Solutions
                    </p>
                  </div>
                  <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 relative px-2 py-0.5 rounded-2xl bg-[#ecfdf3] mix-blend-multiply">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-xs leading-[18px] font-medium text-center text-[#027a48]">
                      New
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Tutorials
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Pricing
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Releases
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-4">
              <p className={`${jakarta.className} whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-sm leading-5 font-semibold text-left text-[#667085]`}>
                Company
              </p>
              <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      About us
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Careers
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Press
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      News
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Media kit
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Contact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
            <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-4">
              <p className={`${jakarta.className} whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-sm leading-5 font-semibold text-left text-[#667085]`}>
                Resources
              </p>
              <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Blog
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Newsletter
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Events
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Help centre
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Tutorials
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-4">
              <p className={`${jakarta.className} whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-sm leading-5 font-semibold text-left text-[#667085]`}>
                Use cases
              </p>
              <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Startups
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Enterprise
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Government
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      SaaS centre
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Marketplaces
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Ecommerce
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
            <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-4">
              <p className={`${jakarta.className} whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-sm leading-5 font-semibold text-left text-[#667085]`}>
                Social
              </p>
              <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Twitter
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      LinkedIn
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Facebook
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      GitHub
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      AngelList
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Dribbble
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-4">
              <p className={`${jakarta.className} whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-sm leading-5 font-semibold text-left text-[#667085]`}>
                Legal
              </p>
              <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Terms
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Privacy
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Cookies
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Licenses
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Settings
                    </p>
                  </div>
                </div>
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
                      Contact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 px-4">
          <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6 pt-8 border-t border-r-0 border-b-0 border-l-0 border-[#eaecf0]">
            <div className="box-border flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
              <div className="flex flex-row items-start p-0 h-8 w-auto cursor-pointer">
                <div className="h-8 w-auto">
                  <Link href='/'>
                    <Image src={logo} width={88} height={undefined} alt='Logo'/>
                  </Link>
                </div>
              </div>
            </div>
            <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-base leading-6 text-left text-[#667085]">
              © 2023 Untitled UI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;