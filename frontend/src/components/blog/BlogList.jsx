import React, { useEffect, useState } from "react";

const BlogList = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogData(data));
  }, []);
  console.log(blogData);
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {blogData.map((item) => (
              <div key={item._id} className="p-4.25 shadow-md">
                <img src={item.image} alt="image" className="w-full h-60" />
                <p className="text-brand px-3 py-1.5 bg-[rgba(75,107,251,0.05)] w-fit rounded-md mt-4">
                  Technology
                </p>
                <h3 className="text-primary text-xl font-semibold leading-7 mt-3.5 mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary text-base font-normal leading-6">
                  {item.description}
                </p>
                <div className="flex items-center gap-3">
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
