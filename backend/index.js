require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConfig = require("./dbConfig/db");
const port = process.env.PORT || 3000;
const blogRoutes = require("./src/routes/blogRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

dbConfig();

app.use("/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});


