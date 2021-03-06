  
const passport = require('passport');

const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const DOCTOR = require('../models/doctor');


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'hospitalapi'
}

// authenticate using passport-jwt
passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){
    
    DOCTOR.findById(jwtPayLoad._id, function(err, doctor){
        if(err){console.log('Error in finding doctor'); return;}

        if(doctor){
            return done(null, doctor);
        } else{
            return done(null, false);
        }
    })

}));

module.exports = passport;