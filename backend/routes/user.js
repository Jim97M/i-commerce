const router = require('express').Router();
const { findByIdAndDelete } = require('../models/User');
const User = require('../models/User');
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");


//Update Method
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.JWT_SEC
        ).toString()
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err)
    }
});


//Delete Method
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        next();
        res.status(201).json("User Deleted");
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;