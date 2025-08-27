const express = require("express");
const blogs = require("../model/blogModel");

const router = express.Router();

// ========= get all blogs
router.get("/", async (req, res) => {
  try {
    const blog = await blogs.find().sort({ createdAt: -1 });
    res.status(200).send({ message: "Data fetched successfully", blog });
  } catch (error) {
    console.error("Error Data fetching", error);
    res.status(500).send({ message: "Error Data fetching" });
  }
});

// ========== create a blog
router.post("/add-blog", async (req, res) => {
  try {
    const newBlog = new blogs({
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
});

// ========== get a single blog by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogs.findById(id);
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
});

// ========= delete a single blog
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBlog = await blogs.findByIdAndDelete(id);
    if (!deleteBlog) {
      return res.status(404).send({ message: "Blog not found for delete" });
    }
    res.status(200).send({ message: "Blog deleted successfully", deleteBlog });
  } catch (error) {
    console.error("Blog delete failed", error);
    res.status(500).send({ message: "Blog delete failed" });
  }
});

module.exports = router;
