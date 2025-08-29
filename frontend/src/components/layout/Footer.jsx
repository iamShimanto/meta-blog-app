import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#E8E8EA] py-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-primary leading-7 mb-4.5">
                About Us
              </h3>
              <p className="text-secondary leading-6 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <p className="text-primary leading-6">
                <span className="font-bold">Email:</span> info@meta.net
              </p>
              <p className="text-primary leading-6">
                <span className="font-bold">Phone:</span> 880 123 456 789
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary leading-7 mb-4.5">
                Quick Link
              </h3>
              <div className="flex flex-col gap-3.25">
                <Link
                  to="/"
                  className="text-primary leading-6 hover:text-brand duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/"
                  className="text-primary leading-6 hover:text-brand duration-300"
                >
                  About
                </Link>
                <Link
                  to="/"
                  className="text-primary leading-6 hover:text-brand duration-300"
                >
                  Blog
                </Link>
                <Link
                  to="/"
                  className="text-primary leading-6 hover:text-brand duration-300"
                >
                  Author
                </Link>
                <Link
                  to="/"
                  className="text-primary leading-6 hover:text-brand duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary leading-7 mb-4.5">
                Category
              </h3>
              <div className="flex flex-col gap-3.25">
                <Link
                  to="/"
                  className="text-primary leading-6 hover:text-brand duration-300"
                >
                  Lifestyle
                </Link>
                <Link
                  to="/"
                  className="text-primary leading-6 hover:text-brand duration-300"
                >
                  Technology
                </Link>
                <Link
                  to="/"
                  className="text-primary leading-6 hover:text-brand duration-300"
                >
                  Travel
                </Link>
                <Link
                  to="/"
                  className="text-primary leading-6 hover:text-brand duration-300"
                >
                  Business
                </Link>
                <Link
                  to="/"
                  className="text-primary leading-6 hover:text-brand duration-300"
                >
                  Economy
                </Link>
              </div>
            </div>
            <div className="bg-white text-center py-6 px-4">
              <h3 className="text-lg font-semibold text-primary leading-7 mb-4.5">
                Weekly Newsletter
              </h3>
              <p className="text-base font-normal text-secondary tracking-wider">
                Get blog articles and offers via email
              </p>
              <input
                type="email"
                placeholder="Your Email"
                className="block bg-[#F3F4F6] h-10 w-full px-5 rounded-md outline-none"
              />
              <button className="text-center w-full py-2.5 bg-brand mt-2 rounded-lg text-white font-medium cursor-pointer hover:bg-brand/80 duration-300">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
