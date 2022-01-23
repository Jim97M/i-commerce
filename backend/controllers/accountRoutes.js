const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const resetToken = require('../models/resetToken');
const profile = require('../models/Profile');
const mailer = require('./sendMail');
const bcryptjs = require('bcryptjs');

function checkAuth(req, res, next){
    if(req.isAuthenticated()){
        res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
        next();
    } else {
        req.flash('error_message', 'Please Login To Continue!');
        res.redirect('/login');
    }
}

//Adding The CheckAuth Middleware to make sure that
//Only Authenticated users can send emails
router.get('/user/send-verification-email', checkAuth, async(req, res) => {
    //Check if user is google or already verified
    if(req.profile.isVerified || req.profile.provider == 'google'){
        //Already Verified Or Google User
       //Since We won't show any such option in the UI
            //Most Probably this is being called by mistake or can be an attack
            //Simply redirect to profile
            res.redirect('/profile');
        } else {
            //Generate A Token
            var token = crypto.randomBytes(32).toString('hex');
            //Add that to database
            await resetToken({token: token, email: req.user.email}).save();
            //Send an Email For Verification
            mailer.sendVerifyEmail(req.user.email, token);
            res.sender('profile', {username: req.profile.username, verified: req.user.isVerified, emailsent: true});
        }
    
})