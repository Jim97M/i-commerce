var GoogleStrategy = require('passport-google-oauth20').Strategy;
const profile = require('../models/Profile');
const clientId = require('../config/googleData').clientId;
const clientSecret = require('../config/googleData').clientSecret;

module.exports = function(passport){
    passport.use(new GoogleStrategy({
        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: "http://localhost:8000/google/callback"
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile.emails[0].value);

        //Find if a user exist with this email or not
        profile.findOne({email: profile.emails[0].value}).then((data) => {
            if(data){
                //user exists
                //update data
                //I am skipping that part here, may update later
                return done(null, data);
            } else {
                //create a user
                user({
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id,
                    password: null,
                    provider: 'google',
                    isVerified: true
                }).save(function(err, data) {
                    return done(null, data);
                });
            }
        });
    }
    ));
    
    // passport.serializerUser(function (done, profile) {
    //     done(null, profile.id);
    // });

    // passport.deserializeUser(function(id, done){
    //     profile.findById(id, function(err, user){
    //       done(err, user);
    //     });
    // });
}