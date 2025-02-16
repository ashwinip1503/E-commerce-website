import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar"

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left - Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/men"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            MEN
          </Link>
          <Link
            to="/women"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            WOMEN
          </Link>
          <Link
            to="/top-wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            TOP WEAR
          </Link>
          <Link
            to="/bottom-wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            BOTTOM WEAR
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          {/* Shopping Bag Icon */}
          <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 right-0 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>

          {/* Search Bar Component */}
          <div className="overflow-hidden">
          <SearchBar />
          </div>
          

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
