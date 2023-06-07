import Image from "next/image"

import companyLogo1 from '@/../public/company-logo-1.svg'
import companyLogo2 from '@/../public/company-logo-2.svg'
import companyLogo3 from '@/../public/company-logo-3.svg'
import companyLogo4 from '@/../public/company-logo-4.svg'
import companyLogo5 from '@/../public/company-logo-5.svg'
import companyLogo from '@/../public/company-logo.svg'

const SocialProof = () => {
  return (
    <section className="flex flex-row justify-center items-start pb-16 w-full h-fit bg-white">
      <div className="flex flex-col items-start px-4 gap-8 w-full h-fit">
        <p className="font-medium text-base text-center text-gray-600 w-full">
          Join 4,000+ companies already growing
        </p>
        <div className="flex flex-col items-start p-0 gap-4 w-full h-fit">
          <div className="flex flex-row justify-center items-center p-0 gap-8 w-full h-fit">
            <div className="w-fit h-fit">
              <Image src={companyLogo} height={36} width={undefined} alt="Company Logo"/>
            </div>
            <div className="w-fit h-fit">
              <Image src={companyLogo1} height={36} width={undefined} alt="Company Logo"/>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center p-0 gap-8 w-full h-fit">
            <div className="w-fit h-fit">
              <Image src={companyLogo2} height={36} width={undefined} alt="Company Logo"/>
            </div>
            <div className="w-fit h-fit">
              <Image src={companyLogo3} height={36} width={undefined} alt="Company Logo"/>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center p-0 gap-8 w-full h-fit">
            <div className="w-fit h-fit">
              <Image src={companyLogo4} height={36} width={undefined} alt="Company Logo"/>
            </div>
            <div className="w-fit h-fit">
              <Image src={companyLogo5} height={36} width={undefined} alt="Company Logo"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof