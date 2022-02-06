const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const passport = require('passport');
const csrf = require('csurf');
const flash = require('connect-flash');
var MemoryStore = require('memorystore')(expressSession);

const passRoute = require("./controllers/routes");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection Successful"))
  .catch((err) => {
    console.log(err);
  });

app.use(cookieParser('random'));
app.use(expressSession({
  secret: "random",
  resave: true,
  saveUninitialized: true,
  //Setting the max age to longer duration
  maxAge: 24 * 60 * 60 * 1000,
  store: new MemoryStore(),
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json());
app.use(flash());
app.use(function(req, res, next){
  res.locals.success_messages = req.flash('success_messages');
  res.locals.error_messages = req.flash('error_messages');
  res.locals.error = req.flash('error');
  next();
});
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/cart", cartRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/pass", passRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Started");
});
