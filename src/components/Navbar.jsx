import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // cleanup
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`w-screen z-10 fixed drop-shadow-lg ${scrolled ? "bg-teal-950" : "bg-transparent"}`}>
      <div className="px-4 flex justify-between items-center h-[80px]">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-gray-100 p-2">BRAND.</h1>
        </div>
        <div className="md:hidden flex justify-end p-2">
          <Bars2Icon className="cursor-pointer h-6 w-6 text-gray-100" onClick={() => setOpen(!open)} />
        </div>
        <div className="hidden md:flex">
          <ul className={`flex text-gray-100 items-center ${scrolled ? "bg-teal-950" : "bg-transparent"}`}>
            {menus?.map((menu, i) => (
              <Link to={menu?.link} key={i} className="cursor-pointer hover:text-gray-500">
                <li className="py-2">{menu?.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${open ? "opacity-100 max-h-screen" : "opacity-100 max-h-0"}`}>
        <ul className={`flex flex-col text-gray-100 w-full md:hidden items-center ${scrolled ? "bg-teal-950" : "bg-transparent"}`}>
          {menus?.map((menu, i) => (
            <Link to={menu?.link} key={i} className="cursor-pointer hover:text-gray-500 w-full">
              <li className="ml-3 mr-3 border-b-2 border-teal-900">{menu?.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
