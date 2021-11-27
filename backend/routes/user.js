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

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }

});

// router.get('/', verifyTokenAndAdmin, async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

router.get('/', verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const user = query
            ? await User.find().sort({ _id: -1 }).limit(1)
            : await User.find();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Get Users Visit Stats In The Past Year
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            //Match createdAt field with Greater Than or Equal To Function
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },

                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;
