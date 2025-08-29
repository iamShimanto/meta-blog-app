import React, { useContext, useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import IsLoading from "../loading/IsLoading";
import { BlogContext } from "../../context/BlogContext";

const BlogList = () => {
  const [blogData, setBlogData] = useState([]);
  const [showBlogs, setShowBlogs] = useState(6);
  // const [searchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { searchTerm, setsearchTerm } = useContext(BlogContext);

  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get(
          "https://meta-blog-backend-weld.vercel.app/blogs"
        );
        const data = res.data.blog;
        setBlogData(data);
        setIsLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const filterBlogs = blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMoreBlog = () => {
    setShowBlogs(showBlogs + 3);
  };

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <>
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {filterBlogs.slice(0, showBlogs).map((item) => (
              <BlogCard key={item._id} item={item} />
            ))}
          </div>
          {showBlogs < filterBlogs.length && (
            <button
              onClick={handleMoreBlog}
              className="px-4 py-2 bg-brand rounded-lg text-lg font-semibold bg-black text-white cursor-pointer hover:bg-brand/80 duration-300 my-5 w-fit flex justify-center mx-auto"
            >
              Show More
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogList;
