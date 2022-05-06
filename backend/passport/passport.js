
const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "242417948931-ekbt3n4lbg27nhjctuq4b8frho244425.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8001/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

module.exports = passport