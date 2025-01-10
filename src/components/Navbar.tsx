import { SlBell } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

import { navbarMenuItems } from "../constants/navbar-menu-items";

const Navbar = () => {
  return (
    <nav className="bg-[#303947] flex justify-center items-center gap-x-20 h-[9vh]">
      <div className="flex gap-x-1.5 items-center">
        <img src="/logo.png" alt="Firstbench" className="w-[40px]" />
        <p className="text-xl text-white font-semibold">Firstbench</p>
      </div>

      <ul className="flex gap-x-8 items-center">
        {navbarMenuItems.map((item) => {
          return (
            <li
              className={`${
                item.title === "Mock Test"
                  ? "text-[#48b8b6]"
                  : "text-gray-300 group-hover:text-[#48b8b6]"
              } flex gap-x-1.5 items-center cursor-pointer group delay-100 transition-all`}
              key={item.title}
            >
              <item.Icon
                size={18}
                className={`${
                  item.title === "Mock Test"
                    ? "text-[#48b8b6]"
                    : "text-gray-300 group-hover:text-[#48b8b6]"
                } delay-100 transition-all`}
              />
              {item.title}
            </li>
          );
        })}
      </ul>

      <div className="flex gap-x-8 items-center">
        <SlBell color="white" size={20} />
        <div className="bg-[#1c2733] py-1 px-2 rounded-lg flex gap-x-2 items-center">
          <div className="bg-[#f9c2b2] px-3 py-1 rounded-lg text-[#7d5950] font-bold">
            P
          </div>
          <p className="text-gray-300">Profile</p>
          <IoIosArrowDown className="text-gray-300" size={18} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
