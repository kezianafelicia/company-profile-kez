import React from "react";
import {  GiWindowBars, GiVacuumCleaner } from "react-icons/gi";
import { ImTree } from "react-icons/im";
import Cards from "./card"; // Import your Cards component

const Addproduct = () => {
  const addproducts = [
    {
      Icon: GiWindowBars,
      title: "Window Cleaning",
      price: "Rp 350.000,00",
      description: [
        "Crystal-clear window cleaning",
        "Interior & exterior options",
        "Safe cleaning methods",
      ],
    },
    {
      Icon: GiVacuumCleaner,
      title: "Carpet & Upholstery Cleaning",
      price: "Rp 600.000,00",
      description: [
        "Deep cleaning for carpets and sofas",
        "Eliminates dust mites and allergens",
        "Safe for delicate fabrics",
      ],
    },
    {
      Icon: ImTree,
      title: "Post-Construction Cleaning",
      price: "Rp 800.000,00",
      description: [
        "Thorough cleaning after renovation",
        "Removes debris and dust",
        "Specialized tools for hard-to-reach areas",
      ],
    },
  ];

  return (
    <div className="w-full py-[10rem] px-4 text-[#493628]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {addproducts.map((addproduct, index) => (
          <Cards
            key={index}
            Icon={addproduct.Icon}
            title={addproduct.title}
            price={addproduct.price}
            description={addproduct.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Addproduct;
