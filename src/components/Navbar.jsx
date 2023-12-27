import React, { useState } from "react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menus = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Project", link: "/" },
    { name: "Open Houses", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-screen z-10 bg-teal-950 fixed drop-shadow-lg">
      <div className="px-4 flex justify-between items-center h-[80px]">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-gray-100 sm:text-4xl p-2">BRAND.</h1>
        </div>
        <div className="md:hidden flex justify-end p-2">
          <Bars2Icon className="cursor-pointer h-6 w-6 text-gray-100" onClick={() => setOpen(!open)} />
        </div>
        <div className="hidden md:flex">
          <ul className="flex bg-teal-950 text-gray-100 items-center">
            {menus?.map((menu, i) => (
              <Link to={menu?.link} key={i} className="cursor-pointer hover:text-gray-500">
                <li className="py-2">{menu?.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className={`px-4 py-2 transition-all duration-1000 ease-in-out overflow-hidden ${open ? "opacity-100 max-h-screen" : "opacity-100 max-h-0"}`}>
        <ul className="flex flex-col bg-teal-950 text-gray-100 w-full md:hidden items-center">
          {menus?.map((menu, i) => (
            <Link to={menu?.link} key={i} className="cursor-pointer hover:text-gray-500">
              <li className="py-2">{menu?.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;