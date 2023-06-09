import logo from '@/../public/logo.svg'
import menu from '@/../public/menu.svg'
import avatar from '@/../public/Avatar.png'

import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white h-[72px] border-b border-gray-100 shadow-header">
      <div className="flex flex-col justify-center items-center p-0 absolute h-[72px] left-0 right-0 top-0">
        <div className="flex flex-row justify-between items-center pr-3 pl-4 h-10 w-[100%]">
          <div className="flex flex-row items-start p-0 h-8 w-auto cursor-pointer">
            <div className="h-8 w-auto">
              <Link href='/'>
                <Image src={logo} width={88} height={undefined} alt='Logo'/>
              </Link>
            </div>
          </div>
          <div className="hidden box-border justify-start items-center flex-grow flex-shrink-0 gap-8 lg:flex w-max lg:pl-10">
                <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                  <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Inter'] text-base leading-6 font-semibold text-left text-[#475467]">
                    Home
                  </p>
                </div>
                <div className="box-border flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 py-1">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Inter'] text-base leading-6 font-semibold text-left text-[#475467]">
                      Products
                    </p>
                    {/* <ChevronDown /> */}
                  </div>
                </div>
                <div className="box-border flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 py-1">
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Inter'] text-base leading-6 font-semibold text-left text-[#475467]">
                      Resources
                    </p>
                    {/* <ChevronDown /> */}
                  </div>
                </div>
                <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                  <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Inter'] text-base leading-6 font-semibold text-left text-[#475467]">
                    Pricing
                  </p>
                </div>
          </div>
          <div className="flex flex-row justify-center items-center p-2 gap-2 w-10 h-10 cursor-pointer lg:p-0">
            <div className="w-fit h-fit flex justify-center items-center">
              <Image src={menu} width={18} height={12} alt='Menu Open Icon' className='lg:hidden'/>
              <Image src={avatar} width={30} height={40} alt='Avatar' className='hidden lg:block'/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header