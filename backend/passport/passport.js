
const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "242417948931-lofu2lbppesm1s7sei3i6k7c1v9o554n.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

module.exports = passport