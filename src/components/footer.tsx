import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  const services = [
    "Residential Cleaning",
    "Office & Commercial Cleaning",
    "Customized Cleaning"
  ];

  return (
    <div className="max-w-[1240px] mx-auto py-6 px-2 grid lg:grid-cols-3 gap-8 bg-[#33251c] text-[#E4E0E1]">
      {/* Services Section */}
      <div>
        <h1 className="w-full text-2xl font-bold text-[#E4E0E1]">Our Services</h1>
        <ul className="font-medium text-[#E4E0E1] mt-4">
          {services.map((service, index) => (
            <li key={index} className="py-2 text-sm">{service}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="w-full text-2xl font-bold text-[#E4E0E1]">Connect With Us</h1>
        <div className="flex flex-col items-start mt-4">
          <div className="flex items-center my-2">
            <FaFacebookSquare size={20} className="cursor-pointer" />
            <span className="ml-2">Facebook</span>
          </div>
          <div className="flex items-center my-2">
            <FaInstagram size={20} className="cursor-pointer" />
            <span className="ml-2">Instagram</span>
          </div>
          <div className="flex items-center my-2">
            <FaTwitterSquare size={20} className="cursor-pointer" />
            <span className="ml-2">Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
