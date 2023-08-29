
const { raw } = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');


const jwt = require('jsonwebtoken');

const register = (req, res, next) =>{

    bcrypt.hash(req.body.password, 10, function(err, hashedPassword){
        if (err){
            res.json({
                error : err
            })
        }

        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword
        })

        user.save()
        .then( user => {
            res.json({
                message: "user successfully added to the DB"
            })

        }).catch( error => {
            res.json({
                message: "something wrong happend, user is not added to DB :("
            })
        })
    })

}

const login = (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email:email}).then(user => {
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const token = jwt.sign({username: user.username }, process.env.ACCESS_TOKEN_SECRET);
        res.json({ token });
        next();
    })
}

module.exports = {register, login};