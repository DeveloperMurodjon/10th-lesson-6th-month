import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import CustomizedBadges from "./Badge";

function Header() {
  const location = useLocation();
  console.log("local", location);

  return (
    <header>
      <div className="bg-[#021431]">
        <div className="container max-w-[1090px] mx-auto  flex justify-end py-1 gap-3  text-white ">
          <Link to="/login">Sign in/Guest</Link>
          <Link to="/register">Create account</Link>
        </div>
      </div>
      {/* navbar */}
      <div className="bg-blue-50 py-4">
        <div className="container max-w-[1090px] mx-auto flex items-center justify-between  ">
          <div className="logo">
            <Link
              className="px-5 py-2   bg-blue-500 text-2xl rounded-md hover:bg-blue-700 text-white font-bold"
              to="/"
            >
              C
            </Link>
          </div>
          <nav>
            <ul className=" flex items-center gap-4 text-blue-950">
              <li>
                <NavLink
                  className={`${location.pathname == "/" ? "bg-[#021431] text-white" : ""
                    } text-lg hover:bg-gray-300 py-2 px-3 rounded-md `}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${location.pathname.includes("/about")
                    ? "bg-[#021431] text-white"
                    : ""
                    } text-lg hover:bg-gray-300 py-2 px-3 rounded-md `}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${location.pathname.includes("/products")
                    ? "bg-[#021431] text-white"
                    : ""
                    } text-lg hover:bg-gray-300 py-2 px-3 rounded-md `}
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${location.pathname.includes("/cart")
                    ? "bg-[#021431] text-white"
                    : ""
                    } text-lg hover:bg-gray-300 py-2 px-3 rounded-md `}
                  to="/cart"
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </nav>
          <CustomizedBadges />
        </div>
      </div>
    </header>
  );
}

export default Header;
