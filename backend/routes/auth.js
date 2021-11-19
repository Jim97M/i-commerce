const User = require("../models/User");

const router = require("express").Router();
const CryptoJS = require("crypto-js");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    })

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//LOGIN
router.post("/login", () => {
    const existUser = new User({
        email: req.user.email,
        password: req.user.password
    })
})

module.exports = router;