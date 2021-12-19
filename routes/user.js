const router = require("express").Router();
const User = require("../model/user");
const {verifyToken} = require("./verifyToken");
router.get("/find/:id", verifyToken, async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get("/", verifyToken, async (req, res) => {
    const query = req.query.new;
    try {
      const user = query
        ? await User.find().sort({ _id: -1 }).limit(1)
        : await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  