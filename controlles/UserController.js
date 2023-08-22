const User = require('../models/User')

//show the list of Users 

const index = (req, res, next) => {

    User.find()
    .then(response => {
        res.json({response})
    })
    .catch(error => {
        res.json({
            message: 'error bruder'
        })
    })
}

const show = (req, res, next) => {

    let userID = req.body.userID

    User.findById(userID)
    .then(response => {
        res.json({response})
    })
    .catch(error => {
        res.json({
            message: 'error bruder'
        })
    })
}

const store = (req, res, next) => {
    let user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user.save()
    .then(response => {
        res.json({message: 'user joined the cult'})
    })
    .catch(error => {
        res.json({
            message: 'error bruder'
        })
    })
}

const updata = (req, res, next) => {

    let userID = req.body.userID

    let updatedData = {
        email: req.body.email,
        password: req.body.password
    }

    User.findByIdAndUpdate(userID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'the user is freshed up and updated'
        })
    }).catch(error => {
        res.json({
            message: 'error bruder'
        })
    })
}

const deleteUser = (req, res, next) => {
    let userID = req.body.userID

    User.findByIdAndRemove(userID)
    .then(() => {
        res.json({
            message: 'the user got kicked out and deleted'
        })
    }).catch(error => {
        res.json({
            message: 'error bruder'
        })
    })
 
}

module.exports = {
    index, show, store, updata, deleteUser
}