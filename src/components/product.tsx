import React from "react";
import { GiFamilyHouse, GiMagicBroom } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import Cards from "./card"; // Import your Cards component

const Product = () => {
  // Example product data array
  const products = [
    {
      Icon: GiFamilyHouse,
      title: "Residential Cleaning",
      price: "Rp 500.000,00",
      description: [
        "High-quality cleaning services",
        "Experienced staff",
        "Safe and eco-friendly products",
      ],
    },
    {
      Icon: ImOffice,
      title: "Office & Commercial Cleaning",
      price: "Rp 500.000,00",
      description: [
        "Professional cleaning for businesses",
        "Custom schedules available",
        "Guaranteed satisfaction",
      ],
    },
    {
      Icon: GiMagicBroom,
      title: "Customized Cleaning",
      price: "Rp 500.000,00",
      description: [
        "Tailored cleaning services",
        "Flexible booking options",
        "Affordable pricing",
      ],
    },
  ];

  return (
    <div className="w-full py-[10rem] px-4 text-[#493628]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Cards
            key={index}
            Icon={product.Icon}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
