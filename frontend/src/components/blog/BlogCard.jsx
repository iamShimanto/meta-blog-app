import React from "react";
import { Link } from "react-router";

const BlogCard = ({ item }) => {
  return (
    <>
      <Link to={`/blogs/${item?._id}`}>
        <div className="p-4.25 shadow-md">
          <img
            src={item.image}
            alt="image"
            className="w-full h-60 hover:scale-105 duration-200 cursor-pointer"
          />
          <p className="text-brand px-3 py-1.5 bg-[rgba(75,107,251,0.05)] w-fit rounded-md mt-4">
            Technology
          </p>
          <h3 className="text-primary text-xl font-semibold leading-7 mt-3.5 mb-3">
            {item.title}
          </h3>
          <p className="text-secondary text-base font-normal sm:h-16">
            {item.description.substring(0, 130)}...
          </p>
          <div className="flex items-center gap-3 mt-4">
            <img src={item.author.image} alt="" />
            <div>
              <p className="text-sm font-normal text-[#4B5563] leading-5">
                {item.author.name}
              </p>
              <span className="text-xs font-normal text-[#9CA3AF] leading-4">
                {item.date}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
