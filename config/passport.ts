import passport = require('passport');
import mongoose = require('mongoose');
let LocalStrategy = require('passport-local').Strategy;
let User:any = mongoose.model('User');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new LocalStrategy({usernameField: 'email'}, function (username, password, done) {
    User.findOne({ email: username }, function(err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, { message: 'Incorrect email.'});
        }
        if (!user.validatePassword(password)) {
            return done(null, false, { message: 'Password does not match'});
        }
        return done(null, user);
    });
}));

