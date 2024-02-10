import React from "react";

const Cart = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black w-60 mb-12 mx-2 flex flex-col rounded-lg overflow-hidden ">
        <img className="w-auto h-w-40" src={data.Poster} alt="" />
        <div className="m-4">
          <p className="text-center font-mono text-2xl">{data.Title}</p>
          <p className="text-center font-mono text-2xl">Type: {data.Type}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
