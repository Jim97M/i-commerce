const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const resetToken = require('../models/resetToken');
const profile = require('../models/Profile');
const mailer = require('./sendMail');
const bcrypt = require('bcryptjs');
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
    
});


router.get('/user/verifyemail', async (req, res) => {
    const token = req.query.token;
    //Check if token exists
    //Just send and error
    if(!token){
        var check = await resetToken.findOne({ token:token});
        if(check){
            //If Token exists
            //Set Property of isVerified to true for the user
            var userData = await profile.findOne({email: check.email});
            userData.isVerified = true;
            await userData.save();
            //Delete the user token now itself
            await resetToken.findOneAndDelete({token: token});
            res.redirect('/profile');
        }else{
            req.render('profile', {username: req.profile.username, verified: req.profile.isVerified, error:"Invalid Token, Token Has Exipired" });
        }
    }else{
        //Doesn't Have a Token Redirect to profile page
        res.redirect('/profile');
    }

});

router.post('/user/forgot-password', async(req, res) => {
     const {email} = req.body;
     //Check if email exists
     var userData = await profile.findOne({email: email});
     console.log(userData);

     if(userData){
         if(userData.provider == 'google'){
             res.render('forgotPassword.js', {csrfToken: req.csrfToken(), msg: 'User exists with google account. Try resetting your google account'});
         }else{
             //User exists and not auth by google
             //Generate Token
             var token = crypto.randomBytes(32).toString('hex');
             //Add token to the database
             await resetToken({token: token, email: email}).save();
            //Send an email for verification
            mailer.sendVerifyEmail(email, token);
            res.render('forgotPassword.js', {csrfToken: req.csrfToken(), msg: "Reset link sent via email, check email to reset please!", type: 'success'});
         }
     }else{
         res.render('forgotPassword.js', {csrfToken: req.csrfToken(), msg: "Email Does Not Exist!!", type: 'danger'});
     }
});


router.get('/user/reset-password', async(req, res) => {
    const token = req.query.token;
    if(token){
        var check = await resetToken.findOne({token: token});
        if(check){
            //Token Verified, Send reset token to true, this will render form to reset password, sending token too to grab email
            res.render('forgotPassword.js', {csrfToken: req.csrfToken()});
        }else{
            res.render('forgotPassword.js', {csrfToken: req.csrfToken(), msg: "Reset Token Unavailable", type: 'danger'} );
        }
    }else{
        //Token Unavailable
        res.redirect('/login');
    }
});

router.post('user/reset-password', async(req, res) => {
    const {password, password1, email} = req.body;
    console.log(password);
    console.log(password1);
    if(!password || !password1 || email){
        res.render('forgotPassword.js', {csrfToken: req.csrfToken(), reset: true, err: "Passwords Don't Match!", email:email });
    }else{
        //Encrypt the password
        const salt = await bcrypt.getSalt(12);
          if(salt){
           const hash = await bcrypt.hash(password, email);
          await profile.findOneAndUpdate({email: email}, {$set:{password: hash} });
          res.redirect('/login');
        }else{
            res.render('forgotPassword.js', {csrfToken: req.csrfToken(), reset: true, err: "Unexpected Error Try Again", email: email});
        }

    }
})

module.exports = router;