import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComponent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="w-full flex flex-row justify-around items-center bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900 py-5">
        <div className="flex items-center">
          <img
            className="w-14 h-1w-14 mr-2"
            src="https://cdn-icons-png.flaticon.com/128/1038/1038100.png"
            alt=""
          />
          <h1 className="text-2xl  font-bold ">M O V I E S</h1>
        </div>

        <div className="flex flex-row font-mono items-center font-bold">
          <span className="mx-5 h-8 text-xl hover:border-b-4 hover:border-black hover:cursor-pointer ">
            Movies
          </span>
          <span className="mx-5 h-8 text-xl hover:border-b-4 hover:border-black hover:cursor-pointer">
            Shows
          </span>
          <span className="mx-5 h-8 text-xl hover:border-b-4 hover:border-black hover:cursor-pointer">
            Tickets
          </span>
          <span className="mx-5 h-8 text-xl hover:border-b-4 hover:border-black hover:cursor-pointer">
            Favourite
          </span>
          <span className="mx-5 h-8 text-xl hover:border-b-4 hover:border-black hover:cursor-pointer">
            Trending
          </span>
        </div>
        <div className="bg-white h-10 flex items-center justify-center rounded-sm font-bold font-mono text-black w-20 hover:text-white hover:bg-black">
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
