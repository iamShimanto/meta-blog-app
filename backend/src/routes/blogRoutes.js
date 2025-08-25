const express = require("express");
const blogs = require("../model/blogModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is blog page");
});

router.post("/add-blog", async (req, res) => {
  const newBlog = new blogs({
    ...req.body,
  });
  const blog = await newBlog.save();
  res.status(200).json({
    message: "Blog created successfully",
    blog,
  });
});

module.exports = router;
