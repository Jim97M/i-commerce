const router = require("express").Router();
const Cart = require('../models/Cart');
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('./verifyToken')

//CREATE NEW Cart
router.post("/", verifyToken, async (req, res) => {

    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true });

        res.status(200).json(updatedCart)
    } catch (err) {
        res.status(500).json(error);
    }
})

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("User Deleted Successfully");
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/find/userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err)
    }
})



router.get("/", verifyTokenAndAdmin, (req, res) => {
    try {
        const cart = Cart.find();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;