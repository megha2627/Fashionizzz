const express = require("express");
const mongoose = require("mongoose");
const app = express();
var cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
//console.log(process.env.DB_URL);
app.use(express.json({ limit: "25mb" }))
app.use(express.urlencoded({ limit: "25mb" }));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}));

const authRoutes = require('./src/users/user.route');
const productRoutes=require('./src/products/products.route');
const reviewRoutes=require('./src/reviews/reviews.router');
app.use('/api/auth', authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);

main()
  .then(() => console.log("mongo db is connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    process.env.DB_URL
  );

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
