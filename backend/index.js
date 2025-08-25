require("dotenv").config();
const express = require("express");
const dbConfig = require("./dbConfig/db");
const app = express();
const port = process.env.PORT || 3000;
const blogRoutes = require("./src/routes/blogRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConfig();

app.use("/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
