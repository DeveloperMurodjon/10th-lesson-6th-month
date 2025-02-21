import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log("local", location);

  return (
    <header>
      <div className="bg-blue-950">
        <div className="container mx-auto  flex justify-end py-3 gap-3  text-white ">
          <Link to="/login">Sign in/Guest</Link>
          <Link to="/register">Create account</Link>
        </div>
      </div>
      {/* navbar */}
      <div className="bg-blue-100 py-7">
        <div className="container mx-auto flex items-center justify-between  ">
          <div className="logo">
            <Link
              className="px-4 py-3 bg-blue-600 text-2xl rounded-md hover:bg-blue-700 text-white font-bold"
              to="/"
            >
              C
            </Link>
          </div>
          <nav>
            <ul className=" flex items-center gap-4 text-blue-950">
              <li>
                <NavLink
                  className={`${
                    location.pathname == "/" ? "bg-black text-white" : ""
                  } text-lg hover:bg-gray-300 py-2 px-3 rounded-md `}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${
                    location.pathname.includes("/about")
                      ? "bg-black text-white"
                      : ""
                  } text-lg hover:bg-gray-300 py-2 px-3 rounded-md `}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${
                    location.pathname.includes("/products")
                      ? "bg-black text-white"
                      : ""
                  } text-lg hover:bg-gray-300 py-2 px-3 rounded-md `}
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${
                    location.pathname.includes("/cart")
                      ? "bg-black text-white"
                      : ""
                  } text-lg hover:bg-gray-300 py-2 px-3 rounded-md `}
                  to="/cart"
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </nav>
          <p>10</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
