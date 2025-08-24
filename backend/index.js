require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
}

main()
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
