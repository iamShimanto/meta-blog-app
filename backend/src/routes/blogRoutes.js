const express = require("express");
const blogs = require("../model/blogModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const blog = await blogs.find().sort({ createdAt : -1});
    res.status(200).send({ message: "Data fetched successfully", blog });
  } catch (error) {
    console.error("Error Data fetching", error);
    res.status(500).send({ message: "Error Data fetching" });
  }
});

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

module.exports = router;
