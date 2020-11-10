import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="flex-1 flex flex-row-reverse items-center justify-center sm:items-stretch sm:justify-start px-8 py-4">
        <div className="flex">
          <Link
            to="/"
            className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Dice Roller
          </Link>
          <Link
            to="/inventory"
            className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Inventory
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
