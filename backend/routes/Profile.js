const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} = require('./verifyToken')

router.post("/profile", async (req, res)  => {
    const profile = new Profile(req.body);

    try{
        const newProfile = await profile.save();
        res.status(200).json(newProfile);
    }catch(err){
        res.status(500).json(err);
    }

})