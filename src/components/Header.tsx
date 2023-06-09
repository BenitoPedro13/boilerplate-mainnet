import logo from "@/../public/logo.svg";
import menu from "@/../public/menu.svg";
import avatar from "@/../public/Avatar.png";
import chevronDown from "@/../public/chevron-down.svg"

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white h-[72px] border-b border-gray-100 shadow-header lg:h-20">
      <div className="flex flex-col justify-center items-center p-0 absolute h-[72px] left-0 right-0 top-0 lg:h-20">
        <div className="flex flex-row justify-between items-center pr-3 pl-4 h-10 w-[100%] max-w-7xl lg:px-8">
          <div className="flex flex-row items-center gap-10 lg:gap-[94px]">
            <div className="flex flex-row items-start p-0 h-8 w-auto cursor-pointer">
              <div className="h-8 w-auto">
                <Link href="/">
                  <Image src={logo} width={88} height={undefined} alt="Logo" />
                </Link>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-8 w-fit h-8">
              <button className="flex justify-center items-center gap-2 w-fit h-fit">
                <p className="text-base font-semibold text-gray-600">Home</p>
              </button>
              <div className="flex flex-col items-center py-1 w-fit h-fit">
                <button className="flex justify-center items-center gap-2 w-fit h-fit">
                  <p className="text-base font-semibold text-gray-600">Products</p>
                  <Image src={chevronDown} alt="Chevron Down Icon" width={20} height={20} />
                </button>
              </div>
              <div className="flex flex-col items-center py-1 w-fit h-fit">
                <button className="flex justify-center items-center gap-2 w-fit h-fit">
                  <p className="text-base font-semibold text-gray-600">Resources</p>
                  <Image src={chevronDown} alt="Chevron Down Icon" width={20} height={20} />
                </button>
              </div>
              <button className="flex justify-center items-center gap-2 w-fit h-fit">
                <p className="text-base font-semibold text-gray-600">Pricing</p>
              </button>
            </nav>
          </div>
          <div className="flex flex-row justify-center items-center p-2 gap-2 w-10 h-10 cursor-pointer lg:p-0 lg:flex-col">
            <div className="w-fit h-fit flex justify-center items-center">
              <Image
                src={menu}
                width={18}
                height={12}
                alt="Menu Open Icon"
                className="lg:hidden"
              />
              <Image
                src={avatar}
                width={40}
                height={40}
                alt="Avatar"
                className="hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
