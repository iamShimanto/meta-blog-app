import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <>
      <section className="py-17">
        <div className="container">
          <div className="heading">
            <h1 className="text-center text-4xl font-semibold text-black leading-10">
              Meta Blog
            </h1>
            <div className="flex justify-center items-center gap-4 mt-3.5 mb-8">
              <Link
                to="/"
                className="px-2.5 py-1 bg-[rgba(75,107,251,0.1)] rounded-full text-base font-normal text-black hover:text-primary duration-300 leading-6"
              >
                Home
              </Link>
              <Link
                to="/newblog"
                className="px-2.5 py-1 bg-[rgba(75,107,251,0.1)] rounded-full text-base font-normal text-black hover:text-primary duration-300 leading-6"
              >
                Add New Blog
              </Link>
              <Link
                to="/manageblog"
                className="px-2.5 py-1 bg-[rgba(75,107,251,0.1)] rounded-full text-base font-normal text-black hover:text-primary duration-300 leading-6"
              >
                Manage Blog
              </Link>
            </div>
          </div>
          <div className="bg-[url(images/banner.png)] bg-no-repeat bg-cover pl-5 pb-5 pt-30 sm:pt-65">
            <h3 className="bg-brand px-7 py-1.5 text-white leading-6 w-fit rounded-md">
              Technology
            </h3>
            <h2 className="text-white max-w-[600px] text-xl sm:text-3xl font-semibold leading-9 pt-3 pb-5">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h2>
            <div className="flex items-center gap-3.5">
              <img src="images/author.png" alt="author" />
              <p className="text-white text-base leading-6 font-normal">Tracey Wilson</p>
              <p className="text-white text-base leading-6 font-normal">August 20, 2024</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
