const profile = require('../models/Profile');
const bcryptjs = require('bcryptjs');
const passport = require('passport');
var localStrategy = require('passport-local').Strategy;

module.exports = function(passport){
    passport.use(new localStrategy({usernameField: 'email'},(email, password, done) => {
        profile.findOne({ email: email}, (err, data) => {
            if(err) throw err;
            if(!data){
                return done(null, false, {message: "User Doesn't Exist!"});
            }
            bcryptjs.compare(password, data.password, (err, match) => {
                if(err){
                    return done(null, false);
                }
                if(!match){
                    return done(null, false, {message: "Password Doesn't match"})
                }
                if(match){
                    return done(null, data);
                }
            })
        })
    }));


    // passport.serializeUser(profile.serializeUser());

    // passport.deserializeUser(function(id, done){
    //     profile.findById(id, function(err, user){
    //         done(err, user);
    //     });
    // });

}