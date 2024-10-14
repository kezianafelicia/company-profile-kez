import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../public/picture/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full top-0 left-0 z-50 text-[#E4E0E1] bg-[#33251c]">

      <div className="flex justify-between items-center h-20 font-bold max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-2">
        <img className="w-[150px]" src={logo} alt="logo"/>
        </div>
        <ul className="hidden md:flex">
          <li className="p-4">
          <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            <Link to="/service">Service</Link>
          </li>
          <li className="p-4">
          <Link to="/teamsprofile">Teams</Link>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#E4E0E1] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#493628] m-4">Kinclong</h1>
        <li className="p-4 border-b border-gray-900">
        <Link to="/">Home</Link>
        </li>
        <li className="p-4 border-b border-gray-900">
        <Link to="/about">About</Link>
        </li>
        <li className="p-4 border-b border-gray-900">
        <Link to="/service">Service</Link>
        </li>
        <li className="p-4 border-b border-gray-900">
        <Link to="/teamsprofile">Teams</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
