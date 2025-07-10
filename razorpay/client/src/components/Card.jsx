import React from "react";

const Card = ({ amount, image, chackoutHandler }) => {
  return (
    <div className="text-center m-auto w-[300px] h-[300px] bg-[#1E3E62] p-4 rounded-md shadow-lg">
      <img
        className="pb-3 w-full h-[200px] object-cover rounded-md"
        src={image}
        alt="product"
      />
      <p className="font-semibold text-lg mb-2 text-white">Price: {amount}</p>
      <button
        className="p-2 bg-[#1E3E62] hover:bg-[#1C354B] font-bold text-white rounded-md"
        onClick={() => chackoutHandler(amount)}
      >
        Buy Now
      </button>
    </div>
  );
};




export default Card;
