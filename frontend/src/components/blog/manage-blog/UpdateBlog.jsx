import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../add-blog/InputField";
import TextAreaField from "../add-blog/TextAreaField";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const UpdateBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const blogData = {
      title: data.title || blog.title,
      description: data.description || blog.description,
      image: data.image || blog.image,
      author: {
        name: data.authorName || blog.author.name,
        image: data.authorImage || blog.author.image,
      },
    };
    console.log(blogData);

    try {
      const res = await axios.put(
        `http://localhost:5000/blogs/${id}`,
        blogData
      );
      console.log(res.data);
      setTimeout(() => {
        navigate(`/manageblog`)
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

 useEffect(() => {
     (async () => {
      const res = await axios.get(`http://localhost:5000/blogs/${id}`)
       const data = res.data.blog
       setBlog(data)
     })();
 }, []);
  console.log(blog)


  return (
    <div className="container max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-2xl font-bold mb-6">Update Blog</h2>

      {/* form */}
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white max-w-3xl p-6 rounded-lg shadow-md space-y-4"
        >
          <InputField
            label="Blog Title"
            id="title"
            type="text"
            register={register("title")}
            placeholder="Blog Title"
          />

          {/* text-are */}
          <TextAreaField
            label="Blog Description"
            id="description"
            type="text"
            register={register("description")}
            placeholder="Blog Description"
          />

          <InputField
            label="Author Name"
            id="authorName"
            type="text"
            placeholder="Author Name"
            register={register("authorName")}
          />
          <InputField
            label="Author Image URL"
            id="authorImage"
            type="url"
            register={register("authorImage")}
            placeholder="Author Image URL"
          />
          <InputField
            label="Blog Image URL"
            id="image"
            type="url"
            register={register("image")}
            placeholder="Blog Image URL"
          />

          <div>
            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
