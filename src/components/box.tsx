import React from "react";

interface IBox {
  title: string; // Title of the box
  heading: string; // Heading of the box
  content: string; // Content of the box
  imageUrl: string; // Image URL
}

function Box(props: IBox) {
  return (
    <div className=" bgw-full shadow-lg flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 bg-[#E4E0E1] text-[#3B3030]">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-2xl font-semibold text-center">{props.title}</h2>
        <h3 className="text-lg font-light  text-center">{props.heading}</h3>
      </div>

      <div className="flex flex-row items-center"> {/* Added items-center for vertical alignment */}
        <div className="flex-1 p-4">
          <p className="">{props.content}</p>
        </div>
        <img
          src={props.imageUrl}
          alt={props.title}
          className="w-auto h-40 rounded-lg" // You can adjust height if needed
        />
      </div>
    </div>
  );
}

export default Box;
