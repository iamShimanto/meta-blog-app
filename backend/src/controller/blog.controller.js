const Blog = require("../model/blogModel");

// get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blog = await Blog.find().sort({ createdAt: -1 });
    res.status(200).send({ message: "Data fetched successfully", blog });
  } catch (error) {
    console.error("Error Data fetching", error);
    res.status(500).send({ message: "Error Data fetching" });
  }
};

//  create a new blog
const createNewBlog = async (req, res) => {
  try {
    const newBlog = new Blog({
      ...req.body,
    });
    const blog = await newBlog.save();
    res.status(200).json({
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    console.error("Error creating a new blog", error);
    res.status(500).send({ message: "Error creating a new blog" });
  }
};

// === get Blog By Id
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).send({ message: "Blog not found" });
    }
    res.status(200).send({
      message: "Data fetched successfully!",
      blog,
    });
  } catch (error) {
    console.error("Error a Data fetching", error);
    res.status(500).send({ message: "Error a Data fetching" });
  }
};

// delete blog by id
const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBlog = await Blog.findByIdAndDelete(id);
    if (!deleteBlog) {
      return res.status(404).send({ message: "Blog not found for delete" });
    }
    res.status(200).send({ message: "Blog deleted successfully", deleteBlog });
  } catch (error) {
    console.error("Blog delete failed", error);
    res.status(500).send({ message: "Blog delete failed" });
  }
};

// update a blog by id
const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBlog) {
      res.status(404).send({ message: "Blog not found" });
    }
    res
      .status(200)
      .send({ message: "blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error("Blog update failed", error);
    res.status(500).send({ message: "Blog update failed" });
  }
};

module.exports = {
  getAllBlogs,
  createNewBlog,
  getBlogById,
  deleteBlogById,
  updateBlogById,
};
