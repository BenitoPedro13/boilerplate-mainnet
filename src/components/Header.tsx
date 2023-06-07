import logo from '@/../public/logo.svg'
import menu from '@/../public/menu.svg'

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
          <div className="flex flex-row justify-center items-center p-2 gap-2 w-10 h-10 cursor-pointer">
            <div className="w-6 h-6 flex justify-center items-center">
              <Image src={menu} width={18} height={12} alt='Menu Open Icon'/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header