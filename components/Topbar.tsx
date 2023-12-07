import React from "react";

const Topbar = () => {
  return (
    <nav className='w-full bg-[#162329] text-white py-2 shadow-md'>
      <div className='max-w-7xl mx-auto px-4 flex justify-end'>
        <a href="/mi-cuenta" className="hover:underline">MI CUENTA</a>
        <span className='mx-3'>|</span>
        <a href="/contactanos" className="hover:underline">CONTÁCTANOS</a>
      </div>
    </nav>
  );
};

export default Topbar;