const Client = require('../models/Client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if (err) {
            res.json({
                error : err
            })
        }

        let client = new Client ({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })

        client.save()
        .then( client => {
            res.json({
               message: "we have new boiiiiiie" 
            })
        }).catch(error => {
            res.json({
                message: "we couldn't add him he is too fat"
            })

        })

    })

};

const login = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    

    Client.findOne({$or: [{email:username}, {phone:username}]})
    .then(client => {
        
        if (client) {


            bcrypt.compare(password, client.password, function(err, result) {
                if (err) {
                    res.json({
                        message: err
                    })
                }
                if(result) {
                    console.log("user in")

                    let token = jwt.sign({name: client.name}, 'SEXY007', {expiresIn: '1h'})

                    res.json({
                        message: 'u logged in bruuudaaa',
                        token
                    })
                } else{
                    res.json({
                        message: "identify your self bitch!!!!"
                    })
                }
            })

        } else {
            console.log("user not in")

            res.json({
                message: "identify your self bitch!!"
            })
        }
    })

};

module.exports = { register, login };



