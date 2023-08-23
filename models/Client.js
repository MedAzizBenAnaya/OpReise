const  mongoose = require('mongoose');

const Schema = mongoose.Schema;



const clientSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String


}, {timestamps: true})

const Client = mongoose.model('Client', clientSchema);


module.exports = Client;