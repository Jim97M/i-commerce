const router = require('express').Router();
const { findByIdAndDelete } = require('../models/User');
const User = require('../models/User');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");


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
        res.status(200).json("User Deleted");
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/find/:id', verifyTokenAndAdmin, (res, req) => {
    try {
        const user = User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status()
    }
})



module.exports = router;
