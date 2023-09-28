import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="p-4 bg-blue-500">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo or Site Name on the Left */}
        <Link to={"/"} className="text-2xl font-semibold text-white">
          Your Logo
        </Link>

        {/* Menu Items on the Right */}
        <div className="space-x-4">
          <Link
            to={"/"}
            className="text-white transition duration-300 ease-in-out hover:text-blue-300"
          >
            Home
          </Link>
          <Link
            to={"/login"}
            className="text-white transition duration-300 ease-in-out hover:text-blue-300"
          >
            Login
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
