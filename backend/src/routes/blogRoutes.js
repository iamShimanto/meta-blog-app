const express = require("express");
const blogs = require("../model/blogModel");
const {
  getAllBlogs,
  createNewBlog,
  getBlogById,
  deleteBlogById,
  updateBlogById,
} = require("../controller/blog.controller");

const router = express.Router();

// ========= get all blogs
router.get("/", getAllBlogs);

// ========== create a blog
router.post("/add-blog", createNewBlog);

// ========== get a single blog by id
router.get("/:id", getBlogById);

// ========= delete a single blog
router.delete("/:id", deleteBlogById);

// ========= updata a blog by id
router.put("/:id", updateBlogById);

module.exports = router;
