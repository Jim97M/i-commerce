const router = require("express").Router();
const Order = require("../models/Order");
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('./verifyToken')

//CREATE NEW PRODUCT
router.post("/", verifyTokenAndAdmin, async (req, res) => {

    const newOrder = new Order(req.body);

    try {
        const savedOrders = await newOrder.save();
        res.status(200).json(savedOrders)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true });

        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(error);
    }
})

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Orders.findByIdAndDelete(req.params.id);
        res.status(200).json("Order Deleted Successfully");
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/find/userId", async (req, res) => {
    try {
        const orders = await Order.findOne({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/income", verifyTokenAndAdmin, (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
})

module.exports = router;