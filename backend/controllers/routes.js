const express = require('express');
const router = express.Router();
const profile = require('../models/Profile');
const passport = require('passport');
const bcryptjs = require('bcryptjs');
require('./passportLocal')(passport);
require('./googleAuth')(passport);
const userRoutes = require('./accountRoutes');

function checkAuth(req, res, next){
    if(req.isAuthenticated){
       res.render('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
       next();
    }else{
        req.flash('error_messages', 'Please Login to Continue!');
        res.redirect('/login');}
    }

router.get('/login', (req, res) => {
    res.render("login", {csrfToken: req.csrfToken});
});

router.get('/signup', (req, res) => {
    res.render("signup", {csrfToken: req.csrfToken});
});

router.post('/signup', (req, res) => {
    //Get all user input
    const {email, username, password, confirmpassword} = req.body;
    if(!email || !username || !password ||confirmpassword){
        res.render("signup", {err: "Fill all Fields", csrfToken: req.csrfToken() });
    }else if(password != confirmpassword){
        res.render("signup",{err: "Passwords Don't Match!", csrfToken: req.csrfToken()});
    }else{
        profile.findOne({$or: [{email: email}, {username: username}]}, function(err, data){
            if(err) throw err;
            if(data){
                res.render("signup",{err: "User already exists!", csrfToken: req.csrfToken()});
            }else{
                bcryptjs.getSalt(12, (err, salt) => {
                    if(err) throw err;
                    //Save user in db
                    bcryptjs.hash(password, salt, (err, hash) => {
                    profile({
                        username: username,
                        email: email,
                        password: hash,
                        googleId: null,
                        provider: 'email',
                    }).save((err, data) => {
                        //If err redirect
                        if (err) throw err;
                        res.redirect('/login');
                    });
                })
            });
            }
        });
    }
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/profile',
        failureFlash: true,
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy(function(err){
        res.redirect('/');
    });
});

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email',]}));

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login'}), (req, res) => {
    res.redirect('/profile');
});

router.get('/profile', checkAuth, (req, res) => {
   //Adding a new parameter for checking verification
   res.render('profile', {username: req.profile.username, verified: req.profile.isVerified});

});

router.use(userRoutes);
module.exports = router;


