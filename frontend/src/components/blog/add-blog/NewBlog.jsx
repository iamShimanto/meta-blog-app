import React from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import { useForm } from "react-hook-form";
import axios from "axios";

const NewBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const blogData = {
      title: data.title,
      description: data.description,
      image: data.image,
      author: {
        name: data.authorName,
        image: data.authorImage,
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/blogs/add-blog",
        blogData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-2xl font-bold mb-6">Add New Blog</h2>

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
            register={register("title", { required: true })}
            placeholder="Blog Title"
          />

          {/* text-are */}
          <TextAreaField
            label="Blog Description"
            id="description"
            type="text"
            register={register("description", { required: true })}
            placeholder="Blog Description"
          />

          <InputField
            label="Author Name"
            id="authorName"
            type="text"
            placeholder="Author Name"
            register={register("authorName", { required: true })}
          />
          <InputField
            label="Author Image URL"
            id="authorImage"
            type="url"
            register={register("authorImage", { required: true })}
            placeholder="Author Image URL"
          />
          <InputField
            label="Blog Image URL"
            id="image"
            type="url"
            register={register("image", { required: true })}
            placeholder="Blog Image URL"
          />

          <div>
            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
