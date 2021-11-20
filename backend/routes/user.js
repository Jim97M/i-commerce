const router = require('express').Router();
const { findByIdAndUpdate } = require('../models/User');
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");



router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.JWT_SEC
        ).toString()
    }
    try {
        const updatedUser = await findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;