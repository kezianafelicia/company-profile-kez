import React from "react";
import home from "../../public/picture/home.jpeg";

const Hero =() => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat mt-32" style={{ backgroundImage: `url(${home})` }}>
      <div className="max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="text-[#493628] md:text-7xl sm:text-6xl text-5xl font-extrabold md:py-6">Spotless Results Every Time</h1>
        <p className="md:text-4xl sm:text-3xl text-xl font-bold pl-2 py-4 text-[#AB886D]">HIGHLY PROFESSIONAL CLEANING</p>
        <p className="md:text-xl md:pl-4 text-l font-bold">
         We are committed to delivering professional cleaning services that make your home and workplace sparkle
         </p>
         <p className="md:text-xl md:pl-4 text-l font-bold">
          Let us take care of the mess so you can focus on what matters most
        </p>
        <button className="bg-[#493628] w-[200px] rounded-md font-medium my-6 mx-auto text-[#E4E0E1] py-3">Book Now</button>
      </div>
    </div>

  )
}

export default Hero;
