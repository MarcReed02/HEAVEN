import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CgSearch } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 shadow-md w-full relative z-20">
      <div className="flex items-center space-x-4 font-semibold pl-8">
        <a href="/productos" className="text-gray-700 hover:text-gray-900 text-md uppercase tracking-widest">PRODUCTOS</a>
        <a href="/ofertas" className="text-gray-700 hover:text-gray-900 text-md uppercase tracking-widest">OFERTAS</a>
      </div>
      <div className="flex-grow text-center">
        <a href="/" className="text-4xl font-normal tracking-[.75em]">HEAVEN</a>
      </div>
      <div className="flex items-center space-x-6 pr-8">
        <AiOutlineUser size="30" />
        <CgSearch size="30" />
        <RiShoppingCartLine size="30" />
      </div>
    </nav>
  );
};

export default Navbar;