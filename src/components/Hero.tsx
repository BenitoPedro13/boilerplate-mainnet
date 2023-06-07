import heroMobileImage from '@/../public/hero-mobile-image.png'
import playCircle from '@/../public/PlayCircle.svg'
import style from '@/style/hero.module.css'
import Image from "next/image"

const Hero = () => {
  return (
    <section className='flex flex-col items-center p-0 isolate w-full h-[848px] bg-white'>
      <div className="flex flex-col items-start pt-16 pb-16 gap-16 w-full">
        <div className="flex flex-row items-start pl-4 pr-4 w-full h-[416px]">
          <div className="flex flex-col items-start p-0 gap-8 w-full h-full">
            <div className="flex flex-col items-start p-0 gap-4 w-full h-[276px]">
              <div className="w-full h-[176px]">
                <h1 className="h-full font-medium text-4xl leading-[44px] text-gray-900 tracking-[-0.02em]">
                  We design digital <span className={style.underlineBg}>experiences</span> that create more happy in the world
                </h1>
              </div>
              <p className='w-full h-[84px] font-normal text-lg text-gray-600'>— We’re a full-service design and development agency who specialise in simple, useful and beautiful solutions.</p>
            </div>
            <div className="flex flex-col items-start p-0 gap-3 w-full h-[108px]">
              <button className='box-border flex flex-row justify-center items-center py-3 px-5 gap-2 w-full h-fit bg-primary-600 border border-primary-600 rounded-lg shadow-xs'>
                <p className='h-6 font-semibold text-base text-white'>Get in touch</p>
              </button>
              <button className='box-border flex flex-row justify-center items-center py-3 px-5 gap-2 w-full h-fit bg-white border border-gray-300 rounded-lg shadow-xs'>
                <div className="h-5 w-5">
                  <Image src={playCircle} width={20} height={20} alt='Play Icon'/>
                </div>
                <p className='h-6 font-semibold text-base text-gray-700'>Showreel</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start pl-4 pr-4 w-full h-[240px]">
          <div className="w-full h-full">
            <Image src={heroMobileImage} width={343} height={240} alt="Hero Ilustrative Image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero