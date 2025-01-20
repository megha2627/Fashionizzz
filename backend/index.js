const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

main()
  .then(() => console.log("mongo db is connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://meghagupta270505:dMwXYan6SKuT3EP1@lebaba-ecommerce.hclhu.mongodb.net/?retryWrites=true&w=majority&appName=lebaba-ecommerce"
  );

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
