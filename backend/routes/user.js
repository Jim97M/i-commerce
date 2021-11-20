const router = require('express').Router();
const { verifyToken } = require("./verifyToken");



router.put(":/id", verifyToken, (req, res) => {
    
});

module.exports = router;