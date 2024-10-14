import React from "react";
import Box from "./box";


const Testimonial = () => {
  const testimonial = [
    {
      imageUrl: "../public/picture/rachel.jpg",
      title: "Rachel Venya",
      heading: "aaaaaa",
      content:
        "I’m so impressed with the service! The staff was professional and friendly, and my office has never looked better. I will definitely use them again!",
    },
    {
      imageUrl: "../public/picture/niscap.jpg",
      title: "Nicholas Saputra",
      heading: "aaaaaa",
      content:
        "I've tried several cleaning services, but Kinclong is by far the best. They pay attention to every detail, and I love that they use eco-friendly products!",
    },
    {
      imageUrl: "../public/picture/igun.jpg",
      title: "Ivan Gunawan",
      heading: "aaaaaa",
      content:
        "The team from Kinclong did an incredible job on my home. They were thorough, efficient, and left everything sparkling clean. Highly recommended!",
    },
  ];

  return (
    <div className="w-full py-[10rem] px-4 bg-white text-[#493628]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {testimonial.map((testimonial, index) => (
          <Box
            key={index}
            imageUrl={testimonial.imageUrl}
            title={testimonial.title}
            heading={testimonial.heading}
            content={testimonial.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
