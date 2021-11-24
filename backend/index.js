const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")

dotenv.config()

mongoose.connect(process.env.MONGO_URL
).then(() => console.log("Connection Successful"))
    .catch((err) => {
        console.log(err)
    })

app.get("/api/v1/test", () => {
    console.log("First Endpoint");
})

app.use(express.json());
app.use("/api/v1/user", userRoute);

app.use("/api/v1/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend Started')
})