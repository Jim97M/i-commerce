const mongoose = require("mongoose");
const {MONGO_URI} = process.env

exports.connect =() => {
   mongoose
   .connect(MONGO_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   }).then(() => {
       console.log("Successfully Connected To Database");
   }).catch((error) => {
       console.log("Database Connection Failed. Exiting now .....");
       console.error(error);
       process.exit(1);
   });
};
