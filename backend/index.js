const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/product");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection Successful"))
  .catch((err) => {
    console.log(err);
  });

app.get("/api/v1/test", () => {
  console.log("First Endpoint");
});
app.use(require("cors")());
app.use(express.json());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", require("cors")(), authRoute);
app.use("/api/v1/product", require("cors")(), productRoute);
app.use("/api/v1/cart", cartRoute);
app.use("/api/v1/order", orderRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Started");
});
