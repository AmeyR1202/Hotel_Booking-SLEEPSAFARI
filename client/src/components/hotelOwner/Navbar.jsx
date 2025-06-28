import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
      <Link to="/">
        <h1 className="text-3xl md:text-4xl font-bold">SleepSafari</h1>
      </Link>
      <UserButton />
    </div>
  );
};

export default Navbar;
