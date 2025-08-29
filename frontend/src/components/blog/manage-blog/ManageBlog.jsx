import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import IsLoading from "../../loading/IsLoading";

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get(
          "https://meta-blog-backend-weld.vercel.app/blogs"
        );
        const data = await res.data.blog;
        setBlogs(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `https://meta-blog-backend-weld.vercel.app/blogs/${id}`
    );
    const result = await res.data;
    console.log(result);
    toast.success("Blog deleted successfully");
    setTimeout(() => {
      navigate("/blogs");
    }, 2000);
  };

  return (
    <section className="container max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-2xl font-bold mb-6">Manage Your Blogs</h2>
      <div>
        {blogs.length > 0 ? (
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr className="bg-gray-600">
                <th className="p-4 border-b border-slate-600 ">
                  <p className="text-sm font-normal leading-none ">Title</p>
                </th>
                <th className="p-4 border-b border-slate-600 ">
                  <p className="text-sm font-normal leading-none ">Author</p>
                </th>
                <th className="p-4 border-b border-slate-600 ">
                  <p className="text-sm font-normal leading-none">Date</p>
                </th>
                <th className="p-4 border-b border-slate-600 b">
                  <p className="text-sm font-normal leading-none ">Actions</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={index} className="">
                  <td className="p-4 border-b border-slate-700">
                    <p className="text-sm  font-semibold">
                      <span>{index + 1}. </span> {blog.title}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-700">
                    <p className="text-sm ">{blog.author.name}</p>
                  </td>
                  <td className="p-4 border-b border-slate-700">
                    <p className="text-sm ">
                      {blog?.date ? (
                        <span>{new Date(blog.date).toLocaleDateString()}</span>
                      ) : (
                        <span>
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                      )}
                    </p>
                  </td>
                  <td className="p-4 text-sm border-b border-slate-700 space-x-2">
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="bg-blue-500 text-white px-2 py-1 hover:bg-blue-600"
                    >
                      View
                    </Link>
                    <Link
                      to={`/blogs/edit/${blog._id}`}
                      className="bg-yellow-500 text-white px-2 py-1 hover:bg-yellow-600"
                    >
                      Edit
                    </Link>
                    <Link className="bg-red-500 text-white px-2 py-1 hover:bg-red-600">
                      <button onClick={() => handleDelete(blog._id)}>
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </section>
  );
};

export default ManageBlog;
