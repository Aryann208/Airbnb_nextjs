import Image from "next/image";
import {
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Logo from "../public/airbnb.svg";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md  py-5 px-5 md:px-10 ">
      {/* Left */}
      <div className=" relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src={Logo}
          alt="Picture of the author"
          style={{
            layout: "fill",
            objectFit: "contain",
            objectPosition: "left",
          }}
          width={120}
        />
      </div>

      {/* Center */}

      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm ">
        <input
          className=" flex-grow pl-5 bg-transparent outline-none  text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className=" hidden md:inline-flex  h-8 bg-red-400 text-white rounded-full p-2 md:mx-3" />
      </div>

      {/* Left */}

      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer ">Become a Host </p>
        <GlobeAltIcon className="h-6 curser-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
