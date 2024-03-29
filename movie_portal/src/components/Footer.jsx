import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="flex border-b-8 h-3 w-80 rounded-xl border-red-600"></div>
      <div className="flex w-full justify-around text-lg">
        <div className=" w-[300px] p-2 flex flex-col">
          <h1 className="font-bold text-center text-2xl mt-3">M O V I E S</h1>
          <p className="text-center m-7">
            Address: Floor 11 & 12, G Block BKC, Bandra Kurla Complex, Bandra
            East,New Mumbai, Maharashtra 400051
          </p>
          <div className="flex justify-around text-2xl">
            <i className="fa-brands fa-facebook hover:text-black hover:cursor-pointer"></i>
            <i className="fa-brands fa-square-instagram hover:text-black hover:cursor-pointer"></i>
            <i className="fa-brands fa-square-twitter hover:text-black hover:cursor-pointer"></i>
            <i className="fa-brands fa-linkedin hover:text-black hover:cursor-pointer"></i>
          </div>
        </div>
        <div className="flex flex-col w-[300px]  items-center justify-center   ">
          <h1 className="font-bold  hover:cursor-pointer">Quicks Links</h1>
          <ul className="flex flex-col">
            <li className=" hover:cursor-pointer">Movies</li>
            <li className=" hover:cursor-pointer">Web Series</li>
            <li className=" hover:cursor-pointer">Shows</li>
            <li className=" hover:cursor-pointer">Podcast</li>
          </ul>
        </div>

        <div className="flex flex-col w-[300px]  items-center justify-center   ">
          <h1 className="font-bold  hover:cursor-pointer">Trending</h1>
          <ul className="flex flex-col hover:cursor-pointer">
            <li className=" hover:cursor-pointer">Movie1</li>
            <li className=" hover:cursor-pointer">Movie2</li>
            <li className=" hover:cursor-pointer">Movie3</li>
            <li className=" hover:cursor-pointer">Movie4</li>
          </ul>
        </div>

        <div className="flex flex-col w-[300px]  items-center justify-center   ">
          <h1 className="font-bold hover:cursor-pointer">New Releases</h1>
          <ul className="flex flex-col hover:cursor-pointer">
            <li className=" hover:cursor-pointer">Movie1</li>
            <li className=" hover:cursor-pointer">Movie2</li>
            <li className=" hover:cursor-pointer">Movie3</li>
            <li className=" hover:cursor-pointer">Movie4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
