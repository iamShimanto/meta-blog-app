import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import IsLoading from "../loading/IsLoading";

const BlogList = () => {
  const [blogData, setBlogData] = useState([]);
  const [showBlogs, setShowBlogs] = useState(6);
  const [searchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        const res = await axios.get("http://localhost:5000/blogs");
        const data = res.data.blog;
        setBlogData(data);
      })();
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
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

  return (
    <>
      <section>
        <div className="container">
          {isLoading && <IsLoading />}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {filterBlogs.slice(0, showBlogs).map((item) => (
              <BlogCard key={item._id} item={item} />
            ))}
          </div>
          {showBlogs < filterBlogs.length && (
            <button onClick={handleMoreBlog} className="px-4 py-2 bg-brand rounded-lg text-lg font-semibold text-white cursor-pointer hover:bg-brand/80 duration-300 my-5 w-fit flex justify-center mx-auto">Show More</button>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogList;
