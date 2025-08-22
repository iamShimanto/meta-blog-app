import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="px-11.25 py-4.5 flex items-center justify-between shadow-2xl sticky top-0 bg-slate-50 z-50">
        <div className="flex items-center gap-1.5">
          <img src="images/logo.png" alt="logo" />
        </div>
        <div>
          <ul className="lg:flex items-center gap-7.5 lg:gap-5 xl:gap-7.5 uppercase text-base font-medium lg:font-normal xl:font-medium text-primary hidden">
            <li className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-brand" : "hover:text-primary"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "text-brand" : "hover:text-primary"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-brand" : "hover:text-primary"
                }
              >
                About
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-brand" : "hover:text-primary"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-1.5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-primary px-2 h-10 rounded-2xl focus:outline-brand duration-300"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer">
              <FaSearch className="text-brand text-xl" />
            </button>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="relative cursor-pointer w-20 h-10 rounded-full p-1 transition-colors duration-500 bg-gradient-to-r from-yellow-300 to-orange-400 dark:from-gray-700 dark:to-gray-900"
          >
            <div
              className={`w-8 h-8 rounded-full shadow-lg transform transition-transform duration-500 bg-white dark:bg-gray-800 flex items-center justify-center ${
                dark ? "translate-x-10" : "translate-x-0"
              }`}
            >
              {dark ? (
                <span className="text-yellow-400">🌙</span>
              ) : (
                <span className="text-yellow-500">☀️</span>
              )}
            </div>
          </button>
        </div>

        <div className="relative lg:hidden">
          <FaBarsStaggered
            className="text-3xl text-primary cursor-pointer"
            onClick={handleClick}
          />
          {show && (
            <ul className="flex flex-col items-center gap-7.5 lg:gap-5 xl:gap-7.5 uppercase text-base font-medium lg:font-normal xl:font-medium text-primary absolute right-0 top-15 bg-gray-600 w-60 py-10 rounded-xl">
              <li className="">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-brand" : "hover:text-primary"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "text-brand" : "hover:text-primary"
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-brand" : "hover:text-primary"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-brand" : "hover:text-primary"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <div className="flex items-center flex-col gap-3.5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-primary px-2 h-8  rounded-2xl focus:outline-brand duration-300"
                  />
                  <button className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer">
                    <FaSearch className="text-brand text-xl" />
                  </button>
                </div>
                <button
                  onClick={() => setDark(!dark)}
                  className="relative cursor-pointer w-20 h-10 rounded-full p-1 transition-colors duration-500 bg-gradient-to-r from-yellow-300 to-orange-400 dark:from-gray-700 dark:to-gray-900"
                >
                  <div
                    className={`w-8 h-8 rounded-full shadow-lg transform transition-transform duration-500 bg-white dark:bg-gray-800 flex items-center justify-center ${
                      dark ? "translate-x-10" : "translate-x-0"
                    }`}
                  >
                    {dark ? (
                      <span className="text-yellow-400">🌙</span>
                    ) : (
                      <span className="text-yellow-500">☀️</span>
                    )}
                  </div>
                </button>
              </div>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
