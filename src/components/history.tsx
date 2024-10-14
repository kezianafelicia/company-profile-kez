import React from "react";
import cleaner from "../../public/picture/cleaner.jpg";

const History = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] rounded-xl mx-auto my-4" src={cleaner} alt="cleaner"/>
        <div className="flex flex-col justify-center">
          <p className="text-[#AB886D] font-bold">About Us</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#493628]">Who We Are</h1>
          <p> At [Your Company Name], we are more than just a cleaning service—we are a team of professionals driven by the belief that clean, healthy environments are essential for living and working well. Founded with a mission to deliver exceptional cleaning solutions, we take pride in offering personalized services that cater to both residential and commercial clients. Every space we clean is treated with care, precision, and a commitment to excellence. We’ve earned the trust of countless satisfied customers through our reliability, attention to detail, and consistent high-quality results.
</p>
        </div>

      </div>

    </div>
  )
}

export default History;
