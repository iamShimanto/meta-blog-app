import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="px-11.25 py-4.5 flex items-center justify-between shadow-2xl sticky top-0">
        <div className="flex items-center gap-1.5">
          <img src="images/logo.png" alt="logo" />
          <h3 className="text-white text-xl font-bold uppercase">Shimanto</h3>
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
        <div></div>

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
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
