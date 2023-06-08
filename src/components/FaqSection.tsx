import Image from "next/image";

import minusCircle from "@/../public/minus-circle.svg";
import plusCircle from "@/../public/plus-circle.svg";

interface Props {}

const FaqSection = (props: Props) => {
  return (
    <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full h-fit">
      <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-12 py-16 bg-white">
        <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 px-4">
          <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-12">
            <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
              <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch font-['Balgin'] text-3xl leading-[38px] font-bold text-center text-[#101828]">
                Frequently asked questions
              </p>
              <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-lg leading-7 text-center text-[#475467]">
                Everything you need to know about the product and billing.
              </p>
            </div>
          </div>
        </div>
        <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 px-4">
          <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
            <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
              <div className="box-border flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-2">
                  <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-lg leading-7 font-medium text-left text-[#101828]">
                    Is there a free trial available?
                  </p>
                  <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-base leading-6 text-left text-[#475467]">
                    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a
                    free, personalized 30-minute onboarding call to get you up and running as soon
                    as possible.
                  </p>
                </div>
                <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pt-0.5">
                  <Image src={minusCircle} width={24} height={24} alt="Minus Tcon"/>
                </div>
              </div>
            </div>
            <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 pt-6 border-t border-r-0 border-b-0 border-l-0 border-[#eaecf0]">
              <div className="box-border flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-2">
                  <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-lg leading-7 font-medium text-left text-[#101828]">
                    Can I change my plan later?
                  </p>
                </div>
                <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pt-0.5">
                  <Image src={plusCircle} width={24} height={24} alt="Plus Tcon"/>
                </div>
              </div>
            </div>
            <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 pt-6 border-t border-r-0 border-b-0 border-l-0 border-[#eaecf0]">
              <div className="box-border flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-2">
                  <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-lg leading-7 font-medium text-left text-[#101828]">
                    What is your cancellation policy?
                  </p>
                </div>
                <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pt-0.5">
                  <Image src={plusCircle} width={24} height={24} alt="Plus Tcon"/>
                </div>
              </div>
            </div>
            <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 pt-6 border-t border-r-0 border-b-0 border-l-0 border-[#eaecf0]">
              <div className="box-border flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-2">
                  <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-lg leading-7 font-medium text-left text-[#101828]">
                    Can other info be added to an invoice?
                  </p>
                </div>
                <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pt-0.5">
                  <Image src={plusCircle} width={24} height={24} alt="Plus Tcon"/>
                </div>
              </div>
            </div>
            <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 pt-6 border-t border-r-0 border-b-0 border-l-0 border-[#eaecf0]">
              <div className="box-border flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-2">
                  <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-lg leading-7 font-medium text-left text-[#101828]">
                    How does billing work?
                  </p>
                </div>
                <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pt-0.5">
                  <Image src={plusCircle} width={24} height={24} alt="Plus Tcon"/>
                </div>
              </div>
            </div>
            <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 pt-6 border-t border-r-0 border-b-0 border-l-0 border-[#eaecf0]">
              <div className="box-border flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-2">
                  <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-lg leading-7 font-medium text-left text-[#101828]">
                    How do I change my account email?
                  </p>
                </div>
                <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pt-0.5">
                  <Image src={plusCircle} width={24} height={24} alt="Plus Tcon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 px-4">
          <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-6 px-5 py-8 rounded-2xl bg-gray-50">
            <div className="box-border block flex-grow-0 flex-shrink-0 w-[120px] h-14 relative">
              <div className="box-border flex flex-col justify-center items-center w-12 h-12 absolute top-2 left-0 rounded-[200px] bg-[#abb677] border-[1.5px] border-white">
                <img alt="Testimonial Avatar" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-avatar.de460634.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-avatar.de460634.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-avatar.de460634.png&amp;w=128&amp;q=75" />
              </div>
              <div className="box-border flex flex-col justify-center items-center w-12 h-12 absolute top-2 left-[72px] rounded-[200px] bg-[#d9b9bb] border-[1.5px] border-white">
                <img alt="Testimonial Avatar" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-avatar.de460634.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-avatar.de460634.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-avatar.de460634.png&amp;w=128&amp;q=75" />
              </div>
              <div className="box-border flex flex-col justify-center items-center w-14 h-14 absolute top-0 left-8 rounded-[200px] bg-[#c7b9da] border-[1.5px] border-white" >
                <img alt="Testimonial Avatar" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-avatar.de460634.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-avatar.de460634.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-avatar.de460634.png&amp;w=128&amp;q=75" />
              </div>
            </div>
            <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
              <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch font-['Balgin'] text-xl leading-[30px] font-bold text-center text-[#101828]">
                Still have questions?
              </p>
              <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-base leading-6 text-center text-[#475467]">
                Can’t find the answer you’re looking for? Please chat to our friendly team.
              </p>
            </div>
            <div className="box-border flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
              <div
                className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-[#7f56d9] border border-[#7f56d9]"
                style={{
                  boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)",
                }}
              >
                <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-white">
                  Get in touch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;