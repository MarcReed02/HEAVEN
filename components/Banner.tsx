import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-white h-96 flex justify-between items-center text-[#162329] w-full overflow-hidden">
      <div className="pl-8">
        <h1 className="text-8xl font-black leading-tight">
          COMPRA <span className="text-[#3AAFA9]">VERDE</span><br />VIVE MEJOR
        </h1>
        <div className="flex mt-4">
          <button className="bg-[#3AAFA9] text-white py-2 px-4 rounded-l-lg text-2xl">VER MÁS</button>
          <button className="bg-[#162329] text-white py-2 px-4 rounded-r-lg text-2xl">COMPRAR</button>
        </div>
      </div>

      <div className="pr-8">
        <img src="/Image.png" alt="Imagen decorativa" className="w-auto h-3/4" />
      </div>
    </div>
  );
};

export default Banner;