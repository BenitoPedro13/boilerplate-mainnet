import Image from "next/image"

import { Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });


import companyLogo6 from '@/../public/company-logo-6.svg'
import testimonialAvatar from '@/../public/testimonial-avatar.png'

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center py-16 gap-16 w-full h-fit bg-gray-50 lg:py-24">
      <div className="flex flex-col items-start px-4 gap-8 w-full h-fit lg:px-8 lg:gap-8 max-w-7xl">
        <div className="flex flex-col items-center p-0 gap-10 w-full h-fit">
          <div className="flex flex-col items-center gap-8 w-full h-fit">
            <Image src={companyLogo6} width={undefined} height={40} alt="Company Logo"/>
            <h3 className="w-full h-fit font-medium text-3xl leading-[38px] text-center text-gray-900 lg:text-5xl lg:leading-[60px] ">
              We’ve been using Untitled to kick start every new project and can’t imagine working without it.
            </h3>
            <div className="flex flex-col items-center gap-4 w-full h-fit">
              <Image src={testimonialAvatar} width={64} height={64} alt="Testimonial Avatar" />
              <div className="flex flex-col items-start gap-1 w-full h-fit">
                <p className={`${jakarta.className} font-semibold text-lg text-center text-gray-900 w-full h-fit`}>Candice Wu</p>
                <p className="font-normal text-base text-center text-gray-600 w-full h-fit">Product Manager, Sisyphus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials